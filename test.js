let canvas_x=0;
let canvas_y=0;
let x_pos=0;
let x_neg=0;
let num_points=0;
let draw_func=true;
let done=false;

function setup(){
  canvas_x=prompt("enter screen width",800);
  canvas_y=prompt("enter screen height",600);
  num_points=prompt("enter unit length",10);
  createCanvas(canvas_x, canvas_y);

  background(50);
  stop_drawing_bt=createButton('Stop Drawing');
  stop_drawing_bt.position(8,canvas_y-14);
  scale_slider=createSlider(1,100,1);
  // frameRate(20);
  //noLoop();
  //draw_grid();

}

  
function draw(){
  
  translate(canvas_x/2,canvas_y/2);
  x_pos+=(float)(num_points);
  x_neg-=(float)(num_points);
  //if out of canvas boundries, just track slider val
  /*if(y_funct(x_pos)<(-(canvas_y/2)) || y_funct(x_neg)>(canvas_y/2) || x_pos>canvas_x/2 || x_neg<(-canvas_x/2)){
    console.log(scale_slider.value());
    noLoop();
  }*/

  //else draw the function

  //postive x
  console.log("pos points: ",x_pos,y_funct(x_pos));
  strokeWeight(5);
  stroke('white');
  point(x_pos,y_funct(x_pos));
  
  strokeWeight(2);
  stroke('red');
  line(x_pos-num_points,y_funct(x_pos-num_points),x_pos,y_funct(x_pos));

  //negative x
  console.log("neg points: ",x_neg,y_funct(x_neg));
  strokeWeight(5);
  stroke('white');
  point(x_neg,y_funct(x_neg));
  
  strokeWeight(2);
  stroke('red');
  //console.log(num_points);
  line(x_neg+(float)(num_points),y_funct(x_neg+(float)(num_points)),x_neg,y_funct(x_neg));
  //click to stop drawing
  if(draw_func){
      console.log("in if statement");
      stop_drawing_bt.mousePressed(() => {noLoop(); draw_func=false; wait_to_redraw();});
      
  }

  stop_drawing_bt.mousePressed(()=>{
    noLoop(); 
    draw_func=false; 
    done=false;
    while(!done){
      if(!draw_func){
        
      }
    }
  });
  //checking for NaN
  if(x_pos!=x_pos || x_neg!=x_neg){
    noLoop();
    console.log("error in number point input");
  }
}

function wait_to_redraw(stop_drawing_bt){
  console.log("waiting to begin redraw");
  let done=false;
  while(!done){
    if(!draw_func){
      stop_drawing_bt.mousePressed(() => {loop();draw_func=true; done=true;} );
      
    }
  }
}

function draw_grid(){
    //horizontal grid lines
  for(let i=0; i<canvas_y; i+=10)
      line(0,i,canvas_x,i);
  
  //vertical grid lines
  for(let j=0; j<canvas_x; j+=10)
      line(j,0,j,canvas_y);
  loop();
}

function y_funct(x){
  x=x*10;
  return 30*(-sin(x));
}

function function_parser(input_string){

}