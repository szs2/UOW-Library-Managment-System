import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AddreaderComponent } from './addreader/addreader.component';
import { DisplabookComponent } from './displabook/displabook.component';
import { DisplaydvdComponent } from './displaydvd/displaydvd.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import{  FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule } from '@angular/common/http';
import { DisplayreaderComponent } from './displayreader/displayreader.component';
import { OtherComponent } from './other/other.component';
import { RemovereaderComponent } from './removereader/removereader.component';
import { DisplayissueComponent } from './displayissue/displayissue.component';
import { Displaybook1Component } from './displaybook1/displaybook1.component';
import { Displaybook2Component } from './displaybook2/displaybook2.component';
import { Displaybook3Component } from './displaybook3/displaybook3.component';
import { Displaybook4Component } from './displaybook4/displaybook4.component';
import { Displaydvd1Component } from './displaydvd1/displaydvd1.component';
import { Displaydvd2Component } from './displaydvd2/displaydvd2.component';
import { Displaydvd3Component } from './displaydvd3/displaydvd3.component';
import { Displaydvd4Component } from './displaydvd4/displaydvd4.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    TopnavComponent,
    AddreaderComponent,
    DisplabookComponent,
    DisplaydvdComponent,
    DeletebookComponent,
    MainnavComponent,
    DisplayreaderComponent,
    OtherComponent,
    RemovereaderComponent,
    DisplayissueComponent,
    Displaybook1Component,
    Displaybook2Component,
    Displaybook3Component,
    Displaybook4Component,
    Displaydvd1Component,
    Displaydvd2Component,
    Displaydvd3Component,
    Displaydvd4Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
