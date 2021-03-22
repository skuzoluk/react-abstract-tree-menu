import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TouchableOpacity, View, Text } from 'react-native';

const TestData = require('test-data');

function App() {
    const [selected, setSelected] = useState(-1);

    const onNodePress = (nodeData, level, isParent) => {
        if (!isParent) {
            setSelected(nodeData.id);
        }
    };

    const onRenderNode = (nodeData, level, isParent, expanded, isSelected, onNodePress) => {
        return (
            <TouchableOpacity style={{backgroundColor: isParent ? '#bbb' : '#ddd'}} onPress={onNodePress}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 8, marginLeft: 4 + (level * 8) }}>
                    <Text>{(expanded ? '>' : '')+(isSelected ? '*' : '') + (expanded ? '-' : (isParent ? '+' : '')) + nodeData.label}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <>
            <View>
                <TreeMenu treeData={TestData} onNodePress={onNodePress} onRenderNode={onRenderNode} />
            </View>
            <Text>Selected menu id: {selected}</Text>
        </>
    );
}


ReactDOM.render(
    App,
    document.getElementById('root')
);
