import React from 'react';
import "../style/relationNode.scss"
import { Handle, Position } from 'reactflow';

const RelationNode = ({ data, isConnectable }) => {

  return (
    <div>
      <Handle type="source" position={Position.Top} isConnectable={isConnectable} />
      <div className="relationnode">
        <div className="releation-name">Table_one</div>
        <div className="table nodrag">
          <div className="header">
            <div className="domain-name">Property</div>
            <div className="domain-value">Value</div>
          </div>
          <div className="body">
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default RelationNode;