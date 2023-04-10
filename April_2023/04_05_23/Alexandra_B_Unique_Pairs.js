var uniquePaths = function(m, n) {
    const unique_way = new Array(m).fill(1).map(() => new Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let move_right = unique_way[i - 1][j]
            let descend = unique_way[i][j - 1]
            unique_way[i][j] = move_right + descend;
        }
    }

    return unique_way[m - 1][n - 1];
};
