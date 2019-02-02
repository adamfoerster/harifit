import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { first, filter, debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class CoreService {
  user: User;
  loading = false;

  constructor(public fireAuth: AngularFireAuth) {
    this.fireAuth.user.pipe(
      distinctUntilChanged((user, prev) => JSON.stringify(user) === JSON.stringify(prev)),
      debounceTime(200),
    ).subscribe(user => this.user = user);
  }

  get user$(): Observable<User> {
    return this.fireAuth.user.pipe(
      filter(user => !!user),
      first()
    );
  }

  login() {
    this.fireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
