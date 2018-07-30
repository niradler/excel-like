import React from 'react';
import _ from "lodash";
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const Col = (props) => (
    <TouchableOpacity onPress={() => props.openModal(props.old_text,props.row, props.col)}>
            <Text style={styles.text}>{props.old_text}</Text>
        </TouchableOpacity>
);

const EditTable = (props) => {
    const tableHead = ['','A', 'B', 'C'];
    const tableData = _.map(props.data.Cells, (k,row) => [row, ..._.map(k, (_k,col) => <Col openModal={props.openModal} old_text={_k} row={row} col={col} />)]);

    return (
        <Table
            borderStyle={{
            borderWidth: 2,
            borderColor: '#c8e1ff'
        }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
        </Table>
    )
}

const styles = StyleSheet.create({
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6
    }
});

export default EditTable;