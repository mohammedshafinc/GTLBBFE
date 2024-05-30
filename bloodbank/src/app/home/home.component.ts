import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: String = '' ;
  showHeader: boolean = true;
  count:number = 0;

  constructor(private router:Router, private commonserv:CommonService){}

  ngOnInit(): void {
    this.name = localStorage.getItem('username') || '';
    console.log(this.name);
    this.getCampCount()


  }

  logout() {
    localStorage.removeItem('username');

    alert('logout succsfully');
    this.name = ''
    this.router.navigate([''])

  }

  getCampCount(){
    this.commonserv.getCampCount().subscribe({
      next:(data)=> {
        console.log(data);
        this.count = data


      }
    })
  }
}
