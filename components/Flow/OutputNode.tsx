import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function OutputNode({ data }) {
  return (
    <div className="output-node">
      {data.label}
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
      />
    </div>
  );
}

export default memo(OutputNode);
