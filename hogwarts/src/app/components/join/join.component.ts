import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { elementAt } from 'rxjs';

import { IDAStudents } from './../../interfaces/dastudents';
import { DAStudentsService } from './../../services/dastudents.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  constructor(
    private _DAStudentService: DAStudentsService,
    public dialogRef: MatDialogRef<JoinComponent>
  ) {}

  ngOnInit(): void {}

  houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  slytherin: boolean = false;

  student: IDAStudents = {
    id: 0,
    firstName: '',
    lastName: '',
    house: '',
  };

  addStudent() {
    if (!this.slytherin) {
      this._DAStudentService.addStudent(this.student).subscribe((data) => {
        console.log(data);
        this.dialogRef.close(false);
      });
    }
  }

  slytherinCheck(event: any) {
    if (this.student.house === 'Slytherin') this.slytherin = true;
    else this.slytherin = false;
  }
}
