import { t, getCurrentLanguage } from './i18n';

// 캐릭터 이름 번역 매핑
const characterNameMapping: { [key: string]: string } = {
  // 기본 캐릭터들
  'Minjun': 'characters.minjun',
  'Jihoon': 'characters.jihoon', 
  'Soyeon': 'characters.soyeon',
  'Yuna': 'characters.yuna',
  'Haruka': 'characters.haruka',
  'Taehyun': 'characters.taehyun',
  'Hyunwoo': 'characters.hyunwoo',
  'Seungmin': 'characters.seungmin',
  'Jungwoo': 'characters.jungwoo',
  'Donghyun': 'characters.donghyun',
  
  // 스토리 데이터의 실제 캐릭터 이름들
  'Jiyeon': 'characters.jiyeon',
  'Yuki Tanaka': 'characters.yuki',
  'Yuki': 'characters.yuki',
  'Suyeon': 'characters.suyeon',
  'Jiwon': 'characters.jiwon',
  'Sohee': 'characters.sohee',
  'Seoyeon': 'characters.seoyeon',
  'Hayoung': 'characters.hayoung',
  'Mina': 'characters.mina',
  
  // 한국어 이름도 매핑 (역방향)
  '민준': 'characters.minjun',
  '지훈': 'characters.jihoon',
  '소연': 'characters.soyeon',
  '유나': 'characters.yuna',
  '하루카': 'characters.haruka',
  '태현': 'characters.taehyun',
  '현우': 'characters.hyunwoo',
  '승민': 'characters.seungmin',
  '정우': 'characters.jungwoo',
  '동현': 'characters.donghyun',
  '지연': 'characters.jiyeon',
  '유키': 'characters.yuki',
  '수연': 'characters.suyeon',
  '지원': 'characters.jiwon',
  '소희': 'characters.sohee',
  '서연': 'characters.seoyeon',
  '하영': 'characters.hayoung',
  '미나': 'characters.mina'
};

