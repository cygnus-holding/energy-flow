import React, { ChangeEvent, memo } from 'react';
import { Handle, Position, useReactFlow, useStoreApi } from 'reactflow';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {
    value: 'smoothstep',
    label: 'Smoothstep',
  },
  {
    value: 'step',
    label: 'Step',
  },
  {
    value: 'default',
    label: 'Bezier (default)',
  },
  {
    value: 'straight',
    label: 'Straight',
  },
];

interface SelectProps {
  value: string;
  handleId: string;
  nodeId: string;
  top: number;
}

const Select: React.FC<SelectProps> = ({ value, handleId, nodeId, top }) => {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="flex flex-col p-2 mr-4">
      <div>Edge Type</div>
      <select className="nodrag bg-white p-1 rounded border" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle
        type="source"
        position={Position.Right}
        id={handleId}
        style={{ background: '#000', borderRadius: '2px', width: '6px', height: '10px', top: `${top}px`, right: '-5px' }}
      />
    </div>
  );
}

interface CustomNodeProps {
  id: string;
  data: {
    selects: {
      [key: string]: string;
    };
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <div className="px-2 py-2 shadow-md rounded-md bg-white border-2 border-gray-400">
      <div className="font-bold mb-2">This is a <strong>custom node</strong></div>
      <div>
        {Object.keys(data.selects).map((handleId, index) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} top={70 + index * 70} />
        ))}
      </div>
    </div>
  );
}

export default memo(CustomNode);
