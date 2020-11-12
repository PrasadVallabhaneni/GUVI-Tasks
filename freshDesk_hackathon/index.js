var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// var body = document.getElementById('body');
var url = 'https://newaccount1605094398808.freshdesk.com/api/tickets';
var url2 = 'https://newaccount1605094398808.freshdesk.com/api/contacts';
var key = '6FETaMrRGB4aXvT8ymz';
var inp = {
    url: url,
    key: key
};
var cnt = {
    url: url2,
    key: key
};
var Freshdesk = /** @class */ (function () {
    function Freshdesk(data) {
        this.url = data.url,
            this.key = data.key;
    }
    Freshdesk.prototype.tickets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, card, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: 'GET',
                            headers: {
                                "Content-type": "application/json",
                                "Accept": 'application/json',
                                "Authorization": btoa(key)
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        card = document.getElementById('data');
                        card.innerHTML = '  <button type = "button" class = "btn btn-primary edit" data-toggle = "modal" data-target = "#createNew"> Create New </button>';
                        return [4 /*yield*/, res.map(function (ticket) {
                                card.innerHTML += "<div class=\"card\">\n          <div class=\"card-header\" >\n    " + ticket.type + "\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">" + ticket.subject + "</h5>\n<p class = \"card-text\" > id : " + ticket.id + " &nbsp;&nbsp;\nCreated : " + ticket.created_at.split('T') + " &nbsp;\n&nbsp;\nDue : " + ticket.due_by.split('T') + "\n</p>\n\n<button type =\"button\" class =\"btn btn-warning edit\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" i = \"" + ticket.id + "\"> Edit </button> <a i=\"" + ticket.id + "\"  href=\"#\" class=\"btn btn-danger edit\" id=\"delete\" onclick=\"fresh.localID();fresh.delete()\">Delete</a>\n\n\n\n\n</div>";
                            })];
                    case 3:
                        _a.sent();
                        list = document.querySelectorAll('.edit');
                        return [4 /*yield*/, list.forEach(function (btn) {
                                var id = +btn.getAttribute('i');
                                btn.addEventListener('click', function () {
                                    this.id = id;
                                    localStorage.setItem('id', this.id);
                                    console.log(this.id);
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Freshdesk.prototype.contacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, card, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: 'GET',
                            headers: {
                                "Content-type": "application/json",
                                "Accept": 'application/json',
                                "Authorization": btoa(key)
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        res = _a.sent();
                        console.log(res);
                        card = document.getElementById('data');
                        card.innerHTML = "\n<button type = \"button\" class = \"btn btn-primary edit\" data-toggle = \"modal\" data-target = \"#ContactNew\" > Create New </button>\n\n\n\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Title</th>\n      <th scope=\"col\">Company</th>\n<th scope = \"col\" > Mail </th>\n<th scope = \"col\"> Phone </th>\n<th scope = \"col\"> Edit </th>\n<th scope = \"col\">Delete</i></th>\n\n\n\n\n\n\n    </tr>\n  </thead>\n  <tbody id=\"tbody\">\n  </tbody>\n  </table>";
                        return [4 /*yield*/, res.map(function (contact) {
                                document.getElementById('tbody').innerHTML += "\n    <tr>\n     \n      <td>" + contact.name + "</td>\n      <td>" + contact.job_title + "</td>\n      <td>" + contact.company_id + "</td>\n<td> " + contact.email + " </td>\n      <td>@" + contact.phone + "</td>\n<td> <button type = \"button\" class = \"btn btn-warning edit fa fa-plus\"  data-toggle =\"modal\" data-target =\"#ContactUpdate\" i = \"" + contact.id + "\"> </button>\n\n</td>\n<td> <button type = \"button\" class = \"btn btn-danger edit fa fa-trash\"   i = \"" + contact.id + "\" onclick=\"contact.localID();contact.delete()\"></button>\n</td>\n    </tr>";
                            })];
                    case 3:
                        _a.sent();
                        list = document.querySelectorAll('.edit');
                        return [4 /*yield*/, list.forEach(function (btn) {
                                var id = +btn.getAttribute('i');
                                btn.addEventListener('click', function () {
                                    this.id = id;
                                    localStorage.setItem('id', this.id);
                                    console.log(this.id);
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype.localID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = document.querySelectorAll('.edit');
                        return [4 /*yield*/, list.forEach(function (btn) {
                                var id = +btn.getAttribute('i');
                                btn.addEventListener('click', function () {
                                    this.id = id;
                                    localStorage.setItem('id', this.id);
                                    console.log(this.id);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s, t, id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = document.getElementById('subject').value.toString();
                        t = document.getElementById('title').value.toString();
                        id = localStorage.getItem('id');
                        console.log(id, s, t);
                        data = {
                            "subject": s,
                            "type": t,
                            'status': 2,
                            'priority': 1
                        };
                        return [4 /*yield*/, fetch(this.url + '/' + id, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-type": "application/json",
                                    "Accept": 'application/json',
                                    "Authorization": btoa(key)
                                }
                            }).then(function (resp) {
                                console.log(resp);
                            })["catch"](function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, location.reload()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype.contactUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s, t, id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = document.getElementById('name').value.toString();
                        t = document.getElementById('emailC').value.toString();
                        id = localStorage.getItem('id');
                        console.log(id, s, t);
                        data = {
                            "name": s,
                            "email": t
                        };
                        return [4 /*yield*/, fetch(this.url + '/' + id, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-type": "application/json",
                                    "Accept": 'application/json',
                                    "Authorization": btoa(key)
                                }
                            }).then(function (resp) {
                                console.log(resp);
                            })["catch"](function (err) {
                                alert('inputs are already present');
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, location.reload()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype["delete"] = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = localStorage.getItem('id');
                        console.log(id);
                        return [4 /*yield*/, fetch(this.url + '/' + id, {
                                method: "DELETE",
                                headers: {
                                    "Content-type": "application/json",
                                    "Accept": 'application/json',
                                    "Authorization": btoa(key)
                                }
                            }).then(function (resp) {
                                console.log(resp);
                            })["catch"](function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, location.reload()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s, t, e, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = document.getElementById('subjectNew').value.toString();
                        t = document.getElementById('titleNew').value.toString();
                        e = document.getElementById('email').value.toString();
                        console.log(s, t, e);
                        data = {
                            "description": "Details about the issue...",
                            "subject": s,
                            "email": e,
                            "type": t,
                            "priority": 1,
                            "status": 2
                        };
                        console.log(data);
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-type": "application/json",
                                    "Accept": 'application/json',
                                    "Authorization": btoa(key)
                                }
                            }).then(function (resp) {
                                console.log(resp);
                            })["catch"](function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, location.reload()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Freshdesk.prototype.contactCreate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s, t, id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = document.getElementById('Contactname').value.toString();
                        t = document.getElementById('Contactemail').value.toString();
                        id = localStorage.getItem('id');
                        console.log(id, s, t);
                        data = {
                            "name": s,
                            "email": t
                        };
                        console.log(data);
                        return [4 /*yield*/, fetch(this.url, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-type": "application/json",
                                    "Accept": 'application/json',
                                    "Authorization": btoa(key)
                                }
                            }).then(function (resp) {
                                console.log(resp);
                            })["catch"](function (err) {
                                console.log(err);
                                alert('inputs are already present');
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, location.reload()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Freshdesk;
}());
var fresh = new Freshdesk(inp);
var contact = new Freshdesk(cnt);
// console.log(contact.contacts())
document.getElementById('save').setAttribute('onclick', 'fresh.update()');
document.getElementById('saveNew').setAttribute('onclick', 'fresh.create()');
document.getElementById('Cupdate').setAttribute('onclick', 'contact.contactUpdate()');
document.getElementById('Cntnew').setAttribute('onclick', 'contact.contactCreate()');
console.log(fresh.tickets());
