import React, { memo } from 'react';

function DefaultNode({ data }) {
  return (
    <div className="default-node">
      {data.label}
    </div>
  );
}

export default memo(DefaultNode);
