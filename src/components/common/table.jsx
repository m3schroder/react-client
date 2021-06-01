import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

/* Component Description
   The sortColumn in the parent component should look similar to
   sortColumn: { path: "numberInStock", order: "asc" },

   Columns can look like the following 
      const columns = [
      { label: "Title", path: "title", content: (render a component here)},
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      {
        key: "like",
        content: (movie) => (
          <LikeButton onClick={this.props.onLike} item={movie} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie, movies.length)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
    ];
*/
const Table = ({ data, columns, sortColumn, onSort, formRoute }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} formRoute={formRoute} />
    </table>
  );
};

export default Table;
