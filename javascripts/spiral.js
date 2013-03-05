function showSpiral() {
  var stage = new Kinetic.Stage({
    container: 'spiralContainer',
    width: 350,
    height: 500
  });
  var layer = new Kinetic.Layer();

  var textpath = new Kinetic.TextPath({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    fill: '#333',
    fontSize: '10',
    fontFamily: 'Arial',
    text: '',
    data: 'M153 334 C153 334 151 334 151 334 C151 339 153 344 156 344 C164 344 171 339 171 334 C171 322 164 314 156 314 C142 314 131 322 131 334 C131 350 142 364 156 364 C175 364 191 350 191 334 C191 311 175 294 156 294 C131 294 111 311 111 334 C111 361 131 384 156 384 C186 384 211 361 211 334 C211 300 186 274 156 274',
    scale: 1,
    offset: [150, 334],
    opacity: 0.8
  });

  layer.add(textpath);
  stage.add(layer);

  var text = 'hi, welcome to the angie zoo, where little animals move around and do cool things with the help of html5';
  // interval
  var n = 0, rotSpeed = 0.1, anim;
  var interval = setInterval(function() {
    if(n === text.length) {
      clearInterval(interval);
    }
    else {
      textpath.setText(textpath.getText() + text[n++]);
    }
  }, 1000 / 10);
  
  // animation
  anim = new Kinetic.Animation(function(frame) {
    textpath.rotate(2 * Math.PI * rotSpeed * frame.timeDiff / 1000);
  }, layer);

  anim.start();

  // transition
  textpath.transitionTo({
    easing: 'ease-in-out',
    scale: {
      x: 2,
      y: 2
    },
    duration: 20
  });
}