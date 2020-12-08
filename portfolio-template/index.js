// $(function () {
// scene1//
//   var controller = new ScrollMagic.Controller();
//   var t1scroll = new TimelineMax();

//   t1scroll
//     .set(".body", { background: "#f2f2f2"})
//     .to(".body", 4, { background: "black" });

//   var scene1 = new ScrollMagic.Scene({
//     triggerElement: ".highlight",
//     duration: "300px",
//     triggerHook: "0.1",
//   })

//     .setTween(t1scroll)

//     .addIndicators({
//       name: "fadeout",
//       colorStart: "green",
//       colorEnd: "red",
//       indent: 100,
//     })
//     .addTo(controller);
// // });
var url = "https://portfolio-template-design.herokuapp.com";
function data() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data[0].works);
      if (window.innerWidth <= 500) {
        document.getElementById("name").innerHTML = "P V";
      } else {
        document.getElementById("name").innerHTML = data[0].name;
      }

      document.getElementById("role").innerHTML = data[0].role;
      document.getElementById("email").innerHTML = data[0].email;
      document.getElementById("phone").innerHTML = data[0].phone;
      document
        .getElementById("linked")
        .setAttribute("href", `${data[0].linkedin}`);
      document.getElementById("git").setAttribute("href", `${data[0].github}`);
      //   document.getElementById("userBio").innerHTML = data[0].bio;
      data[0].works.forEach((ele) => {
        document.getElementById(
          "userWorks"
        ).innerHTML += ` <div class="card workCard" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${ele.title}</h5>
              <p class="card-text" style="color:grey">
               ${ele.description}
              </p>
              <a href="${ele.live}" target="blank "  class="card-link" style="float:left"><i class="fas fa-link fa-2x"></i></a>
              <a href="${ele.git}" target="blank" class="card-link" style="float:right"><i class="fab fa-github-square fa-2x"></i></a>
            </div>
          </div>`;
      });
      data[0].skills.forEach((ele) => {
        document.getElementById(
          "userSkills"
        ).innerHTML += ` <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${ele}</h5>
            </div>
          </div>`;
      });
    });
}
document.getElementById("edit").addEventListener("click", function () {
  window.open("form.html");
});
data();
