import React, { useEffect } from 'react';
import { Handle, Position } from 'reactflow';

const RelationRow = ({ property, value }) => {
  return (
    <div className="tuple nodrag">
       <Handle type='target' position={Position.Left} />
       <div className="domain-input">Class</div>
       <div className="domain-input">IV</div>
       <Handle type='target' position={Position.Right} />
    </div>
  );
};

export default RelationRow;
