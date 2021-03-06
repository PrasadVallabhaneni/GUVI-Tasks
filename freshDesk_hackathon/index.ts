var url = 'https://newaccount1605094398808.freshdesk.com/api/tickets';
var url2 = 'https://newaccount1605094398808.freshdesk.com/api/contacts'

var key = '6FETaMrRGB4aXvT8ymz';
var inp = {
    url: url,
    key: key
}
var cnt = {
    url: url2,
    key: key
}
interface input {
    url: string,
    key: string
}

class Freshdesk {
    url : string;
    key: string;
    id?: number;
    constructor(data : input) {
        this.url = data.url,
        this.key = data.key
    }

    async tickets() {

        var data = await fetch(this.url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)

            }
        })
        var res = await data.json();
        console.log(res)

        var card = document.getElementById('data');
        card.innerHTML = '  <button type = "button" class = "btn btn-primary edit" data-toggle = "modal" data-target = "#createNew"> Create New </button>';


        res.forEach((ticket) => {
            card.innerHTML += `<div class="card">
          <div class="card-header" >
    ${
                ticket.type
            }
  </div>
  <div class="card-body">
    <h5 class="card-title">${
                ticket.subject
            }</h5>
<p class = "card-text" > id : ${
                ticket.id
            } &nbsp;&nbsp;
Created : ${
                ticket.created_at.split('T')
            } &nbsp;
&nbsp;
Due : ${
                ticket.due_by.split('T')

            }
</p>

<button type ="button" class ="btn btn-warning tedit" data-toggle="modal" data-target="#exampleModalCenter" i = "${
                ticket.id
            }" typ="${
                ticket.type
            }" sub="${
                ticket.subject
            }"> Edit </button> <a i="${
                ticket.id
            }"  href="#" class="btn btn-danger tdel" id="delete" >Delete</a>




</div>`;
        })

        var tedit = document.querySelectorAll('.tedit');
        tedit.forEach((btn) => {
            var id: number = + btn.getAttribute('i');
            var type = btn.getAttribute('typ');
            var sub = btn.getAttribute('sub');
            btn.addEventListener('click', function () {
                (< HTMLInputElement > document.getElementById('subject')).value = sub;
                (< HTMLInputElement > document.getElementById('title')).value = type;

                localStorage.setItem('id', id.toString());
                console.log(this.id);
            })

        });
        var list = document.querySelectorAll('.tdel');
        list.forEach((btn) => {
            var id: number = + btn.getAttribute('i');
            btn.addEventListener('click', function () {
                // this.id = id;
                // localStorage.setItem('id',id);
                console.log(this.id);

                fetch(url + '/' + id, {
                    method: "DELETE",

                    headers: {
                        "Content-type": "application/json",
                        "Accept": 'application/json',
                        "Authorization": btoa(key)
                    }
                }).then((resp) => { // console.log(id)

                    console.log(resp);
                    location.reload();

                }).catch((err) => console.log(err))


            })


        })


    };

    async contacts() { // console.log(this.url)
        var data = await fetch(this.url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)

            }
        })
        var res = await data.json();
        console.log(res)
        var card = document.getElementById('data');
        card.innerHTML = `
<button type = "button" class = "btn btn-primary edit" data-toggle = "modal" data-target = "#ContactNew" > Create New </button>




<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Company</th>
<th scope = "col" > Mail </th>
<th scope = "col"> Phone </th>
<th scope = "col"> Edit </th>
<th scope = "col">Delete</i></th>






    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
  </table>`;

        res.forEach((contact) => {

            document.getElementById('tbody').innerHTML += `
    <tr>
     
      <td>${
                contact.name
            }</td>
      <td>${
                contact.job_title
            }</td>
      <td>${
                contact.company_id
            }</td>
<td> ${
                contact.email
            } </td>
      <td>@${
                contact.phone
            }</td>
<td> <button type = "button" class = "btn btn-warning edit fa fa-plus"  data-toggle ="modal" data-target ="#ContactUpdate" i = "${
                contact.id
            }" name="${
                contact.name
            }" email="${
                contact.email
            }"> </button>

</td>
<td> <button type = "button" class = "btn btn-danger del fa fa-trash"   i = "${
                contact.id
            }"></button>
</td>
    </tr>`
        });
        var edit = document.querySelectorAll('.edit');
        edit.forEach((btn) => {
            var id: number = + btn.getAttribute('i');
            var name = btn.getAttribute('name');
            var email = btn.getAttribute('email');
            btn.addEventListener('click', function () {
                (< HTMLInputElement > document.getElementById('name')).value = name;
                (< HTMLInputElement > document.getElementById('emailC')).value = email;

                localStorage.setItem('id', id.toString());
                console.log(this.id);
            })

        });
        var list = document.querySelectorAll('.del');
        list.forEach((btn) => {
            var id: number = + btn.getAttribute('i');
            btn.addEventListener('click', function () {

                console.log(this.id);

                fetch(url2 + '/' + id, {
                    method: "DELETE",

                    headers: {
                        "Content-type": "application/json",
                        "Accept": 'application/json',
                        "Authorization": btoa(key)
                    }
                }).then((resp) => {

                    console.log(resp);
                    location.reload();

                }).catch((err) => console.log(err))


            })


        })


    }


    async update() {

        var s = (< HTMLInputElement > document.getElementById('subject')).value.toString();
        var t = (< HTMLInputElement > document.getElementById('title')).value.toString();
        var id = localStorage.getItem('id')

        console.log(id, s, t)
        var data = {

            "subject": s,
            "type": t,
            'status': 2,
            'priority': 1


        }
        await fetch(this.url + '/' + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)
            }
        }).then((resp) => {
            console.log(resp);
            location.reload();

        }).catch((err) => console.log(err))


    }
    async contactUpdate() {
        var s = (< HTMLInputElement > document.getElementById('name')).value.toString();
        var t = (< HTMLInputElement > document.getElementById('emailC')).value.toString();
        var id = localStorage.getItem('id')

        console.log(id, s, t)
        var data = {

            "name": s,
            "email": t
        }
        await fetch(this.url + '/' + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)
            }
        }).then((resp) => {
            console.log(resp);
            location.reload();

        }).catch((err) => {
            alert('inputs are already present');
            console.log(err)

        })


    }

    async create() {
        var s = (< HTMLInputElement > document.getElementById('subjectNew')).value.toString();
        var t = (< HTMLInputElement > document.getElementById('titleNew')).value.toString();
        var e = (< HTMLInputElement > document.getElementById('email')).value.toString();

        console.log(s, t, e)
        var data = {

            "description": "Details about the issue...",
            "subject": s,
            "email": e,
            "type": t,

            "priority": 1,
            "status": 2

        }
        console.log(data)

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)
            }
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => console.log(err))

        await location.reload();

    }

    async contactCreate() {
        var s = (< HTMLInputElement > document.getElementById('Contactname')).value.toString();
        var t = (< HTMLInputElement > document.getElementById('Contactemail')).value.toString();
        // var id=localStorage.getItem('id')

        //    console.log(id,s,t)
        var data = {

            "name": s,
            "email": t
        }

        console.log(data)

        await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json',
                "Authorization": btoa(key)
            }
        }).then((resp) => {
            console.log(resp);
            location.reload();

        }).catch((err) => {
            console.log(err);
            alert('inputs are already present')
        });
        // await location.reload();


    }

}


var fresh = new Freshdesk(inp);
var contact = new Freshdesk(cnt);
// console.log(contact.contacts())
document.getElementById('save').setAttribute('onclick', 'fresh.update()');
document.getElementById('saveNew').setAttribute('onclick', 'fresh.create()');
document.getElementById('Cupdate').setAttribute('onclick', 'contact.contactUpdate()')
document.getElementById('Cntnew').setAttribute('onclick', 'contact.contactCreate()')


console.log(fresh.tickets());
