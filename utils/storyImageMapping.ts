// 스토리 캐릭터와 이미지 분류 코드 매핑

/**
 * 캐릭터 이름을 새로운 분류 코드로 매핑합니다.
 * @param characterName 캐릭터 이름
 * @returns 분류 코드 (예: rf001, rm001)
 */
export function getStoryClassificationCode(characterName: string): string | null {
  const nameMapping: { [key: string]: string } = {
    // 현실 여성 캐릭터들
    'Haruka': 'rf001',
    '하루카': 'rf001',
    
    // 현실 남성 캐릭터들  
    'Hyunwoo': 'rm001',
    '현우': 'rm001',
    
    // 향후 확장을 위한 예시들
    // 'Yuki': 'rf002',
    // 'Jihoon': 'rm002',
  };
  
  // 정확한 매칭 시도
  if (nameMapping[characterName]) {
    return nameMapping[characterName];
  }
  
  // 부분 매칭 시도 (공백이나 특수문자 포함된 경우)
  const firstName = characterName.split(' ')[0];
  if (nameMapping[firstName]) {
    return nameMapping[firstName];
  }
  
  // 소문자로 변환하여 매칭 시도
  const lowerName = characterName.toLowerCase();
  for (const [key, value] of Object.entries(nameMapping)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }
  
  console.warn(`No classification code found for character: ${characterName}`);
  return null;
}

/**
 * 분류 코드를 기반으로 이미지 경로를 생성합니다.
 * @param classificationCode 분류 코드 (예: rf001)
 * @param imageNumber 이미지 번호 (1-10)
 * @returns 이미지 경로
 */
export function getImagePathFromClassificationCode(
  classificationCode: string, 
  imageNumber: number = 1
): string {
  return `/data/ch_img/${classificationCode}_${imageNumber}.png`;
}

/**
 * 캐릭터 이름을 기반으로 새로운 이미지 경로를 생성합니다.
 * @param characterName 캐릭터 이름
 * @param imageNumber 이미지 번호 (1-10)
 * @returns 이미지 경로 또는 null (매핑되지 않은 캐릭터)
 */
export function getCharacterImagePathNew(
  characterName: string, 
  imageNumber: number = 1
): string | null {
  const classificationCode = getStoryClassificationCode(characterName);
  if (!classificationCode) {
    return null;
  }
  
  return getImagePathFromClassificationCode(classificationCode, imageNumber);
}

/**
 * 캐릭터의 모든 이미지 경로를 반환합니다 (새로운 분류 시스템)
 * @param characterName 캐릭터 이름
 * @returns 이미지 경로 배열
 */
export function getAllCharacterImagePathsNew(characterName: string): string[] {
  const classificationCode = getStoryClassificationCode(characterName);
  if (!classificationCode) {
    return [];
  }
  
  const paths: string[] = [];
  for (let i = 1; i <= 10; i++) {
    paths.push(getImagePathFromClassificationCode(classificationCode, i));
  }
  return paths;
}

/**
 * 이미지가 존재하는지 확인합니다.
 * @param imagePath 이미지 경로
 * @returns Promise<boolean>
 */
export async function checkImageExistsNew(imagePath: string): Promise<boolean> {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * 캐릭터의 첫 번째 존재하는 이미지를 찾습니다 (새로운 분류 시스템)
 * @param characterName 캐릭터 이름
 * @returns Promise<string | null> 존재하는 첫 번째 이미지 경로 또는 null
 */
export async function findFirstAvailableImageNew(characterName: string): Promise<string | null> {
  const imagePaths = getAllCharacterImagePathsNew(characterName);
  
  for (const path of imagePaths) {
    const exists = await checkImageExistsNew(path);
    if (exists) {
      console.log(`✅ Found image for ${characterName}: ${path}`);
      return path;
    }
  }
  
  console.log(`❌ No images found for ${characterName}`);
  return null;
}

/**
 * 캐릭터 이미지를 가져옵니다. 존재하지 않으면 기본 이미지를 반환합니다.
 * @param characterName 캐릭터 이름
 * @param imageNumber 이미지 번호 (선택사항)
 * @returns Promise<string> 이미지 경로
 */
export async function getCharacterImageWithFallbackNew(
  characterName: string, 
  imageNumber?: number
): Promise<string> {
  console.log(`🔍 Loading image for character: ${characterName}, imageNumber: ${imageNumber}`);
  
  if (imageNumber) {
    // 특정 번호의 이미지를 요청한 경우
    const imagePath = getCharacterImagePathNew(characterName, imageNumber);
    if (imagePath) {
      const exists = await checkImageExistsNew(imagePath);
      if (exists) {
        console.log(`✅ Found specific image: ${imagePath}`);
        return imagePath;
      }
    }
  }
  
  // 첫 번째 존재하는 이미지를 찾아서 반환
  const firstAvailable = await findFirstAvailableImageNew(characterName);
  if (firstAvailable) {
    return firstAvailable;
  }
  
  // 기본 이미지 반환
  console.log(`🔄 Using default image for ${characterName}`);
  return '/images/echostory.png';
}
