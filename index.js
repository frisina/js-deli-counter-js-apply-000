
//STEP 1: This function accepts two arguments,
// The current line of people (katzDeliLine) and the new person's name (person)
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person); //pushes the person parameter into the line array
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."; // returns the embedded expression
}

//STEP 2: This function accepts one argument, the current line of people.
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstName = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstName +".";
  }
}

//STEP 3: This function also accepts one argument, the current line of people.
function currentLine(line) {
  var txt = "The line is currently: ";
  if (line.length === 0) {
    txt = "The line is currently empty."
  } else
    { for (var i = 0; i < line.length - 1; i++) {
    txt += i+1 + ". " + line[i] + ", " ;
    }
  txt += line.length + ". " + line[line.length-1]};
  return txt;
  }
