const pivotIndex = function(nums) {
    let right_sum = 0;
    let left_sum = 0;
    nums.forEach(num => right_sum += num)
    for(let i = 0; i <= nums.length-1; i++) {
      let num = nums[i];
      right_sum -= num;
      if (left_sum === right_sum) return i;
      left_sum += num;
    }
    return -1;

};


console.log(pivotIndex([1,7,3,6,5,6])); // 3
// console.log(pivotIndex([1,2,3])); // -1
// console.log(pivotIndex([2,1,-1])); // 0
