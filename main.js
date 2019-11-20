var data = [];
var x = 5;
var y = 5;
var sizeX = 10;
var sizeY =10;

for (i=0;i<x;i++) {
	for(j=0;j<y;j++){
		let tempData = {"x":(i+1),"y":(j+1)}
		// data.push(tempData);
	}
}
/**
  {1,1},{1,2},{1,3},{1,4},{1,5},
  {2,1},{2,2},{2,3},{2,4},{2,5},
  {3,1},{3,2},{3,3},{3,4},{3,5},
  {4,1},{4,2},{4,3},{4,4},{4,5},
  {5,1},{5,2},{5,3},{5,4},{5,5}


location {3,3};
target {1,1};

routes
[		1,	2,	 3,		4,	 5
xy	{3,3},{2,3},{1,3},{1,2},{1,1}
yx	{3,3},{3,2},{3,1},{2,1},{1,1}
x-y	{3,3},{2,2},{1,1}
]

YX
	xFrom-1 == xTo && y is constant;
	yFrom-1 == yTo;
**/

let from = {"x":3,"y":3};
let to = {"x":1,"y":1};

// XY FUNCTION
generateXY = (from,to)=>{
	let XY =[];
	while(from.x != (to.x-1)){
		XY.push({"x":from.x,"y":from.y});
		from.x--;
	}
	let x =from.x+1;
	while(from.y != (to.y-1)){
		XY.push({x,"y":from.y});
		from.y--;
	}
	console.log(XY);
};

generateXY(from,to);

from = {"x":3,"y":3};
to = {"x":1,"y":1};

generateXYD =(from,to)=>{
	let XYD =[];
	while(from.x != (to.x-1) && from.y != (to.y-1)){
		XYD.push({"x":from.x,"y":from.y});
		from.x--;
		from.y--;
	}
	console.log(XYD);
}

generateXYD(from,to);
// console.log(data);