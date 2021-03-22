import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TestData from './test-data.js';

function App() {
    const [selected, setSelected] = useState(-1);

    const onNodePress = (nodeData, level, isParent) => {
        if (!isParent) {
            setSelected(nodeData.id);
        }
    };

    const onRenderNode = (nodeData, level, isParent, expanded, isSelected, onNodePress) => {
        return (
            <button style={{backgroundColor: isParent ? '#bbb' : '#ddd'}} onClick={onNodePress}>
                {(expanded ? '>' : '')+(isSelected ? '*' : '') + (expanded ? '-' : (isParent ? '+' : '')) + nodeData.label}
            </button>
        )
    };

    return (
        <>
            <div>
                <TreeMenu treeData={TestData} onNodePress={onNodePress} onRenderNode={onRenderNode} />
            </div>
            <span>Selected menu id: {selected}</span>
        </>
    );
}


ReactDOM.render(
    App,
    document.getElementById('root')
);
