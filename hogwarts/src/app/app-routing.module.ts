import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SchoolYearComponent } from './components/school-year/school-year.component';
import { StaffComponent } from './components/staff/staff.component';
import { HousesComponent } from './components/houses/houses.component'
import { DumbledoreArmyComponent } from './components/dumbledore-army/dumbledore-army.component';

const routes: Routes = [
  { path: '' , component: HomeComponent } ,
  { path: 'typicalSchoolYear' , component: SchoolYearComponent },
  { path: 'staff' , component: StaffComponent},
  { path: 'houses' ,component: HousesComponent},
  { path: 'dumbledoreArmy',component: DumbledoreArmyComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
