import React from 'react';
import { StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import Modal from './components/Modal'
import api from './services/api';
import Table from './components/Table';

const initialState ={
  doc: null,
  modal:{isOpen : false}
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.init();
  }

  init = () => api.getSheet().then(res => this.setState({ doc: res.data}));

  openModal = (old_text, row, col) =>{
    const state = this.state;
    state.modal.old_text = old_text;
    state.modal.new_text = old_text;
    state.modal.row = row;
    state.modal.col = col;
    state.modal.isOpen = true;
    this.setState(state);
  }

   saveSheet = async (new_text,row,col) =>{
    await api.saveSheet({
      "row": row,
      "col": col,
      "text": new_text
    });
    this.setState(initialState,()=>this.init());
  }

  addRow = async () => {
    await api.addRow();
    this.init();
  }

  render() {
    const state = this.state;
    if (state.doc) {
      return (
        <ScrollView style={styles.container}>
          <Modal data={this.state.modal} saveSheet={this.saveSheet}/>
          <View style={styles.cols}>
          <Text style={styles.isHalf}>{state.doc.Name}</Text>
          <View style={styles.isHalf}>
          <Button style={styles.btn} title="Add Row" color="#841584" onPress={() => this.addRow()}/> 
          </View> 
          </View>          
          <Table tableHead={this.state.tableHead} data={this.state.doc} openModal={this.openModal}/>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.containerCenter}>
          <Text>Loading ...</Text>        
        </View>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  containerCenter: { flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  btn: { width: 25 },
  cols: { flex: 1, flexDirection: 'row' },
  isHalf: { width: '50%'}
});
