import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-displabook',
  templateUrl: './displabook.component.html',
  styleUrls: ['./displabook.component.css']
})
export class DisplabookComponent implements OnInit {
  public booklists = [];
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    const observable1 =  this.http.get('http://localhost:9000/api/books/getBooks ');
    observable1.subscribe((r1) => console.log(r1));
    this.getBookList().subscribe(data => this.booklists = data);
  }

  getBookList(): Observable<Books[]> {

    return this.http.get<Books[]>('http://localhost:9000/api/books/getBooks ');

 }

}

export interface Books{isbn: number;
  title: string;
 sector: string;
 authors: string[];
 borrowedDateTime: String;
 burrowedStatus: boolean;
 currentReader: string;
 date: number;
 hours: number;
 minute: number;
 month: number;
 year: number;
 publisher: string;
 totalPages: number;

}
