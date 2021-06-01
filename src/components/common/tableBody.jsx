import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  // Conditionally renders the item based on whether
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  // Creates a unique key for every index of the table
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column, item.link)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
