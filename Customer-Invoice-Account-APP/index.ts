var cust={
    ID:20,
    name:'John',
    discount:40
}
var invo={
 ID:5,
    amount:1000
}
var acc={
    ID:1,
    balance:1000
}
interface details{
      ID:number,
      name:string,
      discount:number
}
interface accountDetails{
      ID:number,
    //   customer:string,
      balance?:number
}
interface invoiceDetails{
     ID:number,
     amount:number
}

class Customer{

    id:number;
    name:string;
    discount:number;
      constructor(info:details){
          this.id=info.ID,
          this.name=info.name,
          this.discount=info.discount
      }
      getID():number{
          return this.id
      }
      getName():string{
          return this.name
      }
      getDiscount():number{
          return this.discount
      }
      setDiscount(Newdiscount:number){
          this.discount=Newdiscount
      }
      toString():string{
          return `${this.name}(${this.id})`
      }

}
var customer=new Customer(
cust
)

console.log(customer.getID())

class Invoice extends Customer{
    id:number;
    customer:Customer;
    amount:number
    constructor(invoice:invoiceDetails,info:details=cust){
        super(info);
        this.id=invoice.ID;
        this.customer=new Customer(info);
        this.amount=invoice.amount
    }
    getID(){
        return this.id
    }
    getCustomer(){
        return this.customer;
    }
    setCustomer(obj:details){
         this.customer=new Customer(obj)
    }
    getAmount():string{
          return this.amount.toString();
    }
    setAmount(amount){
        this.amount=amount;
    }
    getCustomerName():string{
        return this.customer.getName()
    }
    getAmountAfterDiscount(){
        return (this.amount-(this.amount*this.customer.discount/100)).toFixed(2)
    }

}


class Accounts extends Customer{
     id:number;
     customer:Customer;
     balance?:number=0.00;
     constructor(account:accountDetails,info:details=cust){
         super(info);
         this.id=account.ID;
         this.customer=new Customer(info);
         this.balance=account.balance
     }
    getID():number{
        return this.id
    }
    getCustomer(){
        return this.customer
    }
    getBalance(){
        return this.balance;
    }
    setBalance(balance){
           return this.balance=balance
    }
    toString():string{
        return `${this.customer.toString()}  balance=$${this.getBalance()}`
    }
    getCustomerName():string{
        return this.customer.getName();
    }
    deposit(amount:number){
        return this.balance=this.balance+ +amount
    }
    withdraw(amount){
         if(this.balance>=amount){
              this.balance=this.balance-amount
         }else{
             alert(`Amount withdrawn exceeds the current balance!`)
         }
    }


}

var accounts=new Accounts(acc)

var invoice=new Invoice(invo)
  


var div=document.createElement('div');
div.setAttribute('class','container');
document.body.append(div);
div.innerHTML=`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="customer.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Customer</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${customer.id}</li>
    <li class="list-group-item">Name: ${customer.name}</li>
    <li class="list-group-item" id="disc">Discount: ${customer.discount}%
  </ul>
  <div class="card-body">
   
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${customer.id}">
    Get ID
</button>
   

     <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${customer.name}">
    Get Name
</button> </br>
  <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${customer.discount}" id="getDisc">
    Get Discount
</button>
  <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" onclick=SetDis() >
    Set Discount
</button> </br>
 <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${customer.toString()}">
    To string
</button>
  </div>
</div>`
div.innerHTML+=`<div class="card" style="width: 18rem; margin-top:70px">
  <img class="card-img-top" src="invoice.png" alt="Card image cap" style="height:250px">
  <div class="card-body">
    <h5 class="card-title">Invoice</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${invoice.id}</li>
    <li class="list-group-item">Customer: ${invoice.customer.name}</li>
    <li class="list-group-item" id="amount">Amount: ${invoice.amount}</li>
  </ul>
  <div class="card-body">
   <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${invoice.id}">
    Get ID
</button>
<button type="button" id="getCust" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="ID: ${invoice.customer.id} Name: ${invoice.customer.getName()} Discount: ${invoice.customer.getDiscount()}">
    Get Customer
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${invoice.getAmount()}" id="getAmount">
    Get Amount
</button>
 <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" onclick=SetAmount() >
    Set Amount
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${invoice.getAmountAfterDiscount()}" id="afterDisc">
    Get Amount After Discount
</button>

  </div>
</div>`
div.innerHTML+=`<div class="card" style="width: 18rem; margin-top:90px">
  <img class="card-img-top" src="accounts.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Accounts</h5>
   
  </div>
  <ul class="list-group list-group-flush">
     <li class="list-group-item">ID: ${accounts.id}</li>
    <li class="list-group-item">Customer: ${accounts.customer.name}</li>
    <li class="list-group-item" id="bal">Balance: ${accounts.balance}</li>
  </ul>
  <div class="card-body">
     <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${accounts.id}">
    Get ID
</button>
<button type="button" id="getCust2" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="ID: ${accounts.customer.id} Name: ${accounts.customer.getName()} Discount: ${accounts.customer.getDiscount()}">
    Get Customer
</button>
  <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${accounts.getBalance()}"id="getBal">
    Get Balance
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-placement="top" onclick=SetBal()>
    Set Balance
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${accounts.toString()}" id="tostr">
    To string
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top"  id="deposit" onclick=deposit()>
    Deposit
</button>
<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top"  id="withdraw" onclick=withdraw()>
    Withdraw
</button>
  </div>
</div>`
// div.append(div1)

