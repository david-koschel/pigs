import {Component, inject, OnInit} from '@angular/core';
import {NgClass, TitleCasePipe} from '@angular/common';
import {ProfileService} from './profile.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {PreferencePipe} from '../preference.pipe';
import {combineLatest, map, Observable, OperatorFunction, timer} from 'rxjs';

@Component({
  selector: 'app-profile-list',
  imports: [
    NgClass,
    PreferencePipe,
    TitleCasePipe
  ],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.scss'
})
export class ProfileListComponent implements OnInit {

  private readonly likeService = inject(ProfileService)
  private readonly authService = inject(AuthService)

  profile: User | undefined;
  isSwiping = false;
  swipeDirection: 'left' | 'right' | '' = '';

  ngOnInit() {
    this.getRandomProfile();
  }

  getRandomProfile() {
    this.likeService.getUnliked(this.authService.user?.id!)
      .subscribe(res => {
        console.log(res);
        this.profile = res;
      });
  }

  like() {
    this.likeService.like(this.authService.user?.id!, {userId: this.profile?.id, liked: true}).subscribe(
      () => this.swipe('right')
    )
  }

  pass() {
    this.likeService.like(this.authService.user?.id!, {userId: this.profile?.id, liked: false}).subscribe(
      () => this.swipe('left')
    )
  }

  swipe(direction: 'left' | 'right') {
    if (this.isSwiping) return;

    this.swipeDirection = direction;
    this.isSwiping = true;

    this.likeService.getUnliked(this.authService.user?.id!)
      .pipe(delayAtLeast(300))
      .subscribe(res => {
        this.profile = res;
        this.swipeDirection = '';
        setTimeout(() => {
          this.isSwiping = false;
        }, 10);
      });
  }
}


export function delayAtLeast<T>(delay: number): OperatorFunction<T, T> {
  return function(source$: Observable<T>): Observable<T> {
    return combineLatest([timer(delay), source$]).pipe(map(x => x[1]));
  }
}
