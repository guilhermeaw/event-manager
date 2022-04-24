import pdf from '@react-pdf/renderer';
import { Button } from '@mui/material';

import {
  CertificateDocument,
  CertificateProps,
} from './fragments/CertificateDocument';

const { PDFDownloadLink } = pdf;

export const DownloadCertificateButton = (props: CertificateProps) => {
  return (
    <Button variant="contained">
      <PDFDownloadLink
        style={{ textDecoration: 'none', color: 'inherit' }}
        document={<CertificateDocument {...props} />}
        fileName="certificate.pdf"
      >
        {({ loading }) =>
          loading ? 'Carregando documento...' : 'Imprimir certificado'
        }
      </PDFDownloadLink>
    </Button>
  );
};
