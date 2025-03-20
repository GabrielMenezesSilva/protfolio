import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'WordPress', icon: 'fab fa-wordpress', level: 90 },
        { name: 'Angular', icon: 'fab fa-angular', level: 80 },
        { name: 'TypeScript', icon: 'fab fa-js', level: 60 },
        { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
        { name: 'React', icon: 'fab fa-react', level: 50 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Python', icon: 'fab fa-python', level: 65 },
        { name: 'MongoDB', icon: 'fas fa-database', level: 60 },
      ],
    },
    {
      name: 'Outils',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
        { name: 'Figma', icon: 'fab fa-figma', level: 80 },
      ],
    },
  ];
}
