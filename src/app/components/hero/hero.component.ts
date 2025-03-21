import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', '../../../styles/animations.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('videoBackground') videoBackground!: ElementRef<HTMLVideoElement>;

  name = 'Gabriel Menezes';
  title = 'Développeur Web';
  description =
    'Je transforme des défis techniques en solutions efficaces, en combinant expertise en développement web et approche agile.';
  imagePath = 'assets/images/hero2.png';

  ngOnInit() {
    // Inicialização
  }

  ngAfterViewInit() {
    const video = this.videoBackground.nativeElement;

    video.addEventListener('loadeddata', () => {
      video.play().catch((error) => {
        console.error('Erro ao reproduzir vídeo:', error);
      });
    });
  }
}
