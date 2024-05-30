import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.scss']
})
export class RequestformComponent {



  resultMessage: string = '';

  questions = [
    { name: 'age', label: 'Are you between 18 and 65 years old?' },
    { name: 'weight', label: 'Do you weigh more than 50 kg (110 lbs)?' },
    { name: 'health', label: 'Are you in good health?' },
    { name: 'travel', label: 'Have you traveled outside of the country in the past 12 months?' },
    { name: 'tattoo', label: 'Have you gotten a tattoo or piercing in the past 12 months?' },
    { name: 'contact', label: 'Have you had close contact with someone who has hepatitis, HIV/AIDS or COVID-19?' }
  ];

  constructor(private fb: FormBuilder, private router:Router) { }

  bloodDonationForm = this.fb.group({
    age: ['', Validators.required],
    weight: ['', Validators.required],
    health: ['', Validators.required],
    travel: ['', Validators.required],
    tattoo: ['', Validators.required],
    contact: ['', Validators.required]
  });


  // checking eligibility
  checkEligibility() {
    if (this.bloodDonationForm.valid) {
      const values = this.bloodDonationForm.value;
      const { age, weight, health, travel, tattoo, contact } = values;

      if (age === 'yes' && weight === 'yes' && health === 'yes' && travel === 'no' && tattoo === 'no' && contact === 'no') {
        this.resultMessage = 'You are eligible to donate blood.';
        alert("You are eligible to donate blood.");
        // Redirect to rregistration
        this.router.navigateByUrl('/registration')
      } else {
        this.resultMessage = 'You are not eligible to donate blood.';
        alert("You are not eligible to donate blood.");
        // Redirect to home
        this.router.navigateByUrl('')

      }
    } else {
      this.resultMessage = 'Please answer all questions.';
    }
  }
}
