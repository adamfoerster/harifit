import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { first, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class CoreService {
  user: User;
  loading: any;

  constructor(public fireAuth: AngularFireAuth, public loadingCtrl: LoadingController) {
    this.fireAuth.user.pipe(
      distinctUntilChanged((user, prev) => JSON.stringify(user) === JSON.stringify(prev)),
      debounceTime(200),
    ).subscribe(user => this.user = user);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando...',
    });
    return await this.loading.present();
  }

  removeLoading() {
    this.loading.dismiss();
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
