import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../services/cloudinary.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', '../../../styles/animations.scss'],
})
export class HeroComponent implements OnInit {
  name = 'Gabriel Menezes';
  title = 'Développeur Full Stack';
  description =
    'Je transforme des défis techniques en solutions efficaces, combinant expertise en développement web et approche agile.';
  imagePath = 'assets/images/hero2.png';
  videoUrl: string = '';

  constructor(private cloudinaryService: CloudinaryService) {}

  ngOnInit() {
    this.videoUrl = this.cloudinaryService.getVideoUrl('video2_blkrfi');
  }

  onVideoError(event: any) {
    console.error('Erro ao carregar o vídeo:', event);
  }
}
