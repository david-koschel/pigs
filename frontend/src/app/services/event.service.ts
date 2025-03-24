import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly http = inject(HttpClient)

  public createEvent(event: Event, userId: number): Observable<Event> {
    return this.http.post<Event>(`http://localhost:8080/api/events/${userId}`, event)
  }
}
