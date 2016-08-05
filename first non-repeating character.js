Given a string, find its first non-repeating character


// We can use string characters as index and build a count array. Following is the algorithm.

// Scan the string from left to right and construct the count array.
// Again, scan the string from left to right and check for count of each
// character, if you find an element who's count is 1, return it.


var str = "GeeksForGeeks";
var newStr = str.split('');
var map={};
for(var i=0;i<str.length;i++){
	var key=newStr[i];
	if(map.hasOwnProperty(key))
		map[key]++;
	else
		map[key]=1;
}

for(var j=0;j<str.length;j++){
	var letter=newStr[j];
	if(map[letter]===1){
		console.log(letter);
		break;
	}
}



// The above approach takes O(n) time, but in practice it can be improved. The first part of the algorithm runs through the string to construct 
// the count array (in O(n) time).
// This is reasonable. But the second part about running through the string again just to find the first non-repeater is not good in practice. 
// In real situations, your string is expected to be much larger than your alphabet. 
// Take DNA sequences for example: they could be millions of letters long with an alphabet of just 4 letters.


// We can augment the count array by storing not just counts but also the index of the first time you encountered the character 
// e.g. (3, 26) for ‘a’ meaning that ‘a’ got counted 3 times and the first time it was seen is at position 26. 
// So when it comes to finding the first non-repeater, we just have to scan the count array, instead of the string.