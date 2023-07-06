import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { useOutflowStore } from './store';

function OutflowAddNode() {
  const { data, setOutflowData } = useOutflowStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOutflowData({ ...data, [name]: value });
  };

  return (
    <div>
      <Handle type="source" position={Position.Left} id="a" style={{ background: '#555' }} />
      <div>
        <label>Medium: </label>
        <input type="text" name="medium" value={data.medium} onChange={handleChange} />
      </div>
      <div>
        <label>Value: </label>
        <input type="number" name="value" value={data.value} onChange={handleChange} />
      </div>
      <div>
        <label>Unit: </label>
        <input type="text" name="unit" value={data.unit} onChange={handleChange} />
      </div>
      <div>
        <label>Temperature: </label>
        <input type="number" name="temperature" value={data.temperature} onChange={handleChange} />
      </div>
      <div>
        <label>Pressure: </label>
        <input type="number" name="pressure" value={data.pressure} onChange={handleChange} />
      </div>
      <Handle type="target" position={Position.Right} id="b" style={{ background: '#555' }} />
    </div>
  );
}

export default memo(OutflowAddNode);
