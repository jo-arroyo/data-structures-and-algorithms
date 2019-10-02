let floodFill = function(image, sr, sc, newColor) {
  let original = image[sr][sc];
  fillHelper(image, sr, sc, newColor, original);
  return image;
};

let fillHelper = function(image, r, c, newColor, original){
  if(image[r][c] === original){
    image[r][c] = newColor;
    if (r >= 1){
      fillHelper(image, r-1, c, newColor, original);
    }
    if (c >= 1){
      fillHelper(image, r, c-1, newColor, original);
    }
    if (r+1 < image.length){
      fillHelper(image, r+1, c, newColor, original);
    }
    if (c+1 < image[0].length){
      fillHelper(image, r, c+1, newColor, original);
    }
  }
};

module.exports = floodFill;