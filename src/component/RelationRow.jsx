import React, { useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { useFormData,useFormDataDispatch } from '../App';

const RelationRow = ({ property, value }) => {
  const dispatch = useFormDataDispatch();

  useEffect(() => {
    dispatch({ type: "addNode", node: { type: "RelationRowDot" } });
    return () => {
    };
  }, [dispatch]); 

  console.log(useFormData())

  return (
    <tr>
      <td>{property}</td>
      <td>
        <div>{value}</div>
        <Handle type='target' position={Position.Right} />
      </td>
    </tr>
  );
};

export default RelationRow;
