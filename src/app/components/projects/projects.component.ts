import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class ProjectsComponent {
  readonly projectsPerPage = 2; // Alterado para 2 projetos por página
  currentPage = 1;

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
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Scroll suave para o topo da seção de projetos
      document
        .getElementById('projetos')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
