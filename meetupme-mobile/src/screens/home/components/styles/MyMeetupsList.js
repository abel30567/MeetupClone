import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'ralewayBold',
  },
  contentContainer: {
    flex: 1,
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: '#f73859',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    position: 'absolute',
    color: 'white',
    top: '2.5%',
    left: '2.5%',
    fontSize: 15,
    fontFamily: 'ralewayBold',
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  meetupCardMetaName: {
    fontSize: 20,
    fontFamily: 'raleway',
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'ralewayLight',
  },
});

export default styles;
