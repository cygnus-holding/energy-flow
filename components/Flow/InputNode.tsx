import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

function InputNode() {
  const [value, setValue] = useState(0);

  const handleValueChange = (event) => {
    const val = parseInt(event.target.value, 10);
    setValue(val);
  };

  return (
    <div>
      <input type="number" value={value} onChange={handleValueChange} />
      <Handle type="source" position={Position.Right} id="out" data={value} />
    </div>
  );
}

export default InputNode;
