import AppError from '@shared/errors/AppError';
import CertificatesRepository from '../repositories/CertificatesRepository';
import { IFindCertificateDTO } from '../dtos/IFindCertificateDTO';
import Certificate from '../entities/Certificate';

export default class FindCertificateService {
  private certificateRepository: CertificatesRepository;

  constructor() {
    this.certificateRepository = new CertificatesRepository();
  }

  public async execute({
    event_id,
    user_id,
  }: IFindCertificateDTO): Promise<Certificate> {
    const certificate = await this.certificateRepository.findByEventAndUser({
      event_id,
      user_id,
    });

    if (!certificate) {
      throw new AppError('Certificado não encontrado.');
    }

    return certificate;
  }
}
