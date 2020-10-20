var container=document.createElement('div');
document.body.append(container);
container.setAttribute('id','container');
var div=document.createElement('div');
container.append(div);
div.setAttribute('id','head');
div=document.createElement('div');
container.append(div);
div.setAttribute('id','overline');
div=document.createElement('div');
container.append(div);
div.setAttribute('id','title');
div.innerHTML='<p id="name">BRIAN DUDEY</p>';
div=document.createElement('div');
container.append(div);
div.setAttribute('id','dp');
div.innerHTML='<img src="images-4.png" alt="" />';
div=document.createElement('div');
container.append(div);
div.setAttribute('id','borderline');
div.innerHTML="<p> N.Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com </p>";
div=document.createElement('div');
container.append(div);
div.setAttribute('id','body');
var bodyleft=document.createElement('div');
div.append(bodyleft);
bodyleft.setAttribute('id','left');
var leftdata1='<div id="profile"><div id="logoP"> <img src="profile.png" alt="" /><p>Profile</p></div><p class="text"> Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an a lliterion advocate</p> </div> <div id="skills"> <div id="logoP"><img src=" skills.png" alt="" /><p>Skills</p> </div><h5>Technical Skills</h5><p class="label">JavaScript</p><input type="range" class="slider" /><br /><p class="label">CSS</p><input type="range" class="slider" /><br /><p class="label">HTML</p><input type="range" class="slider" /><br /><p class="label">React</p><input type="range" class="slider" /><br /><p class="label">Redux</p><input type="range" class="slider" /><br /> <p class="label">Mongo</p><input type="range" class="slider" /><br /><p class="label">Deployment</p><input type="range" class="slider" /><br /><h5>Additional Skills</h5><p class="label">Project Management</p>';
var leftdata2='<input type="range" class="slider" /><br /><p class="label">Recruitment</p><input type="range" class="slider" /><br /><p class="label">Business Development</p><input type="range" class="slider" /><br /><p class="label">Editing</p><input type="range" class="slider" /><br /><p class="label">Fundraising</p><input type="range" class="slider" /><br/></div><div id="Work"><div id="logoW"><img src="work.png" alt="" /><p>Work Experience</p></div><p class="text"><h5>Event Manager</h5><p id="date">03/2014 - 02/2017<p><p id="wtext">C3 presents, Washington DC <br></p><ul class="list"><li>Lead and execute all phases of event planning and production spanning committee recryitment, training, vendor relationships and on-site facilitation</li><li>';
var leftdata3='Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.</li><li>Excercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations. </li></ul></div></div>'
bodyleft.innerHTML=leftdata1+leftdata2+leftdata3;
var bodyright=document.createElement('div');
div.append(bodyright);
bodyright.setAttribute('id','right');
var rightdata1=' <div id="Work"> <div id="logoW"> <img src="work.png" alt="" /><p>Work Experience</p></div><p class="text"><h5>Community Relations <br>Manager</h5><p id="date2">06/2011 - 01/2014<p><p id="wtext2">Gay and Lesbian Elder Housing, Los Angeles  <br> </p><ul class="list"><li>Arranging presentations and pitch deck.</li><li>Designing a PR plan and establishing important focus points</li><li>Designing, creating and managing content across multiple communication platforms</li><li>Building relationships with key media players</li></ul></div> <div id="Work"><div id="logoW"><img src="edu.png" alt="" /> <p>Education</p></div><p class="text"><h5>Engineering Immersion<br>Program</h5><p id="date2">11/2018 - 06/2018<p><p id="wtext2">Thinkful, Chicago, IL<br><br>Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack</p>';
var rightdata2=' <ul class="list"><li>Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of medication. Users progress is stored on a backend created using Node and MongoDB</li><li>Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stored user data.</li><li>Developed a concierge app, "Pley", for individuals looking for curated suggetions when visiting a new place. React was used to develop the front end which includes real-time chat,drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developped RESTful API, Geospatial searching, and user authentication with JWT.</li><li>Building relationships with key media players</li></ul><h5>BA English<br>Program</h5><p id="date2">09/2001 - 05/2001<p>';
var rightdata3='<p id="wtext2">University of California, Los Angeles<br><br> </p>';
bodyright.innerHTML=rightdata1+rightdata2+rightdata3;



