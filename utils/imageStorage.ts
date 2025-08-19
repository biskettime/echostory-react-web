// IndexedDB를 사용한 이미지 저장 유틸리티

const DB_NAME = 'EchoStoryImages';
const DB_VERSION = 1;
const STORE_NAME = 'images';

interface StoredImage {
  id: string;
  data: string; // Base64 데이터
  timestamp: number;
}

class ImageStorage {
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('IndexedDB 열기 실패:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('✅ IndexedDB 연결 성공');
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
          console.log('✅ IndexedDB 스토어 생성 완료');
        }
      };
    });
  }

  async saveImage(id: string, base64Data: string): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const imageData: StoredImage = {
        id,
        data: base64Data,
        timestamp: Date.now()
      };

      const request = store.put(imageData);

      request.onsuccess = () => {
        console.log(`✅ 이미지 저장 완료: ${id} (${Math.round(base64Data.length / 1024)}KB)`);
        resolve();
      };

      request.onerror = () => {
        console.error('이미지 저장 실패:', request.error);
        reject(request.error);
      };
    });
  }

  async getImage(id: string): Promise<string | null> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);

      request.onsuccess = () => {
        const result = request.result as StoredImage | undefined;
        if (result) {
          console.log(`✅ 이미지 로드 완료: ${id} (${Math.round(result.data.length / 1024)}KB)`);
          resolve(result.data);
        } else {
          console.log(`❌ 이미지 없음: ${id}`);
          resolve(null);
        }
      };

      request.onerror = () => {
        console.error('이미지 로드 실패:', request.error);
        reject(request.error);
      };
    });
  }

  async saveImages(images: string[]): Promise<string[]> {
    const imageIds: string[] = [];
    
    for (let i = 0; i < images.length; i++) {
      const imageId = `img_${Date.now()}_${i}_${Math.random().toString(36).substr(2, 9)}`;
      await this.saveImage(imageId, images[i]);
      imageIds.push(imageId);
    }

    return imageIds;
  }

  async getImages(imageIds: string[]): Promise<string[]> {
    const images: string[] = [];
    
    for (const id of imageIds) {
      const imageData = await this.getImage(id);
      if (imageData) {
        images.push(imageData);
      }
    }

    return images;
  }

  async deleteImage(id: string): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => {
        console.log(`✅ 이미지 삭제 완료: ${id}`);
        resolve();
      };

      request.onerror = () => {
        console.error('이미지 삭제 실패:', request.error);
        reject(request.error);
      };
    });
  }

  async deleteImages(imageIds: string[]): Promise<void> {
    for (const id of imageIds) {
      await this.deleteImage(id);
    }
  }

  async clearAll(): Promise<void> {
    if (!this.db) {
      await this.init();
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => {
        console.log('✅ 모든 이미지 삭제 완료');
        resolve();
      };

      request.onerror = () => {
        console.error('이미지 전체 삭제 실패:', request.error);
        reject(request.error);
      };
    });
  }
}

// 싱글톤 인스턴스
export const imageStorage = new ImageStorage();

// 초기화 함수
export const initImageStorage = async (): Promise<void> => {
  try {
    await imageStorage.init();
  } catch (error) {
    console.error('ImageStorage 초기화 실패:', error);
    throw error;
  }
};
