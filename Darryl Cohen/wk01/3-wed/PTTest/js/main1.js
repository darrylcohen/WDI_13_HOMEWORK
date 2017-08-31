var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
var trainLines = [alamein, glenWaverly, sandringham]
var changeOver = 'Richmond'

//Get a Valid StationNuum
function getStation(description) {
  station =  prompt('Enter ' + description + ' station')
  valid = false;
  while (!valid) {
    trainLines.forEach(function(line){
      if (line.includes(station)) {
        valid = true;
      }
    })
    if (!valid) {
      station =  prompt('Enter a valid ' + description + ' station')
    }
  }
  return station
}

// Get the train line the station is on
function getLine(station) {
  var result = [];
  trainLines.forEach(function(line){
    if (line.includes(station) ) {
      result = line;
    }
  })
  return result
}

// Is the train going towards the changeover or away from the change over
function getDirection(station1, station2) {
  var direction = 1;
  trainLines.forEach(function(line){
    if (line.includes(station1) && line.includes(station2) && line.indexOf(station1) > line.indexOf(station2)) {
      direction = -1
    }
  })
  return direction;
}

function plotRoute() {
  var origin = getStation('Origin')
  var destination = getStation('Destination')
  var currentLine = getLine(origin)
  var currentStation = origin
  var stationNumber = currentLine.indexOf(currentStation)

  console.log(currentStation);

  var direction = getDirection(origin, destination)

  while(currentStation !== destination) {
    stationNumber += direction
    currentStation = currentLine[stationNumber]
    if (currentStation === changeOver) {
      currentLine = getLine(destination);
      direction = getDirection(changeOver, destination)
      stationNumber = currentLine.indexOf(changeOver)
    }
    console.log(currentStation);
  }
}

plotRoute();
