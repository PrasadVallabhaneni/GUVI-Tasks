var bt1 = document.getElementById('hit1');
var bt2 = document.getElementById('hit2');
var time;
var action;
var inp = {
    balls: 1,
    players: 1,
    time: 60,
    total: 0
};
var Cricket = /** @class */ (function () {
    function Cricket(inputs) {
        this.ball = inputs.balls;
        this.player = inputs.players;
        this.time = inputs.time;
        this.total = inputs.total;
    }
    Cricket.prototype.timer = function () {
        time = 60;
        action = setInterval(function () {
            time = time - 1;
            document.getElementById("timer").innerHTML = time.toString();
            if (time < 1) {
                bt1.toggleAttribute('disabled');
                bt2.toggleAttribute('disabled');
                clearInterval(action);
            }
        }, 1000);
    };
    Cricket.prototype.bowling = function (player, score) {
        if (time < 1) {
            this.player = 1;
            this.ball = 1;
            this.total = 0;
            this.timer();
        }
        var td = document.getElementById(player + this.player).getElementsByTagName('td');
        td[0].style.background = '#F6B042';
        td[0].style.color = 'black';
        var run = Math.floor(Math.random() * 7).toString();
        td[this.ball].innerHTML = run;
        var score1 = document.getElementById(score);
        score1.innerHTML = (+score1.innerHTML + +run).toString();
        var score2 = document.getElementById('score2').innerHTML;
        this.total = this.total + +run;
        if (run == '0') {
            this.ball = 1;
            this.player = this.player + 1;
            td[7].innerHTML = this.total.toString();
            this.total = 0;
        }
        else {
            this.ball = this.ball + 1;
        }
        if ((this.player == 10 && this.ball == 7) || (this.player == 11 && run == '0') || time < 1) {
            if (+score2 >> 0) { // play=false;
                console.log(this.total);
                if (td[7].innerHTML.length == 0) {
                    td[7].innerHTML = this.total.toString();
                }
                clearInterval(action);
                time = 0;
                document.getElementById("timer").innerHTML = time.toString();
                bt1.disabled = true;
                bt2.disabled = true;
                this.result();
                document.getElementById('results').style.display = 'block';
            }
            else {
                if (td[7].innerHTML.length == 0) {
                    td[7].innerHTML = this.total.toString();
                }
                this.player = 1;
                this.ball = 1;
                clearInterval(action);
                this.timer();
                document.getElementById("timer").innerHTML = '0';
                bt1.toggleAttribute('disabled');
                bt2.toggleAttribute('disabled');
                this.total = 0;
                // this.manOftheMatch();
                td[0].style.background = 'none';
                td[0].style.color = 'white';
            }
        }
        else if (this.ball == 7) {
            this.player = this.player + 1;
            this.ball = 1;
            td[7].innerHTML = this.total.toString();
            this.total = 0;
        }
        var tdprev = document.getElementById(player + (this.player - 1)).getElementsByTagName('td');
        tdprev[0].style.background = 'none';
        tdprev[0].style.color = 'white';
    };
    Cricket.prototype.result = function () {
        var man1 = {
            "Team": '',
            "player": '',
            'score': 0
        };
        for (var i = 1; i < 11; i++) {
            var td = document.getElementById('player' + i).getElementsByTagName('td');
            var score = td[7].innerHTML;
            // man1.score=1
            if (man1.score < (+score)) {
                man1.score = (+score);
                man1.player = 'player' + i;
                man1.Team = '1';
            }
        }
        for (var i = 1; i < 11; i++) {
            var td = document.getElementById('p' + i).getElementsByTagName('td');
            var score = td[7].innerHTML;
            // man1.score=1
            if (man1.score < (+score)) {
                man1.score = (+score);
                man1.player = 'player' + i;
                man1.Team = '2';
            }
        }
        var score1 = document.getElementById('score1').innerHTML;
        var score2 = document.getElementById('score2').innerHTML;
        var win = {
            'team': '',
            'score': ''
        };
        if ((+score1) > (+score2)) {
            win.team = 'Team 1';
            win.score = score1;
        }
        else {
            win.team = 'Team 2';
            win.score = score2;
        }
        console.log(man1);
        document.getElementById('team').innerHTML = win.team;
        localStorage.setItem("team", win.team);
        document.getElementById('winscore').innerHTML = win.score;
        localStorage.setItem('score', win.score);
        document.getElementById('man').innerHTML = man1.player;
        localStorage.setItem('man', man1.player);
        document.getElementById('manTeam').innerHTML = man1.Team;
        localStorage.setItem('manTeam', man1.Team);
    };
    return Cricket;
}());
var game = new Cricket(inp);
document.getElementById('hit1').setAttribute('onclick', 'game.bowling("player","score1")');
document.getElementById('hit2').setAttribute('onclick', 'game.bowling("p","score2")');
document.getElementById('start').setAttribute('onclick', 'gameBegin()');
function gameBegin() {
    bt1.toggleAttribute('disabled');
    game.timer();
    document.getElementById('start').disabled = true;
}
