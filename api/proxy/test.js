// Test endpoint for Vercel
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const NVIDIA_API_TOKEN = process.env.NVIDIA_API_TOKEN;
    
    if (!NVIDIA_API_TOKEN) {
      return res.status(500).json({ 
        success: false,
        error: 'NVIDIA API token not configured',
        details: 'Please set NVIDIA_API_TOKEN environment variable in Vercel dashboard'
      });
    }
    const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

    const testMessage = {
      model: 'meta/llama-3.1-8b-instruct',
      messages: [
        {
          role: 'user',
          content: 'Say hello in one sentence.'
        }
      ],
      temperature: 0.7,
      max_tokens: 50,
      stream: false
    };

    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testMessage)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('NVIDIA API test failed:', errorText);
      return res.status(response.status).json({ 
        success: false,
        error: errorText 
      });
    }

    const data = await response.json();
    
    return res.status(200).json({
      success: true,
      response: data.choices[0]?.message?.content || 'Test successful but no content',
      model: 'meta/llama-3.1-8b-instruct'
    });

  } catch (error) {
    console.error('Test failed:', error);
    return res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
}