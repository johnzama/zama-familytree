import React from 'react';
import Tree from 'react-d3-tree';
import treeData from './treeData';

const containerStyles = {
  width: '100vw',
  height: '100vh',
};

function App() {
  return (
    <div style={containerStyles}>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 300, y: 100 }}
        pathFunc="step"
      />
    </div>
  );
}

export default App;
