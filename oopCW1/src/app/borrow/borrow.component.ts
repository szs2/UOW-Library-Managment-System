import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  borrowForm: FormGroup;
  constructor(private http: HttpClient) {
    this.borrowForm = new FormGroup({
      '_isbn' : new FormControl(null),
      'reader_id' : new FormControl(null),
      'b_date' : new FormControl(null),
      'b_month' : new FormControl(null),
      'b_year' : new FormControl(null),
      'b_hours' : new FormControl(null),
      'b_mins' : new FormControl(null),
      
    })
   }

   

  ngOnInit() {
  }

  borrowsMethod(){
      let obj ={};
      obj['itemname'] = this.borrowForm.value;

    const formData = JSON.stringify(obj);
    return this.http.post('http://localhost:9000/borrow', formData, {headers: {'Content-Type' : 'application/json'} })
    .subscribe((data) =>{
      console.log('reg success:', data)
    }, error =>{
      console.log(JSON.stringify(error.json()));
    });   

    
  }

  borrowMethod() {
    const formData = JSON.stringify(this.borrowForm.value);
     this.http.post('http://localhost:9000/api/borrowItem', formData)
    .subscribe((r) => alert(r));
  }

}
