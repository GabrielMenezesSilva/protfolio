import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../styles/animations.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
