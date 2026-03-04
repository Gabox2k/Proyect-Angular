import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../modelos/task_interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  Apiurl = 'https://jsonplaceholder.typicode.com/todos'

  loadTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.Apiurl)
  }

}
