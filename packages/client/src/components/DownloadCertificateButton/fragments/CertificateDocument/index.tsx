import pdf from '@react-pdf/renderer';

import { styles } from './styles';

const { Document, Page, Image, Text, View } = pdf;

// #34495e
type Event = {
  title: string;
  duration: number;
};

export type CertificateProps = {
  event: Event;
  userName: string;
  hash: string;
};

export const CertificateDocument = ({
  event,
  hash,
  userName,
}: CertificateProps) => (
  <Document>
    <Page size="A4" orientation="landscape">
      <View fixed style={styles.view}>
        <Image style={styles.image} src="src/assets/images/certificate.png" />
        <Text style={styles.userText}>{userName}</Text>
        <Text style={styles.eventText}>{event.title}</Text>
        <Text style={styles.durationText}>{event.duration / 60}h</Text>
        <Text style={styles.hashText}>Hash: {hash}</Text>
      </View>
    </Page>
  </Document>
);
