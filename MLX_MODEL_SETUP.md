# MLX Model Setup Guide

## Model Information
- **Model**: gpt-oss-20b-MLX-8bit
- **Source**: https://huggingface.co/lmstudio-community/gpt-oss-20b-MLX-8bit
- **Type**: MLX (Apple Silicon optimized)
- **Size**: ~20B parameters, 8-bit quantized

## Installation Steps

### 1. Download the Model

#### Option A: Using LM Studio
1. Open LM Studio
2. Go to the Models tab
3. Search for `gpt-oss-20b-MLX-8bit`
4. Download the model

#### Option B: Manual Download
```bash
# Create models directory
mkdir -p ~/Documents/2025\ Project/echostory/ReactFront/echostory-react-web/models

# Download using git-lfs
git lfs install
git clone https://huggingface.co/lmstudio-community/gpt-oss-20b-MLX-8bit

# Or download specific files using wget/curl
wget https://huggingface.co/lmstudio-community/gpt-oss-20b-MLX-8bit/resolve/main/model.safetensors
```

### 2. Configure LM Studio

1. Open LM Studio
2. Load the model: `gpt-oss-20b-MLX-8bit`
3. Start the server on port 1234
4. Verify the server is running: http://localhost:1234/v1/models

### 3. Test the Connection

```bash
# Test the model endpoint
curl http://localhost:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss-20b-mlx-8bit",
    "messages": [{"role": "user", "content": "Hello"}],
    "temperature": 0.7
  }'
```

## Integration with EchoStory

The app is configured to use XMLHttpRequest for better compatibility with local models:

1. **AI Service**: `services/integratedAIService.ts` uses XMLHttpRequest instead of fetch
2. **Proxy**: Vite proxy forwards `/v1/*` requests to `http://localhost:1234`
3. **Environment**: `.env` file configured for MLX model

## Troubleshooting

### Model not loading
- Ensure you have enough RAM (20B model requires ~16GB+ RAM)
- Check LM Studio console for errors
- Verify model path is correct

### Connection issues
- Check if LM Studio server is running on port 1234
- Verify Vite proxy is configured correctly
- Check browser console for CORS errors

### Performance
- MLX models are optimized for Apple Silicon
- Use Metal acceleration if available
- Consider reducing context size if slow

## Alternative Models

If the 20B model is too large, consider:
- `gpt-oss-7b-MLX-8bit` - Smaller version
- `llama-3.1-8b-MLX` - Alternative MLX model
- `mistral-7b-MLX` - Lighter weight option