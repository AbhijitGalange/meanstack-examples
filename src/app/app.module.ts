import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


import { MyhttpService } from './services/myhttp.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutusComponent,
    ContactusComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [MyhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
