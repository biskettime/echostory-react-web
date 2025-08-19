// 캐릭터 이미지 자동 로딩 및 저장 유틸리티

/**
 * 캐릭터 이름을 기반으로 이미지 경로를 생성합니다.
 * @param characterName 캐릭터 이름
 * @param imageNumber 이미지 번호 (1-10)
 * @returns 이미지 경로
 */
export function getCharacterImagePath(characterName: string, imageNumber: number = 1): string {
  // 캐릭터 이름을 파일명에 적합하게 변환 (공백 제거, 특수문자 처리)
  const sanitizedName = characterName
    .replace(/[^a-zA-Z0-9가-힣]/g, '_') // 특수문자를 언더스코어로 변경
    .replace(/\s+/g, '_') // 공백을 언더스코어로 변경
    .toLowerCase();
  
  return `/data/ch_img/${sanitizedName}_${imageNumber}.png`;
}

/**
 * 캐릭터의 모든 이미지 경로를 반환합니다 (1-10번)
 * @param characterName 캐릭터 이름
 * @returns 이미지 경로 배열
 */
export function getAllCharacterImagePaths(characterName: string): string[] {
  const paths: string[] = [];
  for (let i = 1; i <= 10; i++) {
    paths.push(getCharacterImagePath(characterName, i));
  }
  return paths;
}

/**
 * 이미지가 존재하는지 확인합니다.
 * @param imagePath 이미지 경로
 * @returns Promise<boolean>
 */
export async function checkImageExists(imagePath: string): Promise<boolean> {
  // 먼저 클라이언트 스토리지에서 확인
  if (imagePath.startsWith('/data/ch_img/')) {
    const { checkCharacterImageExistsInStorage } = await import('./clientImageStorage');
    const fileName = imagePath.split('/').pop();
    if (fileName) {
      const match = fileName.match(/^(.+)_(\d+)\.png$/);
      if (match) {
        const [, characterName, imageNumber] = match;
        return await checkCharacterImageExistsInStorage(characterName, parseInt(imageNumber));
      }
    }
  }
  
  // 일반 파일 시스템 확인
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * 캐릭터의 첫 번째 존재하는 이미지를 찾습니다.
 * @param characterName 캐릭터 이름
 * @returns Promise<string | null> 존재하는 첫 번째 이미지 경로 또는 null
 */
export async function findFirstAvailableImage(characterName: string): Promise<string | null> {
  const imagePaths = getAllCharacterImagePaths(characterName);
  
  for (const path of imagePaths) {
    const exists = await checkImageExists(path);
    if (exists) {
      return path;
    }
  }
  
  return null;
}

/**
 * 캐릭터의 존재하는 모든 이미지를 찾습니다.
 * @param characterName 캐릭터 이름
 * @returns Promise<string[]> 존재하는 이미지 경로들
 */
export async function findAllAvailableImages(characterName: string): Promise<string[]> {
  const imagePaths = getAllCharacterImagePaths(characterName);
  const availableImages: string[] = [];
  
  for (const path of imagePaths) {
    const exists = await checkImageExists(path);
    if (exists) {
      availableImages.push(path);
    }
  }
  
  return availableImages;
}

/**
 * 기본 이미지 경로를 반환합니다 (이미지가 없을 때 사용)
 * @returns 기본 이미지 경로
 */
export function getDefaultImage(): string {
  return '/images/echostory.png';
}

/**
 * 캐릭터 이미지를 가져옵니다. 존재하지 않으면 기본 이미지를 반환합니다.
 * @param characterName 캐릭터 이름
 * @param imageNumber 이미지 번호 (선택사항, 기본값: 1)
 * @returns Promise<string> 이미지 경로
 */
export async function getCharacterImageWithFallback(
  characterName: string, 
  imageNumber?: number
): Promise<string> {
  if (imageNumber) {
    // 특정 번호의 이미지를 요청한 경우
    const imagePath = getCharacterImagePath(characterName, imageNumber);
    const exists = await checkImageExists(imagePath);
    return exists ? imagePath : getDefaultImage();
  } else {
    // 첫 번째 존재하는 이미지를 찾아서 반환
    const firstAvailable = await findFirstAvailableImage(characterName);
    return firstAvailable || getDefaultImage();
  }
}

/**
 * 이미지 파일을 클라이언트 스토리지에 저장합니다.
 * @param file 저장할 파일
 * @param characterName 캐릭터 이름
 * @param imageNumber 이미지 번호
 * @returns Promise<string> 저장된 파일 경로
 */
export async function saveCharacterImage(
  file: File, 
  characterName: string, 
  imageNumber: number
): Promise<string> {
  try {
    const { saveCharacterImageToStorage } = await import('./clientImageStorage');
    return await saveCharacterImageToStorage(file, characterName, imageNumber);
  } catch (error) {
    console.error('Error saving character image:', error);
    throw error;
  }
}

/**
 * 다음 사용 가능한 이미지 번호를 찾습니다.
 * @param characterName 캐릭터 이름
 * @returns Promise<number> 다음 사용 가능한 번호 (1-10)
 */
export async function getNextAvailableImageNumber(characterName: string): Promise<number> {
  try {
    const { getNextAvailableImageNumberFromStorage } = await import('./clientImageStorage');
    return await getNextAvailableImageNumberFromStorage(characterName);
  } catch (error) {
    console.error('Error getting next available number:', error);
    return 1;
  }
}

/**
 * 캐릭터 이미지 정보를 가져옵니다.
 * @param characterName 캐릭터 이름
 * @returns Promise<{available: string[], total: number, next: number}>
 */
export async function getCharacterImageInfo(characterName: string) {
  const availableImages = await findAllAvailableImages(characterName);
  const nextNumber = await getNextAvailableImageNumber(characterName);
  
  return {
    available: availableImages,
    total: availableImages.length,
    next: nextNumber,
    maxSlots: 10
  };
}
