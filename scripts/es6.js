'use-strict';

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

  const dancer = new Dancer(...randomStagePosition());
  console.log(dancer.setPosition);

  // sub-classes
  // regular dancer instace

  // tapper
  // rainbow dancer

  // function for regular
  const handlerRegular = () => {
    [topCoor, leftCoor] = randomStagePosition();
    const regularDancer = new Dancer(topCoor, leftCoor);
    $('#stage').append(regularDancer.$node);
    regularDancer.setPosition(topCoor, leftCoor);
  };

  // // event-handler
  // // regular
  $('#regular').click(handlerRegular);
});
