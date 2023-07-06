import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="h-12 border-solid border-1 border-gray-300 p-1 rounded-md bg-white">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="flex flex-col">
        <label htmlFor="text" className="text-gray-600 text-sm">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag border-solid border-1 border-gray-300 p-1 rounded-sm" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