// 스토리 제목 번역 매핑
const storyTitleMapping: { [key: string]: string } = {
  // 새로운 스토리 제목들
  '아이돌 연습생과 나': 'storyTitles.meAndIdolTrainee',
  '미술학과 학생과 나': 'storyTitles.meAndArtStudent',
  'Me and the Idol Trainee': 'storyTitles.meAndIdolTrainee',
  'Me and the Art Student': 'storyTitles.meAndArtStudent',
  
  // 실제 스토리 데이터의 제목들
  'Drunk English Teacher Jiyeon': 'storyTitles.drunkTeacherJiyeon',
  'Japanese Exchange Student Yuki': 'storyTitles.japaneseStudentYuki',
  'Childhood Friend Suyeon': 'storyTitles.childhoodFriendSuyeon',
  'Haruka - Japanese Idol Trainee': 'storyTitles.japaneseIdolHaruka',
  'Cafe Owner Jiwon': 'storyTitles.cafeOwnerJiwon',
  'Bookstore Employee Sohee': 'storyTitles.bookstoreEmployeeSohee',
  'Dance Instructor Seoyeon': 'storyTitles.danceInstructorSeoyeon',
  'Medical Student Hayoung': 'storyTitles.medicalStudentHayoung',
  'Cold CEO Minjun': 'storyTitles.coldCeoMinjun',
  'Bad Boy Guitarist Jihoon': 'storyTitles.badBoyGuitaristJihoon',
  'Shy Librarian Mina': 'storyTitles.shyLibrarianMina',
  'Personal Trainer Taehyun': 'storyTitles.personalTrainerTaehyun',
  'Art Student Hyunwoo': 'storyTitles.artStudentHyunwoo',
  'Barista Seungmin': 'storyTitles.baristaSeungmin',
  'Veterinarian Jungwoo': 'storyTitles.veterinarianJungwoo',
  'Gaming Streamer Donghyun': 'storyTitles.gamingStreamerDonghyun',
  
  // 기존 제목들 (혹시 사용되는 경우를 위해)
  'The Mysterious Library': 'storyTitles.mysteriousLibrary',
  'City of Dreams': 'storyTitles.cityOfDreams',
  'Lost in Time': 'storyTitles.lostInTime',
  'The Secret Garden': 'storyTitles.secretGarden',
  'Night Cafe': 'storyTitles.nightCafe',
  'Summer Memories': 'storyTitles.summerMemories',
  'Moonlight Serenade': 'storyTitles.moonlightSerenade',
  'The Enchanted Forest': 'storyTitles.enchantedForest',
  'Starry Night': 'storyTitles.starryNight',
  'Ocean Whispers': 'storyTitles.oceanWhispers',
  'Mountain Echo': 'storyTitles.mountainEcho',
  'Desert Mirage': 'storyTitles.desertMirage',
  'Winter Tale': 'storyTitles.winterTale',
  'Spring Awakening': 'storyTitles.springAwakening',
  'Autumn Leaves': 'storyTitles.autumnLeaves',
  
  // 한국어 제목도 매핑 (역방향)
  '술 취한 영어 선생님 지연': 'storyTitles.drunkTeacherJiyeon',
  '일본 교환학생 유키': 'storyTitles.japaneseStudentYuki',
  '소꿉친구 수연': 'storyTitles.childhoodFriendSuyeon',
  '하루카 - 일본 아이돌 연습생': 'storyTitles.japaneseIdolHaruka',
  '카페 사장 지원': 'storyTitles.cafeOwnerJiwon',
  '서점 직원 소희': 'storyTitles.bookstoreEmployeeSohee',
  '댄스 강사 서연': 'storyTitles.danceInstructorSeoyeon',
  '의대생 하영': 'storyTitles.medicalStudentHayoung',
  '차가운 CEO 민준': 'storyTitles.coldCeoMinjun',
  '나쁜 남자 기타리스트 지훈': 'storyTitles.badBoyGuitaristJihoon',
  '수줍은 사서 미나': 'storyTitles.shyLibrarianMina',
  '퍼스널 트레이너 태현': 'storyTitles.personalTrainerTaehyun',
  '미술학도 현우': 'storyTitles.artStudentHyunwoo',
  '바리스타 승민': 'storyTitles.baristaSeungmin',
  '수의사 정우': 'storyTitles.veterinarianJungwoo',
  '게임 스트리머 동현': 'storyTitles.gamingStreamerDonghyun',
  
  '신비로운 도서관': 'storyTitles.mysteriousLibrary',
  '꿈의 도시': 'storyTitles.cityOfDreams',
  '시간 속에서 길을 잃다': 'storyTitles.lostInTime',
  '비밀의 정원': 'storyTitles.secretGarden',
  '밤의 카페': 'storyTitles.nightCafe',
  '여름의 추억': 'storyTitles.summerMemories',
  '달빛 세레나데': 'storyTitles.moonlightSerenade',
  '마법의 숲': 'storyTitles.enchantedForest',
  '별이 빛나는 밤': 'storyTitles.starryNight',
  '바다의 속삭임': 'storyTitles.oceanWhispers',
  '산의 메아리': 'storyTitles.mountainEcho',
  '사막의 신기루': 'storyTitles.desertMirage',
  '겨울 이야기': 'storyTitles.winterTale',
  '봄의 각성': 'storyTitles.springAwakening',
  '가을 낙엽': 'storyTitles.autumnLeaves'
};

// 카테고리 번역 매핑
const categoryMapping: { [key: string]: string } = {
  'Romance': 'categories.romance',
  'Adventure': 'categories.adventure',
  'Mystery': 'categories.mystery',
  'Fantasy': 'categories.fantasy',
  'Drama': 'categories.drama',
  'Comedy': 'categories.comedy',
  'Thriller': 'categories.thriller',
  'Sci-Fi': 'categories.scifi',
  // 한국어 카테고리도 매핑
  '로맨스': 'categories.romance',
  '모험': 'categories.adventure',
  '미스터리': 'categories.mystery',
  '판타지': 'categories.fantasy',
  '드라마': 'categories.drama',
  '코미디': 'categories.comedy',
  '스릴러': 'categories.thriller',
  'SF': 'categories.scifi'
};

// 캐릭터 이름 번역
export const translateCharacterName = (name: string): string => {
  const translationKey = characterNameMapping[name];
  if (translationKey) {
    return t(translationKey);
  }
  return name; // 매핑이 없으면 원본 반환
};

