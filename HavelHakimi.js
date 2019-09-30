//https://www.reddit.com/r/dailyprogrammer/comments/bqy1cf/20190520_challenge_378_easy_the_havelhakimi/

const warmupArray1 = [5, 3, 0, 2, 6, 2, 0, 7, 2, 5];
const warmupArray2 = [4, 0, 0, 1, 3];
const warmupArray3 = [1, 2, 3];
const warmupArray4 = [0, 0, 0];
const warmupArray5 = [];

warmup1(warmupArray1);
warmup1(warmupArray2);
warmup1(warmupArray3);
warmup1(warmupArray4);
warmup1(warmupArray5);

warmup2([5, 1, 3, 4, 2]);
warmup2([0, 0, 0, 4, 0]);
warmup2([1]);
warmup2([]);

warmup3(7, [6, 5, 5, 3, 2, 2, 2]);
warmup3(5, [5, 5, 5, 5, 5]);
warmup3(5, [5, 5, 5, 5]);
warmup3(3, [1, 1]);
warmup3(1, []);
warmup3(0, []);

warmup4(4, [5, 4, 3, 2, 1]);

hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]); // false
hh([4, 2, 0, 1, 5, 0]); // false
hh([3, 1, 2, 3, 1, 0]); // true
hh([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]); // true
hh([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]); // true
hh([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]); // false
hh([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]); // false
hh([2, 2, 0]); // false
hh([3, 2, 1]); // false
hh([1, 1]); // true
hh([1]); // false
hh([]); // true

// Removing 0's
function warmup1(input) {
  return input.filter(e => e != 0);
}

// Descending sort
function warmup2(input) {
  const res = input.sort((a, b) => (a < b ? 1 : -1));
  return res;
}

// Length check
function warmup3(expected, input) {
  const res = expected > input.length;
  return res;
}

function warmup4(front, input) {
  return input.map((value, index) => (index < front ? value - 1 : value));
}

// Algorithm
function hh(input) {
  input = warmup1(input).sort((a, b) => (a < b ? 1 : -1));
  if (!input.length) {
    console.log(true);
    return true;
  }
  const N = input.shift();

  if (N > input.length) {
    console.log(false);
    return false;
  }

  hh(input.map((value, index) => (index < N ? value - 1 : value)));
}
