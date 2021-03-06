'use-strict';

$(() => {
  function Dancer(top, left) {
    const dancer = {};
    // Here we use jQuery to create an HTML <div> tag.
    dancer.$node = $('<div class="dancer"></div>');
    Object.assign(dancer, dancerMethods);
    // Now that the dancer object has access to its methods,
    // we can set its position to the desired coordinates.
    dancer.setPosition(top, left);
    return dancer;
  }

  const dancerMethods = {};

  dancerMethods.setPosition = function (top, left) {
    // Here we use the CSS top and left properties to position our dancer
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.css({ top, left });
  };

  // Have a look at the last function in this file and figure out how to
  // make the regular dancers appear on stage. Then come back here
  // and continue with the TapDancer constructor.

  // add regular dancer subclass

  function randomStagePosition() {
    // Implement this function so that it returns an array with
    // the height and width coordinates of a random point on stage,
    const position = [];
    let topCoor = Math.floor(Math.random() * $('#stage').height());
    let leftCoor = Math.floor(Math.random() * $('#stage').width());
    position.push(topCoor, leftCoor);
    return position;
    // measured as the distance in pixels from its top-left corner.
    // Then use it every time you want to place a new dancer on stage.
  }

  // Function for dancers
  // Regular Dancer
  function AddRegularDancer() {
    // create regularDancer
    const regularDancer = Dancer(...randomStagePosition());
    $('#stage').append(regularDancer.$node);
    return regularDancer;
  }

  // Tapper Dancer
  function AddTapper() {
    const tapperDancer = Dancer(...randomStagePosition());
    tapperDancer.$node.addClass('tapper');
    $('#stage').append(tapperDancer.$node);
    return tapperDancer;
  }

  // var i = 0;
  // function change() {
  //   var doc = document.getElementById('background');
  //   var color = ['black', 'blue', 'brown', 'green'];
  //   doc.style.backgroundColor = color[i];
  //   i = (i + 1) % color.length;
  // }
  // setInterval(change, 1000);
  // Rainbow Dancer
  function AddRainbow() {
    const rainbowDancer = Dancer(...randomStagePosition());
    rainbowDancer.$node.addClass('rainbow');
    $('#stage').append(rainbowDancer.$node);
    return rainbowDancer;
  }

  // Event handler
  // regular dancer
  $('#regular').click(AddRegularDancer);
  // tapper dancer
  $('#tapper').click(AddTapper);
  // rainbow dancer
  $('#rainbow').click(AddRainbow);

  console.log(randomStagePosition());
});
