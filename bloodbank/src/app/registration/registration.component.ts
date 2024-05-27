import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder, private commonserv:CommonService) {}

  registrationForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    mobile: ['',Validators.required],
    dob: ['',Validators.required],
    gender: ['',Validators.required],
    Address: ['',Validators.required],
    bdgrp: ['',Validators.required],
    district: ['',Validators.required],
    city: ['',Validators.required],
    pincode: ['',Validators.required],
    ldd: ['',Validators.required],
  });


get f() {
  return this.registrationForm.controls
}
  onSubmit() {
    // console.log(this.bdgrp);
    const formvalues = this.registrationForm.value
    console.log(formvalues);
    this.commonserv.userReg(formvalues).subscribe({
      next:(res) => {
        console.log(res);

      },
      error:(error) =>{
        console.log(error);

      }
    })


  }
}
