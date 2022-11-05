import { Injectable } from '@angular/core';

import { IDAStudents } from './../interfaces/dastudents';
import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DAStudentsService {
  constructor(private _http: HttpClient) {}

  getStudents(): Observable<IDAStudents[]> {
    return this._http.get<IDAStudents[]>(environment.apiUrl + '/api/Army');
  }

  addStudent(student: IDAStudents): Observable<IDAStudents> {
    return this._http.post<IDAStudents>(environment.apiUrl + '/api/Army',student );
  }

  deleteStudent(id: any): Observable<null> {
    return this._http.delete<null>(environment.apiUrl + '/api/Army' + '/' + id);
  }
}
