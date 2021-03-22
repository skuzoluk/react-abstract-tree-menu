import React, { useState } from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import TreeMenu from 'react-abstract-tree-menu';
import TestData from './test-data.js';

export default function App() {
    const [selected, setSelected] = useState(-1);

    const onRenderNode = (nodeData, level, isParent, expanded, isSelected, onNodePress) => {
        return (
            <TouchableOpacity style={{backgroundColor: isParent ? '#bbb' : '#ddd'}} onPress={onNodePress}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 8, marginLeft: 4 + (level * 8) }}>
                    <Text>{(expanded ? '>' : '')+(isSelected ? '*' : '') + (expanded ? '-' : (isParent ? '+' : '')) + nodeData.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const onNodePress = (nodeData, level, isParent) => {
        if (!isParent) {
            setSelected(nodeData.id);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TreeMenu treeData={TestData} onNodePress={onNodePress} onRenderNode={onRenderNode} />
            </View>
            <Text>Selected menu id: {selected}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff',
    },
});
