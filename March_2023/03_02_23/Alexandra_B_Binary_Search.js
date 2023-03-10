const search = function(nums, target) { // [-1,0,3,5,9,12]
    let left_index = 0; // 3
    let right_index = nums.length-1; // 5
    while (left_index <= right_index){ // 0 < 5
        let mid_index = Math.floor((left_index + right_index)/2) // 2
        // console.log(mid_index)
        if (nums[mid_index] === target) { // 3 === 9
            return mid_index; //
        }
        else if (nums[mid_index] > target){ // 3 > 9
            right_index = mid_index-1;
        } else {
            left_index = mid_index+1; // 3
        }
    }
    return -1;
};
console.log(search([-1,0,3,5,9,12]));
