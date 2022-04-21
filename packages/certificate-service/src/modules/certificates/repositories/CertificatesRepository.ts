import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormConfig';
import { IFindCertificateDTO } from '../dtos/IFindCertificateDTO';
import Certificate from '../entities/Certificate';

export default class CertificatesRepository {
  private ormRepository: Repository<Certificate>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Certificate);
  }

  public async create(
    certificateData: Omit<Certificate, 'hash'>,
  ): Promise<Certificate> {
    const certificate = this.ormRepository.create(certificateData);
    await this.ormRepository.save(certificate);

    return certificate;
  }

  public async findByEventAndUser({
    event_id,
    user_id,
  }: IFindCertificateDTO): Promise<Certificate | null> {
    const certificate = await this.ormRepository.findOne({
      where: { event_id, user_id },
    });

    return certificate;
  }
}
