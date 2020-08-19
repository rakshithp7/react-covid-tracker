import React from "react";

const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td></td>
          <td></td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
