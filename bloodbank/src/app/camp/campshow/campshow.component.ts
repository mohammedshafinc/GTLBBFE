import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-campshow',
  templateUrl: './campshow.component.html',
  styleUrls: ['./campshow.component.scss']
})
export class CampshowComponent implements OnInit{

constructor( private commonserv:CommonService) {}
campData: any[] = [];

ngOnInit(): void {
this.getCampData()
}

getCampData(){
  const requestData = {}
  this.commonserv.campData().subscribe({
    next:(data)=>{
      this.campData = data
      console.log(data);
    },
    error:(error) =>{
      console.log(error);

    }
  })
}

}
