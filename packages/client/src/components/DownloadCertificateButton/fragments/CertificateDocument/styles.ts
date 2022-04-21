import pdf from '@react-pdf/renderer';

const { StyleSheet } = pdf;

export const styles = StyleSheet.create({
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
  hashText: {
    marginTop: 180,
    marginLeft: 310,
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
});
