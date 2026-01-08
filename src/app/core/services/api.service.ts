import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../../models/resource.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000';

  public getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiUrl}/resources`);
  }
}
