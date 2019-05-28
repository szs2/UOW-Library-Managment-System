import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  returnForm: FormGroup;
  constructor(private http: HttpClient) {
    this.returnForm = new FormGroup({
      'r_isbn' : new FormControl(null),
      'reader_id' : new FormControl(null),
      'r_date' : new FormControl(null),
      'r_month' : new FormControl(null),
      'r_year' : new FormControl(null),
      'r_hours' : new FormControl(null),
      'r_mins' : new FormControl(null),
      
    })

  }

  ngOnInit() {
  }

  returnMethod() {
    const formData = JSON.stringify(this.returnForm.value);
     this.http.post('http://localhost:9000/api/returnItem', formData)
    .subscribe((r) => alert(r));
  }

}

