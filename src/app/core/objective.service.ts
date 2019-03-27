import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, switchMap, tap, filter } from 'rxjs/operators';
import { Objective } from '../interfaces';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';
import { User } from 'firebase';

@Injectable()
export class ObjectiveService {
  constructor(private db: AngularFirestore, private core: CoreService) {}

  get objectives$(): Observable<Objective[]> {
    return this.db
      .collection<Objective>('objectives')
      .valueChanges()
      .pipe(first());
  }

  get myObjective$(): Observable<Objective> {
    return this.core.user$
      .pipe(
        filter(u => !!u),
        first(),
        switchMap((user: User) =>
          this.db
            .collection('objectives')
            .doc<Objective>(user.email)
            .valueChanges()
        ),
        first()
      );
  }

  setMonthProgress(weight) {
    this.core.presentLoading();
    const currentMonth = new Date().getMonth() + 1;
    // weight = parseFloat(weight.replace(',', '.'));
    return this.myObjective$.pipe(
      switchMap(obj => {
        const objectiveToBeSet = {
          ...obj,
          progress: {
            ...obj.progress,
            [currentMonth]: weight
          }
        };
        return this.db
          .collection('objectives')
          .doc(this.core.user.email)
          .set(objectiveToBeSet)
          .then(_ => this.core.removeLoading());
      })
    );
  }
}
