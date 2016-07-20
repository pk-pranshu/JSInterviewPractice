
/ Input - array of items
[
    {
        itemId: 111111,
        title: 'Item-1',
        sellerName: 'seller-1',
        category: 'Electronics, Fitness'
    },
    {
        itemId: 222222,
        title: 'Item-2',
        sellerName: 'seller-2',
        category: 'Cars'
    },
    {
        itemId: 333333,
        title: 'Item-3',
        sellerName: 'seller-3',
        category: 'Electronics'
    },
    {
        itemId: 444444,
        title: 'Item-4',
        sellerName: 'seller-4',
        category: 'Cars,Bikes'
    }
    
]



//output - Group the items into Categories
{
    Electronics: [
        {
            itemId: 111111,
            title: 'Item-1',
            sellerName: 'seller-1' 
        },
        {
            itemId: 333333,
            title: 'Item-3',
            sellerName: 'seller-3'
        }
    ],
    Cars: [
        {
            itemId: 222222,
            title: 'Item-2',
            sellerName: 'seller-2'
        },
        {
            itemId: 444444,
            title: 'Item-4',
            sellerName: 'seller-4'
        }
    ],
    Bikes: [
        {
            itemId: 444444,
            title: 'Item-4',
            sellerName: 'seller-4'
        }
    ],

    Fitness: [
        {
            itemId: 111111,
            title: 'Item-1',
            sellerName: 'seller-1'
        }
    ]
}


function groupByCategories(arr){


    var l= arr.length;
      
    var newMap={};
    for(var i=0;i<l;i++){
        var item =arr[i];
        if(!newMap[item.category]) {
            newMap[item.category] = [];
        }

        newMap[item.category].push({
            itemId: item.itemId,
            title: item.title,
            sellerName:item.sellerName
        });
    }
    
      var result = [];

        for(var x in newMap) {
            if(Object.prototype.hasOwnProperty.call(newMap, x)) {
            var obj = {};
            obj[x] = newMap[x];
            result.push(obj);
        }
    }   
    
}
    
    

    
    
    
    
    


}


