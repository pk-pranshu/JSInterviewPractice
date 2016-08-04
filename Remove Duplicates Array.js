// Remove Duplicates From an Array 

Method 1 - 

var uniq = array.filter(function(item,pos){
	return array.indexOf(item)==pos;
});



Method 2 -

function uniq(array){
	var seen = {};
	return array.filter(function(item){
		return seen.hasOwnProperty(item) ? false : (seen[item]=true);
	});
}


Method 3 -

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}



Method 4 -

function uniq(arr){
    var map={};
    var newArr =[];
    for(var i=0;i<arr.length;i++){
        if(map.hasOwnProperty(arr[i])) continue;
        else{   
               map[arr[i]]=1;
               newArr.push(arr[i]);
        }       
    }
    return newArr;
}


function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}



Method 5 -

In ES6

var uniq = [ ...new Set(array) ];


