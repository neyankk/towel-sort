module.exports = function towelSort (matrix) {
    var n = matrix.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = matrix[j];
          while (k >= i && matrix[k-i] > t)
           { matrix[k] = matrix[k-i]; k -= i; }
          matrix[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
  return matrix;
}
