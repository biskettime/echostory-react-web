// Vercel Serverless Function for NVIDIA API
export default async function handler(req, res) {
  // Enable CORS
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
    const { messages, temperature = 0.8, max_tokens = 200, top_p = 0.9 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ 
        error: 'Invalid request: messages array is required' 
      });
    }

    const NVIDIA_API_TOKEN = process.env.NVIDIA_API_TOKEN;
    
    if (!NVIDIA_API_TOKEN) {
      return res.status(500).json({ 
        error: 'NVIDIA API token not configured',
        details: 'Please set NVIDIA_API_TOKEN environment variable in Vercel dashboard'
      });
    }
    const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

    const requestBody = {
      model: 'meta/llama-3.1-8b-instruct',
      messages: messages,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: 0.1,
      presence_penalty: 0.1,
      stream: false
    };

    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('NVIDIA API Error:', response.status, responseText);
      return res.status(response.status).json({ 
        error: `NVIDIA API Error: ${response.status}`,
        details: responseText
      });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse NVIDIA response:', parseError);
      return res.status(500).json({ 
        error: 'Failed to parse NVIDIA API response',
        details: responseText
      });
    }

    if (!data.choices || data.choices.length === 0) {
      return res.status(500).json({ 
        error: 'No response from NVIDIA API' 
      });
    }

    const content = data.choices[0].message?.content;
    if (!content) {
      return res.status(500).json({ 
        error: 'Empty response from NVIDIA API' 
      });
    }

    return res.status(200).json({
      success: true,
      content: content,
      usage: data.usage
    });

  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}