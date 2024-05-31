const fs = require('fs')

fs.appendFile("./abc.txt","\n New added content",(err)=>{
    if(err){
        console.log("error:"+err);
    }
    else{
        console.log("saved");
    }
})