// 스토리 제목 번역
export const translateStoryTitle = (title: string): string => {
  const translationKey = storyTitleMapping[title];
  if (translationKey) {
    return t(translationKey);
  }
  return title; // 매핑이 없으면 원본 반환
};

// 카테고리 번역
export const translateCategory = (category: string): string => {
  const translationKey = categoryMapping[category];
  if (translationKey) {
    return t(translationKey);
  }
  return category; // 매핑이 없으면 원본 반환
};

// 현재 언어에 따라 적절한 캐릭터 이름 반환
export const getLocalizedCharacterName = (englishName: string, koreanName?: string): string => {
  const currentLang = getCurrentLanguage();
  if (currentLang === 'ko' && koreanName) {
    return koreanName;
  }
  return translateCharacterName(englishName);
};

// 현재 언어에 따라 적절한 스토리 제목 반환
export const getLocalizedStoryTitle = (englishTitle: string, koreanTitle?: string): string => {
  const currentLang = getCurrentLanguage();
  if (currentLang === 'ko' && koreanTitle) {
    return koreanTitle;
  }
  return translateStoryTitle(englishTitle);
};

// 태그 번역
export const translateTag = (tag: string): string => {
  // # 제거하고 소문자로 변환
  const cleanTag = tag.replace('#', '').toLowerCase();
  
  // 태그 매핑
  const tagMapping: { [key: string]: string } = {
    'female': 'storyDetail.tags.female',
    'male': 'storyDetail.tags.male',
    'tutoring': 'storyDetail.tags.tutoring',
    'teacher': 'storyDetail.tags.teacher',
    'tsundere': 'storyDetail.tags.tsundere',
    'professional': 'storyDetail.tags.professional',
    'student': 'storyDetail.tags.student',
    'exchange': 'storyDetail.tags.exchange',
    'japanese': 'storyDetail.tags.japanese',
    'shy': 'storyDetail.tags.shy',
    'childhood': 'storyDetail.tags.childhood',
    'friend': 'storyDetail.tags.friend',
    'artist': 'storyDetail.tags.artist',
    'idol': 'storyDetail.tags.idol',
    'trainee': 'storyDetail.tags.trainee',
    'cafe': 'storyDetail.tags.cafe',
    'owner': 'storyDetail.tags.owner',
    'bookstore': 'storyDetail.tags.bookstore',
    'employee': 'storyDetail.tags.employee',
    'dance': 'storyDetail.tags.dance',
    'instructor': 'storyDetail.tags.instructor',
    'medical': 'storyDetail.tags.medical',
    'ceo': 'storyDetail.tags.ceo',
    'cold': 'storyDetail.tags.cold',
    'badboy': 'storyDetail.tags.badboy',
    'guitarist': 'storyDetail.tags.guitarist',
    'librarian': 'storyDetail.tags.librarian',
    'trainer': 'storyDetail.tags.trainer',
    'barista': 'storyDetail.tags.barista',
    'veterinarian': 'storyDetail.tags.veterinarian',
    'gamer': 'storyDetail.tags.gamer',
    'streamer': 'storyDetail.tags.streamer'
  };

  const translationKey = tagMapping[cleanTag];
  if (translationKey) {
    return t(translationKey);
  }
  
  return tag; // 매핑이 없으면 원본 반환
};

// 스토리 설명 번역
export const translateStoryDescription = (storyTitle: string, originalDescription: string): string => {
  // 스토리 제목을 기반으로 설명 키 찾기
  const titleToDescriptionKey: { [key: string]: string } = {
    'Drunk English Teacher Jiyeon': 'storyDescriptions.drunkTeacherJiyeon',
    'Japanese Exchange Student Yuki': 'storyDescriptions.japaneseStudentYuki',
    'Childhood Friend Suyeon': 'storyDescriptions.childhoodFriendSuyeon',
    'Haruka - Japanese Idol Trainee': 'storyDescriptions.japaneseIdolHaruka',
    'Cafe Owner Jiwon': 'storyDescriptions.cafeOwnerJiwon',
    'Bookstore Employee Sohee': 'storyDescriptions.bookstoreEmployeeSohee',
    'Dance Instructor Seoyeon': 'storyDescriptions.danceInstructorSeoyeon',
    'Medical Student Hayoung': 'storyDescriptions.medicalStudentHayoung',
    'Cold CEO Minjun': 'storyDescriptions.coldCeoMinjun',
    'Bad Boy Guitarist Jihoon': 'storyDescriptions.badBoyGuitaristJihoon',
    'Shy Librarian Mina': 'storyDescriptions.shyLibrarianMina',
    'Personal Trainer Taehyun': 'storyDescriptions.personalTrainerTaehyun',
    'Art Student Hyunwoo': 'storyDescriptions.artStudentHyunwoo',
    'Barista Seungmin': 'storyDescriptions.baristaSeungmin',
    'Veterinarian Jungwoo': 'storyDescriptions.veterinarianJungwoo',
    'Gaming Streamer Donghyun': 'storyDescriptions.gamingStreamerDonghyun'
  };

  const translationKey = titleToDescriptionKey[storyTitle];
  if (translationKey) {
    return t(translationKey);
  }
  
  return originalDescription; // 매핑이 없으면 원본 반환
};

