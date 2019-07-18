var savedLogs = [];


var button = $('.globe');
button.on('click', selectRand);

var ideas = ["Use a dishwasher instead of handing washing dishes",
  "Use metal or paper straws instead of plastic straws",
  "Use refillable bottles or travel mugs",
  "RECYCLE!",
  "COMPOST!",
  "Turn off the lights when you leave a room",
  "Try eating less meat",
  "EDUCATE OTHERS!",
  "Pick up litter",
  "Carpool or use public transportation",
  "CONSERVE H2O!",
  "COMPOST!",
  "Bring reusable bags when you shop",
  "Plant a tree!",
  "RECYCLE!",
  "Learn to love leftover food",
  "Participate in a beach or forest cleanup",
  "Shorten your shower time",
  "Buy local and stustainable products",
  "Avoid using styrofoam",
  "RECYCLE!",
  "Cut up plastic six-pack rings",
  "Recyle glass, aluminium, newspapers, wire hangers, and old cell phones",
  "Use rechargeable batteries and long-lasting lightbulbs",
  "CONSERVE H2O!",
  "EDUCATE OTHERS!"
  ]

function selectRand () {
  var randomDecimal = Math.random();
  var random = randomDecimal * ideas.length;
  var final = Math.floor(random);

  console.log(ideas[final]);
  document.querySelector('.idea').innerHTML = ideas[final];
}

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNewLog);
 $('.card-container').on("click", ".delete-btn", deleteItem)

function createNewLog() {
  var toLog = $('.to-log').val();
  var toHelp = $('.to-help').val();
  var toHurt = $('.to-hurt').val();
  var toTmrw = $('.to-tmrw').val();

  var newLog = { first: toLog, help: toHelp, hurt: toHurt, tmrw: toTmrw };


  appendNewLog(newLog);
  changeLog(newLog)
}

function appendNewLog (log) {
    cardContainer.append(`
    <div class="to-log-card">
      <p><strong>Date:</strong> ${log.first}</p>
      <p><strong>One thing I did to help the environment today was:</strong> ${log.help}</p>
      <p><strong>One thing I did to hurt the environment today was:</strong> ${log.hurt}</p>
      <p><strong>One thing I can do tomorrow is:</strong> ${log.tmrw}</p>
     <button class=delete-btn> Delete </button>
    </div>
  `);
}

function clearInputs() {
  $('.to-log').val("");
  $('.to-help').val("");
  $('.to-hurt').val("");
  $('.to-tmrw').val("");
}
function deleteItem (event) {
  event.target.parentNode.remove();
}


function changeLog(currentLog) {
  savedLogs.push(currentLog);
  var savedLogsString = JSON.stringify(savedLogs);
  localStorage.setItem('currentLog', savedLogsString);
  // var currentDate = new Date($('.to-log').val());
  // localStorage.setItem('to-log', currentDate);
  // var currentHelp = $('.to-help').val();
  // localStorage.setItem('to-help', currentHelp);
  // var currentHurt = $('.to-hurt').val();
  // localStorage.setItem('to-hurt', currentHurt);
  // var currentTmrw = $('.to-tmrw').val();
  // localStorage.setItem('to-tmrw', currentTmrw);
  clearInputs()
  // console.log(currentDate);
  // console.log(currentHelp);
  // console.log(currentHurt);
  // console.log(currentTmrw);
}

var savedLogObject = JSON.parse(localStorage.getItem('currentLog'));

for (var i=0; i<savedLogObject.length; i++) {
  var log = savedLogObject[i];
  console.log(log);
  cardContainer.append(`
  <div class="to-log-card">
    <p><strong>Date:</strong> ${log.first}</p>
    <p><strong>One thing I did to help the environment today was:</strong> ${log.help}</p>
    <p><strong>One thing I did to hurt the environment today was:</strong> ${log.hurt}</p>
    <p><strong>One thing I can do tomorrow is:</strong> ${log.tmrw}</p>
   <button class=delete-btn> Delete </button>
  </div>
`);
}
