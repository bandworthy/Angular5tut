import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { } 

// ...

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }