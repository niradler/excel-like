import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, TextInput, StyleSheet} from 'react-native';

export default class EditModal extends Component {
  state = {
    modalVisible: false,
    text:""
  };

  componentWillUpdate() {
    this.update();
  }

  update = () => {
    const isOpen = this.props.data.isOpen;
    if (this.props.data.col && isOpen !== this.state.modalVisible) {
      this.setState({ modalVisible: isOpen });
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible:false})}>
          <View style={styles.container}>

              <Text>row: {this.props.data.row}, col: {this.props.data.col}, value: {this.props.data.old_text}</Text>
              <TextInput
                editable = {true}
                maxLength = {40}
                placeholder="new value"
                onChangeText={(text) => this.setState({text})}
              />
              <View style={styles.cols}>
        <TouchableHighlight style={styles.isHalf}>
                <Button title="Save Changes" color="#841584" onPress={() => this.props.saveSheet(this.state.text,this.props.data.row,this.props.data.col)}/>
              </TouchableHighlight>

              <TouchableHighlight style={styles.isHalf}>
                <Button title="Hide Modal" onPress={() => this.setState({modalVisible:false})}/>
              </TouchableHighlight>
              </View>

          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#eaf1f4' },
  view: { marginTop: 22 },
  cols: { flex: 1, flexDirection: 'row' },
  isHalf: { width: '50%'}

});