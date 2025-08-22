const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration (only in development)
if (process.env.NODE_ENV === 'development') {
  transporter.verify((error, success) => {
    if (error) {
      console.log('Email service configuration warning:', error.message);
      console.log('Emails will not be sent until email service is properly configured');
    } else {
      console.log('Email service is ready to send messages');
    }
  });
}

// Send contact form notification
const sendContactNotification = async (contactData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Company:</strong> ${contactData.company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${contactData.projectType || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${contactData.budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${contactData.message}
            </div>
          </div>
          <p style="color: #666; margin-top: 20px;">
            This message was sent from the Creative Studio contact form.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    throw error;
  }
};

// Send confirmation email to user
const sendConfirmationEmail = async (contactData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: 'Thank you for contacting Creative Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; text-align: center;">Thank You for Reaching Out!</h2>
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px; color: white; text-align: center;">
            <h3 style="margin: 0; font-size: 24px;">We've received your message</h3>
            <p style="margin: 10px 0 0; opacity: 0.9;">
              Our team will review your inquiry and get back to you within 24 hours.
            </p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h4 style="color: #333; margin-bottom: 15px;">Your Message Details:</h4>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
            ${contactData.projectType ? `<p><strong>Project Type:</strong> ${contactData.projectType}</p>` : ''}
            ${contactData.budget ? `<p><strong>Budget:</strong> ${contactData.budget}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${contactData.message}
            </div>
          </div>
          <div style="margin-top: 30px; text-align: center; color: #666;">
            <p>If you have any urgent questions, feel free to call us at +1 (555) 123-4567</p>
            <p>Creative Studio Team</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to user:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

module.exports = {
  sendContactNotification,
  sendConfirmationEmail,
};
