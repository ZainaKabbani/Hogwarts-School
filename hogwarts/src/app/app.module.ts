import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { HousesService } from './services/houses.service';
import { DAStudentsService } from './services/dastudents.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SchoolYearComponent } from './components/school-year/school-year.component';
import { StaffComponent } from './components/staff/staff.component';
import { HousesComponent } from './components/houses/houses.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { DumbledoreArmyComponent } from './components/dumbledore-army/dumbledore-army.component';
import { NamePipe } from './pipes/name.pipe';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { JoinComponent } from './components/join/join.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SchoolYearComponent,
    StaffComponent,
    HousesComponent,
    HouseDetailsComponent,
    DumbledoreArmyComponent,
    NamePipe,
    ConfirmDeleteComponent,
    JoinComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,



    ClickOutsideModule
  ],
  providers: [HousesService, DAStudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
