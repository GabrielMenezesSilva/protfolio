import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface TechLogo {
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsPerPage = 3;
  currentPage = 1;
  isTransitioning = false;
  isMobile = false;

  techLogos: { [key: string]: TechLogo } = {
    Angular: {
      name: 'Angular',
      logo: 'fab fa-angular',
      alt: 'Angular Logo',
    },
    TypeScript: {
      name: 'TypeScript',
      logo: 'fab fa-js',
      alt: 'TypeScript Logo',
    },
    SCSS: {
      name: 'SCSS',
      logo: 'fab fa-sass',
      alt: 'SASS Logo',
    },
    HTML: {
      name: 'HTML5',
      logo: 'fab fa-html5',
      alt: 'HTML5 Logo',
    },
    CSS: {
      name: 'CSS3',
      logo: 'fab fa-css3-alt',
      alt: 'CSS3 Logo',
    },
    WordPress: {
      name: 'WordPress',
      logo: 'fab fa-wordpress',
      alt: 'WordPress Logo',
    },
    Elementor: {
      name: 'Elementor',
      logo: 'fas fa-paint-brush',
      alt: 'Elementor Logo',
    },
    Firebase: {
      name: 'Firebase',
      logo: 'fas fa-fire',
      alt: 'Firebase Logo',
    },
    PWA: {
      name: 'PWA',
      logo: 'fas fa-mobile-alt',
      alt: 'PWA Logo',
    },
    'API REST': {
      name: 'REST API',
      logo: 'fas fa-code',
      alt: 'REST API Logo',
    },
    EmailJS: {
      name: 'EmailJS',
      logo: 'fas fa-envelope',
      alt: 'EmailJS Logo',
    },
    SEO: {
      name: 'SEO',
      logo: 'fas fa-search',
      alt: 'SEO Logo',
    },
    'Design Responsive': {
      name: 'Responsive Design',
      logo: 'fas fa-desktop',
      alt: 'Responsive Design Logo',
    },
    'Animations CSS': {
      name: 'CSS Animations',
      logo: 'fas fa-magic',
      alt: 'CSS Animations Logo',
    },
    Lighthouse: {
      name: 'Lighthouse',
      logo: 'fas fa-tachometer-alt',
      alt: 'Lighthouse Logo',
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.projectsPerPage = this.isMobile ? 1 : 3;
      // Ajusta a página atual se necessário
      if (this.isMobile && this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }
  }

  projects: Project[] = [
    {
      title: 'Portfolio Personnel (2025)',
      description:
        'Portfolio moderne développé avec Angular, présentant mes projets et compétences de manière interactive. Fonctionnalités : système de tabs pour les compétences, pagination des projets, design responsive, animations fluides, formulaire de contact avec EmailJS. Architecture modulaire et performance optimisée.',
      image: 'assets/projects/wordpress-portfolio3.png',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'EmailJS',
        'Animations CSS',
        'Design Responsive',
        'Lighthouse',
      ],
      github: 'https://github.com/GabrielMenezesSilva/portfolio',
      demo: 'https://portfolio.gabriel-menezes.com',
    },
    {
      title: 'Site WordPress (2025)',
      description:
        'Site vitrine professionnel développé avec WordPress et Elementor, axé sur la présentation de services de développement web. Le site comprend des sections dynamiques. Design responsive et optimisé pour le SEO, garantissant une expérience utilisateur fluide sur tous les appareils.',
      image: 'assets/projects/wordpress-portfolio1.png',
      technologies: ['WordPress', 'Elementor', 'Lighthouse'],
      demo: 'https://gabriel-menezes.com',
    },
    {
      title: 'Plateforme de Gestion des Étudiants et des Formations (2024)',
      description:
        "Développement d'une plateforme de gestion scolaire adaptée aux besoins spécifiques d'une institution éducative. Fonctionnalités clés : gestion des profils d'étudiants, système de chat de groupe par formation, calendrier des cours personnalisable, portail de cours enregistrés. Application PWA avec Firebase pour la gestion des données et des utilisateurs en temps réel.",
      image: 'assets/projects/nomades1.png',
      technologies: [
        'PWA',
        'Angular',
        'Firebase',
        'TypeScript',
        'HTML',
        'CSS',
        'API REST',
        'Lighthouse',
      ],
      github: 'https://github.com/MenteaSolutions/MenteaSolutions.git',
      demo: 'https://zoomnomades-e95cd.web.app/login',
    },
  ];

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.projectsPerPage);
  }

  get paginatedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    return this.projects.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages && !this.isTransitioning) {
      this.isTransitioning = true;

      setTimeout(() => {
        this.currentPage = page;
        this.isTransitioning = false;
      }, 300);
    }
  }

  getTechLogo(tech: string): TechLogo | null {
    return this.techLogos[tech] || null;
  }
}
