import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    console.log('Formulaire soumis:', this.formData);
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
