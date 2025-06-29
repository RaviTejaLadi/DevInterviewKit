# Top 15 Easy DSA Interview Questions in JavaScript

## Table of Contents

1. [Two Sum](#1.-two-sum)
2. [Contains Duplicate](#2.-contains-duplicate)
3. [Valid Palindrome](#3.-valid-palindrome)
4. [Maximum Depth of Binary Tree](#4.-maximum-depth-of-binary-tree)
5. [Invert Binary Tree](#5.-invert-binary-tree)
6. [Reverse a Linked List](#6.-reverse-a-linked-list)
7. [Merge Two Sorted Lists](#7.-merge-two-sorted-lists)
8. [Climbing Stairs](#8.-climbing-stairs)
9. [Number of 1 Bits](#9.-number-of-1-bits)
10. [Missing Number](#10.-missing-number)
11. [Reverse Bits](#11.-reverse-bits)
12. [Pow(x, n)](#12.-powx-n)
13. [Sqrt(x)](#13.-sqrtx)
14. [Min Stack](#14.-min-stack)
15. [Valid Parentheses](#15.-valid-parentheses)

### 1. Two Sum
**Problem**: Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```
**Explanation**: We use a hash map to store each number's index as we iterate. For each number, we check if its complement (target - number) exists in the map.

### 2. Contains Duplicate
**Problem**: Check if array contains duplicate elements.
```javascript
function containsDuplicate(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
}
```
**Explanation**: Convert array to Set (which removes duplicates) and compare sizes.

### 3. Valid Palindrome
**Problem**: Check if string is palindrome after converting to lowercase and removing non-alphanumeric chars.
```javascript
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}
```
**Explanation**: Clean string then compare with its reverse.

### 4. Maximum Depth of Binary Tree
**Problem**: Find the maximum depth of a binary tree.
```javascript
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```
**Explanation**: Recursively calculate depth of left and right subtrees.

### 5. Invert Binary Tree
**Problem**: Invert a binary tree (mirror image).
```javascript
function invertTree(root) {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}
```
**Explanation**: Recursively swap left and right children.

### 6. Reverse a Linked List
**Problem**: Reverse a singly linked list.
```javascript
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```
**Explanation**: Iterate through list, reversing next pointers.

### 7. Merge Two Sorted Lists
**Problem**: Merge two sorted linked lists into one sorted list.
```javascript
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}
```
**Explanation**: Compare nodes from both lists and build merged list.

### 8. Climbing Stairs
**Problem**: Count ways to climb n stairs (1 or 2 steps at a time).
```javascript
function climbStairs(n) {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
```
**Explanation**: Fibonacci sequence - each step depends on previous two.

### 9. Number of 1 Bits
**Problem**: Count number of '1' bits in unsigned integer.
```javascript
function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        n &= n - 1; // Flip least significant 1-bit
        count++;
    }
    return count;
}
```
**Explanation**: Brian Kernighan's algorithm - each iteration flips rightmost 1-bit.

### 10. Missing Number
**Problem**: Find missing number in array of 0 to n.
```javascript
function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}
```
**Explanation**: XOR all numbers and indices - duplicates cancel out.

### 11. Reverse Bits
**Problem**: Reverse bits of unsigned 32-bit integer.
```javascript
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }
    return result >>> 0; // Convert to unsigned
}
```
**Explanation**: Build result bit by bit from original number.

### 12. Pow(x, n)
**Problem**: Implement pow(x, n) that calculates x raised to power n.
```javascript
function myPow(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    let result = 1;
    let current = x;
    
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
        if (i % 2 === 1) {
            result *= current;
        }
        current *= current;
    }
    
    return result;
}
```
**Explanation**: Exponentiation by squaring - O(log n) time.

### 13. Sqrt(x)
**Problem**: Compute integer square root of x (truncated).
```javascript
function mySqrt(x) {
    if (x < 2) return x;
    
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        
        if (square === x) return mid;
        if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}
```
**Explanation**: Binary search to find largest integer where square ≤ x.

### 14. Min Stack
**Problem**: Design stack that supports push, pop, top, and getMin in O(1).
```javascript
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }
    
    pop() {
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
```
**Explanation**: Secondary stack tracks minimums at each level.

### 15. Valid Parentheses
**Problem**: Check if string contains valid parentheses pairs.
```javascript
function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}
```
**Explanation**: Use stack to track opening brackets and match with closing ones.

**[⬆ Back to Top](#table-of-contents)**