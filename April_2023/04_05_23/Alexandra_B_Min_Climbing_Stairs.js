var minCostClimbingStairs = function(cost) {
    /*
    IN: Arr of nums
    Out: total min sum of nums to reach end of array
    if num[i+1] < num[i+2], i = num[i+1] && cost_of_nums =+ num[i+1]
    else i = num[i+2] && cost_of_nums =+ num[i+2]
    return cost_of_nums

    */
    let n = cost.length ;
    for(let i = 2 ; i < n ; i++){
        cost[i] = Math.min(cost[i-1] , cost[i-2]) + cost[i];
    }
    return Math.min(cost[n-1] , cost[n-2]);

};
