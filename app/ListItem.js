import React, {
  Component,
  Text,
  View
} from 'react-native';

class ListItem extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.itemContainer}>
        <Text>{this.props.itemData.name}</Text>
      </View>
    );
  }
}

const styles = {
  itemContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
};

export default ListItem;
