import React, { useState, useContext } from 'react';

const RenderList = ({children, level, onNodePress, onRenderNode}) => (
    children.map(item =>
        <TreeNode
            key={item.id}
            nodeData={item}
            level={level}
            onNodePress={onNodePress}
            onRenderNode={onRenderNode}
        />
    )
);

const TreeContext = React.createContext({
    selectedId: -1,
    expandedId: -1,
    singleExpanded: false
});

const TreeNode = ({ nodeData, level, onNodePress, onRenderNode }) => {
    const treeContext = useContext(TreeContext);
    let { id, children } = nodeData;
    let isSelected = treeContext.selectedId === id;
    const [expanded, setExpanded] = useState(false);
    let isExpanded = treeContext.singleExpanded ? treeContext.expandedId[level] === id : expanded;
    const isParent = children && children.length > 0;
    const onItemPress = () => {
        if (isParent) {
            setExpanded(!expanded);
            onNodePress(nodeData, level, true);
        } else {
            onNodePress(nodeData, level, false);
        }
    };

    return (
        <>
            {onRenderNode(nodeData, level, isParent, isExpanded, isSelected, onItemPress)}
            {
                isParent && isExpanded &&
                <RenderList children={children} level={level+1} onNodePress={onNodePress} onRenderNode={onRenderNode} />
            }
        </>
    )
};

const TreeMenu = ({ treeData, onNodePress, onRenderNode, singleExpanded }) => {
    const [selectedId, setSelectedId] = useState(-1);
    const [expandedId, setExpandedId] = useState([]);

    const onItemPress = (nodeData, level, isParent) => {
        let { id } = nodeData;
        onNodePress(nodeData, level, isParent);
        if (isParent) {
            const isExpanded = expandedId[level] === id;
            let newExpanded = expandedId.filter((item ,ind) => ind < level);
            if (!isExpanded) {
                newExpanded[level] = id;
            }
            setExpandedId(newExpanded);
        } else {
            setSelectedId(id);
        }
    };

    return (
        <TreeContext.Provider value={{ selectedId, expandedId, singleExpanded }}>
            <RenderList children={treeData} level={0} onNodePress={onItemPress} onRenderNode={onRenderNode} />
        </TreeContext.Provider>
    )
};

export default TreeMenu;
