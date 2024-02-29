import React from 'react';
import { RelationDataDefault } from "../utility/tableDataDefault";
import RelationRow from './RelationRow';
import { Handle, Position } from 'reactflow';
import "../style/relationNode.scss"

const RelationNode = () => {
  return (
    <div className="relationnode">
      <Handle type="target" position={Position.Top} />
      <div className="releation-name">{RelationDataDefault.relationName}</div>
      <table>
        <thead>
          <tr>
            {
              RelationDataDefault.Domain.map((domain, index) => {
                return <th key={index}>{domain}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            RelationDataDefault.RelationRowData.map(({property,value},index)=>{
              return <RelationRow key={index} property={property} value={value}>
              </RelationRow>;
            })
          }
        </tbody>
      </table>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default RelationNode;