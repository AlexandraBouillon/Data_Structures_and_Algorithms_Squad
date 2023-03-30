const climbStairs = function(n) {

    if (n < 2) return 1;

    let first_step, second_step = 1;

    let third_step = 0;

    let i = 2;

    while (i <= n ) {

        third_step = first_step + second_step;

        first_step = second_step;

        second_step = third_step;

        i++
    }

    return third_step;
};
