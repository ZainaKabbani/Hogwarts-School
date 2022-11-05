import { Component, OnInit } from '@angular/core';

import { StaffService } from '../../services/staff.service';

import { IStaff } from './../../interfaces/staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  constructor(private staffService: StaffService) {}

  staff: IStaff[] = [];

  ngOnInit(): void {
    this.staff = this.staffService.getStaff();
  }
}
