import {createTransport} from 'nodemailer';
const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "abusurajbd@gmail.com",
        pass: process.env.BREVO_KEY,
    },
  });
export function sendEmail( {email, subject, body}){
 console.log(email, subject, body);
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