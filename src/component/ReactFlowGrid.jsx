import React,{useCallback,useEffect} from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyEdgeChanges, 
  applyNodeChanges
} from 'reactflow';


import 'reactflow/dist/style.css';

import "../style/relationNode.scss"

import RelationNode from './RelationNode';
import RelationRow from './RelationRow';
import { useNode } from '../App';
const nodeTypes = { relationNode: RelationNode,relationRow:RelationRow };

const ReactFlowGrid = () => {
  const node = useNode;
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
    return (
      <div >
        <ReactFlow
          nodes={node.initialNodes}
          edges={node.initialEdges}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    );
}

export default ReactFlowGrid;

