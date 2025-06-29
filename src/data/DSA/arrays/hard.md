#  **🚀 Batch 2: Hard Array Problems**

## Table of Contents

1. [Median of two sorted arrays](#41.-median-of-two-sorted-arrays-log-minnm)
2. [Kth largest element](#42.-kth-largest-element)
3. [Kth smallest element](#43.-kth-smallest-element)
4. [Maximum product subarray](#44.-maximum-product-subarray)
5. [Max sum of non-adjacent elements](#45.-max-sum-of-non-adjacent-elements)
6. [Trapping rainwater](#46.-trapping-rainwater)
7. [Subarray with XOR zero](#47.-subarray-with-xor-zero)
8. [Minimum swaps to sort array](#48.-minimum-swaps-to-sort-array)
9. [Minimum jumps to reach end](#49.-minimum-jumps-to-reach-end)
10. [Longest increasing subsequence](#50.-longest-increasing-subsequence-lis)
11. [Maximum sum circular subarray](#51.-maximum-sum-circular-subarray)
12. [Sliding window maximum](#52.-sliding-window-maximum)
13. [Count subarrays with sum K](#53.-count-subarrays-with-sum-k)
14. [Minimum size subarray sum](#54.-minimum-size-subarray-sum)
15. [Find duplicate + missing number](#55.-find-duplicate-+-missing-number)
16. [Longest subarray with equal 0s and 1s](#56.-longest-subarray-with-equal-0s-and-1s)
17. [Smallest missing positive integer](#57.-smallest-missing-positive-integer)
18. [Maximum sum rectangle in matrix](#58.-maximum-sum-rectangle-in-matrix)
19. [Product of array except self](#59.-product-of-array-except-self)
20. [Max length of subarray with sum ≤ K](#60.-max-length-of-subarray-with-sum-<=-k)

### 📝 **Format for Each Problem**

- ✅ Concept / Logic
- ✅ Example Input/Output
- ✅ Solution (JavaScript code)

---

## 41. Median of two sorted arrays (log min(N,M))

### Concept:

Binary search partitioning.

### Example:

```js
Input: [1,3], [2]  
Output: 2.0  
Input: [1,2], [3,4]  
Output: 2.5
```

### Code:

```js
function findMedianSortedArrays(A, B) {
  if (A.length > B.length) return findMedianSortedArrays(B, A);
  let m = A.length, n = B.length, low = 0, high = m;
  while (low <= high) {
    let i = Math.floor((low + high) / 2);
    let j = Math.floor((m + n + 1) / 2) - i;
    let maxLeftA = (i === 0) ? -Infinity : A[i - 1];
    let minRightA = (i === m) ? Infinity : A[i];
    let maxLeftB = (j === 0) ? -Infinity : B[j - 1];
    let minRightB = (j === n) ? Infinity : B[j];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }
  return 0;
}
```

---

## 42. Kth largest element

### Concept:

QuickSelect / Sort + index.

### Example:

```js
Input: [3,2,1,5,6,4], k=2  
Output: 5
```

### Code:

```js
function kthLargest(arr, k) {
  arr.sort((a,b)=>b-a);
  return arr[k-1];
}
```

---

## 43. Kth smallest element

### Concept:

Same as largest, just ascending sort.

### Example:

```js
Input: [7,10,4,3,20,15], k=3  
Output: 7
```

### Code:

```js
function kthSmallest(arr, k) {
  arr.sort((a,b)=>a-b);
  return arr[k-1];
}
```

---

## 44. Maximum product subarray

### Concept:

Track max/min at each step (handle negatives).

### Example:

```js
Input: [2,3,-2,4]  
Output: 6
```

### Code:

```js
function maxProductSubarray(arr) {
  let maxProd = arr[0], minProd = arr[0], result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) [maxProd, minProd] = [minProd, maxProd];
    maxProd = Math.max(arr[i], arr[i] * maxProd);
    minProd = Math.min(arr[i], arr[i] * minProd);
    result = Math.max(result, maxProd);
  }
  return result;
}
```

---

## 45. Max sum of non-adjacent elements

### Concept:

DP — max incl or excl at each point.

### Example:

```js
Input: [3,2,5,10,7]  
Output: 15
```

### Code:

```js
function maxNonAdjSum(arr) {
  let incl = arr[0], excl = 0;
  for (let i = 1; i < arr.length; i++) {
    let newIncl = excl + arr[i];
    excl = Math.max(excl, incl);
    incl = newIncl;
  }
  return Math.max(incl, excl);
}
```

---

## 46. Trapping rainwater

### Concept:

Precompute left-max, right-max or two-pointer.

### Example:

```js
Input: [0,1,0,2,1,0,1,3,2,1,2,1]  
Output: 6
```

### Code:

```js
function trapRainWater(height) {
  let left=0,right=height.length-1,leftMax=0,rightMax=0,water=0;
  while(left<right){
    if(height[left]<height[right]){
      height[left]>=leftMax ? leftMax=height[left] : water+=leftMax-height[left];
      left++;
    } else {
      height[right]>=rightMax ? rightMax=height[right] : water+=rightMax-height[right];
      right--;
    }
  }
  return water;
}
```

---

## 47. Subarray with XOR zero

### Concept:

Prefix XOR + Map count.

### Example:

```js
Input: [4, 2, 2, 6, 4]  
Output: 4
```

### Code:

```js
function subarrayXorZero(arr) {
  let map = new Map(), count = 0, xor = 0;
  map.set(0,1);
  for(let num of arr){
    xor ^= num;
    count += map.get(xor) || 0;
    map.set(xor, (map.get(xor) || 0)+1);
  }
  return count;
}
```

---

## 48. Minimum swaps to sort array

### Concept:

Cycle detection in index mapping.

### Example:

```js
Input: [4,3,2,1]  
Output: 2
```

### Code:

```js
function minSwaps(arr) {
  let n = arr.length;
  let arrPos = arr.map((val,idx)=>[val,idx]).sort((a,b)=>a[0]-b[0]);
  let visited = Array(n).fill(false);
  let ans = 0;
  for (let i=0;i<n;i++){
    if(visited[i] || arrPos[i][1]===i) continue;
    let cycle = 0, j=i;
    while(!visited[j]){
      visited[j]=true;
      j=arrPos[j][1];
      cycle++;
    }
    if(cycle>0) ans += (cycle-1);
  }
  return ans;
}
```

---

## 49. Minimum jumps to reach end

### Concept:

Greedy — track max reachable.

### Example:

```js
Input: [2,3,1,1,4]  
Output: 2
```

### Code:

```js
function minJumps(arr) {
  if (arr.length <= 1) return 0;
  let jumps = 0, farthest = 0, end = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    farthest = Math.max(farthest, i + arr[i]);
    if (i === end) {
      jumps++;
      end = farthest;
    }
  }
  return jumps;
}
```

---

## 50. Longest increasing subsequence (LIS)

### Concept:

DP O(N²) or Binary search O(N log N).

### Example:

```js
Input: [10,9,2,5,3,7,101,18]  
Output: 4
```

### Code (O(N log N)):

```js
function lengthOfLIS(arr) {
  let tails = [];
  for (let num of arr) {
    let l = 0, r = tails.length;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (tails[m] < num) l = m + 1;
      else r = m;
    }
    if (l < tails.length) tails[l] = num;
    else tails.push(num);
  }
  return tails.length;
}
```

---

## 51. Maximum sum circular subarray

### Concept:

Max of (normal max subarray, total sum - min subarray).

### Example:

```js
Input: [1, -2, 3, -2]  
Output: 3
```

### Code:

```js
function maxSubarraySumCircular(A) {
  let total = 0, maxSum = A[0], curMax = 0, minSum = A[0], curMin = 0;
  for (let a of A) {
    curMax = Math.max(curMax + a, a);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + a, a);
    minSum = Math.min(minSum, curMin);
    total += a;
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}
```

---

## 52. Sliding window maximum

### Concept:

Deque (monotonic queue).

### Example:

```js
Input: [1,3,-1,-3,5,3,6,7], k=3  
Output: [3,3,5,5,6,7]
```

### Code:

```js
function slidingWindowMax(nums, k) {
  let deque = [], result = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] <= i - k) deque.shift();
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}
```

---

## 53. Count subarrays with sum K

### Concept:

Prefix sum + Map.

### Example:

```js
Input: [1,1,1], k=2  
Output: 2
```

### Code:

```js
function subarraySumK(nums, k) {
  let map = new Map(), sum = 0, count = 0;
  map.set(0,1);
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum)||0)+1);
  }
  return count;
}
```

---

## 54. Minimum size subarray sum

### Concept:

Two pointer window.

### Example:

```js
Input: [2,3,1,2,4,3], target=7  
Output: 2
```

### Code:

```js
function minSubArrayLen(target, nums) {
  let left=0,sum=0,minLen=Infinity;
  for(let right=0;right<nums.length;right++){
    sum+=nums[right];
    while(sum>=target){
      minLen=Math.min(minLen,right-left+1);
      sum-=nums[left++];
    }
  }
  return minLen===Infinity ? 0 : minLen;
}
```

---

## 55. Find duplicate + missing number

### Concept:

Math equations (sum and sum of squares).

### Example:

```js
Input: [1,2,2,4]  
Output: [2,3]
```

### Code:

```js
function findDuplicateMissing(nums) {
  let n=nums.length;
  let sum = n*(n+1)/2, sumSq = n*(n+1)*(2*n+1)/6;
  let actualSum=0, actualSq=0;
  for(let num of nums){
    actualSum+=num;
    actualSq+=num*num;
  }
  let diff = actualSum - sum;
  let sqDiff = actualSq - sumSq;
  let sumDM = sqDiff / diff;
  let dup = (diff + sumDM)/2;
  let miss = dup - diff;
  return [dup, miss];
}
```

---

## 56. Longest subarray with equal 0s and 1s

### Concept:

Prefix sum (treat 0 as -1), map sum to index.

### Example:

```js
Input: [0,1]  
Output: 2
```

### Code:

```js
function findMaxLength(nums) {
  let map = new Map([[0,-1]]);
  let maxLen = 0, sum = 0;
  for(let i=0;i<nums.length;i++){
    sum += nums[i]===0 ? -1 : 1;
    if(map.has(sum)){
      maxLen = Math.max(maxLen,i-map.get(sum));
    }else{
      map.set(sum,i);
    }
  }
  return maxLen;
}
```

---

## 57. Smallest missing positive integer

### Concept:

Place each num in correct index.

### Example:

```js
Input: [1,2,0]  
Output: 3
```

### Code:

```js
function firstMissingPositive(nums) {
  for(let i=0;i<nums.length;i++){
    while(nums[i]>0 && nums[i]<=nums.length && nums[nums[i]-1]!=nums[i]){
      [nums[i], nums[nums[i]-1]]=[nums[nums[i]-1], nums[i]];
    }
  }
  for(let i=0;i<nums.length;i++){
    if(nums[i]!=i+1) return i+1;
  }
  return nums.length+1;
}
```

---

## 58. Maximum sum rectangle in matrix

### Concept:

Kadane’s on column sum between row pairs.

### Example:

```js
Input: [[1,2,-1,-4,-20],
        [-8,-3,4,2,1],
        [3,8,10,1,3],
        [-4,-1,1,7,-6]]  
Output: 29
```

### Code:

```js
function maxSumRectangle(matrix) {
  let rows=matrix.length, cols=matrix[0].length, maxSum=-Infinity;
  for(let top=0;top<rows;top++){
    let temp=Array(cols).fill(0);
    for(let bottom=top;bottom<rows;bottom++){
      for(let i=0;i<cols;i++) temp[i]+=matrix[bottom][i];
      // Kadane's
      let curr=0,best=-Infinity;
      for(let val of temp){
        curr=Math.max(val,curr+val);
        best=Math.max(best,curr);
      }
      maxSum=Math.max(maxSum,best);
    }
  }
  return maxSum;
}
```

---

## 59. Product of array except self

### Concept:

Left and right product pass.

### Example:

```js
Input: [1,2,3,4]  
Output: [24,12,8,6]
```

### Code:

```js
function productExceptSelf(nums) {
  let n=nums.length, res=Array(n).fill(1);
  let left=1;
  for(let i=0;i<n;i++){
    res[i]*=left;
    left*=nums[i];
  }
  let right=1;
  for(let i=n-1;i>=0;i--){
    res[i]*=right;
    right*=nums[i];
  }
  return res;
}
```

---

## 60. Max length of subarray with sum ≤ K

### Concept:

Prefix sum + binary search (or sliding window if positive).

### Example:

```js
Input: [3,-2,5,-1], k=4  
Output: 3
```

### Code:

```js
function maxLenSubSumLEK(nums,k){
  let sum=0,res=0;
  let map=new Map();
  map.set(0,-1);
  for(let i=0;i<nums.length;i++){
    sum+=nums[i];
    for(let [s,idx] of map){
      if(sum-s<=k){
        res=Math.max(res,i-idx);
      }
    }
    map.set(sum,i);
  }
  return res;
}
```

---

**[⬆ Back to Top](#table-of-contents)**