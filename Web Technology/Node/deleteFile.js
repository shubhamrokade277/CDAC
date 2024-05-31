const fs=require('fs')

fs.unlink("./NewCreated_File.txt",(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted");
    }
})
