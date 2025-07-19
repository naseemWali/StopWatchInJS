
// let count=0;

// function timing() {
//     console.log(count++,'count is increasing');
//     if (count>5) {
//         clearTimeout(id)
//     } else {
//         id = setTimeout(()=>{
//             console.log(' i am here');
            
//             timing()
//         }, 1000);
//     }
// }

// let id=setTimeout(() => {
//     timing()
// }, 1000);

//  working  of setTimeout fxn like setInterval when we add else statement it means adding one more settimeout inside fxn 


// function hello(a,b) {
//     console.log(a+b);
//     ;

    
// }

// setTimeout(function para (a,b,c) {
//     console.log(a + "" + b + "" +  c + "" + (10 + 20) );
//         hello(10,20)

// }, 6000,"nassem","wali","khan");


//  calling para fxn passing arguments to it within setimeout and then hello and passing arguments to it.
//  calling "nassem","wali","khan" wth along hello answer in one line.


// Achieving same result by setInterval but it will run repeatedly 

// function hello(a,b) {
//     console.log(a+b);
//     ;

    
// }

// setInterval(function para (a,b,c) {
//     console.log(a + "" + b + "" +  c + "" + (10 + 20) );
//         hello(10,20)

// }, 6000,"nassem","wali","khan");


// let b=setInterval(() => {
    
// }, 2000);
// console.log(b,'return');





// let stop=document.getElementById('stop')
// console.log(stop);

// let play=document.getElementById("play")
// console.log(play);

// let restart=document.getElementById("restart")
// console.log(restart);

let time=document.getElementById("time")
console.log(time);

let [sec,min,hour]=[0,0,0]
let timer=null;


function timing() {
    sec++;
    if (sec==60) {
        sec=0;
        min++        
    }
    if (min==60) {
        min=0;
        hour++;
    }
    let seconds=sec<10 ? "0" + sec : sec;
    let minutes=min<10 ? "0" + min : min;
    let hourses=hour<10 ? "0" + hour : hour
    
    time.innerHTML=hourses + ":" + minutes + ":" + seconds
   }

function start() {
   if (timer!==null) {
    clearInterval(timer)
   }

    timer=setInterval(timing,1000)

}

function stop() {
    clearInterval(timer)
}
function restart() {
    clearInterval(timer);
    [sec,min,hour]=[0,0,0]
    time.innerHTML="00::00::00"
}