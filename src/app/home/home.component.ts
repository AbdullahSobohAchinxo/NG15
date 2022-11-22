import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleComponent } from './dialogs/dialog-animations-example/dialog-animations-example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
    
}
