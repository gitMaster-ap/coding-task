//  Explanation
// The code implements an algorithm that finds the minimum number of jumps required to reach the end of an array starting from index 0. The algorithm uses dynamic programming with memoization to optimize the recursive approach. The memoization approach stores results of expensive function calls to avoid redundant computations. The minJumps() function recursively calculates the minimum number of jumps required to reach the end of the array from each index and stores the results in a memoization array. The solve() function initializes the memoization array and calls the minJumps() function with the input array and starting index. The time complexity is O(n^2).

// Code  in JavaScript
function minJumps(A, ind, dp) {
  const INF = 1e9;
  if (ind == A.length - 1) return 0;
  if (A[ind] <= 0) return INF;
  if (dp[ind] != -1) return dp[ind];
  let ans = INF;
  for (let i = 1; i <= A[ind] && ind + i < A.length; i++) {
    ans = Math.min(ans, 1 + minJumps(A, ind + i, dp));
  }
  return (dp[ind] = ans);
}

function solve(A) {
  const dp = Array(A.length).fill(-1);
  return minJumps(A, 0, dp);
}


const arr1 = [2, 1, 2, 3, 1];
console.log(solve(arr1));

const arr2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(solve(arr2));