var SetDis=()=>{
   var val=prompt("Enter the discount");
   var disc=document.getElementById('disc')
    customer.setDiscount(parseInt(val))
    disc.innerHTML=`Discount: ${customer.getDiscount()}%`
    var getDisc=document.getElementById('getDisc');
    getDisc.setAttribute("data-content",`${customer.getDiscount()}`);
    cust.discount=parseInt(val);
    invoice=new Invoice(invo);
    var getCust=document.getElementById('getCust');
    getCust.setAttribute("data-content",`ID: ${invoice.customer.id} Name: ${invoice.customer.getName()} Discount: ${invoice.customer.getDiscount()}`);
    var afterDisc=document.getElementById('afterDisc');
     afterDisc.setAttribute("data-content",`${invoice.getAmountAfterDiscount()}`);
    accounts=new Accounts(acc)
     var getCust2=document.getElementById('getCust2');
    getCust2.setAttribute("data-content",`ID: ${accounts.customer.id} Name: ${accounts.customer.getName()} Discount: ${accounts.customer.getDiscount()}`);
       
}

var SetAmount=()=>{
   var val=prompt("Enter the Amount");
   var amount=document.getElementById('amount')
    invoice.setAmount(parseInt(val));
    amount.innerHTML=`Amount: ${invoice.getAmount()}`;
    invo.amount=parseInt(val);
   var getAmount=document.getElementById('getAmount');
   getAmount.setAttribute("data-content",`${invoice.getAmount()}`);
    var afterDisc=document.getElementById('afterDisc');
  afterDisc.setAttribute("data-content",`${invoice.getAmountAfterDiscount()}`);
     
}
var SetBal=()=>{
    var val=prompt("Enter the Amount");
    accounts.setBalance(+val);
    var bal=document.getElementById('bal');
    bal.innerHTML=`Balance: ${accounts.getBalance()}`;
    acc.balance=parseInt(val);
     var getBal=document.getElementById('getBal');
   getBal.setAttribute("data-content",`${accounts.getBalance()}`);
   var totsr=document.getElementById('tostr');
   totsr.setAttribute("data-content",`${accounts.toString()}`);
  
}  
var deposit=()=>{
    var val=prompt("Enter the amount");
    accounts.deposit(+val);
   var bal=document.getElementById('bal');
    bal.innerHTML=`Balance: ${accounts.getBalance()}`;
    acc.balance=parseInt(val);
     var getBal=document.getElementById('getBal');
   getBal.setAttribute("data-content",`${accounts.getBalance()}`);
   var totsr=document.getElementById('tostr');
   totsr.setAttribute("data-content",`${accounts.toString()}`);
  
}
var withdraw=(=>{
     var val=prompt("Enter the amount");
    accounts.withdraw(+val);
   var bal=document.getElementById('bal');
    bal.innerHTML=`Balance: ${accounts.getBalance()}`;
    acc.balance=parseInt(val);
     var getBal=document.getElementById('getBal');
   getBal.setAttribute("data-content",`${accounts.getBalance()}`);
   var totsr=document.getElementById('tostr');
   totsr.setAttribute("data-content",`${accounts.toString()}`);
  
})
 
 $(function () {
    $('[data-toggle="popover"]').popover()
 })