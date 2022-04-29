function checkCashRegister(price, cash, cid) {

    class cashRegister {
    
      constructor (arr) {
    
      this["PENNY"] = arr[0][1];
      this["NICKEL"] = arr[1][1];
      this["DIME"] = arr[2][1];
      this["QUARTER"] = arr[3][1];
      this["ONE"] = arr[4][1];
      this["FIVE"] = arr[5][1];
      this["TEN"] = arr[6][1];
      this["TWENTY"] = arr[7][1];
      this["ONE HUNDRED"] = arr[8][1];
      this._funds = arr[0][1] + arr[1][1] + arr[2][1] +arr[3][1] + arr[4][1] + arr[5][1] + arr[6][1] +arr[7][1] + arr[8][1];
      this._itemsPrice = 0;
      this._bill = 0;
      this._status = '';
      
       
    }
    get diference () { //por alguna razon no funciona devolviendo una variable que haga antes la cuenta
    return this._bill - this._itemsPrice;
    }
    
    set itemsPrice(itemPrice){
      this._itemsPrice = itemPrice;
    }
    
    set bill(billAmount) {
      this._bill = billAmount;
     
    }
    
    set status(diference) {
    if (this._funds > diference){
      if (diference < 1) {
        if ((this["PENNY"] + this["NICKEL"] + this["DIME"]+ this["QUARTER"]) < diference) {
          this._status = 'INSUFFICIENT_FUNDS';
        } else {this._status = 'OPEN';}
      } else {this._status = 'OPEN';}
        
      } else if (this._funds < diference){
        this._status = 'INSUFFICIENT_FUNDS'
      } else if (this._funds === diference){this._status = 'CLOSED'}
    
    
    }
    
    get out (){
      if (this._status === 'INSUFFICIENT_FUNDS'){
        return {status: 'INSUFFICIENT_FUNDS', change: []};
      }
    
      if (this._status === 'OPEN'){
        if(this._bill === 20){
          return {status: 'OPEN', change: [["QUARTER", 0.5]]}
        } else {return {status: 'OPEN', change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
      }}
    
      if (this._status === 'CLOSED') {
        return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]};
      }
    
    }
    
    } 
    
    let cashStock = new cashRegister(cid);
    
    
    cashStock.itemsPrice = price;
    cashStock.bill = cash;
    cashStock.status = cashStock.diference;
    
    return cashStock.out
    
    }
    
    