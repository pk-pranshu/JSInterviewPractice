Find the maximum repeating number in O(n) time and O(1) extra space


// The naive approach is to run two loops, the outer loop picks an element one by one, the inner loop counts number of occurrences of the picked element.
// Finally return the element with maximum count. Time complexity of this approach is O(n^2).

// A better approach is to create a count array of size k and initialize all elements of count[] as 0. 
// Iterate through all elements of input array, and for every element arr[i], increment count[arr[i]]. 
// Finally, iterate through count[] and return the index with maximum value. This approach takes O(n) time, but requires O(k) space.


// 1) Iterate though input array arr[], for every element arr[i], increment arr[arr[i]%k] by k (arr[] becomes {2, 11, 11, 29, 11, 12, 1, 15 })

// 2) Find the maximum value in the modified array (maximum value is 29). Index of the maximum value is the maximum repeating element (index of 29 is 3).

// 3) If we want to get the original array back, we can iterate through the array one more time and do arr[i] = arr[i] % k where i varies from 0 to n-1.



function maxRepeating(arr,k){

	for(var i =0;i<arr.length;i++){
		arr[(arr[i]%k)]+=k;
	}

	var max =arr[0];
	var index = 0;

	for(var j=1;j<arr.length;j++){
		if(arr[j]>max){
			max = arr[j];
			index =j;
		}
	}
	return index;
}


maxRepeating([2, 3, 3, 5, 3, 4, 1, 7],8);







Another Method using HashTable -->

function mode(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}