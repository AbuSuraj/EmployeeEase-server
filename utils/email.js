import {createTransport} from 'nodemailer';
const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "abusurajbd@gmail.com",
        pass: "xsmtpsib-8b42d510bd6afffcbb78d6faa1af60d02785e796782344176d3651500bad1a53-h34wtOcLvnFT1Yy9",
    },
  });
export function sendEmail( email, subject, body){
 
        const mailOptions = {
          from: 'abusurajbd@gmail.com',
          to: email,
          subject: subject,
          text: body
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              console.log(error);
          } else {
              res.send('Email sent: ' + info.response);
              console.log('Email sent: ' + info.response);
          }
        });  

  
}