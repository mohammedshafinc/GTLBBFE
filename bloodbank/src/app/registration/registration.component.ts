import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit{
  errMsg = '';
  maxDate!: Date;
  lastDonate!: String;
  constructor(private fb: FormBuilder, private commonserv: CommonService) {}

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    mobile: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    district: ['', Validators.required],
    city: ['', Validators.required],
    pincode: ['', Validators.required],
    lastDonatedDate: ['', Validators.required],
  });

  get f() {
    return this.registrationForm.controls;
  }


  ngOnInit(): void {
    this.calcuteMaxDate()

    // This prevents the user from selecting a future date or a date exceeding the current date in the "Last Donated Date" field.
    const currentDate = new Date()
    this.lastDonate = currentDate.toISOString().slice(0, 10)

  }
  onSubmit() {
    // console.log(this.bdgrp);
    const formvalues = this.registrationForm.value;
    console.log(formvalues);
    this.commonserv.userReg(formvalues).subscribe({
      next: (res) => {
        console.log(res);
        console.log('suc');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
        this.errMsg = error.error;
      },
    });
  }

  // show date to ensure dob is greaterthan 18

  calcuteMaxDate() {
    const today = new Date();
    console.log(today);
    const year = today.getFullYear() - 18;
    const month = today.getMonth();
    const day = today.getDate();
    console.log(day);
    this.maxDate = new Date(year, month, day);

    console.log(year);
  }
}
