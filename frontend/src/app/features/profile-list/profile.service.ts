import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly http = inject(HttpClient)

  public getUnliked(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/like/unliked/${userId}`)
  }

  public like(userId: number, userLike: any): Observable<void> {
    return this.http.post<void>(`http://localhost:8080/api/like/${userId}`, userLike)
  }
}
