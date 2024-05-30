import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: String = '' ;
  showHeader: boolean = true;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.name = localStorage.getItem('username') || '';
    console.log(this.name);
  }

  logout() {
    localStorage.removeItem('username');

    alert('logout succsfully');
    this.name = ''
    this.router.navigate([''])

  }
}
