var arr = [
    {
        item_id: 5,
        sub: [
            {
                item_id: 6,
                sub: [
                    {
                        item_id: 7,
                    },
                    {
                        item_id: 8,
                    },
                ],
            },
            {
                item_id: 9,
                sub: [
                    {
                        item_id: 10,
                    },
                    {
                        item_id: 11,
                    },
                ],
            },
        ],
    },
];

function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].item_id, value);
        if (arr[i].item_id === value) return [arr[i].item_id];
        if (arr[i].sub) {
            var temp = search(arr[i].sub, value);
            if (temp) return [arr[i].item_id, temp].flat();
        }
    }
}
search(arr, 7);
