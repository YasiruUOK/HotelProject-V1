import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandicraftComponent } from './handicraft/handicraft.component';
import { HomeComponent } from './home/home.component';
import { HotelMainPageComponent } from './hotel-main-page/hotel-main-page.component';
import { ScooterByteComponent } from './scooter-byte/scooter-byte.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Handicraft', component: HandicraftComponent },
  { path: 'HotelMainPage', component: HotelMainPageComponent },
  { path: 'ScooterByte', component: ScooterByteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
