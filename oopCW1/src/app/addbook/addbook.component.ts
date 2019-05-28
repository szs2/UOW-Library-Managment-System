import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  booksForm: FormGroup;
  constructor(private http: HttpClient) {
    this.booksForm = new FormGroup({
      'ISBN': new FormControl(null),      
      'Title': new FormControl(null),
      'Author': new FormControl(null),
      'Publisher': new FormControl(null),
      'no_of_pages': new FormControl(null),
      'Sector': new FormControl(null),
      'Date': new FormControl(null),
      'Month': new FormControl(null),
      'Year': new FormControl(null)
    })
   }

   

  ngOnInit() {
  }

  bookMethod(){
      let obj ={};
      obj['bookname'] = this.booksForm.value;
  
    const formData = JSON.stringify(obj);
    return this.http.post('http://localhost:9000/addbook', formData, {headers: {'Content-Type' : 'application/json'} })
    .subscribe((data) =>{
      console.log('reg success:', data)
    }, error =>{
      console.log(JSON.stringify(error.json()));
    });   
    
  }

postBookData() {
    const formData = JSON.stringify(this.booksForm.value);
     this.http.post('http://localhost:9000/api/books/create', formData)
    .subscribe((r) => alert(r));
  }



}
