import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';

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
  const [medium, setMedium] = useState('');
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('');
  const [temperature, setTemperature] = useState('');
  const [pressure, setPressure] = useState('');

  return (
    <div className="p-2 shadow-md rounded-md bg-white border-gray-400 text-xs">
      <div className="font-bold text-s mx-1  border-gray-300 pb-2">OUTFLOW ADD</div>
      <div className='border-b border-gray-300 mb-2'></div>
      <div className="mb-2">
        <div className="font-medium">Medium:</div>
        <select className="w-full p-1 rounded border border-gray-300" onChange={(e) => setMedium(e.target.value)}>
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
          <input className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          <div className="font-medium">Unit:</div>
          <select className="w-full p-1 rounded border border-gray-300" onChange={(e) => setUnit(e.target.value)}>
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
        <input className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" onChange={(e) => setTemperature(e.target.value)} />
      </div>

      <div className="mb-2 border-b border-gray-300 pb-2">
        <div className="font-s">Pressure [kPa]:</div>
        <input className="w-full p-1 rounded border border-gray-300" type="number" step="0.01" onChange={(e) => setPressure(e.target.value)} />
      </div>

      <div className=" border-gray-300 pb-2 flex justify-end text-sm font-medium">Output</div>
      
      <Handle
        type="source"
        position={Position.Right}
        id="out"
        data={{ 
          medium: medium, 
          value: value, 
          unit: unit, 
          temperature: temperature, 
          pressure: pressure 
        }}
        style={{ background: '#555', width: '10px', height: '10px', left: "329px", top: "265px" }}
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
