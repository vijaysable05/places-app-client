import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AddplacespageComponent } from './addplacespage/addplacespage.component';
import { ViewplacespageComponent } from './viewplacespage/viewplacespage.component';

const appRoutes = [
  {path: '', component: LoginpageComponent, pathMatch: 'full'},
  {path: 'addplaces', component: AddplacespageComponent, pathMatch: 'full'},
  {path: 'viewplaces', component: ViewplacespageComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    AddplacespageComponent,
    ViewplacespageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
