// Repeated strings

function repeatedStrings(s, n) {
  var s_length = s.length;
  var quotient = Math.floor(n / s_length);
  var remainder = n % s_length;
  var count_a = 0;
  var total_a = 0;

  for (var i = 0; i < s_length; i++) {
    if (s[i] === "a" || s[i] === "A") {
      count_a += 1;
    }
  }
  total_a = quotient * count_a;
  if (remainder !== 0) {
    for (var j = 0; j < remainder; j++) {
      if (s[j] === "a" || s[j] === "A") {
        total_a += 1;
      }
    }
  }
  return total_a;
}

//var s = "aba";
//var n = 10;

// console.log(repeatedStrings(s, n));

// kangaroo

function kangaroo(x1, v1, x2, v2) {
  while (x1 != x2) {
    if (x1 > x2 && v1 > v2) {
      return "NO";
    } else if (x1 < x2 && v1 < v2) {
      return "NO";
    } else if (x1 != x2 && v1 == v2) {
      return "NO";
    } else if (x1 === 1000) {
      return "NO";
    }
    x1 = x1 + v1;
    x2 = x2 + v2;
  }
  if (x1 == x2) {
    return "YES";
  } else return "NO";
}

//console.log(kangaroo(0, 2, 5, 3));

//  iceCreamParlor

function iceCreamParlor(m, arr) {
  var flavour = [];
  flavour = arr;
  var j = 1;
  var possible = [];

  //check the how many flavours are possible from array
  for (var i = 0; i < flavour.length; i++) {
    for (j = i + 1; j < flavour.length; j++) {
      if (flavour[i] + flavour[j] === m) {
        possible.push(i + 1);
        possible.push(j + 1);
        //console.log(possible);
      }
    }
  }

  return possible;
}

//var m = 4;
//var arr = [5, 3, 2, 1, 4];
//var arr = [2, 2, 4, 3];
//console.log(iceCreamParlor(m, arr));

//migratoryBirds

function migratoryBirds(arr) {
  var birds_arr = arr;
  var noOfBirds = birds_arr.length;
  var typeOfBirds = [0, 0, 0, 0, 0];
  for (var k = 1; k <= typeOfBirds.length; k++) {
    for (var i = 0; i < noOfBirds; i++) {
      if (birds_arr[i] === k) {
        typeOfBirds[k - 1] += 1;
      }
    }
  }

  var max = Math.max(...typeOfBirds);
  var mode = typeOfBirds.indexOf(max);
  return mode + 1;
}

//var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// var arr = [1, 4, 4, 4, 5, 3];

//console.log(migratoryBirds(arr));

// Birthday Chocolate

function birthdayChocolate(s, d, m) {
  {
    var arr = s;
    var matchCount = 0;
    for (var j = 0; j < arr.length; j++) {
      var t_date = 0;
      var t_month = 0;
      var date_match = 0;
      var month_match = 0;
      for (var i = j; i < arr.length; i++) {
        t_date += arr[i];
        console.log("T_date:" + t_date);
        console.log("Happens1");
        t_month++;
        console.log("T_month:" + t_month);
        if (t_date === d) {
          date_match = t_date;
          month_match = t_month;

          console.log("Happens2");
        }
        console.log(date_match, month_match);
        if (date_match === d && month_match === m) {
          console.log("Happens3");
          date_match = 0;
          month_match = 0;
          matchCount += 1;
        }
      }
    }
  }
  console.log("The count is" + matchCount);
  return matchCount;
}

// var s = [1, 2, 1, 3, 2];
// var s = [4];
//var s = [1, 1, 1, 1, 1, 1];
// var s = [1, 3, 2, 2, 1];
// var s = [4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4]; // Test case 4 d = 15 m = 4 ans = 3
// var d = 15;
// var m = 4;

//console.log(birthdayChocolate(s, d, m));

function diagonalDifference(arr) {
  var primaryDia = 0;
  var secondaryDia = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i == j) {
        primaryDia += arr[i][j];
        console.log("PrimaryDia" + primaryDia);
      }
      if (i + j === arr.length - 1) {
        //console.log(i, j);
        secondaryDia += arr[i][j];
        //console.log("Happens2");
        //console.log(secondaryDia);
      }
    }
  }
  //console.log(primaryDia, secondaryDia);
  var abs = primaryDia - secondaryDia;
  if (abs < 0) {
    abs = -1 * abs;
  }
  return abs;
}

//var arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// console.log(diagonalDifference(arr));

// electronics shop

function electronicsShop(keyboards, drives, b) {
  var sum = 0;
  var max = 0;
  var total = [];
  for (var i = 0; i < keyboards.length; i++) {
    for (var j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        sum = keyboards[i] + drives[j];
        total.push(sum);
      }
    }
  }
  if (total.length > 0) {
    max = Math.max(...total);
    //console.log(max);
  } else {
    max = -1;
    //console.log(max);
  }
  return max;
}

// var keyboards = [40, 50, 60];
// var drives = [5, 8, 12];
// var b = 35;

//console.log(electronicsShop(keyboards, drives, b));

// Angry Professor

function angryProfessor(k, a) {
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
      count += 1;
    }
  }
  if (count >= k) {
    return "No";
  } else {
    return "Yes";
  }
}

// var a = [-1, -3, 4, 2];
// var k = 2;

//console.log(angryProfessor(k, a));

// Utopian Tree

function utopianTree(n) {
  var height = 1;
  for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      height += 1;
    }
    if (i % 2 !== 0) {
      height = height * 2;
    }
  }
  return height;
}

// Save the Prisoner

function saveThePrisoner(n, m, s) {
  var arr = [];
  arr[0] = s;
  for (var i = 1; i <= m - 1; i++) {
    if (arr[i - 1] === n) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 1] + 1;
    }
  }
  console.log(arr);
  return arr[m - 1];
}

// var n = 5;
// var m = 2;
// var s = 2;

//console.log(saveThePrisoner(n, m, s));

// Beautiful triplets

function beautifulTriplets(d, arr) {
  var count = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] > d) break;
      for (var k = j + 1; k < arr.length; k++) {
        if (arr[j] - arr[i] > d) break;
        if (arr[k] - arr[j] == d && arr[j] - arr[i] == d) count++;
      }
    }
  }
  return count;
}

// var d = 3;
// var arr = [1, 2, 4, 5, 7, 8, 10];

//console.log(beautifulTriplets(d, arr));
