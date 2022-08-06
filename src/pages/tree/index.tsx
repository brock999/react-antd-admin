import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import { FC } from 'react';

const treeData: DataNode[] = [
  {
    title: '一级 1',
    key: '1',
    children: [
      {
        title: '二级 1-1',
        key: '1-1',
        // disabled: true,
        children: [
          {
            title: '三级 1-1-1',
            key: '1-1-1',
            // disableCheckbox: true,
          },
          {
            title: '三级 1-1-2',
            key: '1-1-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const TreePage: FC = () => {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default TreePage;
