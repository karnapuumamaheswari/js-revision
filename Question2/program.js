function rateLimiter(limit,interval){
    let count = 0;
    setInterval(()=>{
        count = 0;
    },interval);

    return function(){
        if(count < limit){
            count++;
            return "Allowed";
        }
        else{
            return "Blocked";
        }
    };
}

const limiter = rateLimiter(3,5000);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());