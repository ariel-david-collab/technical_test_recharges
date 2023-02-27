import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RechargeService } from 'src/app/recharge-service.service';


@Component({
  selector: 'app-add-recharge-modal',
  templateUrl: './add-recharge-modal.component.html',
  styleUrls: ['./add-recharge-modal.component.css']
})
export class AddRechargeModalComponent {

  rechargeService: RechargeService = new RechargeService();

  operators: any[] = this.rechargeService.getOperators();
  sellers: any[] = this.rechargeService.getSellers();

  @Output() rechargeAdded = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddRechargeModalComponent>,
    rechargeService: RechargeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.rechargeService = rechargeService;
    this.operators = this.rechargeService.getOperators();
    this.sellers = this.rechargeService.getSellers();
  }

  ngOnInit(): void {
    this.operators = this.rechargeService.getOperators();
    this.sellers = this.rechargeService.getSellers();
  }

  onAddRecharge(): void {
    let recharge = {
      id: this.rechargeService.getRecharges().length + 1,
      operator: this.operators.find((operator) => {
        return operator.id === this.data.operator;
      }),
      value: this.data.value,
      seller: this.sellers.find((seller) => {
        return seller.id === this.data.seller;
      }),
      cellphone: this.data.cellphone
    }
    this.rechargeService.addRecharge(recharge);
    this.rechargeAdded.emit();
    this.loadOperatorsAndSellers();
    this.dialogRef.close();
  }

  loadOperatorsAndSellers() {
    this.rechargeService = new RechargeService();
    this.operators = new RechargeService().getOperators();
    this.sellers = new RechargeService().getSellers();
  }

  onNoClick(): void {
    this.loadOperatorsAndSellers();
    this.dialogRef.close();
  }

}
