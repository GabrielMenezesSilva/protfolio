import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  experience: string;
  description: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../../styles/animations.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      description:
        "Technologies et frameworks pour le développement d'interfaces utilisateur modernes",
      skills: [
        {
          name: 'WordPress',
          icon: 'fab fa-wordpress',
          level: 90,
          experience: '5+ ans',
          description:
            "Développement de sites web et d'applications WordPress personnalisées",
        },
        {
          name: 'Angular',
          icon: 'fab fa-angular',
          level: 80,
          experience: '3+ ans',
          description: "Développement d'applications web modernes avec Angular",
        },
        {
          name: 'TypeScript',
          icon: 'fab fa-js',
          level: 60,
          experience: '2+ ans',
          description: 'Programmation orientée objet avec TypeScript',
        },
        {
          name: 'HTML5',
          icon: 'fab fa-html5',
          level: 95,
          experience: '6+ ans',
          description: 'Création de structures web sémantiques et accessibles',
        },
        {
          name: 'CSS3',
          icon: 'fab fa-css3-alt',
          level: 90,
          experience: '6+ ans',
          description: 'Styling avancé et animations CSS',
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          level: 50,
          experience: '1+ an',
          description: "Développement d'interfaces utilisateur avec React",
        },
      ],
    },
    {
      name: 'Backend',
      description:
        'Technologies et frameworks pour le développement côté serveur',
      skills: [
        {
          name: 'Python',
          icon: 'fab fa-python',
          level: 65,
          experience: '2+ ans',
          description: "Développement d'applications backend avec Python",
        },
        {
          name: 'MongoDB',
          icon: 'fas fa-database',
          level: 60,
          experience: '2+ ans',
          description: 'Gestion et manipulation de bases de données NoSQL',
        },
      ],
    },
    {
      name: 'Outils',
      description: 'Outils et technologies essentielles pour le développement',
      skills: [
        {
          name: 'Git',
          icon: 'fab fa-git-alt',
          level: 90,
          experience: '5+ ans',
          description: 'Gestion de versions et collaboration avec Git',
        },
        {
          name: 'Figma',
          icon: 'fab fa-figma',
          level: 80,
          experience: '3+ ans',
          description: "Design d'interfaces et prototypage avec Figma",
        },
      ],
    },
  ];
}
