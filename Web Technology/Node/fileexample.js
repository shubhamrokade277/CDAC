//readfile
//writefile
//appendfile
//deletefile

const fs=require('fs') //fs is used to get all the file related properties

// readFile = used for Asynchrouous(callback)
// readFileSync = used for Synchrouous - retunrs only after reading entire file
fs.readFile('./abc.txt',(err,data)=>{
    if(err){
        console.log("error!!");
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});

console.log("Terminated");
//when we use readFile it will print Terminated even with error
//& When we use readFileSynce it wil not print Terminated it will wait for other functions to exectue in sequence first
