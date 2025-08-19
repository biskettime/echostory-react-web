// NVIDIA API Test Script
import { nvidiaService } from './services/nvidiaService';

async function testNVIDIAAPI() {
  console.log('========================================');
  console.log('NVIDIA API 연동 테스트 시작');
  console.log('========================================\n');

  console.log('API 정보:');
  console.log('- API Key: 598c13d5-1af7-4081-88bf-a8287fde9534');
  console.log('- Name: NVIDIABuild-Autogen-66');
  console.log('- Model: meta/llama-3.1-8b-instruct\n');

  // 1. 단일 테스트
  console.log('1. 단일 토큰 처리 테스트');
  console.log('----------------------------------------');
  
  const singleTest = await nvidiaService.testTokenProcessing();
  
  if (singleTest.success && singleTest.metrics) {
    console.log('✅ 테스트 성공!');
    console.log(`- 입력 토큰: ${singleTest.metrics.inputTokens}`);
    console.log(`- 출력 토큰: ${singleTest.metrics.outputTokens}`);
    console.log(`- 초당 토큰 처리량: ${singleTest.metrics.tokensPerSecond} tokens/sec`);
    console.log(`- 응답 시간: ${singleTest.metrics.latency}ms`);
  } else {
    console.log('❌ 테스트 실패:', singleTest.error);
  }

  console.log('\n2. 종합 성능 테스트 (5개 프롬프트)');
  console.log('----------------------------------------');
  
  const performanceTest = await nvidiaService.runPerformanceTest();
  
  console.log('\n📊 종합 테스트 결과:');
  console.log('========================================');
  console.log(`평균 초당 토큰 처리량: ${performanceTest.averageTokensPerSecond} tokens/sec`);
  console.log(`평균 응답 시간: ${performanceTest.averageLatency}ms`);
  console.log(`성공률: ${performanceTest.successRate}%`);
  
  console.log('\n개별 테스트 결과:');
  performanceTest.testResults.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} 테스트 #${result.testNumber}: ${result.tokensPerSecond} tokens/sec, ${result.latency}ms`);
  });

  console.log('\n3. 스토리 생성 테스트');
  console.log('----------------------------------------');
  
  const storyTest = await nvidiaService.generateStoryContent(
    'Create a romantic story opening about two people meeting in a coffee shop on a rainy day.',
    256
  );
  
  if (storyTest.success) {
    console.log('✅ 스토리 생성 성공!');
    console.log('생성된 내용 (처음 200자):');
    console.log(storyTest.content?.substring(0, 200) + '...');
  } else {
    console.log('❌ 스토리 생성 실패:', storyTest.error);
  }

  console.log('\n========================================');
  console.log('테스트 완료!');
  console.log('========================================');
  
  // Return summary for reporting
  return {
    apiConnected: singleTest.success,
    averageTokensPerSecond: performanceTest.averageTokensPerSecond,
    averageLatency: performanceTest.averageLatency,
    successRate: performanceTest.successRate,
    canGenerateContent: storyTest.success
  };
}

// Run test if executed directly
if (require.main === module) {
  testNVIDIAAPI().then(summary => {
    console.log('\n📋 최종 보고서:');
    console.log('----------------------------------------');
    console.log(`API 연결 상태: ${summary.apiConnected ? '✅ 정상' : '❌ 실패'}`);
    console.log(`평균 토큰 처리 속도: ${summary.averageTokensPerSecond} tokens/sec`);
    console.log(`평균 응답 시간: ${summary.averageLatency}ms`);
    console.log(`테스트 성공률: ${summary.successRate}%`);
    console.log(`콘텐츠 생성 가능: ${summary.canGenerateContent ? '✅ 가능' : '❌ 불가'}`);
    
    process.exit(summary.apiConnected ? 0 : 1);
  }).catch(error => {
    console.error('테스트 중 오류 발생:', error);
    process.exit(1);
  });
}

export { testNVIDIAAPI };