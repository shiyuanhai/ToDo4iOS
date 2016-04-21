import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  View
} from 'react-native';
import EventEmitter from 'wolfy87-eventemitter';
import ListMain from './app/ListMain';

var rightButtonHandler = new EventEmitter();

class todolist extends Component {
  constructor() {
    super();
    this._onRightButtonPress = this._onRightButtonPress.bind(this);
  }
  _onRightButtonPress() {
    rightButtonHandler.emitEvent('addButtonPressed');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigatorIOS
          ref="nav"
          style={styles.navigator}
          initialRoute={{
            component: ListMain,
            title: 'TODO',
            passProps: { events: rightButtonHandler },
          }}
          rightButtonTitle="Add"
          onRightButtonPress={this._onRightButtonPress}
          tintColor="#000000"
        />
      </View>
    );
  }
}

const styles = {
  navigator: {
    flex: 1,
  },
};

AppRegistry.registerComponent('ToDo4iOS', () => todolist);
