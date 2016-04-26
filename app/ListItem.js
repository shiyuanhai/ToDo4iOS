import React, {
  Component,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ViewItem from './ViewItem';

class ListItem extends Component{
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.props.nav.push({
      title: 'View',
      component: ViewItem,
      backButtonTitle: '',
      passProps: {itemData: this.props.itemData},
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.itemContainer}>
          <Text>{this.props.itemData.name}</Text>
        </View>
      </TouchableOpacity>
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
