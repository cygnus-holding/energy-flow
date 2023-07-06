import { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
  Controls,
  Background,
  MarkerType,
  Handle,
  useStoreApi,
  useReactFlow,
} from 'reactflow';
import CustomNode from './CustomNode';
import DefaultNode from './DefaultNode';
import ComponentLibrary from './ComponentLibrary'; // <- new import
import ProcessNode from './ProcessNode';
import InflowAddNode from './InflowAddNode';
import OutflowAddNode from './OutflowAddNode';
import OutflowReceiveNode from './OutflowReceiveNode';


import 'tailwindcss/tailwind.css';

const initialNodes: Node[] = [
 {
    id: '1',
    type: 'process',
    data: {
      label: 'Input Node',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'inflowAdd',
    data: {
      label: 'Output Node',
    },
    position: { x: 800, y: 200 },
  },
  {
    id: '3',
    type: 'outflowAdd',
    position: { x: 800, y: -150 },
    data: {
      label: 'Output Node',
    },
  },
  {
    id: '4',
    type: 'outflowReceive',
    position: { x: 1200, y: -150 },
    data: {
      label: 'Receive Node',
    },
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e3-4', source: '3', target: '4' },

  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    sourceHandle: 'handle-0',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '3',
    target: '4',
    type: 'bezier',
    sourceHandle: 'handle-1',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '4', target: '3' },
];

const nodeTypes = {
  custom: CustomNode,
  default: DefaultNode,
  process: ProcessNode,
  inflowAdd: InflowAddNode,
  outflowAdd: OutflowAddNode,
  outflowReceive: OutflowReceiveNode, // <- new addition
};



const defaultEdgeOptions = {
  animated: true,
  type: 'bezier',
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (type: string) => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id: id,
      data: { 
        label: `Node ${id}`, 
        selects: type === 'custom' ? { 'handle-0': 'smoothstep', 'handle-1': 'smoothstep' } : {}
      },
      position: { x: Math.random() * window.innerWidth * 0.5, y: Math.random() * window.innerHeight * 0.5 },
      type: type,
    };
    setNodes((ns) => ns.concat(newNode));
  };
  

  return (
    <div className="h-screen bg-gray-200 relative">
      <ComponentLibrary addNode={addNode} />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.Bezier}
        fitView
      >
        <Background color="#ccc" variant="dots" />
        <Controls position='top-right' backgrouns-color='white' />
      </ReactFlow>
    </div>
  );
}

export default Flow;