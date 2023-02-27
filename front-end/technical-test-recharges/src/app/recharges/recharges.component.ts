import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RechargeService } from '../recharge-service.service';


@Component({
  selector: 'app-recharges',
  templateUrl: './recharges.component.html',
  styleUrls: ['./recharges.component.css']
})
export class RechargesComponent {


  rechargeService: RechargeService = new RechargeService();
  rechargeForm: FormGroup = new FormGroup({});
  operators: any = [];
  sellers: any = [];
  rechargesByOperator: any = [];
  recharges: any = [];
  operator: string = "";
  value: number = 0;
  seller: string = "";
  cellphone: string = "";

  constructor(private formBuilder: FormBuilder, rechargeService: RechargeService) { 
    this.rechargeService = rechargeService;
    this.operators = this.rechargeService.getOperators();
    this.sellers = this.rechargeService.getSellers();
    this.rechargesByOperator = this.rechargeService.getRechargesByOperator();
    this.recharges = this.rechargeService.getRecharges();
  }

  onAddRecharge(): void {
    let recharge: any = {
      id: this.recharges.length + 1,
      operator: this.rechargeService.getOperators().find((operator: any) => {
        return operator.id === Number(this.rechargeForm.get("operator")?.value);
      }),
      value: Number(this.rechargeForm.get("value")?.value),
      seller: this.rechargeService.getSellers().find((seller: any) => {
        return seller.id === Number(this.rechargeForm.get("seller")?.value);
      }),
      cellphone: this.rechargeForm.get("cellphone")?.value
    };
    this.rechargeService.addRecharge(recharge);
    this.loadAll();
    this.rechargeForm.reset();
    alert("¡new recharge added!");
  }

  loadAll() {
    this.operators = this.rechargeService.getOperators();
    this.sellers = this.rechargeService.getSellers();
    this.rechargesByOperator = this.rechargeService.getRechargesByOperator();
    this.recharges = this.rechargeService.getRecharges();
  }

  ngOnInit() {
    this.rechargeForm = this.formBuilder.group({
      operator: ['', Validators.required],
      value: ['', Validators.required],
      seller: ['', Validators.required],
      cellphone: ['', Validators.required]
    });
    this.loadAll();
  }

}
