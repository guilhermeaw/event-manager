import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { MailTemplateFiles } from '../dtos/MailTemplateFiles';

type EmailPerson = {
  name: string;
  email: string;
};

type TemplateVariables = {
  [key: string]: string | number;
};

type TemplateData = {
  variables: TemplateVariables;
  file: MailTemplateFiles;
};

interface IRequest {
  from?: EmailPerson;
  to: EmailPerson;
  subject: string;
  templateData: TemplateData;
}

export default class SendContinueRegisterEmailService {
  public async execute({
    subject,
    templateData,
    to,
    from,
  }: IRequest): Promise<void> {
    try {
      await axios.post(`http://localhost:3000/api/emails/send`, {
        subject,
        templateData,
        to,
        from,
      });
    } catch (err) {
      throw new AppError('Erro ao enviar e-mail para continuação do cadastro.');
    }
  }
}