// 스토리 제목을 스토리 설정 키로 매핑
const titleToStorySettingsKey: { [key: string]: string } = {
  'Drunk English Teacher Jiyeon': 'storySettingsContent.drunkTeacherJiyeon',
  'Japanese Exchange Student Yuki': 'storySettingsContent.japaneseStudentYuki',
  'Childhood Friend Suyeon': 'storySettingsContent.childhoodFriendSuyeon',
  'Haruka - Japanese Idol Trainee': 'storySettingsContent.japaneseIdolHaruka',
  'Cafe Owner Jiwon': 'storySettingsContent.cafeOwnerJiwon',
  'Bookstore Employee Sohee': 'storySettingsContent.bookstoreEmployeeSohee',
  'Dance Instructor Seoyeon': 'storySettingsContent.danceInstructorSeoyeon',
  'Medical Student Hayoung': 'storySettingsContent.medicalStudentHayoung',
  'Cold CEO Minjun': 'storySettingsContent.coldCeoMinjun',
  'Bad Boy Guitarist Jihoon': 'storySettingsContent.badBoyGuitaristJihoon',
  'Shy Librarian Mina': 'storySettingsContent.shyLibrarianMina',
  'Personal Trainer Taehyun': 'storySettingsContent.personalTrainerTaehyun',
  'Art Student Hyunwoo': 'storySettingsContent.artStudentHyunwoo',
  'Barista Seungmin': 'storySettingsContent.baristaSeungmin',
  'Veterinarian Jungwoo': 'storySettingsContent.veterinarianJungwoo',
  'Gaming Streamer Donghyun': 'storySettingsContent.gamingStreamerDonghyun'
};

// 스토리 제목을 캐릭터 묘사 키로 매핑
const titleToCharacterDescriptionKey: { [key: string]: string } = {
  'Drunk English Teacher Jiyeon': 'characterDescriptionContent.drunkTeacherJiyeon',
  'Japanese Exchange Student Yuki': 'characterDescriptionContent.japaneseStudentYuki',
  'Childhood Friend Suyeon': 'characterDescriptionContent.childhoodFriendSuyeon',
  'Haruka - Japanese Idol Trainee': 'characterDescriptionContent.japaneseIdolHaruka',
  'Cafe Owner Jiwon': 'characterDescriptionContent.cafeOwnerJiwon',
  'Bookstore Employee Sohee': 'characterDescriptionContent.bookstoreEmployeeSohee',
  'Dance Instructor Seoyeon': 'characterDescriptionContent.danceInstructorSeoyeon',
  'Medical Student Hayoung': 'characterDescriptionContent.medicalStudentHayoung',
  'Cold CEO Minjun': 'characterDescriptionContent.coldCeoMinjun',
  'Bad Boy Guitarist Jihoon': 'characterDescriptionContent.badBoyGuitaristJihoon',
  'Shy Librarian Mina': 'characterDescriptionContent.shyLibrarianMina',
  'Personal Trainer Taehyun': 'characterDescriptionContent.personalTrainerTaehyun',
  'Art Student Hyunwoo': 'characterDescriptionContent.artStudentHyunwoo',
  'Barista Seungmin': 'characterDescriptionContent.baristaSeungmin',
  'Veterinarian Jungwoo': 'characterDescriptionContent.veterinarianJungwoo',
  'Gaming Streamer Donghyun': 'characterDescriptionContent.gamingStreamerDonghyun'
};

