import React,{useCallback} from 'react'
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

const initialNodes = [
  { id: '4', type:'RelationNodeDot',position: { x: 50, y: 200 }, data: { label: '4' } },
  { id: '5', type:'RelationNodeDot',position: { x: 100, y: 300 }, data: { label: '6' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes={RelationNodeDot:RelationNode,RelationRowDot:RelationRow};

const ReactFlowGrid = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  console.log()
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