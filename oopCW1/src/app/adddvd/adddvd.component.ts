import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adddvd',
  templateUrl: './adddvd.component.html',
  styleUrls: ['./adddvd.component.css']
})
export class AdddvdComponent implements OnInit {

  dvdsForm: FormGroup;
  constructor(private http: HttpClient) { 
    this.dvdsForm = new FormGroup({
      'ISBN': new FormControl(null),      
      'dTitle': new FormControl(null),
      'dSector': new FormControl(null),      
      'dLangs': new FormControl(null),
      'dSubs': new FormControl(null),
      'dProducer': new FormControl(null),
      'dActor': new FormControl(null),
      'dDate': new FormControl(null),
      'dMonth': new FormControl(null),
      'dYear': new FormControl(null)

      
    })
  }

  ngOnInit() {
  }

  dvdMethod(){
    let obj ={};
    obj['dvdname'] = this.dvdsForm.value;

  const formData = JSON.stringify(obj);
  return this.http.post('http://localhost:9000/adddvd', formData, {headers: {'Content-Type' : 'application/json'} })
  .subscribe((data) =>{
    console.log('reg success:', data)
  }, error =>{
    console.log(JSON.stringify(error.json()));
  });   

  
}

postDVDData() {
  const formData = JSON.stringify(this.dvdsForm.value);
   this.http.post('http://localhost:9000/api/books/dvdCreate', formData)
  .subscribe((r) => alert(r));
}

}
