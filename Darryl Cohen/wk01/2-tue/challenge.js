var rows = Number(prompt('How many rows'));

for (var vertical = 1; vertical <= rows; vertical++) {
  var line = ''
  for (space = 0; space < rows - vertical; space++) {
    line += ' ';
  }
  for (horizontal = 1; horizontal <= vertical + vertical - 1; horizontal++) {
    line += '$'
  }

  console.log(line);
}
