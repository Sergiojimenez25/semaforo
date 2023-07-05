function cambioColor() {
    var trafficLight = document.getElementById("traffic-light");
    var currentColor = trafficLight.style.backgroundColor;
    if (currentColor == "green") {
      trafficLight.style.backgroundColor = "yellow";
    } else if (currentColor == "yellow") {
      trafficLight.style.backgroundColor = "red";
    } else {
      trafficLight.style.backgroundColor = "green";
    }
  }
  setInterval(changeColor, 1000);