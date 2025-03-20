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
      title: 'Site WordPress',
      description:
        "Site professionnel développé avec WordPress, axé sur l'acquisition de clients pour le développement web.",
      image: 'assets/projects/wordpress-portfolio.png',
      technologies: ['WordPress', 'Elementor'],
      demo: 'https://gabriel-menezes.com',
    },
    {
      title: 'Plateforme de Gestion des Étudiants et Formations (2024)',
      description:
        "Développement d'une plateforme de gestion scolaire adaptée aux besoins spécifiques d'une institution éducative. Fonctionnalités clés : gestion des profils d'étudiants, système de chat de groupe par formation, calendrier des cours personnalisable, portail de cours enregistrés. Application PWA avec Firebase pour la gestion des données et des utilisateurs en temps réel.",
      image: 'assets/projects/nomades.png',
      technologies: [
        'Angular',
        'Firebase',
        'TypeScript',
        'HTML',
        'CSS',
        'API REST',
        'PWA',
      ],
      demo: 'https://zoomnomades-e95cd.web.app/login',
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
