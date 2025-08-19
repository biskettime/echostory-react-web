#!/bin/bash

# EchoStory LLM API Server Startup Script

echo "🚀 Starting EchoStory LLM API Server..."

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install requirements
echo "📥 Installing requirements..."
pip install -r requirements.txt

# Create necessary directories
mkdir -p logs models

# Start the server
echo "🌟 Starting FastAPI server..."
python main.py
