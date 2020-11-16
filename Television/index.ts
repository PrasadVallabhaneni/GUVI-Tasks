var getURL = {
    url: 'https://api.pexels.com/videos/search?query=nature&per_page=10',
    key: "563492ad6f917000010000016804877eb05f437b9a465fae901662fc"
}
var getURL2 = {
    url: "https://api.pexels.com/videos/search?query=sports&per_page=10",

    key: "563492ad6f917000010000016804877eb05f437b9a465fae901662fc"
}

interface api {
    url: string,
    key: string
}
var id;
var div = document.createElement('div');
var div2 = document.createElement('div');
var play = document.createElement('button');
play.innerHTML = `Play`
play.setAttribute('class', 'btn btn-success');
play.setAttribute('type', 'button');
play.setAttribute('id', 'play');

var channel1 = document.createElement('button');
channel1.innerHTML = `Channel-1`
channel1.setAttribute('class', 'btn btn-success');
channel1.setAttribute('type', 'button');
channel1.setAttribute('id', 'ch-1');
var channel2 = document.createElement('button');
channel2.innerHTML = `Channel-2`
channel2.setAttribute('class', 'btn btn-success');
channel2.setAttribute('type', 'button');
channel2.setAttribute('id', 'ch-2');
var closePlayer = document.createElement('button');
closePlayer.innerHTML = `Close`
closePlayer.setAttribute('class', 'btn btn-danger');
closePlayer.setAttribute('type', 'button');
closePlayer.setAttribute('id', 'close');
var next = document.createElement('button');
next.innerHTML = `Next`
next.setAttribute('class', 'btn btn-primary');
next.setAttribute('type', 'button');
next.setAttribute('id', 'next');
var prev = document.createElement('button');
prev.innerHTML = `Prev`
prev.setAttribute('class', 'btn btn-primary');
prev.setAttribute('type', 'button');
prev.setAttribute('id', 'prev');
var volUp = document.createElement('button');
volUp.innerHTML = `Volume UP`
volUp.setAttribute('class', 'btn btn-primary');
volUp.setAttribute('type', 'button');
volUp.setAttribute('id', 'up');
var voldwn = document.createElement('button');
voldwn.innerHTML = `Volume DOWN`
voldwn.setAttribute('class', 'btn btn-primary');
voldwn.setAttribute('type', 'button');
voldwn.setAttribute('id', 'down');


document.body.append(play, channel1, channel2, closePlayer, next, prev, volUp, voldwn)
var cl = <HTMLButtonElement> document.getElementById('close');
cl.addEventListener('click', cls);


// document.body.append(display);


class getData {
    url : string;
    key : string;
    constructor(API : api) {
        this.url = API.url
        this.key = API.key
    }

    async fetching() {

        var data = await fetch(this.url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.key
            }
        })
        var res = await data.json();
        console.log(res.videos);


        div2.setAttribute('class', 'container');

        div.setAttribute('class', 'container-fluid');
        div.setAttribute('id', 'cards')
        document.body.append(div2);
        div2.append(div);
        res.videos.map((video, i) => {
            div.innerHTML += `<div class="card" style="width: 18rem;" i=${i}>



  <img class="card-img-top" src="${
                video.image
            }" alt="Card image cap" >
  <div class="card-body">
    <h5 class="card-title">${
                video.user.name
            }</h5>
    <p class="card-text">Duration: ${
                video.duration
            }</p>
   
  </div>
</div>`


        });

        var c = document.querySelectorAll('.card');

        c.forEach(ele => {
            var id: number = parseInt(ele.getAttribute('i'))

            ele.addEventListener('click', displayVideo);
            function displayVideo() {
                localStorage.setItem('id', id.toString())
                cl.style.display = 'block';

                div.innerHTML = `<video id="video1" width="100%" height="90%" controls src= 
"${
                    res.videos[id].video_files[1].link
                }">
Browser not supported 
 </video> `
            }


        });

    }

    async next() {
        var data = await fetch(this.url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.key
            }
        })
        var res = await data.json();

        console.log(localStorage.getItem('id'))
        var id = parseInt(localStorage.getItem('id')) + 1;
        console.log(id)
        displayVideo2();
        function displayVideo2() {
            localStorage.setItem('id', id.toString())
            cl.style.display = 'block';

            div.innerHTML = `<video id="video1" width="100%" height="90%" controls src= 
"${
                res.videos[id].video_files[1].link
            }">
Browser not supported 
 </video> `;

        };


    }

    async prev() {
        var data = await fetch(this.url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.key
            }
        })
        var res = await data.json();

        console.log(localStorage.getItem('id'))
        var id = parseInt(localStorage.getItem('id')) - 1;
        console.log(id)
        displayVideo2();
        function displayVideo2() {
            localStorage.setItem('id', id.toString())
            cl.style.display = 'block';

            div.innerHTML = `<video id="video1" width="100%" height="90%" controls src= 
"${
                res.videos[id].video_files[1].link
            }">
Browser not supported 
 </video> `;

        };


    }


}


var ch1 = <HTMLButtonElement> document.getElementById('ch-1');
var ch2 = <HTMLButtonElement> document.getElementById('ch-2')


ch1.addEventListener('click', stream1);

var x;
var data;
function stream1() {
    data = new getData(getURL);
    div.innerHTML = ''
    x = data.fetching();
    ch1.disabled = true;
    ch2.disabled = false;
    var nxt = <HTMLButtonElement> document.getElementById('next')
    nxt.setAttribute('onclick', "data.next()")
    var prev = <HTMLButtonElement> document.getElementById('prev')
    prev.setAttribute('onclick', "data.prev()")


}

ch2.addEventListener('click', stream2);

function stream2() {
    data = new getData(getURL2);
    div.innerHTML = ''
    x = data.fetching();
    ch1.disabled = false;
    ch2.disabled = true;
    var nxt = <HTMLButtonElement> document.getElementById('next')
    nxt.setAttribute('onclick', "data.next()");
    var prev = <HTMLButtonElement> document.getElementById('prev')
    prev.setAttribute('onclick', "data.prev()")


}

document.getElementById('play').addEventListener('click', plays)
function plays() {
    var myVideo = <HTMLVideoElement> document.getElementById("video1");
    if (myVideo.paused) {
        myVideo.play();
        document.getElementById('play').innerHTML = 'Pause'
    } else {
        myVideo.pause();
        document.getElementById('play').innerHTML = 'Play'

    }


}
document.getElementById('up').addEventListener('click', up);
function up() {
    var myVideo = <HTMLVideoElement> document.getElementById("video1");
    myVideo.volume += 0.1;
}
document.getElementById('down').addEventListener('click', dwn);
function dwn() {
    var myVideo = <HTMLVideoElement> document.getElementById("video1");
    myVideo.volume -= 0.1;
}


function cls() {
    if (ch1.disabled) {
        stream1();
        cl.style.display = "none"

    } else {
        stream2();
        cl.style.display = "none"

    }
}

console.log(x)
