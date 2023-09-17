'use server';
import prisma from '../prisma';
import nodeMailer from 'nodemailer';
type PropType = {
  userId: string;
  eventId: string;
};

type ticketProps = {
  mailTo?: string;
  userName?: string;
  event: {
    eventName: string;
  };
};

export const ticketAlreadyGenerated = async ({ userId, eventId }: PropType) => {
  const ticket = await prisma.ticket.findFirst({
    where: {
      AND: [
        {
          userId,
        },
        {
          eventId,
        },
      ],
    },
  });

  if (ticket) {
    return true;
  }
  return false;
};

export const generateTicket = async ({ userId, eventId }: PropType) => {
  const ticket = await prisma.ticket.create({
    data: {
      userId,
      eventId,
    },
  });

  return { status: 'ticket generated', ticket };
};

const transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODE_MAILER_MAIL_ID,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

let imageData: string;

export const gettingTheImageData = (imageUrl: string) => {
  imageData = imageUrl;
};

const htmlContent = `
  
`;

export const callNodeMailer = ({ mailTo, event, userName }: ticketProps) => {
  let res = { status: '' };
  console.log('node mailer here');
  const mailOptions = {
    from: process.env.NODE_MAILER_MAIL_ID,
    to: mailTo,
    subject: `Successfull registration for ${event.eventName}`,
    text: `Hello ${userName} you have successfully registered for this converse event ${event.eventName}`,

    attachments: [
      {
        filename: 'ticket.png',
        path: 'C:/Users/krishna/Desktop/converse23/converse2k23/public/Ticket.jpg',
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status = 'error while sending mail';
    } else {
      console.log('Email sent:', info.response);
      res.status = 'success! a ticket has been send to you on your mail';
    }
  });

  return res;
};

// content: Buffer.from(imageData.split(',')[1], 'base64'),
