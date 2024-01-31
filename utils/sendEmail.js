import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { activateEmailTemplate } from '../emails/activatedEmailtemplate'
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https;//developers.google.com/oauthplayground';
const {
    CLIENT_SECRET,
    CLIENT_SECRET_KEY,
    REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env;

const oauth2Client=new OAuth2(
    CLIENT_SECRET,
    CLIENT_SECRET_KEY,
    REFRESH_TOKEN,
    OAUTH_PLAYGROUND
);

// send Email
export const sendEmail = (to, url, txt, subject, template) => {
    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_EMAIL_ADDRESS,
        clientId: CLIENT_SECRET,
        clientSecret: CLIENT_SECRET_KEY,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    });
    const mailOptions = {
      from: SENDER_EMAIL_ADDRESS,
      to: to,
      subject: subject,
      html: template(to,url)
    };
    smtpTransport.sendMail(mailOptions, (err, infos) => {
      if (err) return err;
      return infos;
    });
  };