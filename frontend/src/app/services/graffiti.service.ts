import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graffiti } from '../models/graffiti.model';

@Injectable({
  providedIn: 'root'
})
export class GraffitiService {
  private apiUrl = 'http://localhost:3000/api/graffiti';

  constructor(private http: HttpClient) { }

  getGraffiti(): Observable<Graffiti[]> {
    return this.http.get<Graffiti[]>(this.apiUrl);
  }

  addGraffiti(data: Graffiti): Observable<Graffiti> {
    return this.http.post<Graffiti>(this.apiUrl, data);
  }

  updateGraffiti(id: string, data: any) {
    return this.http.put<Graffiti>(`${this.apiUrl}/${id}`, data);
  }

  deleteGraffiti(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  likeGraffiti(id: string): Observable<Graffiti> {
  return this.http.put<Graffiti>(`${this.apiUrl}/${id}/like`, {});
  }

  dislikeGraffiti(id: string): Observable<Graffiti> {
    return this.http.put<Graffiti>(`${this.apiUrl}/${id}/dislike`, {});
  }

}
