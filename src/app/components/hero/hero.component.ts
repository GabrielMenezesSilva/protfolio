import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', '../../../styles/animations.scss'],
})
export class HeroComponent {
  name = 'Gabriel Menezes';
  title = 'Développeur Front-End & Web Designer';
  description =
    "Développeur passionné par la création de solutions innovantes et d'expériences numériques exceptionnelles.";
  imagePath = 'assets/images/figure.png';
}
