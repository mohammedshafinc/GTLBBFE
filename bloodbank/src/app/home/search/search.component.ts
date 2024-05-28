import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private fb: FormBuilder) {}
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  places: string = '';

  searchForm = this.fb.group({
    bloodGroup: ['', Validators.required],
    place: ['', Validators.required],
  });

  get f() {
    return this.searchForm.controls;
  }

  onSearch() {
    const searchvalue = this.searchForm.value;
    console.log(searchvalue);
  }
}
