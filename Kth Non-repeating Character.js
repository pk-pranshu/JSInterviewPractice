K’th Non-repeating Character

Examples:

Input : str = geeksforgeeks, k = 3
Output : r
First non-repeating character is f,
second is o and third is r.

Input : str = geeksforgeeks, k = 2
Output : o

Input : str = geeksforgeeks, k = 4
Output : Less than k non-repeating
         characters in input.



Method 1 (Simple : O(n2)
A Simple Solution is to run two loops. Start traversing from left side. 
For every character, check if it repeats or not. 
If the character doesn’t repeat, increment count of non-repeating characters. 
When the count becomes k, return the character.



Method 2 (O(n) but requires two traversals)

Create an empty hash.
Scan input string from left to right and insert values and their counts in the hash.
Scan input string from left to right and keep count of characters with counts more than 1. 
When count becomes k, return the character.



Method 3 (O(n) and requires one traversal)
The idea is to use two auxiliary arrays of size 256 (Assuming that characters are stored using 8 bits). 

The two arrays are:

count[x] : Stores count of character 'x' in str.
           If x is not present, then it stores 0.

index[x] : Stores indexes of non-repeating characters
           in str. If a character 'x' is not  present
           or x is repeating, then it stores  a value
           that cannot be a valid index in str[]. For 
           example, length of string.
Initialize all values in count[] as 0 and all values in index[] as n where n is length of string.
Traverse the input string str and do following for every character c = str[i].
Increment count[x].
If count[x] is 1, then store index of x in index[x], i.e., index[x] = i
If count[x] is 2, then remove x from index[], i.e., index[x] = n
Now index[] has indexes of all non-repeating characters. 
Sort index[] in increasing order so that we get k’th smallest element at index[k].
Note that this step takes O(1) time because there are only 256 elements in index[].

After sorting, if index[k-1] is value, then 
return it, else return -1.




var str = "geeksforgeeks";
var newStr = str.split('');
var count = {};
var index = {};
var n = newStr.length;
for(var i=0;i<n;i++){
	count[i]=0;
	index[i]=n;
}

for(var j=0;j<n;j++){
	var key = newStr[j];
	count[key]++;

    if (count[key] == 1)
       index[key] = i;
 
    if (count[key] == 2)
       index[key] = n;
}
 
    sort(index);
 
    // After sorting, if index[k-1] is value, then 
    // return it, else return -1.
    return (index[k-1] != n)? index[k-1] : -1;
}

}









