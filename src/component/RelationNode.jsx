import React from 'react';
import "../style/relationNode.scss"
import { Handle, Position } from 'reactflow';
// import { RelationDataDefault } from '../utility/tableDataDefault';
import { useNode,useNodeDispatch } from '../App';

const RelationNode = ({ data={relationName:"Person",
Domain:["Property","Type","Default"],
RelationRowData:[
   {property:"class",value:"IV",id:""},
   {property:"No. student",value:"10"},
   {property:"",value:""}
]}, isConnectable }) => {
  const node = useNode();
  const dispatch = useNodeDispatch();
  return (
    <div>
      <Handle type="source" position={Position.Top} isConnectable={isConnectable} id={`${data.relationName}-H1`} />
      <div className="relationnode">
        <div className="releation-name">{data.relationName}</div>
        <div className="table">
          <div className="header">
            <div className="domain-name">{data.Domain[0]}</div>
            <div className="domain-value">{data.Domain[1]}</div>
            <div className="domain-default">{data.Domain[2]}</div>
          </div>
          <div className="body">
            {
              // data.RelationRowData.map((row,index)=>(
                dispatch({type:"add_row",payload:{id:'node-2a',type:"relationRow",data:{rowNo:"3"},position:{x:10,y:140},parentNode:"node-1"}})
              // ))
            }
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} id={`${data.relationName}-H2`} />
    </div>
  );
};

export default RelationNode;