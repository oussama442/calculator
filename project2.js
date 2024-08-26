const display = document.getElementById("display");

function appendtodisplay(input){
 if(display.value == 0){
    display.value = "" ;
    let newButtonText = "C";
    document.getElementById('AC').textContent = newButtonText ;
 }
 display.value += input ;
 }
function cleardisplay(){
    display.value = "0" ;
    let newButtonText = "AC";
    document.getElementById('AC').textContent = newButtonText ;
}
function calculate(){
   try{ display.value  = eval(display.value);}
   catch {
    display.value = 'Error';
   }
}
function minusdisplay(){
    display.value = -display.value ; 
}
function percentage(){
    display.value =  ( display.value / 100 );
}
function ouss2(){
    display.value = (display.value * display.value);
}
function ouss3(){
    display.value = (display.value * display.value * display.value);
}
function tenouss(){
    var x = 1 ;
    for (var i=0 ; i<display.value ; i++){
        x = x * 10 ;
    }
    display.value = x ;
}
function oneforx(){
    display.value = (1/display.value);
}
function factorial(){
    var x = 1;
    for(var i = 1 ; i <= display.value ; i++){
        x = x * i ; 
    }
    display.value = x ;
}
function sqrt2(){
    display.value = Math.sqrt(display.value);
}
function sqrt3(){
    display.value = Math.pow(display.value, 1/3);
}
function sqrty(){
    var y = display.value ;
    display.value = "" ;
    var x = document.getElementById("display");
    x = input.Element.value ;
    display.value = Math.pow(y, 1/x);
}
function ln(){
    display.value = Math.log(display.value);
}
function exp(){
    display.value = Math.exp(display.value);
}
function log10(){
    display.value = Math.log10(display.value);
}
function sin(){
    var radians = display.value * (Math.PI / 180);
    display.value = Math.sin(radians);
}
function cos(){
    var radians = display.value * (Math.PI / 180);
    display.value = Math.cos(radians);
}
function tan(){
    var radians = display.value * (Math.PI / 180);
    display.value = Math.tan(radians);
}
function sinh(){
    display.value = Math.sinh(display.value);
}
function cosh(){
    display.value = Math.cosh(display.value);
}
function tanh(){
    display.value = Math.tanh(display.value);
}
