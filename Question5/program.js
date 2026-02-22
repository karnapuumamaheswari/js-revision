function createCountdown(seconds,onTrick,onComplete){
    let rem = seconds;
    let timer = null;
    let paused = false;

    function start(){

        timer = setInterval(()=>{
            if(!paused){
                onTrick(rem);
                rem--;
                if(rem <=0){
                    clearInterval(timer);
                    onComplete();
                }
            }
        },1000);
    }

    function pause(){
        paused = true;
    }

    function resume(){
        paused = false
    }
    start();

    return {pause,resume};
}


const timer = createCountdown(
    5,
    (t) => console.log(t),
    () => console.log("Done")
);