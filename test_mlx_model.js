/**
 * MLX 모델 테스트 스크립트
 * XML 모델 로더를 통해 MLX 모델을 테스트합니다.
 */

// 브라우저 콘솔에서 실행할 수 있는 테스트 코드
const testMLXModel = async () => {
  console.log('🧪 MLX 모델 테스트 시작...');
  
  try {
    // AI 서비스 가져오기 (전역으로 노출되어 있다고 가정)
    const aiService = window.aiService || (await import('./services/integratedAIService.js')).default;
    
    console.log('1️⃣ XML 설정 로드 중...');
    await aiService.loadXMLModelConfigFromFile('/ai-models.xml');
    
    console.log('2️⃣ 사용 가능한 모델 목록:');
    const models = aiService.getAvailableXMLModels();
    models.forEach(model => {
      console.log(`   - ${model.name} (${model.id}): ${model.type}`);
    });
    
    console.log('3️⃣ MLX 모델로 전환 중...');
    await aiService.switchToXMLModel('mlx-model');
    
    const currentModel = aiService.getCurrentXMLModel();
    console.log('4️⃣ 현재 활성 모델:', currentModel?.config.name);
    
    console.log('5️⃣ 테스트 메시지 전송 중...');
    const storyContext = {
      characterName: 'AI Assistant',
      characterDescription: 'Helpful AI assistant',
      language: 'ko',
      webSelectedLanguage: 'ko'
    };
    
    const chatProfile = {
      nickname: 'Tester',
      userInfo: 'MLX 모델 테스터'
    };
    
    const response = await aiService.chat(
      '안녕하세요! MLX 모델 테스트입니다. 간단한 인사말을 해주세요.',
      storyContext,
      chatProfile,
      0,
      'ko'
    );
    
    console.log('✅ MLX 모델 응답:', response);
    console.log('🎉 MLX 모델 테스트 완료!');
    
    return {
      success: true,
      model: currentModel?.config.name,
      response: response
    };
    
  } catch (error) {
    console.error('❌ MLX 모델 테스트 실패:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// 브라우저 콘솔에서 사용할 수 있도록 전역으로 노출
if (typeof window !== 'undefined') {
  window.testMLXModel = testMLXModel;
  console.log('🔧 MLX 모델 테스트 함수가 준비되었습니다. testMLXModel()을 실행하세요.');
}

export default testMLXModel;


