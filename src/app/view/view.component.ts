import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoFormsComponent } from './to-do-forms/to-do-forms.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onOpenAddNewToDoBtnClick(){
    this.dialog.open(ToDoFormsComponent)
  }
}
