import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRechargeModalComponent } from "../add-recharge-modal/add-recharge-modal.component";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  newRecharge = {
    operator: 0,
    value: 0,
    seller: 0,
    cellphone: ""
  };

  @Output() rechargeAdded = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openAddRechargeModal() {
    const dialogRef = this.dialog.open(AddRechargeModalComponent, {
      width: '400px',
      data: this.newRecharge
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rechargeAdded.emit();
      alert(result);
    });
  }

  ngOnInit() {
  }

}