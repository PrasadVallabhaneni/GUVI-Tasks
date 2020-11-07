var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cust = {
    ID: 20,
    name: 'John',
    discount: 40
};
var invo = {
    ID: 5,
    amount: 1000
};
var acc = {
    ID: 1,
    balance: 1000
};
var Customer = /** @class */ (function () {
    function Customer(info) {
        this.id = info.ID,
            this.name = info.name,
            this.discount = info.discount;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (Newdiscount) {
        this.discount = Newdiscount;
    };
    Customer.prototype.toString = function () {
        return this.name + "(" + this.id + ")";
    };
    return Customer;
}());
var customer = new Customer(cust);
console.log(customer.getID());
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(invoice, info) {
        if (info === void 0) { info = cust; }
        var _this = _super.call(this, info) || this;
        _this.id = invoice.ID;
        _this.customer = new Customer(info);
        _this.amount = invoice.amount;
        return _this;
    }
    Invoice.prototype.getID = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return this.customer;
    };
    Invoice.prototype.setCustomer = function (obj) {
        this.customer = new Customer(obj);
    };
    Invoice.prototype.getAmount = function () {
        return this.amount.toString();
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        return (this.amount - (this.amount * this.customer.discount / 100)).toFixed(2);
    };
    return Invoice;
}(Customer));
var Accounts = /** @class */ (function (_super) {
    __extends(Accounts, _super);
    function Accounts(account, info) {
        if (info === void 0) { info = cust; }
        var _this = _super.call(this, info) || this;
        _this.balance = 0.00;
        _this.id = account.ID;
        _this.customer = new Customer(info);
        _this.balance = account.balance;
        return _this;
    }
    Accounts.prototype.getID = function () {
        return this.id;
    };
    Accounts.prototype.getCustomer = function () {
        return this.customer;
    };
    Accounts.prototype.getBalance = function () {
        return this.balance;
    };
    Accounts.prototype.setBalance = function (balance) {
        return this.balance = balance;
    };
    Accounts.prototype.toString = function () {
        return this.customer.toString() + "  balance=$" + this.getBalance();
    };
    Accounts.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    Accounts.prototype.deposit = function (amount) {
        return this.balance = this.balance + +amount;
    };
    Accounts.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
        }
        else {
            alert("Amount withdrawn exceeds the current balance!");
        }
    };
    return Accounts;
}(Customer));
var accounts = new Accounts(acc);
var invoice = new Invoice(invo);
var div = document.createElement('div');
div.setAttribute('class', 'container');
document.body.append(div);
div.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src=\"customer.png\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Customer</h5>\n   \n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">ID: " + customer.id + "</li>\n    <li class=\"list-group-item\">Name: " + customer.name + "</li>\n    <li class=\"list-group-item\" id=\"disc\">Discount: " + customer.discount + "%\n  </ul>\n  <div class=\"card-body\">\n   \n    <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.id + "\">\n    Get ID\n</button>\n   \n\n     <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.name + "\">\n    Get Name\n</button> </br>\n  <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.discount + "\" id=\"getDisc\">\n    Get Discount\n</button>\n  <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" onclick=SetDis() >\n    Set Discount\n</button> </br>\n <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + customer.toString() + "\">\n    To string\n</button>\n  </div>\n</div>";
div.innerHTML += "<div class=\"card\" style=\"width: 18rem; margin-top:70px\">\n  <img class=\"card-img-top\" src=\"invoice.png\" alt=\"Card image cap\" style=\"height:250px\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Invoice</h5>\n   \n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">ID: " + invoice.id + "</li>\n    <li class=\"list-group-item\">Customer: " + invoice.customer.name + "</li>\n    <li class=\"list-group-item\" id=\"amount\">Amount: " + invoice.amount + "</li>\n  </ul>\n  <div class=\"card-body\">\n   <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + invoice.id + "\">\n    Get ID\n</button>\n<button type=\"button\" id=\"getCust\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"ID: " + invoice.customer.id + " Name: " + invoice.customer.getName() + " Discount: " + invoice.customer.getDiscount() + "\">\n    Get Customer\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + invoice.getAmount() + "\" id=\"getAmount\">\n    Get Amount\n</button>\n <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" onclick=SetAmount() >\n    Set Amount\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + invoice.getAmountAfterDiscount() + "\" id=\"afterDisc\">\n    Get Amount After Discount\n</button>\n\n  </div>\n</div>";
div.innerHTML += "<div class=\"card\" style=\"width: 18rem; margin-top:90px\">\n  <img class=\"card-img-top\" src=\"accounts.png\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Accounts</h5>\n   \n  </div>\n  <ul class=\"list-group list-group-flush\">\n     <li class=\"list-group-item\">ID: " + accounts.id + "</li>\n    <li class=\"list-group-item\">Customer: " + accounts.customer.name + "</li>\n    <li class=\"list-group-item\" id=\"bal\">Balance: " + accounts.balance + "</li>\n  </ul>\n  <div class=\"card-body\">\n     <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + accounts.id + "\">\n    Get ID\n</button>\n<button type=\"button\" id=\"getCust2\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"ID: " + accounts.customer.id + " Name: " + accounts.customer.getName() + " Discount: " + accounts.customer.getDiscount() + "\">\n    Get Customer\n</button>\n  <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + accounts.getBalance() + "\"id=\"getBal\">\n    Get Balance\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-placement=\"top\" onclick=SetBal()>\n    Set Balance\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"" + accounts.toString() + "\" id=\"tostr\">\n    To string\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\"  id=\"deposit\" onclick=deposit()>\n    Deposit\n</button>\n<button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\"  id=\"withdraw\" onclick=withdraw()>\n    Withdraw\n</button>\n  </div>\n</div>";
// div.append(div1)
var SetDis = function () {
    var val = prompt("Enter the discount");
    var disc = document.getElementById('disc');
    customer.setDiscount(parseInt(val));
    disc.innerHTML = "Discount: " + customer.getDiscount() + "%";
    var getDisc = document.getElementById('getDisc');
    getDisc.setAttribute("data-content", "" + customer.getDiscount());
    cust.discount = parseInt(val);
    invoice = new Invoice(invo);
    var getCust = document.getElementById('getCust');
    getCust.setAttribute("data-content", "ID: " + invoice.customer.id + " Name: " + invoice.customer.getName() + " Discount: " + invoice.customer.getDiscount());
    var afterDisc = document.getElementById('afterDisc');
    afterDisc.setAttribute("data-content", "" + invoice.getAmountAfterDiscount());
    accounts = new Accounts(acc);
    var getCust2 = document.getElementById('getCust2');
    getCust2.setAttribute("data-content", "ID: " + accounts.customer.id + " Name: " + accounts.customer.getName() + " Discount: " + accounts.customer.getDiscount());
};
var SetAmount = function () {
    var val = prompt("Enter the Amount");
    var amount = document.getElementById('amount');
    invoice.setAmount(parseInt(val));
    amount.innerHTML = "Amount: " + invoice.getAmount();
    invo.amount = parseInt(val);
    var getAmount = document.getElementById('getAmount');
    getAmount.setAttribute("data-content", "" + invoice.getAmount());
    var afterDisc = document.getElementById('afterDisc');
    afterDisc.setAttribute("data-content", "" + invoice.getAmountAfterDiscount());
};
var SetBal = function () {
    var val = prompt("Enter the Amount");
    accounts.setBalance(+val);
    var bal = document.getElementById('bal');
    bal.innerHTML = "Balance: " + accounts.getBalance();
    acc.balance = parseInt(val);
    var getBal = document.getElementById('getBal');
    getBal.setAttribute("data-content", "" + accounts.getBalance());
    var totsr = document.getElementById('tostr');
    totsr.setAttribute("data-content", "" + accounts.toString());
};
var deposit = function () {
    var val = prompt("Enter the amount");
    accounts.deposit(+val);
    var bal = document.getElementById('bal');
    bal.innerHTML = "Balance: " + accounts.getBalance();
    acc.balance = parseInt(val);
    var getBal = document.getElementById('getBal');
    getBal.setAttribute("data-content", "" + accounts.getBalance());
    var totsr = document.getElementById('tostr');
    totsr.setAttribute("data-content", "" + accounts.toString());
};
var withdraw = (function () {
    var val = prompt("Enter the amount");
    accounts.withdraw(+val);
    var bal = document.getElementById('bal');
    bal.innerHTML = "Balance: " + accounts.getBalance();
    acc.balance = parseInt(val);
    var getBal = document.getElementById('getBal');
    getBal.setAttribute("data-content", "" + accounts.getBalance());
    var totsr = document.getElementById('tostr');
    totsr.setAttribute("data-content", "" + accounts.toString());
});
$(function () {
    $('[data-toggle="popover"]').popover();
});
