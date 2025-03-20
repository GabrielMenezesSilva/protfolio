import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  activeSection = 'inicio';

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkActiveSection();
  }

  private checkActiveSection() {
    const sections = ['inicio', 'projetos', 'habilidades', 'contato'];
    let currentSection = sections[0];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          break;
        }
      }
    }

    this.activeSection = currentSection;
  }

  scrollTo(elementId: string) {
    this.scrollService.scrollToElement(elementId);
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
