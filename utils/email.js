import {createTransport} from 'nodemailer';
import { config } from 'dotenv';
config();
const api_key = "xsmtpsib-8b42d510bd6afffcbb78d6faa1af60d02785e796782344176d3651500bad1a53-htBQP0Lm7yDr3jaE"
const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "abusurajbd@gmail.com",
        pass: api_key,
    },
  });
export function sendEmail( {email, subject, body}){
  console.log(email, body, subject);
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