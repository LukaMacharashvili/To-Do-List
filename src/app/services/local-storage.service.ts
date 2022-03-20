import { Injectable } from '@angular/core';
import { ToDoEmitterService } from './to-do-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private toDoEmitter:ToDoEmitterService) { }
  getToDoList(){
    if(localStorage['toDo']){
    let result = JSON.parse(localStorage['toDo'])
    return result;
    }else{
      localStorage['toDo'] = "[]"
      let result = JSON.parse(localStorage['toDo'])
      return result
    }
  }
  getDoneList(){
    if(localStorage['done']){
      let result = JSON.parse(localStorage['done'])
      return result;
      }else{
        localStorage['done'] = "[]"
        let result = JSON.parse(localStorage['done'])
        return result
      }
  }
  addToDoItem(data:any, arr:any){
    if(localStorage['toDo']){
      let list = JSON.parse(localStorage[arr]);
      list.push(data);
      localStorage[arr] = JSON.stringify(list)
    }
  }
  updateToDoAndDoneList(toDoData:any, doneData:any){
    localStorage['toDo'] = JSON.stringify(toDoData)
    localStorage['done'] = JSON.stringify(doneData)
  }

  deleteToDoItem(index:any, list:any){
    list.splice(index, 1)
    return list;
  }
  updateToDoItem(index:any, data:any){
    let list = JSON.parse(localStorage['toDo'])
    localStorage['toDo'] = JSON.stringify(this.deleteToDoItem(index, list))
    this.addToDoItem(data, "toDo")
  }
  getItemByIndex(index:any, list:any){
    let item = list[index];
    this.toDoEmitter.onToDoGetByIndex = item
  }
}
