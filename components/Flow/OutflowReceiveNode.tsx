import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { useOutflowStore } from './store';

function OutflowReceiveNode() {
  const { data } = useOutflowStore();

  return (
    <div>
      <Handle type="source" position={Position.Left} id="a" style={{ background: '#555' }} />
      <div>
        <p>Medium: {data.medium}</p>
        <p>Value: {data.value}</p>
        <p>Unit: {data.unit}</p>
        <p>Temperature: {data.temperature}</p>
        <p>Pressure: {data.pressure}</p>
      </div>
      <Handle type="target" position={Position.Right} id="b" style={{ background: '#555' }} />
    </div>
  );
}

export default memo(OutflowReceiveNode);
