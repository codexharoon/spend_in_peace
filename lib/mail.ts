import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});



export async function sendVerificationEmail(email: string, verificationCode: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification - Spend In Peace',
    html: `
      <h1>Email Verification</h1>
      <p>Your verification code is: <strong>${verificationCode}</strong></p>
      <p>This code will expire in 24 hours.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send verification email');
  }
}


export async function sendResetPasswordEmail(email: string, resetCode: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset - Spend In Peace',
      html: `
        <h1>Password Reset</h1>
        <p>Your password reset code is: <strong>${resetCode}</strong></p>
        <p>This code will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending reset email:', error);
      throw new Error('Failed to send reset email');
    }
  }

  const developmentTeamEmail = process.env.DEV_TEAM_EMAIL;
  /** ✅ Send Feedback Email to Development Team */
export async function sendFeedbackToDevTeam(name: string, email: string, message: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: developmentTeamEmail,
    subject: "New Feedback Received",
    html: `
      <h1>New Feedback Received</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending feedback to dev team:", error);
    throw new Error("Failed to send feedback email to dev team");
  }
}

/** ✅ Send Confirmation Email to User */
export async function sendFeedbackConfirmationToUser(name: string, email: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Feedback Received - Spend In Peace Team",
    html: `
      <h1>Feedback Received</h1>
      <p>Dear ${name},</p>
      <p>Thank you for your feedback! Your message has been received by the Spend in Peace Team.</p>
      <p>We appreciate your time and will review your comments.</p>
      <p>Best Regards,</p>
      <p>Spend in Peace Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending feedback confirmation to user:", error);
    throw new Error("Failed to send feedback confirmation email");
  }
}