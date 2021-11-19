function halvingSum(n) {
    var i = 0;
    while(n > 0) {
      i += n;
      n = Math.floor(n / 2);
    }
    return i;
  }