import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  delbookForm: FormGroup;
  constructor(private http: HttpClient) {
    this.delbookForm = new FormGroup({
      'delISBN': new FormControl(null),
      'deltitle': new FormControl(null)      

    });


  }



  ngOnInit() {
  }


  delBookData() {
    const formData = JSON.stringify(this.delbookForm.value);
     this.http.post('http://localhost:9000/api/books/delete', formData)
    .subscribe((r) => alert(r));
  }

}
