#!/usr/bin/env python3
"""
Test MLX model loading and performance
"""

import sys
import time
from pathlib import Path

# Test if MLX is installed
try:
    import mlx
    import mlx.core as mx
    print(f"✅ MLX installed")
except ImportError as e:
    print(f"❌ MLX not installed: {e}")
    sys.exit(1)

# Test if mlx-lm is installed
try:
    from mlx_lm import load, generate
    print("✅ mlx-lm installed")
except ImportError as e:
    print(f"❌ mlx-lm not installed: {e}")
    sys.exit(1)

# Check model path
model_path = Path(__file__).parent / "models" / "gpt-oss-20b-MLX-8bit"
print(f"📁 Model path: {model_path}")

if not model_path.exists():
    print(f"❌ Model directory does not exist: {model_path}")
    sys.exit(1)

# Check model files
required_files = ["config.json", "tokenizer.json"]
missing_files = []

for file_name in required_files:
    file_path = model_path / file_name
    if file_path.exists():
        print(f"✅ Found: {file_name}")
    else:
        print(f"❌ Missing: {file_name}")
        missing_files.append(file_name)

# List all files in model directory
print("\n📂 Model directory contents:")
total_size = 0
for item in model_path.iterdir():
    if item.is_file():
        size = item.stat().st_size
        total_size += size
        size_str = f"{size / (1024**3):.2f} GB" if size > 1024**3 else f"{size / (1024**2):.2f} MB"
        print(f"  - {item.name} ({size_str})")
    else:
        print(f"  - {item.name}/")

print(f"\n📊 Total model size: {total_size / (1024**3):.2f} GB")

if missing_files:
    print(f"\n⚠️ Some required files are missing. Model may not load properly.")

print("\n🚀 Attempting to load model...")
print("This may take a while for large models...")

try:
    start_time = time.time()
    model, tokenizer = load(str(model_path))
    load_time = time.time() - start_time
    print(f"✅ Model loaded successfully in {load_time:.2f} seconds!")
    
    # Test generation with performance metrics
    print("\n🧪 Testing generation performance...")
    
    # Warm-up run
    prompt = "Hello"
    _ = generate(model, tokenizer, prompt=prompt, max_tokens=10, verbose=False)
    
    # Performance test
    test_prompts = [
        "Write a short story about a robot:",
        "Explain quantum computing in simple terms:",
        "What is the meaning of life?"
    ]
    
    total_tokens = 0
    total_time = 0
    
    for i, prompt in enumerate(test_prompts, 1):
        print(f"\nTest {i}: {prompt[:50]}...")
        
        start_time = time.time()
        response = generate(
            model, 
            tokenizer, 
            prompt=prompt, 
            max_tokens=100,
            temp=0.7,
            verbose=False
        )
        gen_time = time.time() - start_time
        
        # Count tokens (approximate)
        response_tokens = len(response.split())
        total_tokens += response_tokens
        total_time += gen_time
        
        tokens_per_sec = response_tokens / gen_time if gen_time > 0 else 0
        
        print(f"  Generated {response_tokens} tokens in {gen_time:.2f}s")
        print(f"  Speed: {tokens_per_sec:.1f} tokens/second")
        print(f"  Response preview: {response[:100]}...")
    
    # Overall performance
    print(f"\n📈 Overall Performance:")
    print(f"  Total tokens generated: {total_tokens}")
    print(f"  Total time: {total_time:.2f} seconds")
    print(f"  Average speed: {total_tokens/total_time:.1f} tokens/second")
    
    # Memory usage
    import psutil
    process = psutil.Process()
    memory_info = process.memory_info()
    print(f"\n💾 Memory Usage:")
    print(f"  RSS: {memory_info.rss / (1024**3):.2f} GB")
    print(f"  VMS: {memory_info.vms / (1024**3):.2f} GB")
    
except Exception as e:
    print(f"❌ Failed to load model: {e}")
    import traceback
    traceback.print_exc()