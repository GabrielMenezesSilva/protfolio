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
  projects: Project[] = [
    {
      title: 'Portfolio WordPress',
      description:
        "Site professionnel développé avec WordPress, axé sur l'acquisition de clients pour le développement web.",
      image: 'assets/projects/wordpress-portfolio.jpg',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      demo: 'https://gabriel-menezes.com',
    },
    {
      title: 'Système de Gestion',
      description:
        'Application web pour la gestion des clients et des projets, développée avec Angular et Node.js.',
      image: 'assets/projects/management-system.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/seu-usuario/management-system',
      demo: 'https://demo-management-system.com',
    },
    {
      title: 'Plateforme E-commerce',
      description:
        "Plateforme e-commerce complète avec panier d'achat, paiements et zone administrative.",
      image: 'assets/projects/ecommerce.jpg',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/seu-usuario/ecommerce',
      demo: 'https://demo-ecommerce.com',
    },
  ];
}
