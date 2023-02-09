const runningSum = function(nums) {
    let num_sum = 0;
    let new_nums = []
    for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        num_sum += num
        // new_nums.push(num_sum + num)
        new_nums[i] = num_sum;
    }
    return new_nums;
};

console.log(runningSum([1,2,3,4])); // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]
