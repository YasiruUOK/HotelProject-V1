import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HandicraftComponent } from './handicraft/handicraft.component';
import { HotelMainPageComponent } from './hotel-main-page/hotel-main-page.component';
import { ScooterByteComponent } from './scooter-byte/scooter-byte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HandicraftComponent,
    HotelMainPageComponent,
    ScooterByteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
