// Rotate an array 

// Rotate an array of n elements to the right by k steps. 

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].





// Method 1 - 

// Using intermediate array
// First find out correct number of rotations using mod
// Create temporary array
// Push array elements into that temporary array
// Copy that temporary array into  original array

// It will take O(n) space and O(n) time


function rotateArray(nums,k){
	if(isNaN(k) || k<0)	
		throw "error";
	if(nums.length==0)	
		throw "error";
	if(k>nums.length)
		k=k%nums.length;
	var result = [];

	for(var i=0;i<k;i++){
		result[i]=nums[nums.length-k+i];
	}		 	
	var j = 0;
	for(var i=k;i<nums.length;i++){
		result[i]=nums[j];
		j++;
	}

	nums=result.slice();
	console.log(nums);
}






// Method 2 -

// Using bubble rotate
// By using bubble swap, we can solve this problem. 
// Move array elements from right side to left side of the array using bubble swap

// It will take O(1) space and O(n*k) time


function rotateArray(nums,k){
	if(isNaN(k) || k<0)	
		throw "error";
	if(nums.length==0)	
		throw "error";

	var len = nums.length;

	for(var i=0;i<k;i++){
		for(var j=len-1;j>0;j--){
			var temp=nums[j];
			nums[j]=nums[j-1];
			nums[j-1]=temp;
		}
	}	
	console.log(nums);
}







// Method 3  -

// Using Reversal
// Divide array into 2 parts based on given order. Reverse first part and then reverse second, then reverse whole array 

//  It will take O(1) space and O(n) time


function rotateArray(nums,k){
	if(isNaN(k) || k<0)	
		throw "error";
	if(nums.length==0)	
		throw "error";
	k=k%nums.length;

	var a = nums.length - k;

	reverse(nums, 0, a-1);
    reverse(nums, a, nums.length-1);
    reverse(nums, 0, nums.length-1);

 console.log(nums);
}

function reverse(nums, left, right){
    while(left < right){
        var temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }   
}

rotate3([1,2,3,4,5,6],3);



// Method 4 -

// will even take negative values

//If n is greater than 0 it should rotate the array to the right. 
//If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

function rotate(array,n){
  n = n % array.length;
  return array.slice(-n).concat(array.slice(0,-n));
}





// var data = [1, 2, 3, 4, 5];

// Test.assertSimilar(rotate(data, 1)  , [5, 1, 2, 3, 4])
// Test.assertSimilar(rotate(data, 2)  , [4, 5, 1, 2, 3])
// Test.assertSimilar(rotate(data, 3)  , [3, 4, 5, 1, 2])
// Test.assertSimilar(rotate(data, 4)  , [2, 3, 4, 5, 1])
// Test.assertSimilar(rotate(data, 5)  , [1, 2, 3, 4, 5])

// Test.assertSimilar(rotate(data, 0)  , [1, 2, 3, 4, 5])

// Test.assertSimilar(rotate(data, -1) , [2, 3, 4, 5, 1])
// Test.assertSimilar(rotate(data, -2) , [3, 4, 5, 1, 2])
// Test.assertSimilar(rotate(data, -3) , [4, 5, 1, 2, 3])
// Test.assertSimilar(rotate(data, -4) , [5, 1, 2, 3, 4])
// Test.assertSimilar(rotate(data, -5) , [1, 2, 3, 4, 5])

// Test.assertSimilar(rotate(['a', 'b', 'c'], 1), ['c', 'a', 'b'])
// Test.assertSimilar(rotate([1.0, 2.0, 3.0], 1), [3.0, 1.0, 2.0])
// Test.assertSimilar(rotate([true, true, false], 1), [false, true, true])

// var data = [1, 2, 3, 4, 5]

// Test.assertSimilar(rotate(data, 7), [4, 5, 1, 2, 3])
// Test.assertSimilar(rotate(data, 11), [5, 1, 2, 3, 4])
// Test.assertSimilar(rotate(data, 12478), [3, 4, 5, 1, 2])



