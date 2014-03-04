
$(document).ready(function(){
	var s = Snap("#pig");

	Snap.load("pig.svg", function (f) {
		var g = f.select("g");
		s.append(g);
		g.drag();
	})
});
