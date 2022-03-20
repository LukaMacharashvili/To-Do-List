import { Component, OnInit } from '@angular/core';
import { ToDoEmitterService } from 'src/app/services/to-do-emitter.service';

@Component({
  selector: 'app-to-do-item-details',
  templateUrl: './to-do-item-details.component.html',
  styleUrls: ['./to-do-item-details.component.css']
})
export class ToDoItemDetailsComponent implements OnInit {
  data:any = "";

  constructor(private toDoEmitter:ToDoEmitterService) { }

  ngOnInit(): void {
    this.data = this.toDoEmitter.onToDoGetByIndex
  }

}
