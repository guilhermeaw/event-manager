interface ITemplateVariables {
  [key: string]: string | number;
}

enum MailTemplateFiles {
  COMPLETE_REGISTER = 'complete_register.hbs',
}

export interface IParseMailTemplateDTO {
  file: MailTemplateFiles;
  variables: ITemplateVariables;
}
