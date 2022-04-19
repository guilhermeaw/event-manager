import { Request, Response } from 'express';

import GoogleEmailProvider from 'providers/EmailProvider/implementations/GoogleEmailProvider';

export default class EmailController {
  public async sendEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { to, subject, templateData } = request.body;

    const emailProvider = new GoogleEmailProvider();

    await emailProvider.sendMail({
      to,
      subject,
      templateData,
    });

    return response.status(204).json();
  }
}
