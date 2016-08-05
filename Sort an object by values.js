Example 1 -

var obj = {
    "1": "google",
    "2": "yahoo",
    "3": "msn",
    "4": "stackoverflow",
    "5": "github",
    "6": "jsfiddle",
    "7": "amazon",
    "8": "ebay"
};

var arr = [];

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]);
    }
}

console.log(arr.sort());




Output ==>
["amazon", "ebay", "github", "google", "jsfiddle", "msn", "stackoverflow", "yahoo"]





Example 2-

var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};


var arr2 = [];
for(var j in list){
  if(list.hasOwnProperty(j)){
    arr2.push([j,list[j]]);
  }
}
arr2.sort(function(a,b){
  return a[1]-b[1];
});

console.log(arr2);



Output ==>

[["you", 100], ["me", 75], ["foo", 116], ["bar", 15]]






Example 3 -

function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return a.value - b.value; });
    //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
    return arr; // returns array
}

var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
var arr = sortObject(list);
console.log(arr);




Output ==>

[[object Object] {
  key: "bar",
  value: 15
}, [object Object] {
  key: "me",
  value: 75
}, [object Object] {
  key: "you",
  value: 100
}, [object Object] {
  key: "foo",
  value: 116
}]