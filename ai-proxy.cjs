const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 8000;
const BACKYARD_PORT = 13333;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'AI Proxy server running', 
    backyard_port: BACKYARD_PORT,
    message: 'Proxying to Backyard AI' 
  });
});

// Models endpoint
app.get('/v1/models', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:${BACKYARD_PORT}/v1/models`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching models:', error.message);
    res.json({
      object: 'list',
      data: [{
        id: 'backyard-model',
        object: 'model',
        created: Date.now(),
        owned_by: 'backyard'
      }]
    });
  }
});

// Chat completions endpoint
app.post('/v1/chat/completions', async (req, res) => {
  console.log('=== PROXY RECEIVED REQUEST ===');
  console.log('From:', req.headers.origin || req.headers.referer || 'unknown');
  console.log('Messages:', JSON.stringify(req.body.messages));
  console.log('Model requested:', req.body.model);
  
  try {
    // Get the model from Backyard AI
    const modelsResponse = await axios.get(`http://localhost:${BACKYARD_PORT}/v1/models`);
    const modelId = modelsResponse.data.data[0]?.id || 'default';
    console.log('Using Backyard AI model:', modelId);
    
    // Forward to Backyard AI with the correct model
    const requestPayload = {
      ...req.body,
      model: modelId,
      temperature: req.body.temperature || 0.7,
      max_tokens: req.body.max_tokens || 1024
    };
    
    console.log('Forwarding to Backyard AI with payload:', JSON.stringify(requestPayload));
    
    const response = await axios.post(
      `http://localhost:${BACKYARD_PORT}/v1/chat/completions`,
      requestPayload,
      {
        timeout: 60000,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('=== BACKYARD AI RESPONSE ===');
    console.log('Status:', response.status);
    console.log('Response content:', JSON.stringify(response.data).substring(0, 500));
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Backyard AI:', error.message);
    
    // Detect language from user message
    const userMessage = req.body.messages?.[req.body.messages.length - 1]?.content || '';
    const isKorean = /[\u3130-\u318F\uAC00-\uD7A3]/.test(userMessage);
    
    // Fallback response
    const fallbackContent = isKorean
      ? '*잠시 생각에 잠긴다* "미안... 잠시 정신이 멍해졌어."'
      : '*pauses thoughtfully* "Sorry... I spaced out for a moment."';
    
    res.json({
      id: 'chatcmpl-fallback',
      object: 'chat.completion',
      created: Date.now(),
      model: 'fallback',
      choices: [{
        index: 0,
        message: {
          role: 'assistant',
          content: fallbackContent
        },
        finish_reason: 'stop'
      }],
      usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
      }
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 AI Proxy server running on http://localhost:${PORT}`);
  console.log(`🎯 Proxying to Backyard AI on port ${BACKYARD_PORT}`);
  console.log(`📝 Endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/v1/models`);
  console.log(`   POST http://localhost:${PORT}/v1/chat/completions`);
});