import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private operators = [
    { id: 1, name: "movistar" },
    { id: 2, name: "tigo" },
    { id: 3, name: "comcel" },
    { id: 4, name: "uff" },
  ];

  private sellers = [
    { id: 1, firstName: "Ariel David", LastName: "Herrera Ahumada" },
  ];

  private recharges = [
    {
      "id": 1,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 1,
        "name": "movistar"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 2,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 1,
        "name": "movistar"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 3,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 2,
        "name": "tigo"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 4,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 3,
        "name": "comcel",
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 5,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 2,
        "name": "tigo"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 6,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 1,
        "name": "movistar"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
    {
      "id": 7,
      "cellphone": "123456789",
      "value": 15000,
      "operator": {
        "id": 2,
        "name": "tigo"
      },
      "seller": {
        "id": 1,
        "firstName": "Ariel David ",
        "LastName": "Herrera Ahumada",
      }
    },
  ];

  getOperators() {
    return this.operators;
  }

  getSellers() {
    return this.sellers;
  }

  getRecharges() {
    return this.recharges;
  }

  addRecharge(recharge: any) {
    this.recharges.push(recharge);
  }

  getRechargesByOperator() {
    let operatorRecharges: any[] = [];
    this.recharges.map((recharge) => {
      return recharge.operator.name;
    }).forEach((operator) => {
      operatorRecharges.push(
        {
          name: operator,
          rechargesValues: this.recharges.filter(
            (recharge) => {
              return recharge.operator.name === operator;
            }
          ).map(
            (recharge) => {
              return recharge.value;
            }
          ).reduce(
            (a, b) => {
              return a + b;
            }
          ),
          quantity: this.recharges.filter(
            (recharge) => {
              return recharge.operator.name === operator;
            }
          ).length
        }
      );
    });
    return operatorRecharges.filter(
      (recharge, index, self) => {
        return index === self.findIndex(
          (t) => {
            return t.name === recharge.name;
          }
        );
      }
    );
  }

}
