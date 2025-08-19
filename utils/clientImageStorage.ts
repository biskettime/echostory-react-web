// 클라이언트 사이드 이미지 저장 유틸리티
// IndexedDB를 사용하여 이미지를 로컬에 저장합니다.

interface StoredImage {
  id: string;
  characterName: string;
  imageNumber: number;
  data: string; // Base64 데이터
  fileName: string;
  createdAt: string;
}

const DB_NAME = 'EchoStoryImages';
const DB_VERSION = 1;
const STORE_NAME = 'characterImages';

/**
 * IndexedDB 데이터베이스를 초기화합니다.
 */
function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('characterName', 'characterName', { unique: false });
        store.createIndex('imageNumber', 'imageNumber', { unique: false });
      }
    };
  });
}

/**
 * 캐릭터 이미지를 저장합니다.
 */
export async function saveCharacterImageToStorage(
  file: File,
  characterName: string,
  imageNumber: number
): Promise<string> {
  try {
    const db = await initDB();
    
    // 파일을 Base64로 변환
    const base64Data = await fileToBase64(file);
    
    const sanitizedName = characterName
      .replace(/[^a-zA-Z0-9가-힣]/g, '_')
      .replace(/\s+/g, '_')
      .toLowerCase();
    
    const fileName = `${sanitizedName}_${imageNumber}.png`;
    const imageId = `${sanitizedName}_${imageNumber}`;
    
    const imageData: StoredImage = {
      id: imageId,
      characterName: sanitizedName,
      imageNumber,
      data: base64Data,
      fileName,
      createdAt: new Date().toISOString()
    };
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    await new Promise<void>((resolve, reject) => {
      const request = store.put(imageData);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    
    // 가상 경로 반환 (실제로는 IndexedDB에 저장됨)
    return `/data/ch_img/${fileName}`;
  } catch (error) {
    console.error('Error saving image to storage:', error);
    throw error;
  }
}

/**
 * 캐릭터 이미지를 로드합니다.
 */
export async function loadCharacterImageFromStorage(
  characterName: string,
  imageNumber: number
): Promise<string | null> {
  try {
    const db = await initDB();
    
    const sanitizedName = characterName
      .replace(/[^a-zA-Z0-9가-힣]/g, '_')
      .replace(/\s+/g, '_')
      .toLowerCase();
    
    const imageId = `${sanitizedName}_${imageNumber}`;
    
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    
    const imageData = await new Promise<StoredImage | null>((resolve, reject) => {
      const request = store.get(imageId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    
    return imageData ? imageData.data : null;
  } catch (error) {
    console.error('Error loading image from storage:', error);
    return null;
  }
}

/**
 * 캐릭터의 모든 이미지를 로드합니다.
 */
export async function loadAllCharacterImagesFromStorage(
  characterName: string
): Promise<StoredImage[]> {
  try {
    const db = await initDB();
    
    const sanitizedName = characterName
      .replace(/[^a-zA-Z0-9가-힣]/g, '_')
      .replace(/\s+/g, '_')
      .toLowerCase();
    
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('characterName');
    
    const images = await new Promise<StoredImage[]>((resolve, reject) => {
      const request = index.getAll(sanitizedName);
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
    
    return images.sort((a, b) => a.imageNumber - b.imageNumber);
  } catch (error) {
    console.error('Error loading all images from storage:', error);
    return [];
  }
}

/**
 * 다음 사용 가능한 이미지 번호를 찾습니다.
 */
export async function getNextAvailableImageNumberFromStorage(
  characterName: string
): Promise<number> {
  try {
    const existingImages = await loadAllCharacterImagesFromStorage(characterName);
    const usedNumbers = existingImages.map(img => img.imageNumber);
    
    for (let i = 1; i <= 10; i++) {
      if (!usedNumbers.includes(i)) {
        return i;
      }
    }
    
    // 모든 슬롯이 차있으면 1번을 덮어쓰기
    return 1;
  } catch (error) {
    console.error('Error getting next available number:', error);
    return 1;
  }
}

/**
 * 파일을 Base64로 변환합니다.
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('파일 읽기 실패'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * 캐릭터 이미지가 존재하는지 확인합니다.
 */
export async function checkCharacterImageExistsInStorage(
  characterName: string,
  imageNumber: number
): Promise<boolean> {
  try {
    const imageData = await loadCharacterImageFromStorage(characterName, imageNumber);
    return imageData !== null;
  } catch (error) {
    console.error('Error checking image existence:', error);
    return false;
  }
}

/**
 * 캐릭터 이미지를 삭제합니다.
 */
export async function deleteCharacterImageFromStorage(
  characterName: string,
  imageNumber: number
): Promise<boolean> {
  try {
    const db = await initDB();
    
    const sanitizedName = characterName
      .replace(/[^a-zA-Z0-9가-힣]/g, '_')
      .replace(/\s+/g, '_')
      .toLowerCase();
    
    const imageId = `${sanitizedName}_${imageNumber}`;
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    await new Promise<void>((resolve, reject) => {
      const request = store.delete(imageId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    
    return true;
  } catch (error) {
    console.error('Error deleting image from storage:', error);
    return false;
  }
}
