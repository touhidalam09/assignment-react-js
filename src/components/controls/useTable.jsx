import React from "react";

function UseTable(tableTitle, headerCells) {
  const TblContainer = (props) => (
    <>
      <div className="text-center py-2">
        <h2> {tableTitle}</h2>
      </div>
      <table className="table text-light">{props.children}</table>
    </>
  );

  const TblHead = (props) => {
    return (
      <>
        <thead>
          <tr>
            {headerCells.map((headerCell) => (
              <th key={headerCell.id} scope="col">
                {headerCell.label}
              </th>
            ))}
          </tr>
        </thead>
      </>
    );
  };

  return { TblContainer, TblHead };
}

export default UseTable;
