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