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

import RelationNode from './RelationNode';
import RelationRow from './RelationRow';

const initialNodes = [
  { id: 'node-1',type:"relationNode", data: { label: 'Node 1' }, position: { x: 0, y: 0 },style: {
    width: 170,
  },},
  { id: 'node-2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'node-3', data: { label: 'Node 3' }, position: { x: 200, y: 300 } },
  {id:'node-1a',type:"relationRow",data:{label:"Node 1a"},position:{x:0,y:20},parentNode:"node-1",style:{Background:"red"}},
];

const initialEdges = [
  { id: 'edge-1', source: 'node-1',sourceHandle: 'a', target: 'node-2' },
  { id: 'edge-2', source: 'node-1',sourceHandle: 'b', target: 'node-3'},
];
const nodeTypes = { relationNode: RelationNode,relationRow:RelationRow };

const ReactFlowGrid = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  useEffect(() => {
    console.log(edges);
  }, [edges]);

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
          nodes={nodes}
          edges={edges}
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