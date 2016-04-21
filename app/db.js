import Realm from 'realm';

const todochema = {
  name: 'todo',
  primaryKey: 'id',
  properties: {
    id:    'int',
    name: 'string'
  }
};

//Realm.clearTestState();
let realm = new Realm({schema: [todochema]});

export default realm;
