import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', '../../../styles/animations.scss'],
})
export class HeroComponent implements OnInit {
  name = 'Gabriel Menezes v1';
  title = 'Développeur Web';
  description =
    'Je transforme des défis techniques en solutions efficaces, en combinant expertise en développement web et approche agile.';
  imagePath = 'assets/images/hero2.png';

  ngOnInit() {
    // Inicialização
  }
}
