import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent {

  constructor( private fb:FormBuilder , private commonserv:CommonService , private router:Router){}


  campreg = this.fb.group({
    organisationName:['', Validators.required],
    email:['', Validators.required],
    phone:['', Validators.required],
    location:['', Validators.required],
    date:['', Validators.required],
  })

  get f() {
    return this.campreg.controls;
  }

  onSubmit() {
    const formvalues = this.campreg.value
    console.log(formvalues);
    this.commonserv.campReg(formvalues).subscribe({
      next:(data)=>{
        console.log("succesfully created", data);
        alert("camp registraion succesfull")
        this.router.navigateByUrl('')

      },
      error:(error)=>{
        console.log(error);

      }
    })

  }


}
