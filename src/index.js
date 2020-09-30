
exports.min = function min (array) {
  if ( !Array.isArray(array) || array == 0 ) {
    return 0;
  }
  else {
    return Math.min.apply( Math, array );
  }
}

exports.max = function max (array) {
  if ( !Array.isArray(array) || array == 0 ) {
    return 0;
  }else {
    return Math.max.apply( Math, array );
  }
  
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array == 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b, 0)/array.length;
}
