import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  // Substitua com suas configurações do Firebase
  apiKey: 'sua-api-key',
  authDomain: 'seu-auth-domain',
  projectId: 'seu-project-id',
  storageBucket: 'seu-storage-bucket',
  messagingSenderId: 'seu-messaging-sender-id',
  appId: 'seu-app-id',
};

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private storage = getStorage(this.app);

  constructor() {}

  async getVideoUrl(path: string): Promise<string> {
    try {
      const videoRef = ref(this.storage, path);
      return await getDownloadURL(videoRef);
    } catch (error) {
      console.error('Erro ao obter URL do vídeo:', error);
      throw error;
    }
  }
}
