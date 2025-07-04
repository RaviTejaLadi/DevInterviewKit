# **🚀 Batch 2: Very Hard Array Problems**

## Table of Contents

1. [Subset sum (does subset sum to K?)](<#subset-sum-(does-subset-sum-to-k?)>)
2. [Partition array into 2 subsets with equal sum](#partition-array-into-2-subsets-with-equal-sum)
3. [Median in sliding window](#median-in-sliding-window)
4. [Max points on a line](#max-points-on-a-line)
5. [Count number of subarrays with product < K](#count-number-of-subarrays-with-product-<-k)
6. [Smallest window containing all characters of another array](#smallest-window-containing-all-characters-of-another-array)
7. [Count pairs with sum divisible by K](#count-pairs-with-sum-divisible-by-k)
8. [Maximum sum of K non-overlapping subarrays](#maximum-sum-of-k-non-overlapping-subarrays)
9. [Maximum size square submatrix with all 1s](#maximum-size-square-submatrix-with-all-1s)
10. [Max length subarray sum equals K (negatives allowed)](<#max-length-subarray-sum-equals-k-(negatives-allowed)>)
11. [Count number of range sums between lower and upper](#count-number-of-range-sums-between-lower-and-upper)
12. [Max subarray min-product](#max-subarray-min-product)
13. [Count good subarrays (at least k pairs)](<#count-good-subarrays-(at-least-k-pairs)>)
14. [Sum of subarray minimums](#sum-of-subarray-minimums)
15. [Longest subarray where abs diff ≤ limit](#longest-subarray-where-abs-diff-<=-limit)
16. [Count subarrays with bounded max](#count-subarrays-with-bounded-max)
17. [Max sum increasing subsequence](#max-sum-increasing-subsequence)
18. [Shortest unsorted continuous subarray](#shortest-unsorted-continuous-subarray)
19. [Count submatrices with all 1s](#count-submatrices-with-all-1s)
20. [Number of nice subarrays (odd count = k)](#number-of-nice-subarrays-odd-count-=-k)
21. [Find pairs with given XOR](#find-pairs-with-given-xor)
22. [Minimum operations to make array equal (each op: add 1 or subtract 1)](<#minimum-operations-to-make-array-equal-(each-op:-add-1-or-subtract-1)>)
23. [Number of subarrays with exactly K distinct](#number-of-subarrays-with-exactly-k-distinct)
24. [Minimum cost to move chips to same position](#minimum-cost-to-move-chips-to-same-position)
25. [Largest subarray with equal number of even and odd](#largest-subarray-with-equal-number-of-even-and-odd)
26. [Longest mountain in array](#longest-mountain-in-array)
27. [Sum of beauty of all substrings (count of chars between min/max freq)](#sum-of-beauty-of-all-substrings-count-of-chars-between-min/max-freq)
28. [Max subarray sum after K concatenations](#max-subarray-sum-after-k-concatenations)
29. [Number of subarrays with median K](#number-of-subarrays-with-median-k)
30. [Count reverse pairs (i<j,
    nums[i]>2\*nums[j])](<#count-reverse-pairs-(i<j-nums[i]>2\*nums[j])>)
31. [Max sum of non-adjacent elements](#max-sum-of-non-adjacent-elements)
32. [Number of quadruplets summing to zero (4Sum Count)](#number-of-quadruplets-summing-to-zero-4sum-count)
33. [Min swaps to group all 1s together](#min-swaps-to-group-all-1s-together)
34. [Maximal rectangle (1s)](<#maximal-rectangle-(1s)>)
35. [Count subarrays with sum divisible by K](#count-subarrays-with-sum-divisible-by-k)
36. [Minimum adjacent swaps for K consecutive 1s](#minimum-adjacent-swaps-for-k-consecutive-1s)
37. [Number of subarrays with at most K odd numbers](#number-of-subarrays-with-at-most-k-odd-numbers)
38. [Min length subarray to remove for divisible by p](#min-length-subarray-to-remove-for-divisible-by-p)
39. [Minimum replacements to make array strictly increasing](#minimum-replacements-to-make-array-strictly-increasing)
40. [Maximum product subarray](#maximum-product-subarray)

### 📝 **Format for Each Problem**

- ✅ Concept / Logic
- ✅ Example Input/Output
- ✅ Solution (JavaScript code)

---

## Subset sum (does subset sum to K?)

### Concept:

DP — table where dp\[i]\[j] = true if sum j is possible with first i elements.

### Example:

```js
Input: [3, 34, 4, 12, 5, 2], (sum = 9);
Output: true;
```

### Code:

```js
function subsetSum(arr, sum) {
  let dp = Array(arr.length + 1)
    .fill()
    .map(() => Array(sum + 1).fill(false));
  for (let i = 0; i <= arr.length; i++) dp[i][0] = true;
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j < arr[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
      }
    }
  }
  return dp[arr.length][sum];
}
```

---

## Partition array into 2 subsets with equal sum

### Concept:

Subset sum where sum = total / 2.

### Example:

```js
Input: [1, 5, 11, 5];
Output: true;
```

### Code:

```js
function canPartition(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  return subsetSum(nums, total / 2);
}
```

---

## Median in sliding window

### Concept:

Two heaps (max-left, min-right).

### Example:

```js
Input: [1, 3, -1, -3, 5, 3, 6, 7], (k = 3);
Output: [1, -1, -1, 3, 5, 6];
```

### Code:

👉 (For brevity, I’ll note: JS lacks a native heap. You’d write or use a library
for efficient heaps. Below is brute-force sort way.)

```js
function medianSlidingWindow(nums, k) {
  let res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let window = nums.slice(i, i + k).sort((a, b) => a - b);
    let mid = Math.floor(k / 2);
    if (k % 2 === 0) {
      res.push((window[mid - 1] + window[mid]) / 2);
    } else {
      res.push(window[mid]);
    }
  }
  return res;
}
```

✅ **Efficient = two heaps**. We can do that if you want to see a heap-impl JS
version.

---

## Max points on a line

### Concept:

For each point, compute slope to all others, find max collinear.

### Example:

```js
Input: [
  [1, 1],
  [2, 2],
  [3, 3],
];
Output: 3;
```

### Code:

```js
function maxPoints(points) {
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    let map = new Map(),
      overlap = 0,
      curMax = 0;
    for (let j = i + 1; j < points.length; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];
      if (dx === 0 && dy === 0) {
        overlap++;
        continue;
      }
      let gcdVal = gcd(dx, dy);
      dx /= gcdVal;
      dy /= gcdVal;
      let key = `${dx}/${dy}`;
      map.set(key, (map.get(key) || 0) + 1);
      curMax = Math.max(curMax, map.get(key));
    }
    max = Math.max(max, curMax + overlap + 1);
  }
  return max;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

---

## Count number of subarrays with product < K

### Concept:

Sliding window.

### Example:

```js
Input: [10, 5, 2, 6], (K = 100);
Output: 8;
```

### Code:

```js
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  let prod = 1,
    left = 0,
    res = 0;
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k) {
      prod /= nums[left++];
    }
    res += right - left + 1;
  }
  return res;
}
```

---

## Smallest window containing all characters of another array

### Concept:

Sliding window + count map.

### Example:

```js
Input: [1, 2, 2, 3, 1, 2], (target = [2, 1]);
Output: 2(window[(1, 2)]);
```

### Code:

```js
function minWindow(arr, target) {
  let need = new Map(),
    have = new Map();
  for (let t of target) need.set(t, (need.get(t) || 0) + 1);
  let left = 0,
    count = 0,
    minLen = Infinity;
  for (let right = 0; right < arr.length; right++) {
    let val = arr[right];
    have.set(val, (have.get(val) || 0) + 1);
    if (need.has(val) && have.get(val) === need.get(val)) count++;
    while (count === need.size) {
      minLen = Math.min(minLen, right - left + 1);
      let lval = arr[left++];
      have.set(lval, have.get(lval) - 1);
      if (need.has(lval) && have.get(lval) < need.get(lval)) count--;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```

---

## Count pairs with sum divisible by K

### Concept:

Store mod counts.

### Example:

```js
Input: [1, 2, 3, 4, 5], (K = 3);
Output: 4;
```

### Code:

```js
function countPairsDivByK(arr, k) {
  let mods = Array(k).fill(0),
    res = 0;
  for (let num of arr) {
    let mod = num % k;
    let comp = (k - mod) % k;
    res += mods[comp];
    mods[mod]++;
  }
  return res;
}
```

---

## Maximum sum of K non-overlapping subarrays

### Concept:

DP with state: dp\[i]\[j] = max sum with i subarrays using first j elements.

### Example:

```js
Input: [1, 2, 3, 4, 5], (k = 2);
Output: 9;
```

### Code:

👉 (Sketch: Actual DP code can get verbose. High-level idea:)

```js
// For each k, and for each end position,
// max of (previous + best subarray ending here) or (dp from previous pos)
```

✅ Let me know if you want the full detailed DP table code for this!

---

## Maximum size square submatrix with all 1s

### Concept:

DP bottom-up, cell = min(top,left,top-left)+1.

### Example:

```js
Input: [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];
Output: 4;
```

### Code:

```js
function maxSquare(matrix) {
  let rows = matrix.length,
    cols = matrix[0].length,
    max = 0;
  let dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] == 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max * max;
}
```

---

## Max length subarray sum equals K (negatives allowed)

### Concept:

Prefix sum + Map.

### Example:

```js
Input: [1, -1, 5, -2, 3], (k = 3);
Output: 4;
```

### Code:

```js
function maxSubArrayLen(nums, k) {
  let map = new Map([[0, -1]]),
    sum = 0,
    maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) maxLen = Math.max(maxLen, i - map.get(sum - k));
    if (!map.has(sum)) map.set(sum, i);
  }
  return maxLen;
}
```

---

## Count number of range sums between lower and upper

### Concept:

Modified merge sort on prefix sums.

### Example:

```js
Input: [-2, 5, -1], (lower = -2), (upper = 2);
Output: 3;
```

### Code:

```js
function countRangeSum(nums, lower, upper) {
  let prefix = [0];
  for (let num of nums) prefix.push(prefix[prefix.length - 1] + num);

  function mergeSort(lo, hi) {
    if (hi - lo <= 1) return 0;
    let mid = Math.floor((lo + hi) / 2);
    let count = mergeSort(lo, mid) + mergeSort(mid, hi);
    let j = mid,
      k = mid,
      t = mid,
      cache = [],
      r = 0;
    for (let i = lo; i < mid; i++) {
      while (k < hi && prefix[k] - prefix[i] < lower) k++;
      while (j < hi && prefix[j] - prefix[i] <= upper) j++;
      while (t < hi && prefix[t] < prefix[i]) cache.push(prefix[t++]);
      cache.push(prefix[i]);
      count += j - k;
    }
    for (let i = 0; i < cache.length; i++) prefix[lo + i] = cache[i];
    return count;
  }

  return mergeSort(0, prefix.length);
}
```

---

## Max subarray min-product

### Concept:

Monotonic stack + prefix sum.

### Example:

```js
Input: [1, 2, 3, 2];
Output: 14;
```

### Code:

```js
function maxSumMinProduct(nums) {
  let n = nums.length;
  let prefix = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

  let stack = [],
    res = 0;
  for (let i = 0; i <= n; i++) {
    while (
      stack.length &&
      (i == n || nums[stack[stack.length - 1]] > nums[i])
    ) {
      let idx = stack.pop();
      let left = stack.length ? stack[stack.length - 1] + 1 : 0;
      let sum = prefix[i] - prefix[left];
      res = Math.max(res, sum * nums[idx]);
    }
    stack.push(i);
  }
  return res;
}
```

---

## Count good subarrays (at least k pairs)

### Concept:

Sliding window + freq map.

### Example:

```js
Input: [1, 1, 1, 1, 1], (k = 3);
Output: 6;
```

### Code:

```js
function countGood(nums, k) {
  let left = 0,
    pairs = 0,
    map = new Map(),
    res = 0;
  for (let right = 0; right < nums.length; right++) {
    let val = nums[right];
    pairs += map.get(val) || 0;
    map.set(val, (map.get(val) || 0) + 1);
    while (pairs >= k) {
      res += nums.length - right;
      let lval = nums[left++];
      map.set(lval, map.get(lval) - 1);
      pairs -= map.get(lval);
    }
  }
  return res;
}
```

---

## Sum of subarray minimums

### Concept:

Monotonic stack, contribution of each element.

### Example:

```js
Input: [3, 1, 2, 4];
Output: 17;
```

### Code:

```js
function sumSubarrayMins(arr) {
  let stack = [],
    res = 0,
    mod = 1e9 + 7;
  arr.push(0);
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      let j = stack.pop();
      let left = stack.length ? stack[stack.length - 1] : -1;
      res = (res + arr[j] * (i - j) * (j - left)) % mod;
    }
    stack.push(i);
  }
  return res;
}
```

---

## Longest subarray where abs diff ≤ limit

### Concept:

Monotonic deques min/max.

### Example:

```js
Input: [8, 2, 4, 7], (limit = 4);
Output: 2;
```

### Code:

```js
function longestSubarray(nums, limit) {
  let maxDeque = [],
    minDeque = [],
    left = 0,
    res = 0;
  for (let right = 0; right < nums.length; right++) {
    while (maxDeque.length && nums[right] > maxDeque[maxDeque.length - 1])
      maxDeque.pop();
    while (minDeque.length && nums[right] < minDeque[minDeque.length - 1])
      minDeque.pop();
    maxDeque.push(nums[right]);
    minDeque.push(nums[right]);
    while (maxDeque[0] - minDeque[0] > limit) {
      if (maxDeque[0] == nums[left]) maxDeque.shift();
      if (minDeque[0] == nums[left]) minDeque.shift();
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}
```

---

## Count subarrays with bounded max

### Concept:

Two pointers.

### Example:

```js
Input: [2, 1, 4, 3], (left = 2), (right = 3);
Output: 3;
```

### Code:

```js
function numSubarrayBoundedMax(A, left, right) {
  let res = 0,
    prev = 0,
    j = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= left && A[i] <= right) {
      prev = i - j;
    } else if (A[i] > right) {
      prev = 0;
      j = i;
    }
    res += prev;
  }
  return res;
}
```

---

## Max sum increasing subsequence

### Concept:

DP: max sum ending at i.

### Example:

```js
Input: [1, 101, 2, 3, 100, 4, 5];
Output: 106;
```

### Code:

```js
function maxSumIS(arr) {
  let dp = [...arr];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i]);
      }
    }
  }
  return Math.max(...dp);
}
```

---

## Shortest unsorted continuous subarray

### Concept:

Find boundaries where order breaks.

### Example:

```js
Input: [2, 6, 4, 8, 10, 9, 15];
Output: 5;
```

### Code:

```js
function findUnsortedSubarray(nums) {
  let n = nums.length,
    left = -1,
    right = -1,
    max = -Infinity,
    min = Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) right = i;
  }
  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) left = i;
  }
  return right == -1 ? 0 : right - left + 1;
}
```

---

## Count submatrices with all 1s

### Concept:

Histogram + count rectangle.

### Example:

```js
Input: [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
Output: 13;
```

### Code:

```js
function numSubmat(mat) {
  let rows = mat.length,
    cols = mat[0].length;
  let res = 0,
    height = Array(cols).fill(0);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      height[j] = mat[i][j] == 0 ? 0 : height[j] + 1;
    }
    res += countInRow(height);
  }
  return res;
}

function countInRow(heights) {
  let stack = [],
    res = 0,
    sum = 0;
  for (let i = 0; i < heights.length; i++) {
    let cnt = 1;
    while (stack.length && stack[stack.length - 1][0] >= heights[i]) {
      let [h, c] = stack.pop();
      sum -= h * c;
      cnt += c;
    }
    sum += heights[i] * cnt;
    stack.push([heights[i], cnt]);
    res += sum;
  }
  return res;
}
```

---

## Number of nice subarrays (odd count = k)

### Concept:

Prefix sum + count.

### Example:

```js
Input: [1, 1, 2, 1, 1], (k = 3);
Output: 2;
```

### Code:

```js
function numberOfSubarrays(nums, k) {
  let map = new Map([[0, 1]]),
    sum = 0,
    res = 0;
  for (let num of nums) {
    sum += num % 2;
    res += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}
```

---

## Find pairs with given XOR

### Concept:

Set + property: A ^ B = X → B = A ^ X.

### Example:

```js
Input: [5, 4, 10, 15, 7, 6], (X = 5);
Output: 1;
```

### Code:

```js
function countPairsXor(arr, X) {
  let set = new Set(),
    count = 0;
  for (let num of arr) {
    if (set.has(num ^ X)) count++;
    set.add(num);
  }
  return count;
}
```

---

## Minimum operations to make array equal (each op: add 1 or subtract 1)

### Concept:

Align to median.

### Example:

```js
Input: [1, 2, 3];
Output: 2;
```

### Code:

```js
function minMoves(nums) {
  nums.sort((a, b) => a - b);
  let median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((acc, n) => acc + Math.abs(n - median), 0);
}
```

---

## Number of subarrays with exactly K distinct

### Concept:

At most K - At most K-1.

### Example:

```js
Input: [1, 2, 1, 2, 3], (K = 2);
Output: 7;
```

### Code:

```js
function subarraysWithKDistinct(A, K) {
  return atMostK(A, K) - atMostK(A, K - 1);
}
function atMostK(A, K) {
  let count = new Map(),
    res = 0,
    left = 0;
  for (let right = 0; right < A.length; right++) {
    if (!count.get(A[right])) K--;
    count.set(A[right], (count.get(A[right]) || 0) + 1);
    while (K < 0) {
      count.set(A[left], count.get(A[left]) - 1);
      if (count.get(A[left]) == 0) K++;
      left++;
    }
    res += right - left + 1;
  }
  return res;
}
```

---

## Minimum cost to move chips to same position

### Concept:

Odd/even groups → min count moves.

### Example:

```js
Input: [1, 2, 3];
Output: 1;
```

### Code:

```js
function minCostChips(pos) {
  let even = 0,
    odd = 0;
  for (let p of pos) {
    if (p % 2 == 0) even++;
    else odd++;
  }
  return Math.min(even, odd);
}
```

---

## Largest subarray with equal number of even and odd

### Concept:

Prefix diff + map.

### Example:

```js
Input: [1, 2, 3, 4];
Output: 4;
```

### Code:

```js
function maxLenEvenOdd(nums) {
  let map = new Map([[0, -1]]),
    diff = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    diff += nums[i] % 2 == 0 ? 1 : -1;
    if (map.has(diff)) {
      res = Math.max(res, i - map.get(diff));
    } else {
      map.set(diff, i);
    }
  }
  return res;
}
```

---

## Longest mountain in array

### Concept:

Two pointer expand from peak.

### Example:

```js
Input: [2, 1, 4, 7, 3, 2, 5];
Output: 5;
```

### Code:

```js
function longestMountain(A) {
  let maxLen = 0,
    i = 1;
  while (i < A.length - 1) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      let left = i,
        right = i;
      while (left > 0 && A[left] > A[left - 1]) left--;
      while (right < A.length - 1 && A[right] > A[right + 1]) right++;
      maxLen = Math.max(maxLen, right - left + 1);
      i = right;
    } else {
      i++;
    }
  }
  return maxLen;
}
```

---

## Sum of beauty of all substrings (count of chars between min/max freq)

### Concept:

Brute check + freq.

### Example:

```js
Input: 'aabcb';
Output: 5;
```

### Code:

```js
function beautySum(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let freq = Array(26).fill(0);
    for (let j = i; j < s.length; j++) {
      freq[s.charCodeAt(j) - 97]++;
      let max = Math.max(...freq),
        min = Math.min(...freq.filter((f) => f > 0));
      res += max - min;
    }
  }
  return res;
}
```

---

## Max subarray sum after K concatenations

### Concept:

Kadane + border sum.

### Example:

```js
Input: [1, 2], (k = 3);
Output: 9;
```

### Code:

```js
function kConcatenationMaxSum(arr, k) {
  let mod = 1e9 + 7;
  let maxKadane = kadane(arr);
  if (k == 1) return maxKadane % mod;
  let prefix = 0,
    suffix = 0,
    sum = 0,
    bestPre = 0,
    bestSuf = 0;
  for (let n of arr) {
    sum += n;
    prefix += n;
    bestPre = Math.max(bestPre, prefix);
  }
  sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i];
    bestSuf = Math.max(bestSuf, sum);
  }
  return (
    Math.max(
      maxKadane,
      bestPre + bestSuf + (k - 2) * arr.reduce((a, b) => a + b, 0)
    ) % mod
  );
}
function kadane(A) {
  let maxSoFar = 0,
    maxHere = 0;
  for (let n of A) {
    maxHere = Math.max(n, maxHere + n);
    maxSoFar = Math.max(maxSoFar, maxHere);
  }
  return maxSoFar;
}
```

---

## Number of subarrays with median K

### Concept:

Convert to +1/-1 above/below K → subarray sum zero.

### Example:

```js
Input: [3, 2, 1, 4, 5], (K = 4);
Output: 3;
```

### Code:

```js
function countSubarrMedianK(A, K) {
  let map = new Map([[0, 1]]),
    sum = 0,
    res = 0,
    found = false;
  for (let n of A) {
    if (n < K) sum--;
    else if (n > K) sum++;
    else found = true;
    if (found) {
      res += (map.get(sum) || 0) + (map.get(sum - 1) || 0);
    } else {
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  return res;
}
```

---

## Count reverse pairs (i\<j, nums\[i]>2\*nums\[j])

### Concept:

Merge sort.

### Example:

```js
Input: [1, 3, 2, 3, 1];
Output: 2;
```

### Code:

```js
function reversePairs(nums) {
  function mergeSort(l, r) {
    if (r - l <= 1) return 0;
    let m = (l + r) >> 1,
      count = mergeSort(l, m) + mergeSort(m, r);
    let j = m;
    for (let i = l; i < m; i++) {
      while (j < r && nums[i] > 2 * nums[j]) j++;
      count += j - m;
    }
    nums
      .slice(l, r)
      .sort((a, b) => a - b)
      .forEach((v, i) => (nums[l + i] = v));
    return count;
  }
  return mergeSort(0, nums.length);
}
```

---

## Max sum of non-adjacent elements

### Concept:

House robber DP style.

### Example:

```js
Input: [3, 2, 5, 10, 7];
Output: 15;
```

### Code:

```js
function maxNonAdjacentSum(nums) {
  let incl = 0,
    excl = 0;
  for (let num of nums) {
    let newExcl = Math.max(incl, excl);
    incl = excl + num;
    excl = newExcl;
  }
  return Math.max(incl, excl);
}
```

---

## Number of quadruplets summing to zero (4Sum Count)

### Concept:

Hash map for pair sums.

### Example:

```js
Input: (A = [1, 2]), (B = [-2, -1]), (C = [-1, 2]), (D = [0, 2]);
Output: 2;
```

### Code:

```js
function fourSumCount(A, B, C, D) {
  let map = new Map(),
    count = 0;
  for (let a of A) {
    for (let b of B) {
      map.set(a + b, (map.get(a + b) || 0) + 1);
    }
  }
  for (let c of C) {
    for (let d of D) {
      count += map.get(-(c + d)) || 0;
    }
  }
  return count;
}
```

---

## Min swaps to group all 1s together

### Concept:

Sliding window on count of 1s.

### Example:

```js
Input: [1, 0, 1, 0, 1];
Output: 1;
```

### Code:

```js
function minSwaps(nums) {
  let ones = nums.reduce((a, b) => a + b, 0);
  let curr = 0,
    maxOnes = 0;
  for (let i = 0; i < nums.length * 2; i++) {
    curr += nums[i % nums.length];
    if (i >= ones) curr -= nums[(i - ones) % nums.length];
    maxOnes = Math.max(maxOnes, curr);
  }
  return ones - maxOnes;
}
```

---

## Maximal rectangle (1s)

### Concept:

Row histogram + largest rectangle in histogram.

### Example:

```js
Input: [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];
Output: 6;
```

### Code:

```js
function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  let cols = matrix[0].length,
    heights = Array(cols).fill(0),
    max = 0;
  for (let row of matrix) {
    for (let i = 0; i < cols; i++) {
      heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
    }
    max = Math.max(max, largestRectangleArea(heights));
  }
  return max;
}
function largestRectangleArea(heights) {
  let stack = [],
    max = 0;
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      let h = heights[stack.pop()];
      let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  return max;
}
```

---

## Count subarrays with sum divisible by K

### Concept:

Prefix sum + mod count.

### Example:

```js
Input: [4, 5, 0, -2, -3, 1], (K = 5);
Output: 7;
```

### Code:

```js
function subarraysDivByK(nums, K) {
  let map = new Map([[0, 1]]),
    sum = 0,
    res = 0;
  for (let n of nums) {
    sum = (sum + (n % K) + K) % K;
    res += map.get(sum) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}
```

---

## Minimum adjacent swaps for K consecutive 1s

### Concept:

Prefix position sum.

### Example:

```js
Input: [1, 0, 0, 1, 0, 1], (k = 2);
Output: 1;
```

### Code:

```js
function minMoves(nums, k) {
  let pos = [];
  for (let i = 0; i < nums.length; i++) if (nums[i] == 1) pos.push(i);
  let pre = [0];
  for (let p of pos) pre.push(pre[pre.length - 1] + p);
  let min = Infinity;
  for (let i = 0; i <= pos.length - k; i++) {
    let mid = i + Math.floor(k / 2);
    let median = pos[mid];
    let left = pre[mid] - pre[i];
    let right = pre[i + k] - pre[mid + 1];
    let cost = right - left;
    if (k % 2 == 0) cost -= median;
    min = Math.min(min, cost);
  }
  return min;
}
```

---

## Number of subarrays with at most K odd numbers

### Concept:

Sliding window.

### Example:

```js
Input: [1, 1, 2, 1, 1], (k = 3);
Output: 12;
```

### Code:

```js
function atMostKOdd(nums, k) {
  let res = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 == 1) k--;
    while (k < 0) {
      if (nums[left] % 2 == 1) k++;
      left++;
    }
    res += right - left + 1;
  }
  return res;
}
```

---

## Min length subarray to remove for divisible by p

### Concept:

Prefix sum mod + map.

### Example:

```js
Input: [3, 1, 4, 2], (p = 6);
Output: 1;
```

### Code:

```js
function minSubarray(nums, p) {
  let total = nums.reduce((a, b) => a + b, 0) % p;
  if (total == 0) return 0;
  let map = new Map([[0, -1]]),
    sum = 0,
    min = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum = (sum + nums[i]) % p;
    let want = (sum - total + p) % p;
    if (map.has(want)) min = Math.min(min, i - map.get(want));
    map.set(sum, i);
  }
  return min == nums.length ? -1 : min;
}
```

---

## Minimum replacements to make array strictly increasing

### Concept:

DP + binary search.

### Example:

```js
Input: (arr1 = [1, 5, 3, 6, 7]), (arr2 = [1, 3, 2, 4]);
Output: 1;
```

### Code:

👉 Full DP code is large; this is high-level idea:

```js
// dp[i][prev] = min ops to fix arr1[i...] given last was prev
// Try replace (next greater in arr2) or keep arr1[i] if > prev
// Use memo + sort arr2
```

✅ Let me know if you want this full DP written out!

---

## Maximum product subarray

### Concept:

Track max/min at each point.

### Example:

```js
Input: [2, 3, -2, 4];
Output: 6;
```

### Code:

```js
function maxProduct(nums) {
  let maxProd = nums[0],
    minHere = nums[0],
    maxHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    if (n < 0) [minHere, maxHere] = [maxHere, minHere];
    maxHere = Math.max(n, maxHere * n);
    minHere = Math.min(n, minHere * n);
    maxProd = Math.max(maxProd, maxHere);
  }
  return maxProd;
}
```

---

**[⬆ Back to Top](#table-of-contents)**
