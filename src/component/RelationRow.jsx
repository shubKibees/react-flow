import React from 'react';
import { Handle, Position } from 'reactflow';

const RelationRow = ({ property, value }) => {
  let row = (
    <tr>
      <td>{property}</td>
      <td>
        <div>{value}</div>
        <Handle type='target' position={Position.Right} />
      </td>
    </tr>
  );
  
  return row = property !== "" ? row : null;
};

export default RelationRow;
