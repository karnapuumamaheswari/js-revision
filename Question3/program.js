function mySetInterval(callback,delay){
    let timerId;
    function repeat(){
        callback();
        timerId = setTimeout(repeat,delay);
    }
    timerId = setTimeout(repeat,delay);
    return timerId;
}

function myClearInterval(id){
    clearTimeout(id);
}


const interval = mySetInterval(()=>{
    console.log("Runing..");
},1000);

setTimeout(()=>{
   myClearInterval(id);
   console.log("Stopped");
},5000);