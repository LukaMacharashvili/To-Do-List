import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToDoEmitterService } from 'src/app/services/to-do-emitter.service';
import { ToDoItemDetailsComponent } from '../to-do-item-details/to-do-item-details.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todo:any = [];
  done:any = [];

  constructor(private dialog:MatDialog,private toDoEmitter:ToDoEmitterService,private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    this.todo = this.localStorage.getToDoList()
    this.done = this.localStorage.getDoneList()
    this.toDoEmitter.onToDoAddEmitter.subscribe((response => {
      this.todo = this.localStorage.getToDoList()
    this.done = this.localStorage.getDoneList()
    }))
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.localStorage.updateToDoAndDoneList(this.todo,this.done)
  }
  onToDoItem(index:any){
    let list = JSON.parse(localStorage['toDo'])
    let result = this.localStorage.deleteToDoItem(index,list)
    localStorage['toDo'] = JSON.stringify(result);
    this.todo = this.localStorage.getToDoList()
  }
  onDoneItem(index:any){
    let list = JSON.parse(localStorage['done'])
    let result = this.localStorage.deleteToDoItem(index,list)
    localStorage['done'] = JSON.stringify(result);
    this.done = this.localStorage.getDoneList()
  }
  onToDoSeeDetailsBtnClick(index:any){
    let list = JSON.parse(localStorage['toDo'])
    this.localStorage.getItemByIndex(index, list);
    this.dialog.open(ToDoItemDetailsComponent)
  }
  onDoneSeeDetailsBtnClick(index:any){
    let list = JSON.parse(localStorage['done'])
    this.localStorage.getItemByIndex(index,list)
    this.dialog.open(ToDoItemDetailsComponent)
  }
}
