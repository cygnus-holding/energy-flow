import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { useOutflowStore } from './store';

const mediumOptions = [
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
];

const unitOptions = [
  {
    value: 'unit1',
    label: 'Unit 1',
  },
  {
    value: 'unit2',
    label: 'Unit 2',
  },
  {
    value: 'unit3',
    label: 'Unit 3',
  },
];

function OutflowAddNode() {
  const { data, setOutflowData } = useOutflowStore();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOutflowData({ ...data, [name]: value });
  };

  return (
    <div className="p-2 shadow-md rounded-md bg-white  border-gray-400 text-xs">
      <div className="font-bold text-s mx-1  border-gray-300 pb-2">OUTFLOW ADD</div>
      <div className='border-b border-gray-300 mb-2'></div>

      <div className="mb-2">
        <div className="font-medium">Medium:</div>
        <select name="medium" value={data.medium} onChange={handleChange} className="w-full p-1 rounded border border-gray-300">
          {mediumOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <div className="font-s">Value:</div>
          <input name="value" value={data.value} onChange={handleChange} className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" />
        </div>
        <div>
          <div className="font-medium">Unit:</div>
          <select name="unit" value={data.unit} onChange={handleChange} className="w-full p-1 rounded border border-gray-300">
            {unitOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-2">
        <div className="font-s">Temperature [*C]:</div>
        <input name="temperature" value={data.temperature} onChange={handleChange} className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" />
      </div>

      <div className="mb-2 border-b border-gray-300 pb-2">
        <div className="font-s">Pressure [kPa]:</div>
        <input name="pressure" value={data.pressure} onChange={handleChange} className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" />
      </div>

      <div className=" border-gray-300 pb-2 flex justify-end text-sm font-medium mx-2">Output</div>

      <Handle
        type="source"
        position={Position.Right}
        id="out"
        style={{ background: '#555', width: '10px', height: '10px', top: "264px", bottom: "20px" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="in"
        style={{ background: '#555', width: '10px', height: '10px', top: "16px", left: "-4px" }}
      />
    </div>
  );
}

export default memo(OutflowAddNode);
