(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiCCvIAAldIB/AAQA5AAAgAWQAgAVAAAnQAAAcgTAWQgUAUgeAJIAAABQAmAFAXAVQAVAYAAAgQAAAwgiAdQgjAcg7AAgAgzB1IAqAAQAbAAAPgNQAPgMABgXQgBgUgPgMQgPgNgaAAIgrAAgAgzghIAiAAQAYAAAOgLQANgNAAgUQAAgng4AAIgdAAg");
	this.shape.setTransform(54.1,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA1C3").s().p("ACwKBQhghqhQhwIgZgmQheiIg4h/QhRi1AAiYQAAhoAohgQAnhbBIhIQBGhGBcgoQBfgoBoAAIAACMQhJAAhBAcQhAAbgyAyQgwAxgcBAQgcBCAABJQAABIAcBCQAcBBAwAwQAyAyBAAaQBBAcBJAAIAAJVQgggegwg2g");
	this.shape_1.setTransform(25.7,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_2.setTransform(51.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45B4DA").s().p("AkACAQBJAABCgcQBAgaAygyQAwgwAbhBQAchCAAhIQAAhJgchCQgbhAgwgxQgygyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAoBHBGQBHBIAnBbQApBggBBoQABCXhRCzQg5CAheCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_3.setTransform(77,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgyACQAAgjAOgTQAOgTAYgBQAxABAABHQAAAjgOASQgNAUgYAAQgygBAAhGgAgTACQAAAvATAAQATAAAAgxQABgwgUAAQgSAAgBAyg");
	this.shape.setTransform(46.1,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgMAMQgFgFAAgHQAAgGAGgFQAEgEAHAAQAIAAAFAFQAFAEAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(26.6,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AglAvIAAgZQAHAFAIACQAHADAHgBQAIABAEgDQAFgCAAgFQAAgCgCgCIgGgEIgGgDIgIgCIgKgFQgFgDgDgCQgDgEgCgEQgBgEAAgHQAAgIADgGQAEgGAGgEQAGgEAIgCQAIgBAHAAIAOAAIANADIAAAYQgFgDgHgCQgHgCgGAAIgGABIgEABIgDAEQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAEADIAGACIAGADIAMAEQAFADADADQAEADACAFQABAEAAAHQAAAJgDAGQgEAGgHAEQgGAEgIABQgJACgIABQgQgBgOgFg");
	this.shape_2.setTransform(19.6,74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AAXBGIgWgkIgEgIIgEgFIgFgEIgGgBIgIAAIAAA2IggAAIAAiLIAyAAQAyAAAAAmQAAAIgCAFQgCAHgEAFQgEAFgGADQgGADgHACIAAAAIAGAEIAGAEIAFAHIAEAHIAbApgAgagGIANAAQALgBAFgGQAGgFAAgJQAAgSgVgBIgOAAg");
	this.shape_3.setTransform(9.5,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AASBGIgng9IgEgHIgBAAIAABEIgfAAIAAiLIAfAAIAABCIABAAIAEgIIAlg6IAmAAIgxBDIA1BIg");
	this.shape_4.setTransform(53.8,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgpBGIAAiLIAgAAIAABxIAzAAIAAAag");
	this.shape_5.setTransform(41.9,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAjBGIgKgfIgxAAIgKAfIgiAAIAziLIAkAAIAyCLgAgCggIgPAuIAjAAIgQgtIgCgNIAAAAIgCAMg");
	this.shape_6.setTransform(29.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAaBGIgWhZQgCgHgBgJIgCAQIgXBZIglAAIgliLIAiAAIAUBcIADAQIAAAAIACgQIAahcIAhAAIAXBdIACAPIAAAAIADgQIAThcIAfAAIglCLg");
	this.shape_7.setTransform(12.1,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AgcAzIAAhjIAXAAIAAAUIABAAQACgKAHgGQAGgGAJAAQAGAAADACIAAAVQgEgDgIAAQgJAAgIAJQgFAJAAAPIAAAwg");
	this.shape_8.setTransform(140.3,45.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgOAmIAAg3IgRAAIAAgSIARAAIAAgXIAWgHIAAAeIAYAAIAAASIgYAAIAAAxQAAAIADAEQADAEAIAAQAGAAAEgDIAAASQgHADgLAAQgcAAAAgcg");
	this.shape_9.setTransform(132.3,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_10.setTransform(119.9,45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgjA2QgMgSAAghQAAgkANgUQANgSAXgBQAuABAABHQAAAjgNASQgNATgWAAQgXAAgMgSgAgYACQAAA1AYgBQAZABAAg2QAAg2gZgBQgYABAAA3g");
	this.shape_11.setTransform(100,43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AgpBCIAAgWQAOAJAOAAQAOAAAJgHQAIgIAAgMQAAgMgIgGQgKgHgPAAIgXABIAFhIIBEAAIAAATIgxAAIgCAjIAMAAQAVAAAMALQAMALAAATQAAAVgNANQgOAMgYAAQgUAAgLgFg");
	this.shape_12.setTransform(89,43.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgrBHIAAgLQAAgGACgGIAFgLIAHgKIAJgIIAKgJIAKgIIAHgGIAHgIIADgIQACgEAAgFQAAgGgCgEQgCgEgCgDQgDgDgFgBQgEgCgEAAQgJAAgIAEQgKAEgHAIIAAgVQADgEAFgCIAJgEIAKgCIAKgBQAJAAAIACQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgCAHIgGAMQgEAFgFAFIgNALIgLAJIgJAJIgIAIQgCAEAAAEIAAABIA+AAIAAATg");
	this.shape_13.setTransform(77.6,43.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_14.setTransform(62.7,44.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399FF").s().p("AAWAzIAAg3QAAgcgUAAQgJAAgHAIQgHAHAAAMIAAA4IgXAAIAAhjIAXAAIAAARIABAAQALgTAUAAQAQAAAJALQAJAKAAAUIAAA8g");
	this.shape_15.setTransform(47.4,45.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399FF").s().p("AgLBJIAAhjIAWAAIAABjgAgJgyQgEgDAAgHQAAgFAEgEQAEgDAFgBQAGABAEADQAEAEAAAFQAAAGgEAEQgEADgGABQgFgBgEgDg");
	this.shape_16.setTransform(38.9,42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_17.setTransform(27.5,45.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399FF").s().p("AgrBHIAAgLQAAgGACgGIAFgLIAHgKIAJgIIAKgJIAJgIIAIgGIAHgIIADgIQACgEAAgFQAAgGgCgEQgCgEgCgDQgDgDgFgBQgEgCgEAAQgJAAgIAEQgKAEgHAIIAAgVQADgEAFgCIAJgEIAKgCIAKgBQAJAAAIACQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgCAHIgGAMQgEAFgFAFIgNALIgLAJIgJAJIgIAIQgCAEAAAEIAAABIA+AAIAAATg");
	this.shape_18.setTransform(7.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,86.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape.setTransform(27,22.6,0.467,0.467,-35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_1.setTransform(22.9,16.7,0.467,0.467,-35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_2.setTransform(21.5,16,0.467,0.467,-35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_3.setTransform(22.1,22.1,0.467,0.467,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_4.setTransform(22.1,22,0.467,0.467,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.9,44.1);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgwAMQgIgiAKgVQAJgWAZgGQAvgKAPBGQAHAigJAWQgJAVgZAFIgMACQgmAAgMg9gAgIgvQgUAEALAwQAJAvASgEQATgEgKgvQgKgsgPAAIgCAAg");
	this.shape.setTransform(127.3,105.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgdBHIgFgaQAQAHASgDQALgDAFgGQAFgHgCgJQgCgJgIgDQgJgDgNADIgNACIgFgWIAMgDQAZgFgDgSQgDgQgUAEQgOADgLALIgFgYQANgLATgEQAUgEANAHQAOAHADAPQAGAbgaANIAAAAQAPgCAKAIQALAFACANQAFATgMAOQgMAPgZAFQgJADgJAAQgJAAgIgDg");
	this.shape_1.setTransform(115.9,107.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgJAOQgGgEgCgHQgBgGAEgFQAEgFAIgCQAHgCAGAEQAFADABAHQACAGgEAFQgEAGgIACIgDAAQgFAAgEgCg");
	this.shape_2.setTransform(103.6,115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AgaA2IgGgZQAJADAHABQAIABAGgCQAIgBAEgEQAEgDgBgEQAAgDgCgCIgHgCIgHgBIgIgBIgLgCIgJgFIgGgFQgCgFgCgGQgCgIADgGQACgHAGgFQAFgFAGgEIARgFQAFgBAHAAIANgBIAGAYQgHgDgHAAQgHAAgGACIgEABIgFADIgDADIAAAEQABAAAAABQAAAAAAABQABAAAAABQABAAAAABIAFACIAGACIAHAAIAMACQAFACAEADQAFACADADQACAFABAGQACAJgCAGQgDAHgFAFQgFAGgIADQgIAEgJACQgIACgJAAIgMgBg");
	this.shape_3.setTransform(96,113.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AhHg9IAxgKQAxgLAIAmQABAHgBAGQgBAGgDAGQgDAGgEAFQgGAFgGADIAAAAQADAAAEABIAHAEIAGAFIAGAGIAiAjIgjAHIgdgeIgGgHIgFgEIgFgCIgGgBIgIACIALA0IgfAHgAgVgwIgOADIAIAnIANgDQAKgCAFgHQAEgIgCgIQgDgPgNAAIgIABg");
	this.shape_4.setTransform(85.7,114.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399FF").s().p("AhSgiIAWgFIADAQIAAgBQAHgTAVgFQAKgCAIAEQAJAEAEAIQAHgWAVgEQAggHAIAnIANA8IgWAEIgLg0QgDgPgGgGQgGgGgKACQgJACgEAKQgFAKADAMIALA0IgVAFIgLg2QgGgcgUAEQgJACgDAKQgFAJADAMIALA1IgWAFg");
	this.shape_5.setTransform(159.1,70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399FF").s().p("Ag7hFIAXgFIATBbIABAAIAZg0IAbgFIgfA3IA2ApIgcAGIgugnIgBAAIAKAvIgWAFg");
	this.shape_6.setTransform(145.6,71);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399FF").s().p("AgZBKIgEgVQAPAGANgDQANgDAHgJQAHgJgCgMQgCgLgKgFQgKgFgQAEIgWAGIgKhIIBCgPIAEATIgwALIAFAiIAMgCQAVgFAOAIQAOAJAEASQAFAVgLAPQgLAPgYAFQgLADgIAAQgGAAgFgCg");
	this.shape_7.setTransform(129,74.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AgHgoQgFAGgHAEIgOAJIgEgTIAKgGIAJgGIAJgIIAJgKIAIgBIAeCKIgWAGg");
	this.shape_8.setTransform(119.2,75.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgbgBIAzgMIAEAPIgzALg");
	this.shape_9.setTransform(106.7,80.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("Ag1gpIAWgFIADARIABAAQAHgVAUgEQAQgEAKAJQALAIAEAUIANA7IgWAEIgMg2QgGgbgSAEQgKACgFAJQgGAJADALIAMA3IgWAFg");
	this.shape_10.setTransform(91.8,84.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgQgYIAVgEIAVBhIgWAEgAgTgwQgFgDgBgFQgBgGADgEQADgFAFgBQAGgBAFADQAEACABAGQABAFgDAFQgDAEgFABIgDAAQgEAAgDgBg");
	this.shape_11.setTransform(83,83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AhSgiIAWgFIADAQIAAgBQAHgTAVgFQAKgCAIAEQAJAEAEAIQAHgWAVgEQAggHAIAnIANA8IgWAEIgLg0QgDgPgGgGQgGgGgKACQgJACgEAKQgFAKADAMIALA0IgVAFIgLg2QgGgcgUAEQgJACgDAKQgFAJADAMIALA1IgWAFg");
	this.shape_12.setTransform(72.4,88.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgXA9QgQgPgHghQgHgjAIgVQAJgWAXgFQAtgKAPBHQAHAhgJAWQgJAVgXAFIgJABQgPAAgMgMgAgKg0QgZAFAMA2QALAzAXgFQAYgFgLgzQgKgxgUAAIgEAAg");
	this.shape_13.setTransform(52.4,90.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AghBAIgBgMIACgMIAGgLIAHgLIAHgKIAIgJIAFgIQAEgFACgEIACgJQAAgFAAgFQgBgFgEgEQgCgEgCgBQgEgDgEAAQgFgBgEACQgJABgIAGQgIAFgHAKIgEgVIAIgHIAIgGIAJgFIALgDQAIgCAJABQAGABAHAEQAGADAFAHQAEAGACAKQACAIgBAHQAAAHgDAGIgHANIgJAMIgKALIgHALIgFAKQgCAEABAEIAAABIA9gNIAEATIhVASg");
	this.shape_14.setTransform(41.7,93.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgeAuQgRgLgFgXQgFgYAMgQQAMgRAYgFQAYgFAQAKQARALAFAXQAFAXgLARQgMARgYAGIgOABQgPAAgMgHgAgFgbQgKACgFAJQgEAIADANQAGAcAWgFQAVgEgGgcQgFgYgQAAIgGABg");
	this.shape_15.setTransform(175.2,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgigpIAfgGIADASIAAAAQADgVASgEIAIgBIAGAcQgGgCgHACQgKACgEAIQgEAJACALIAKAvIgdAGg");
	this.shape_16.setTransform(165.2,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgNAmIgKgsIgQADIgEgWIAQgDIgFgVIAcgPIAGAdIAWgEIAEAWIgWAFIAJAmQADAQAMgDQAFgBAEgEIAFAXQgGAEgOADIgKABQgVAAgGgbg");
	this.shape_17.setTransform(157.7,22);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgZAuQgQgLgFgXQgFgXALgSQALgRAVgEQAUgFAPAKQAOAKAFAWIACANIg+AMQAGAWAYgGQAQgDALgKIAEAVQgMALgWAEQgIACgGAAQgOAAgKgHgAgEgeQgHACgEAHQgFAHABAJIAjgIQgEgSgMAAIgEABg");
	this.shape_18.setTransform(148.7,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AhbgzIAtgJIAtBJQAFAKADAJIABAAIABgUIAKhXIAtgJIAcCIIgdAGIgShRIgFgdIgBAAIAAAUIgMBiIgaAGIgzhVQgDgDgGgPIgBAAIAJAjIARBLIgcAGg");
	this.shape_19.setTransform(133.5,26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgbgEIAzgLIAEAUIgzALg");
	this.shape_20.setTransform(115.2,32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgZAuQgQgLgFgXQgFgXALgSQALgRAVgEQAUgFAPAKQAOAKAFAWIACANIg+AMQAGAWAYgGQAQgDALgKIAEAVQgMALgWAEQgIACgGAAQgOAAgKgHgAgEgeQgHACgEAHQgFAHABAJIAjgIQgEgSgMAAIgEABg");
	this.shape_21.setTransform(100.7,35.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ag5goIAfgGIADAPIABAAQAGgUAUgEQAhgHAIAoIANA7IgfAGIgLg1QgFgXgPAEQgIACgDAHQgFAHACAJIANA3IgfAGg");
	this.shape_22.setTransform(89.5,38.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgUgXIAegGIAUBhIgeAGgAgVgsQgGgDgCgGQgBgHAEgGQAEgFAIgCQAHgBAGADQAFAEABAGQACAHgEAGQgDAFgIABIgEABQgFAAgEgDg");
	this.shape_23.setTransform(80.2,37.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgehEIAegHIAfCQIgfAHg");
	this.shape_24.setTransform(74.6,38.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AhMgdIAggHIAbA9IADAKIABAAQgCgHABgFIADhCIAcgGIAdA8IADALIAAAAIAAgMIAAhBIAbgGIgIBnIgfAGIgag1QgDgFgCgHIgBAAIABANIgDA7IgfAHg");
	this.shape_25.setTransform(58.2,44.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgeAuQgRgLgFgXQgFgYAMgQQAMgRAYgFQAYgFAQAKQARALAFAXQAFAXgLARQgMARgYAGIgOABQgPAAgMgHgAgFgbQgKACgFAJQgEAIADANQAGAcAWgFQAVgEgGgcQgFgYgQAAIgGABg");
	this.shape_26.setTransform(45.3,47.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgehEIAegHIAeCQIgeAHg");
	this.shape_27.setTransform(36.1,46.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgehEIAegHIAfCQIgfAHg");
	this.shape_28.setTransform(30.5,48.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgZAuQgQgLgFgXQgFgXALgSQALgRAVgEQAUgFAPAKQAOAKAFAWIACANIg+AMQAGAWAYgGQAQgDALgKIAEAVQgMALgWAEQgIACgGAAQgOAAgKgHgAgEgeQgHACgEAHQgFAHABAJIAjgIQgEgSgMAAIgEABg");
	this.shape_29.setTransform(23.1,52.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AADAdIg+hPIAjgIIAhAuIAFALIABAAQgBgHACgEIALg5IAhgGIgaBhIAKAwIgfAHg");
	this.shape_30.setTransform(9.9,52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,129.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgxAGQgDgjAMgUQAMgUAagDQAvgEAFBIQADAigLAUQgMAUgZADIgFAAQgsAAgFhDgAgCgwQgVACAFAxQAEAvATgCQASgBgEgwQgEgvgQAAIgBAAg");
	this.shape.setTransform(113.8,107.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgLANQgGgFAAgGQAAgGAEgFQAFgFAIgBQAGgBAGAEQAFAFABAHQAAAGgEAEQgFAFgJABIAAAAQgHAAgEgDg");
	this.shape_1.setTransform(94.9,114.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AghAyIgCgZQAIAEAIACQAHABAHAAQAHgBAFgCQAEgDAAgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgGgEIgHgBIgIgCIgLgEIgIgGIgFgGQgCgEgBgHQAAgIADgHQADgGAGgEQAGgEAHgDQAIgCAHgBIAOAAIAOACIACAXQgHgDgGgBQgHgBgGABIgFABIgFACIgDADIgBADQAAADACACIAFADIAGACIAHACIALADIAJAGQAEACACAEQADAEAAAHQABAJgEAGQgDAHgGAFQgGAEgIACQgIADgIABIgJAAQgMAAgKgDg");
	this.shape_2.setTransform(87.5,111.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("Ag/hDIAygEQAxgEADAmQABAHgCAHQgCAGgDAFQgEAGgFAEQgGADgHACIAAABQAEAAADADIAGAEIAFAGIAFAGIAeAnIgkADIgZgiIgEgHIgFgFQgCgCgDgBQgCgBgDAAIgJABIAFA1IggADgAgQgvIgOABIADAnIAOgBQAKgBAFgGQAFgHAAgIQgCgRgRAAIgEAAg");
	this.shape_3.setTransform(77.4,110.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag9hCIAfgBIAEBCIABAAIADgIIAig9IAmgDIgtBGIA5BGIgnACIgsg6IgEgIIAAAAIAEBEIggADg");
	this.shape_4.setTransform(108.7,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgthEIAggCIAHBxIAygCIACAZIhSAFg");
	this.shape_5.setTransform(96.9,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgZhFIAjgDIA7CIIgiACIgNgeIgwADIgIAgIgiACgAgHgtQABAGgCAGIgNAvIAjgCIgQgtIgEgNg");
	this.shape_6.setTransform(84.6,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ahhg+IAhgCIAaBbIADAQIABAAQgBgHACgJIAUheIAhgCIAcBcQACAFABAJIACgPIANheIAhgCIgdCNIgjADIgdhYQgCgGgBgJIAAAAQgBAJgBAHIgRBaIgkACg");
	this.shape_7.setTransform(66.7,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AgdguIAXgCIACAVQACgLAGgHQAGgGAIgBQAHAAADABIACAWQgEgDgIAAQgKABgGAKQgFAJABAPIADAwIgWACg");
	this.shape_8.setTransform(124.1,84.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgMAoIgFg3IgQABIgCgSIARgBIgCgXIAWgIIACAdIAXgCIACASIgYACIAEAxQABAIAEAEQADAEAHgBQAGAAAEgEIABASQgGADgLABIgEAAQgYAAgCgZg");
	this.shape_9.setTransform(116.5,84);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("AhOgqIAYgCIABAPQAJgTAUgBQALgBAIAFQAHAFAEAJQAKgWAWgCQAggCAEAoIAEA9IgWACIgFg2QgBgPgFgHQgFgHgLABQgIABgFAJQgGAJABANIAEA1IgVACIgFg3QgCgcgUABQgJABgFAJQgFAJABAMIAEA2IgWACg");
	this.shape_10.setTransform(104.2,86.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgeA5QgOgRgDghQgCgkALgUQALgUAYgCQAtgEAGBHQACAjgLATQgLAUgXACIgFAAQgSAAgMgPgAgDg1QgZACAFA3QADA0AZgCQAYgCgEg0QgEg1gWAAIgCAAg");
	this.shape_11.setTransform(84.1,86.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AgeA5QgOgRgDghQgDgkAMgUQALgUAYgCQAtgEAGBHQACAjgLATQgLAUgYACIgEAAQgSAAgMgPgAgDg1QgZACAFA3QADA0AYgCQAZgCgEg0QgEg1gWAAIgCAAg");
	this.shape_12.setTransform(73,87);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgpA+QgBgHACgFQABgGADgGIAGgKIAIgJIAKgJIAJgJIAGgHQAEgEACgEQACgEABgFQABgEAAgFIgCgKIgGgGIgGgEQgFgBgFAAQgIABgJAFQgIAEgIAJIgBgVQADgEAFgDQAEgDAEgBQAFgDAFgBIALgCQAJAAAHABQAIACAGAFQAGAEADAHQAEAHABAJQAAAJgBAHQgBAHgEAGIgJALIgLALIgKAKIgJAKQgEAEgCAFQgDAEABAEIAAAAIA+gFIABAUIhWAHg");
	this.shape_13.setTransform(62,88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AgwgtIAYgCIABARIAAAAQAKgUATgCQARgBAJAJQAKAKABAUIAFA8IgWACIgFg3QgCgcgTACQgKABgGAIQgGAIABAMIAFA4IgYACg");
	this.shape_14.setTransform(109.5,57.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399FF").s().p("AgMgZIAWgCIAIBjIgWACgAgMgyQgEgDgBgGQAAgFADgEQAEgEAGgBQAFAAAEADQAEADABAGQAAAFgEAEQgDAFgFAAIgCAAQgFAAgDgDg");
	this.shape_15.setTransform(100.7,55.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399FF").s().p("AhNgqIAWgCIACAPQAJgTAVgBQAKgBAIAFQAIAFADAJQAJgWAXgCQAggCAEAoIAEA9IgWACIgFg2QgBgPgFgHQgFgHgKABQgJABgFAJQgGAJABANIAEA1IgVACIgFg3QgCgcgUABQgJABgFAJQgFAJABAMIAEA2IgWACg");
	this.shape_16.setTransform(89.7,58.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399FF").s().p("AgpA+QgBgHACgFQABgGADgGIAGgKIAIgJIAKgJIAJgJIAGgHQAEgEACgEQACgEABgFQABgEAAgFIgCgKIgGgGIgGgEQgFgBgFAAQgIABgJAFQgIAEgIAJIgBgVQADgEAFgDQAEgDAEgBQAFgDAFgBIALgCQAJAAAHABQAIACAGAFQAGAEADAHQAEAHABAJQAAAJgBAHQgBAHgEAGIgJALIgLALIgKAKIgJAKQgEAEgCAFQgDAEABAEIAAAAIA+gFIABAUIhWAHg");
	this.shape_17.setTransform(69.7,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.2,125.3);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape.setTransform(27,21.8,0.468,0.468,-45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_1.setTransform(21.9,16.8,0.468,0.468,-45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_2.setTransform(20.4,16.3,0.468,0.468,-45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_3.setTransform(22,22,0.468,0.468);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_4.setTransform(22,22,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,44);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABXCvIgZhOIh8AAIgYBOIhWAAICAldIBcAAIB9FdgAgHhRIgmB2IBZAAIgmh1QgEgNgCgTIgBAAQgBAQgFAPg");
	this.shape.setTransform(52.4,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA1C3").s().p("ACwKBQhghqhQhwIgZgmQheiIg4h/QhRi1AAiYQAAhoAohgQAnhbBIhIQBGhGBcgoQBfgoBoAAIAACMQhJAAhBAcQhAAbgyAyQgwAxgcBAQgcBCAABJQAABIAcBCQAcBBAwAwQAyAyBAAaQBBAcBJAAIAAJVQgggegwg2g");
	this.shape_1.setTransform(25.7,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_2.setTransform(51.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45B4DA").s().p("AkACAQBJAABCgcQBAgaAygyQAwgwAbhBQAchCAAhIQAAhJgchCQgbhAgwgxQgygyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAoBHBGQBHBIAnBbQApBggBBoQABCXhRCzQg5CAheCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_3.setTransform(77,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiCCvIAAldIB/AAQA5AAAgAWQAgAVAAAnQAAAcgTAWQgUAUgeAJIAAABQAmAFAXAVQAVAYAAAgQAAAwgiAdQgjAcg7AAgAgzB1IAqAAQAbAAAPgNQAPgMABgXQgBgUgPgMQgPgNgaAAIgrAAgAgzghIAiAAQAYAAAOgLQANgNAAgUQAAgng4AAIgdAAg");
	this.shape.setTransform(54.1,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA1C3").s().p("ACwKBQhghqhQhwIgZgmQheiIg4h/QhRi1AAiYQAAhoAohgQAnhbBIhIQBGhGBcgoQBfgoBoAAIAACMQhJAAhBAcQhAAbgyAyQgwAxgcBAQgcBCAABJQAABIAcBCQAcBBAwAwQAyAyBAAaQBBAcBJAAIAAJVQgggegwg2g");
	this.shape_1.setTransform(25.7,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_2.setTransform(51.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45B4DA").s().p("AkACAQBJAABCgcQBAgaAygyQAwgwAbhBQAchCAAhIQAAhJgchCQgbhAgwgxQgygyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAoBHBGQBHBIAnBbQApBggBBoQABCXhRCzQg5CAheCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_3.setTransform(77,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape.setTransform(22.5,25.1,0.468,0.468,-26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_1.setTransform(19.3,18.6,0.468,0.468,-26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_2.setTransform(18.1,17.7,0.468,0.468,-26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_3.setTransform(22.1,22.1,0.468,0.468,-26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_4.setTransform(22.1,22.1,0.468,0.468,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.2,44.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape.setTransform(21.1,24.8,0.468,0.468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_1.setTransform(21.1,17.6,0.468,0.468);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_2.setTransform(20.4,16.3,0.468,0.468);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_3.setTransform(22,22,0.468,0.468);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_4.setTransform(22,22,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgyACQAAgjAOgTQAOgTAYgBQAxABAABHQAAAjgOASQgNAUgYAAQgygBAAhGgAgTACQAAAvATAAQATAAAAgxQABgwgUAAQgSAAgBAyg");
	this.shape.setTransform(46.1,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgMAMQgFgFAAgHQAAgGAGgFQAEgEAHAAQAIAAAFAFQAFAEAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(26.6,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AglAvIAAgZQAHAFAIACQAHADAHgBQAIABAEgDQAFgCAAgFQAAgCgCgCIgGgEIgGgDIgIgCIgKgFQgFgDgDgCQgDgEgCgEQgBgEAAgHQAAgIADgGQAEgGAGgEQAGgEAIgCQAIgBAHAAIAOAAIANADIAAAYQgFgDgHgCQgHgCgGAAIgGABIgEABIgDAEQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAEADIAGACIAGADIAMAEQAFADADADQAEADACAFQABAEAAAHQAAAJgDAGQgEAGgHAEQgGAEgIABQgJACgIABQgQgBgOgFg");
	this.shape_2.setTransform(19.6,74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AAXBGIgWgkIgEgIIgEgFIgFgEIgGgBIgIAAIAAA2IggAAIAAiLIAyAAQAyAAAAAmQAAAIgCAFQgCAHgEAFQgEAFgGADQgGADgHACIAAAAIAGAEIAGAEIAFAHIAEAHIAbApgAgagGIANAAQALgBAFgGQAGgFAAgJQAAgSgVgBIgOAAg");
	this.shape_3.setTransform(9.5,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AASBGIgng9IgEgHIgBAAIAABEIgfAAIAAiLIAfAAIAABCIABAAIAEgIIAlg6IAmAAIgxBDIA1BIg");
	this.shape_4.setTransform(53.8,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgpBGIAAiLIAgAAIAABxIAzAAIAAAag");
	this.shape_5.setTransform(41.9,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAjBGIgKgfIgxAAIgKAfIgiAAIAziLIAkAAIAyCLgAgCggIgPAuIAjAAIgQgtIgCgNIAAAAIgCAMg");
	this.shape_6.setTransform(29.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAaBGIgWhZQgCgHgBgJIgCAQIgXBZIglAAIgliLIAiAAIAUBcIADAQIAAAAIACgQIAahcIAhAAIAXBdIACAPIAAAAIADgQIAThcIAfAAIglCLg");
	this.shape_7.setTransform(12.1,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AgcAzIAAhjIAXAAIAAAUIABAAQACgKAHgGQAGgGAJAAQAGAAADACIAAAVQgEgDgIAAQgJAAgIAJQgFAJAAAPIAAAwg");
	this.shape_8.setTransform(140.3,45.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgOAmIAAg3IgRAAIAAgSIARAAIAAgXIAWgHIAAAeIAYAAIAAASIgYAAIAAAxQAAAIADAEQADAEAIAAQAGAAAEgDIAAASQgHADgLAAQgcAAAAgcg");
	this.shape_9.setTransform(132.3,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_10.setTransform(119.9,45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgjA2QgMgSAAghQAAgkANgUQANgSAXgBQAuABAABHQAAAjgNASQgNATgWAAQgXAAgMgSgAgYACQAAA1AYgBQAZABAAg2QAAg2gZgBQgYABAAA3g");
	this.shape_11.setTransform(100,43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AgiA2QgNgSAAghQAAgkANgUQANgSAXgBQAuABAABHQAAAjgNASQgNATgWAAQgWAAgMgSgAgXACQgBA1AZgBQAYABAAg2QAAg2gYgBQgZABABA3g");
	this.shape_12.setTransform(88.9,43.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgpBBIAAgVQANALASgBQANAAAIgGQAIgHAAgKQAAgYgjAAIgLAAIAAgRIAKAAQAgAAAAgXQAAgUgZgBQgOABgMAKIAAgUQAOgJAUAAQARAAAMAKQALAJAAAPQAAAbgcAJIAAAAQAPABAJAJQAIAJAAANQAAATgOAMQgOALgWAAQgVAAgMgHg");
	this.shape_13.setTransform(77.6,43.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_14.setTransform(62.7,44.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399FF").s().p("AAWAzIAAg3QAAgcgUAAQgJAAgHAIQgHAHAAAMIAAA4IgXAAIAAhjIAXAAIAAARIABAAQALgTAUAAQAQAAAJALQAJAKAAAUIAAA8g");
	this.shape_15.setTransform(47.4,45.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399FF").s().p("AgLBJIAAhjIAWAAIAABjgAgJgyQgEgDAAgHQAAgFAEgEQAEgDAFgBQAGABAEADQAEAEAAAFQAAAGgEAEQgEADgGABQgFgBgEgDg");
	this.shape_16.setTransform(38.9,42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_17.setTransform(27.5,45.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399FF").s().p("AgrBHIAAgLQAAgGACgGIAFgLIAHgKIAJgIIAKgJIAJgIIAIgGIAHgIIADgIQACgEAAgFQAAgGgCgEQgCgEgCgDQgDgDgFgBQgEgCgEAAQgJAAgIAEQgKAEgHAIIAAgVQADgEAFgCIAJgEIAKgCIAKgBQAJAAAIACQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgCAHIgGAMQgEAFgFAFIgNALIgLAJIgJAJIgIAIQgCAEAAAEIAAABIA+AAIAAATg");
	this.shape_18.setTransform(7.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,86.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AgKBIQgVgBgNgHIABgbQAOAKAQABQAMABAHgGQAHgGAAgJQACgVgdgCIgZABIAJhNIBJAEIgBAZIgxgCIgEAbIAMAAQAWABALAMQAMAMgBATQgBAVgQAMQgNAMgUAAIgFAAg");
	this.shape.setTransform(89.3,101.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgxBEIABgLQAAgLAEgIQAFgIAGgHQAFgGAHgFQAGgFAHgEIAKgHIAIgHQAEgEABgEQACgEAAgFQABgJgFgEQgFgFgJgBQgSgBgRAOIABgbQATgLAWABQAKABAIADQAJADAGAFQAFAGADAHQADAIgBAJQAAAJgEAIQgDAHgGAFQgFAGgHAFIgOAJIgIAGIgIAGIgFAGQgCADAAADIA6ADIgCAZg");
	this.shape_1.setTransform(77.7,100.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AAAAQQgIAAgFgFQgEgFAAgGQAAgHAGgFQAFgDAHAAQAIABAFAEQAEAFAAAGQAAAHgGAEQgEAEgHAAIgBAAg");
	this.shape_2.setTransform(63.8,105.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AgIA0QgQgBgOgFIABgZQAHAEAIADQAHADAHAAQAIABAEgDQAFgBAAgFQAAgDgCgCIgFgEIgGgDIgIgDIgKgFQgEgDgDgDQgDgDgCgFIgBgKQABgJAEgGQADgGAHgDQAGgDAIgCQAHgCAJABQAHAAAGACIANADIgBAYQgGgEgGgBQgHgDgGAAIgGABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAABIgDACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAEAEIAFADIAHADIALAFIAJAFQADAEABAEQACAFAAAHQgBAJgDAFQgFAHgGADQgHAEgIABIgMABIgFAAg");
	this.shape_3.setTransform(56.8,101.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006699").s().p("AAWBHIgTglIgEgIIgEgFIgFgFIgFgBIgIAAIgDA1IgggBIAHiLIAyADQAyACgBAmQgBAHgDAHQgCAGgFAFQgEAEgGADQgGADgHABIAAABIAGADIAFAGIAFAGIAEAHIAZArgAgWgIIANABQAKAAAGgFQAGgGABgJQABgRgVgCIgOgBg");
	this.shape_4.setTransform(46.7,99);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399FF").s().p("AAzA1IADg2QAAgPgEgIQgEgHgKAAQgJgBgHAIQgHAJAAAMIgDA1IgWgBIADg3QACgcgUgBQgJAAgGAHQgHAJAAANIgDA1IgXgBIAFhjIAXABIgBAQQAMgRAVABQAKAAAHAGQAHAGACAKQANgUAWABQAhACgDAoIgDA9g");
	this.shape_5.setTransform(127.7,75.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399FF").s().p("AAQBLIgjgyIAAAAIgDAwIgXgBIAIiTIAWABIgEBdIABAAIAlgrIAbABIgsAtIArA2g");
	this.shape_6.setTransform(114.3,72);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399FF").s().p("AgEBIQgWgBgLgTQgMgSACgiQACgkAOgSQANgTAXACQAvACgEBHQgCAjgOASQgNARgVAAIgCAAgAgYAAQgDA1AZABQAYABADg1QADg2gZgBIgBAAQgXAAgDA1g");
	this.shape_7.setTransform(97.6,71.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AgCBHIAFhzIgNAIIgQAEIABgTIALgEIALgEQAEgCAFgDIALgHIAKABIgHCOg");
	this.shape_8.setTransform(87.7,70.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgaAHIABgQIA0ADIgBAQg");
	this.shape_9.setTransform(74.5,71.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("AAUAzIADg4QACgbgUgBQgJgBgIAIQgHAHAAAMIgDA4IgXgBIAFhjIAXABIgBAQIABAAQAMgSAUABQAQABAIALQAIALgBAUIgDA8g");
	this.shape_10.setTransform(59,71.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgPBJIAFhjIAWABIgFBjgAgHgzQgEgEABgFQAAgGAEgDQAEgEAFABQAGAAAEAEQADAEAAAFQAAAFgEAEQgEADgGAAQgFAAgEgEg");
	this.shape_11.setTransform(50.8,68.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AAzA1IADg2QAAgPgEgIQgEgHgKAAQgJgBgHAIQgHAJAAAMIgDA1IgWgBIADg3QACgcgUgBQgJAAgGAHQgHAJAAANIgDA1IgXgBIAFhjIAXABIgBAQQAMgRAVABQAKAAAHAGQAHAGACAKQANgUAWABQAhACgDAoIgDA9g");
	this.shape_12.setTransform(39.2,70.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgLBIQgUgBgKgGIABgWQAOAKAOAAQANABAJgHQAJgGAAgNQABgLgIgIQgJgHgPgBIgXAAIAIhIIBEADIgBAUIgxgDIgEAjIAMAAQAWACALAMQAMALgCATQgBAVgOAMQgNALgVAAIgEAAg");
	this.shape_13.setTransform(19.2,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AgKBIQgUgBgMgIIABgWQANAMARABQANABAIgGQAJgGABgLQABgYgjgCIgLAAIAAgRIALAAQAfACACgXQABgUgZgBQgOgBgMAJIABgUQAOgHATABQASABALAJQALALgBAOQgCAcgcAGIAAABQAPABAIAJQAJAKgBAOQgBASgPAMQgNAJgUAAIgEAAg");
	this.shape_14.setTransform(8,66.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgIA0QgQgBgOgGIACgZQAHAFAHACQAHADAHABQAIAAAFgCQAEgCABgEQAAgDgCgCIgFgEIgHgDIgHgDIgKgGQgFgCgCgDQgEgEgBgFIgBgKQABgJAEgGQAEgFAHgDQAGgEAIgCIAPAAIANACIAOAEIgCAXQgGgEgGgBQgGgDgHAAIgGAAIgFABIgCADIgBADQgBADACACIAEAEIAFADIAHACIALAGIAIAFQADAEACAFQACAEgBAHQAAAJgFAGQgEAGgGADQgHAEgIABIgMABIgFAAg");
	this.shape_15.setTransform(107.2,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AANAzIABgPIgBAAQgMARgSgCQgjgCADgqIAEg7IAeACIgDA4QgCAWARABQAHAAAGgFQAFgGABgKIADg4IAfACIgGBjg");
	this.shape_16.setTransform(97,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAABHIg1gDIAJiLIAyAEQAXABAMAKQAMAJgBAPQAAAMgIAIQgJAIgMACIAAABQAPACAIAJQAIAKAAANQgCATgPALQgMAJgTAAIgGgBgAgUAvIARABQAKABAGgFQAHgFABgIQAAgJgGgFQgGgFgKgBIgRgBgAgQgNIAOABQAIABAGgEQAGgFAAgIQABgPgWgCIgLgBg");
	this.shape_17.setTransform(84.8,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAIBIQgfgCgSgUQgRgVACgeQACgiAXgTQAWgUAgADQAUACAOAFIgCAeQgOgIgSgCQgTgBgMALQgNAMgBAVQgCATALAOQAKAMATABQASABAQgIIgCAdQgMAFgTAAIgJAAg");
	this.shape_18.setTransform(66.7,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgXBGIAHhxIgogDIACgZIBvAHIgCAaIgpgDIgHBxg");
	this.shape_19.setTransform(54.9,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgOBHIgxgDIAJiLIAyAEQBJAFgFBDQgCAggVASQgUARgcAAIgHgBgAgeAsIAPABQAUACAMgMQANgLABgVQACgTgLgMQgLgNgUgBIgPgBg");
	this.shape_20.setTransform(41.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.7,115.6);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AglAiQgXgdgCgWQgBgXAUgQQAmgfAsA3QAWAcACAWQACAXgUAQQgOALgPAAQgZAAgcgigAgdglQgQANAgAmQAdAkAPgMQAPgMgfglQgWgdgOAAQgFAAgDADg");
	this.shape.setTransform(110.7,80.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AgCARQgHAAgEgFQgEgGABgGQABgHAGgEQAGgFAGAAQAHAAAEAGQAFAFgCAGQgBAHgGAFQgFAEgGAAIgBAAg");
	this.shape_1.setTransform(99.2,97);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("AgPAoIAQgEIAMgIQAGgFADgFQACgFgDgDQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgGAAIgIADIgGADQgGADgFAAQgFABgFgBQgFAAgEgDIgIgHQgFgGgBgHQgBgGACgHQACgIAGgGQAFgGAGgGQAFgEAGgDQAGgEAHgCIAOASQgHABgGACIgLAIIgEAEIgCAEQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAABQABAAAAAAQABAAAAABIAGgBIAGgCIAGgDIAMgDIAKgBIAKADQAEADAEAEQAGAHABAHQABAHgDAHQgCAHgGAHQgFAGgHAGQgNAKgOAGg");
	this.shape_2.setTransform(91.4,98.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006699").s().p("AhZgdIAngfQAnghAXAeQAFAFACAHQACAGAAAGQABAHgDAHQgCAGgEAGIAAAAQADgBAEAAIAHAAIAIACIAIACIAvAOIgcAXIgogOIgIgCIgHgCIgGAAQgCABgCACIgHAFIAhAqIgXAUgAgmgnIgLAJIAYAeIALgJQAIgGABgJQABgIgGgHQgGgHgHAAQgHAAgIAHg");
	this.shape_3.setTransform(82.4,104.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhXgXIAZgSIAnA0IAAAAIgBgIIgChFIAdgXIgBBTIBWAcIggAXIhDgZIgIgEIAAAAIAmA3IgYATg");
	this.shape_4.setTransform(68.9,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhKguIAagTIBCBcIAqgdIAPATIhEAxg");
	this.shape_5.setTransform(59.3,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhLg8IAegWIB5BUIgbAUIgbgTIgnAdIAKAfIgbAUgAgqgmIAQAuIAcgUIgngdIgJgJIgBAAQAEAGABAGg");
	this.shape_6.setTransform(51,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhpAMIAcgUIBHA/IAKANIAAgBQgEgGgDgIIgihaIAcgTIBIA+IAMAKIgIgOIgnhWIAZgTIA1CHIgdAUIhHg6QgGgFgEgHIAAAAIAGAPIAhBVIgdAWg");
	this.shape_7.setTransform(33.7,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399FF").s().p("AhZADIASgNIAKAMIAAgBQgDgUAQgNQAIgHAKAAQAKAAAIAFQgFgXARgOQAZgVAaAfIAmAwIgRAOIgjgpQgKgNgIgCQgHgDgJAHQgFAFABALQAAALAHAKIAiApIgRAOIgjgrQgRgWgPANQgIAGAAAJQABAKAJALIAiAqIgSAOg");
	this.shape_8.setTransform(120.2,38.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AhRgvIASgOIA7BHIABAAIgBg6IAUgRIgBBAIBDAKIgWASIg8gMIAAAAIAdAlIgRAOg");
	this.shape_9.setTransform(108.3,46.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3399FF").s().p("AgBBCQgEgFgCgFIgDgMQgBgGABgGIABgNIACgMIACgMIADgKIAAgKIgDgKIgEgHQgEgFgEgCQgEgCgEAAQgEgBgFACQgEABgDAEQgHAFgEAJQgFAIgBAMIgOgRIADgKIAFgJIAGgIIAIgIQAHgGAIgCQAIgDAHAAQAHAAAHAEQAGAEAGAHQAFAHADAGQACAHABAHIAAAOIgCAQIgEANIgCANIgBALQABAGACADIAAAAIAygoIAMAPIhEA4g");
	this.shape_10.setTransform(100,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgZAKIAoggIALANIgoAgg");
	this.shape_11.setTransform(88.9,62.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399FF").s().p("AhBgPIASgOIAKANIABgBQgEgWAQgNQANgKAMADQANACANAQIAnAuIgSAOIgjgqQgRgWgPANQgJAGABAKQgBALAIAIIAjAsIgRAOg");
	this.shape_12.setTransform(77.4,73.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgagOIARgOIA+BMIgRAOgAgxgnQgEgEABgGQABgFAEgEQAFgDAFAAQAFABAEAEQADAEgBAGQAAAFgFADQgEAEgFAAQgGgBgDgEg");
	this.shape_13.setTransform(69.5,76.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3399FF").s().p("AhYADIARgNIAKAMIAAgBQgDgUAQgNQAJgHAJAAQAKAAAHAFQgEgXARgOQAZgVAZAfIAoAwIgSAOIgjgpQgJgNgIgCQgIgDgJAHQgFAFABALQAAALAHAKIAiApIgSAOIgigrQgRgWgPANQgIAGABAJQAAAKAJALIAiAqIgRAOg");
	this.shape_14.setTransform(62,85.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399FF").s().p("AAHBBQgUgGgVgaQgYgdgCgWQgCgXATgPQAjgdAtA4QAWAbACAWQACAXgSAPQgMAJgOAAQgGAAgGgCgAghgpQgTAQAjAqQAgApATgPQAUgQgigpQgYgfgSAAQgGAAgFAEg");
	this.shape_15.setTransform(45.2,96.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3399FF").s().p("AgBBCQgEgFgCgFIgDgMQgBgGABgGIABgNIACgMIACgMIADgKIAAgKIgDgKIgEgHQgEgFgEgCQgEgCgEAAQgEgBgFACQgEABgDAEQgHAFgEAJQgFAIgBAMIgOgRIADgKIAFgJIAGgIIAIgIQAHgGAIgCQAIgDAHAAQAHAAAHAEQAGAEAGAHQAFAHADAGQACAHABAHIAAAOIgCAQIgEANIgCANIgBALQABAGACADIAAAAIAygoIAMAPIhEA4g");
	this.shape_16.setTransform(37,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.5,135.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABXCvIgZhOIh8AAIgYBOIhWAAICAldIBcAAIB9FdgAgHhRIgmB2IBZAAIgmh1QgEgNgCgTIgBAAQgBAQgFAPg");
	this.shape.setTransform(52.4,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA1C3").s().p("ACwKBQhghqhQhwIgZgmQheiIg4h/QhRi1AAiYQAAhoAohgQAnhbBIhIQBGhGBcgoQBfgoBoAAIAACMQhJAAhBAcQhAAbgyAyQgwAxgcBAQgcBCAABJQAABIAcBCQAcBBAwAwQAyAyBAAaQBBAcBJAAIAAJVQgggegwg2g");
	this.shape_1.setTransform(25.7,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_2.setTransform(51.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45B4DA").s().p("AkACAQBJAABCgcQBAgaAygyQAwgwAbhBQAchCAAhIQAAhJgchCQgbhAgwgxQgygyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAoBHBGQBHBIAnBbQApBggBBoQABCXhRCzQg5CAheCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_3.setTransform(77,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABXCvIgZhOIh8AAIgYBOIhWAAICAldIBcAAIB9FdgAgHhRIgmB2IBZAAIgmh1QgEgNgCgTIgBAAQgBAQgFAPg");
	this.shape.setTransform(52.4,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA1C3").s().p("ACwKBQhghqhQhwIgZgmQheiIg4h/QhRi1AAiYQAAhoAohgQAnhbBIhIQBGhGBcgoQBfgoBoAAIAACMQhJAAhBAcQhAAbgyAyQgwAxgcBAQgcBCAABJQAABIAcBCQAcBBAwAwQAyAyBAAaQBBAcBJAAIAAJVQgggegwg2g");
	this.shape_1.setTransform(25.7,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_2.setTransform(51.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45B4DA").s().p("AkACAQBJAABCgcQBAgaAygyQAwgwAbhBQAchCAAhIQAAhJgchCQgbhAgwgxQgygyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAoBHBGQBHBIAnBbQApBggBBoQABCXhRCzQg5CAheCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_3.setTransform(77,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,102.6,145), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhENAFjIAArGMCIbAAAIAALGg");
	this.shape.setTransform(436.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("AiZD5IAAheQA4AgA4AAQA3AAAfgeQAfgdAAgzIAAgdIgBAAQgmA9hKAAQhEAAgpgwQgogxAAhRQAAhbAtg2QAtg2BKAAQBAAAAhAzIABAAIAAgqIBvAAIAAE+QAABkg6A4Qg6A2htAAQhJAAgqgUgAg0iaQgWAdAAA1QABAsATAbQAVAZAhAAQAjAAAWgZQAUgbAAgsIAAgcQAAgjgTgYQgVgYggABQgkAAgVAcg");
	this.shape_1.setTransform(858.1,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("AA/C5IAAjIQAAhTg8AAQgcAAgSAWQgTAWAAAiIAADNIhvAAIAAlnIBvAAIAAA5IACAAQAnhCBLAAQB4AAAACUIAADcg");
	this.shape_2.setTransform(815.3,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003366").s().p("Ag3EKIAAlnIBuAAIAAFngAgtinQgSgRAAgYQAAgZASgQQASgPAbAAQAcAAATAPQARAQAAAZQAAAZgRAQQgTARgcgBQgbAAgSgQg");
	this.shape_3.setTransform(783.1,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003366").s().p("AAvELIhyizIgBAAIAACzIhvAAIAAoVIBvAAIAAFTIABAAIBqilICEAAIiBCnICKDAg");
	this.shape_4.setTransform(755.3,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003366").s().p("Ag3ELIAAoVIBvAAIAAIVg");
	this.shape_5.setTransform(722.4,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003366").s().p("AiECgQgegeAAgyQAAhoB8gQIBhgNQAAg7g/AAQhBAAg6AmIAAhUQAYgLAogKQAogJAgAAQCaAAAACaIAADWIhpAAIAAg0IgBAAQglA9hGAAQg0AAgegdgAgGASQg2AHAAAqQAAATANAMQANAMAXAAQAeAAAUgVQAUgWAAghIAAgZg");
	this.shape_6.setTransform(691.7,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003366").s().p("ABgD8IhTlDQgHgYgBggIgCAAQgDAigFAWIhWFDIiDAAIiEn3IB8AAIBHFOQAEAWACAlIACAAQACgcAJggIBblNIB5AAIBSFSQAFASADAkIACAAQABgcAGgdIBGlPIByAAIiFH3g");
	this.shape_7.setTransform(637.2,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003366").s().p("AhCB1IAAikIg6AAIAAhSIA6AAIAAhNIBuggIAABtIBRAAIAABSIhRAAIAACRQAAA4AtAAQARAAATgKIAABSQgZANgyAAQhzAAgBh6g");
	this.shape_8.setTransform(567.2,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003366").s().p("AiJCqIAAhaQAbARAcAIQAbAIAYAAQAeAAAQgIQARgIAAgRQAAgKgIgHQgIgHgMgFIgZgKQgPgEgNgFQgWgJgQgIQgQgKgLgMQgLgMgGgQQgGgQAAgWQAAgfANgVQANgWAWgOQAWgOAdgGQAcgHAdAAQAYAAAZAEQAZADAXAIIAABVQgVgMgYgGQgYgGgXAAQgLAAgJACQgJABgIAEQgHAEgEAGQgEAFAAAIQAAAKAGAHQAGAHAKAFIAWAJIAZAJQAWAHASAKQASAJANALQANAMAHAQQAGARAAAXQAAAggNAXQgOAXgXANQgYAPgdAGQgfAHgfAAQg7AAgzgTg");
	this.shape_9.setTransform(537.7,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003366").s().p("AiECgQgegeAAgyQAAhoB8gQIBhgNQAAg7g/AAQhBAAg6AmIAAhUQAYgLAogKQAogJAgAAQCaAAAACaIAADWIhpAAIAAg0IgBAAQglA9hGAAQg0AAgegdgAgGASQg2AHAAAqQAAATANAMQANAMAXAAQAeAAAUgVQAUgWAAghIAAgZg");
	this.shape_10.setTransform(501.2,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_11.setTransform(463.7,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003366").s().p("AiVD8IAAn3IBxAAIAAGbIC6AAIAABcg");
	this.shape_12.setTransform(427.9,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003366").s().p("AiRDgQgpgwAAhWQAAhZAtg1QAug2BJAAQBFAAAbAyIACAAIAAjWIBvAAIAAIUIhvAAIAAgxIgCAAQgmA6hIAAQhEAAgpgvgAg0AIQgVAcAAAzQAAAwAUAZQAUAaAjAAQAhAAAWgbQAVgcAAgsIAAgbQAAgkgVgXQgUgWghABQgkAAgUAcg");
	this.shape_13.setTransform(363.9,23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_14.setTransform(323.5,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003366").s().p("Ah0C3IAAlnIBvAAIAABDIABAAQAZhJBFAAQASAAAJAEIAABmQgUgKgaAAQglAAgUAaQgTAbAAAsIAACsg");
	this.shape_15.setTransform(291.5,31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003366").s().p("Ag3EKIAAlnIBuAAIAAFngAgtinQgSgRAAgYQAAgZASgQQASgPAbAAQAcAAATAPQARAQAAAZQAAAZgRAQQgTARgcgBQgbAAgSgQg");
	this.shape_16.setTransform(265,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003366").s().p("AitAhIAAjYIBvAAIAADOQAABMA9AAQAcAAASgUQASgWAAgkIAAjMIBvAAIAAFnIhvAAIAAg4IgBAAQgqBBhDAAQh+gBAAiXg");
	this.shape_17.setTransform(232.6,32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003366").s().p("ABMELIAAjXIgCAAQglA7hIAAQhEAAgpgwQgqgvAAhUQAAhaAtg2QAug2BJAAQBBAAAfAzIACAAIAAgqIBvAAIAAIMgAg0iYQgVAdAAAzQAAAuAVAaQAUAZAgAAQAjAAAWgZQAVgaAAgrIAAgdQAAgjgVgYQgUgYggAAQgkAAgVAdg");
	this.shape_18.setTransform(187.7,39.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_19.setTransform(147.3,32);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003366").s().p("ABRD8IhOiBIgQgbQgIgLgIgJQgJgIgJgFQgJgEgKAAIgfAAIAADBIhxAAIAAn3IC0AAQC2AAAACJQAAAbgIAWQgIAWgPASQgPASgUAMQgWANgZAHIAAABQALAEALAIQAKAIAKAKQAKALAJANIAQAXIBgCVgAhhgaIAxAAQAlAAAVgVQAXgVgBggQAAhChOAAIgzAAg");
	this.shape_20.setTransform(107.5,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,204,0,0.729)").s().p("AiECEQg3g2AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A2Qg3A4hOAAQhNAAg3g4g");
	this.shape_21.setTransform(25.3,25.2);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#13419C").s().p("AAAEdQh1AAhUhUQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBTQhTBUh2AAIAAAAgAiXiXQg/A/AABYQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhYg/g/Qg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape_22.setTransform(25,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.729)").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_23.setTransform(25,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#13419C").s().p("AjCDCQhQhQAAhyQAAhxBQhQIABgBQBQhQBxAAQByAABQBQQBRBRAABxQAAByhRBQIAAAAQhQBRhyAAIAAAAQhxAAhRhRgAieieIAAAAQhCBCAABcQAABdBCBCQBCBCBcAAQBdAABChCIAAAAQBChCAAhdQAAhchChCQhChChdAAQhcAAhCBCg");
	this.shape_24.setTransform(25,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.729)").s().p("AAADhQhcAAhChCQhChCAAhdQAAhcBChCIAAAAQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCIAAAAQhCBChdAAIAAAAg");
	this.shape_25.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-29.7,899.8,100.8);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egp9AFjIAArGMBT7AAAIAALGg");
	this.shape.setTransform(268.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_1.setTransform(517.1,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("AhCB1IAAikIg6AAIAAhSIA6AAIAAhNIBuggIAABtIBRAAIAABSIhRAAIAACRQAAA4AsAAQASAAATgKIAABSQgYANgzAAQh0AAAAh6g");
	this.shape_2.setTransform(483.3,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003366").s().p("AitAhIAAjYIBvAAIAADOQAABMA8AAQAdAAASgUQASgWAAgkIAAjMIBvAAIAAFnIhvAAIAAg4IgCAAQgpBBhEAAQh9gBAAiXg");
	this.shape_3.setTransform(447.3,32.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003366").s().p("AiOCKQg0gyAAhXQAAhYA2gyQA1gzBaAAQBaAAAzAzQAzAyAABTQAABZg1A0Qg1A0haAAQhaAAgzgzgAg7hLQgWAbAAAwQAABnBTABQBPAAAAhqQAAhkhQAAQgmAAgWAbg");
	this.shape_4.setTransform(403.8,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003366").s().p("ABRD8IhOiBIgQgbQgIgLgJgJQgIgIgJgFQgJgEgKAAIgfAAIAADBIhxAAIAAn3IC0AAQC2AAAACJQAAAbgIAWQgIAWgPASQgPASgUAMQgWANgZAHIAAABQALAEALAIQAKAIAKAKQAKALAJANIAQAXIBgCVgAhhgaIAyAAQAkAAAVgVQAXgVgBggQAAhChOAAIgzAAg");
	this.shape_5.setTransform(361.7,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003366").s().p("AhCB1IAAikIg6AAIAAhSIA6AAIAAhNIBuggIAABtIBRAAIAABSIhRAAIAACRQAAA4AsAAQASAAATgKIAABSQgYANgyAAQh1AAAAh6g");
	this.shape_6.setTransform(301,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003366").s().p("AiJCqIAAhaQAbARAcAIQAbAIAYAAQAeAAAQgIQARgIAAgRQAAgKgIgHQgIgHgMgFIgZgKQgPgEgNgFQgWgJgQgIQgQgKgLgMQgLgMgGgQQgGgQAAgWQAAgfANgVQANgWAWgOQAWgOAdgGQAcgHAdAAQAYAAAZAEQAZADAXAIIAABVQgVgMgYgGQgYgGgXAAQgLAAgJACQgJABgIAEQgHAEgEAGQgEAFAAAIQAAAKAGAHQAGAHAKAFIAWAJIAZAJQAWAHASAKQASAJANALQANAMAHAQQAGARAAAXQAAAggNAXQgOAXgXANQgYAPgdAGQgfAHgfAAQg7AAgzgTg");
	this.shape_7.setTransform(271.4,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_8.setTransform(236.1,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003366").s().p("AhBB1IAAikIg7AAIAAhSIA7AAIAAhNIBtggIAABtIBRAAIAABSIhRAAIAACRQAAA4AsAAQASAAATgKIAABSQgYANgyAAQh1AAABh6g");
	this.shape_9.setTransform(202.3,27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003366").s().p("AiJCqIAAhaQAbARAcAIQAbAIAYAAQAeAAAQgIQARgIAAgRQAAgKgIgHQgIgHgMgFIgZgKQgPgEgNgFQgWgJgQgIQgQgKgLgMQgLgMgGgQQgGgQAAgWQAAgfANgVQANgWAWgOQAWgOAdgGQAcgHAdAAQAYAAAZAEQAZADAXAIIAABVQgVgMgYgGQgYgGgXAAQgLAAgJACQgJABgIAEQgHAEgEAGQgEAFAAAIQAAAKAGAHQAGAHAKAFIAWAJIAZAJQAWAHASAKQASAJANALQANAMAHAQQAGARAAAXQAAAggNAXQgOAXgXANQgYAPgdAGQgfAHgfAAQg7AAgzgTg");
	this.shape_10.setTransform(172.8,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003366").s().p("AiECgQgegeAAgyQAAhoB8gQIBhgNQAAg7g/AAQhBAAg6AmIAAhUQAYgLAogKQAogJAgAAQCaAAAACaIAADWIhpAAIAAg0IgBAAQglA9hGAAQg0AAgegdgAgGASQg2AHAAAqQAAATANAMQANAMAXAAQAeAAAUgVQAUgWAAghIAAgZg");
	this.shape_11.setTransform(136.3,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003366").s().p("AiRD8IAAn3IEjAAIAABcIixAAIAAB8ICiAAIAABbIiiAAIAADEg");
	this.shape_12.setTransform(100.9,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,204,0,0.729)").s().p("AiECEQg3g2AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A2Qg3A4hOAAQhNAAg3g4g");
	this.shape_13.setTransform(25.3,25.2);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13419C").s().p("AAAEdQh1AAhUhUQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBTQhTBUh2AAIAAAAgAiXiXQg/A/AABYQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhYg/g/Qg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.729)").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_15.setTransform(25,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#13419C").s().p("AjCDCQhQhQAAhyQAAhxBQhQIABgBQBQhQBxAAQByAABQBQQBRBRAABxQAAByhRBQIAAAAQhQBRhyAAIAAAAQhxAAhRhRgAieieIAAAAQhCBCAABcQAABdBCBCQBCBCBcAAQBdAABChCIAAAAQBChCAAhdQAAhchChCQhChChdAAQhcAAhCBCg");
	this.shape_16.setTransform(25,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.729)").s().p("AAADhQhcAAhChCQhChCAAhdQAAhcBChCIAAAAQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCIAAAAQhCBChdAAIAAAAg");
	this.shape_17.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-29.7,559.7,100.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgmNAFjIAArGMBMaAAAIAALGg");
	this.shape.setTransform(244.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("AhCB1IAAikIg6AAIAAhSIA6AAIAAhNIBuggIAABtIBRAAIAABSIhRAAIAACRQAAA4AtAAQARAAATgKIAABSQgZANgyAAQhzAAgBh6g");
	this.shape_1.setTransform(471.8,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("AiJCqIAAhaQAbARAcAIQAbAIAYAAQAeAAAQgIQARgIAAgRQAAgKgIgHQgIgHgMgFIgZgKQgPgEgNgFQgWgJgQgIQgQgKgLgMQgLgMgGgQQgGgQAAgWQAAgfANgVQANgWAWgOQAWgOAdgGQAcgHAdAAQAYAAAZAEQAZADAXAIIAABVQgVgMgYgGQgYgGgXAAQgLAAgJACQgJABgIAEQgHAEgEAGQgEAFAAAIQAAAKAGAHQAGAHAKAFIAWAJIAZAJQAWAHASAKQASAJANALQANAMAHAQQAGARAAAXQAAAggNAXQgOAXgXANQgYAPgdAGQgfAHgfAAQg7AAgzgTg");
	this.shape_2.setTransform(442.3,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003366").s().p("AiOCKQg0gyAAhXQAAhYA2gyQA1gzBaAAQBaAAAzAzQAzAyAABTQAABZg1A0Qg1A0haAAQhaAAgzgzgAg7hLQgWAbAAAwQAABnBTABQBPAAAAhqQAAhkhQAAQgmAAgWAbg");
	this.shape_3.setTransform(404.2,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003366").s().p("AiBDAQhChEAAhxQgBh4BMhMQBKhLB2AAQBKAAAyATIAABtQgygehBAAQhHAAgqAtQgsAsAABLQAABKApArQAoArBGAAQBCAAA3ggIAABoQg2AbhaAAQhyAAhDhFg");
	this.shape_4.setTransform(359.5,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003366").s().p("AhBB1IAAikIg7AAIAAhSIA7AAIAAhNIBtggIAABtIBRAAIAABSIhRAAIAACRQAAA4AtAAQARAAATgKIAABSQgYANgyAAQh0AAAAh6g");
	this.shape_5.setTransform(303.4,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003366").s().p("AiJCqIAAhaQAbARAcAIQAbAIAYAAQAeAAAQgIQARgIAAgRQAAgKgIgHQgIgHgMgFIgZgKQgPgEgNgFQgWgJgQgIQgQgKgLgMQgLgMgGgQQgGgQAAgWQAAgfANgVQANgWAWgOQAWgOAdgGQAcgHAdAAQAYAAAZAEQAZADAXAIIAABVQgVgMgYgGQgYgGgXAAQgLAAgJACQgJABgIAEQgHAEgEAGQgEAFAAAIQAAAKAGAHQAGAHAKAFIAWAJIAZAJQAWAHASAKQASAJANALQANAMAHAQQAGARAAAXQAAAggNAXQgOAXgXANQgYAPgdAGQgfAHgfAAQg7AAgzgTg");
	this.shape_6.setTransform(273.8,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003366").s().p("Ah7CNQgwgxAAhWQAAhZA0g0QA0g1BLAAQBOAAAsAvQAqAuAABRIAAAuIjpAAQAFBOBcAAQA8AAAtgcIAABQQgyAbhQAAQhWAAgwgwgAgmhbQgUAXgEAhICDAAQAAhOg+AAQgaAAgTAWg");
	this.shape_7.setTransform(238.5,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003366").s().p("AA9C0Ig1jSQgFgVgBgZIgCAAQgCAbgEARIg5DUIh0AAIhllnIBxAAIAyDqQADAQACAYIACAAQACgZAEgRIA+joIBpAAIA4DqQACAIADAhIACAAQACgVAEgUIAujqIBnAAIhnFng");
	this.shape_8.setTransform(190,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003366").s().p("AiOCKQg0gyAAhXQAAhYA2gyQA1gzBaAAQBaAAAzAzQAzAyAABTQAABZg1A0Qg1A0haAAQhaAAgzgzgAg7hLQgWAbAAAwQAABnBTABQBPAAAAhqQAAhkhQAAQgmAAgWAbg");
	this.shape_9.setTransform(139.4,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003366").s().p("AiVD8IAAn3IBxAAIAAGbIC6AAIAABcg");
	this.shape_10.setTransform(101.3,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,204,0,0.729)").s().p("AiECEQg3g2AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A2Qg3A4hOAAQhNAAg3g4g");
	this.shape_11.setTransform(25.3,25.2);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13419C").s().p("AAAEdQh1AAhUhUQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBTQhTBUh2AAIAAAAgAiXiXQg/A/AABYQAABZA/A/QA/A/BYAAQBZAAA/g/QA/g/AAhZQAAhYg/g/Qg/g/hZAAIAAAAQhYAAg/A/g");
	this.shape_12.setTransform(25,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.729)").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_13.setTransform(25,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13419C").s().p("AjCDCQhQhQAAhyQAAhxBQhQIABgBQBQhQBxAAQByAABQBQQBRBRAABxQAAByhRBQIAAAAQhQBRhyAAIAAAAQhxAAhRhRgAieieIAAAAQhCBCAABcQAABdBCBCQBCBCBcAAQBdAABChCIAAAAQBChCAAhdQAAhchChCQhChChdAAQhcAAhCBCg");
	this.shape_14.setTransform(25,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.729)").s().p("AAADhQhcAAhChCQhChCAAhdQAAhcBChCIAAAAQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCIAAAAQhCBChdAAIAAAAg");
	this.shape_15.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-29.7,495.7,100.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#393E70").p("ACfNLIk9AAIAA6VIE9AAg");
	this.shape.setTransform(1106.4,323.8,0.654,0.654);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393E70").s().p("AieNLIAA6VIE9AAIAAaVg");
	this.shape_1.setTransform(1106.4,323.8,0.654,0.654);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AiJN4IAA7vIETAAIAAbvg");
	this.shape_2.setTransform(1106.4,323.8,0.654,0.654);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E325B").s().p("AgpDDIAAmFIBSAAIAAGFg");
	this.shape_3.setTransform(1118.1,357.5,0.654,0.654);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D0D34").s().p("AiqC3IAAltIFVAAIiSFtg");
	this.shape_4.setTransform(1129.5,357.5,0.654,0.654);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E325B").s().p("AgpDDIAAmFIBSAAIAAGFg");
	this.shape_5.setTransform(1118.1,323.8,0.654,0.654);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D0D34").s().p("AiqC3IAAltIFVAAIiSFtg");
	this.shape_6.setTransform(1129.5,323.8,0.654,0.654);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2E325B").s().p("AgpDDIAAmFIBSAAIAAGFg");
	this.shape_7.setTransform(1118.1,289.9,0.654,0.654);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D0D34").s().p("AiqC3IAAltIFVAAIiSFtg");
	this.shape_8.setTransform(1129.5,289.9,0.654,0.654);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#393E70").p("ADJA/ImSAAIAAh9IGSAAg");
	this.shape_9.setTransform(1098,363,0.654,0.654);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_10.setTransform(1098,363,0.654,0.654);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#393E70").p("ADJA/ImSAAIAAh9IGSAAg");
	this.shape_11.setTransform(1098,288.5,0.654,0.654);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_12.setTransform(1098,288.5,0.654,0.654);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E15D5C").s().p("AgPB0QgEAAgDgEQgDgEAAgFIAAjOQAAgFADgDQADgEAEAAIAfAAQAEAAADAEQADADAAAFIAADOQAAAFgDAEQgDAEgEAAg");
	this.shape_13.setTransform(1043.3,304.9,0.654,0.654);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E15D5C").s().p("AgPB0QgEAAgDgEQgDgEAAgFIAAjOQAAgFADgDQADgEAEAAIAfAAQAEAAADAEQADADAAAFIAADOQAAAFgDAEQgDAEgEAAg");
	this.shape_14.setTransform(1039.1,304.9,0.654,0.654);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E15D5C").s().p("ABBBZIAAiMIgHAAIAACMIhyAAIAAiMIgIAAIAACMIgZAAQgFAAgDgEQgEgDAAgFIAAiZQAAgFAEgDQADgEAFAAICzAAQAFAAADAEQAEADAAAFIAACZQAAAFgEADQgDAEgFAAg");
	this.shape_15.setTransform(1041.2,294.2,0.654,0.654);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E15D5C").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	this.shape_16.setTransform(1041.2,284.4,0.654,0.654);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#69947B").s().p("AhWC0IgSgLQgDgCgBgEQgBgEACgDIA3hYIAXhlIAAhDIgmBKQgCAFgEACQgEACgDgBIgRgJQgDgBAAgFQgBgEADgFIBBiCQAFgJAHABIABgBIApAAIACABQAHgCAFAJIBIB/QADAFAAAEQgBAFgDACIgQAJQgDACgEgDQgEgCgDgEIguhRIAABQIAgBXIAAAFIAJBrQAAADgCADQgDADgEABIgVACQgEAAgDgCQgDgDAAgEIgJhrIgVg5IgOBHIgBABIgBAEIg6BcQgCAEgDABIgDAAQgCAAgDgCg");
	this.shape_17.setTransform(1041.6,352.1,0.654,0.654);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#69947B").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_18.setTransform(1041.8,336.3,0.654,0.654);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#393E70").p("AkXAAQAAB0BRBSQBTBSBzAAQB0AABShSQBShSAAh0QAAhzhShTQhShSh0AAQhzAAhTBSQhRBTAABzg");
	this.shape_19.setTransform(1041.6,349,0.654,0.654);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#22244C").s().p("AjFDHQhShSAAh1QAAhzBShSQBShSBzAAQB0AABSBSQBSBSABBzQgBB0hSBTQhSBSh0gBQhzABhShSg");
	this.shape_20.setTransform(1041.6,349,0.654,0.654);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D0D34").s().p("AC1AzQhUgkhhAAQhgAAhUAkQhRAkgxA8QAHh7BZhUQBbhWB7AAQB8AABbBWQBZBUAHB7Qgxg8hRgkg");
	this.shape_21.setTransform(1041.6,338.3,0.654,0.654);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2E325B").s().p("AjbDcQhchOAAh/QAAh/BchbQBbhcCAAAQCBAABcBcQBbBbAAB/QAAB/hbBOQhYBMiFAAQiEAAhXhMg");
	this.shape_22.setTransform(1041.6,348,0.654,0.654);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#393E70").p("AkXAAQAAB0BRBSQBTBSBzAAQB0AABShSQBShSAAh0QAAhzhShTQhShSh0AAQhzAAhTBSQhRBTAABzg");
	this.shape_23.setTransform(1041.6,298,0.654,0.654);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#22244C").s().p("AjFDGQhShSAAh0QAAhzBShSQBShTBzAAQB0AABSBTQBSBSABBzQgBB0hSBSQhSBSh0ABQhzgBhShSg");
	this.shape_24.setTransform(1041.6,298,0.654,0.654);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D0D34").s().p("AC1A0QhUglhhAAQhgAAhUAlQhRAjgxA8QAHh7BZhUQBbhWB7AAQB8AABbBWQBZBUAHB7Qgxg8hRgjg");
	this.shape_25.setTransform(1041.6,287.3,0.654,0.654);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2E325B").s().p("AjbDdQhchPAAh+QAAiBBchbQBbhbCAAAQCBAABcBbQBbBbAACBQAAB+hbBPQhYBLiFAAQiEAAhXhLg");
	this.shape_26.setTransform(1041.6,297,0.654,0.654);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#393E70").p("AkZNLIIzAAIAA6VIozAAg");
	this.shape_27.setTransform(1041.6,323.8,0.654,0.654);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#393E70").s().p("AkZNLIAA6VIIzAAIAAaVg");
	this.shape_28.setTransform(1041.6,323.8,0.654,0.654);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("Aj0N4IAA7vIHpAAIAAbvg");
	this.shape_29.setTransform(1041.6,323.8,0.654,0.654);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#393E70").p("AjIA/IGRAAIAAh9ImRAAg");
	this.shape_30.setTransform(1058,363,0.654,0.654);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_31.setTransform(1058,363,0.654,0.654);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#393E70").p("AjIA/IGRAAIAAh9ImRAAg");
	this.shape_32.setTransform(1058,288.5,0.654,0.654);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_33.setTransform(1058,288.5,0.654,0.654);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#393E70").p("AhyL9IDlAAIAA35IjlAAg");
	this.shape_34.setTransform(1078.6,325.1,0.654,0.654);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#393E70").s().p("AhyL9IAA35IDlAAIAAX5g");
	this.shape_35.setTransform(1078.6,325.1,0.654,0.654);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#506391").s().p("EgBFAiPMAAAhEdICLAAMAAABEdg");
	this.shape_36.setTransform(1078.1,408.9,0.654,0.654);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#506391").s().p("AiqAdIAAg5IFVAAIAAA5g");
	this.shape_37.setTransform(1078.6,557.7,0.654,0.654);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#506391").s().p("AhtAmIAAhLIDbAAIAABLg");
	this.shape_38.setTransform(1078.5,554.5,0.654,0.654);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E15D5C").s().p("AA4FyIAAhOIBOAAIAABOgAgnFyIAAhOIBOAAIAABOgAiFFyIAAhOIBPAAIAABOgACWEUIAAhPIBPAAIAABPgAjkEUIAAhPIBQAAIAABPgACWC1IAAhPIBPAAIAABPgACWBXIAAhPIBPAAIAABPgAA4gHIAAhPIBOAAIAABPgAgngHIAAhPIBOAAIAABPgACWhlIAAhPIBPAAIAABPgACWjEIAAhPIBPAAIAABPgAjkjEIAAhPIBQAAIAABPgAA4kjIAAhOIBOAAIAABOgAgnkjIAAhOIBOAAIAABOgAiFkjIAAhOIBPAAIAABOg");
	this.shape_39.setTransform(542.7,191.8,0.654,0.654);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E15D5C").s().p("AA3FyIAAhOIBPAAIAABOgAgmFyIAAhOIBNAAIAABOgAiFFyIAAhOIBPAAIAABOgACWEUIAAhPIBOAAIAABPgAjjEUIAAhPIBOAAIAABPgACWC1IAAhPIBOAAIAABPgACWBXIAAhPIBOAAIAABPgAA3gHIAAhPIBPAAIAABPgAgmgHIAAhPIBNAAIAABPgAiFgHIAAhPIBPAAIAABPgAjjgHIAAhPIBOAAIAABPgAjjhlIAAhPIBOAAIAABPgAjjjEIAAhPIBOAAIAABPgACWkjIAAhOIBOAAIAABOgAA3kjIAAhOIBPAAIAABOgAgmkjIAAhOIBNAAIAABOgAiFkjIAAhOIBPAAIAABOgAjjkjIAAhOIBOAAIAABOg");
	this.shape_40.setTransform(505.6,191.8,0.654,0.654);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#393E70").p("AieNLIE9AAIAA6VIk9AAg");
	this.shape_41.setTransform(215.9,323.8,0.654,0.654);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#393E70").s().p("AieNLIAA6VIE9AAIAAaVg");
	this.shape_42.setTransform(215.9,323.8,0.654,0.654);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6E6E6").s().p("AiJN4IAA7vIETAAIAAbvg");
	this.shape_43.setTransform(215.9,323.8,0.654,0.654);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2E325B").s().p("AgpDDIAAmFIBTAAIAAGFg");
	this.shape_44.setTransform(204.1,357.5,0.654,0.654);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0D0D34").s().p("AgZC3IiRltIFUAAIAAFtg");
	this.shape_45.setTransform(192.8,357.5,0.654,0.654);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2E325B").s().p("AgpDDIAAmFIBTAAIAAGFg");
	this.shape_46.setTransform(204.1,323.8,0.654,0.654);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0D0D34").s().p("AgZC3IiRltIFUAAIAAFtg");
	this.shape_47.setTransform(192.8,323.8,0.654,0.654);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2E325B").s().p("AgpDDIAAmFIBTAAIAAGFg");
	this.shape_48.setTransform(204.1,289.9,0.654,0.654);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D0D34").s().p("AgZC3IiRltIFUAAIAAFtg");
	this.shape_49.setTransform(192.8,289.9,0.654,0.654);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#393E70").p("AjIA/IGRAAIAAh9ImRAAg");
	this.shape_50.setTransform(224.2,363,0.654,0.654);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_51.setTransform(224.2,363,0.654,0.654);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#393E70").p("AjIA/IGRAAIAAh9ImRAAg");
	this.shape_52.setTransform(224.2,288.5,0.654,0.654);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2E315E").s().p("AjIA/IAAh9IGRAAIAAB9g");
	this.shape_53.setTransform(224.2,288.5,0.654,0.654);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#69947B").s().p("AiDCEQg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMQAABNg2A3Qg3A2hNAAQhMAAg3g2g");
	this.shape_54.setTransform(280.7,358.4,0.654,0.654);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D0D34").s().p("AB4AiQg4gYhAAAQhAAAg3AYQg2AYghAnQAFhRA7g4QA8g4BSAAQBSAAA9A4QA7A4AEBRQgggng2gYg");
	this.shape_55.setTransform(280.7,351.3,0.654,0.654);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2E325B").s().p("AiRCSQg9g0AAhUQAAhVA9g8QA8g8BVAAQBWgBA8A9QA9A8AABVQAABUg9A0Qg6AyhYAAQhXAAg6gyg");
	this.shape_56.setTransform(280.6,357.7,0.654,0.654);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDD27D").s().p("AiDCEQg2g3AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMQAABNg2A3Qg3A2hNAAQhMAAg3g2g");
	this.shape_57.setTransform(280.7,324.5,0.654,0.654);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0D0D34").s().p("AB4AiQg4gYhAAAQhAAAg3AYQg2AYghAoQAFhSA7g4QA8g5BSAAQBSAAA9A5QA7A4AEBSQgggog2gYg");
	this.shape_58.setTransform(280.7,317.3,0.654,0.654);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2E325B").s().p("AiRCTQg9g1AAhTQAAhWA9g8QA8g9BVABQBWgBA8A9QA9A8AABWQAABTg9A1Qg6AxhYAAQhXAAg6gxg");
	this.shape_59.setTransform(280.6,323.8,0.654,0.654);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E15D5C").s().p("AiDCDQg2g2AAhNQAAhMA2g3QA3g2BMAAQBNAAA3A2QA2A3AABMQAABNg2A2Qg3A3hNAAQhMAAg3g3g");
	this.shape_60.setTransform(280.7,290.5,0.654,0.654);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0D0D34").s().p("AB4AiQg4gYhAAAQhAAAg3AYQg2AYghAoQAFhSA7g4QA8g5BSAAQBSAAA9A5QA7A4AEBSQgggog2gYg");
	this.shape_61.setTransform(280.7,283.4,0.654,0.654);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2E325B").s().p("AiRCSQg9g0AAhUQAAhUA9g9QA8g8BVgBQBWABA8A8QA9A9AABUQAABUg9A0Qg6AyhYAAQhXAAg6gyg");
	this.shape_62.setTransform(280.6,289.8,0.654,0.654);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#393E70").p("AEaNLIozAAIAA6VIIzAAg");
	this.shape_63.setTransform(280.7,323.8,0.654,0.654);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#393E70").s().p("AkZNLIAA6VIIzAAIAAaVg");
	this.shape_64.setTransform(280.7,323.8,0.654,0.654);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E6E6E6").s().p("AjzN4IAA7vIHnAAIAAbvg");
	this.shape_65.setTransform(280.7,323.8,0.654,0.654);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#393E70").p("ADJA/ImSAAIAAh9IGSAAg");
	this.shape_66.setTransform(264.3,363,0.654,0.654);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2E315E").s().p("AjJA/IAAh9IGSAAIAAB9g");
	this.shape_67.setTransform(264.3,363,0.654,0.654);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#393E70").p("ADJA/ImSAAIAAh9IGSAAg");
	this.shape_68.setTransform(264.3,288.5,0.654,0.654);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2E315E").s().p("AjJA/IAAh9IGSAAIAAB9g");
	this.shape_69.setTransform(264.3,288.5,0.654,0.654);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#393E70").p("ABzL9IjlAAIAA35IDlAAg");
	this.shape_70.setTransform(243.6,325.1,0.654,0.654);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#393E70").s().p("AhyL9IAA35IDlAAIAAX5g");
	this.shape_71.setTransform(243.6,325.1,0.654,0.654);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#393E70").p("AN5ItI7wAAIBSxZIZQAEg");
	this.shape_72.setTransform(524.7,191.8,0.654,0.654);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#21234B").s().p("At4ItIBTxZIZPAEIBPRVg");
	this.shape_73.setTransform(524.7,191.8,0.654,0.654);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#393E70").p("AN5JSI7wAAIAAyjIbwAAg");
	this.shape_74.setTransform(524.7,189.4,0.654,0.654);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#393E70").s().p("At4JSIAAyjIbxAAIAASjg");
	this.shape_75.setTransform(524.7,189.4,0.654,0.654);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#506391").s().p("EgpBAvYMAAAhMeQAAjuBcjZQBZjSCiihQCiijDRhYQDZhcDtAAMA/zAAAIAACMMg/zAAAQjRAAi/BRQi4BOiOCPQiPCOhOC4QhRC/AADSMAAABMeg");
	this.shape_76.setTransform(411.2,354,0.654,0.654);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#506391").s().p("AiqAdIAAg5IFVAAIAAA5g");
	this.shape_77.setTransform(243.7,557.7,0.654,0.654);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#506391").s().p("AhtAmIAAhLIDbAAIAABLg");
	this.shape_78.setTransform(243.7,554.5,0.654,0.654);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9C9EA0").s().p("AkMCkIAAlHIIZAAIAAFHg");
	this.shape_79.setTransform(1209.1,571.6,0.654,0.654);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9C9EA0").s().p("AkNCkIAAlHIIbAAIAAFHg");
	this.shape_80.setTransform(1134.7,571.6,0.654,0.654);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9C9EA0").s().p("AkMCkIAAlHIIaAAIAAFHg");
	this.shape_81.setTransform(1064.2,571.6,0.654,0.654);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F2F2F2").s().p("A5ACkIAAlHMAyBAAAIAAFHg");
	this.shape_82.setTransform(1146.9,571.6,0.654,0.654);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9C9EA0").s().p("AkNCkIAAlHIIbAAIAAFHg");
	this.shape_83.setTransform(272.5,571.6,0.654,0.654);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9C9EA0").s().p("AhoCkIAAlHIDRAAIAAFHg");
	this.shape_84.setTransform(7.2,571.6,0.654,0.654);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9C9EA0").s().p("AkNCkIAAlHIIaAAIAAFHg");
	this.shape_85.setTransform(65,571.6,0.654,0.654);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9C9EA0").s().p("AkNCkIAAlHIIbAAIAAFHg");
	this.shape_86.setTransform(133.5,571.6,0.654,0.654);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9C9EA0").s().p("AkMCkIAAlHIIaAAIAAFHg");
	this.shape_87.setTransform(202,571.6,0.654,0.654);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F2F2F2").s().p("EgjjACkIAAlHMBHHAAAIAAFHg");
	this.shape_88.setTransform(148.7,571.6,0.654,0.654);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3C96BD").s().p("AiITZIAAsFQgzAVg6AAQh+AAhZhYQhYhZAAh9QAAgzAQgwQgrg9AAhJQAAg8AdgzQhKgugrhLQgthNAAhaQAAhvBChZQBAhXBnghQgNgvAAg1QAAibBuhuQBuhvCcAAQCaAABvBvQBuBuAACbIgBASQAxgOAwAAQCRAABmBnQBnBmAACQQAABJgcBBQgbA/gyAxQAcAZAPAgQAPAjAAAmQAAAugWAoQgWAngmAXQA+BTAABoQAACChbBbQhcBciCAAQhmAAhSg8QhQg7ggheQgPAkgUAcIAANqg");
	this.shape_89.setTransform(1202.1,445.5,0.654,0.654);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2E7898").s().p("AggBpIAAjRIBAAAIAADRg");
	this.shape_90.setTransform(114.4,381.3,0.654,0.654);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2E7898").s().p("Ah8A0IAAhnID5AAIAABng");
	this.shape_91.setTransform(114.5,374,0.654,0.654);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2E7898").s().p("AggBpIAAjRIBAAAIAADRg");
	this.shape_92.setTransform(30.8,381.3,0.654,0.654);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2E7898").s().p("Ah8A0IAAhnID5AAIAABng");
	this.shape_93.setTransform(31,374,0.654,0.654);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3C96BD").s().p("AwJICIAAwDMAgSAAAIAAQDg");
	this.shape_94.setTransform(73.1,416.2,0.654,0.654);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3485A8").s().p("AgiPYIAA+vIBFAAIAAevg");
	this.shape_95.setTransform(75,497.8,0.654,0.654);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3C96BD").s().p("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");
	this.shape_96.setTransform(659.1,359.3,0.654,0.654);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C9EBFC").s().p("AvhJUQg3gugdg1Qgfg3ABg6QAAiECOhlQCNhlDXgZIAAgHQAAj9C0i0QC0i0D8AAQDTAAClCBQCjB+A1DGQDjA9CNCgQCRCkAADNQABBLgWBJg");
	this.shape_97.setTransform(1034.4,170.6,0.654,0.654);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C9EBFC").s().p("ABnMWQh6gphkhKQg8BIhfAqQhjArhzAAQi1AAiAhkQiBhlAAiNQAAgnAMgnQhbgzgzhDQg0hGAAhMQABiECOhkQCOhlDXgZIAAgIQAAj+CzizQC0i0D9AAQDSAACmCBQCiB+A2DGQDhA9CPChQCQCjABDNQAAB+g7BzQg4BvhlBWQjZC2kxAAQiLAAiBgqg");
	this.shape_98.setTransform(248.6,224.9,0.654,0.654);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C9EBFC").s().p("AA6G9QhFgXg4gqQghApg2AYQg4AYhAAAQhnAAhIg5QhJg4AAhQQAAgVAHgXQgzgcgdgmQgdgoAAgrQAAhKBRg4QBPg4B5gPIAAgEQAAiPBmhmQBlhlCOAAQB2AABeBJQBbBHAfBvQB/AiBQBbQBSBcAABzQAACRh6BmQh6BnisAAQhOAAhJgYg");
	this.shape_99.setTransform(670.4,201.1,0.654,0.654);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C9EBFC").s().p("ApnEAQAVg9BKgsQBLgsBogNIAAgEQAAiOBmhmQBkhkCPAAQB2AABdBIQBcBHAfBvQBoAbBLBFQBKBFAZBbg");
	this.shape_100.setTransform(55.5,16.7,0.654,0.654);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C9EBFC").s().p("ApnEAQAVg9BLgsQBLgsBngNIAAgEQAAiOBlhlQBmhmCOAAQB2AABeBJQBbBHAeBvQBpAcBLBEQBLBFAYBbg");
	this.shape_101.setTransform(1168.6,20.1,0.654,0.654);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C9EBFC").s().p("ApnD/QAVg8BLgsQBLgtBngMIAAgEQAAiOBmhlQBlhmCOABQB2AABeBIQBbBHAeBvQBpAbBLBFQBLBFAYBag");
	this.shape_102.setTransform(466.5,87.1,0.654,0.654);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6AE74").s().p("AkiKyQiHg5hnhnQhohog5iGQg7iLAAiZQAAiXA7iLQA5iHBohnQBnhoCHg5QCLg7CXAAQCZAACLA7QCGA5BoBoQBnBnA5CHQA7CLAACXQAACZg7CLQg5CGhnBoQhoBniGA5QiLA7iZAAQiXAAiLg7g");
	this.shape_103.setTransform(1090.9,131.7,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1253.2,582.3);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(51.3,72.5,1,1,0,0,0,51.3,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,72.5,1,1,0,0,0,51.3,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,72.5,1,1,0,0,0,51.3,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,72.5,1,1,0,0,0,51.3,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.6,145);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{m1:4,m2:48,m3:89});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_178 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(41).call(this.frame_88).wait(90).call(this.frame_178).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah1C3QgqgigMhCIBFgLQAGAqAbAXQAbAWAvAAQAwAAAYgUQAXgUAAgaQAAgYgVgOQgOgJg5gPQhNgTgdgNQgfgPgPgZQgPgZAAgeQAAgcAMgYQANgXAWgQQAQgMAdgIQAcgJAgAAQAwAAAlAOQAlAOASAYQARAYAHAoIhFAKQgFgggWgSQgXgSgoAAQgwAAgVAQQgUAQAAAVQAAAOAIALQAJALASAIQALAEAyAOQBLAUAeANQAdALARAYQAQAYAAAkQAAAkgUAfQgVAfgmARQgnARgxAAQhQAAgqgig");
	this.shape.setTransform(-336.8,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AizEjIAAo9IBAAAIAAA2QAXgfAcgQQAdgQAnAAQA1AAApAbQApAcAUAyQAVAxAAA8QAABAgXAyQgXAygrAcQgsAbgvAAQgjAAgcgPQgcgPgSgWIAADJgAhRjCQgiAqAABRQAABPAgAmQAhAmAuAAQAtAAAignQAhgoAAhTQAAhPgggnQghgngsAAQgtAAgjApg");
	this.shape_1.setTransform(-377.7,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiZC3QglghAAg0QAAgfAOgZQAOgZAWgPQAXgOAbgIQAWgGApgFQBVgKAogOIAAgSQAAgrgUgSQgbgYg0AAQgxAAgYASQgYARgLAsIhFgJQAJgsAWgbQAWgcAogOQApgPA0AAQA1AAAiANQAgAMAQATQAQATAGAdQADASABAvIAABcQAABiAEAbQAFAZANAYIhKAAQgLgWgCgdQgnAhglAOQgjAOgpAAQhEAAglgigAgRAaQgqAGgTAIQgRAHgLAQQgJAPAAASQAAAcAWATQAUATApAAQAoAAAggSQAfgSAQgfQAKgYABguIAAgZQgmAPhNALg");
	this.shape_2.setTransform(-423.4,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADTDUIAAkFQAAgqgGgSQgHgTgSgLQgSgLgZAAQgrAAgdAdQgdAdAABAIAADwIhGAAIAAkNQAAgugRgYQgRgXgnAAQgeAAgZAPQgZAQgLAeQgMAeAAA5IAADWIhGAAIAAmeIA/AAIAAA6QATgeAhgTQAggSAqAAQAuAAAdATQAdATAMAiQAxhIBPAAQA+AAAhAiQAhAiAABHIAAEcg");
	this.shape_3.setTransform(-478.7,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(179));

	// Layer 12
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.6,265.6,0.162,0.162,0,0,0,51.3,144.7);
	this.instance._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape_4.setTransform(130.4,235.9,0.467,0.467,-41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_5.setTransform(125.6,230.5,0.467,0.467,-41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_6.setTransform(124.2,229.9,0.467,0.467,-41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_7.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_8.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006699").s().p("AgxAGQgDgkANgUQALgUAagBQAwgEAFBHQACAjgLAUQgNAUgZABIgEAAQgtAAgEhCgAgCgwQgUACAEAxQADAvATgBQATgCgEgwQgDgvgRAAIgBAAg");
	this.shape_9.setTransform(121.8,361.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006699").s().p("AgLANQgGgFAAgGQgBgGAFgGQAGgFAHAAQAHAAAFADQAFAFABAHQAAAGgEAFQgFAFgIAAIgBAAQgHAAgEgDg");
	this.shape_10.setTransform(102.8,368.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("AgiAyIgCgZQAIAEAIACQAHABAHAAQAHgBAFgCQAFgDgBgEQAAgDgCgCIgGgDIgGgCIgIgCIgLgFQgFgCgDgDQgEgCgBgFQgCgEgBgGQAAgJADgGQADgGAGgEQAGgFAIgCQAHgCAIgBIANAAIAOACIACAYQgHgDgGgBQgHgBgGAAIgFABIgFACIgDADIgBADQAAADACACIAFADIAFACIAIACIALAEQAFACAEADQAEACACAFQACAEABAGQAAAJgDAHQgDAGgHAFQgGAEgIACQgIADgIABIgHAAQgNAAgLgDg");
	this.shape_11.setTransform(95.5,365.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006699").s().p("Ag+hDIAxgDQAygEADAmQABAHgCAHQgCAGgEAFQgEAFgFAEQgFADgIADIAAAAIAHADIAFAFIAGAGIAGAGIAdAnIgkADIgZgjIgEgHQgCgDgDgBIgEgEIgGgBIgJABIAEA1IgfADgAgPgvIgOABIADAnIANgBQAKAAAFgHQAGgGgBgJQgBgRgSAAIgDAAg");
	this.shape_12.setTransform(85.4,364.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag+hBIAfgCIAGBCIAAAAIADgIIAig9IAlgDIgsBGIA6BFIgoACIgsg5IgEgIIAAAAIAEBEIgfADg");
	this.shape_13.setTransform(124.4,305.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgthDIAfgDIAIBxIAygDIACAZIhRAGg");
	this.shape_14.setTransform(112.6,306.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgbhFIAkgDIA8CHIgiACIgNgeIgwAEIgIAfIgiADgAgJghIgNAvIAjgCIgRgtQgCgGgBgHIgBAAIgBANg");
	this.shape_15.setTransform(100.3,307.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Ahhg8IAigDIAaBaIADAQIABAAQAAgHABgKIAThcIAhgDIAeBbIADAPIAAAAIABgQIANhdIAfgCIgaCNIgjACIgehXIgDgPIgBAAQAAAJgBAGIgQBbIglADg");
	this.shape_16.setTransform(82.3,308.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399FF").s().p("AgdguIAXgBIACAUQACgLAGgGQAGgHAJAAQAGgBADACIACAWQgEgEgIABQgKABgGAJQgFAKABAPIACAvIgWACg");
	this.shape_17.setTransform(169.9,330.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399FF").s().p("AgMAoIgEg4IgRABIgBgRIARgBIgCgYIAVgIIACAeIAYgBIACARIgYACIADAxQABAIADAEQAEAEAHgBQAGAAAEgEIABASQgHAEgKAAIgEABQgYAAgCgag");
	this.shape_18.setTransform(162.2,330.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399FF").s().p("AhNgrIAXgCIABAQQAKgTAUgCQALAAAIAFQAHAFAEAJQAJgVAWgCQAhgCADAoIAEA9IgXABIgEg1QgBgQgEgGQgFgHgLABQgJAAgFAKQgGAJABAMIAEA1IgWACIgEg3QgCgcgTABQgKABgFAJQgFAIABANIAEA2IgXABg");
	this.shape_19.setTransform(149.9,332.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399FF").s().p("AgfA5QgOgRgCgiQgDgkAMgUQALgUAYgBQAugDAFBHQACAjgLATQgNAUgXABIgDAAQgTAAgMgPgAgCg1QgaACAEA3QAEA0AYgCQAYgBgEg1QgDg1gWAAIgBAAg");
	this.shape_20.setTransform(129.8,331.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399FF").s().p("AgfA5QgOgRgCgiQgDgkAMgUQALgUAYgBQAugDAFBHQACAjgLATQgNAUgXABIgDAAQgTAAgMgPgAgCg1QgaACAEA3QAEA0AYgCQAYgBgEg1QgDg1gWAAIgBAAg");
	this.shape_21.setTransform(118.7,332.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3399FF").s().p("AgmBDIgCgWQAPAKARgBQANgBAIgHQAIgGgBgLQgCgYgjACIgLABIgBgRIAKgBQAggCgCgXQgBgUgZACQgOABgMALIgBgUQAOgJATgCQASgBALAJQANAIABAPQACAbgcAKIAAAAQAPABAJAIQAKAIABAOQABATgNAMQgOAMgWACIgHABQgPAAgLgGg");
	this.shape_22.setTransform(107.6,333.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399FF").s().p("AgagGIA0gDIABAQIg0ADg");
	this.shape_23.setTransform(92.7,336);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399FF").s().p("AgvgtIAXgCIABARIABAAQAKgUATgCQARgBAJAKQAJAKABAUIAFA8IgXACIgDg3QgDgcgTABQgJABgHAIQgGAIABAMIAEA4IgXABg");
	this.shape_24.setTransform(77.5,337.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399FF").s().p("AgMgZIAWgBIAHBiIgWACgAgLgyQgFgDAAgGQAAgFADgEQAEgEAGgBQAFAAAEAEQAEADAAAFQABAGgEAEQgEAEgFAAIgBAAQgFAAgDgDg");
	this.shape_25.setTransform(68.8,335.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3399FF").s().p("AhNgrIAXgCIABAQQAKgTAUgCQALAAAIAFQAHAFAEAJQAJgVAWgCQAhgCADAoIAEA9IgXABIgEg1QgBgQgEgGQgFgHgLABQgJAAgFAKQgGAJABAMIAEA1IgWACIgEg3QgCgcgTABQgKABgFAJQgFAIABANIAEA2IgXABg");
	this.shape_26.setTransform(57.7,338.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399FF").s().p("AgqA+QAAgHACgGQABgGACgFQADgGAEgEIAJgKIAJgIIAJgJIAHgHIAFgIQADgEABgFQABgEAAgFQgBgGgCgEQgCgEgDgCIgHgEQgDgBgGAAQgIABgJAFQgIAEgIAJIgCgWIAIgGIAJgFIAKgDQAFgBAGAAQAJgBAHACQAIACAGAEQAGAFADAHQAEAHAAAJQABAJgCAGQgBAHgEAGIgIALIgMAMIgKAJIgJAKQgFAEgBAFQgDAEAAAEIAAAAIA+gEIABATIhWAHg");
	this.shape_27.setTransform(37.7,338.3);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.5,193.6,1,1,0,0,0,51.3,72.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006699").s().p("AgxALQgGgjAKgVQALgVAZgFQAvgIAMBGQAGAigKAVQgJAVgZAEIgLABQgnAAgLg9gAgHgvQgTADAIAxQAJAuASgDQATgEgJgvQgIgsgPAAIgDAAg");
	this.shape_28.setTransform(567.2,207.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006699").s().p("AgfBHIgFgbQAQAIASgDQALgCAFgHQAGgGgCgJQgBgJgJgDQgIgEgOADIgNACIgEgXIAMgCQAagFgDgRQgDgRgUAEQgOACgLALIgFgZQAOgJATgEQAUgDAOAHQANAIADAPQAEAbgaALIAAABQAPgBAKAGQAKAIACAMQAEAUgMANQgMAOgZAFIgRABQgKAAgIgCg");
	this.shape_29.setTransform(555.7,210.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006699").s().p("AgKAOQgFgEgCgHQgBgGAEgFQAFgGAIgBQAGgBAGADQAGAEABAHQABAGgEAFQgEAGgIABIgDAAQgFAAgFgCg");
	this.shape_30.setTransform(543.1,217.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006699").s().p("AgcA1IgFgYQAJADAIAAQAIABAGgBQAHgBAEgDQAFgDgBgFQgBgDgCgBIgGgDIgHgBIgIgBIgLgDQgFgCgEgDQgDgCgDgEIgDgKQgBgIACgHQACgGAGgFQAFgFAIgDQAHgDAIgCQAGgBAHAAIAOAAIAEAYQgHgDgHAAQgGAAgHABIgEABIgFADIgDADIAAADQABADACACIAFACIAFACIAIABQAGABAGACIAJAEQAEACADAEQACAEABAGQACAJgDAHQgCAHgGAFQgGAFgIADQgHADgJACQgIABgJAAIgNgBg");
	this.shape_31.setTransform(535.6,215.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006699").s().p("AhFg/IAxgIQAxgJAHAlQABAIgBAGQgBAHgEAFQgCAGgGAFQgEAEgIACIAAABIAHACIAHAEIAGAFIAGAGIAhAkIgjAGIgdgfIgFgHIgFgEIgFgDIgGAAIgIABIAJA1IgeAFgAgUgvIgNACIAGAmIANgCQAKgCAFgGQAEgHgBgJQgCgPgOAAIgIABg");
	this.shape_32.setTransform(525.4,215.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399FF").s().p("AhRgkIAWgEIADAPQAIgUAUgDQAKgCAJAFQAJAEADAIQAHgWAWgEQAggGAIApIAKA7IgWAEIgJg0QgDgQgGgGQgFgGgKACQgJABgFAKQgEAKACAMIAJA0IgVAEIgKg2QgFgcgTAEQgJABgFAKQgEAJACAMIAKA1IgXAEg");
	this.shape_33.setTransform(600.2,174);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399FF").s().p("Ag4hGIAWgEIAQBbIAAAAIAbgyIAbgEIggA1IA2ArIgdAFIgugoIAAAAIAIAvIgWAEg");
	this.shape_34.setTransform(586.7,174.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399FF").s().p("AgcBJIgEgVQAPAGAOgCQANgDAHgIQAHgJgCgMQgCgMgJgFQgKgFgPADIgXAFIgIhIIBDgMIADATIgwAJIAEAiIAMgCQAVgEAOAJQAOAJADATQAEAVgMAOQgLAPgYAEQgJACgIAAQgIAAgFgCg");
	this.shape_35.setTransform(570.1,177.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3399FF").s().p("AgFgoIgMAKIgPAIIgDgTIAJgHIAKgGIAJgHIAIgJIAKgCIAZCMIgWAEg");
	this.shape_36.setTransform(560.1,178.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399FF").s().p("AgbgDIA0gJIADAQIg0AJg");
	this.shape_37.setTransform(547.5,182.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3399FF").s().p("Ag0gqIAXgEIADARIAAAAQAIgVATgEQARgDAKAJQALAJADAUIALA7IgWAEIgLg2QgEgcgSAEQgLABgGAJQgFAJADAMIAKA3IgXAEg");
	this.shape_38.setTransform(532.5,185.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399FF").s().p("AgPgYIAVgEIASBhIgXAEgAgRgxQgFgDgBgFQgBgFADgFQAEgEAFgBQAGgBAEADQAEADABAFQABAFgDAFQgDAEgFABIgDABQgEAAgDgDg");
	this.shape_39.setTransform(523.7,185.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3399FF").s().p("AhRgkIAWgEIADAPQAIgUAUgDQAKgCAJAFQAJAEADAIQAHgWAWgEQAggGAIApIAKA7IgWAEIgJg0QgDgQgGgGQgFgGgKACQgJABgFAKQgEAKACAMIAJA0IgVAEIgKg2QgFgcgTAEQgJABgFAKQgEAJACAMIAKA1IgXAEg");
	this.shape_40.setTransform(512.9,189.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3399FF").s().p("AgZA8QgPgQgGghQgGgjAJgVQAJgVAYgEQAtgIAMBGQAGAigKAVQgJAVgXAEIgJAAQgPAAgMgMgAgIg1QgZAFAKA2QAJA0AYgEQAYgFgKgzQgJgzgUAAIgDAAg");
	this.shape_41.setTransform(492.9,190.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3399FF").s().p("AgkBAQAAgHAAgGQABgGACgGQACgGAEgEIAHgLIAJgKIAIgIIAFgJIAGgIIACgJQABgFgBgFQgBgFgDgEQgCgEgEgCQgCgCgFgBQgEgBgFABQgJACgIAFQgHAGgHAJIgEgVIAHgHQAEgEAFgCIAJgEIALgDQAKgBAGABQAIABAHAEQAGADAEAHQAEAHACAJQABAIAAAIIgEANQgDAGgFAGQgEAGgGAGIgKALIgHAKIgFAJQgCAFABAEIAAABIA9gLIADATIhWAPg");
	this.shape_42.setTransform(482.1,193);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgfAtQgRgLgEgYQgFgYAMgQQAMgRAZgEQAYgEARALQAQALAEAXQAEAYgMAQQgMARgZAFIgMABQgQAAgLgIgAgDgbQgLABgFAJQgEAIACANQAFAcAWgEQAVgEgFgcQgEgYgRAAIgEABg");
	this.shape_43.setTransform(618,124.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgigqIAfgFIADASIAAAAQAEgVASgEIAHAAIAGAcQgHgCgHABQgJACgFAJQgFAIADALIAIAvIgdAFg");
	this.shape_44.setTransform(608,126);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgOAlIgIgsIgQADIgEgWIAQgDIgEgVIAdgPIAEAeIAWgDIAFAWIgXAEIAHAmQADAQANgCQAEgBAFgDIAEAWQgHAFgNACIgJABQgXAAgFgdg");
	this.shape_45.setTransform(600.3,126);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgbAtQgPgLgEgXQgEgYALgRQAMgRAUgEQAVgDAOAKQAOALAEAWIADAMIhAALQAFAVAZgEQAQgDALgKIAEAWQgMAKgWAEIgMABQgPAAgMgIgAgDgeQgHABgEAHQgFAHABAKIAjgHQgEgTgNAAIgDABg");
	this.shape_46.setTransform(591.3,129.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("Ahag2IAugIIAqBMQAFAJADAKIAAAAIACgVIAOhWIAsgIIAZCJIgfAGIgPhSQgCgNgBgRIgBABIgBASIgQBjIgZAFIgxhXIgHgSIgBAAIAHAjIAOBMIgcAFg");
	this.shape_47.setTransform(576.1,129.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgbgFIAzgJIAEAUIgzAJg");
	this.shape_48.setTransform(557.6,134.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgbAtQgPgLgEgXQgEgYALgRQAMgRAUgEQAVgDAOAKQAOALAEAWIADAMIhAALQAFAVAZgEQAQgDALgKIAEAWQgMAKgWAEIgMABQgPAAgMgIgAgDgeQgHABgEAHQgFAHABAKIAjgHQgEgTgNAAIgDABg");
	this.shape_49.setTransform(543,137.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("Ag3gpIAegFIADAPIAAAAQAIgUATgEQAhgFAIAoIAKA8IgeAFIgKg1QgEgXgPACQgIACgEAHQgEAHABAJIAKA3IgeAFg");
	this.shape_50.setTransform(531.7,139.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgTgXIAdgFIASBhIgdAFgAgUgrQgFgEgCgHQgBgHAEgFQAFgFAHgCQAIgBAFAEQAFADABAHQACAHgEAFQgEAFgHACIgFAAQgEAAgFgCg");
	this.shape_51.setTransform(522.4,139);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgbhFIAdgFIAaCQIgdAGg");
	this.shape_52.setTransform(516.8,139.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AhMggIAfgGIAZA9IAEAKIAAAAQgBgGABgFIAFhCIAcgFIAbA9IADALIABAAIgBgLIABhDIAdgEIgLBmIggAGIgYg2IgFgNIAAAAIAAANIgFA8IgfAFg");
	this.shape_53.setTransform(500.3,144.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgfAtQgRgLgEgYQgFgYAMgQQANgRAYgEQAYgEARALQAQALAEAXQAEAYgMAQQgLARgaAFIgMABQgQAAgLgIgAgDgbQgMABgEAJQgFAIADANQAFAcAVgEQAXgEgGgcQgEgYgRAAIgEABg");
	this.shape_54.setTransform(487.3,147.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgbhFIAdgGIAaCRIgdAGg");
	this.shape_55.setTransform(478,146.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgbhGIAdgEIAaCRIgdAEg");
	this.shape_56.setTransform(472.4,147.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgbAtQgPgLgEgXQgEgYALgRQAMgRAUgEQAVgDAOAKQAOALAEAWIADAMIhAALQAFAVAZgEQAQgDALgKIAEAWQgMAKgWAEIgMABQgPAAgMgIgAgDgeQgHABgEAHQgFAHABAKIAjgHQgEgTgNAAIgDABg");
	this.shape_57.setTransform(464.8,151.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAAAbIg7hRIAkgGIAeAwIAFALIABgBIABgLIANg4IAhgGIgdBgIAJAxIgfAGg");
	this.shape_58.setTransform(451.8,151.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape_59.setTransform(130.4,235.9,0.467,0.467,-41.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_60.setTransform(125.6,230.5,0.467,0.467,-41.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_61.setTransform(124.2,229.9,0.467,0.467,-41.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_62.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_63.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006699").s().p("AgPBOIgJgZQAQADAPgFQALgEAFgIQAEgIgDgJQgHgUgbAKIgXAKIgVhKIBFgZIAIAYIgvARIAIAbIAMgGQATgHAQAHQAPAGAGARQAIAUgKASQgJASgXAIQgRAGgMAAIgEAAg");
	this.shape_64.setTransform(1116.5,125.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#006699").s().p("AgQgcIgDAGIgHAGIgGAFIgIAEIgIgYQAKgIAJgIQAHgJAGgJIARgHIAwCGIgdALg");
	this.shape_65.setTransform(1105.6,128.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#006699").s().p("AgIAPQgGgDgCgGQgDgGAEgGQADgGAHgCQAHgDAGADQAGACADAHQACAFgDAGQgDAGgIADIgGACIgHgCg");
	this.shape_66.setTransform(1094.7,139.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#006699").s().p("AgcAhQAJACAIgBQAIAAAFgCQAIgDAEgEQADgDgBgFQgBgDgDAAIgGgCIgHAAIgIAAIgMgBIgJgDQgEgCgDgDQgDgDgCgGQgDgIACgHQABgHAFgFQAEgGAHgFQAHgEAIgDIAMgEQAGgBAHAAIAIAXQgHgCgGAAIgMAEIgGACIgDADIgDAEIABADQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAFACIAGABIAHgBIANABQAFAAAFACQAEACADAEQAEAEACAFQADAIgCAHQgBAIgFAFQgFAGgHAEQgHAGgIACQgPAGgPAAg");
	this.shape_67.setTransform(1086.8,138.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#006699").s().p("AhOg2IAvgQQAvgSANAkQACAHAAAHQABAGgDAHIgGALQgFAGgFADIAAABIAGABIAHADIAIADIAGAFIAnAeIgiAMIghgbIgHgFIgFgEIgFgBQgDgBgDABIgIADIASAzIgeAKgAgbgvIgNAFIANAlIANgFQAJgDAEgIQADgHgCgJQgEgMgMAAQgFAAgGACg");
	this.shape_68.setTransform(1076.7,140.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399FF").s().p("AhWgYIAVgHIAFAPIABAAQAEgWAUgHQAJgDAKADQAIADAGAHQADgXAUgHQAfgMAOAnIAVA5IgVAIIgSgzQgGgOgHgFQgGgGgKAEQgIADgDAKQgDALAFALIASAyIgWAIIgSg0QgJgbgTAHQgIADgDAKQgDAKAFAMIARAzIgUAHg");
	this.shape_69.setTransform(1136.8,88.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3399FF").s().p("AhDhBIAWgIIAfBYIAAAAIATg2IAagKIgXA6IA8AiIgbAJIg0gfIAAAAIAPAtIgVAHg");
	this.shape_70.setTransform(1123.4,91.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3399FF").s().p("AgNBNIgIgUQAQAEANgFQANgFAGgJQAGgKgEgMQgEgLgLgDQgLgDgOAFIgVAJIgUhGIBAgYIAGATIguARIAKAiIALgFQAUgIAPAHQAPAHAHARQAHAUgJAQQgIARgXAIQgPAGgKAAIgFgBg");
	this.shape_71.setTransform(1107.3,96.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3399FF").s().p("AgbABIAxgRIAGAQIgyARg");
	this.shape_72.setTransform(1093.8,103.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3399FF").s().p("Ag5giIAVgIIAFAQIAAgBQAFgVATgHQAPgGALAHQAMAHAHATIAUA5IgVAHIgTg0QgJgagSAHQgJADgFAKQgDAJAEAMIAUA0IgWAIg");
	this.shape_73.setTransform(1079.6,109);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399FF").s().p("AgTgWIAUgHIAhBdIgVAHgAgaguQgFgCgCgFQgCgFADgFQACgFAFgCQAGgCAFADQAFACACAFQABAFgCAFQgDAEgFACIgFABIgFgBg");
	this.shape_74.setTransform(1070.9,109.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3399FF").s().p("AhWgYIAVgHIAFAPIAAAAQAFgWAUgHQAJgDAKADQAIADAGAHQADgXAUgHQAggMANAnIAVA5IgVAIIgTgzQgEgOgHgFQgHgGgKAEQgIADgDAKQgDALAFALIASAyIgWAIIgSg0QgKgbgSAHQgIADgDAKQgDAKAEAMIASAzIgUAHg");
	this.shape_75.setTransform(1060.9,115.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3399FF").s().p("AgNBNIgIgUQAQAEANgFQANgFAGgJQAGgKgEgMQgEgLgLgDQgLgDgOAFIgVAJIgUhGIBAgYIAGATIguARIAKAiIALgFQAUgIAPAHQAPAHAHARQAHAUgJAQQgIARgXAIQgPAGgKAAIgFgBg");
	this.shape_76.setTransform(1041.2,120.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3399FF").s().p("AgOgkIgKALIgOALIgGgSIAJgIIAIgIIAIgJIAHgKIAJgDIAwCGIgWAHg");
	this.shape_77.setTransform(1032.1,123);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgUA5IgIgYIARACQAIgBAFgCQAIgDAEgDQADgEgBgEQgBgDgDgBIgGgCIgHAAIgIAAIgLgBIgKgDIgHgGQgDgDgCgGQgCgHABgIQACgGAFgGQAEgGAHgEQAHgEAIgDIALgDQAHgCAHAAIAIAXQgGgCgIABIgMADIgEACIgEADIgDAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABADADABIAFACIAGAAIAHAAIAMABIAKADIAIAFQADAEACAFQADAJgCAHQgBAHgFAGQgFAGgHAEQgHAFgJADQgNAFgOAAIgDAAg");
	this.shape_78.setTransform(1098.7,35.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgpAdIgUg4IAdgKIATA1QAHAUAPgFQAHgDAEgHQACgHgDgKIgTg1IAdgKIAhBeIgdAKIgFgPIgBAAQgEAVgTAGQgGADgGAAQgWAAgLgfg");
	this.shape_79.setTransform(1088.7,38.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AhCg2IAxgRQAVgHAPADQAPAFAFAOQADALgFALQgEAKgKAHIAAABQAPgEAMAGQAKAGAFAMQAGASgJAPQgKAPgWAIIgyARgAAGAEIgQAGIALAjIAQgGQALgDAEgHQAEgHgDgIQgDgIgHgDIgHgBQgFAAgFACgAgRguIgLADIALAgIANgFQAIgDAEgGQAEgGgDgIQgEgKgJAAQgGAAgHADg");
	this.shape_80.setTransform(1076.2,41.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgYBEQgYgMgKgeQgLgeANgbQANgaAfgLQATgGAOAAIAKAdQgQgEgQAGQgTAGgHAQQgHAQAHATQAGATAPAHQAOAIASgGQARgGAMgNIAJAbQgMAMgXAIQgOAFgMAAQgOAAgNgHg");
	this.shape_81.setTransform(1060,46.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgKgdIglANIgJgZIBogkIAJAZIgmANIAlBrIgeAKg");
	this.shape_82.setTransform(1045.9,50.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AhHg2IAvgQQBFgYAXBAQAKAegNAZQgNAaggALIguAQgAgSgtIgPAFIAdBTIAOgFQATgGAHgQQAIgPgHgTQgHgTgPgIQgHgDgIAAQgIAAgKADg");
	this.shape_83.setTransform(1034.7,56);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#56DE83").s().p("Ak+BMID4i9IGFDjg");
	this.shape_84.setTransform(130.4,235.9,0.467,0.467,-41.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#63FF96").s().p("Ak+DmID4i+IAtk0IFYIZg");
	this.shape_85.setTransform(125.6,230.5,0.467,0.467,-41.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#126B2E").s().p("AmPEgIE3juIA5mCIGvKhg");
	this.shape_86.setTransform(124.2,229.9,0.467,0.467,-41.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.2,-0.2,0,0.2,-0.2,29.1).s().p("AjNDOQhVhWAAh4QAAh4BVhVQBVhVB4AAQB4AABWBVQBVBVAAB4QAAB5hVBVQhVBVh5AAQh4AAhVhVg");
	this.shape_87.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#000014","#020315","#090B18","#15191D","#252E25","#3B482E","#56683A","#758F48","#99BA58","#AACF5F"],[0.435,0.569,0.651,0.722,0.78,0.835,0.886,0.937,0.98,1],0.4,-0.3,0,0.4,-0.3,47.1).s().p("AlMFNQiKiKAAjDQAAjBCKiKQCLiLDBAAQDDAACKCLQCJCKABDBQgBDDiJCKQiKCJjDABQjBgBiLiJg");
	this.shape_88.setTransform(127.3,235.1,0.468,0.468,-15.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#006699").s().p("AgyACQAAgjAOgTQANgUAZABQAxAAAABHQAAAigNAUQgOASgYAAQgyABAAhHgAgTABQABAwASAAQATAAABgxQAAgwgTAAQgUAAAAAxg");
	this.shape_89.setTransform(1307.7,53.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#006699").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgEAHAAQAIAAAFAFQAFAEAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_90.setTransform(1288.3,58.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#006699").s().p("AglAvIAAgYQAHAEAIACQAHADAHAAQAIAAAEgDQAFgCAAgEQAAgEgCgCIgGgDIgGgDIgIgCIgKgFQgFgCgDgDQgDgEgCgEQgBgFAAgFQAAgJADgGQAEgGAGgEQAGgEAIgBQAIgDAHAAIAOABIANAEIAAAXQgFgDgHgBQgHgCgGAAIgGAAIgEACIgDACQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAEAEIAGADIAGACIAMAFQAFACADACQAEAEACAEQABAFAAAGQAAAKgDAGQgEAGgHAEQgGAEgIACQgJABgIAAQgQABgOgGg");
	this.shape_91.setTransform(1281.2,55.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#006699").s().p("AAXBGIgWgkIgEgHIgEgGIgFgDIgGgBIgIAAIAAA1IggAAIAAiLIAyAAQAyAAAAAmQAAAHgCAHQgCAGgEAFQgEAFgGACQgGAEgHACIAAABIAGACIAGAGIAFAGIAEAGIAbAqgAgagHIANAAQALABAFgHQAGgFAAgJQAAgSgVAAIgOAAg");
	this.shape_92.setTransform(1271.2,53.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AASBGIgng9IgEgIIgBAAIAABFIgfAAIAAiLIAfAAIAABCIABAAIAEgHIAlg7IAmAAIgxBDIA1BIg");
	this.shape_93.setTransform(1315.4,-2.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgpBGIAAiLIAgAAIAAByIAzAAIAAAZg");
	this.shape_94.setTransform(1303.6,-2.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAjBGIgKgfIgxAAIgKAfIgiAAIAziLIAkAAIAyCLgAgCggIgPAuIAiAAIgPguIgCgMIAAAAIgCAMg");
	this.shape_95.setTransform(1290.8,-2.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAbBGIgYhZQgCgHAAgIIgBAPIgYBZIglAAIgkiLIAiAAIAUBcIABAQIABAAIACgQIAahcIAhAAIAXBdIACAPIABAAIABgQIAUhcIAgAAIgmCLg");
	this.shape_96.setTransform(1273.7,-2.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3399FF").s().p("AgcAzIAAhjIAXAAIAAAUIAAAAQAEgKAFgGQAIgGAIAAQAGAAADACIAAAVQgEgDgHAAQgLAAgGAJQgGAJAAAPIAAAwg");
	this.shape_97.setTransform(1402,25.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3399FF").s().p("AgOAmIAAg3IgRAAIAAgSIARAAIAAgXIAWgHIAAAeIAYAAIAAASIgYAAIAAAxQAAAIADAEQADAEAIAAQAGAAAEgDIAAASQgHADgLAAQgcAAAAgcg");
	this.shape_98.setTransform(1393.9,24.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_99.setTransform(1381.6,25.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3399FF").s().p("AgjA3QgMgTAAghQAAgkANgTQAMgUAYAAQAuAAAABIQAAAjgNASQgNAUgXAAQgWAAgMgSgAgXACQgBA1AYAAQAZAAAAg2QAAg3gZAAQgXAAAAA4g");
	this.shape_100.setTransform(1361.6,23.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3399FF").s().p("AgpBCIAAgWQAPAJAOAAQANAAAIgHQAJgIAAgMQAAgMgJgGQgIgHgQAAIgXABIAFhIIBEAAIAAATIgxAAIgDAjIANAAQAVAAAMALQANALAAATQgBAVgOANQgOAMgXAAQgUAAgLgFg");
	this.shape_101.setTransform(1350.6,24);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3399FF").s().p("AgrBHIAAgLQAAgGACgGIAFgLIAHgKIAJgIIAKgJIAJgIIAIgGIAGgIIAEgIQACgEAAgFQAAgGgCgEQgBgEgDgDQgDgDgFgBQgEgCgEAAQgIAAgKAEQgJAEgIAIIAAgVQAFgEAEgCIAJgEIAKgCIAKgBQAJAAAIACQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgCAHIgGAMQgEAFgGAFIgMALIgLAJIgJAJIgHAIQgDAEAAAEIAAABIA+AAIAAATg");
	this.shape_102.setTransform(1339.2,23.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3399FF").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_103.setTransform(1324.4,25.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3399FF").s().p("AAWAzIAAg3QAAgcgUAAQgJAAgHAIQgHAHAAAMIAAA4IgXAAIAAhjIAXAAIAAARIABAAQALgTAUAAQAQAAAJALQAJAKAAAUIAAA8g");
	this.shape_104.setTransform(1309.1,25.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3399FF").s().p("AgLBKIAAhjIAWAAIAABjgAgJgyQgEgEAAgFQAAgGAEgDQAEgEAFgBQAGABAEAEQAEADAAAGQAAAFgEAEQgEAEgGgBQgFABgEgEg");
	this.shape_105.setTransform(1300.6,23.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3399FF").s().p("AA0AzIAAg1QAAgQgEgHQgFgHgKAAQgJAAgGAJQgGAJAAAMIAAA1IgWAAIAAg3QAAgcgUAAQgJAAgGAIQgGAJAAANIAAA1IgXAAIAAhjIAXAAIAAAQIABAAQAKgSAVAAQAKAAAIAGQAHAFADAKQALgVAWAAQAhAAAAApIAAA8g");
	this.shape_106.setTransform(1289.2,25.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3399FF").s().p("AgrBHIAAgLQAAgGACgGIAFgLIAHgKIAJgIIAKgJIAJgIIAIgGIAGgIIAEgIQACgEAAgFQAAgGgCgEQgCgEgCgDQgDgDgFgBQgEgCgEAAQgIAAgKAEQgJAEgIAIIAAgVQAEgEAFgCIAJgEIAKgCIAKgBQAJAAAIACQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgCAHIgGAMQgEAFgGAFIgMALIgLAJIgJAJIgHAIQgDAEAAAEIAAABIA+AAIAAATg");
	this.shape_107.setTransform(1269,23.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AiDCvIAAldICAAAQA5AAAgAWQAfAVABAnQgBAcgSAVQgUAWgeAIIAAABQAmAFAXAVQAWAXgBAiQAAAvgiAdQgjAcg7AAgAgzB1IAqAAQAbAAAPgNQAPgNAAgVQABgVgQgMQgPgMgaAAIgrAAgAgzghIAiAAQAYAAAOgLQAOgMAAgWQAAgmg5AAIgdAAg");
	this.shape_108.setTransform(1249,-118.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFFFFF","#FDFDFD","#F6F6F7","#EBEBEC","#DADADD","#C4C4C8","#A8A8AF","#888891","#62626F","#373747","#09091D","#000014"],[0.788,0.867,0.894,0.918,0.933,0.945,0.961,0.969,0.98,0.988,1,1],0,0,0,0,0,35.7).s().p("AiKFJQhAgbgxgyQgxgxgchAQgchDAAhIQAAhHAchDQAchAAxgxQAxgyBAgbQBCgcBIAAQBJAABCAcQBAAbAxAyQAyAxAbBAQAcBDAABHQAABIgcBDQgbBAgyAxQgxAyhAAbQhCAchJAAQhIAAhCgcg");
	this.shape_109.setTransform(1246.1,-117.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3EA1C3").s().p("ACwKBQhghrhQhvIgZgmQheiIg5h/QhQi0AAiZQABhoAnhfQAohcBHhIQBGhHBcgnQBfgoBoAAIAACMQhIAAhCAcQhBAbgxAyQgwAxgbBAQgdBDAABIQAABIAdBCQAbBBAwAwQAxAxBBAbQBCAdBIAAIAAJUQgggegwg2g");
	this.shape_110.setTransform(1220.5,-94.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#45B4DA").s().p("AkACBQBJAABCgdQBAgbAxgxQAxgwAbhBQAchCAAhIQAAhIgchDQgbhAgxgxQgxgyhAgbQhCgchJAAIAAiMQBpAABfAoQBbAnBHBHQBHBIAnBcQAoBfAABoQABCWhRC1Qg5B/heCKIgZAkQhPBwhgBrQgeAigdAdIgWAWg");
	this.shape_111.setTransform(1271.8,-94.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},89).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_7,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_6,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:124.2,y:229.9}},{t:this.shape_5,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:125.6,y:230.5}},{t:this.shape_4,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:130.4,y:235.9}}]},3).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_7,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_6,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:124.2,y:229.9}},{t:this.shape_5,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:125.6,y:230.5}},{t:this.shape_4,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:130.4,y:235.9}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},10).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_63,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_62,p:{rotation:-15.5,x:127.3,y:235.1}},{t:this.shape_61,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:124.2,y:229.9}},{t:this.shape_60,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:125.6,y:230.5}},{t:this.shape_59,p:{scaleX:0.467,scaleY:0.467,rotation:-41.5,x:130.4,y:235.9}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_8,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_7,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_6,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:916.6,y:86.3}},{t:this.shape_5,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:917.7,y:87.3}},{t:this.shape_4,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:920.3,y:94}}]},6).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_63,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_62,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_61,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:916.6,y:86.3}},{t:this.shape_60,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:917.7,y:87.3}},{t:this.shape_59,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:920.3,y:94}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_8,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_7,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_6,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1180.2,y:-4.3}},{t:this.shape_5,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1181.4,y:-3.4}},{t:this.shape_4,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1184.3,y:3.2}}]},4).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_63,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_62,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_61,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:916.6,y:86.3}},{t:this.shape_60,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:917.7,y:87.3}},{t:this.shape_59,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:920.3,y:94}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_8,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_7,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_6,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1180.2,y:-4.3}},{t:this.shape_5,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1181.4,y:-3.4}},{t:this.shape_4,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1184.3,y:3.2}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},4).to({state:[{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_63,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_62,p:{rotation:-21.2,x:920.2,y:91}},{t:this.shape_61,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:916.6,y:86.3}},{t:this.shape_60,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:917.7,y:87.3}},{t:this.shape_59,p:{scaleX:0.468,scaleY:0.468,rotation:-21.2,x:920.3,y:94}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_8,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_7,p:{rotation:-23.9,x:1184,y:0.2}},{t:this.shape_6,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1180.2,y:-4.3}},{t:this.shape_5,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1181.4,y:-3.4}},{t:this.shape_4,p:{scaleX:0.468,scaleY:0.468,rotation:-23.9,x:1184.3,y:3.2}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({regY:144.5,scaleX:1,scaleY:1,x:58.5},8,cjs.Ease.get(1)).to({_off:true},3).wait(79));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_98 = new cjs.Graphics().p("AiWDuQhIgtgihKQgkhNAMhRQAMhQA3hBQA4hABNgYQBOgXBRAYQBSAYA1A9QA2A9AMBUQANBTgiBKQghBKhIAvQhHAuhRABIgCAAQhPAAhHgug");
	var mask_graphics_99 = new cjs.Graphics().p("AAjGpQhNgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihIQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBSAXA1A9QA1A9ANBVQAHAugHArQASgBASABQBOAEA/ApQBNAzAhBXQAfBYgZBZQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_100 = new cjs.Graphics().p("AiBG9QhOgjgvhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihIQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBASABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQANBUgiBKQghBJhIAuQhHAvhRAAQggABgfgIQAdBVgZBXQgVBHgzA0Qg9A8hYAQQgcAFgaAAQg6AAg2gXg");
	var mask_graphics_101 = new cjs.Graphics().p("AldI6QhOgigvhNQgvhMAEhVQAAgRADgRIgSABQhRAAhIguQhIgtgihKQgkhNAMhRQAMhQA3hBQA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQAHAugHAqQASgBATABQAXACAWAEQgXg/AKhFQAMhQA3hBQA4hABMgYQBOgXBSAYQAlALAfASQgCg/AZg5QAVgyAognQAognAygWQA3gXA+ABQA+AAA3AZQA3AYApAuQApAuATA6QASA5gHA9QgHA+geAzQggA2g2AkQg1Akg+AKQhMANhLgcQgbgKgXgOQADBBgbA6QghBKhIAvQhHAuhRABQghAAgegHQAdBVgZBXQgVBHgyAzQg9A8hYARQgcAFgbAAQg7AAg1gYg");
	var mask_graphics_102 = new cjs.Graphics().p("ApSJdQhOgjgvhMQgvhNAEhVQAAgRADgQIgSAAQhRABhIguQhIgugihJQgkhNAMhRQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAtgHArQASgBATABQAXABAWAFQgXhBAKhDQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAfASQgCg/AYg6QAVgxAogoQAognAygVQA3gYA+ABQA+ABA3AYQA3AZApAuIAPASQARgsAignQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgIAWgMAVQggA1g2AlQg1Akg+AJQhMANhLgcQgbgKgXgOQADBBgbA7QghBKhIAuQhGAvhRAAQggABgfgIQAdBVgZBXQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg7AAg1gXg");
	var mask_graphics_103 = new cjs.Graphics().p("AtMKKQhOgjgvhMQgvhNAEhVQAAgRADgQIgSAAQhRABhIguQhIgugihJQgkhNAMhSQAMhQA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBUQAHAugHArQASgBATABQAXABAWAFQgXhBAKhDQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAfASQgCg/AZg6QAVgxAogoQAognAygVQA3gYA9ABQA+ABA3AYQA3AZApAuIAPASQARgsAignQA3hBBOgXQBOgXBRAYQBTAXA1A9IANARQARg4AqgwQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgfgoQgFATgIASQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgIAWgMAVQggA1g2AkQg1Akg+AKQhMANhKgdQgbgKgXgOQADBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBVgZBXQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg7AAg1gXg");
	var mask_graphics_104 = new cjs.Graphics().p("AxLKyQhOgjgvhMQgvhNAEhVQAAgRADgQIgSAAQhRABhIguQhIgugihJQgkhNAMhSQAMhQA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBUQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhQA3hAQA4hBBNgXQBOgXBSAYQAlALAfASQgCg/AZg6QAVgxAogoQAognAygVQA3gYA+ABQA+ABA3AYQA3AZApAuIAOASQARgsAignQA3hBBOgXQBOgXBRAYQBTAXA1A9IANARQARg4AqgwQA3hBBOgXQBOgXBRAYQBTAXA1A9QAMAPALAPQAQg6ArgxQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQg1ghgggxQgGAUgIAUQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgfgoQgFATgIASQgiBKhHAuQhIAuhRAAQhRABhIgtQgsgcgegmQgIAWgMAVQgfA0g2AlQg1Akg+AKQhMANhLgdQgbgKgXgOQADBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBVgZBXQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg7AAg1gXg");
	var mask_graphics_105 = new cjs.Graphics().p("A1PLaQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4g/QA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A8ANBVQAGAugGArQARgBATABQAXABAXAFQgXhBAKhEQALhQA4hAQA3hBBOgXQBOgXBRAYQAlALAgASQgDg/AZg6QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBNgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/QA3A/AMBPQANBOghBNQghBNhBAtQhBAuhTAEQhUAEhFgnQhCgkgnhEQgGAbgMAaQghBKhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAtQhHAvhRAAQhQABhIguQgsgbgegmQgJAWgMAVQggA0g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBWgYBWQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_106 = new cjs.Graphics().p("A5EMWQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hABOgXQBOgXBRAYQBTAXA1A8QA1A9ANBVQAHAugHArQASgBASABQAYABAWAFQgXhBAKhEQALhRA4g/QA3hBBOgXQBOgXBRAYQAmALAfASQgCg/AYg6QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAQASQARgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQAQg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IABABQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgageQgGAXgKAWQghBNhBAtQhBAuhTAEQhUAEhFgnQhCglgnhDQgGAbgMAaQghBKhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAuhRAAQhRABhIgtQgugdgegoQgGATgIASQggBJhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgIAWgNAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQADBCgbA7QgiBKhHAuQhIAvhRAAQggABgegIQAdBVgZBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_107 = new cjs.Graphics().p("A8+NIQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgWQBOgXBRAYQBTAWA1A9QA1A9ANBVQAHAugHArQASgBASABQAYABAWAFQgXhBAKhEQALhRA4hAQA3hABOgXQBOgXBRAYQAmALAfASQgCg/AYg6QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAQASQARgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBNgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IABABQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAMAPQAQg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgGAWgKAWQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgageQgGAXgKAWQghBNhBAtQhBAuhTAEQhUAEhFgnQhCglgnhDQgGAbgMAaQghBKhIAuQhHAuhRAAQhRABhIgtQg1ghgggxQgGAUgJAUQghBKhIAtQhHAvhRAAQhQABhIguQgugdgegnQgGATgIARQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgIAWgNAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQADBCgbA7QgiBKhHAuQhIAvhRAAQggABgegIQAdBVgZBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_108 = new cjs.Graphics().p("EghCANwQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgWBRAXQBTAXA1A9QA1A9ANBVQAHAugHArQASgBASABQAYABAWAFQgXhBAKhEQALhRA4hAQA3hBBOgWQBOgXBRAYQAmALAfARQgCg+AYg6QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAQASQARgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQAQg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IABABQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAMAPQAQg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQhRABhIguQg6glgig4QgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgGAWgKAWQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgageQgGAXgKAWQghBNhBAtQhBAuhTAEQhUAEhFgnQhCglgnhDQgGAbgMAaQghBKhIAuQhHAuhRAAQhRABhIgtQg1ghgggxQgGAUgJAUQggBJhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgIAWgNAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQADBCgbA7QgiBKhHAuQhIAvhRAAQggABgegIQAdBVgZBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_109 = new cjs.Graphics().p("Egk3AOsQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAHAugHArQASgBASABQAYABAWAFQgXhBAKhEQALhRA4hAQA3hBBOgXQBOgXBRAYQAmALAfASQgDg/AZg5QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBNgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IAAABQAQhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IALAPQARg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAPhAAug2QA4hBBNgXQBOgXBSAXQBSAYA2A8QA1A+ANBUQANBUgiBKQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQg7glghg4QgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgGAWgJAWQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgbgeQgFAXgKAWQghBNhBAtQhBAthTAEQhUAEhFgmQhCgkgnhEQgGAbgMAaQghBJhIAuQhHAvhRAAQhQABhIguQg1ghgggwQgGAUgJATQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgJAWgMAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBWgYBWQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_110 = new cjs.Graphics().p("EgpAAPKQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAGAugGArQARgBATABQAXABAXAFQgXhBAKhEQALhRA4hAQA3hBBOgXQBOgXBRAYQAmALAfASQgDg/AZg5QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUAMAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IAAABQAQhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IALAPQARg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAPhAAug2QA4hBBNgXQBOgXBSAXQBSAYA2A8QAYAdAQAhQAQhBAug1QA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQhRABhIguQhFgrgihFQgGAZgLAYQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQg7glghg4QgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgGAWgJAWQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgbgeQgFAXgKAWQghBNhBAsQhBAuhTAEQhUAEhFgnQhCgkgnhDQgGAbgMAaQggBJhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgJAWgMAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBVgYBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_111 = new cjs.Graphics().p("Egs6AQLQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAGAugGArQARgBATABQAXABAXAFQgXhBAKhEQALhRA4hAQA3hBBOgXQBOgXBRAYQAmALAfASQgDg/AZg6QAWgwAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBQgWBMAXQBMAXA3A/IAAABQAQhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IALAPQARg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAPhAAug2QA4hBBNgXQBOgXBSAXQBSAYA2A8QAYAdAQAhQAQhBAug1QA4hBBNgXQBOgXBSAYQBSAXA1A9IAHAIQANhLA0g8QA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQhRABhIguQgpgagcgiQgGAjgPAhQghBKhIAuQhHAvhRAAQhRABhIguQhFgrgihFQgGAZgLAYQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQg7glghg4QgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgGAWgJAWQgiBKhHAuQhIAvhRAAQhRAAhIgtQgkgXgbgeQgFAXgKAWQghBMhBAtQhBAuhTAEQhTAEhFgnQhCglgnhCQgGAagMAaQghBKhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgJAWgMAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBVgYBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_112 = new cjs.Graphics().p("Egw+AQaQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAGAugGArQARgBATABQAXABAXAFQgXhBAKhEQALhRA4hAQA3hBBOgXQBOgXBRAYQAmALAfASQgDg/AZg6QAWgxAognQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QANAPAKAPQARg6AqgxQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQARhHAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IAAABQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IALAPQARg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAPhAAug2QA4hBBNgXQBOgXBSAXQBSAYA2A8QAYAdAQAhQAQhBAug1QA4hBBNgXQBOgXBSAYQBSAXA1A9IAHAIQANhLA0g8QA4hBBNgXQBOgXBSAYQBSAXA1A9QAYAcAQAgQARgvAjgoQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQhRABhIguQhEgrgihEIgIATQghBKhIAuQhHAvhRAAQhRABhIguQgpgagcgiQgGAjgPAhQghBKhIAuQhHAvhRAAQhRABhIguQhFgrgihFQgGAZgLAYQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQg7glghg4QgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgGAWgJAWQgiBKhHAuQhIAuhRAAQhRABhIgtQgkgXgbgeQgFAXgKAWQggBMhBAtQhBAuhTAEQhUAEhFgnQhCglgnhCQgGAagMAaQghBKhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgJAWgMAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBVgYBXQgVBHg0A0Qg8A8hZAQQgcAFgbAAQg6AAg1gXg");
	var mask_graphics_113 = new cjs.Graphics().p("Eg00ARWQhOgjgvhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAgASQgDg/AZg6QAVgxAogoQAogmAygVQA3gYA+ABQA+ABA3AYQA3AZApAtIAPASQASgsAhgmQA3hBBOgXQBOgXBRAYQBTAXA1A9IAOARQARg4ApgwQA3hBBOgXQBOgXBRAYQBTAXA1A9QANAPAKAPQARg6AqgxQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAVQARhHAyg4QA2g6BRgWQBRgWBMAXQBMAXA2A/IABABQAQhBAug2QA4hBBNgXQBNgXBSAYQBSAXA1A9IAMAPQARg9ArgzQA4hBBNgXQBOgXBSAYQBSAXA1A9QASAUAMAWQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IABABQAPhAAug2QA3hBBOgXQBNgXBTAXQBSAYA1A8QAZAdAQAhQAQhBAug1QA3hBBOgXQBOgXBRAYQBTAXA1A9IAGAIQAOhLA0g8QA3hBBOgXQBOgXBRAYQBTAXA1A9QAYAcAQAgQARgvAjgoQA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAQhAAtg2QA4hBBNgXQBOgXBSAXQBSAYA2A9QA1A9ANBUQANBUgiBKQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQhDgrgjhEIgHATQgiBKhHAuQhIAvhRAAQhRABhIguQgogagcgiQgGAjgPAhQgiBKhHAuQhIAvhRAAQhRABhIguQhEgrgihFQgGAZgLAYQghBKhIAvQhHAvhRAAQhRABhIguQglgXgageQgGAagMAZQghBKhIAuQhHAvhRAAQhRABhIguQg7glghg4QgGAagMAZQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgGAWgKAWQghBKhIAtQhHAvhRAAQhQABhIguQgkgXgbgdQgGAXgJAVQghBNhBAtQhBAuhUAEQhTAEhGgnQhBgkgnhEQgGAbgMAaQgiBKhHAuQhIAvhRAAQhRABhIguQg0ghghgxQgFAUgJAUQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgegoQgGATgIASQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgJAWgMAVQggA1g2AlQg1Akg+AKQhMANhLgdQgagKgXgOQACBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBWgZBWQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg6AAg2gXg");
	var mask_graphics_114 = new cjs.Graphics().p("Eg44ASNQhOgjgvhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAgASQgDg/AZg6QAVgxAogoQAognAygVQA3gXA+AAQA+ABA3AYQA3AZApAuIAPASQARgsAignQA3hABOgXQBOgXBRAYQBTAXA1A8IAOARQARg3ApgwQA3hBBOgXQBOgXBRAYQBTAXA1A9QAMAPALAPQAQg6ArgxQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAVQAQhHAzg4QA2g6BRgWQBRgWBMAXQBMAXA2A/IABABQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IAMAPQAQg9ArgzQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAWQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IABABQAPhAAug2QA3hBBOgXQBNgXBTAXQBSAYA1A8QAZAdAQAhQAQhAAug2QA3hBBOgXQBOgXBRAYQBTAXA1A9IAGAIQAOhKA0g9QA3hBBOgXQBOgXBRAYQBTAXA1A9QAYAcAQAgQARgvAjgoQA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAQhAAtg2QA4hBBNgXQBOgXBSAXQBSAYA2A9QAOAQAMASQAKhCArg7QAzhFBNgdQBNgdBUATQBVATA5A7QA6A7AQBVQAQBVgfBMQgfBMhHAyQhIAxhSACQhSAChKguQg4gjgig0QgGAmgQAjQghBKhHAvQhIAvhRAAQhRABhIguQgkgWgbgfQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQhEgrgihEIgHATQgiBKhHAuQhIAvhRAAQhRABhIguQgogagcgiQgGAjgPAhQgiBKhHAuQhIAvhRAAQhRABhIguQhEgrgihFQgGAZgLAYQghBKhIAvQhHAvhRAAQhRABhIguQglgWgagfQgHAagLAZQghBKhIAuQhHAvhRAAQhRABhIguQg7glghg4QgGAagMAZQghBKhIAuQhHAuhRAAQhRABhIgtQgsgcgegmQgGAWgKAWQggBJhIAuQhHAvhRAAQhRABhIguQgkgXgbgeQgGAXgJAWQghBNhBAtQhBAuhUAEQhTAEhGgnQhBgkgnhEQgGAbgMAaQgiBKhHAuQhIAvhRAAQhRABhIguQg0ghghgxQgFAVgJATQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgegoQgGATgIASQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgJAWgMAVQggA1g2AlQg1Akg+AKQhMANhLgdQgagKgXgOQACBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBWgZBWQgVBHgzA0Qg9A8hYAQQgcAGgbAAQg6AAg2gYg");
	var mask_graphics_115 = new cjs.Graphics().p("Eg8oAS6QhOgjgvhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAgASQgDg/AZg6QAVgxAogoQAognAygVQA3gYA+ABQA+ABA3AYQA3AZApAuIAPASQARgsAignQA3hBBOgWQBOgXBRAYQBTAWA1A9IAOARQARg4ApgvQA3hBBOgXQBOgXBRAYQBTAXA1A9QAMAPALAOQARg5AqgxQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAVQAQhHAzg4QA2g6BRgWQBRgWBMAXQBMAXA2A/IABABQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IAMAPQAQg9AsgzQA4hBBNgXQBNgXBSAYQBSAXA1A9QARAUANAWQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IABABQAPhAAug2QA3hBBOgXQBNgXBTAXQBSAYA1A8QAZAdAQAhQAQhBAug1QA3hBBOgXQBOgXBRAYQBTAXA1A9IAGAIQAOhLA0g8QA3hBBOgXQBOgXBRAYQBTAXA1A9QAYAcAQAgQARgvAjgoQA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAQhAAtg2QA4hBBNgXQBOgXBSAXQBSAYA2A9QAOAQAMASQAKhCArg7QAzhFBNgdQBNgdBUATQBVATA5A7IAKALQAOglAZgiQAzhGBOgdQBNgcBUATQBVAUA5A7QA5A7AQBVQAQBVgfBMQgfBMhIAxQhIAxhSACQhSAChKguQgkgXgbgeIgEAKQgfBMhHAyQhIAxhSACQhSAChKguQg4gjgig0QgGAmgQAjQghBKhHAvQhIAvhRAAQhRABhIguQgkgWgbgfQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQhDgrgjhEIgHATQgiBKhHAuQhIAvhRAAQhRABhIguQgogagcgiQgGAjgPAhQgiBKhHAuQhIAvhRAAQhRABhIguQhEgrgihFQgGAZgLAYQghBKhIAvQhHAvhRAAQhRABhIguQglgWgagfQgHAagLAZQghBKhIAuQhHAvhRAAQhRABhIguQg7glghg4QgGAagMAZQghBKhIAtQhHAvhRAAQhQABhIguQgsgcgeglQgGAWgKAVQghBKhIAuQhHAvhRAAQhRABhIguQgkgXgbgeQgGAXgJAWQghBNhBAtQhBAuhUAEQhTAEhGgnQhBgkgnhEQgGAbgMAaQgiBKhHAuQhIAvhRAAQhRABhIguQg0ghghgxQgFAUgJAUQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgegoQgGATgIASQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgJAWgMAVQggA1g2AlQg1Akg+AKQhMANhLgdQgagKgXgOQACBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBWgZBWQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg6AAg2gXg");
	var mask_graphics_116 = new cjs.Graphics().p("EhAiATiQhOgjgvhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlALAgASQgDg/AZg6QAVgxAogoQAognAygVQA3gYA+ABQA+ABA3AYQA3AZApAuIAPASQARgsAignQA3hBBOgXQBOgXBRAYQBTAXA1A9IAOARQARg4ApgwQA3hABOgXQBOgXBRAYQBTAXA1A8QAMAPALAPQARg5AqgxQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAVQAQhHAzg4QA2g6BRgWQBRgWBMAXQBMAXA2A/IABABQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IAMAPQAQg9AsgzQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUAMAWQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IABABQAPhAAug2QA3hBBOgXQBNgXBTAXQBSAYA1A8QAZAdAQAhQAQhBAug1QA3hBBOgXQBOgXBRAYQBTAXA1A9IAGAIQAOhLA0g8QA3hBBOgXQBOgXBRAYQBTAXA1A9QAYAcAQAgQARgvAjgoQA3hBBOgXQBOgXBRAYQBTAXA1A9IAAABQAQhAAtg2QA4hBBNgXQBOgXBSAXQBSAYA2A9QAOAQAMASQAKhCArg7QAzhFBNgdQBNgdBUATQBVATA5A7IAKALQAOglAZgiQAzhGBOgdQBNgcBUATQBVAUA5A7QAOAOALAQQAOgrAdgnQAzhFBOgdQBNgcBVATQBUAUA5A7QA5A7AQBWQAQBVgfBMQggBMhHAxQhIAwhSACQhTAChJguQgwgegfgrIgIAVQgfBMhIAxQhIAxhSACQhSAChKguQgkgXgbgeIgEAKQgfBMhHAyQhIAxhSACQhSAChKguQg4gjgig0QgGAmgQAjQghBKhHAvQhIAvhRAAQhRABhIguQgkgWgbgfQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQhDgrgjhEIgHATQgiBKhHAuQhIAvhRAAQhRABhIguQgogagcgiQgGAjgPAhQgiBKhHAuQhIAvhRAAQhRABhIguQhEgrgihFQgGAZgLAYQghBKhIAvQhHAvhRAAQhRABhIguQglgWgagfQgHAagLAZQghBKhIAuQhHAuhRAAQhRABhIgtQg7glghg4QgGAagMAZQggBJhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgGAWgKAWQghBKhIAuQhHAvhRAAQhRABhIguQgkgXgbgeQgGAXgJAWQghBNhBAtQhBAuhUAEQhTAEhGgnQhBgkgnhEQgGAbgMAaQgiBKhHAuQhIAvhRAAQhRABhIguQg0ghghgxQgFAUgJAUQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgegoQgGATgIASQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgJAWgMAVQggA1g2AlQg1Akg+AKQhMANhLgdQgagKgXgOQACBCgbA7QghBKhIAuQhHAvhRAAQggABgfgIQAdBWgZBWQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg6AAg2gXg");
	var mask_graphics_117 = new cjs.Graphics().p("EhEwATiQhOgigwhNQgvhMAEhVQABgRADgRIgTABQhRAAhIguQhIgtgihKQgjhNAMhSQALhQA4hBQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAGAugGArQASgBASABQAYACAWAEQgXhBAKhEQALhQA4hBQA3hABOgYQBOgXBRAYQAmALAfASQgDg/AZg5QAWgyAognQAngnAygWQA4gXA+ABQA+AAA2AZQA3AYApAuIAPASQASgsAhgnQA4hABNgYQBOgXBSAYQBSAYA1A9IAOARQARg5ApgwQA4g/BNgYQBOgXBSAYQBSAYA1A8QANAOAKAQQARg6AqgxQA4hABNgYQBOgXBSAYQBSAYA1A9QARATANAWQARhIAzg3QA2g7BQgWQBRgVBMAXQBMAXA3A/IAAABQAQhCAvg2QA3hABOgYQBOgXBRAYQBTAYA1A9IALAOQARg9AsgzQA3hABOgYQBOgXBRAYQBTAYA1A9QARATANAWQAPhBAvg2QA3hABOgYQBNgXBRAYQBTAYA1A9IAAAAQAPhAAug1QA4hBBNgYQBOgXBSAYQBSAXA2A9QAYAcAQAhQAQhAAug2QA4hABNgYQBOgXBSAYQBSAYA1A9IAHAHQANhKA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9QAYAbAQAgQARguAjgpQA4hABNgYQBOgXBSAYQBSAYA1A9IAAAAQAQhAAug1QA3hBBOgYQBNgXBTAYQBSAXA1A9QAPARALASQAKhDArg6QAzhGBNgdQBOgdBUATQBUAUA6A7IAJAKQAOglAZgiQA0hFBNgdQBNgdBVAUQBUATA5A7QAOAOALAQQAPgqAcgnQA0hGBNgcQBOgdBUAUQBVATA5A7QAtAwATBAQAMgkAWghQAqhCBDgiQBDgiBOAFQBOAEA+AqQA1AjAiA4QAhA4AGA+QAGA/gWA9QgWA+gtAsQg9A8hZAQQhYAQhOgjQhNgjgvhNQgTgegKgfIgJAXQgfBMhIAxQhIAxhSABQhSAChKguQgwgegfgrIgIAWQgfBMhHAxQhIAxhSABQhTAChJguQglgXgbgdIgDAKQgfBMhIAxQhHAxhSACQhSADhKguQg5gjgig1QgFAmgQAkQghBKhIAuQhHAvhRABQhRABhIguQglgXgbgeQgGAagLAYQghBKhIAvQhHAuhRABQhRAAhIguQhEgrgihDIgIASQghBKhIAvQhHAuhRABQhRAAhIguQgpgZgcgjQgGAjgPAhQghBKhIAvQhHAuhRABQhRAAhIguQhFgrgihFQgGAagLAYQghBKhHAuQhIAvhRABQhRABhIguQgkgXgbgeQgGAagLAYQgiBKhHAvQhIAthRABQhQAAhIgtQg7glghg4QgGAagLAZQgiBJhHAvQhIAuhRABQhRAAhIguQgsgcgegmQgGAXgJAVQgiBKhHAvQhIAuhRABQhRAAhIguQgkgXgbgeQgFAXgKAXQghBMhBAuQhBAthTAEQhUAEhFgmQhCglgnhEQgGAbgMAaQghBKhIAvQhHAuhRABQhRAAhIguQg1ghgggxQgGAVgJATQghBKhIAvQhHAuhRABQhRAAhIguQgugdgegoQgGATgIASQghBKhIAvQhHAuhRABQhRAAhIguQgsgcgegmQgJAXgMAUQggA2g1AkQg2Akg9AKQhMANhLgcQgbgKgXgOQACBBgaA7QgiBKhHAvQhIAuhRABQggAAgfgHQAdBVgYBXQgVBHg0AzQg8A8hZARQgcAFgbAAQg6AAg1gYg");
	var mask_graphics_118 = new cjs.Graphics().p("EhH9AUPQhOgjgwhMQgvhNAEhVQABgRADgQIgTAAQhRABhIguQhIgugihJQgjhNAMhSQALhRA4hAQA3hBBOgXQBOgXBRAYQBTAXA1A9QA1A9ANBVQAGAugGArQASgBASABQAYABAWAFQgXhBAKhEQALhRA4hAQA3hBBOgXQBOgXBRAYQAmALAfASQgDg/AZg6QAWgxAogoQAngnAygVQA4gYA+ABQA+ABA2AYQA3AZApAuIAPASQASgsAhgnQA4hBBNgXQBOgXBSAYQBSAXA1A9IAOARQARg4ApgwQA4hBBNgWQBOgXBSAYQBSAWA1A9QANAPAKAPQARg6AqgwQA4hBBNgXQBOgXBSAYQBSAXA1A9QARATANAVQARhGAzg4QA2g6BQgWQBRgWBMAXQBMAXA3A/IAAABQAQhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA1A9IALAPQARg9AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QARAUANAWQAPhBAvg2QA3hBBOgXQBOgXBRAYQBTAXA0A9IAAABQAPhAAug2QA4hBBNgXQBOgXBSAXQBSAYA2A8QAYAdAQAhQAQhAAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IAHAIQANhKA0g9QA4hBBNgXQBOgXBSAYQBSAXA1A9QAYAcAQAgQARgvAjgoQA4hBBNgXQBOgXBSAYQBSAXA1A9IAAABQAQhAAug2QA3hBBOgXQBNgXBTAXQBSAYA1A9QAPAQALASQAKhCArg7QAzhFBNgdQBOgdBUATQBUATA6A7IAJALQAOglAZgiQA0hGBNgdQBNgcBVATQBUAUA5A7QAOAOALAQQAPgrAcgnQA0hFBNgdQBOgcBUATQBVAUA5A7QAtAvATBAQAMgjAWgiQAqhBBDgiQBDgiBOAEQBOAFA+ApIAIAGIAHgLQAphBBCgiQBEgkBQAFQBQAFBAArQA/AsAiBJQAhBJgIBMQgJBNgxBAQgwBAhIAcQhHAchQgNQhCgKg0glQgTAhgbAaQg9A8hZAQQhYAQhOgjQhNgjgvhMQgTgegKgfIgJAXQgfBMhIAxQhIAwhSACQhSAChKguQgwgegfgrIgIAVQgfBMhHAxQhIAxhSACQhTAChJguQglgXgbgeIgDAKQgfBMhIAyQhHAxhSACQhSAChKguQg5gjgig0QgFAmgQAjQghBKhIAvQhHAvhRAAQhRABhIguQglgWgbgfQgGAagLAZQghBKhIAuQhHAvhRAAQhRABhIguQhEgrgihEIgIATQghBKhIAuQhHAvhRAAQhRABhIguQgpgagcgiQgGAjgPAhQghBKhIAuQhHAvhRAAQhRABhIguQhFgrgihFQgGAZgLAYQghBKhHAvQhIAvhRAAQhRABhIguQgkgWgbgfQgGAagLAZQgiBKhGAtQhIAvhRAAQhRABhIguQg7gkghg4QgGAagLAZQgiBJhHAuQhIAvhRAAQhRABhIguQgsgcgegmQgGAWgJAWQgiBKhHAuQhIAvhRAAQhRABhIguQgkgXgbgeQgFAXgKAWQghBNhBAtQhBAuhTAEQhUAEhFgnQhCgkgnhEQgGAbgMAaQghBKhIAuQhHAvhRAAQhRABhIguQg1ghgggxQgGAUgJAUQghBKhIAuQhHAvhRAAQhRABhIguQgugdgegoQgGATgIASQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgJAWgMAVQggA1g1AlQg2Akg9AKQhMANhLgdQgbgKgXgOQACBCgaA7QgiBKhHAuQhIAvhRAAQggABgfgIQAdBWgYBWQgVBHg0A0Qg8A8hZAQQgcAGgbAAQg6AAg1gYg");
	var mask_graphics_119 = new cjs.Graphics().p("EhLkAUpQhOgjgvhMQgvhNAEhVQABgRADgRIgTABQhRABhIguQhIgugihJQgkhNAMhSQAMhRA3hAQA4hBBNgXQBOgXBSAYQBSAXA1A9QA2A9AMBVQAHAugHArQASgBATABQAXABAWAFQgXhBAKhEQAMhRA3hAQA4hBBNgXQBOgXBSAYQAlAKAgATQgDhAAZg5QAVgxAogoQAognAygVQA3gYA+ABQA+ABA3AYQA3AZApAuIAPASQASgtAhgmQA3hBBOgXQBOgXBRAYQBTAXA1A9IAOARQARg5ApgvQA3hBBOgXQBOgWBRAXQBTAXA1A9QANAOAKAQQARg6AqgxQA3hABOgXQBOgXBRAYQBTAXA1A8QARATANAWQARhHAyg3QA2g6BRgWQBRgWBMAXQBMAXA2A/IABABQAQhBAug2QA4hBBNgXQBOgXBSAYQBSAXA1A9IAMAOQARg8ArgzQA4hBBNgXQBOgXBSAYQBSAXA1A9QARAUANAVQAQhBAug1QA4hBBNgXQBOgXBSAYQBSAXA1A9IABAAQAPg/Aug2QA3hBBOgXQBMgXBTAXQBSAYA1A8QAZAcAQAiQAQhBAug1QA3hBBOgXQBOgXBRAYQBTAXA1A9IAGAIQAOhLA0g8QA3hBBOgXQBOgXBRAYQBTAXA1A9QAYAbAQAhQARgvAjgoQA3hBBOgXQBOgXBRAYQBTAXA1A9IAAAAQAQg/Atg2QA4hBBNgXQBOgXBSAXQBSAYA2A9QAOAQAMASQAKhDArg6QAzhFBNgdQBNgdBUATQBVATA5A7IAKAKQAOglAZghQAzhGBOgdQBNgcBUATQBVAUA5A7QAOAOALAQQAOgrAdgnQAzhFBOgdQBNgcBVATQBUAUA5A7QAuAvATBAQAMgkAVghQArhBBDgiQBCgiBPAEQBNAFA/ApIAIAGIAGgLQAqhBBBgiQBFgkBQAFQBQAFA/ArQAeAUAWAaQAMgUAOgTQAogxA2gcQA3gbA/gDQA/gCA4AXQA5AXArAvQArAuASA6QAQAxgCAyQgDBUg1BJQg1BIhQAcQhPAchXgWQhVgXg4g+QgKASgNARQgxBAhHAcQhIAchPgNQhCgLg1gkQgSAhgcAaQg8A8hZAQQhZAQhNgjQhOgjgvhMQgSgegLggIgIAYQggBMhHAxQhIAwhSACQhTAChJguQgwgfgfgqIgIAVQgfBMhIAxQhIAxhSACQhSAChKguQgkgXgbgeIgEAKQgfBMhHAyQhIAxhSACQhSAChKguQg4gjgig0QgFAmgRAjQghBKhHAvQhIAvhRAAQhRABhIguQgkgXgbgeQgGAagLAZQgiBKhHAuQhIAvhRAAQhRABhIguQhDgrgjhEIgHATQgiBKhHAuQhIAvhRAAQhRABhIguQgogagcgiQgGAjgPAhQgiBKhHAuQhIAvhRAAQhRABhIguQhEgsgihEQgGAZgLAYQghBKhIAvQhHAvhRAAQhQABhIguQglgXgageQgGAagMAZQghBJhIAuQhHAvhRAAQhRABhIguQg7gmghg2QgGAagMAYQghBKhIAuQhHAvhRAAQhRABhIguQgsgcgegmQgGAWgKAWQghBKhIAuQhHAvhRAAQhRABhIguQgkgXgbgeQgGAWgJAXQghBNhBAtQhBAuhUAEQhTAEhGgnQhBglgnhDQgGAbgMAaQgiBKhHAuQhIAvhRAAQhRABhIguQg0gighgwQgFAUgJAUQgiBKhHAuQhIAvhRAAQhRABhIguQgtgdgegoQgGASgIATQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgdgmQgJAWgMAVQggA1g2AlQg1Akg+AKQhMANhLgdQgagKgXgOQACBCgbA7QghBKhIAuQhHAvhRAAQggAAgfgHQAdBVgZBXQgVBHgzA0Qg9A8hYAQQgcAFgbAAQg6AAg2gXg");
	var mask_graphics_120 = new cjs.Graphics().p("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");
	var mask_graphics_121 = new cjs.Graphics().p("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");
	var mask_graphics_122 = new cjs.Graphics().p("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");
	var mask_graphics_123 = new cjs.Graphics().p("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");
	var mask_graphics_124 = new cjs.Graphics().p("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");
	var mask_graphics_125 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_graphics_98,x:58.7,y:257.8}).wait(1).to({graphics:mask_graphics_99,x:73.7,y:274.3}).wait(1).to({graphics:mask_graphics_100,x:90.2,y:272.3}).wait(1).to({graphics:mask_graphics_101,x:112.2,y:259.7}).wait(1).to({graphics:mask_graphics_102,x:136.7,y:256.3}).wait(1).to({graphics:mask_graphics_103,x:161.7,y:251.8}).wait(1).to({graphics:mask_graphics_104,x:187.2,y:247.8}).wait(1).to({graphics:mask_graphics_105,x:213.2,y:243.8}).wait(1).to({graphics:mask_graphics_106,x:237.7,y:237.8}).wait(1).to({graphics:mask_graphics_107,x:262.7,y:232.8}).wait(1).to({graphics:mask_graphics_108,x:288.7,y:228.8}).wait(1).to({graphics:mask_graphics_109,x:313.2,y:222.8}).wait(1).to({graphics:mask_graphics_110,x:339.7,y:219.8}).wait(1).to({graphics:mask_graphics_111,x:364.7,y:213.3}).wait(1).to({graphics:mask_graphics_112,x:390.7,y:211.8}).wait(1).to({graphics:mask_graphics_113,x:415.3,y:205.8}).wait(1).to({graphics:mask_graphics_114,x:441.3,y:200.3}).wait(1).to({graphics:mask_graphics_115,x:465.3,y:195.8}).wait(1).to({graphics:mask_graphics_116,x:490.3,y:191.8}).wait(1).to({graphics:mask_graphics_117,x:517.3,y:191.7}).wait(1).to({graphics:mask_graphics_118,x:537.8,y:187.3}).wait(1).to({graphics:mask_graphics_119,x:560.9,y:184.7}).wait(1).to({graphics:mask_graphics_120,x:581.8,y:179.7}).wait(1).to({graphics:mask_graphics_121,x:603.8,y:166.8}).wait(1).to({graphics:mask_graphics_122,x:619.3,y:149.3}).wait(1).to({graphics:mask_graphics_123,x:637.4,y:149.3}).wait(1).to({graphics:mask_graphics_124,x:654.8,y:149.3}).wait(1).to({graphics:mask_graphics_125,x:655.3,y:133.3}).wait(54));

	// Layer 10
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AsjH2QgFgBgCgEQgDgEAAgEQABgFAEgDQAEgDAFAAIAFACIAEAAQAKAAAIgFQAJgFAFgHQACgEAFgCQAFAAAEACQAEADABAEQABAFgDAEQgIAOgOAGQgNAIgQAAgAteHtIg8gJQgFAAgCgEQgDgEAAgFQABgEAEgDQAEgEAFACIA7AIQAFABADAEQADADgBAFQgBAFgDADQgDACgFAAgAreGnQgFgBgCgEQgDgFACgEIAPg7QABgEAFgDQAEgCAFABQAEABADAFQACAEgBAFIgQA5QgBAEgDADQgDACgEAAgAq+EzQgEgBgCgEQgDgFACgEQAKgfAKgbQACgEAFgCQAEgCAFACQAEABACAFQACAEgCAEQgIAUgMAlQgBADgDACQgDACgEAAIgEAAgAqSDDQgFgDgBgEQgCgFADgEQALgVANgSIAJgNQADgDAFgBQAFgBAEACQAEAEAAAEQABAFgDAEIgJANQgMAQgLAUQgDAGgHAAIgFgBgApPBfQgEgDAAgFQgBgEADgEIAlgwQADgDAEgBQAFgBAEADQAEADAAAEQABAGgDADIgkAwQgEAFgGAAQgEAAgDgDgAoGAAQgDgDgBgEQgBgEADgFIAlgwQADgDAFgBQAFAAADADQAEADABAEQAAAFgDAEIgkAvQgEAEgGAAQgDAAgEgCgAm8heQgEgEgBgEQAAgFADgEIAlgwQADgDAEgBQAFgBAEADQAEADAAAFQABAFgDADIglAwQgDAFgGAAQgEAAgDgCgAlzi+QgDgDgBgFQgBgEADgFIAlgvQADgDAFgCQAFAAAEADQAEADAAAFQABAEgDAFIglAvQgEAFgFgBQgFAAgDgCgAkpkeQgEgDAAgEQgBgEADgEIAHgJQAGAKAJAJIgDADQgEAGgGAAQgEAAgDgEgAN2m2IABgCQADgDAFgBQAFgBAEADQAEACAAAFIABABIgXgEgAE7m7IANgBQADgBADACgAOknWQgEAAgDgCQgEgDAAgEQgBgFADgEIAKgOIAAAgg");
	this.shape_112.setTransform(171.9,239.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAsA6IhLgLIgmhDQgFgJADgKQADgKAJgFQAJgFAKADQAKADAFAJIAZAtIAzAIQALABAGAIQAGAJgBAKQgCAJgHAGQgHAGgJAAg");
	this.shape_113.setTransform(71.6,284.5,0.468,0.468);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AADA2Ig0hfQAYgKAUgOIA0BeQAFAJgDAKQgDAKgJAFQgFADgHAAQgOAAgIgMg");
	this.shape_114.setTransform(65.2,275.7,0.468,0.468);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FF0000").ss(7,1,1).p("AlEFIIAFgFIB6hmIBThHIAKgJIGtnU");
	this.shape_115.setTransform(1149.6,33.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AxbERIABgJQAFgeAOghIAEgBIKdh/IA4hGQAPgVAcgGQAigHAiAWQAoAZDGCRIADACQAGAFAHADQALAEALgFQAUgKBag8ICchrIDliaQAPgNATgIQAggOAdAGQAWAEBlAaIBxAfIADAAIAVAFIAAAjIgGAEIAGgEIB5hmIBKg9IAKgLIAIgKIACACIAegDIgOAWIjnCjIAAAoQgYgCgVgHIh9ghQhWgXgSgDQgHgBgLAFQgJAEgHAGIgEADIjmCZQg2AnhNA0Qh1BQgbANQgiARgjgJQgbgHgVgSQjEiPgkgYQgKgGgDACIhABRQgIALgOADIqrCBQgLACgJAAQgJAAgJgCgAQ0kHIAKgIg");
	this.shape_116.setTransform(1030.5,74.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#E08963","#E57358","#F13C3C"],[0,0.271,1],-119.5,-82.5,658.7,-82.5).s().p("AuHIkQgJgBgIgFQgHgFgFgIIglhDQgYAGgaAAQhIAAg0gyQgzg0AAhJQAAhJAzgzQA0g0BIAAQBJAAA0A0QAzAzAABJQAAAngQAjQgQAhgcAaIAcAyIDNAYQAPhNAXhFQAjhpAuhBQAsg9BuiRQABAGACAGQAHAOAMgBQAMARAOAQQhkCGgpA5QgzBIgkCCQgSBBgHA0QgCAOgLAJQgKAJgOAAgAxCDeQgeAdAAAqQAAApAeAeQAeAeApAAQAVAAASgIQALgEAJgHQAUgOALgVQALgXAAgYQAAgqgdgdQgegegqAAQgpAAgeAegASio6QAEgEAFgDIgFAIIgEgBg");
	this.shape_117.setTransform(161,235.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AupGAQgDgDABgFQAAgFAFgDQADgDAFABIACABQgHAJgGAKIAAgCgAvqFjIAQACQAGABACAEQADAEgBAEQAAAEgDADIgBAAIgWgWgAoagjIAKgJIgNANQABgDACgBgANjiZQgFgBgDgEQgDgEABgFQABgFAEgCQAFgCAEAAQAJACAJgDQAJgDAHgHIADgDIADgEQADgEAFgBQAFAAADACQAEADABAFQABAEgDAFIgIAKQgLALgPAFQgJACgIAAIgMgBgAMqi2Ig1gdQgEgDgBgEQgCgFADgEQACgFAFgBQAFgBAEACIA0AeQAFACABAEQABAGgCADIgCADQgDADgEAAIgCABQgDAAgCgCgAO1jiQgEgDgBgFQAAgFADgDIAjgxQADgEAFgBQAFAAADACQAEADABAFQABAFgDAEIgjAwIgBABQgEADgEABIgCAAQgDAAgDgCgALAjvQgigRgUgIQgEgCgCgEQgCgFACgEQACgFAFgBQAEgCAFABIA3AaQAFACABAFQABAEgCAFIgCADQgDACgDABIgCAAIgGgBgAJTkcQgWgGgTgEIgQgCQgFAAgCgEQgEgEABgFQABgFAEgDQAEgCAEAAIAQACQAWADAXAHQAFACACAEQACAEgBAFQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQgEAEgEAAIgEAAgAHekvIg7gIQgFAAgDgEQgDgEABgFQAAgFAEgCQAEgDAEAAIA9AHQAEABADAEQADAEgBAEQAAAFgCACQgEAEgFAAIgCAAgAFnk+Ig8gHQgEgBgEgEQgDgDABgFQAAgFAEgDQAFgDAEAAIA8AIQAFAAADAEQACAEAAAFQgBAEgCADQgEADgEAAIgCAAgADvlMIg8gHQgFgBgCgEQgDgEAAgFQABgEAEgDQADgDAFAAIA8AIQAFAAADAEQADADgBAFQAAAFgCACQgEAEgFAAIgCAAgAB4lbIg8gGQgFgBgDgEQgDgDABgFQABgFADgEQAEgCAFAAIA7AHQAFABAEADQACAEAAAFQAAAEgDADQgEADgEAAIgCAAgAAAloIgEgBQAAgMgDgMIAKABQAFABADAEQACADAAAFQAAAEgDADQgDAEgFAAIgCAAg");
	this.shape_118.setTransform(1147.8,34.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAsA6IhLgLIgmhDQgFgJADgKQADgKAJgFQAJgFAKADQAKADAFAJIAZAtIAzAIQALABAGAIQAGAJgBAKQgCAJgHAGQgHAGgJAAg");
	this.shape_119.setTransform(1250.9,-1.9,0.467,0.467,0,-45.6,134.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AADA2Ig0hfQAYgKAUgOIA0BeQAFAJgDAKQgDAKgJAFQgFADgHAAQgOAAgIgMg");
	this.shape_120.setTransform(1249.1,-12.5,0.467,0.467,0,-45.6,134.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#E08963","#E57358","#F13C3C"],[0,0.271,1],32.3,-130.8,-512.6,424.8).s().p("AyVI9QAFgCAFAAIgBADIgJgBgAN3BMQgqgfg7ghQh1hAhYgOQhGgLikgWQgDgWgDgUQAIgIgFgPQgCgGgFgFQC2AYBJALQBRANBiAwQBCAgBBArIB/ijIgRg3QgmADgjgNQgkgMgcgcQg0gzAAhJQgBhIAzg1QAygzBKgBQBIAAA1AyQAzAzACBJQgBBJgzAzQgSATgVAMIAWBKQACAJgCAJQgBAIgFAHIikDRQgKAKgNABIgDAAQgNAAgKgHgAPlnyQgqAAgdAeQgdAeAAApQAAAqAeAeQASARAYAHQAXAHAXgEQALgCAMgFQASgHAOgPQAegdgCgqQAAgrgdgdQgdgcgqAAIgBAAg");
	this.shape_121.setTransform(1145.6,15);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFCC00").ss(7,1,1).p("Eg9oALJMB7RgWR");
	this.shape_122.setTransform(529.3,162.9);

	var maskedShapeInstanceList = [this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},98).wait(81));

	// Layer 8
	this.instance_2 = new lib.Symbol22("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(158.4,265.6,0.177,0.177,0,0,0,50.3,144.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(284.9,225.2,1,1,0,0,0,90.6,62.6);

	this.instance_4 = new lib.Symbol14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.3,193.6,1,1,0,0,0,51.3,72.5);

	this.instance_5 = new lib.Symbol15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(350.3,209.1,1,1,0,0,0,22.4,22);

	this.instance_6 = new lib.Symbol17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(703,143.1,1,1,0,0,0,93,64.8);

	this.instance_7 = new lib.Symbol18("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1207.6,29.6,1,1,0,0,0,22.9,22);

	this.instance_8 = new lib.Symbol19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1385.3,48.9,1,1,0,0,0,88.5,43.3);

	this.instance_9 = new lib.Symbol20("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1281.5,-67.5,1,1,0,0,0,51.3,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},48).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_4},{t:this.instance_3}]},5).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5},{t:this.instance_6}]},9).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7}]},8).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7},{t:this.instance_8},{t:this.instance_9}]},1).to({state:[]},7).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:158.3},8,cjs.Ease.get(1)).to({_off:true},5).wait(118));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_57 = new cjs.Graphics().p("AiUDvQhKgugjhKQgdhAAEhGQAEhSA0hGQAzhGBNgdQBOgcBTATQBUATA6A7QA5A8AQBVQAQBUgfBMQgfBMhIAxQhHAxhTACIgFAAQhOAAhHgtg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AAEGnQhHgtgihKQgjhLALhUQAEgZAIgYQgRACgSABQhSABhJguQhKgugjhJQgdhAAEhHQAEhSA0hGQAzhGBNgdQBOgcBUATQBUATA5A7QA5A8AQBVQAOBKgWBEQA6gIA9ARQBSAYA1A9QA2A8AMBUQANBUgiBKQghBKhIAvQhHAuhRABIgCAAQhQAAhHgug");
	var mask_1_graphics_59 = new cjs.Graphics().p("AivGnQhIgtgihKQgjhLALhUQAEgZAIgYQgRACgSABQhSABhJguQhKgugjhJQgdhAAEhHQAEhSA0hGQAzhGBNgdQBOgcBUATQBUATA6A7QA5A8AQBVQAOBKgWBEQA6gIA8ARIAJADQgRg6AIg/QAMhQA3hBQA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBJhIAvQhHAuhRABQgvAAgrgPQAFATADAUQANBUgiBKQghBKhIAvQhHAuhQABIgCAAQhQAAhHgug");
	var mask_1_graphics_60 = new cjs.Graphics().p("Aj6KXQhJgtgihKQgjhLAMhUQAEgZAIgYQgRACgSABQhSABhJguQhKgugjhKQgehAAFhHQAEhRAzhGQA0hGBNgdQBNgcBUATQBVATA5A7QA5A8ARBUQAOBKgWBEQA6gIA8ARIAKADQgSg6AJg/QALhPA3hBQA3hABOgYQAYgHAZgCQg4gwgbhIQgdhNAPhNQAPhIAyg6QAyg6BGgYQBFgZBLAOQBMANA4AvQA4AvAcBIQAaBIgMBJQgLBIgwA8QgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBTQAMBUghBKQgiBKhHAvQhHAuhRABQgvAAgrgPQAFATADAUQAMBUghBKQgiBKhHAvQhGAuhRABIgCAAQhQAAhHgug");
	var mask_1_graphics_61 = new cjs.Graphics().p("AnqLZQhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hFQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBUQAOBKgWBEQA6gIA9ASIAJACQgRg6AIg+QAMhRA3g/QA4hBBNgXQAZgIAZgCQg5gvgbhIQgdhNAQhNQAOhIAyg6QAxg6BGgZQBFgYBLANQBMAOA4AvQAMAJALALQANg1AjgvQAzhFBNgdQBNgdBUATQBVATA5A7QA6A7AQBVQAQBVgfBMQgfBMhHAxQhHAyhTACQhSAChKguQgegTgYgYQgPA7gpAzQgwA8hFAbQgjAOglAEQARAOAPARQA2A8AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQguAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_62 = new cjs.Graphics().p("ArlLZQhIgugihJQgjhMAMhTQAEgaAIgYQgRADgSAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhFQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBUQAOBKgWBEQA6gIA8ASIAKACQgSg6AJg+QALhRA4g/QA3hBBOgXQAYgIAZgCQg4gvgbhIQgdhNAPhNQAPhIAyg6QAyg6BFgZQBFgYBMANQBLAOA4AvQAMAJAKALQAOg1AigvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QA3A1AUBNQAUBNgVBKQgUBJg6A3Qg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChKguQgfgTgYgYQgOA7gpAzQgxA8hEAbQgiAOglAEQARAOAPARQA0A8ANBVQAMBUghBKQghBKhHAuQhIAvhRAAQguAAgrgPQAFATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgBAAQhQAAhIgtg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AvpLZQhIgugihJQgjhMAMhTQAEgaAIgYQgSADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhFQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBUQAOBKgWBEQA6gIA8ASIAKACQgSg6AJg+QALhRA4g/QA3hBBOgXQAYgIAZgCQg4gvgbhIQgdhNAPhNQAPhIAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQAMAJAKALQAOg1AigvQAzhFBMgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAkAiAUAtQAQgnAbghQAsg4A+gcQA+gcBGAEQBHAEA6AjQA7AjAlA8QAlA8AFBEQAFA9gWA7QgWA7grAsQgsArg7AWQg7AVg9gEQg9gFg3gfQg3gegkgyQgPgVgMgWQgWA5gvAtQg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChJguQgfgTgYgYQgOA7gpAzQgxA8hEAbQgjAOglAEQARAOAPARQA1A8ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgrgPQAFATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgBAAQhQAAhIgtg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AziLoQhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hFQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBUQAOBKgWBEQA6gIA9ASIAJACQgSg6AJg+QAMhRA3g/QA4hBBNgXQAYgIAZgCQg4gvgbhIQgdhNAQhNQAOhIAyg6QAyg6BGgZQBFgYBLANQBMAOA4AvQAMAJAKALQAOg1AjgvQAzhFBNgdQBNgdBUATQBUATA5A7QAxAyATBFIATgWQA1g7BJgWQBJgWBOATQBNASA3A2QAjAiAVAtQAPgnAbghQAsg4A+gcQA+gcBHAEQBGAEA7AjQAvAcAhAtQAQg+AtgzQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQhRAAhIguQgsgcgegnIgJAbQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgVgLgWQgXA5gvAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgMQgcAkgnAbQhGAyhTACQhSAChKguQgfgTgYgYQgOA8gpAyQgwA8hFAbQgjAOglAEQARAOAPARQA2A8AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A3iMKQhIgtgihKQgjhLALhUQAEgZAIgYQgRADgSAAQhSABhJguQhKgugjhKQgdhAAEhHQAEhSA0hGQAzhFBNgdQBOgcBUATQBUATA6A7QA5A7AQBVQAOBKgWBEQA7gIA8ARIAJADQgRg6AIg/QAMhQA3hBQA4g/BNgYQAZgHAZgCQg5gvgbhJQgdhNAQhNQAOhIAyg6QAyg6BGgYQBFgZBLAOQBMANA4AvQAMAKALALQANg1AjgvQAzhGBNgdQBNgdBUATQBVATA5A7QAxAzAUBFIASgWQA1g7BIgWQBJgXBOATQBNATA3A1QAjAjAVAtQAPgnAbgiQAsg3A+gcQA+gcBHAEQBGAEA7AjQAvAcAhAtQARg+AsgzQA3hBBOgXQBOgXBRAYQBTAXA1A9QAOAQALASQANgpAagmQAwhFBKgfQBKgfBTAOQBTAOA7A1QBFA+ATBZQAUBYgkBVQgXA3guAqQgtAqg5ATQg5ATg9gHQg+gGg0geQg7ghglg8QgGARgHARQgiBKhHAuQhIAvhRAAQhRABhIguQgsgcgegnIgJAbQgWA7grArQgrArg7AWQg8AWg9gFQg9gFg3geQg3gfgkgxQgPgVgLgWQgWA5gwAsQg6A3hKARQhKAQhMgYQhLgZgyg5QgmgrgSg2IgDgLQgbAkgoAbQhHAxhTACQhSAChKgtQgegTgYgZQgPA8gpAzQgwA8hFAbQgjAOglAEQASAOAOAQQA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQguAAgsgPQAFATADAUQANBUgiBKQghBKhIAvQhHAuhRABIgCAAQhQAAhHgug");
	var mask_1_graphics_66 = new cjs.Graphics().p("A7SNMQhIgugihJQgjhMAMhUQADgZAIgYQgRADgRAAQhSAChKguQhJgugjhLQgehAAEhHQAFhSAzhGQA0hFBNgcQBNgdBUATQBVAUA5A5QA5A8ARBVQAOBKgXBEQA7gIA8ARIAKADQgSg6AJg/QALhQA4hBQA3hABOgXQAYgHAZgCQg5gvgahIQgdhNAPhNQAPhIAyg7QAyg5BFgZQBFgYBMANQBMANA4AwQALAJALALQANg1AjgvQAzhGBNgcQBOgeBUAUQBUASA6A8QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBNASA2A2QAjAiAVAtQAPgnAcghQAsg4A+gcQA+gcBGAEQBHAEA6AjQAvAcAiAtQAQg+AsgzQA4hBBNgXQBOgXBSAYQBSAXA1A9QAOAQALASQANgpAbgmQAwhFBKgfQBJgfBTAOQBTAOA8A2IAPAOQAKgqAYgmQArhHBGgjQBGgjBSAGQBSAHA/AvQA/AuAfBMQAfBNgNBMQgJA2gdAvQgdAwgsAgQg/AvhSAHQhSAHhGgjQgrgWghgiQgGAWgJAXQgYA3gtApQguAqg5ATQg4ATg+gGQg9gHg0gdQg8giglg8QgFARgIARQghBKhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grAsQgsAqg7AXQg7AVg9gEQg9gFg3gfQg3gegkgyQgQgVgLgWQgWA5gvAsQg6A3hKARQhKAQhMgYQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSABQhSAChKgtQgfgTgYgZQgPA8goAzQgxA8hEAaQgjAOglAEQARAOAPARQA1A9ANBVQAMBTghBLQgiBJhHAvQhIAvhRAAQguAAgsgPQAGATADAVQAMBUghBJQgiBLhHAuQhIAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A/COcQhIgugihJQgjhMAMhTQADgaAJgYQgSADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgWBEQA6gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahHQgdhNAPhNQAPhIAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQAMAJAKALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAkAiAUAtQAQgnAbghQAsg4A9gcQA+gcBGAEQBHAEA6AjQAwAcAhAtQAQg+AsgzQA4hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBKgeQBJgfBTAOQBTANA8A2IAPAOQAKgpAYgnQArhGBGgkQBGgjBSAGQBSAHA/AvQARAMAOAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAhQg/AuhSAHQhSAIhGgjQgrgWghgjQgGAWgJAXQgYA3gtApQguAqg5ATQg4ATg+gGQg9gGg0geQg8giglg8QgFARgIARQghBKhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grAsQgsAqg7AWQg7AVg9gEQg9gFg3gfQg2gdgkgyQgQgVgLgWQgWA5gvAsQg6A2hLARQhKARhMgZQhLgZgzg4QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChKguQgfgTgYgYQgOA8gpAxQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgrgPQAFATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgBAAQhQAAhIgtg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Egi8AO1QhIgugihJQgjhMAMhTQADgaAJgYQgSADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgWBEQA6gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahHQgdhNAPhNQAPhIAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQAMAJAKALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAkAiAUAtQAQgnAbghQAsg4A+gcQA+gcBGAEQBGAEA6AjQAwAcAhAtQAQg+AsgzQA4hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBKgeQBJgfBTAOQBTANA8A2IAPAOQAKgpAYgnQArhGBGgkQBGgjBSAGQBSAHA/AvQARAMAOAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QANAOAKAQQARgpAgglQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQhRAAhIguQg1ghgggxIgEAKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAhQg/AuhSAHQhSAIhGgjQgrgWghgjQgGAWgJAXQgYA3gtApQguAqg5ATQg4ATg+gGQg9gGg0geQg8giglg8QgFARgIARQghBKhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grArQgsArg7AWQg6AVg9gEQg9gFg3gfQg3gegkgxQgQgVgLgWQgWA5gvAsQg6A2hLARQhKARhMgZQhLgZgzg5QglgpgSg2IgEgMQgbAkgoAbQhHAxhSACQhSAChKgtQgfgTgYgYQgOA8gpAxQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgrgPQAFATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgBAAQhQAAhIgtg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Egm7APnQhIgugihJQgjhMAMhTQADgaAJgYQgSADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgWBEQA6gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahIQgdhMAPhNQAPhIAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQAMAJAKALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAkAiAUAtQAQgnAbghQAsg4A+gcQA+gcBGAEQBHAEA6AjQAwAcAhAtQAQg+AsgzQA3hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBKgeQBJgfBTAOQBTANA8A2IAPAOQAKgpAYgnQArhGBGgkQBGgjBSAGQBSAHA/AvQARAMAOAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QANAOAKAQQARgpAgglQA3hABOgYQBOgXBRAYQBTAYA1A9QAKALAJANQAPhCAwg4QA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQhRAAhIguQgxgfgggtQgGAcgMAaQgiBKhHAvQhIAuhRABQhRAAhIguQg1ghgggxIgEAKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAhQg/AuhSAHQhSAIhGgjQgrgWghgjQgGAWgJAXQgYA3gtApQguAqg5ATQg4ATg+gGQg9gGg0geQg8giglg8QgFARgIARQghBKhIAvQhHAthRABQhRAAhIgtQgsgcgegnIgIAbQgWA6grAsQgsArg7AWQg7AVg9gEQg9gFg3gfQg3gegkgyQgQgUgLgWQgWA4gvAtQg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg1IgEgMQgbAkgoAaQhHAyhSACQhSAChKguQgfgTgYgXQgOA7gpAyQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgrgPQAFATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgBAAQhQAAhIgtg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Egq1AQtQhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hGQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBVQAOBKgWBEQA6gIA9ASIAJACQgRg6AIg+QAMhRA3hAQA4hBBNgXQAZgIAYgCQg4gvgbhIQgdhNAQhMQAOhIAyg6QAyg6BGgZQBFgYBLANQBMAOA4AvQAMAJAKALQAOg1AjgvQAzhFBNgdQBNgdBUATQBVATA5A7QAxAyATBFIATgWQA1g7BJgWQBJgWBOATQBNASA3A2QAjAiAVAtQAPgnAbghQAsg4A+gcQA+gcBHAEQBGAEA7AjQAvAcAhAtQARg+AsgzQA3hABOgYQBOgXBRAYQBSAYA1A9QAOAPALASQANgpAagmQAwhFBKgeQBKgfBTAOQBTANA7A2IAPAOQALgqAYgmQArhGBGgkQBFgjBSAGQBSAHA/AvQARAMAPAOQAMhPA2g/QA4hABNgYQBOgXBSAYQBSAYA1A9QANAOAKAQQASgqAfgkQA4hABNgYQBOgXBSAYQBSAYA1A9QALALAIANQAQhCAvg4QA4hABNgYQBOgXBSAYQBSAYA1A9IAFAGQAEgXAHgWQASg6AqguQApguA4gZQA3gYA+ABQA/ABA2AZQBKAjAtBJQAuBIgBBRQgBBSgwBHQgvBHhKAhQhLAghUgNQhVgOg8g2QgQgPgOgQQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgygfgggtQgGAcgMAaQghBKhIAvQhHAuhRABQhRAAhIguQg1ghghgxIgEAKQghBKhIAvQhHAuhRABQhRAAhIguQgbgRgVgUIgBAGQgJA1gdAwQgdAvgrAhQg/AuhSAHQhSAIhGgjQgsgWghgjQgFAWgKAXQgXA3guApQgtApg5ATQg5ATg9gGQg+gGg0gdQg7gigmg8QgFARgHARQgiBJhHAvQhIAuhQABQhRAAhIguQgsgcgegmIgJAaQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgVgLgWQgXA5gvAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgMQgcAkgnAbQhHAyhTACQhSAChKguQgfgTgYgYQgOA7gpAzQgwA8hFAbQgjAOglAEQARAOAPARQA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EguvARVQhIgugihJQgjhMAMhTQADgaAIgYQgRADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgXBEQA7gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahIQgdhNAPhMQAPhIAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQALAJALALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAjAiAVAtQAPgnAcghQAsg4A+gcQA+gcBGAEQBHAEA6AjQAvAcAiAtQAQg+AsgzQA4hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBJgeQBJgfBTAOQBTANA8A2IAPAOQAKgpAYgnQArhGBGgkQBGgjBSAGQBSAHA/AvQAQAMAPAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAMAOALAQQARgpAgglQA3hABOgYQBOgXBRAYQBTAYA1A9QAKALAJANQAPhCAwg4QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQADgXAHgWQATg6ApguQAqguA3gZQA3gYA/ABQA+ABA3AZQBBAfAsA+QARg2AnguQA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgwgegfgqQgMAkgWAiQgvBHhLAhQhLAghUgNQhUgOg9g2QgQgPgNgQQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgygfgfgtQgGAcgMAaQgiBKhHAvQhIAuhRABQhRAAhIguQg1ghgggxIgEAKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAhQg/AuhSAHQhSAIhGgjQgrgWghgjQgGAWgJAXQgYA3gtApQguApg5ATQg4ATg+gGQg9gGg0geQg7giglg7QgFARgIARQghBJhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grAsQgsArg7AWQg7AVg9gEQg9gFg3gfQg3gegkgyQgQgVgLgWQgWA5gvAtQg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChKguQgfgTgYgYQgPA8goAyQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgsgPQAGATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgypASWQhIgugihJQgjhMAMhTQADgaAIgYQgRADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgXBEQA7gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahIQgdhNAPhNQAPhHAyg6QAyg6BFgZQBFgYBMANQBMAOA4AvQALAJALALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAjAiAVAtQAPgnAcghQAsg4A+gcQA+gcBGAEQBHAEA6AjQAvAcAiAtQAQg+AsgzQA4hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBKgeQBJgfBTAOQBSANA8A2IAPAOQAKgpAYgnQArhGBGgkQBGgjBSAGQBSAHA/AvQAQAMAPAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAMAOALAQQARgpAgglQA3hABOgYQBOgXBRAYQBTAYA1A9QAKALAJANQAPhCAwg4QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQADgXAHgWQATg6ApguQAqguA3gZQA3gYA/ABQA+ABA3AZQBBAfAsA+QARg2AnguQA4hABNgYQBOgXBSAYQBSAYA1A9IAHAHQANhKA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgpgZgcgjQgGAjgPAhQghBKhIAvQhHAuhRABQhRAAhIguQgwgegfgqQgMAkgWAiQgvBHhLAhQhLAghUgNQhUgOg9g2QgQgPgNgQQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgygfgfgtQgGAcgMAaQgiBKhHAvQhIAuhRABQhRAAhIguQg1ghgggxIgEAKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAhQg/AuhSAGQhSAIhGgiQgrgWghgjQgGAWgJAXQgYA2gtApQguAqg5ATQg3ATg+gGQg9gGg0geQg8giglg8QgFARgIARQghBKhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grAsQgsArg7AWQg7AVg9gEQg9gFg3gfQg3gegkgyQgQgVgLgWQgWA5gvAtQg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChKguQgfgTgYgYQgPA8goAyQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgsgPQAGATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg2jATcQhIgugihJQgjhMAMhTQADgaAIgYQgRADgRAAQhSAChKguQhJgugjhLQgeg/AEhIQAFhSAzhGQA0hGBNgcQBNgdBUATQBVAUA5A7QA5A7ARBVQAOBKgXBEQA7gIA8ASIAKACQgSg6AJg+QALhRA4hAQA3hBBOgXQAYgIAZgCQg5gvgahIQgdhNAPhNQAPhIAyg5QAyg6BFgZQBFgYBMANQBMAOA4AvQALAJALALQANg1AjgvQAzhFBNgdQBOgdBUATQBUATA6A7QAxAyATBFIASgWQA2g7BJgWQBJgWBNATQBOASA2A2QAjAiAVAtQAPgnAcghQAsg4A+gcQA+gcBGAEQBHAEA6AjQAvAcAiAtQAQg+AsgzQA4hABNgYQBOgXBSAYQBSAYA1A9QAOAQALARQANgpAbgmQAwhFBKgeQBJgfBTAOQBTANA8A2IAPAOQAKgpAYgnQArhGBFgkQBGgjBSAGQBSAHA/AvQAQAMAPAOQAMhOA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAMAOALAQQARgpAgglQA3hABOgYQBOgXBRAYQBTAYA1A9QAKALAJANQAPhCAwg4QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQADgXAHgWQATg6ApguQAqguA3gZQA3gYA/ABQA+ABA3AZQBBAfAsA+QARg2AnguQA4hABNgYQBOgXBSAYQBSAYA1A9IAHAHQANhKA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9IAFAGQAMhQA3hAQA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgogZgcghQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgpgZgcgjQgGAjgPAhQghBKhIAvQhHAuhRABQhRAAhIguQgwgegfgqQgMAkgWAiQgvBHhLAhQhLAghUgNQhUgOg9g2QgQgPgNgQQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgygfgfgtQgGAcgMAaQgiBKhHAvQhIAuhRABQhRAAhIguQg1ghgggxIgEAKQgiBKhHAvQhIAuhRABQhRAAhIguQgagRgVgUIgBAGQgJA1gdAwQgdAvgsAgQg/AuhSAHQhSAIhGgjQgqgWghgiQgGAVgJAXQgYA3gtApQguAqg5ATQg4ATg+gGQg9gGg0geQg8giglg8QgFARgIARQghBKhIAvQhHAuhRABQhRAAhIguQgtgcgegnIgIAbQgWA7grAsQgsArg7AWQg7AVg9gEQg9gFg3gfQg3gegkgyQgQgVgLgWQgWA5gvAtQg6A2hLARQhKARhMgZQhLgZgzg5QglgqgSg2IgEgMQgbAkgoAbQhHAyhSACQhSAChKguQgfgTgYgYQgPA8goAyQgxA8hEAbQgjAOglAEQARAOAPARQA1A9ANBVQAMBUghBKQgiBKhHAuQhIAvhRAAQguAAgsgPQAGATADAVQAMBUghBKQgiBKhHAuQhIAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Eg6sAT6QhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hGQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBVQAOBLgWBDQA6gIA9ASIAJADQgRg7AIg+QAMhRA3hAQA4hBBNgXQAZgHAZgDQg5gvgbhIQgdhNAQhNQAOhIAyg6QAyg5BGgZQBFgYBLANQBMAOA4AvQAMAKALALQANg1AjgwQAzhFBNgdQBNgdBUATQBVATA5A7QAxAyAUBFIASgWQA1g7BJgWQBJgWBOATQBNASA3A2QAjAiAVAsQAPglAbgiQAsg4A+gcQA+gcBHAEQBGAEA7AjQAvAdAhAsQARg9Asg0QA3hABOgYQBOgXBRAYQBTAYA1A9QAOAQALARQANgpAagmQAwhFBKgeQBKgfBTAOQBTANA7A2IAPAOQALgpAYgnQArhGBGgkQBFgjBSAGQBRAHA/AvQARAMAPAPQAMhPA2hAQA4hABNgYQBOgXBSAYQBSAYA1A9QANAOALAQQARgpAfglQA4hABNgYQBOgXBSAYQBSAYA1A9QALAMAJAMQAPhCAvg4QA4hABNgYQBOgXBSAYQBSAYA1A9IAGAGQADgXAHgWQASg6AqguQApguA4gZQA3gYA+ABQA/ABA2AZQBCAgArA9QARg2AoguQA3hABOgYQBOgXBRAYQBTAYA1A9IAGAIQAOhLA0g9QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQAMhQA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAYAbAQAhQALguAbgqQArhDBLgjQBMgjBOAKQBPAJBBA0QBAA1AaBKQAaBLgSBRQgSBRg4A5Qg4A4hQATQhRAThMgZQgtgPgngeQgmgfgagoQgIgNgHgNQgGAZgLAYQgiBKhHAvQhIAuhRABQhRAAhIguQgngZgcghQgFAngRAlQgiBKhHAvQhIAuhRABQhRAAhIguQgogZgcgiQgGAigPAhQgiBKhHAvQhIAuhRABQhRAAhIguQgvgegfgqQgMAkgXAiQgvBHhKAhQhLAghUgNQhVgOg8g2QgQgPgOgQQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgygfgggtQgGAcgMAaQghBKhIAvQhHAuhRABQhRAAhIguQg1ghgggxIgFAKQghBKhIAvQhHAuhRABQhRAAhIguQgbgQgVgVIgBAGQgJA1gdAwQgdAugrAhQg/AuhRAHQhSAIhGgjQgsgWghgjQgFAWgKAXQgXA3guApQgtAqg5ATQg5ATg9gGQg+gGg0geQg7giglg7QgGARgHAQQgiBKhHAvQhIAuhRABQhRAAhIguQgsgcgegmIgJAaQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgUgLgXQgWA5gwAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgLQgbAjgoAbQhHAyhTACQhSAChKguQgegTgYgYQgPA8gpAyQgwA8hFAbQgjAOglAEQARAOAPARQA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvABgrgPQAFASADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Eg+mAU7QhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hGQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBVQAOBKgWBEQA6gIA9ASIAJACQgRg6AIg+QAMhRA3hAQA4hBBNgXQAZgIAZgCQg5gvgbhIQgdhNAQhNQAOhIAyg6QAyg6BGgYQBFgYBLANQBMAOA4AuQAMAJALALQANg0AjgvQAzhFBNgdQBNgdBUATQBVATA5A7QAxAyAUBEIASgWQA1g6BJgWQBJgWBOATQBNASA3A1QAjAiAVAtQAPgnAbghQAsg3A+gcQA+gcBHAEQBGAEA7AjQAvAcAhAsQARg9AsgzQA3hABOgYQBOgXBRAYQBTAYA1A9QAOAQALARQANgpAagmQAwhFBKgeQBKgfBTAOQBTANA7A2IAPAOQALgpAYgnQArhGBGgkQBFgjBSAGQBSAHA/AvQARAMAPAOQAMhOA2hAQA4hABMgYQBOgXBSAYQBSAYA1A9QANAOALAQQARgpAfglQA4hABNgYQBOgXBSAYQBSAYA1A9QALALAJANQAPhCAvg4QA4hABNgYQBOgXBSAYQBSAYA1A9IAGAGQADgXAHgWQASg6AqguQApguA4gZQA3gYA+ABQA/ABA2AZQBCAfArA+QARg2AoguQA3hABOgYQBOgXBRAYQBTAYA1A9IAGAHQAOhKA0g9QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQAMhQA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAYAbAQAhQALguAbgqQArhDBLgjQBMgjBOAKQBPAJBBA0QAYAUATAWQANhLA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgpgagdgjIgDAPQgSBRg4A5Qg4A4hQATQhRAThMgZQgtgPgngeQgmgfgagoQgIgNgHgOQgGAagLAYQgiBKhHAvQhIAuhRABQhRAAhIguQgngZgcghQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgogZgcgjQgGAjgPAhQgiBKhHAvQhIAuhRABQhRAAhIguQgvgegfgqQgMAkgXAiQgvBHhKAhQhLAghUgNQhVgOg8g2QgQgPgOgQQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgygfgggtQgGAcgMAaQghBKhIAvQhHAuhRABQhRAAhIguQg1ghgggxIgFAKQghBKhIAvQhHAthRABQhRAAhHgtQgbgRgVgUIgBAGQgJA1gdAvQgdAvgrAhQg/AuhSAHQhSAIhGgjQgsgWghgjQgFAWgKAXQgXA3guApQgtAqg5ATQg5ATg9gGQg+gGg0geQg7giglg8QgGARgHARQgiBKhHAvQhIAuhRABQhRAAhIguQgsgcgegnIgJAbQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgVgLgWQgWA5gwAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgMQgbAkgoAbQhHAyhTACQhSAChKguQgegTgYgYQgPA8gpAyQgwA8hFAbQgjAOglAEQARAOAPARQA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EhClAVoQhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hGQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBVQAOBKgWBEQA6gIA9ASIAJACQgRg6AIg+QAMhRA3hAQA4hBBNgXQAZgIAZgCQg5gvgbhIQgdhNAQhNQAOhIAyg6QAyg6BGgZQBFgYBLANQBMAOA4AvQAMAJALALQANg1AjguQAzhFBNgdQBNgdBUATQBVATA5A7QAxAxAUBFIASgWQA1g7BJgVQBJgWBOATQBNASA3A1QAjAiAVAtQAPgnAbghQAsg4A+gbQA+gcBHAEQBGAEA7AjQAvAbAhAtQARg+AsgyQA3hABOgYQBOgXBRAYQBTAYA1A9QAOAQALARQANgpAagmQAwhFBKgeQBKgfBTAOQBTANA7A2IAPAOQALgpAYgnQArhGBGgkQBFgjBSAGQBSAHA/AvQARAMAPAOQAMhOA2hAQA4hABNgYQBOgXBSAYQBRAYA1A9QANAOALAQQARgpAfglQA4hABNgYQBOgXBSAYQBSAYA1A9QALALAJANQAPhCAvg4QA4hABNgYQBOgXBSAYQBSAYA1A9IAGAGQADgXAHgWQASg6AqguQApguA4gZQA3gYA+ABQA/ABA2AZQBCAfArA+QARg2AoguQA3hABOgYQBOgXBRAYQBTAYA1A9IAGAHQAOhKA0g9QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQAMhQA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAYAbAQAhQALguAbgqQArhDBLgjQBMgjBOAKQBPAJBBA0QAYAUATAWQANhLA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9QAMANAJAOQAQg/Atg0QA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgzgggggvQgGAYgLAXQghBKhIAvQhHAuhRABQhRAAhIguQgpgagdgjIgDAPQgSBRg4A5Qg4A4hQATQhRAThMgZQgtgPgngeQgmgfgagoQgIgNgHgOQgGAagLAYQgiBKhHAvQhIAuhRABQhRAAhIguQgngZgcghQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgogZgcgjQgGAjgPAhQgiBKhHAvQhIAuhRABQhRAAhIguQgvgegfgqQgMAkgXAiQgvBHhKAhQhLAghUgNQhVgOg8g2QgQgPgOgQQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgygfgggtQgGAcgMAaQghBKhIAvQhHAthRABQhRAAhIgtQg1ghgggxIgFAKQghBKhIAuQhGAuhRABQhRAAhIguQgbgQgVgUIgBAGQgJA0gdAwQgdAvgrAhQg/AuhSAHQhSAIhGgjQgsgWghgjQgFAWgKAXQgXA3guApQgtAqg5ATQg5ATg9gGQg+gGg0geQg7giglg8QgGARgHARQgiBKhHAvQhIAuhRABQhRAAhIguQgsgcgegnIgJAbQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgVgLgWQgWA5gwAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgMQgbAkgoAbQhHAyhTACQhSAChKguQgegTgYgYQgPA8gpAyQgwA8hFAbQgjAOglAEQARAOAPARQA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EhGaAWkQhIgugihJQgjhMALhTQAEgaAIgYQgRADgSAAQhSAChJguQhKgugjhLQgdg/AEhIQAEhSA0hGQAzhGBNgcQBOgdBUATQBUAUA6A7QA5A7AQBVQAOBKgWBEQA6gIA9ASIAJACQgRg6AIg+QAMhRA3hAQA4hBBNgXQAZgIAZgCQg5gvgbhIQgdhNAQhNQAOhIAyg6QAyg6BGgZQBFgYBLANQBMAOA4AvQAMAJALALQANg1AjgvQAzhEBNgdQBNgdBUATQBVATA5A6QAxAyAUBFIASgWQA1g7BJgWQBJgWBOATQBNASA3A2QAjAiAVAtQAPgnAbghQAsg4A+gcQA+gcBHAEQBGAEA7AjQAvAcAhAtQARg+AsgzQA3g/BOgYQBOgXBRAYQBTAYA1A8QAOAQALARQANgpAaglQAwhFBKgeQBKgfBTAOQBTANA7A2IAPAOQALgpAYgnQArhGBGgkQBFgjBSAGQBSAHA/AvQARAMAPAOQAMhOA2hAQA4hABNgYQBOgXBSAYQBSAYA1A9QANAOALAQQARgpAfglQA4hABMgYQBOgXBSAYQBSAYA1A9QALALAJANQAPhCAvg4QA4hABNgYQBOgXBSAYQBSAYA1A9IAGAGQADgXAHgWQASg6AqguQApguA4gZQA3gYA+ABQA/ABA2AZQBCAfArA+QARg2AoguQA3hABOgYQBOgXBRAYQBTAYA1A9IAGAHQAOhKA0g9QA3hABOgYQBOgXBRAYQBTAYA1A9IAFAGQAMhQA3hAQA3hABOgYQBOgXBRAYQBTAYA1A9QAYAbAQAhQALguAbgqQArhDBLgjQBMgjBOAKQBPAJBBA0QAYAUATAWQANhLA0g9QA4hABNgYQBOgXBSAYQBSAYA1A9QAMANAJAOQAQg/Atg0QA4hABNgYQBOgXBSAYQBSAYA1A9IABAAQAPhAAug2QA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgkgXgagdQgHAagLAYQghBKhIAvQhHAuhRABQhRAAhIguQgzgggggvQgGAYgLAXQghBKhIAvQhHAuhRABQhRAAhIguQgpgagdgjIgDAPQgSBRg4A5Qg4A4hQATQhRAThMgZQgtgPgngeQgmgfgagoQgIgNgHgOQgGAagLAYQgiBKhHAvQhIAuhRABQhRAAhIguQgngZgcghQgGAngQAlQgiBKhHAvQhIAuhRABQhRAAhIguQgogZgcgjQgGAjgPAhQgiBKhHAvQhIAuhRABQhRAAhIguQgvgegfgqQgMAkgXAiQgvBHhKAhQhLAghUgNQhVgOg8g2QgQgPgOgQQgFAngRAlQghBKhIAvQhHAuhRABQhRAAhIguQgygfgggtQgGAcgMAaQghBKhIAuQhHAuhRABQhRAAhHguQg1gggggxIgFAKQghBJhIAvQhHAuhRABQhRAAhIguQgbgRgVgUIgBAGQgJA1gdAwQgdAvgrAhQg/AuhSAHQhSAIhGgjQgsgWghgjQgFAWgKAXQgXA3guApQgtAqg5ATQg5ATg9gGQg+gGg0geQg7giglg8QgGARgHARQgiBKhHAvQhIAuhRABQhRAAhIguQgsgcgegnIgJAbQgWA7grAsQgrArg7AWQg8AVg9gEQg9gFg3gfQg3gegkgyQgPgVgLgWQgWA5gwAtQg6A2hKARQhKARhMgZQhMgZgyg5QgmgqgSg2IgDgMQgbAkgoAbQhHAyhTACQhSAChKguQgegTgYgYQgPA8gpAyQgwA8hFAbQgjAOglAEQARAOAPARQA2A9AMBVQANBUgiBKQghBKhIAuQhHAvhRAAQgvAAgrgPQAFATADAVQANBUgiBKQghBKhIAuQhHAvhRAAIgCAAQhQAAhHgtg");
	var mask_1_graphics_78 = new cjs.Graphics().p("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");
	var mask_1_graphics_79 = new cjs.Graphics().p("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");
	var mask_1_graphics_80 = new cjs.Graphics().p("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");
	var mask_1_graphics_81 = new cjs.Graphics().p("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");
	var mask_1_graphics_82 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(57).to({graphics:mask_1_graphics_57,x:156.7,y:256.9}).wait(1).to({graphics:mask_1_graphics_58,x:172.2,y:275.4}).wait(1).to({graphics:mask_1_graphics_59,x:190.2,y:275.4}).wait(1).to({graphics:mask_1_graphics_60,x:197.8,y:251.4}).wait(1).to({graphics:mask_1_graphics_61,x:221.7,y:244.8}).wait(1).to({graphics:mask_1_graphics_62,x:246.8,y:244.8}).wait(1).to({graphics:mask_1_graphics_63,x:272.8,y:244.8}).wait(1).to({graphics:mask_1_graphics_64,x:297.7,y:243.3}).wait(1).to({graphics:mask_1_graphics_65,x:323.3,y:239.9}).wait(1).to({graphics:mask_1_graphics_66,x:347.3,y:233.3}).wait(1).to({graphics:mask_1_graphics_67,x:371.3,y:225.3}).wait(1).to({graphics:mask_1_graphics_68,x:396.3,y:222.8}).wait(1).to({graphics:mask_1_graphics_69,x:421.8,y:217.8}).wait(1).to({graphics:mask_1_graphics_70,x:446.8,y:210.8}).wait(1).to({graphics:mask_1_graphics_71,x:471.8,y:206.8}).wait(1).to({graphics:mask_1_graphics_72,x:496.8,y:200.3}).wait(1).to({graphics:mask_1_graphics_73,x:521.8,y:193.3}).wait(1).to({graphics:mask_1_graphics_74,x:548.3,y:190.3}).wait(1).to({graphics:mask_1_graphics_75,x:573.3,y:183.8}).wait(1).to({graphics:mask_1_graphics_76,x:598.8,y:179.3}).wait(1).to({graphics:mask_1_graphics_77,x:623.3,y:173.3}).wait(1).to({graphics:mask_1_graphics_78,x:647.9,y:168.3}).wait(1).to({graphics:mask_1_graphics_79,x:672.9,y:165.3}).wait(1).to({graphics:mask_1_graphics_80,x:694.8,y:162.3}).wait(1).to({graphics:mask_1_graphics_81,x:713.3,y:162.3}).wait(1).to({graphics:mask_1_graphics_82,x:721.3,y:150.3}).wait(7).to({graphics:null,x:0,y:0}).wait(90));

	// Layer 7
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("ArfHZQgFgBgCgEQgDgEAAgEQABgFAEgDQAEgDAFABIAFABIAEAAQAKAAAIgFQAJgEAFgIQACgEAFgBQAFgBAEACQAEADABAFQABAFgDAEQgIANgOAHQgNAHgQAAgAsaHQIg8gIQgFgBgCgEQgDgEAAgFQABgEAEgDQAEgDAFABIA7AIQAFABADAEQADAEgBAEQgBAFgDADQgDACgFAAgAqaGKQgFgBgCgEQgDgEACgFIAPg6QABgFAFgCQAEgDAFACQAEABADAEQACAEgBAFIgQA6QgBAEgDACQgDADgEAAgAp6EWQgEgBgCgEQgDgFACgEQAKgfAKgbQACgEAFgCQAEgCAFACQAEABACAFQACAEgCAFQgIATgMAlQgBAEgDACQgDACgEAAIgEgBgApOCmQgFgCgBgFQgCgEADgFQALgVANgSIAJgNQADgDAFgBQAFgBAEADQAEADAAAFQABAFgDADIgJANQgMAQgLAUQgDAGgHAAIgFgBgAoLBCQgEgCAAgFQgBgFADgEIAlgwQADgCAEgBQAFgBAEACQAEADAAAFQABAFgDADIgkAwQgEAFgGAAQgEAAgDgDgAnCgcQgDgDgBgFQgBgEADgEIAlgwQADgEAFgBQAFAAADADQAEADABAEQAAAFgDAEIgkAwQgEAEgGAAQgDAAgEgCgAl4h7QgEgEgBgEQAAgFADgEIAlgwQADgDAEgBQAFgBAEADQAEADAAAFQABAFgDAEIglAvQgDAFgGAAQgEAAgDgCgAkvjbQgDgDgBgFQgBgEADgEIAlgwQADgDAFgBQAFgBAEADQAEADAAAFQABAFgDAEIglAvQgEAFgFAAQgFAAgDgDgAMIkFIgBAAIgPgLQgEgDgBgFQgBgFADgEQADgDAEgBQAFgBAEADIAPAKQAGAEAIAAQAHAAAGgDQAFgCAEABQAFABACAFQADAEgCAFQgBAEgEACQgMAHgNAAQgOAAgMgIgANUkyQgEgDAAgFQgBgEADgEIAAAAIAPARQgDABgDAAQgEAAgDgCgALGkzIgxgiQgEgDgBgFQgBgFADgDQADgEAFgBQAEgBAEACIAyAjQAEADABAFQAAAEgCAEQgEAFgGAAQgEAAgDgCgAjlk6QgEgDAAgFQgBgEADgEIAlgwQADgEAFAAQAFgBADADQAEADABAFQABAEgDAEIglAwQgEAFgGAAQgEAAgDgDgAJkl4IgxgiQgEgCgBgFQgBgFACgEQADgEAFgBQAFgBAEACIAxAjQAEADABAFQABAEgDAEQgDAFgGAAQgEAAgDgCgAiXmVQgCgFABgEQACgFAEgCQASgJASgCIAbgCQAFgBAEADQADAEABAEQAAAFgDAEQgDAEgFAAIgbACQgNABgOAIIgFABQgHAAgEgGgAgWmgQgFAAgDgDQgDgDgBgFQAAgEADgEQADgEAFAAIA7gFQAFAAADADQAEADAAAFQABAEgDAEQgDAEgFAAIg7AFgABhmqQgFAAgDgDQgDgDgBgEQAAgFADgEQADgEAFAAIA8gFQAFAAADADQAEADAAAFQABAFgDADQgEAEgEAAIg8AFgAH/myQgbgJgdgEQgFgBgDgEQgDgEABgEQABgFADgDQAEgDAFABQAgAEAdAKQAEABADAEQACAFgCAFQgBADgDACQgDADgEAAIgEgBgADZm0QgFAAgDgDQgEgDAAgEQAAgFADgEQADgDAFgBIA8gFQAFAAADADQAEADAAAFQABAFgEADQgDAEgFABIg7AEgAFQm9QgEAAgDgDQgEgEAAgEQgBgFAEgEQADgDAEgBIA9gEQAFgBADAEQAEADAAAFQAAAFgDADQgDAEgFAAIg8AFg");
	this.shape_123.setTransform(265.9,242.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAsA6IhLgLIgmhDQgFgJADgKQADgKAJgFQAJgFAKADQAKADAFAJIAZAtIAzAIQALABAGAIQAGAJgBAKQgCAJgHAGQgHAGgJAAg");
	this.shape_124.setTransform(172.4,284.5,0.468,0.468);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AADA2Ig0hfQAYgKAUgOIA0BeQAFAJgDAKQgDAKgJAFQgFADgHAAQgOAAgIgMg");
	this.shape_125.setTransform(166,275.7,0.468,0.468);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AupGAQgDgDABgFQAAgFAFgDQADgDAFABIACABQgHAJgGAKIAAgCgAvqFjIAQACQAGABACAEQADAEgBAEQAAAEgDADIgBAAIgWgWgAoagjIAKgJIgNANQABgDACgBgANjiZQgFgBgDgEQgDgEABgFQABgFAEgCQAFgCAEAAQAJACAJgDQAJgDAHgHIADgDIADgEQADgEAFgBQAFAAADACQAEADABAFQABAEgDAFIgIAKQgLALgPAFQgJACgIAAIgMgBgAMqi2Ig1gdQgEgDgBgEQgCgFADgEQACgFAFgBQAFgBAEACIA0AeQAFACABAEQABAGgCADIgCADQgDADgEAAIgCABQgDAAgCgCgAO1jiQgEgDgBgFQAAgFADgDIAjgxQADgEAFgBQAFAAADACQAEADABAFQABAFgDAEIgjAwIgBABQgEADgEABIgCAAQgDAAgDgCgALAjvQgigRgUgIQgEgCgCgEQgCgFACgEQACgFAFgBQAEgCAFABIA3AaQAFACABAFQABAEgCAFIgCADQgDACgDABIgCAAIgGgBgAJTkcQgWgGgTgEIgQgCQgFAAgCgEQgEgEABgFQABgFAEgDQAEgCAEAAIAQACQAWADAXAHQAFACACAEQACAEgBAFQAAABgBAAQAAABAAABQgBAAAAAAQAAABgBAAQgEAEgEAAIgEAAgAHekvIg7gIQgFAAgDgEQgDgEABgFQAAgFAEgCQAEgDAEAAIA9AHQAEABADAEQADAEgBAEQAAAFgCACQgEAEgFAAIgCAAgAFnk+Ig8gHQgEgBgEgEQgDgDABgFQAAgFAEgDQAFgDAEAAIA8AIQAFAAADAEQACAEAAAFQgBAEgCADQgEADgEAAIgCAAgADvlMIg8gHQgFgBgCgEQgDgEAAgFQABgEAEgDQADgDAFAAIA8AIQAFAAADAEQADADgBAFQAAAFgCACQgEAEgFAAIgCAAgAB4lbIg8gGQgFgBgDgEQgDgDABgFQABgFADgEQAEgCAFAAIA7AHQAFABAEADQACAEAAAFQAAAEgDADQgEADgEAAIgCAAgAAAloIgEgBQAAgMgDgMIAKABQAFABADAEQACADAAAFQAAAEgDADQgDAEgFAAIgCAAg");
	this.shape_126.setTransform(1183,59.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAsA6IhLgLIgmhDQgFgJADgKQADgKAJgFQAJgFAKADQAKADAFAJIAZAtIAzAIQALABAGAIQAGAJgBAKQgCAJgHAGQgHAGgJAAg");
	this.shape_127.setTransform(1286.1,23.1,0.467,0.467,0,-45.6,134.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AADA2Ig0hfQAYgKAUgOIA0BeQAFAJgDAKQgDAKgJAFQgFADgHAAQgOAAgIgMg");
	this.shape_128.setTransform(1284.2,12.4,0.467,0.467,0,-45.6,134.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#E08963","#E57358","#F13C3C"],[0,0.271,1],32.3,-130.8,-512.6,424.8).s().p("AyWI9QAGgCAGAAIgCADIgKgBgAN4BMQgrgfg7ghQh2hAhXgOQhFgLimgWQgBgWgEgUQAIgIgFgPQgCgGgFgFQC2AYBKALQBPANBkAwQBBAgBBArIB+ijIgQg3QgmADgjgNQgkgMgcgcQg0gzgBhJQAAhIAzg1QAzgzBJgBQBJAAA0AyQAzAzABBJQAABJgyAzQgTATgWAMIAXBKQACAJgBAJQgCAIgGAHIijDRQgJAKgPABIgCAAQgNAAgJgHgAPlnyQgqAAgcAeQgeAeABApQAAAqAeAeQARARAYAHQAXAHAYgEQALgCALgFQASgHAPgPQAcgdgBgqQAAgrgdgdQgdgcgqAAIgBAAg");
	this.shape_129.setTransform(1180.8,40);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFCC00").ss(7,1,1).p("EhCHAN7MCEPgb1");
	this.shape_130.setTransform(776.8,119);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#E08963","#E57358","#F13C3C"],[0,0.271,1],-527.3,36.6,250.9,36.6).s().p("AgGAAIgKgJQARAJAQAKQgOgDgJgHg");
	this.shape_131.setTransform(1047.6,84);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#E08963","#E57358","#F13C3C"],[0,0.271,1],-264.5,-7.4,513.7,-7.4).s().p("EgkyAUUQgIgCgIgEQgHgFgFgIIglhEQgYAHgaAAQhIAAg0gzQgzg0gBhJQABhIAzgzQA0g0BIAAQBJAAAzA0QA0AyAABJQAAAngRAkQgPAhgdAZIAdAzIDMAXQAPhMAYhGQAjhoAuhCQA2hLCcjQICfjUQAPgWAVgTQAlgfAqgCQA4gBG2gnIABAAIAZgBQAdABAcAEQBYALA0AnIBkBKQACAwADAxIiVhvQgmgbhFgKQgggDgiABQm+AngzABQgRABgSAQQgNAMgHALIgCADIiZDLQihDXg3BNQgzBIgkCBQgSBCgHAzQgCAOgLAJQgLAKgNgBgEgnsAPNQgeAeAAApQAAAqAeAdQAdAeAqABQAVAAASgIQALgFAJgHQATgNAMgWQALgWAAgZQAAgqgdgdQgegdgqgBQgqABgdAdgEAo8gG4IgKgJQATAJAQAMQgNgEgMgIgAZZ0wIAFADIAAAFIgFgIg");
	this.shape_132.setTransform(406.9,160);

	var maskedShapeInstanceList = [this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},57).to({state:[]},32).wait(90));

	// Layer 5
	this.instance_10 = new lib.Symbol12("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1315.6,-21.6,1,1,0,0,0,51.3,72.5);
	this.instance_10.alpha = 0.539;

	this.instance_11 = new lib.Symbol13("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(249.4,-21.5,1,1,0,0,0,51.3,72.5);
	this.instance_11.alpha = 0.539;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#97CCDF").ss(7,1,1).p("EhS0AAAMClpAAA");
	this.shape_133.setTransform(782.3,49);

	this.instance_12 = new lib.Symbol21("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(177.3,266.6,0.219,0.219,0,0,0,51.3,145.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.Symbol7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(463.9,137.8,1,1,0,0,0,78.2,67.8);

	this.instance_14 = new lib.Symbol10("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(599.9,39,1,1,0,0,0,22,22);

	this.instance_15 = new lib.Symbol8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(885.2,44.4,1,1,0,0,0,69.8,57.8);

	this.instance_16 = new lib.Symbol11("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(1217.8,34.8,1,1,0,0,0,22.1,22.1);

	this.instance_17 = new lib.Symbol9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1401.5,51.9,1,1,0,0,0,88.5,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.instance_11,p:{x:249.4,y:-21.5,alpha:0.539}},{t:this.instance_10,p:{x:1315.6,y:-21.6,alpha:0.539}}]}).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13}]},11).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13},{t:this.instance_14}]},2).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15}]},8).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16}]},5).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},2).to({state:[{t:this.instance_11,p:{x:177.3,y:193.6,alpha:1}},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16},{t:this.instance_17},{t:this.instance_10,p:{x:1335.5,y:-98.5,alpha:1}}]},1).to({state:[]},8).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({_off:true},11).wait(157));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("AiTDxQhKgugjhKQgehCADhFQAEhSA0hGQAzhGBNgeQBNgdBTATQBVATA5A7QA6A7ARBVQARBUgfBMQgfBMhHAyQhIAyhSACIgIAAQhNAAhGgrg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AADE8QhFgqgkhFQgTADgUABQhSAChKgtQhKgugjhKQgehBADhGQAEhSA0hGQAzhGBNgeQBNgdBUATQBVATA4A7QAfAfASAmQA1gJA3AMQBVATA6A7QA6A6ARBUQARBVgfBMQgfBNhHAxQhHAyhSADIgJAAQhNAAhGgrg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AiDGcQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhRA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAUAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQBNAFA/ApQBNA0AgBXQAQArABAtQACAugNArQgUBFg0A0Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhMAAhGgqg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AkoJLQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhFBNgdQBNgdBUATQBVASA5A7QAfAeASAmQAVgDAVAAQgIgjACgkQADhKArhCQAqhBBDgiQBBgiBPAEQATABASAEQgOg3AIg4QAMhQA3hBQA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQgdAAgbgGQAHAeABAfQACAtgNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhGAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AodKMQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgcQBNgdBUATQBVARA5A7QAfAfASAmQAVgDAVAAQgIgjACglQADhJArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg3AIg4QAMhQA3hBQA3hABNgYQBOgXBSAYQBRAXA1A8QAPhFAwg5QA4hABNgYQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAthRABQgdAAgbgFQAHAdABAfQACAugNArQgUBFg0A1Qg9A8hXAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AsIKMQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgcQBNgdBUATQBVARA5A7QAfAfASAmQAVgDAVAAQgIgjACglQADhJArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg3AIg4QAMhQA3hBQA4hABNgYQBOgXBRAYQBRAXA1A8QAPhFAwg5QA4hABNgYQBOgXBSAYQBSAYA1A9QAmArASA3QAzg1BEgVQBOgXBSAYQBSAYA1A9QA2A9AMBUQANBUgiBKQghBKhIAvQhHAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAthQABQgdAAgbgFQAHAdABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AvGLmQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhABDgiQBCgiBPAEQATABASAEQgOg2AIg5QAMhQA3hBQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAwg5QA4hABNgYQBOgXBSAYQBSAYA1A9QAmArASA3QAzg1BEgVQBOgXBSAYIATAGQgDgfAEggQALhQA4hBQA3hBBOgYQBNgXBTAYQBSAXA1A9QA2A9AMBUQANBVghBKQghBKhIAuQhHAvhRABQg0AAgxgTQAHBLgeBCQghBKhIAuQhHAuhRABQhRAAhIguQhIgsgihKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBJhHAvQhHAuhRABQgdAAgbgGQAHAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AxcOfQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg3AIg3QAMhQA3hBQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAxg5QA4hABMgYQBOgXBSAYQBSAYA1A9QAmArARA3QA0g1BEgVQBOgXBSAYIASAGQgCgfAEggQALhQA4hBQA3hBBOgYQA3gQA5AHQgVg+AKhCQALhQA4hBQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQgQAAgQgCQAHAWADAXQANBVghBKQghBKhIAuQhHAvhRABQg0AAgxgTQAHBKgeBCQghBKhIAvQhHAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhHguQgjgWgagcQgGAegNAcQghBKhIAvQhHAuhRABQgdAAgcgGQAIAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Az8Q6QhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg3AIg4QAMhQA3hAQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAxg5QA4hABNgYQBOgXBRAYQBSAYA1A9QAmArARA3QA0g1BEgVQBOgXBSAYIASAGQgCgfAEggQALhQA4hBQA3hBBOgYQA3gQA5AHQgVg+AKhCQALhQA4hBQA3hABOgYQA6gRA8AJQgDgiAFgjQALhQA4hBQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQgUAAgUgDQAJBNgfBEQgiBKhHAvQhIAuhRABQgQAAgQgCQAHAWADAXQANBVghBKQghBJhIAuQhHAvhRABQg0AAgxgTQAHBLgeBCQghBKhIAvQhHAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgaARQhHAuhQABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAuhRABQgdAAgcgGQAIAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A3JTaQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg3AIg4QAMhQA3hBQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAxg4QA4hABNgYQBOgXBSAYQBSAYA1A9QAlAqARA3QA0g1BEgVQBOgWBSAXIASAGQgCgeAEggQALhQA4hBQA3hBBOgYQA3gQA5AHQgVg+AKhCQALhQA4hBQA3hABOgYQA6gRA8AJQgDgiAFgjQALhQA4hBQA3hABOgYQBOgXBRAYQAeAJAbANQgOg2AIg4QALhQA4hBQA3hABOgYQBOgXBRAYQBTAYA1A9QA1A9ANBUQAMBUghBKQgiBKhHAvQhIAuhRABQhIAAhBglIAGAfQAMBUghBKQgiBKhHAvQhIAuhRABQgUAAgUgDQAJBNgfBEQgiBKhHAvQhIAuhRABQgQAAgQgCQAHAWADAXQANBUghBKQghBKhIAuQhHAvhRABQg0AAgxgTQAHBLgeBCQghBKhIAvQhHAuhRABQhRAAhIguQhIgtghhKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAuhRABQgdAAgcgGQAIAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A50WdQhGgrgjhEQgTADgUAAQhTADhKguQhJgtgkhLQgehCAEhGQAEhSAzhGQAzhGBNgdQBNgdBVATQBUASA6A7QAeAfATAmQAVgDAVAAQgIgjABglQAEhKAqhCQArhBBCgiQBDgiBOAEQAUACASADQgOg2AIg5QALhQA4hBQA3hABOgYQBOgXBRAYQBSAYA0A7QAPhFAxg5QA3hABOgYQBOgXBRAYQBTAYA1A9QAmArARA3QAzg1BFgVQBNgXBRAYIATAGQgDgfAFggQALhQA3hBQA4hABNgYQA3gQA5AHQgUg+AJhCQAMhQA3hBQA4hABNgYQA7gRA8AJQgEgiAFgjQAMhQA3hBQA4hABNgYQBOgXBSAYQAeAJAaAOQgOg2AIg5QAMhQA3hBQA4hABNgYQBOgXBSAYIAIADQgghBADhHQADhLArhBQAqhCBDgiQBCgiBPAFQBNAEA/AqQBNAzAgBYQAQAqABAuQACAugNArQgUBFg0A0Qg9A8hYARQhHANhAgUQARAlAGAqQANBUgiBKQghBKhIAvQhHAuhRABQhJAAhBgkIAGAeQANBUgiBKQghBKhIAvQhHAuhRABQgUAAgUgDQAIBNgfBEQghBJhIAvQhHAuhRABQgQAAgQgCQAGAWAEAXQANBVgiBKQghBKhHAuQhIAvhRABQg0ABgwgTQAHBKgeBCQgiBKhHAvQhIAuhRABQhQAAhIguQhIgtgihKQgGgOgFgPQgVAUgaARQhIAuhRABQhRAAhIguQgigVgagdQgGAegNAcQgiBKhHAvQhIAuhRABQgcAAgcgGQAIAeABAfQABAugNArQgTBFg1A1Qg8A8hZAQQgWAFgWAAIAAAEQARBVgfBMQgfBMhGAyQhHAyhTACIgIABQhOAAhGgrg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A8bXTQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg2AIg5QAMhQA3hBQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAxg5QA4hABNgYQBOgXBSAYQBSAYA1A9QAmArARA3QA0g1BEgVQBOgXBSAYIASAGQgCgfAEggQALhQA3hBQA3hBBOgXQA2gQA6AHQgVg+AKhCQALhQA4hBQA3hABOgYQA6gRA8AJQgDgiAFgjQALhQA4hBQA3hABOgYQBOgXBRAYQAeAJAbANQgPg2AJg4QALhQA4hBQA3hABOgYQBOgXBRAYIAIACQgghAADhHQAEhLAqhBQAqhCBDgiQBDgiBOAFQAtACAnAPIAGgHQAyhGBMgdQBEgaBGAJQBDAJA2AkQA8AnAiBDQAjBCgCBHQgCBIglBBQgmBAg+AlQg9AlhLACQg6ACgzgUQgPAWgUAUQg8A8hZARQhHAMg/gTQAQAlAHAqQAMBUghBKQgiBKhHAvQhIAuhRABQhIAAhBglIAGAfQAMBUghBKQgiBKhHAvQhIAuhRABQgUAAgUgDQAJBNgfBEQgiBJhHAvQhIAuhRABQgQAAgQgCQAHAWADAXQANBVghBKQghBKhIAuQhHAvhRABQg0AAgxgTQAHBLgeBCQghBKhIAvQhGAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAuhRABQgdAAgcgGQAIAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A/wXTQhGgrgjhFQgUAEgTAAQhTADhKguQhJgtgkhLQgehCAEhGQAEhSAzhGQAzhGBNgdQBNgdBVATQBUASA6A7QAeAfATAmQAUgDAVAAQgHgjABglQAEhKAqhCQArhBBCgiQBDgiBOAEQATABATAEQgPg2AJg5QALhQA4hBQA3hABOgYQBOgXBRAYQBRAXA1A8QAPhFAxg5QA3hABOgYQBOgXBRAYQBTAYA1A9QAlArASA3QAzg1BFgVQBOgXBRAYIATAGQgDgfAFggQALhQA3hBQA4hBBNgXQA2gQA5AHQgUg+AJhCQAMhQA3hBQA4hABNgYQA6gRA9AJQgEgiAFgjQAMhQA3hBQA4hABNgYQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhQA3hBQA4hABNgYQBOgXBSAYIAHACQgghAAEhHQADhLArhBQAqhCBDgiQBCgiBPAFQAsACAoAPIAFgHQAzhGBMgdQBDgaBGAJQBDAJA2AkQAqAbAeAqQAXgWAbgQQA8gkBIgEQBJgDA/AdQApAUAiAgQAiAhAVAoQAWApAHAvQAIAugIAtQgIAxgZAsQgYArgmAhQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgqQgNgOgMgQQgXAWgbARQg+AlhKACQg6ACg0gUQgPAWgTAUQg9A8hYARQhHAMhAgTQARAlAGAqQANBUgiBKQghBKhIAvQhHAuhRABQhJAAhBglIAGAfQANBUgiBKQghBKhIAvQhHAuhRABQgVAAgTgDQAIBNgfBEQghBJhIAvQhHAuhRABQgRAAgQgCQAHAWAEAXQANBVgiBKQghBKhHAuQhIAvhRABQg0AAgvgTQAHBLgeBCQgiBKhHAvQhIAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgZARQhIAuhRABQhRAAhIguQgjgWgZgcQgHAegMAcQgiBKhHAvQhIAuhRABQgdAAgbgGQAIAeABAfQABAugNArQgTBFg1A1Qg8A8hZAQQgXAEgWABIABAEQARBVgfBMQgfBMhGAyQhHAyhTACIgIAAQhOAAhGgqg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Egj5AXTQhFgrgkhFQgTAEgUAAQhTADhKguQhJgtgkhLQgehCAEhGQAEhSAzhGQAzhGBNgdQBNgdBVATQBUASA6A7QAeAfATAmQAVgDAVAAQgIgjABglQAEhKAqhCQArhBBCgiQBDgiBOAEQAUABASAEQgOg2AIg5QALhQA4hBQA3hABOgYQBOgXBRAYQBSAXA0A8QAPhFAxg5QA3hABOgYQBOgXBRAYQBTAYA1A9QAmArARA3QAzg1BFgVQBOgXBRAYIATAGQgCgfAEggQALhQA3hBQA4hBBNgXQA3gQA5AHQgUg+AJhCQAMhQA3hBQA4hABMgYQA7gRA8AJQgEgiAFgjQAMhQA3hBQA4hABNgYQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhQA3hBQA4hABNgYQBOgXBSAYIAIACQgghAADhHQADhLArhBQAqhCBDgiQBCgiBPAFQAtACAnAPIAFgHQAzhGBMgdQBDgaBGAJQBDAJA2AkQArAbAdAqQAXgWAbgQQA8gkBIgEQBJgDA/AdQApAUAiAgQAiAhAVAoIAIAQQAQgwAigrQA2hCBNgaQBNgaBSAVQBTAVA4A8QA3A7APBUQAPBUgfBLQgeBLhHAxQhGAwhRADQhRADhJgrQhKgsgkhIIgFgMQgJAcgPAaQgYArgmAhQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgqQgNgOgMgQQgWAWgcARQg+AlhKACQg6ACgzgUQgPAWgUAUQg9A8hYARQhHAMhAgTQARAlAGAqQANBUgiBKQghBKhIAvQhHAuhRABQhIAAhCglIAGAfQANBUgiBKQghBKhIAvQhHAuhRABQgUAAgUgDQAIBNgfBEQghBJhIAvQhHAuhRABQgQAAgQgCQAGAWAEAXQANBVgiBKQghBKhGAuQhIAvhRABQg0AAgwgTQAHBLgeBCQgiBKhHAvQhIAuhRABQhRAAhIguQhIgtgihKQgGgPgFgPQgVAVgaARQhIAuhRABQhRAAhIguQgigWgagcQgGAegNAcQgiBKhHAvQhIAuhRABQgcAAgcgGQAIAeABAfQABAugNArQgTBFg1A1Qg8A8hZAQQgWAEgWABIAAAEQARBVgfBMQgfBMhGAyQhHAyhTACIgIAAQhNAAhHgqg");
	var mask_2_graphics_27 = new cjs.Graphics().p("Egn3AXTQhGgrgkhFQgTAEgUAAQhSADhKguQhKgtgjhLQgehCADhGQAEhSA0hGQAzhGBNgdQBNgdBUATQBVASA5A7QAeAfATAmQAVgDAVAAQgIgjACglQADhKArhCQAqhBBDgiQBCgiBPAEQATABASAEQgOg2AIg5QAMhQA3hBQA4hABNgYQBOgXBSAYQBRAXA1A8QAOhFAxg5QA4hABNgYQBOgXBSAYQBSAYA1A9QAmArARA3QA0g1BEgVQBOgXBSAYIASAGQgCgfAEggQALhQA4hBQA3hBBOgXQA2gQA6AHQgVg+AKhCQALhQA4hBQA3hABOgYQA6gRA8AJQgEgiAGgjQALhQA4hBQA3hABNgYQBOgXBRAYQAeAJAbANQgPg2AJg4QALhQA4hBQA3hABOgYQBOgXBRAYIAIACQgghAADhHQAEhLAqhBQAqhCBDgiQBDgiBOAFQAtACAnAPIAGgHQAyhGBMgdQBEgaBGAJQBDAJA2AkQAqAbAeAqQAWgWAcgQQA7gkBJgEQBIgDA/AdQAqAUAiAgQAhAhAWAoIAIAQQAPgwAjgrQA1hCBNgaQBNgaBTAVQBTAVA3A8QAmAoATA0QAIgOALgOQAzhGBOgcQBNgcBVAUQBUAUA5A7QA5A8APBVQAQBVggBMQggBMhHAxQhIAwhSACQhTABhJguQhJgvgihLIgHgOQgeA0g1AlQhGAwhRADQhRADhKgrQhJgsglhIIgFgMQgJAcgOAaQgZArglAhQgmAggvASQgvASgxABQg6ABg4gXQg3gXgogqQgOgOgLgQQgXAWgcARQg9AlhLACQg6ACgzgUQgPAWgUAUQg8A8hZARQhHAMg/gTQAQAlAHAqQAMBUghBKQgiBKhHAvQhIAuhRABQhIAAhBglIAGAfQAMBUghBKQgiBKhHAvQhIAuhRABQgUAAgUgDQAIBNgeBEQgiBJhGAvQhIAuhRABQgQAAgQgCQAHAWADAXQANBVghBKQghBKhIAuQhHAvhRABQg1AAgwgTQAHBLgeBCQghBKhIAvQhHAuhRABQhRAAhIguQhIgtgihKQgHgPgFgPQgVAVgaARQhHAuhRABQhRAAhIguQgjgWgagcQgGAegNAcQghBKhIAvQhHAuhRABQgdAAgcgGQAIAeABAfQACAugNArQgUBFg0A1Qg9A8hYAQQgXAEgWABIABAEQARBVgfBMQgfBMhHAyQhHAyhSACIgJAAQhNAAhGgqg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Egr3AXYQhGgqgjhFQgUADgTABQhTAChKgtQhJgugkhKQgehCAEhGQAEhSAzhGQAzhGBNgeQBNgdBVATQBUATA6A7QAeAfATAmQAUgDAVgBQgHgjABgkQAEhLAqhBQArhCBCgiQBDgiBOAFQATABATADQgPg2AJg4QALhRA4hAQA3hBBOgXQBOgXBRAYQBRAXA1A8QAPhFAxg5QA3hBBOgXQBOgXBRAYQBTAXA1A9QAlAsASA2QAzg0BFgVQBOgXBRAYIATAGQgDgfAFghQALhQA3hBQA4hBBNgWQA3gQA5AHQgUg/AJhBQAMhRA3hAQA4hBBNgXQA6gRA9AJQgEgiAFgjQAMhRA3hAQA4hBBNgXQBOgXBSAYQAdAJAaANQgOg2AIg4QAMhRA3hAQA4hBBNgXQBOgXBSAYIAHACQgghBAEhGQADhLArhCQAqhBBDgiQBCgiBPAEQAsADAoAPIAFgIQAzhFBMgeQBDgZBGAJQBDAIA2AkQAqAcAeAqQAXgWAbgRQA8gkBIgDQBJgEA/AeQApATAiAhQAiAgAVApIAIAQQAQgwAigrQA2hDBNgaQBNgZBSAVQBTAVA4A7QAlApATA0QAJgOAKgOQA0hGBNgcQBOgcBUATQBVAUA4A8QAUAVAQAZQAMgkAWghQAuhDBFggQBGggBQAJQBQAIA9AuQA+AvAeBKQAeBLgNBMQgMBMg0A9QgzA+hJAZQhCAWhHgLQhIgMg3gqQgpgfgcgtIgHAUQggBMhIAwQhIAxhSABQhSABhJguQhKgugihLIgGgPQgfA0g1AlQhGAxhRADQhRADhJgsQhKgrgkhJIgGgLQgIAcgPAZQgYAsgmAgQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgpQgNgOgMgQQgXAWgbAQQg+AlhKACQg6ACg0gTQgPAWgTAUQg9A8hYAQQhHANhAgTQARAkAGArQANBUgiBKQghBKhIAuQhHAvhRAAQhJABhBglIAGAfQANBUgiBKQghBKhIAuQhGAvhRAAQgVABgTgDQAIBNgfBDQghBKhIAuQhHAvhRAAQgRABgQgCQAHAVAEAYQANBUgiBKQghBKhHAvQhIAvhRAAQg0ABgwgTQAHBLgeBCQgiBKhHAuQhIAvhRAAQhRABhIguQhIgugihJQgHgPgFgPQgVAVgZAQQhIAvhRAAQhRABhIguQgjgWgZgcQgHAdgMAdQgiBKhHAuQhIAvhRAAQgdABgbgGQAIAeABAfQABAugNArQgTBFg1A0Qg8A8hZARQgXAEgWABIABADQARBVgfBMQgfBNhGAxQhHAyhTADIgJAAQhNAAhGgrg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Egv2AXxQhGgqgjhFQgTADgUABQhTAChKgtQhJgugkhKQgehCAEhGQAEhSAzhGQAzhGBNgeQBNgdBVATQBUATA6A7QAeAfATAmQAUgDAVgBQgHgjABgkQAEhLAqhBQArhCBCgiQBDgiBOAFQATABATADQgPg2AJg4QALhRA4hAQA3hBBOgXQBOgXBRAYQBRAXA1A8QAPhFAxg5QA3hBBOgXQBOgXBRAYQBTAXA1A9QAmAsARA2QAzg0BFgVQBOgXBRAYIATAGQgDgfAFghQALhQA3hBQA4hBBNgXQA3gPA5AHQgUg/AJhBQAMhRA3hAQA4hBBNgXQA6gRA9AJQgEgiAFgjQAMhRA3hAQA4hBBNgXQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhRA3hAQA4hBBNgXQBNgXBSAYIAHACQgghBAEhGQADhLArhCQAqhBBDgiQBCgiBPAEQAsADAoAPIAFgIQAzhFBMgeQBDgZBGAJQBDAIA2AkQArAcAdAqQAXgWAbgRQA8gkBIgDQBJgEA/AeQApATAiAhQAiAgAVApIAIAQQAQgwAigrQA2hDBNgaQBNgZBSAVQBTAVA4A7QAlApATA0QAJgOAKgOQA0hGBNgcQBOgcBUATQBVAUA4A8QAVAVAPAZQAMgkAWghQAuhDBFggQBGggBQAJQBQAIA9AuQAsAiAcAvQAQgqAegmQA1hDBNgaQBMgaBTAVQBTAUA3A6QA4A7AQBUQAQBUgeBLQgeBLhGAyQhFAxhRAEQhRAEhKgrQhBglglg9QgRAugiAnQgzA+hJAZQhCAWhHgLQhIgMg3gqQgpgfgcgtIgHAUQggBMhIAwQhIAxhSABQhSABhJguQhKgugihLIgGgPQgeA0g2AlQhGAxhRADQhRADhJgsQhKgrgkhJIgGgLQgIAcgPAZQgYAsgmAgQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgpQgNgOgMgQQgXAWgbAQQg+AlhKACQg6ACg0gTQgPAWgTAUQg9A8hYAQQhHANhAgTQARAkAGArQANBUgiBKQghBKhIAuQhHAvhRAAQhIABhBglIAGAfQANBUgiBKQghBKhIAuQhHAvhRAAQgVABgTgDQAIBNgfBDQghBKhIAuQhHAvhRAAQgRABgQgCQAHAVAEAYQANBUgiBKQghBKhHAvQhIAvhRAAQg0ABgwgTQAHBLgeBCQgiBKhHAuQhIAvhRAAQhRABhIguQhIgugihJQgHgPgFgPQgVAVgZAQQhIAvhRAAQhRABhIguQgjgWgZgcQgGAegNAcQgiBKhHAuQhIAvhRAAQgcABgcgGQAIAeABAfQABAugNArQgTBFg1A0Qg8A8hZARQgXAEgWABIABADQARBVgfBMQgfBNhGAxQhHAyhTADIgIAAQhOAAhGgrg");
	var mask_2_graphics_30 = new cjs.Graphics().p("Eg0KAXxQhGgqgjhFQgTADgUABQhTAChKgtQhJgugkhKQgehCAEhGQAEhSAzhGQAzhGBNgeQBNgdBVATQBUATA6A7QAeAfATAmQAUgDAVgBQgHgjABgkQAEhLAqhBQArhCBCgiQBDgiBOAFQATABATADQgPg2AJg4QALhRA4hAQA3hBBOgXQBOgXBRAYQBSAXA0A8QAPhFAxg5QA3hBBOgXQBOgXBRAYQBTAXA1A9QAmAsARA2QAzg0BFgVQBOgXBRAYIATAGQgDgfAFghQALhQA3hBQA4hBBNgXQA3gPA5AHQgUg/AJhBQAMhRA3hAQA4hBBNgXQA6gRA9AJQgEgiAFgjQAMhRA3hAQA4hBBNgXQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhRA3hAQA4hBBNgXQBOgXBSAYIAHACQgghBAEhGQADhLArhCQAqhBBDgiQBBgiBPAEQAsADAoAPIAFgIQAzhFBMgeQBDgZBGAJQBDAIA2AkQArAcAdAqQAXgWAbgRQA8gkBIgDQBJgEA/AeQApATAiAhQAiAgAVApIAIAQQAQgwAigrQA2hDBNgaQBNgZBSAVQBTAVA4A7QAlApATA0QAJgOAKgOQA0hGBNgcQBOgcBUATQBVAUA4A8QAVAVAPAZQAMgkAWghQAuhDBFggQBGggBQAJQBQAIA9AuQAsAiAcAvQAQgqAegmQA1hDBNgaQBMgaBTAVQBTAUA3A6QA4A7AQBUIABACQAKgkATghQAdgxAtgiQA9gtBQgIQBQgJBFAgQBGAhAsBCQAtBDAEBMQAEBNglBHQgmBHhBAnQhCAohQAAQhRABhBgoQhIgqgmhQQgQgigHgjQgEAPgGAOQgeBLhGAyQhFAxhRAEQhRAEhKgrQhBglglg9QgRAugiAnQgzA+hJAZQhCAWhHgLQhIgMg3gqQgpgfgcgtIgHAUQggBMhIAwQhIAxhSABQhSABhJguQhKgugihLIgGgPQgeA0g2AlQhGAxhRADQhRADhJgsQhKgrgkhJIgGgLQgIAcgPAZQgYAsgmAgQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgpQgNgOgMgQQgXAWgbAQQg+AlhKACQg6ACg0gTQgPAWgTAUQg9A8hYAQQhHANhAgTQARAkAGArQANBUgiBKQghBKhHAuQhHAvhRAAQhJABhBglIAGAfQANBUgiBKQghBKhIAuQhHAvhRAAQgUABgUgDQAIBNgfBDQghBKhIAuQhHAvhRAAQgRABgQgCQAHAVAEAYQANBUgiBKQghBKhHAvQhIAvhRAAQg0ABgwgTQAHBLgeBCQgiBKhHAuQhIAvhRAAQhRABhIguQhIgugihJQgHgPgFgPQgUAVgaAQQhIAvhRAAQhRABhIguQgigWgagcQgGAegNAcQgiBKhHAuQhIAvhRAAQgcABgcgGQAIAeABAfQABAugNArQgTBFg1A0Qg8A8hZARQgWAEgXABIABADQARBVgfBMQgfBNhGAxQhHAyhTADIgIAAQhOAAhGgrg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Eg4NAXxQhGgqgkhFQgTADgUABQhSAChKgtQhKgugjhKQgehCADhGQAEhSA0hGQAzhGBNgeQBNgdBUATQBVATA5A7QAeAfATAmQAVgDAVgBQgIgjACgkQADhLArhBQAqhCBDgiQBCgiBPAFQATABASADQgOg2AIg4QAMhRA3hAQA4hBBNgXQBOgXBSAYQBRAXA1A8QAPhFAwg5QA4hBBNgXQBOgXBSAYQBSAXA1A9QAmAsASA2QAzg0BEgVQBOgXBSAYIATAGQgDgfAEghQALhQA4hBQA3hBBOgXQA3gPA5AHQgVg/AKhBQALhRA4hAQA3hBBOgXQA6gRA8AJQgDgiAFgjQALhRA4hAQA3hBBOgXQBOgXBRAYQAeAJAbANQgOg2AIg4QALhRA4hAQA3hBBOgXQBOgXBRAYIAIACQgghBADhGQAEhLAqhCQAqhBBDgiQBDgiBOAEQAtADAoAPIAFgIQAxhFBMgeQBEgZBGAJQBDAIA2AkQAqAcAeAqQAWgWAcgRQA7gkBJgDQBIgEA/AeQAqATAiAhQAhAgAWApIAIAQQAPgwAjgrQA1hDBNgaQBNgZBTAVQBTAVA3A7QAmApATA0QAIgOALgOQAzhGBOgcQBNgcBVATQBUAUA5A8QAUAVAPAZQAMgkAXghQAthDBGggQBGggBQAJQBQAIA9AuQAsAiAcAvQAPgqAegmQA1hDBNgaQBNgaBTAVQBSAUA4A6QA4A7AQBUIAAACQAKgkAUghQAdgxAsgiQA+gtBQgIQBPgJBGAgQBFAhAtBCQAMASAJASQAQgoAdgjQA2g/BUgZQBUgZBQAZQBPAYA4BEQA3BEAJBTQAIBTgqBOQgpBOhKAnQhJAohXgJQhYgIhBg0QgkgdgZgoQgJgOgIgQIgMAZQglBHhCAnQhBAohRAAQhQABhCgoQhIgqglhQQgRgigHgjQgEAPgGAOQgeBLhFAyQhGAxhRAEQhRAEhJgrQhCglglg9QgRAughAnQg0A+hJAZQhBAWhIgLQhHgMg3gqQgqgfgbgtIgIAUQggBMhHAwQhIAxhSABQhTABhJguQhJgugihLIgGgPQgfA0g1AlQhGAxhRADQhRADhKgsQhJgrglhJIgFgLQgJAcgOAZQgZAsglAgQgmAggvASQgvASgxABQg6ABg4gXQg3gXgogpQgOgOgLgQQgXAWgcAQQg9AlhLACQg6ACgzgTQgPAWgUAUQg8A8hYAQQhGANhAgTQAQAkAHArQAMBUghBKQgiBKhHAuQhIAvhRAAQhIABhBglIAGAfQAMBUghBKQgiBKhHAuQhIAvhRAAQgUABgTgDQAIBNgfBDQgiBKhHAuQhIAvhRAAQgQABgQgCQAHAVADAYQANBUghBKQghBKhIAvQhHAvhRAAQg0ABgxgTQAHBLgeBCQghBKhIAuQhHAvhRAAQhRABhIguQhIgugihJQgHgPgFgPQgVAVgaAQQhHAvhRAAQhRABhIguQgjgWgagcQgGAegNAcQghBKhIAuQhHAvhRAAQgdABgbgGQAHAeABAfQACAugNArQgUBFg0A0Qg9A8hYARQgXAEgWABIABADQARBVgfBMQgfBNhHAxQhHAyhSADIgJAAQhNAAhGgrg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Eg8XAXxQhGgqgjhFQgTADgUABQhTAChKgtQhJgugkhKQgehCAEhGQAEhSAzhGQAzhGBNgeQBNgdBVATQBUATA6A7QAeAfATAmQAUgDAWgBQgIgjABgkQAEhLAqhBQArhCBCgiQBDgiBOAFQATABATADQgOg2AIg4QALhRA4hAQA3hBBOgXQBOgXBRAYQBSAXA0A8QAPhFAxg5QA3hBBOgXQBOgXBRAYQBTAXA1A9QAmAsARA2QAzg0BFgVQBOgXBRAYIATAGQgDgfAFghQALhQA3hBQA4hBBNgXQA3gPA5AHQgUg/AJhBQAMhRA3hAQA4hBBNgXQA7gRA8AJQgEgiAFgjQAMhRA3hAQA4hBBNgXQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhRA3hAQA4hBBNgXQBOgXBSAYIAIACQghhBAEhGQADhLArhCQAqhBBDgiQBCgiBPAEQAsADAoAPIAFgIQAzhFBMgeQBDgZBGAJQBCAIA2AkQArAcAdAqQAXgWAbgRQA8gkBIgDQBJgEA/AeQApATAiAhQAiAgAVApIAIAQQAQgwAigrQA2hDBNgaQBNgZBSAVQBTAVA4A7QAlApAUA0QAIgOAKgOQA0hGBNgcQBOgcBUATQBVAUA4A8QAVAVAPAZQAMgkAWghQAuhDBFggQBGggBQAJQBQAIA9AuQAsAiAcAvQAQgqAegmQA1hDBNgaQBMgaBTAVQBTAUA3A6QA4A7AQBUIABACQAKgkATghQAdgxAtgiQA9gtBQgIQBQgJBFAgQBGAhAsBCQAMASAJASQARgoAdgjQA1g/BUgZQBVgZBPAZQBQAYA4BEQAuA6AOBFQAJgRALgRQAigvAzgfQAzgeA5gIQA6gIA5AQQA5ARAtAkQAtAlAcA0QAbA1AFA6QADAugMAuQgMAtgZAnQgZAmglAeQglAdgrAPQhIAahPgQQhOgPg5gzQg5g0gYhMQgFgRgDgRIgCAEQgqBOhJAnQhJAohYgJQhXgIhBg0QgkgdgZgoQgKgOgHgQIgMAZQgmBHhBAnQhCAohQAAQhRABhBgoQhIgqgmhQQgQgigHgjQgEAPgGAOQgeBLhGAyQhFAxhRAEQhRAEhKgrQhBglglg9QgRAugiAnQgzA+hJAZQhCAWhHgLQhIgMg3gqQgpgfgcgtIgHAUQggBMhIAwQhIAxhSABQhSABhJguQhKgugihLIgGgPQgeA0g2AlQhGAxhRADQhRADhJgsQhKgrgkhJIgFgLQgJAcgPAZQgYAsgmAgQglAggvASQgvASgyABQg6ABg3gXQg3gXgpgpQgNgOgMgQQgWAWgcAQQg+AlhJACQg6ACgzgTQgQAWgTAUQg9A8hYAQQhHANhAgTQARAkAGArQANBUgiBKQghBKhIAuQhHAvhRAAQhJABhBglIAGAfQANBUgiBKQghBKhIAuQhHAvhRAAQgUABgUgDQAIBNgfBDQghBKhIAuQhHAvhRAAQgQABgQgCQAGAVAEAYQANBUgiBKQghBKhHAvQhIAvhRAAQg0ABgwgTQAHBLgeBCQgiBKhHAuQhIAvhRAAQhRABhIguQhIgugihJQgHgPgEgPQgVAVgaAQQhIAvhRAAQhRABhIguQgigWgagcQgGAegNAcQgiBKhHAuQhIAvhRAAQgcABgcgGQAIAeABAfQABAugNArQgTBFg1A0Qg8A8hZARQgWAEgWABIAAADQARBVgfBMQgfBNhGAxQhHAyhTADIgIAAQhOAAhGgrg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhARAXxQhGgqgjhFQgTADgUABQhTAChKgtQhJgugkhKQgehCAEhGQAEhSAzhGQAzhGBNgeQBNgdBVATQBUATA6A7QAeAfATAmQAVgDAVgBQgIgjABgkQAEhLAqhBQArhCBCgiQBDgiBOAFQAUABASADQgOg2AIg4QALhRA4hAQA3hBBOgXQBOgXBRAYQBSAXA0A8QAPhFAxg5QA3hBBOgXQBOgXBRAYQBTAXA1A9QAmAsARA2QAzg0BFgVQBOgXBRAYIATAGQgDgfAFghQALhQA3hBQA4hBBNgXQA3gPA5AHQgUg/AJhBQAMhRA3hAQA4hBBNgXQA7gRA8AJQgEgiAFgjQAMhRA3hAQA4hBBNgXQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhRA3hAQA4hBBNgXQBOgXBSAYIAIACQgghBADhGQADhLArhCQAqhBBDgiQBCgiBPAEQAsADAoAPIAFgIQAzhFBMgeQBDgZBGAJQBDAIA2AkQArAcAdAqQAXgWAbgRQA7gkBIgDQBJgEA/AeQApATAiAhQAiAgAVApIAIAQQAQgwAigrQA2hDBNgaQBNgZBSAVQBTAVA4A7QAlApAUA0QAIgOAKgOQA0hGBNgcQBOgcBUATQBVAUA4A8QAVAVAPAZQAMgkAWghQAuhDBFggQBGggBQAJQBQAIA9AuQAsAiAcAvQAQgqAegmQA1hDBNgaQBMgaBTAVQBTAUA3A6QA4A7AQBUIABACQAKgkATghQAdgxAtgiQA9gtBQgIQBQgJBFAgQBGAhAsBCQAMASAJASQARgoAdgjQA1g/BUgZQBVgZBPAZQBQAYA4BEQAvA6ANBFQAJgRALgRQAigvAzgfQAzgeA5gIQA6gIA5AQQA5ARAtAkQAnAfAZArQAQgiAYgeQAegjAmgYQArgbAzgKQAygLAzAIQAyAIAtAaQAuAZAgAnQA3BBAJBZQAJBZgpBLQgoBKhPApQhQAqhUgKQhUgKhEg7QgjgegWgkQgJATgMASQgZAmglAeQglAdgrAPQhIAahPgQQhOgPg5gzQg5g0gYhMQgFgRgDgRIgCAEQgqBOhJAnQhJAohYgJQhXgIhBg0QgkgdgZgoQgKgOgHgQIgMAZQgmBHhBAnQhCAohQAAQhRABhBgoQhIgqgmhQQgQgigHgjQgEAPgGAOQgeBLhGAyQhFAxhRAEQhRAEhKgrQhBglglg9QgRAugiAnQgzA+hJAZQhCAWhHgLQhIgMg3gqQgpgfgcgtIgHAUQggBMhIAwQhIAxhSABQhSABhJguQhKgugihLIgGgPQgeA0g2AlQhGAxhRADQhRADhJgsQhKgrgkhJIgFgLQgJAcgPAZQgYAsgmAgQglAggvASQgvASgyABQg6ABg2gXQg3gXgpgpQgNgOgMgQQgWAWgcAQQg+AlhKACQg6ACgzgTQgPAWgUAUQg9A8hYAQQhHANhAgTQARAkAGArQANBUgiBKQghBKhIAuQhHAvhRAAQhJABhBglIAGAfQANBUgiBKQghBKhIAuQhHAvhRAAQgUABgUgDQAIBNgfBDQghBKhIAuQhHAvhRAAQgQABgQgCQAGAVAEAYQANBUgiBKQghBKhHAvQhIAvhRAAQg0ABgwgTQAHBLgeBCQgiBKhHAuQhIAvhRAAQhRABhIguQhIgugihJQgGgPgFgPQgVAVgaAQQhIAvhRAAQhRABhIguQgigWgagcQgGAegNAcQgiBKhHAuQhIAvhRAAQgcABgcgGQAIAeABAfQABAugNArQgTBFg1A0Qg8A8hZARQgWAEgWABIAAADQARBVgfBMQgfBNhGAxQhHAyhTADIgIAAQhOAAhGgrg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhEKAX8QhGgrgjhFQgTAEgUAAQhTADhKguQhJgtgkhLQgehCAEhGQAEhSAzhGQAzhGBNgdQBNgdBVATQBUASA6A7QAeAfATAmQAUgDAWAAQgIgjABglQAEhKAqhCQArhBBCgiQBDgiBOAEQATABATAEQgOg2AIg5QALhQA4hBQA3hABOgYQBOgXBRAYQBSAXA0A8QAPhFAxg5QA3hABOgYQBOgXBRAYQBTAYA1A9QAmArARA3QAzg1BFgVQBOgXBRAYIATAGQgDgfAFggQALhQA3hBQA4hBBNgYQA3gQA5AHQgUg9AJhCQAMhQA3hBQA4hABNgYQA6gRA9AJQgEgiAFgjQAMhQA3hBQA4hABNgYQBOgXBSAYQAeAJAaANQgOg2AIg4QAMhQA3hBQA4hABNgYQBOgXBSAYIAIACQghhAAEhHQADhLArhBQAqhCBDgiQBCgiBPAFQAsACAoAPIAFgHQAzhGBMgdQBDgaBGAJQBDAJA2AkQArAcAdApQAXgWAbgQQA8gkBIgEQBJgDA/AdQAoAUAiAgQAiAhAVAoIAIAQQAQgwAigrQA2hCBNgaQBNgaBSAVQBTAVA4A8QAlAoAUA0QAIgOAKgOQA0hGBNgcQBOgcBUAUQBVAUA4A7QAVAVAPAZQAMgkAWghQAuhCBFghQBGggBQAJQBQAJA9AuQAsAhAcAvQAQgqAegmQA1hCBNgaQBMgaBTAUQBTAVA3A6QA4A7AQBTIABACQAKgkATghQAdgxAtghQA9guBQgIQBQgIBFAgQBGAgAsBDQAMARAJASQARgoAdgiQA1hABUgZQBVgYBPAYQBQAZA4BEQAuA5AOBFQAJgRALgQQAigvAzgfQAzgfA5gHQA6gIA5AQQA5AQAtAlQAnAfAZAqQAQgiAYgdQAegkAmgYQArgbAzgKQAygKAzAIQAyAIAtAZQAuAaAgAnIALANQAMgmAYgjQAjgxAygfQAqgaAzgKQAygLAyAIQAyAIAsAZQAtAZAhAmQA3BBAKBZQAJBagoBLQgpBLhQAqQhQAphUgLQhVgKhEg8QgXgUgRgXQgIAYgNAXQgoBLhPApQhQAphUgKQhUgKhEg6QgjgfgWgkQgJATgMASQgZAnglAdQglAdgrAQQhIAahPgQQhOgQg5gzQg5gzgYhNQgFgRgDgRIgCAFQgqBNhJAoQhJAnhYgIQhXgIhBg1QgkgdgZgnQgKgPgHgQIgMAaQgmBGhBAoQhCAohQAAQhRAAhBgnQhIgrgmhQQgQgigHgjQgEAPgGAOQgeBMhGAxQhFAyhRADQhRAEhKgqQhBgmglg9QgRAugiAoQgzA9hJAZQhCAXhHgMQhIgLg3gqQgpgggcgsIgHATQggBMhIAxQhIAwhSACQhSABhJguQhKgvgihLIgGgOQgeA0g2AlQhGAwhRADQhRADhJgrQhKgsgkhIIgFgMQgJAcgPAaQgYArgmAhQglAgguASQgvASgyABQg6ABg3gXQg3gXgpgqQgNgOgMgQQgXAWgbARQg+AlhKACQg6ACgzgUQgQAWgTAUQg9A8hYARQhHAMhAgTQARAlAGAqQANBUgiBKQghBKhIAvQhHAuhRABQhJAAhBglIAGAfQANBUgiBKQghBKhIAvQhHAuhRABQgUAAgUgDQAIBNgfBDQghBKhIAvQhHAuhRABQgQAAgQgCQAGAWAEAXQANBVgiBKQghBKhHAuQhIAvhRABQg0AAgwgTQAHBLgeBCQgiBKhHAvQhIAuhRABQhRAAhIguQhIgtgihKQgHgPgEgPQgVAVgaARQhIAuhRABQhRAAhIguQgigWgagcQgGAegNAcQgiBKhHAvQhIAuhRABQgcAAgcgGQAIAeABAfQABAugNArQgTBFg1A1Qg8A8hZAQQgWAEgWABIAAAEQARBVgfBMQgfBMhGAyQhHAyhTACIgIAAQhOAAhGgqg");
	var mask_2_graphics_35 = new cjs.Graphics().p("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");
	var mask_2_graphics_36 = new cjs.Graphics().p("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");
	var mask_2_graphics_37 = new cjs.Graphics().p("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");
	var mask_2_graphics_38 = new cjs.Graphics().p("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");
	var mask_2_graphics_39 = new cjs.Graphics().p("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");
	var mask_2_graphics_40 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:178.7,y:264.9}).wait(1).to({graphics:mask_2_graphics_14,x:193.7,y:272.4}).wait(1).to({graphics:mask_2_graphics_15,x:207.2,y:262.8}).wait(1).to({graphics:mask_2_graphics_16,x:223.7,y:245.3}).wait(1).to({graphics:mask_2_graphics_17,x:248.2,y:238.8}).wait(1).to({graphics:mask_2_graphics_18,x:271.7,y:238.8}).wait(1).to({graphics:mask_2_graphics_19,x:290.7,y:229.8}).wait(1).to({graphics:mask_2_graphics_20,x:305.7,y:211.3}).wait(1).to({graphics:mask_2_graphics_21,x:321.7,y:195.8}).wait(1).to({graphics:mask_2_graphics_22,x:342.2,y:179.8}).wait(1).to({graphics:mask_2_graphics_23,x:359.3,y:160.3}).wait(1).to({graphics:mask_2_graphics_24,x:376,y:154.9}).wait(1).to({graphics:mask_2_graphics_25,x:397.3,y:154.9}).wait(1).to({graphics:mask_2_graphics_26,x:423.8,y:154.9}).wait(1).to({graphics:mask_2_graphics_27,x:449.2,y:154.9}).wait(1).to({graphics:mask_2_graphics_28,x:474.8,y:154.4}).wait(1).to({graphics:mask_2_graphics_29,x:500.3,y:151.9}).wait(1).to({graphics:mask_2_graphics_30,x:527.9,y:151.9}).wait(1).to({graphics:mask_2_graphics_31,x:553.8,y:151.9}).wait(1).to({graphics:mask_2_graphics_32,x:580.4,y:151.9}).wait(1).to({graphics:mask_2_graphics_33,x:605.4,y:151.9}).wait(1).to({graphics:mask_2_graphics_34,x:630.3,y:150.8}).wait(1).to({graphics:mask_2_graphics_35,x:655.8,y:150.8}).wait(1).to({graphics:mask_2_graphics_36,x:680.8,y:150.8}).wait(1).to({graphics:mask_2_graphics_37,x:705.8,y:150.8}).wait(1).to({graphics:mask_2_graphics_38,x:730.4,y:150.8}).wait(1).to({graphics:mask_2_graphics_39,x:744.8,y:148.4}).wait(1).to({graphics:mask_2_graphics_40,x:758.3,y:128.3}).wait(8).to({graphics:null,x:0,y:0}).wait(131));

	// Layer 2
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("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");
	this.shape_134.setTransform(394.4,152.5,0.468,0.468);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAsA6IhLgLIgmhDQgFgJADgKQADgKAJgFQAJgFAKADQAKADAFAJIAZAtIAzAIQALABAGAIQAGAJgBAKQgCAJgHAGQgHAGgJAAg");
	this.shape_135.setTransform(190.4,284.5,0.468,0.468);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AADA2Ig0hfQAYgKAUgOIA0BeQAFAJgDAKQgDAKgJAFQgFADgHAAQgOAAgIgMg");
	this.shape_136.setTransform(184,275.7,0.468,0.468);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF0000").ss(7,1,1).p("ADPBQIIOixAL4hhIV3DDEghugAsIAogYMAkMACU");
	this.shape_137.setTransform(994.9,28.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("ADgCsQgagKgSgVQivingggdQgJgHgDACIhKBHQgKAJgPABIq1AlQgVAAgRgFIACgJQAJgdASgeIAFgBIKngjIBBg/QATgTAcgCQAigDAfAbQAkAfCwCoIACADQAGAGAGAEQAMAGAMgEQAUgHBigwICphVID4h5QARgLATgGQAOgEAOAAIAAAeIgoAYIAogYIAAAtIgIACQgKACgHAFIgFADIj4B5Qg8AfhSApQh/A/gdAKQgQAGgRAAQgSAAgTgIgANmiVg");
	this.shape_138.setTransform(696,36.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("An6FtIg+gEQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgTQADgCAFABIA8ADIABAAQAEABADADQADAEAAAEQAAAFgEADQgDADgEAAIgBAAgAAJChIgbgCQgEAAgEgDQgDgEAAgFQABgFAEgEQADgDAFABIAaABQANABAPgFIAFAAQAHABADAGQABAFgCAEQgCAEgFACQgRAGgRAAIgCAAgAiJCYQgFgBgEgDQgDgEABgFQAAgEADgDQAEgEAFAAIA8AEIABAAQAFABADADQACAEAAAFQgBAEgDAEQgEADgEAAgAkCCRQgEgBgDgDQgEgEABgFQAAgFADgDQAEgDAEAAIA9AEIABAAQAEABADADQADAEAAAEQgBAFgDADQgEAEgFAAgAk+CMIg8gDQgFAAgDgEQgDgDAAgFQAAgFAEgDQAEgEAFABIA9AEQAEAAADAEQADADgBAFQAAAFgDADQgDACgEAAIgCAAgABTB3QgDgDAAgFQgBgFAEgEIArgpQAFgFAGABQAEABACADQADAEAAAEQAAAFgEADIgrArQgEADgEAAQgFAAgDgEgACpAjQgDgDAAgFQAAgFAEgDIArgpQAEgEAGABQAEAAADADQADAEAAAFQAAAEgEAEIgrApQgDADgFAAQgFAAgEgEgAEAgvQgDgEAAgFQAAgEADgEIAsgqQAEgEAGABQAEAAACADQADAEAAAFQAAAEgDAEIgsAqQgDADgFAAQgFAAgDgDgAFXiDQgEgEAAgEQAAgFAEgEIArgqQAEgEAGABQADABAEADQADADAAAFQAAAEgEAEIgrAqQgDADgFABQgFgBgDgDgAIIiiQgCgBgCgCIAOAEIgBABIgDAAQgDAAgDgCgAGtjXQgDgEAAgEQAAgFAEgDIAqgrQAEgEAGABQAEAAACAEQAEADAAAFQgBAEgDAEIgrAqQgDADgFAAIgBAAQgEAAgDgDgAIDkrQgEgEABgFQgBgFAEgDIALgMQAOgNANgTQAEgFAGABIAJAEQACACAAADQABAFgDAEQgOAUgPAPIgLAMQgEADgFAAQgEAAgEgDg");
	this.shape_139.setTransform(1270.4,25.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF6600").s().p("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");
	this.shape_140.setTransform(786.6,122.7);

	var maskedShapeInstanceList = [this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},13).to({state:[]},35).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.1,-94.1,1881,146.6);


// stage content:
(lib.graph1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var btnNamrArr=["opt1","opt2","opt3"];
		var btnArr =[this.opt1,this.opt2,this.opt3];
		var self=this;
		for(var i=0;i<btnArr.length;i++)
		{
			 
				btnArr[i].name=btnNamrArr[i];
				btnArr[i].addEventListener("click",onBtnHandler);
			 
		}
		
		function onBtnHandler(evt)
		{
				var divId = String(evt.currentTarget.name).split("opt")[1];		
			
		for(var i=1;i<=btnArr.length;i++)
		{
			self["opt"+i].gotoAndStop(0);
		}
			
			self["opt"+divId].gotoAndStop(1);
			self["map"].gotoAndPlay("m"+divId)
				 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.map = new lib.Symbol4();
	this.map.parent = this;
	this.map.setTransform(248.7,467.4,1,1,0,0,0,99.9,46.6);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ACSCaIAAiqQAAhCgwAAQgXAAgOAUQgPAUAAAdIAACnIhbAAIAAisQAAhAgwAAQgXAAgOATQgPATAAAgIAACmIhcAAIAAkrIBcAAIAAAvIABAAQAPgYAagPQAagQAeAAQA/AAAXA4QAjg4BCAAQBiAAAAB5IAAC6g");
	this.shape.setTransform(670.3,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhnB1QgogoAAhJQAAhJAsgsQArgsA+AAQBCAAAkAoQAkAnAABDIAAAmIjDAAQAFBBBMgBQAyAAAlgWIAABCQgpAWhDAAQhHAAgpgogAgghMQgQATgEAcIBuAAQAAhBg0AAQgWAAgQASg");
	this.shape_1.setTransform(626.6,67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ag3BhIAAiIIgwAAIAAhEIAwAAIAAhBIBcgaIAABbIBDAAIAABEIhDAAIAAB4QAAAvAlAAQAPAAAPgIIAABEQgUALgqAAQhhAAAAhmg");
	this.shape_2.setTransform(598.5,62.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhyCOIAAhLQAXAOAWAHQAXAGAUAAQAZAAAOgGQAOgHgBgOQAAgJgGgFQgHgHgJgEIgWgHIgXgIQgSgIgOgHQgNgIgJgJQgJgLgFgNQgFgOAAgSQAAgZALgSQALgTATgLQARgLAYgGQAYgGAYAAQAUAAAUAEQAVADAUAGIAABHQgSgKgTgFQgVgGgTAAQgJABgIACQgIABgFADQgGADgEAFQgEAEAAAHQABAIAFAGQAFAGAJAEQAHAFALADIAUAHQATAGAPAHQAOAIALAJQALALAFAOQAGAOAAASQAAAbgLATQgMATgTAMQgUAMgZAFQgZAGgZgBQgyAAgqgPg");
	this.shape_3.setTransform(573.9,67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AiSDVIAAhKQATALAVAAQAkAAAOgiIAQglIh6kqIBnAAIA4C2QAEARADAWIABAAQADgQAHgXIA4i2IBcAAIh6FDQgrB0hYABQgiAAgWgIg");
	this.shape_4.setTransform(544.3,74.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AhXDTQgggGgXgLIAAheQAaAVAeALQAeALAfAAQARAAANgEQANgDAJgFQAJgGAEgIQAEgIABgJQAAgMgIgKQgGgJgMgJQgNgIgPgHIgkgQQgygVgXgcQgZgeAAgqQAAggANgYQANgYAXgPQAXgPAdgHQAegHAhAAQAgAAAaAEQAaAEAVAIIAABXQgLgHgMgGQgMgFgOgEIgagFIgZgCQgQAAgMADQgNADgKAGQgJAFgEAIQgGAIAAAJQABALAFAJQAGAIAKAHQAKAIAOAHIAhAPQAZAKAVAMQATAMAPAOQAOAPAHATQAIATAAAaQAAAjgNAYQgOAYgXAPQgWAOgeAHQgfAGghAAQgiAAgfgGg");
	this.shape_5.setTransform(511.6,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ag3BhIAAiIIgwAAIAAhEIAwAAIAAhBIBcgaIAABbIBDAAIAABEIhDAAIAAB4QAAAvAlAAQAPAAAPgIIAABEQgUALgqAAQhhAAAAhmg");
	this.shape_6.setTransform(466.3,62.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhhCZIAAkrIBdAAIAAA3IABAAQAVg9A5AAQAPAAAIAEIAABVQgRgJgWAAQgeAAgRAWQgQAWAAAlIAACQg");
	this.shape_7.setTransform(444.4,66.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("Ah2B0QgrgrAAhIQAAhJAsgqQAtgqBLgBQBKABArAqQAqAqAABFQAABKgrArQgsArhLAAQhLAAgrgpgAgxg/QgSAWAAApQAABXBFAAQBCgBAAhXQAAhVhDAAQggABgSAWg");
	this.shape_8.setTransform(412.4,67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AibDfIAAm1IBcAAIAAAtIABAAQAjg1A9AAQA7AAAfApQAgAnAABFQAABKglAuQglAtg+AAQg1AAgdgqIgBAAIAACtgAguiBQgSAVAAAkIAAAYQAAAfARATQAQATAbAAQAeAAASgXQARgZAAgtQAAhPg9AAQgcAAgSAWg");
	this.shape_9.setTransform(376.4,73.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhyCOIAAhLQAWAOAYAHQAWAGAVAAQAYAAANgGQAPgHAAgOQAAgJgHgFQgGgHgKgEIgWgHIgXgIQgSgIgOgHQgNgIgJgJQgJgLgFgNQgFgOAAgSQAAgZALgSQALgTASgLQATgLAXgGQAXgGAZAAQAUAAAVAEQAUADAUAGIAABHQgRgKgVgFQgUgGgTAAQgJABgIACQgHABgHADQgFADgEAFQgEAEABAHQAAAIAEAGQAGAGAJAEQAHAFAKADIAVAHQASAGAPAHQAQAIAKAJQAKALAHAOQAFAOAAASQAAAbgMATQgLATgTAMQgTAMgZAFQgZAGgbgBQgxAAgqgPg");
	this.shape_10.setTransform(343.9,67);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AA1CaIAAimQAAhGgyAAQgXAAgQATQgPASAAAdIAACqIhdAAIAAkrIBdAAIAAAvIABAAQAhg3A+AAQBkAAAAB8IAAC3g");
	this.shape_11.setTransform(312.5,66.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AhuCFQgZgZAAgqQAAhWBogOIBQgKQAAgxg0gBQg2ABgwAfIAAhFQATgKAigIQAhgHAbgBQCAAAAACBIAACyIhXAAIAAgrIgBAAQgfAyg6AAQgrABgagZgAgEAPQguAGABAiQgBAQALALQALAKATgBQAaAAAQgRQAQgTAAgbIAAgUg");
	this.shape_12.setTransform(277.1,67);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AhhCZIAAkrIBdAAIAAA3IABAAQAVg9A5AAQAPAAAIAEIAABVQgRgJgWAAQgeAAgRAWQgQAWAAAlIAACQg");
	this.shape_13.setTransform(251.6,66.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgvDSIAAlWIh3AAIAAhNIFNAAIAABNIh4AAIAAFWg");
	this.shape_14.setTransform(220.4,61);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AiSDVIAAhKQATALAVAAQAkAAAOgiIAQglIh6kqIBnAAIA4C2QAEARADAWIABAAQADgQAHgXIA4i2IBcAAIh6FDQgrB0hYABQgiAAgWgIg");
	this.shape_15.setTransform(170.1,74.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("Ag3BhIAAiIIgwAAIAAhEIAwAAIAAhBIBcgaIAABbIBDAAIAABEIhDAAIAAB4QAAAvAlAAQAPAAAPgIIAABEQgUALgqAAQhhAAAAhmg");
	this.shape_16.setTransform(142.3,62.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AguDdIAAkrIBcAAIAAErgAgliLQgPgOAAgUQAAgVAPgNQAPgNAWAAQAYAAAPANQAOANAAAVQAAAVgOANQgPAOgYAAQgWAAgPgOg");
	this.shape_17.setTransform(122.2,59.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AhrCgQg4g5AAheQAAhkA/g/QA+g+BiAAQA+AAAqAPIAABbQgqgZg2AAQg7AAgkAlQgkAlAAA/QAAA9AiAkQAiAkA6AAQA3AAAugbIAABXQguAWhKAAQhgAAg3g5g");
	this.shape_18.setTransform(94.7,61);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("EAw2ABlMhhrAAAIgBAAIAAgBIAAgBIABAAMBhrAAAIABAAIAAABIAAABIgBAAIAAAAgEAwqAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAMAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgEAuyAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAs6AAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEArCAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEApKAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAnSAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAlaAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAjiAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAhqAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAfyAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAd6AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAcCAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAaKAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAYSAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAWaAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAUiAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgASqAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAQyAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAO6AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgANCAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgALKAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAJSAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAHaAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAFiAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgADqAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAByAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAgFAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA7AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAh9AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAj1AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAltAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAnlAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgApdAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgArVAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAtNAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAvFAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAw9AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAy1AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA0tAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA2lAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA4dAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA6VAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA8NAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA+FAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgA/9AFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgh1AAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgjtAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgllAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgndAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgpVAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgrNAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgtFAAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgu9AAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEgw1AAFQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgEAw2gBiMhhrAAAIgBAAIAAgBIAAgBIABAAMBhrAAAIABAAIAAABIAAABIgBAAIAAAAg");
	this.shape_19.setTransform(384.6,115.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// School Bus
	this.opt3 = new lib.Symbol3copy2();
	this.opt3.parent = this;
	this.opt3.setTransform(861.9,204.5,0.5,0.5,0,0,0,25.1,25);

	this.opt2 = new lib.Symbol3copy();
	this.opt2.parent = this;
	this.opt2.setTransform(455.5,209.1,0.5,0.5,0,0,0,25.1,25);

	this.opt1 = new lib.Symbol3();
	this.opt1.parent = this;
	this.opt1.setTransform(81.1,209.1,0.5,0.5,0,0,0,25.1,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.729)").s().p("Eh/rA5NMAAAhyZMD/XAAAMAAAByZg");
	this.shape_20.setTransform(1353.3,842.2);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1298.3,813.4,1,1,0,0,0,626.6,291.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.opt1},{t:this.opt2},{t:this.opt3}]}).wait(1));

	// Car white
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AOoAKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIAwAAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgAMwAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgAK5AKQgFAAgCgDQgDgDAAgEQAAgDADgDQACgDAFAAIA7AAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAgAJAAKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIA8AAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAgAHIAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgAFRAKQgFAAgCgDQgDgDAAgEQAAgDADgDQACgDAFAAIA7AAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAgADYAKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIA8AAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAgABgAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgAgWAKQgFAAgCgDQgDgDAAgEQAAgDADgDQACgDAFAAIA6AAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAgAiPAKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIA8AAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAgAkHAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgAl+AKQgFAAgCgDQgDgDAAgEQAAgDADgDQACgDAFAAIA7AAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAgAn3AKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIA8AAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAgApvAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAgArmAKQgFAAgCgDQgDgDAAgEQAAgDADgDQACgDAFAAIA7AAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAgAtfAKQgEAAgCgDQgDgDgBgEQABgDADgDQACgDAEAAIA8AAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAgAvXAKQgEAAgDgDQgCgDAAgEQAAgDACgDQADgDAEAAIA9AAQAEAAACADQADADABADQgBAEgDADQgCADgEAAg");
	this.shape_21.setTransform(337.8,912.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgfBOQgMgDgIgEIAAgjQAJAJALADQALAFALAAQAHgBAEgBQAFgBADgCQADgCACgDIABgGQAAgFgCgDQgDgEgEgDIgKgFIgNgHQgSgHgJgKQgJgLAAgPQAAgMAFgIQAFgJAIgGQAIgGALgCQALgCAMgBQAMAAAJACQAJACAIADIAAAfIgIgEIgKgDIgJgDIgJgBQgGABgEABQgFABgDACQgEACgCADQgBACAAAEQAAAEACADIAFAGIAJAFIAMAGQAJADAHAFQAIAEAFAFQAFAFADAIQADAHAAAJQAAANgFAIQgFAJgIAGQgJAFgLADQgLACgLAAQgNAAgLgCg");
	this.shape_22.setTransform(205.9,1000.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("Ag/ALIAAhYIAjAAIAABYQAAAlAdAAQAcAAAAgkIAAhZIAjAAIAABWQAABFhAAAQg/AAAAhDg");
	this.shape_23.setTransform(191.7,1000.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("Ag5BNIAAiZIA4AAQAZAAAOAKQANAJAAARQABANgJAJQgIAJgNAEIAAAAQAQADAKAJQAKAKAAAOQAAAVgQAMQgPANgZAAgAgWA0IATAAQAKgBAHgFQAIgGAAgKQAAgIgIgGQgGgFgLAAIgTAAgAgWgOIAPAAQAKAAAGgFQAGgFAAgKQAAgRgYAAIgNAAg");
	this.shape_24.setTransform(177.2,1000.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgmA7QgVgVAAgjQAAgkAXgWQAWgYAkAAQAXABAPAFIAAAiQgPgKgUAAQgWAAgMAOQgOAOAAAWQAAAWANANQAMAOAVAAQAUAAARgKIAAAfQgRAJgbAAQgiAAgUgVg");
	this.shape_25.setTransform(156.7,1000.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgRBNIAAh9IgrAAIAAgcIB5AAIAAAcIgsAAIAAB9g");
	this.shape_26.setTransform(143.4,1000.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AhEBNIAAiZIA3AAQBRAAAABLQAAAjgWAVQgXAWgkAAgAggAxIARAAQAVAAANgNQAMgOAAgWQAAgXgMgMQgMgNgWAAIgRAAg");
	this.shape_27.setTransform(129.4,1000.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("Ag2A6QgUgWAAgiQAAgkAUgWQAWgWAhgBQAhABAVAVQAUAWABAjQAAAjgWAWQgVAXghAAQghAAgVgWgAgcgjQgKAOAAAVQAAAXAKANQALAOARAAQASAAAKgNQALgNAAgXQAAgXgLgOQgJgNgTAAQgQAAgMAOg");
	this.shape_28.setTransform(203.7,955.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAZBNIgYgoIgEgIIgFgFQgDgEgDgBQgCgBgEAAIgJAAIAAA7IgjAAIAAiZIA3AAQA3AAAAAqQAAAIgCAHQgCAGgFAGQgFAFgGADQgGAEgIADIAAAAIAHADIAGAGIAGAIIAEAHIAeAtgAgdgHIAPAAQALAAAGgHQAHgGAAgKQAAgUgXAAIgQAAg");
	this.shape_29.setTransform(189.2,955.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgRBNIAAh9IgrAAIAAgcIB5AAIAAAcIgsAAIAAB9g");
	this.shape_30.setTransform(174.5,955.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgtBNIAAiZIBYAAIAAAcIg1AAIAAAiIAxAAIAAAcIgxAAIAAAjIA4AAIAAAcg");
	this.shape_31.setTransform(162.7,955.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AA2BNIAAhbIABghIgBAAIgFAUIgkBoIgbAAIglhnIgFgVIgBAAIACAoIAABUIggAAIAAiZIAzAAIAgBbQADAKABALIABAAIAGgWIAfhaIAyAAIAACZg");
	this.shape_32.setTransform(145.8,955.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgRBNIAAiZIAiAAIAACZg");
	this.shape_33.setTransform(125.8,955.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAgBNIAAg+Ig/AAIAAA+IgjAAIAAiZIAjAAIAAA9IA/AAIAAg9IAjAAIAACZg");
	this.shape_34.setTransform(113.9,955.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgtBNIAAiZIAjAAIAAB9IA4AAIAAAcg");
	this.shape_35.setTransform(100.6,955.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgtBNIAAiZIBYAAIAAAcIg1AAIAAAiIAxAAIAAAcIgxAAIAAAjIA4AAIAAAcg");
	this.shape_36.setTransform(88.9,955.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhEBNIAAiZIA3AAQBRAAAABLQAAAjgWAVQgXAWgkAAgAghAxIASAAQAVAAANgNQAMgOAAgWQAAgXgMgMQgMgNgWAAIgSAAg");
	this.shape_37.setTransform(74.9,955.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAUBNIgshDIgDgJIgBAAIAABMIgjAAIAAiZIAjAAIAABJIABAAIADgJIAqhAIApAAIg1BKIA6BPg");
	this.shape_38.setTransform(205.9,910.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgtBNIAAiZIAjAAIAAB9IA4AAIAAAcg");
	this.shape_39.setTransform(192.8,910.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAmBNIgLgiIg2AAIgKAiIgmAAIA4iZIAoAAIA3CZgAgCgjIgRAzIAmAAIgQgzIgDgNIAAAAQAAAGgCAHg");
	this.shape_40.setTransform(178.7,910.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAdBNIgZhiQgCgHAAgKIgBAAQgBALgBAGIgaBiIgoAAIgoiZIAmAAIAVBmQACAGAAALIABAAQAAgIADgKIAchlIAkAAIAZBmIACARIABAAQAAgIADgJIAVhmIAjAAIgpCZg");
	this.shape_41.setTransform(160,910.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFCC00").ss(8,1,1).p("AwFAAMAgLAAA");
	this.shape_42.setTransform(337.9,957.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(7,1,1).p("AwFAAMAgLAAA");
	this.shape_43.setTransform(337.9,999.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF6600").ss(8,1,1).p("AwFAAMAgLAAA");
	this.shape_44.setTransform(337.9,912.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Layer 2
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EiWpBUZIAAtxMBKZAAAMAAAgggMhKZAAAMAAAh6gMEtTAAAMAAACoxgEiWpAmIMBKZAAAMAAAAggMhKZAAAg");
	this.shape_45.setTransform(962.3,540.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(594.7,540.1,2535.8,1208.2);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;