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
var getURL = {
    url: 'https://api.pexels.com/videos/search?query=nature&per_page=10',
    key: "563492ad6f917000010000016804877eb05f437b9a465fae901662fc"
};
var getURL2 = {
    url: "https://api.pexels.com/videos/search?query=sports&per_page=10",
    key: "563492ad6f917000010000016804877eb05f437b9a465fae901662fc"
};
var id;
var div = document.createElement('div');
var div2 = document.createElement('div');
var play = document.createElement('button');
play.innerHTML = "Play";
play.setAttribute('class', 'btn btn-success');
play.setAttribute('type', 'button');
play.setAttribute('id', 'play');
var channel1 = document.createElement('button');
channel1.innerHTML = "Channel-1";
channel1.setAttribute('class', 'btn btn-success');
channel1.setAttribute('type', 'button');
channel1.setAttribute('id', 'ch-1');
var channel2 = document.createElement('button');
channel2.innerHTML = "Channel-2";
channel2.setAttribute('class', 'btn btn-success');
channel2.setAttribute('type', 'button');
channel2.setAttribute('id', 'ch-2');
var closePlayer = document.createElement('button');
closePlayer.innerHTML = "Close";
closePlayer.setAttribute('class', 'btn btn-danger');
closePlayer.setAttribute('type', 'button');
closePlayer.setAttribute('id', 'close');
var next = document.createElement('button');
next.innerHTML = "Next";
next.setAttribute('class', 'btn btn-primary');
next.setAttribute('type', 'button');
next.setAttribute('id', 'next');
var prev = document.createElement('button');
prev.innerHTML = "Prev";
prev.setAttribute('class', 'btn btn-primary');
prev.setAttribute('type', 'button');
prev.setAttribute('id', 'prev');
var volUp = document.createElement('button');
volUp.innerHTML = "Volume UP";
volUp.setAttribute('class', 'btn btn-primary');
volUp.setAttribute('type', 'button');
volUp.setAttribute('id', 'up');
var voldwn = document.createElement('button');
voldwn.innerHTML = "Volume DOWN";
voldwn.setAttribute('class', 'btn btn-primary');
voldwn.setAttribute('type', 'button');
voldwn.setAttribute('id', 'down');
document.body.append(play, channel1, channel2, closePlayer, next, prev, volUp, voldwn);
var cl = document.getElementById('close');
cl.addEventListener('click', cls);
// document.body.append(display);
var getData = /** @class */ (function () {
    function getData(API) {
        this.url = API.url;
        this.key = API.key;
    }
    getData.prototype.fetching = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                Authorization: this.key
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        res = _a.sent();
                        console.log(res.videos);
                        div2.setAttribute('class', 'container');
                        div.setAttribute('class', 'container-fluid');
                        div.setAttribute('id', 'cards');
                        document.body.append(div2);
                        div2.append(div);
                        res.videos.map(function (video, i) {
                            div.innerHTML += "<div class=\"card\" style=\"width: 18rem;\" i=" + i + ">\n\n\n\n  <img class=\"card-img-top\" src=\"" + video.image + "\" alt=\"Card image cap\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">" + video.user.name + "</h5>\n    <p class=\"card-text\">Duration: " + video.duration + "</p>\n   \n  </div>\n</div>";
                        });
                        c = document.querySelectorAll('.card');
                        c.forEach(function (ele) {
                            var id = parseInt(ele.getAttribute('i'));
                            ele.addEventListener('click', displayVideo);
                            function displayVideo() {
                                localStorage.setItem('id', id.toString());
                                cl.style.display = 'block';
                                div.innerHTML = "<video id=\"video1\" width=\"100%\" height=\"90%\" controls src= \n\"" + res.videos[id].video_files[1].link + "\">\nBrowser not supported \n </video> ";
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    getData.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            function displayVideo2() {
                localStorage.setItem('id', id.toString());
                cl.style.display = 'block';
                div.innerHTML = "<video id=\"video1\" width=\"100%\" height=\"90%\" controls src= \n\"" + res.videos[id].video_files[1].link + "\">\nBrowser not supported \n </video> ";
            }
            var data, res, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                Authorization: this.key
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        res = _a.sent();
                        console.log(localStorage.getItem('id'));
                        id = parseInt(localStorage.getItem('id')) + 1;
                        console.log(id);
                        displayVideo2();
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    getData.prototype.prev = function () {
        return __awaiter(this, void 0, void 0, function () {
            function displayVideo2() {
                localStorage.setItem('id', id.toString());
                cl.style.display = 'block';
                div.innerHTML = "<video id=\"video1\" width=\"100%\" height=\"90%\" controls src= \n\"" + res.videos[id].video_files[1].link + "\">\nBrowser not supported \n </video> ";
            }
            var data, res, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                Authorization: this.key
                            }
                        })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, data.json()];
                    case 2:
                        res = _a.sent();
                        console.log(localStorage.getItem('id'));
                        id = parseInt(localStorage.getItem('id')) - 1;
                        console.log(id);
                        displayVideo2();
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    return getData;
}());
var ch1 = document.getElementById('ch-1');
var ch2 = document.getElementById('ch-2');
ch1.addEventListener('click', stream1);
var x;
var data;
function stream1() {
    data = new getData(getURL);
    div.innerHTML = '';
    x = data.fetching();
    ch1.disabled = true;
    ch2.disabled = false;
    var nxt = document.getElementById('next');
    nxt.setAttribute('onclick', "data.next()");
    var prev = document.getElementById('prev');
    prev.setAttribute('onclick', "data.prev()");
}
ch2.addEventListener('click', stream2);
function stream2() {
    data = new getData(getURL2);
    div.innerHTML = '';
    x = data.fetching();
    ch1.disabled = false;
    ch2.disabled = true;
    var nxt = document.getElementById('next');
    nxt.setAttribute('onclick', "data.next()");
    var prev = document.getElementById('prev');
    prev.setAttribute('onclick', "data.prev()");
}
document.getElementById('play').addEventListener('click', plays);
function plays() {
    var myVideo = document.getElementById("video1");
    if (myVideo.paused) {
        myVideo.play();
        document.getElementById('play').innerHTML = 'Pause';
    }
    else {
        myVideo.pause();
        document.getElementById('play').innerHTML = 'Play';
    }
}
document.getElementById('up').addEventListener('click', up);
function up() {
    var myVideo = document.getElementById("video1");
    myVideo.volume += 0.1;
}
document.getElementById('down').addEventListener('click', dwn);
function dwn() {
    var myVideo = document.getElementById("video1");
    myVideo.volume -= 0.1;
}
function cls() {
    if (ch1.disabled) {
        stream1();
        cl.style.display = "none";
    }
    else {
        stream2();
        cl.style.display = "none";
    }
}
console.log(x);
