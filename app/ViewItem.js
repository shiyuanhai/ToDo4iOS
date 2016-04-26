import React, {
  View,
  Text,
  Component
} from 'react-native';

class ViewItem extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Name: {this.props.itemData.name}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    top: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
};

export default ViewItem;
