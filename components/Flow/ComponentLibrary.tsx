import React from 'react';

type ComponentLibraryProps = {
  addNode: (nodeType: string) => void;
};

const ComponentLibrary: React.FC<ComponentLibraryProps> = ({ addNode }) => {
  return (
    <div className="absolute top-10 left-10 bg-white p-4 rounded-md shadow-lg z-10">
      <h3 className="text-lg font-semibold mb-2">Component Library</h3>
      <button className="py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2" onClick={() => addNode('custom')}>Add Custom Node</button>
      <button className="py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2" onClick={() => addNode('input')}>Add Input Node</button>
      <button className="py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2" onClick={() => addNode('textUpdater')}>Add TextUpdater Node</button>
      <button className="py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2" onClick={() => addNode('annotation')}>Add Annotation Node</button>
      <button className="py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2" onClick={() => addNode('default')}>Add Default Node</button>
      <button className='py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2' onClick={() => addNode('process')}>Add Process Node</button>
      <button className='py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2' onClick={() => addNode('inflowAdd')}>Add Inflow Add Node</button>
      <button className='py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2' onClick={() => addNode('outflowAdd')}>Add Outflow Add Node</button>
      <button className='py-2 px-4 bg-gray-200 text-black rounded block w-full mt-2' onClick={() => addNode('outflowReceive')}>Add Inflow Receive Node</button>
    </div>
  );
}

export default ComponentLibrary;
