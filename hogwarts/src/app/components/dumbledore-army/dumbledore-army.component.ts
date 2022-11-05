import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { IDAStudents } from 'src/app/interfaces/dastudents';

import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { JoinComponent } from './../join/join.component';

import { DAStudentsService } from './../../services/dastudents.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dumbledore-army',
  templateUrl: './dumbledore-army.component.html',
  styleUrls: ['./dumbledore-army.component.css'],
})
export class DumbledoreArmyComponent implements OnInit {
  constructor(
    private _DAStudentService: DAStudentsService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._DAStudentService.getStudents().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<IDAStudents>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      return data;
    });
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchText: string = '';
  displayedColumns: string[] = ['firstName', 'house', 'delete'];
  dataSource = new MatTableDataSource<IDAStudents>();

  onDelete(id: number) {
    const dialogConfig = new MatDialogConfig();
    
    this._dialog
      .open(ConfirmDeleteComponent, {
        panelClass: ['md:w-3/5', 'w-full'],
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res)
          this._DAStudentService.deleteStudent(id).subscribe((data: any) => {
            this.dataSource = new MatTableDataSource<IDAStudents>(data);
            this.ngOnInit();
            return data;
          });
      });
  }

  join() {
    // const dialogConfig = new MatDialogConfig()
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '20%';
    this._dialog
      .open(JoinComponent, {
        panelClass: ['md:w-3/5', 'w-full'],
        maxHeight: '85vh',
      })
      .afterClosed()
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
}
