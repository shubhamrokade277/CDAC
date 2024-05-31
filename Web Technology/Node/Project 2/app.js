const mailer = require('nodemailer');

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'missionaug24@gmail.com',
        pass:'cdac#acts'
    }
    
});

let messageOb={
    from:'missionaug24@gmail.com',
    to:'shubkingz@gmail.com',
    subject:'Email using node js',
    text:'this mail is sent using node js'
}

transport.sendMail(messageOb,(error,info) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Email sent");
        console.log(info.response)
    }
})