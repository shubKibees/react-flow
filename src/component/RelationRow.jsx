import React, { useEffect } from 'react';
import { Handle, Position } from 'reactflow';

const RelationRow = ({ data }) => {
  data={...data, property:"class", value :"IV", parentId :"Person"}
  return (
    <div className="tuple nodrag">
      <Handle type='target' position={Position.Left} id={`${data.parentId}-tuple-${data.rowNo}a`} />
      <div className="domain-property">Class</div>
      <div className="domain-type">Type</div>
      <div className="domain-default">IV</div>
      <Handle type='target' position={Position.Right} id={`${data.parentId}-tuple-${data.rowNo}b`} />
    </div>
  );
};

export default RelationRow;


