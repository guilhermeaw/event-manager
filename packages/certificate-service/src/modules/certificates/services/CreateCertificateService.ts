import Certificate from '../entities/Certificate';
import CertificatesRepository from '../repositories/CertificatesRepository';

interface IRequest {
  event_id: number;
  user_id: number;
}

export default class CreateCertificateService {
  private certificatesRepository: CertificatesRepository;

  constructor() {
    this.certificatesRepository = new CertificatesRepository();
  }

  public async execute({ event_id, user_id }: IRequest): Promise<Certificate> {
    const certificate = await this.certificatesRepository.create({
      event_id,
      user_id,
    });

    return certificate;
  }
}
