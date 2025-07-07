import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  pageTitle = 'Contact Us';

  submitted = false;

  contact: any = {
    full_name: '',
    email: '',
    phone_number: '',
    comment: '',
  };

  submitForm() {
    // Process the form data here (e.g., send it to the server)
    console.log('Form submitted:', this.contact);
    this.submitted = true;
  }
}
