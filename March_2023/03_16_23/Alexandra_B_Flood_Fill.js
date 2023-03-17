const floodFill = function(image, sr, sc, color, first_color = image[sr][sc]) {
    if (sr < 0 || sc < 0
    || sr >= image.length || sc >= image[sr].length
    || image[sr][sc] !== first_color
    || image[sr][sc] === color
    ) return image;

    image[sr][sc] = color;

    floodFill(image, sr + 1, sc, color, first_color);
    floodFill(image, sr - 1, sc, color, first_color);
    floodFill(image, sr, sc + 1, color, first_color);
    floodFill(image, sr, sc -1, color, first_color);

    return image;
};
