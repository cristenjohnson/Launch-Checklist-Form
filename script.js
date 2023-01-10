// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
//set up window handler form
//set up submit handler for the form
//cancel submission event.preventDefault()
//validate inputs have data in them
//check fuel level and cargo mass; report launch status
//make the list visible
//fetch data
//randomly choose planet
//display info of chosen planet
window.addEventListener("load", function (response) {
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function () {
//       response.json().then(function (json) {

//          let missionTarget = document.getElementById("missionTarget");
//          missionTarget.innerHTML = `
// <h2>Mission Destination</h2>
// <ul>
//    <li>Name: ${json[0].name}</li>
//    <li>Diameter: ${json[i].diameter}</li>
//    <li>Star: ${json[i].star}</li>
//    <li>Distance from Earth: ${json[i].distance}</li>
//    <li>Number of Moons: ${json[i].numberOfMoons}</li>
// </ul>
// <img src="${json[i].image}">
// `
//       })
//    })
   let launchForm = document.getElementById("launchForm");
   launchForm.addEventListener("submit", function (event) {
      // alert("All fields required");
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields required");
      } else if (!pilotName.value.match(/^[A-Za-z ]+$/) || !copilotName.value.match(/^[A-Za-z ]+$/) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         alert("Enter valid data type.");
         // errorMessage.innerHTML = "Shuttle Not Ready for Launch" //might need to create an eventListener for "launchStatusCheck" and put this here
      }
      let itemStatus = document.getElementById("itemStatus");
      itemStatus.style.visibility = "visible"; //this shows the bullets

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;

      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;

      let fuelStatus = document.getElementById("fuelStatus");
      fuelLevel = Number(fuelLevel.value);
      let launchStatus = document.getElementById("launchStatus");

      if (fuelLevel < 10000) {
         fuelStatus.innerHTML = `Fuel too low to launch`;
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = "red"
      } else {
         fuelStatus.innerHTML = `Awaiting Information Before Launch`;
         launchStatus.style.color = "black"
      }

      let cargoStatus = document.getElementById("cargoStatus");
      cargoMass = Number(cargoMass.value);

      if (cargoMass > 10000) {
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
         launchStatus.innerHTML = `Shuttle not ready to launch`;
         launchStatus.style.color = "red";
      } else {
         cargoStatus.innerHTML = `Cargo mass check passed`;
         launchStatus.innerHTML = `Awaiting Information Before Launch`;
         launchStatus.style.color = "black";
      }
      if (fuelLevel >= 10000 && cargoMass <= 10000) {
         launchStatus.innerHTML = `Shuttle ready to launch`;
         launchStatus.style.color = "green";
      }
      document.querySelector("#launchForm").submit;
   });
});
