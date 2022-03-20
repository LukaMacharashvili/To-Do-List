import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToDoEmitterService } from 'src/app/services/to-do-emitter.service';

@Component({
  selector: 'app-to-do-forms',
  templateUrl: './to-do-forms.component.html',
  styleUrls: ['./to-do-forms.component.css']
})
export class ToDoFormsComponent implements OnInit {

  constructor(private dialog:MatDialog,private toDoEmitter:ToDoEmitterService,private localStorageService:LocalStorageService) { }
  ngOnInit(): void {
  }
  onNewToDoAddBtnClick(data:any){
    this.dialog.closeAll()
    this.localStorageService.addToDoItem(data, "toDo");
    this.toDoEmitter.onToDoAddEmitter.emit(true)
  }
}
