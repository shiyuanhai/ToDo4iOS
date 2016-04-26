import React, {
  View,
  Text,
  Component
} from 'react-native';

class ViewItem extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Static</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    top: 50,
  }
};

exports default ViewItem;
