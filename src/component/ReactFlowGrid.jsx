import React,{useCallback} from 'react'
import {useFormData,useFormDataDispatch} from "../App"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import FormNodeUpdater from './FormNodeUpdater';
import RelationNode from './RelationNode';
import RelationRow from "./RelationRow"
 
import 'reactflow/dist/style.css';



const nodeTypes={RelationNodeDot:RelationNode,RelationRowDot:RelationRow};

const ReactFlowGrid = () => {
  const {initialEdges,initialNodes}=useFormData();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log(initialEdges,initialNodes);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
    return (
      <div >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    );
}

export default ReactFlowGrid