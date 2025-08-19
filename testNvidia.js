// NVIDIA API Test Script (JavaScript version for direct execution)

// Simple token estimation function
function estimateTokens(text) {
  return Math.ceil(text.length / 4);
}

// Test single request
async function testSingleRequest() {
  const prompt = "Generate a creative story about a robot learning to paint. Include details about colors, emotions, and the creative process. This is a test to measure token processing speed.";
  
  const startTime = Date.now();
  
  try {
    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 512,
        stream: false
      })
    });

    const endTime = Date.now();
    const latency = endTime - startTime;

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error:', response.status, errorData);
      return { success: false, error: errorData };
    }

    const data = await response.json();
    
    const inputTokens = data.usage?.prompt_tokens || estimateTokens(prompt);
    const outputTokens = data.usage?.completion_tokens || estimateTokens(data.choices[0]?.message?.content || '');
    const tokensPerSecond = (outputTokens / (latency / 1000));

    return {
      success: true,
      inputTokens,
      outputTokens,
      tokensPerSecond: Math.round(tokensPerSecond * 100) / 100,
      latency,
      response: data.choices[0]?.message?.content
    };

  } catch (error) {
    console.error('Connection Error:', error);
    return { success: false, error: error.message };
  }
}

// Run comprehensive test
async function runPerformanceTest() {
  console.log('========================================');
  console.log('NVIDIA API 연동 테스트 시작');
  console.log('========================================\n');

  console.log('API 정보:');
  console.log('- API Key: 598c13d5-1af7-4081-88bf-a8287fde9534');
  console.log('- Name: NVIDIABuild-Autogen-66');
  console.log('- Model: meta/llama-3.1-8b-instruct\n');

  const testPrompts = [
    "Write a short poem about technology.",
    "Explain quantum computing in simple terms.",
    "Create a dialogue between two AI assistants discussing the weather.",
    "Generate a list of 10 creative business ideas for 2025.",
    "Describe a futuristic city in vivid detail."
  ];

  const results = [];
  let successCount = 0;
  let totalTokensPerSecond = 0;
  let totalLatency = 0;

  console.log('테스트 진행 중...\n');

  for (let i = 0; i < testPrompts.length; i++) {
    console.log(`테스트 ${i + 1}/${testPrompts.length}: "${testPrompts[i].substring(0, 40)}..."`);
    
    const result = await testSingleRequest();
    
    if (result.success) {
      successCount++;
      totalTokensPerSecond += result.tokensPerSecond;
      totalLatency += result.latency;
      
      console.log(`✅ 성공 - ${result.tokensPerSecond} tokens/sec, ${result.latency}ms`);
      
      results.push({
        testNumber: i + 1,
        prompt: testPrompts[i],
        tokensPerSecond: result.tokensPerSecond,
        latency: result.latency,
        inputTokens: result.inputTokens,
        outputTokens: result.outputTokens,
        success: true
      });
    } else {
      console.log(`❌ 실패 - ${result.error}`);
      results.push({
        testNumber: i + 1,
        prompt: testPrompts[i],
        success: false,
        error: result.error
      });
    }

    // Add delay between requests
    if (i < testPrompts.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('\n========================================');
  console.log('📊 종합 테스트 결과');
  console.log('========================================');
  
  if (successCount > 0) {
    const avgTokensPerSecond = Math.round((totalTokensPerSecond / successCount) * 100) / 100;
    const avgLatency = Math.round(totalLatency / successCount);
    const successRate = (successCount / testPrompts.length) * 100;

    console.log(`\n✅ API 연결 상태: 정상`);
    console.log(`📈 평균 토큰 처리 속도: ${avgTokensPerSecond} tokens/sec`);
    console.log(`⏱️  평균 응답 시간: ${avgLatency}ms`);
    console.log(`📊 테스트 성공률: ${successRate}%`);
    
    console.log('\n개별 테스트 결과:');
    results.forEach(r => {
      if (r.success) {
        console.log(`  테스트 #${r.testNumber}: ${r.tokensPerSecond} tokens/sec, ${r.latency}ms`);
      } else {
        console.log(`  테스트 #${r.testNumber}: 실패`);
      }
    });

    console.log('\n💡 분석:');
    if (avgTokensPerSecond > 100) {
      console.log('- 매우 빠른 토큰 처리 속도 (100+ tokens/sec)');
    } else if (avgTokensPerSecond > 50) {
      console.log('- 빠른 토큰 처리 속도 (50-100 tokens/sec)');
    } else if (avgTokensPerSecond > 20) {
      console.log('- 적절한 토큰 처리 속도 (20-50 tokens/sec)');
    } else {
      console.log('- 느린 토큰 처리 속도 (<20 tokens/sec)');
    }

    if (avgLatency < 1000) {
      console.log('- 우수한 응답 시간 (<1초)');
    } else if (avgLatency < 2000) {
      console.log('- 양호한 응답 시간 (1-2초)');
    } else {
      console.log('- 개선이 필요한 응답 시간 (>2초)');
    }

  } else {
    console.log('\n❌ 모든 테스트 실패');
    console.log('API 연결을 확인해주세요.');
  }

  console.log('\n========================================');
  console.log('테스트 완료!');
  console.log('========================================');
}

// Run the test
runPerformanceTest().catch(error => {
  console.error('테스트 실행 중 오류:', error);
  process.exit(1);
});