var line1 = ['a','b','c','d','e']
var line2 = ['f','g','c','h','i']
var line3 = ['z','t','y','s','c']
var trainLines = [line1, line2, line3]

function getTrainLine(station,isOriginDirection) {
  var trainLine = [];
  var changeOver = 'c';

  trainLines.forEach(function(line){
    if (line.includes(station)) {
      if (isOriginDirection) {
        if (line.indexOf(station) > line.indexOf(changeOver)) {
          trainLine = line.slice(line.indexOf(changeOver), line.indexOf(station)
        + 1)
          trainLine.reverse();
        } else {
          trainLine = line.slice(line.indexOf(station), line.indexOf(changeOver)
        + 1)
        }
      } else {
        if (line.indexOf(changeOver) > line.indexOf(station)) {
          trainLine = line.slice(line.indexOf(station), line.indexOf(changeOver)
        + 1)
          trainLine.reverse();
        } else {
          trainLine = line.slice(line.indexOf(changeOver), line.indexOf(station)
        + 1)

        }

      }
    }
  })

  return trainLine
}

function displayStations(trainLine) {
  trainLine.forEach(function(station){
    console.log(station);
  })
}

function removeDups(trainLine) {
  var result = []

  trainLine.forEach(function(station){
    if (!result.includes(station)) {
      result.push(station)
    }
  })
  return result;
}

function getValidStation(description) {
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
  return station;
}
function showRoute() {
  var origin = getValidStation('Origin');
  var destination = getValidStation('Destination');
  var trainLineOrigin = getTrainLine(origin, true)
  var trainLineDestination = getTrainLine(destination, false)
  var trainLine = trainLineOrigin.concat(trainLineDestination)
debugger
  displayStations(removeDups(trainLine));

}

showRoute()
