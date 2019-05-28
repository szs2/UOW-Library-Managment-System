import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {

  path = '';

  constructor(private router: Router, private location: Location) {

    this.router.events.subscribe((val) => {
      this.path = this.location.path();
    });
  }

  ngOnInit() {
  }

}
