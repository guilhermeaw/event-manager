import AppError from '@shared/errors/AppError';
import Certificate from '../entities/Certificate';
import CertificatesRepository from '../repositories/CertificatesRepository';

export default class FindCertificateByHashService {
  private certificateRepository: CertificatesRepository;

  constructor() {
    this.certificateRepository = new CertificatesRepository();
  }

  public async execute(hash: string): Promise<Certificate> {
    const certificate = await this.certificateRepository.findByHash(hash);

    if (!certificate) {
      throw new AppError('Certificado não encontrado.');
    }

    return certificate;
  }
}
