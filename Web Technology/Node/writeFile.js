const fs=require('fs') //fs is used to get all the file related properties

let content = "this content will be written in the file";

fs.writeFile("NewCreated_File.txt",content, (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File Saved");
    }
});