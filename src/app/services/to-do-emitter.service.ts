import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoEmitterService {

  constructor() { }
  public onToDoAddEmitter:EventEmitter<any> = new EventEmitter()

  public onToDoGetByIndex!:any;
}
