import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function PrintDataNode({ data }) {
  const { medium, value, unit, temperature, pressure } = data;

  return (
    <div>
      <Handle type="target" position={Position.Left} id="in" />
      <div>Medium: {medium}</div>
      <div>Value: {value}</div>
      <div>Unit: {unit}</div>
      <div>Temperature: {temperature}</div>
      <div>Pressure: {pressure}</div>
    </div>
  );
}

export default memo(PrintDataNode);
