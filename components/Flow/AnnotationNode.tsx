import React, { memo, useState, useEffect } from 'react';

function AnnotationNode({ data, id }) {
  const [text, setText] = useState(data.label);

  useEffect(() => {
    setText(data.label);
  }, [data.label]);

  const handleTextChange = (event) => {
    setText(event.target.value);
    // Here you can also update the text in the parent component or in your store
  };

  return (
    <div className="text-left px-4 py-2 bg-white text-xs text-centered border-2 border-gray-400 rounded w-auto shadow-md">
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
}

export default memo(AnnotationNode);
