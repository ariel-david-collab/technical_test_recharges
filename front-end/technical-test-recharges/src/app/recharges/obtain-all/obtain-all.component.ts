import { Component } from '@angular/core';
import { RechargeService } from "../../recharge-service.service";

@Component({
  selector: 'app-obtain-all',
  templateUrl: './obtain-all.component.html',
  styleUrls: ['./obtain-all.component.css']
})
export class ObtainAllComponent {

  recharges: any[] = [];
  rechargeService: RechargeService;

  constructor(rechargeService: RechargeService) {
    this.rechargeService = rechargeService;
    this.recharges = rechargeService.getRecharges();
  }

}
