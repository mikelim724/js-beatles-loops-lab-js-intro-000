// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {

      array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts) {
  var counter = 0;
  while(counter < facts.length){
    facts[counter] = (facts[counter] + "!!!");
    counter++;
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array= []; //empty array
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num<15); //while num less than 15, add one line of i love the beatles to the array
  return array
}
