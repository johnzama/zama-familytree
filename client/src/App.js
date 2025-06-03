import React from 'react';
import Tree from 'react-d3-tree';
import treeData from './treeData';

const containerStyles = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#f9f9f9',
};

function App() {
  // Dynamically center the root node
  const translate = {
    x: window.innerWidth / 2,
    y: 100,
  };

  return (
    <div style={containerStyles}>
      <Tree
        data={treeData}
        orientation="horizontal" // makes wide families easier to visualize
        translate={translate}
        pathFunc="step"
        nodeSize={{ x: 250, y: 150 }} // tighter spacing
        separation={{ siblings: 1, nonSiblings: 1.2 }} // balance between spacing
      />
    </div>
  );
}

export default App;
