'use-strict';
// first try
$(() => {
  class Dancer {
    constructor(top, left) {
      this.top = top;
      this.left = left;
      this.$node = $('<div class="dancer"></div>');
    }
    setPosition(top, left) {
      this.$node.css({ top, left });
    }
  }

  // random position
  const randomStagePosition = function () {
    const pos = [];
    let topCoor = Math.floor(Math.random() * $('#stage').height());
    let leftCoor = Math.floor(Math.random() * $('#stage').width());
    pos.push(topCoor, leftCoor);
    return pos;
  };

  // regular handler
  const handlerRegular = () => {
    [topCoor, leftCoor] = randomStagePosition();
    const regularDancer = new Dancer(topCoor, leftCoor);
    $('#stage').append(regularDancer.$node);
    regularDancer.setPosition(topCoor, leftCoor);
  };

  // tapper handler
  const handlerTapper = () => {
    [topCoor, leftCoor] = randomStagePosition();
    const tapperDancer = new Dancer(topCoor, leftCoor);
    tapperDancer.$node.addClass('tapper');
    $('#stage').append(tapperDancer.$node);
    tapperDancer.setPosition(topCoor, leftCoor);
  };

  // rainbow handler
  const handlerRainbow = () => {
    [topCoor, leftCoor] = randomStagePosition();
    const rainbowDancer = new Dancer(topCoor, leftCoor);
    rainbowDancer.$node.addClass('rainbow');
    $('#stage').append(rainbowDancer.$node);
    rainbowDancer.setPosition(topCoor, leftCoor);
  };

  // event-handler
  // regular
  $('#regular').click(handlerRegular);
  // tapper
  $('#tapper').click(handlerTapper);
  // rainbow
  $('#rainbow').click(handlerRainbow);
});
