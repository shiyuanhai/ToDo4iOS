import React, {
  Component,
  View,
  Text,
  Modal
} from 'react-native';
import ListItem from './ListItem';
import { ListView } from 'realm/react-native';
import db from './db';
import EditItem from './EditItem';

let realm = db;
class ListMain extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editVisible: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }).cloneWithRows(realm.objects('todo')),
    };
    this.props.events.addListener('addButtonPressed', this.toggleEdit.bind(this,true));
  }
  toggleEdit(visible) {
    this.setState({
      editVisible: visible,
    });
  }
  updateList() {
    this.setState({
      editVisible: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }).cloneWithRows(realm.objects('todo')),
    });
  }
  render() {
    return (
      <View style={styles.listview}>
        <Modal animated={true}
               transparent={false}
               visible={this.state.editVisible}>
          <EditItem onUpdate={this.updateList.bind(this)} onCancel={this.toggleEdit.bind(this, false)} />
        </Modal>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem itemData={rowData} nav={this.props.navigator}/>}
          styles={styles.listview}
        />
      </View>
    );
  }
}

const styles = {
  listview: {
    flex: 1,
  },
};

export default ListMain;
