import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email: String = '';
  public password: String = '';
  public error: String = '';
  public usename:string = ''

  constructor(private commonserv: CommonService, private router:Router) {}

  redirectToHome(){
    this.router.navigateByUrl('')
  }

  onSubmit() {
    let obj = {
      email: this.email,
      password: this.password,
    };

    this.commonserv.userLogin(obj).subscribe({
      next: (res) => {

        console.log(res);
        console.log('logged succesfully');
        console.log(res.Name);
        localStorage.setItem('username',res.Name)
        this.redirectToHome()


      },
      error: (error) => {
        console.log(error);
        this.error = error.error.message;
        console.log(this.error);
        console.log('fill all the field');
      },
    });
  }
}
