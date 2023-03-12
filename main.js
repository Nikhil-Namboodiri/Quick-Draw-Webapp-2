timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
function updateCanvas(){
    array_1 = ['pen', 'book', 'paper', 'bottle']
    random_no = Math.floor((Math.random()*array_1.length)+1);
    sketch = array_1[random_no];
    console.log(sketch)
    document.getElementById("sketch").innerHTML = 'Sketch to be drawn: ', sketch;
}
function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}
function draw(){
    check_sketch()
    if(my_sketch == sketch){
        answer_holder = "set";
        score = score + 1;
        document.getElementById('score').innerHTML = "Score: ", score;

    } 
}
function check_sketch(){
    timer_counter = timer_counter + 1;
    document.getElementById('timer').innerHTML = "Timer: ", timer_counter;
    if(timer_counter>30000){
        timer_counter = 0;
        timer_check = "completed";
        if(timer_check == "completed"||answer_holder == "set"){
            timer_check == "";
            answer_holder = "";
            updateCanvas();
        }
    }
}
