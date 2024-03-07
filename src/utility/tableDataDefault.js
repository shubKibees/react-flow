// export const RelationDataDefault={
   
//    relationName:"Person",
//    Domain:["Property","Type","Default"],
//    RelationRowData:[
//       {property:"class",value:"IV",id:""},
//       {property:"No. student",value:"10"},
//       {property:"",value:""}
//    ]
  
// }

export const initialEdges = [
   { id: 'edge-1', source: 'node-1',sourceHandle: 'a', target: 'node-2' },
   { id: 'edge-2', source: 'node-1',sourceHandle: 'b', target: 'node-3'},
 ];

export const initialNodes = [
   { id: 'node-1',type:"relationNode", position: { x: 0, y: 0 }},
   { id: 'node-2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
   { id: 'node-3', data: { label: 'Node 3' }, position: { x: 200, y: 300 } },
   {id:'node-1a',type:"relationRow",data:{rowNo:"1"},position:{x:10,y:90},parentNode:"node-1"},
   {id:'node-2a',type:"relationRow",data:{rowNo:"2"},position:{x:10,y:140},parentNode:"node-1"},
 ];

