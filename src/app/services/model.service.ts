import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { appModel } from '../models/app.model';
import { AppModel } from '../interfaces/app.interface';
import { IMessage } from '../interfaces/message-chat';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private appModel$ = new BehaviorSubject<AppModel>(appModel);

  getModel(): Observable<AppModel> {
    return this.appModel$.asObservable();
  }

  getModelValue(): AppModel {
    return this.appModel$.getValue();
  }

  updateModel(fieldsToUpdate: Partial<AppModel>) {
    const newAppModel = { ...this.getModelValue(), ...fieldsToUpdate };
    this.appModel$.next(newAppModel);
    console.log('update model:', this.getModelValue());
  }

  getCurrentMessage(): Observable<IMessage> {
    return this.appModel$.pipe(map((model) => model.currentMessage), distinctUntilChanged());
  }
}
