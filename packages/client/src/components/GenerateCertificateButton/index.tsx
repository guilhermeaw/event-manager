import { Button } from '@mui/material';
import pdf from '@react-pdf/renderer';

const { Document, Page, Image, PDFDownloadLink, StyleSheet, Text, View } = pdf;

// #34495e
type Event = {
  title: string;
  duration: number;
};

type CertificateProps = {
  event: Event;
  userName: string;
  hash: string;
};

const styles = StyleSheet.create({
  userText: {
    marginTop: 215,
    marginLeft: 365,
  },
  eventText: {
    marginTop: 60,
    marginLeft: 375,
  },
  durationText: {
    marginTop: 40,
    marginLeft: 410,
  },
  image: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    width: '100%',
  },
  view: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  downloadLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const Certificate = ({ event, hash, userName }: CertificateProps) => (
  <Document>
    <Page size="A4" orientation="landscape">
      <View fixed style={styles.view}>
        <Image style={styles.image} src="src/assets/images/certificate.png" />
        <Text style={styles.userText}>{userName}</Text>
        <Text style={styles.eventText}>{event.title}</Text>
        <Text style={styles.durationText}>{event.duration / 60}h</Text>
      </View>
    </Page>
  </Document>
);

export const GenerateCertificateButton = (props: CertificateProps) => {
  return (
    <Button>
      <PDFDownloadLink
        style={styles.downloadLink}
        document={<Certificate {...props} />}
        fileName="certificate.pdf"
      >
        {({ loading }) =>
          loading ? 'Carregando documento...' : 'Gerar certificado'
        }
      </PDFDownloadLink>
    </Button>
  );
};
