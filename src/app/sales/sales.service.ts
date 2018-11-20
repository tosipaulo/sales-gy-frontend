import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  list() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2NhMDcyMGYzNDc1NGQ2NmI1MTEwZSIsImlhdCI6MTU0MjA3NDU0NSwiZXhwIjoxNTQyMTYwOTQ1fQ.gjm8js440zLdLJqOkyog2stclN3aoQeKFfxkaj7JQKs'
      })
    }
    return this.http.get(`${environment.api}/sale`)

  }
}
