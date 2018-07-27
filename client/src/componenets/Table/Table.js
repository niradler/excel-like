import React from 'react';
import _ from 'lodash';
import './Table.css';

const Table = (props) => {

    const charCodeA = "A".charCodeAt(0);
    const headers = new Array(3).fill(0).map((d,i) => String.fromCharCode(charCodeA + i))
    const buildCells = (cells) => {
      return _.map(cells, (k,i) => {
        return <tr>
          <td>{i}</td>
          {_.map(k, (_k,j) =><td onClick={() =>props.openModal(_k, i ,j)}>{_k}</td>)}
        </tr>
      })
    } 

    return (
      
    <div className="Table ">
    <table className="table is-hoverable is-bordered">
      <thead>
        <tr>
          <th></th>
          {headers.map(t => <th>{t}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        {buildCells(props.doc.Cells)}
      </tbody>
    </table>
    </div>);

}

export default Table;
