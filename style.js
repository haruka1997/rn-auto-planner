import { Constants } from 'expo';

const styles = {
  containerStyle: {
    paddingTop: Constants.statusBarHeight
  },

  header: {
    bodyStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24
    }
  },

  home: {
    cardHeaderStyle: {
      backgroundColor: '#0f5ca0',
    },
    cardHeaderTextStyle: {
      color: '#fff',
      fontWeight: 'bold',
    }
  }
}

export default styles;
