export default [
    {
        id: 1,
        label: 'Main menu 1',
        children: [
            {
                id: 2,
                label: 'parent menu 1-1',
                children: [
                    {
                        id: 11,
                        label: 'menu item-1'
                    },
                    {
                        id: 12,
                        label: 'parent menu 1-1-1',
                        children: [
                            {
                                id: 13,
                                label: 'menu item-2'
                            },
                            {
                                id: 14,
                                label: 'menu item-3',
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                label: 'parent menu 1-2',
                children: [
                    {
                        id: 7,
                        label: 'menu item-4'
                    },
                    {
                        id: 8,
                        label: 'parent menu 1-2-1',
                        children: [
                            {
                                id: 9,
                                label: 'menu item-5'
                            },
                            {
                                id: 10,
                                label: 'menu item-6',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        label: 'Main menu 2',
        children: [
            {
                id: 5,
                label: 'menu item-7',
            },
            {
                id: 6,
                label: 'menu item-8',
            }
        ]
    },
];
