import React, {
  Component,
  View,
  Text,
  ListView,
  TouchableOpacity,
} from 'react-native';
import t from 'tcomb-form-native';
import ListItem from './ListItem';
import db from './db';

var Form = t.form.Form;
var todo = t.struct({
  name: t.String,
});

class EditItem extends Component{
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    let value = this.refs.form.getValue();
    let realm = db;
    if(value){
      let alltodos = realm.objects('todo').sorted('id')
                            .map(function(item){
                              return item.id;
                            }).concat([0]);
      let newID = Math.max(...alltodos) + 1;//ID will be 1 based
      realm.write(() => {
        realm.create('todo', {id: newID, name: value.name});
      });
    }
    this.props.onUpdate();
  }
  render() {
    return (
      <View style={styles.editContainer}>
        <View style={styles.editTitle}>
          <TouchableOpacity onPress={this.props.onCancel.bind(this)}>
            <Text style={styles.btn}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add</Text>
          <TouchableOpacity onPress={this.onSubmit}>
            <Text style={styles.btn}>OK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Form
            ref="form"
            type={todo}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  editContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  editTitle: {
    flexDirection: 'row',
    paddingTop: 20,
    height: 60,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  btn: {
    fontSize: 16,
  },
  formContainer: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
  },
};

export default EditItem;
