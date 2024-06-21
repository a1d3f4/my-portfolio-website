// import nodemailer from 'nodemailer';

// // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: formData.email ,
//     pass:"ijk mno plk"
//   }
// });
// pass: "iuoz ytap kvyf boml"
// // Define a function to send emails
// const sendEmail = async (formData) => {
//   try {
//     // Email options
//     const mailOptions = {
//         from: {
//             address: formData.email // Use the email entered into the form
//           },
//       to: '12112051@nitkkr.ac.in', // Replace with your email
//       subject: 'New Contact Form Submission',
//       text: `
//         Name: ${formData.name}
//         Email: ${formData.email}
//         Message: ${formData.message}
//       `
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// export default sendEmail;
// Import necessary modules
import nodemailer from 'nodemailer';

// Define a function to send an email
const sendEmail = async (formData) => {
  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: formData.email, // Use the email entered into the form
        pass: "iuoz ytap kvyf boml"
        // Replace with your password or application-specific password
      }
    });

    // Email options
    const mailOptions = {
      from: formData.email, // Use the email entered into the form
      to: '123@gmail.com', // Replace with your email
      subject: 'New Contact Form Submission',
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Export the sendEmail function
export default sendEmail;
