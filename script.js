let Num;
Num=0;
document.getElementById("increase").onclick= function(){
    Num+=1;
    document.getElementById("count").textContent= Num;
}
document.getElementById("decrease").onclick= function(){
    Num-=1;
    document.getElementById("count").textContent= Num;
}
document.getElementById("reset").onclick=function(){
    document.getElementById("count").textContent= 0;
}