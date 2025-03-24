import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
  styleUrls: ['./contact.component.scss', '../../../styles/animations.scss'],
})
export class ContactComponent implements OnInit {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isLoading = false;
  showSuccess = false;
  showError = false;
  errorMessage = '';

  ngOnInit() {
    emailjs.init('0DSmv7Hy7odfHwAMu');
  }

  async onSubmit() {
    try {
      this.isLoading = true;
      this.showSuccess = false;
      this.showError = false;

      const templateParams = {
        name: this.formData.name,
        message: `Assunto: ${this.formData.subject}\nEmail: ${this.formData.email}\n\nMensagem:\n${this.formData.message}`,
        time: new Date().toLocaleString(),
      };

      await emailjs.send('portfolio', 'template_c50q7qo', templateParams);

      this.showSuccess = true;
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.showError = true;
      this.errorMessage =
        "Une erreur est survenue l'envoi du message. Veuillez réessayer.";
    } finally {
      this.isLoading = false;
    }
  }
}
