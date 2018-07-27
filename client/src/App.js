import React, { Component } from 'react';
import Table from './componenets/Table';
import Section from './componenets/Section';
import NavBar from './componenets/NavBar';
import api from './services/api';
import Modal from './componenets/Modal'
import './App.css';

class App extends Component {

  constructor(props){
    super();
    this.state= {
      doc: null,
      modal:{
        isOpen: false,
        row:"",
        col:"",
        old_text:"",
        new_text:""
      }
    }
  }

  componentWillMount() {
    this.init();
  }

  init = () => api.getSheet().then(res => this.setState({doc: res.data}));

  openModal = (old_text, row, col) =>{
    const state = this.state;
    state.modal.old_text = old_text;
    state.modal.new_text = old_text;
    state.modal.row = row;
    state.modal.col = col;
    state.modal.isOpen = true;
    this.setState(state);
  }

  closeModal = () => {
    const state = this.state;
    state.modal.isOpen = false;
    this.setState(state);
  }

   saveSheet = async (modal) =>{
    await api.saveSheet({
      "row": modal.row,
      "col": modal.col,
      "text": modal.new_text
    });
    this.init();
  }

  addRow = async () => {
    await api.addRow();
    this.init();
  }

  render() {
    return (
      <div className="App">      
        <NavBar title="Excel"/>
        {
          this.state.modal.isOpen ? <Modal data={this.state.modal} closeModal={this.closeModal} save={this.saveSheet}/> : ""
        }
        
        <div>
        {
          this.state.doc ? 
          <Section subtitle={this.state.doc.Name} >
            <div>
            <button className="button add-button" onClick={this.addRow}>Add Row</button>
            </div>
            
          <Table doc={this.state.doc} openModal={this.openModal}/>
          </Section>
          : 
          <Section title="Loading ..." />
        }
        </div>
        
        
      </div>
    );
  }
}

export default App;
