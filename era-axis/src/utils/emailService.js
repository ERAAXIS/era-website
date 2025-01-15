import axios from 'axios';

const serviceId = 'service_d764fcs';
const templateId = 'template_cm137b4';
const userId = 'Xigb-1DB_G5uPgMTU';

class EmailServices {
  static async sendEmail(email, fullName, mySubject, myMessage) {
    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    console.log(email, fullName, mySubject, myMessage);

    try {
      const response = await axios.post(
        url,
        {
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            to_email: email,
            from_name: fullName,
            to_name: "ERA AXIS Admin",
            reply_to: 'eratechnologiess@gmail.com',
            subject: mySubject,
            message: myMessage,
          },
        },
        {
          headers: {
            origin: 'https://maifriend-server.onrender.com/',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Email sent successfully:', response.data);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }
}

export default EmailServices;
