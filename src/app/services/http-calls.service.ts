import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backUrl } from 'src/datas';
import { Project } from 'src/intefaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }

  projects!: Project[];

  setProjects(projs: Project[]): void {
    this.projects = projs;
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${backUrl}projects`)
  }
}
