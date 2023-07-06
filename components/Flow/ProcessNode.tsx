import React, { memo, useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

let processCount = 0;

const options = [
  {
    value: 'option1',
    label: 'Option 1',
  },
  {
    value: 'option2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    label: 'Option 3',
  },
  {
    value: 'option4',
    label: 'Option 4',
  },
];

function FlowItem({ id, title, initialHandlePosition }) {
  const [handles, setHandles] = useState([initialHandlePosition]);

  const addHandle = () => {
    setHandles([...handles, handles[handles.length - 1] + 1]);
  };

  const removeHandle = (index) => {
    setHandles(handles.filter((handle) => handle !== index + initialHandlePosition));
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <div className="font-semibold text-xs">{title}</div>
        <div>
          <button onClick={addHandle} className="rounded bg-none p-1 mr-2">+</button>
          {handles.length > 1 && <button onClick={() => removeHandle(handles.length - 1)} className="rounded bg-none p-1">-</button>}
        </div>
      </div>
      {handles.map((handle, index) => (
        <div key={index} className="mb-1">
          <select className="w-full p-1 rounded border border-gray-300 text-xs">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle}`}
            style={{ background: '#000', borderRadius: '1px', width: '6px', height: '10px', top: `${75 + handle * 32}px`, right: '-5px' }}
          />
        </div>
      ))}
    </div>
  );
}

function ProcessNode({ id }) {
  const [title, setTitle] = useState("Process");

  useEffect(() => {
    processCount += 1;
    setTitle(`Process ${processCount}`);
  }, []);

  return (
    <div className="p-3 w-72 shadow-lg rounded-lg bg-white border-gray-400">
      <div className="font-bold text-s mb-3 text-left border-b border-gray-300 pb-2 ">{title}</div>
      <div className="flex flex-col gap-4  text-s">
        <FlowItem id={id} title="INFLOWS" initialHandlePosition={1} />
        <hr className="border-gray-300 my-2"/>
        <FlowItem id={id} title="OUTFLOWS" initialHandlePosition={4} />
      </div>
    </div>
  );
}

export default memo(ProcessNode);
