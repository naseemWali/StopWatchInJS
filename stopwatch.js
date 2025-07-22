
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





let stop=document.getElementById('stop')
console.log(stop);

let play=document.getElementById("play")
console.log(play);

let restart=document.getElementById("restart")
console.log(restart);


// making a stopwatch

// let time=document.getElementById("time")
// console.log(time);

// let [sec,min,hour]=[0,0,0]
// let timer=null;


// function timing() {
//     sec++;
//     if (sec==60) {
//         sec=0;
//         min++        
//     }
//     if (min==60) {
//         min=0;
//         hour++;
//     }
//     let seconds=sec<10 ? "0" + sec : sec;
//     let minutes=min<10 ? "0" + min : min;
//     let hourses=hour<10 ? "0" + hour : hour
    
//     time.innerHTML=hourses + ":" + minutes + ":" + seconds
//    }

// function start() {
//    if (timer!==null) {
//     clearInterval(timer)
//    }

//     timer=setInterval(timing,1000)

// }

// function stop() {
//     clearInterval(timer)
// }
// function restart() {
//     clearInterval(timer);
//     [sec,min,hour]=[0,0,0]
//     time.innerHTML="00:00:00"
// }


//  understanding of HOF and  callback fxns

// function add(a,b,c,d) {
//     let result=a+b+c;
//     d(result);
    
// }
// add(20,50,60,val=>{ console.log(val)})

// Best examples of HOF and callback fxns

// function naseem(a,b,c,nano) {
//     let result=a+b+c;
//     nano(result);

//     return function returny() {
//         console.log(result);
        
//     }  
    
// }

// function hello(res) {
// console.log(res);
    
// }
// let response=naseem(20,30,10,hello)
// response()

// another examples of callback fx 
// const array=['mommy','sevy','lily','jess']

// function hello(a,b,c,d) {
//     console.log(a+b+c+d);
    
// }

// setTimeout(() => {
//     hello(array)
// }, 4000);

// it will say undefined 4 times with ansewrs because in hello argument it expects  single arguments
//  solution 1

// setTimeout(() => {
//     hello(...array)
// }, 4000);

// solution2 using spread operators ...
// spread operators 

// function hello(arr) {
//     console.log(arr.join(" "));
    
// }


// setTimeout(() => {
//     hello(array)
// }, 4000);


// using forEach loop
// const array=['mommy','sevy','lily','jess']


// array.forEach(arr => {
//     console.log(arr);
    
// });


// using callback fxn

// const arrow=(arr,cbi) =>{
//     for (let index = 0; index < arr.length; index++) {
//         const element = array[index];
//         cbi(element)
//     }
// }

// arrow(array,function lily(val) {
//     console.log(val,'hey');
    
// })

