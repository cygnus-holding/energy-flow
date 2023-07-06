import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { useOutflowStore } from './store';

function OutflowReceiveNode() {
  const { data } = useOutflowStore();

  return (
    <div className="p-2 shadow-md rounded-md bg-white border-gray-400 text-xs">
      <div className="font-bold text-s mx-1 border-gray-300 pb-2">OUTFLOW RECEIVE</div>
      <div className='border-b border-gray-300 mb-2'></div>
      
      <div className="mb-2">
        <div className="font-medium">Medium:</div>
        <div>{data.medium}</div>
      </div>

      <div className="mb-2">
        <div>
          <div className="font-s">Value:</div>
          <div>{data.value}</div>
        </div>
        </div> 
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <div className="font-medium">Unit:</div>
          <div>{data.unit}</div>
        </div>
      </div>

      <div className="mb-2">
        <div className="font-s">Temperature [*C]:</div>
        <div>{data.temperature}</div>
      </div>

      <div className="mb-2 border-b border-gray-300 pb-2">
        <div className="font-s">Pressure [kPa]:</div>
        <div>{data.pressure}</div>
      </div>



      <Handle
        type="target"
        position={Position.Left}
        id="in"
        style={{ background: '#555', width: '10px', height: '10px', top: "16px", left: "-5px" }}
      />
    </div>
  );
}

export default memo(OutflowReceiveNode);