// 스토리 설정 내용 번역
export const translateStorySettingsContent = (storyTitle: string, originalContent: string): string => {
  const translationKey = titleToStorySettingsKey[storyTitle];
  if (translationKey) {
    return t(translationKey);
  }
  return originalContent; // 매핑이 없으면 원본 반환
};

// 캐릭터 묘사 내용 번역
export const translateCharacterDescriptionContent = (storyTitle: string, originalContent: string): string => {
  const translationKey = titleToCharacterDescriptionKey[storyTitle];
  if (translationKey) {
    return t(translationKey);
  }
  return originalContent; // 매핑이 없으면 원본 반환
};

// Starting Situation 번역
export const translateStartingSituation = (storyTitle: string, originalContent: string): string => {
  const currentLang = getCurrentLanguage();
  
  // 스토리 제목에서 캐릭터 키 추출
  const getCharacterKey = (title: string): string => {
    if (title.includes('Jiyeon')) return 'drunkTeacherJiyeon';
    if (title.includes('Yuki')) return 'mysteriousYuki';
    if (title.includes('Suyeon')) return 'artistSuyeon';
    if (title.includes('Haruka')) return 'japaneseIdolHaruka';
    if (title.includes('Jiwon')) return 'cafeOwnerJiwon';
    if (title.includes('Sohee')) return 'bookstoreEmployeeSohee';
    if (title.includes('Seoyeon')) return 'danceInstructorSeoyeon';
    if (title.includes('Hayoung')) return 'medicalStudentHayoung';
    if (title.includes('Minjun')) return 'ceoMinjun';
    if (title.includes('Jihoon')) return 'rebelliousGuitaristJihoon';
    if (title.includes('Mina')) return 'shyLibrarianMina';
    if (title.includes('Taehyun')) return 'personalTrainerTaehyun';
    if (title.includes('Hyunwoo')) return 'artStudentHyunwoo';
    if (title.includes('Seungmin')) return 'baristaSeungmin';
    if (title.includes('Jungwoo')) return 'veterinarianJungwoo';
    if (title.includes('Donghyun')) return 'gamerStreamerDonghyun';
    return '';
  };
  
  const characterKey = getCharacterKey(storyTitle);
  if (characterKey) {
    const translationKey = `startingSituation.${characterKey}`;
    const translated = t(translationKey);
    if (translated !== translationKey) {
      return translated;
    }
  }
  return originalContent; // 매핑이 없으면 원본 반환
};

// First Dialogue 번역
export const translateFirstDialogue = (storyTitle: string, originalContent: string): string => {
  const currentLang = getCurrentLanguage();
  
  // 스토리 제목에서 캐릭터 키 추출
  const getCharacterKey = (title: string): string => {
    if (title.includes('Jiyeon')) return 'drunkTeacherJiyeon';
    if (title.includes('Yuki')) return 'mysteriousYuki';
    if (title.includes('Suyeon')) return 'artistSuyeon';
    if (title.includes('Haruka')) return 'japaneseIdolHaruka';
    if (title.includes('Jiwon')) return 'cafeOwnerJiwon';
    if (title.includes('Sohee')) return 'bookstoreEmployeeSohee';
    if (title.includes('Seoyeon')) return 'danceInstructorSeoyeon';
    if (title.includes('Hayoung')) return 'medicalStudentHayoung';
    if (title.includes('Minjun')) return 'ceoMinjun';
    if (title.includes('Jihoon')) return 'rebelliousGuitaristJihoon';
    if (title.includes('Mina')) return 'shyLibrarianMina';
    if (title.includes('Taehyun')) return 'personalTrainerTaehyun';
    if (title.includes('Hyunwoo')) return 'artStudentHyunwoo';
    if (title.includes('Seungmin')) return 'baristaSeungmin';
    if (title.includes('Jungwoo')) return 'veterinarianJungwoo';
    if (title.includes('Donghyun')) return 'gamerStreamerDonghyun';
    return '';
  };
  
  const characterKey = getCharacterKey(storyTitle);
  if (characterKey) {
    const translationKey = `firstDialogue.${characterKey}`;
    const translated = t(translationKey);
    if (translated !== translationKey) {
      return translated;
    }
  }
  return originalContent; // 매핑이 없으면 원본 반환
};
