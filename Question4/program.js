function runSequential(tasks,delay){
    let results = [];
    let i =0 ;
    return new Promise((resolve,reject)=>{
        function next(){
            if(i == tasks.length){
                resolve(results);
                return;
            }
            Promise.resolve(tasks[i]())
            .then(res=>{
                results.push(res);
                i++;
                setTimeout(next,delay);
            })
            .catch(err => reject(err));
        }
        next();
    });
}