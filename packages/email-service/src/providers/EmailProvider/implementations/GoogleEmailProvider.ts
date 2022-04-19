import nodemailer, { Transporter } from 'nodemailer';

import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default class GoogleEmailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendEmailDTO): Promise<void> {
    await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe Event Manager',
        address:
          from?.email ||
          process.env.GMAIL_EMAIL ||
          'equipe@eventmanager.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: '<h1>Opa</h1>',
    });
  }
}
