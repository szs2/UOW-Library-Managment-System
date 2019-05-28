import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addreader',
  templateUrl: './addreader.component.html',
  styleUrls: ['./addreader.component.css']
})
export class AddreaderComponent implements OnInit {

  readerForm: FormGroup;
  constructor(private http: HttpClient) {
    this.readerForm = new FormGroup({
      'm_id' : new FormControl(null),
      'f_name' : new FormControl(null),
      'l_name' : new FormControl(null),
      'm_number' : new FormControl(null),
      'm_email' : new FormControl(null),
      
    })
   }

   

  ngOnInit() {
  }

  addreaderMethod(){
      let obj ={};
      obj['readername'] = this.readerForm.value;

    const formData = JSON.stringify(obj);
    return this.http.post('http://localhost:9000/addreader', formData, {headers: {'Content-Type' : 'application/json'} })
    .subscribe((data) =>{
      console.log('reg success:', data)
    }, error =>{
      console.log(JSON.stringify(error.json()));
    });   

    
  }

  addrerMethod() {
    const formData = JSON.stringify(this.readerForm.value);
     this.http.post('http://localhost:9000/api/addReader', formData)
    .subscribe((r) => alert(r));
  }
}
