const pivotIndex = function(nums) {
    if (!nums) return 0;
    if (nums.length-1 % 2 === 0) return -1
    let middle_index = nums.length/2;
    console.log('middle_index',middle_index);
    let left_sum = 0;
    let right_sum = 0;
    for (let i = 0; i < middle_index && i < nums.length; i++) {
        left_sum +=nums[i];
        let right_num = nums[middle_index+1+i]
        right_sum += right_num;
        console.log('right_num',right_num);
    }
    console.log('left_sum',left_sum);
    console.log('right_sum',right_sum);
    if (left_sum === right_sum) return middle_index;

};


console.log(pivotIndex([1,7,3,6,5,6])); // 3
// console.log(pivotIndex([1,2,3])); // -1
// console.log(pivotIndex([2,1,-1])); // 0
