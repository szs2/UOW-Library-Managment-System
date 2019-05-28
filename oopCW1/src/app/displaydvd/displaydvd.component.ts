import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-displaydvd',
  templateUrl: './displaydvd.component.html',
  styleUrls: ['./displaydvd.component.css']
})
export class DisplaydvdComponent implements OnInit {

  public dvdlists = [];
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    const observable1 =  this.http.get('http://localhost:9000/api/books/getDVDs ');
    observable1.subscribe((r1) => console.log(r1));
    this.getdvdList().subscribe(data => this.dvdlists = data);
  }

  getdvdList(): Observable<DVDs[]> {
    return this.http.get<DVDs[]>('http://localhost:9000/api/books/getDVDs ');

  }
}

export interface DVDs{isbn: number;
  title: string;
 sector: string;
 availableLangs: string;
 availableSubs: string;
 subs: string;
 actors: string;
 producer: string; 
 borrowedDateTime: String;
 burrowedStatus: boolean;
 currentReader: string;
 date: number;
 hours: number;
 minute: number;
 month: number;
 year: number;
 

}
