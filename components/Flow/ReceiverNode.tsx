import React from 'react';
import { Handle, Position } from 'reactflow';

function ReceiverNode({ data }) {
  return (
    <div>
      <Handle type="target" position={Position.Left} id="in" />
      <div>Value: {data.value || 'None'}</div>
    </div>
  );
}

export default ReceiverNode;
