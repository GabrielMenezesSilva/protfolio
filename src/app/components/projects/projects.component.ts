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
      title: 'Site WordPress',
      description:
        'Site professionnel développé avec WordPress et Elementor, axé sur la présentation de services de développement web. Le site comprend des sections dynamiques pour le portfolio. Design responsive et optimisé pour le SEO, garantissant une expérience utilisateur fluide sur tous les appareils.',
      image: 'assets/projects/wordpress-portfolio1.png',
      technologies: ['WordPress', 'Elementor', 'SEO', 'Design Responsive'],
      demo: 'https://gabriel-menezes.com',
    },
    {
      title: 'Plateforme de Gestion des Étudiants et Formations (2024)',
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
      ],
      demo: 'https://zoomnomades-e95cd.web.app/login',
    },
    {
      title: 'Portfolio Personnel',
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
      ],
      github: 'https://github.com/GabrielMenezesSilva/portfolio',
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
}
