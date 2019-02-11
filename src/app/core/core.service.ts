import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import {
  first,
  filter,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import { LoadingController, PopoverController } from '@ionic/angular';

@Injectable()
export class CoreService {
  user: User;
  loading: any;
  dialog: any;

  constructor(
    public fireAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController
  ) {
    this.fireAuth.user
      .pipe(
        distinctUntilChanged(
          (user, prev) => JSON.stringify(user) === JSON.stringify(prev)
        ),
        debounceTime(200)
      )
      .subscribe(user => (this.user = user));
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando...'
    });
    return await this.loading.present();
  }

  async createDialog(component) {
    this.dialog = await this.popoverCtrl.create({
      component: component,
      translucent: true,
    });
    await this.dialog.present();
    return this.dialog.onDidDismiss();
  }

  closeDialog() {
    this.dialog.dismiss();
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
