import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { MailTemplateFiles } from '../dtos/MailTemplateFiles';

import { Status } from '../entities/EventRegistration';
import CreateEventRegistrationService from '../services/CreateEventRegistrationService';
import CreateUserTokenService from '../services/CreateUserTokenService';
import PreCreateUserService from '../services/PreCreateUserService';
import SendContinueRegisterEmailService from '../services/SendContinueRegisterEmailService';

export default class EventRegistrationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, event_id, status = Status.PENDING } = request.body;

    const eventRegistration =
      await new CreateEventRegistrationService().execute({
        user_id,
        event_id,
        status,
      });

    return response.json(instanceToPlain(eventRegistration));
  }

  public async quickRegistration(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, userName, event_id } = request.body;

    // Pré-cria o user
    const user = await new PreCreateUserService().execute({
      email,
      name: userName,
    });

    const user_id = user.id;

    // Cria um token
    const userToken = await new CreateUserTokenService().execute(user_id);

    // Registra o user no evento, já com status check
    await new CreateEventRegistrationService().execute({
      user_id,
      event_id,
      status: Status.CHECKING,
    });

    // Envia o e-mail para continuar cadastro (com o token)
    await new SendContinueRegisterEmailService().execute({
      subject: 'Finalize seu cadastro',
      to: { name: 'Novo usuário', email },
      templateData: {
        variables: {
          userName: user.name,
          link: `http://localhost:8080/pre-register/${userToken.token}`,
        },
        file: MailTemplateFiles.COMPLETE_REGISTER,
      },
    });

    return response.status(204).json();
  }
}
