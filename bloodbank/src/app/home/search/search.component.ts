import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private fb: FormBuilder, private commonserv: CommonService) {}
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  places: string = '';
  searchResult: any[] = [];
message:string = ''



  searchForm = this.fb.group({
    bloodGroup: ['', Validators.required],
    city: ['', Validators.required],
  });

  get f() {
    return this.searchForm.controls;
  }

  onSearch() {
    const searchvalue = this.searchForm.value;

    this.commonserv.search(searchvalue).subscribe({
      next: (res: any) => {

        console.log(res);
        this.searchResult = res;
        if (this.searchResult.length == 0){

          this.message = 'no data available'
          console.log("no data availavble");

        } else {

          for (const result of this.searchResult) {
            console.log(result.name);

          }
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }



}
