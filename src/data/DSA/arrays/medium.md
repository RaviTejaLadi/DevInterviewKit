# **🚀 Batch 2: Medium Array Problems**

## Table of Contents

1. [Find subarray with given sum](#21.find-subarray-with-given-sum-non-negative-numbers)
2. [Kadane’s algorithm (max subarray sum)](<#22.kadanes-algorithm-(max-subarray-sum)>)
3. [Find majority element (Boyer-Moore)](<#23.find-majority-element-(>-n/2-times)>)
4. [Find leaders in array](#24.find-leaders-in-array)
5. [Move all zeros to end](<#25.move-all-zeros-to-end-(maintain-order)>)
6. [Find missing number (1 to N)](<#26.find-missing-number-(1-to-n)>)
7. [Find duplicate number (1 to N)](<#27.find-duplicate-(1-to-n-with-1-duplicate)>)
8. [Find intersection of two arrays](#28.find-intersection-of-two-arrays-unique-elements)
9. [Find union of two arrays](#29.find-union-of-two-arrays)
10. [Sort 0s, 1s, 2s (Dutch flag)](<#30.sort-0s,-1s,-2s,-(dutch-national-flag)>)
11. [Stock buy-sell to maximize profit](#31.stock-buy-sell-to-maximize-profit-1-transaction)
12. [Longest consecutive sequence](#32.longest-consecutive-sequence)
13. [Find pair with difference K](#33.find-pair-with-difference-k)
14. [Find triplet sum zero](#34.find-triplet-sum-zero)
15. [Rearrange positive and negative numbers alternately](#35.rearrange--ve-and--ve-alternately)
16. [Count inversions](#36.count-inversions)
17. [Wave form array](#37.wave-form-array)
18. [Next permutation](#38.next-permutation)
19. [Previous permutation](#39.previous-permutation)
20. [Spiral matrix traversal](#40.spiral-matrix-traversal)

### 📝 **Format for Each Problem**

- ✅ Concept / Logic
- ✅ Example Input/Output
- ✅ Solution (JavaScript code)

---

## 21.Find subarray with given sum (non-negative numbers)

### Concept:

Sliding window — expand window till sum ≥ target, shrink if sum > target.

### Example:

```js
Input: [1, 2, 3, 7, 5], (sum = 12);
Output: [2, 3, 7];
```

### Code:

```js
function subarraySum(arr, target) {
  let start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum > target && start <= end) {
      sum -= arr[start++];
    }
    if (sum === target) {
      return arr.slice(start, end + 1);
    }
  }
  return [];
}
```

---

## 22.Kadane’s algorithm (max subarray sum)

### Concept:

Dynamic programming — max at each point is either current element or current +
previous max.

### Example:

```js
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray: [4,-1,2,1])
```

### Code:

```js
function maxSubarraySum(arr) {
  let maxSoFar = arr[0],
    maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
```

---

## 23.Find majority element (> n/2 times)

### Concept:

Boyer-Moore Voting Algorithm.

### Example:

```js
Input: [2, 2, 1, 1, 2, 2, 2];
Output: 2;
```

### Code:

```js
function majorityElement(arr) {
  let count = 0,
    candidate = null;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}
```

---

## 24.Find leaders in array

### Concept:

Element greater than all elements to its right.

### Example:

```js
Input: [16, 17, 4, 3, 5, 2];
Output: [17, 5, 2];
```

### Code:

```js
function findLeaders(arr) {
  let leaders = [],
    maxFromRight = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      leaders.push(arr[i]);
      maxFromRight = arr[i];
    }
  }
  return leaders.reverse();
}
```

---

## 25.Move all zeros to end (maintain order)

### Concept:

Two-pointer — place non-zero elements first.

### Example:

```js
Input: [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];
```

### Code:

```js
function moveZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }
  while (index < arr.length) {
    arr[index++] = 0;
  }
  return arr;
}
```

---

## 26.Find missing number (1 to N)

### Concept:

Sum formula vs actual sum.

### Example:

```js
Input: [1, 2, 4, 5], (N = 5);
Output: 3;
```

### Code:

```js
function findMissing(arr, N) {
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
```

---

## 27.Find duplicate (1 to N with 1 duplicate)

### Concept:

Sum actual - expected gives duplicate value.

### Example:

```js
Input: [1, 3, 4, 2, 2];
Output: 2;
```

### Code:

```js
function findDuplicate(arr) {
  let N = arr.length - 1;
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return actualSum - expectedSum;
}
```

---

## 28.Find intersection of two arrays (unique elements)

### Concept:

Set + filter.

### Example:

```js
Input: [1, 2, 2, 1], [2, 2];
Output: [2];
```

### Code:

```js
function arrayIntersection(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...setA].filter((x) => setB.has(x));
}
```

---

## 29.Find union of two arrays

### Concept:

Set union.

### Example:

```js
Input: [1, 2, 2, 1], [2, 3];
Output: [1, 2, 3];
```

### Code:

```js
function arrayUnion(a, b) {
  return [...new Set(a.concat(b))];
}
```

---

## 30.Sort 0s, 1s, 2s (Dutch National Flag)

### Concept:

Three pointers (low, mid, high).

### Example:

```js
Input: [0, 1, 2, 0, 1, 2];
Output: [0, 0, 1, 1, 2, 2];
```

### Code:

```js
function sort012(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
```

---

## 31.Stock Buy-Sell to Maximize Profit (1 transaction)

### Concept:

Track min price so far, compute max profit at each step.

### Example:

```js
Input: [7,1,5,3,6,4]
Output: 5 (Buy at 1, sell at 6)
```

### Code:

```js
function maxProfit(prices) {
  let minPrice = Infinity,
    maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
```

---

## 32.Longest Consecutive Sequence

### Concept:

Use Set, check only sequence starters.

### Example:

```js
Input: [100, 4, 200, 1, 3, 2]
Output: 4 (sequence: 1,2,3,4)
```

### Code:

```js
function longestConsecutive(arr) {
  let set = new Set(arr),
    longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num,
        count = 1;
      while (set.has(current + 1)) {
        current++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
}
```

---

## 33.Find pair with difference K

### Concept:

Use Set, check if num + K exists.

### Example:

```js
Input: [5, 20, 3, 2, 50, 80], (K = 78);
Output: true;
```

### Code:

```js
function hasPairWithDiff(arr, K) {
  let set = new Set(arr);
  for (let num of arr) {
    if (set.has(num + K) || set.has(num - K)) {
      return true;
    }
  }
  return false;
}
```

---

## 34.Find triplet sum zero

### Concept:

Sort + two pointer.

### Example:

```js
Input: [-1, 0, 1, 2, -1, -4];
Output: [
  [-1, -1, 2],
  [-1, 0, 1],
];
```

### Code:

```js
function threeSumZero(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        res.push([arr[i], arr[left], arr[right]]);
        while (arr[left] == arr[left + 1]) left++;
        while (arr[right] == arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
}
```

---

## 35.Rearrange +ve and -ve alternately

### Concept:

Separate arrays + merge alternately.

### Example:

```js
Input: [1, -2, 3, -4, 5];
Output: [1, -2, 3, -4, 5];
```

### Code:

```js
function rearrangePosNeg(arr) {
  let pos = arr.filter((x) => x >= 0);
  let neg = arr.filter((x) => x < 0);
  let res = [],
    i = 0,
    j = 0;
  while (i < pos.length && j < neg.length) {
    res.push(pos[i++]);
    res.push(neg[j++]);
  }
  res = res.concat(pos.slice(i)).concat(neg.slice(j));
  return res;
}
```

---

## 36.Count inversions

### Concept:

Merge sort based O(N log N).

### Example:

```js
Input: [2, 4, 1, 3, 5];
Output: 3([2, 1], [4, 1], [4, 3]);
```

### Code:

```js
function countInversions(arr) {
  function mergeSort(arr) {
    if (arr.length < 2) return { arr, count: 0 };
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let merged = [],
      count = left.count + right.count;
    let i = 0,
      j = 0;
    while (i < left.arr.length && j < right.arr.length) {
      if (left.arr[i] <= right.arr[j]) {
        merged.push(left.arr[i++]);
      } else {
        merged.push(right.arr[j++]);
        count += left.arr.length - i;
      }
    }
    merged = merged.concat(left.arr.slice(i)).concat(right.arr.slice(j));
    return { arr: merged, count };
  }
  return mergeSort(arr).count;
}
```

---

## 37.Wave form array

### Concept:

Sort + swap adjacent pairs.

### Example:

```js
Input: [3,6,5,10,7,20]
Output: [5,3,7,6,10,20] (or other valid wave)
```

### Code:

```js
function waveArray(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}
```

---

## 38.Next permutation

### Concept:

Find pivot, swap with next greater, reverse suffix.

### Example:

```js
Input: [1, 2, 3];
Output: [1, 3, 2];
```

### Code:

```js
function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

---

## 39.Previous permutation

### Concept:

Mirror of next permutation.

### Example:

```js
Input: [3, 2, 1];
Output: [3, 1, 2];
```

### Code:

```js
function prevPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i] <= arr[i + 1]) i--;
  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] >= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

---

## 40.Spiral matrix traversal

### Concept:

Boundaries: top, bottom, left, right.

### Example:

```js
Input: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5];
```

### Code:

```js
function spiralOrder(matrix) {
  let res = [],
    top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
}
```

---

**[⬆ Back to Top](#table-of-contents)**
