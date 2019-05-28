import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdddvdComponent } from './adddvd/adddvd.component';
import { DisplayComponent } from './display/display.component';
import { BorrowComponent } from './borrow/borrow.component';
import { ReturnComponent } from './return/return.component';
import { ReportComponent } from './report/report.component';
import { MainComponent } from './main/main.component';
import { AddreaderComponent } from './addreader/addreader.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplaydvdComponent } from './displaydvd/displaydvd.component';
import { DisplabookComponent } from './displabook/displabook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { OtherComponent } from './other/other.component';
import { DisplayreaderComponent } from './displayreader/displayreader.component';
import { DisplayissueComponent } from './displayissue/displayissue.component';
import { RemovereaderComponent } from './removereader/removereader.component';
import { Displaybook1Component } from './displaybook1/displaybook1.component';
import { Displaybook2Component } from './displaybook2/displaybook2.component';
import { Displaybook3Component } from './displaybook3/displaybook3.component';
import { Displaybook4Component } from './displaybook4/displaybook4.component';
import { Displaydvd1Component } from './displaydvd1/displaydvd1.component';
import { Displaydvd2Component } from './displaydvd2/displaydvd2.component';
import { Displaydvd3Component } from './displaydvd3/displaydvd3.component';
import { Displaydvd4Component } from './displaydvd4/displaydvd4.component';
// import { MainnavComponent } from './mainnav/mainnav.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'main', component:MainComponent}, 
  {path:'add', component:AddComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'adddvd', component:AdddvdComponent},
  {path:'display', component:DisplayComponent},
  {path:'borrow', component:BorrowComponent},
  {path:'return', component:ReturnComponent},
  {path:'report', component:ReportComponent},
  {path:'addreader', component:AddreaderComponent},
  {path:'displaydvd', component:DisplaydvdComponent},
  {path:'displaybook', component:DisplabookComponent},
  {path:'delete', component:DeleteComponent},
  {path:'deletebook', component:DeletebookComponent},
  {path:'other', component:OtherComponent},
  {path:'displayreader', component:DisplayreaderComponent},
  {path:'displayissue', component:DisplayissueComponent},
  {path:'removereader', component:RemovereaderComponent},
  {path:'displaybook1', component:Displaybook1Component},
  {path:'displaybook2', component:Displaybook2Component},
  {path:'displaybook3', component:Displaybook3Component},
  {path:'displaybook4', component:Displaybook4Component},
  {path:'displaydvd1', component:Displaydvd1Component},
  {path:'displaydvd2', component:Displaydvd2Component},
  {path:'displaydvd3', component:Displaydvd3Component},
  {path:'displaydvd4', component:Displaydvd4Component},
 
  // {path:'mainnav', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, AddComponent, AddbookComponent, AdddvdComponent, DisplayComponent,
  BorrowComponent,ReturnComponent, ReportComponent, MainComponent,AddreaderComponent,DeleteComponent,DisplabookComponent,
  DisplaydvdComponent,DeletebookComponent,OtherComponent,DisplayreaderComponent,DisplayissueComponent,RemovereaderComponent,
  Displaybook1Component,Displaybook2Component,Displaybook3Component,Displaybook4Component,Displaydvd1Component, Displaydvd2Component,
   Displaydvd3Component, Displaydvd4Component]
