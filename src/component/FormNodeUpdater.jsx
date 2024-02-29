import React,{useCallback} from 'react';
import { Handle,Position } from 'reactflow';

const handleStyle = { left: '10px' };

const FormNodeUpdater = () => {
   const onChange=useCallback((e)=>{
      console.log(e.target.value);
   },[])
  return (
   <>
   <Handle type="target" position={Position.Left} />
   <div className="input-name">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={onChange} className='nodrag' />
   </div>
   <Handle type="target" position={Position.Right} />
   </>
  )
}

export default FormNodeUpdater