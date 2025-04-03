import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('tabsHeader') tabsHeader!: ElementRef;

  activeTab = 0;
  hasScrollLeft = false;
  hasScrollRight = false;

  skillCategories: SkillCategory[] = [
    {
      name: 'Langages',
      icon: 'fas fa-code',
      skills: [
        {
          name: 'HTML5',
          icon: 'fab fa-html5',
          level: 95,
          description: 'Création de structures web sémantiques et accessibles',
        },
        {
          name: 'CSS3',
          icon: 'fab fa-css3-alt',
          level: 90,
          description: 'Styling avancé et animations CSS',
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js',
          level: 85,
          description: 'Développement avec ECMAScript v6',
        },
        {
          name: 'TypeScript',
          icon: 'fab fa-js',
          level: 80,
          description: 'Programmation orientée objet avec TypeScript',
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          level: 40,
          description: "Développement d'applications avec Python",
        },
        {
          name: 'Java',
          icon: 'fab fa-java',
          level: 10,
          description: 'Formation en cours',
        },
      ],
    },
    {
      name: 'Frameworks',
      icon: 'fas fa-layer-group',
      skills: [
        {
          name: 'Angular',
          icon: 'fab fa-angular',
          level: 85,
          description: "Développement d'applications web modernes avec Angular",
        },
        {
          name: 'Ionic',
          icon: 'fas fa-mobile-alt',
          level: 80,
          description: "Développement d'applications mobiles hybrides",
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          level: 40,
          description: 'Connaissances de base en React',
        },
      ],
    },
    {
      name: 'Backend & Base de données',
      icon: 'fas fa-server',
      skills: [
        {
          name: 'Firebase',
          icon: 'fas fa-fire',
          level: 85,
          description: 'Développement backend avec Firebase',
        },
        {
          name: 'MySQL',
          icon: 'fas fa-database',
          level: 40,
          description: 'Gestion de bases de données relationnelles',
        },
        {
          name: 'MongoDB',
          icon: 'fas fa-database',
          level: 50,
          description: 'Connaissances de base en MongoDB',
        },
      ],
    },
    {
      name: 'CMS & E-commerce',
      icon: 'fas fa-shopping-cart',
      skills: [
        {
          name: 'WordPress',
          icon: 'fab fa-wordpress',
          level: 90,
          description: 'Développement de sites web WordPress',
        },
        {
          name: 'Elementor',
          icon: 'fas fa-paint-brush',
          level: 85,
          description: 'Création de sites avec Elementor',
        },
        {
          name: 'WooCommerce',
          icon: 'fas fa-store',
          level: 50,
          description: 'Développement e-commerce avec WooCommerce',
        },
      ],
    },
    {
      name: 'Outils de développement',
      icon: 'fas fa-tools',
      skills: [
        {
          name: 'Git / GitHub',
          icon: 'fab fa-git-alt',
          level: 90,
          description: 'Gestion de versions et collaboration',
        },
        {
          name: 'VS Code',
          icon: 'fas fa-code',
          level: 85,
          description: 'Éditeur de code principal',
        },
        {
          name: 'Cursor',
          icon: 'fas fa-code',
          level: 80,
          description: 'Éditeur avec intégration IA',
        },
      ],
    },
    {
      name: 'Design & IA',
      icon: 'fas fa-robot',
      skills: [
        {
          name: 'Figma',
          icon: 'fab fa-figma',
          level: 80,
          description: "Design d'interfaces et prototypage",
        },
        {
          name: 'Copilot',
          icon: 'fas fa-robot',
          level: 85,
          description: 'Assistant IA pour le développement',
        },
        {
          name: 'ChatGPT 4.5',
          icon: 'fas fa-robot',
          level: 85,
          description: 'Assistant IA pour le développement',
        },
        {
          name: 'Claude 3.7',
          icon: 'fas fa-robot',
          level: 85,
          description: 'Assistant IA pour le développement',
        },
        {
          name: 'Cursor AI',
          icon: 'fas fa-robot',
          level: 85,
          description: "Assistant IA intégré à l'éditeur",
        },
      ],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
      window.addEventListener('resize', () => this.checkScroll());
    }
  }

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  checkScroll() {
    if (isPlatformBrowser(this.platformId) && this.tabsHeader?.nativeElement) {
      const header = this.tabsHeader.nativeElement;
      this.hasScrollLeft = header.scrollLeft > 0;
      this.hasScrollRight =
        header.scrollLeft < header.scrollWidth - header.clientWidth;
    }
  }

  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }
}
