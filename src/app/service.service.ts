import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  get user() {
    return this.afAuth.user;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  async login(email: string, password: string) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.router.navigate(['/']);
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    // await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['login']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
}
