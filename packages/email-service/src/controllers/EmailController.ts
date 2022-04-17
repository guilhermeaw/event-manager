import { Request, Response } from 'express';

import EtherealEmailProvider from 'providers/EmailProvider/implementations/EtherealEmailProvider';

export default class EmailController {
  public async sendEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { to, subject, templateData } = request.body;

    const emailProvider = new EtherealEmailProvider();

    await emailProvider.sendMail({
      to,
      subject,
      templateData,
    });

    return response.status(204).json();
  }
}
