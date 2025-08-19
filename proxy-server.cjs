// NVIDIA API Proxy Server
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 8001;

// Load environment variables
require('dotenv').config();

// NVIDIA API configuration
const NVIDIA_CONFIG = {
  baseUrl: 'https://integrate.api.nvidia.com/v1',
  apiToken: process.env.NVIDIA_API_TOKEN || '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',
  model: 'meta/llama-3.1-8b-instruct'
};

// Check if token is configured
if (!process.env.NVIDIA_API_TOKEN) {
  console.warn('⚠️ WARNING: NVIDIA_API_TOKEN not found in environment variables');
  console.warn('⚠️ Using default token. Please set NVIDIA_API_TOKEN in .env file');
}

// Enable CORS for all origins
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'NVIDIA API Proxy' });
});

// Proxy endpoint for NVIDIA API
app.post('/api/chat', async (req, res) => {
  console.log('📨 Received chat request');
  
  try {
    const { messages, temperature = 0.8, max_tokens = 200, top_p = 0.9 } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ 
        error: 'Invalid request: messages array is required' 
      });
    }

    console.log(`🚀 Forwarding to NVIDIA API with ${messages.length} messages`);
    
    const requestBody = {
      model: NVIDIA_CONFIG.model,
      messages: messages,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: 0.1,
      presence_penalty: 0.1,
      stream: false
    };

    const response = await fetch(`${NVIDIA_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_CONFIG.apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('❌ NVIDIA API Error:', response.status, responseText);
      return res.status(response.status).json({ 
        error: `NVIDIA API Error: ${response.status}`,
        details: responseText
      });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Failed to parse NVIDIA response:', parseError);
      return res.status(500).json({ 
        error: 'Failed to parse NVIDIA API response',
        details: responseText
      });
    }

    if (!data.choices || data.choices.length === 0) {
      console.error('❌ No choices in NVIDIA response');
      return res.status(500).json({ 
        error: 'No response from NVIDIA API' 
      });
    }

    const content = data.choices[0].message?.content;
    if (!content) {
      console.error('❌ Empty content in NVIDIA response');
      return res.status(500).json({ 
        error: 'Empty response from NVIDIA API' 
      });
    }

    console.log(`✅ NVIDIA API responded successfully (${content.length} chars)`);
    
    // Return response in expected format
    res.json({
      success: true,
      content: content,
      usage: data.usage
    });

  } catch (error) {
    console.error('❌ Proxy server error:', error);
    res.status(500).json({ 
      error: 'Internal proxy server error',
      message: error.message 
    });
  }
});

// Test endpoint
app.post('/api/test', async (req, res) => {
  console.log('🧪 Testing NVIDIA API connection...');
  
  try {
    const testMessage = {
      model: NVIDIA_CONFIG.model,
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

    const response = await fetch(`${NVIDIA_CONFIG.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_CONFIG.apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testMessage)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ NVIDIA API test failed:', errorText);
      return res.status(response.status).json({ 
        success: false,
        error: errorText 
      });
    }

    const data = await response.json();
    console.log('✅ NVIDIA API test successful');
    
    res.json({
      success: true,
      response: data.choices[0]?.message?.content || 'Test successful but no content',
      model: NVIDIA_CONFIG.model
    });

  } catch (error) {
    console.error('❌ Test failed:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 NVIDIA API Proxy Server running on http://localhost:${PORT}`);
  console.log(`📍 Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`🔧 Health check: http://localhost:${PORT}/health`);
});