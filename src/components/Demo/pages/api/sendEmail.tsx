import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, country, contact, company, industry, products, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'your_ethereal_email_username',
        pass: 'your_ethereal_email_password'
      }
    });

    let mailOptions = {
      from: '"Cloud Tenants" <noreply@cloudTenants.com>',
      to: 'owaischemist22@gmail.com', // Replace with your email for testing
      subject: 'Software Demo Request',
      text: `Name: ${name}
      Email: ${email}
      Country: ${country}
      Contact: ${contact}
      Company: ${company}
      Industry: ${industry}
      Products: ${products.map((product: any) => product.label).join(', ')}
      Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
