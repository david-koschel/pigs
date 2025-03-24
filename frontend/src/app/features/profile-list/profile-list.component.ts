import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-profile-list',
  imports: [
    NgClass
  ],
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.scss'
})
export class ProfileListComponent {
  profile = this.getRandomProfile();
  isSwiping = false;
  swipeDirection: 'left' | 'right' | '' = '';

  getRandomProfile() {
    const profiles = [
      {
        name: 'Alex', gender: 'Male', preferences: ['Hiking', 'Music'], photo: 'https://picsum.photos/id/1/200'
      },
      {
        name: 'Samantha',
        gender: 'Female',
        preferences: ['Cooking', 'Travel'],
        photo: 'https://picsum.photos/id/2/200'
      },
      {
        name: 'Jordan',
        gender: 'Non-binary',
        preferences: ['Reading', 'Gaming'],
        photo: 'https://picsum.photos/id/3/200'
      },
    ];
    return profiles[Math.floor(Math.random() * profiles.length)];
  }

  like() {
    this.swipe('right');
  }

  pass() {
    this.swipe('left');
  }

  swipe(direction: 'left' | 'right') {
    if (this.isSwiping) return;

    this.swipeDirection = direction;
    this.isSwiping = true;

    setTimeout(() => {
      this.profile = this.getRandomProfile();
      this.swipeDirection = '';
      setTimeout(() => {
        this.isSwiping = false;
      }, 10);
    }, 300);
  }
}


// export function delayAtLeast<T>(delay: number): OperatorFunction<T, T> {
//   return function(source$: Observable<T>): Observable<T> {
//     return combineLatest([timer(delay), source$]).pipe(map(x => x[1]));
//   }
// }
