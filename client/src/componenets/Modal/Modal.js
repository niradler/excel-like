import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props){
    super();
    this.state = {
      isOpen: false,
      value:""
    }
  }

  updateValue = (e) => this.setState({value:e.target.value});

  save = () => {
    let modal = this.props.data;
    modal.new_text = this.state.value;
    this.props.save(modal);
    this.props.closeModal();
  }

  render() {
    return <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Modal title</p>
        <button className="delete" aria-label="close" onClick={()=>this.props.closeModal()}></button>
      </header>
      <section className="modal-card-body">
        <span> <strong>row:</strong> {this.props.data.row}</span>, <span><strong>col:</strong> {this.props.data.col}</span>, <span><strong>old value:</strong> {this.props.data.old_text}</span>
      <input className="input" type="text" placeholder="new value" onChange={this.updateValue}/>
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success" onClick={this.save}>Save changes</button>
        <button className="button" onClick={()=>this.props.closeModal()}>Cancel</button>
      </footer>
    </div>
  </div>;
  }
}

export default Modal;
