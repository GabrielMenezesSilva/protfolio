import { Injectable } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private cld: Cloudinary;

  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dmhygznjr',
      },
    });
  }

  getVideoUrl(publicId: string): string {
    return this.cld.video(publicId).toURL();
  }
}
