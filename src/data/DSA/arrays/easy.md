# **🚀 Batch 1: Easy Array Problems**

## Table of Contents

1. [Find maximum in array](#1.find-maximum-in-array)
2. [Find minimum in array](#2️.find-minimum-in-array)
3. [Sum of all elements](#3️.sum-of-all-elements)
4. [Find index of an element](#4️.find-index-of-an-element)
5. [Count occurrences of a number](#5️.count-occurrences-of-a-number)
6. [Reverse the array](#6️.reverse-the-array)
7. [Check if array is sorted](#7️.check-if-array-is-sorted)
8. [Find second largest element](#8️.find-second-largest-element)
9. [Find second smallest element](#9️.find-second-smallest-element)
10. [Check if two arrays are equal](#10.check-if-two-arrays-are-equal)
11. [Merge two sorted arrays](#11.merge-two-sorted-arrays)
12. [Remove duplicates (unsorted)](<#12.remove-duplicates-(unsorted)>)
13. [Remove duplicates (sorted)](<#13.remove-duplicates-(sorted)>)
14. [Find frequency of each element](#14.find-frequency-of-each-element)
15. [Left rotate array by 1](#15.left-rotate-array-by-1)
16. [Right rotate array by 1](#16.right-rotate-array-by-1)
17. [Left rotate array by d](#17.left-rotate-array-by-d)
18. [Right rotate array by d](#18.right-rotate-array-by-d)
19. [Find unique element (others appear twice)](<#19.find-unique-element-(others-appear-twice)>)
20. [Check if array contains pair with given sum](#20.check-if-array-contains-pair-with-given-sum)

### 📝 **Format for Each Problem**

- ✅ Concept / Logic
- ✅ Example Input/Output
- ✅ Solution (JavaScript code)

---

## 1.Find maximum in array

### Concept:

Traverse array, keep updating max if current element is greater.

### Example:

```js
Input: [3, 1, 7, 2, 9, 5];
Output: 9;
```

### Code:

```js
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

---

## 2️.Find minimum in array

### Concept:

Same as max, but check for smaller element.

### Example:

```js
Input: [3, 1, 7, 2, 9, 5];
Output: 1;
```

### Code:

```js
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
```

---

## 3️.Sum of all elements

### Concept:

Simple loop and accumulate sum.

### Example:

```js
Input: [3, 1, 7];
Output: 11;
```

### Code:

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

---

## 4️.Find index of an element

### Concept:

Loop and return index if found.

### Example:

```js
Input: (arr = [3, 7, 1]), (element = 7);
Output: 1;
```

### Code:

```js
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // not found
}
```

---

## 5️.Count occurrences of a number

### Concept:

Loop and count.

### Example:

```js
Input: [1, 2, 1, 3, 1], (target = 1);
Output: 3;
```

### Code:

```js
function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
```

---

## 6️.Reverse the array

### Concept:

Two-pointer swap.

### Example:

```js
Input: [1, 2, 3];
Output: [3, 2, 1];
```

### Code:

```js
function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
    left++;
    right--;
  }
  return arr;
}
```

---

## 7️.Check if array is sorted

### Concept:

Loop and check if any adjacent pair breaks order.

### Example:

```js
Input: [1, 2, 3];
Output: true;
Input: [3, 2, 1];
Output: false;
```

### Code:

```js
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
```

---

## 8️.Find second largest element

### Concept:

Track both largest and second largest during loop.

### Example:

```js
Input: [3, 5, 1, 7, 2];
Output: 5;
```

### Code:

```js
function secondLargest(arr) {
  let first = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}
```

---

## 9️.Find second smallest element

### Concept:

Same logic as second largest, but for min.

### Example:

```js
Input: [3, 5, 1, 7, 2];
Output: 2;
```

### Code:

```js
function secondSmallest(arr) {
  let first = Infinity,
    second = Infinity;
  for (let num of arr) {
    if (num < first) {
      second = first;
      first = num;
    } else if (num < second && num !== first) {
      second = num;
    }
  }
  return second === Infinity ? null : second;
}
```

---

## 10.Check if two arrays are equal

### Concept:

Check lengths + element-wise equality.

### Example:

```js
Input: [1, 2, 3], [1, 2, 3];
Output: true;
Input: [1, 2], [1, 2, 3];
Output: false;
```

### Code:

```js
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
```

## 11.Merge two sorted arrays

### Concept:

Two pointers — compare elements and merge in order.

### Example:

```js
Input: [1, 3, 5], [2, 4, 6];
Output: [1, 2, 3, 4, 5, 6];
```

### Code:

```js
function mergeSorted(arr1, arr2) {
  let i = 0,
    j = 0,
    merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  // Append remaining
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
```

---

## 12.Remove duplicates (unsorted)

### Concept:

Use Set to keep unique elements.

### Example:

```js
Input: [1, 2, 1, 3, 2];
Output: [1, 2, 3];
```

### Code:

```js
function removeDuplicatesUnsorted(arr) {
  return [...new Set(arr)];
}
```

---

## 13.Remove duplicates (sorted)

### Concept:

Since sorted, skip duplicates during loop.

### Example:

```js
Input: [1, 1, 2, 3, 3];
Output: [1, 2, 3];
```

### Code:

```js
function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return [];
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

---

## 14.Find frequency of each element

### Concept:

Use object map to count.

### Example:

```js
Input: [1,2,1,3,1,2]
Output: {1: 3, 2: 2, 3: 1}
```

### Code:

```js
function frequencyMap(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
```

---

## 15.Left rotate array by 1

### Concept:

Shift first element to last.

### Example:

```js
Input: [1, 2, 3];
Output: [2, 3, 1];
```

### Code:

```js
function leftRotateBy1(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}
```

---

## 16.Right rotate array by 1

### Concept:

Pop last element and insert at start.

### Example:

```js
Input: [1, 2, 3];
Output: [3, 1, 2];
```

### Code:

```js
function rightRotateBy1(arr) {
  if (arr.length === 0) return arr;
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
```

---

## 17.Left rotate array by d

### Concept:

Cut first `d`, append at end.

### Example:

```js
Input: [1, 2, 3, 4], (d = 2);
Output: [3, 4, 1, 2];
```

### Code:

```js
function leftRotateByD(arr, d) {
  d = d % arr.length;
  return arr.slice(d).concat(arr.slice(0, d));
}
```

---

## 18.Right rotate array by d

### Concept:

Cut last `d`, insert at start.

### Example:

```js
Input: [1, 2, 3, 4], (d = 2);
Output: [3, 4, 1, 2];
```

### Code:

```js
function rightRotateByD(arr, d) {
  d = d % arr.length;
  return arr.slice(-d).concat(arr.slice(0, arr.length - d));
}
```

---

## 19.Find unique element (others appear twice)

### Concept:

XOR of all elements → unique element.

### Example:

```js
Input: [2, 3, 2];
Output: 3;
```

### Code:

```js
function findUnique(arr) {
  let res = 0;
  for (let num of arr) {
    res ^= num;
  }
  return res;
}
```

---

## 20.Check if array contains pair with given sum

### Concept:

Use Set to check if (sum - num) exists.

### Example:

```js
Input: [1, 2, 3, 9], (sum = 8);
Output: false;
Input: [1, 2, 4, 4], (sum = 8);
Output: true;
```

### Code:

```js
function hasPairWithSum(arr, sum) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(sum - num)) return true;
    seen.add(num);
  }
  return false;
}
```

**[⬆ Back to Top](#table-of-contents)**
