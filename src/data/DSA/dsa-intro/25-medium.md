# Top 25 DSA Interview Questions in JavaScript

## Table of Contents

1. [Best Time to Buy and Sell Stock](#1.-best-time-to-buy-and-sell-stock)
2. [Product of Array Except Self](#2.-product-of-array-except-self)
3. [Maximum Subarray (Kadane's Algorithm)](#3.-maximum-subarray-(kadanes-algorithm))
4. [Longest Substring Without Repeating Characters](#4.-longest-substring-without-repeating-characters)
5. [Group Anagrams](#5.-group-anagrams)
6. [Detect Cycle in Linked List](#6.-detect-cycle-in-linked-list)
7. [Remove Nth Node From End of List](#7.-remove-nth-node-from-end-of-list)
8. [Add Two Numbers (Linked List)](#8.-add-two-numbers-(linked-list))
9. [Validate Binary Search Tree](#9.-validate-binary-search-tree)
10. [Binary Tree Level Order Traversal](#10.-binary-tree-level-order-traversal)
11. [Subtree of Another Tree](#11.-subtree-of-another-tree)
12. [Number of Islands](#12.-number-of-islands)
13. [Clone Graph](#1.3-clone-graph)
14. [Coin Change](#14.-coin-change)
15. [Longest Increasing Subsequence](#15.-longest-increasing-subsequence)
16. [Word Break](#16.-word-break)
17. [Unique Paths](#17.-unique-paths)
18. [Kth Largest Element in Array](#18.-kth-largest-element-in-array)
19. [Top K Frequent Elements](#19.-top-k-frequent-elements)
20. [Set Matrix Zeroes](#20.-set-matrix-zeroes)
21. [Spiral Matrix](#21.-spiral-matrix)
22. [Rotate Image](#22.-rotate-image)
23. [Counting Bits](#23.-counting-bits)
24. [Merge Intervals](#24.-merge-intervals)
25. [Jump Game](#25.-jump-game)

### 1. Best Time to Buy and Sell Stock
**Problem**: Find the maximum profit from buying and selling a stock given its prices over days.
```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
```
**Explanation**: Track the minimum price seen so far and calculate potential profit if sold at current price.

### 2. Product of Array Except Self
**Problem**: Return an array where each element is the product of all numbers except itself.
```javascript
function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);
    let left = 1, right = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result[i] *= left;
        left *= nums[i];
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}
```
**Explanation**: Use two passes - left to right (storing products of left elements) and right to left (storing products of right elements).

### 3. Maximum Subarray (Kadane's Algorithm)
**Problem**: Find the contiguous subarray with the largest sum.
```javascript
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}
```
**Explanation**: Track maximum sum ending at current position and global maximum sum.

### 4. Longest Substring Without Repeating Characters
**Problem**: Find length of longest substring without repeating characters.
```javascript
function lengthOfLongestSubstring(s) {
    const map = new Map();
    let max = 0, start = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(start, map.get(s[end]) + 1);
        }
        map.set(s[end], end);
        max = Math.max(max, end - start + 1);
    }
    
    return max;
}
```
**Explanation**: Sliding window technique with hash map to track character positions.

### 5. Group Anagrams
**Problem**: Group anagrams together from list of strings.
```javascript
function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const key = [...str].sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}
```
**Explanation**: Use sorted string as key in hash map to group anagrams.

### 6. Detect Cycle in Linked List
**Problem**: Determine if linked list has a cycle.
```javascript
function hasCycle(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    
    return false;
}
```
**Explanation**: Floyd's Tortoise and Hare algorithm - fast pointer catches slow if cycle exists.

### 7. Remove Nth Node From End of List
**Problem**: Remove the nth node from the end of the list.
```javascript
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let slow = dummy, fast = dummy;
    
    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove the nth node
    slow.next = slow.next.next;
    return dummy.next;
}
```
**Explanation**: Two-pointer technique with n+1 gap to find node before target.

### 8. Add Two Numbers (Linked List)
**Problem**: Add two numbers represented as linked lists (digits in reverse order).
```javascript
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return dummy.next;
}
```
**Explanation**: Simulate digit-by-digit addition with carry handling.

### 9. Validate Binary Search Tree
**Problem**: Check if binary tree is a valid BST.
```javascript
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && 
           isValidBST(root.right, root.val, max);
}
```
**Explanation**: Track valid value range for each node during traversal.

### 10. Binary Tree Level Order Traversal
**Problem**: Return level order traversal of binary tree.
```javascript
function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
```
**Explanation**: BFS using queue to process nodes level by level.


### 11. Subtree of Another Tree
**Problem**: Check if one tree is subtree of another.
```javascript
function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```
**Explanation**: Check at each node if trees match from that point.

### 12. Number of Islands
**Problem**: Count number of islands in 2D grid (1=land, 0=water).
```javascript
function numIslands(grid) {
    let count = 0;
    
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') return;
        grid[i][j] = '0';
        dfs(i+1, j); dfs(i-1, j); dfs(i, j+1); dfs(i, j-1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    
    return count;
}
```
**Explanation**: DFS to mark all connected land as visited.

### 13. Clone Graph
**Problem**: Create a deep copy of a connected undirected graph.
```javascript
function cloneGraph(node, map = new Map()) {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    
    const clone = new Node(node.val);
    map.set(node, clone);
    
    for (const neighbor of node.neighbors) {
        clone.neighbors.push(cloneGraph(neighbor, map));
    }
    
    return clone;
}
```
**Explanation**: DFS with hash map to track original-clone pairs.

### 14. Coin Change
**Problem**: Find minimum number of coins to make amount.
```javascript
function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}
```
**Explanation**: DP array where dp[i] = min coins for amount i.

### 15. Longest Increasing Subsequence
**Problem**: Find length of longest increasing subsequence.
```javascript
function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp, 0);
}
```
**Explanation**: DP where dp[i] = max subsequence ending at i.

### 16. Word Break
**Problem**: Check if string can be segmented into dictionary words.
```javascript
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
}
```
**Explanation**: DP where dp[i] = true if s[0..i-1] can be segmented.

### 17. Unique Paths
**Problem**: Count unique paths from top-left to bottom-right of grid.
```javascript
function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
}
```
**Explanation**: DP where dp[i][j] = paths to reach (i,j).

### 18. Kth Largest Element in Array
**Problem**: Find kth largest element in unsorted array.
```javascript
function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}
// Or using QuickSelect for O(n) average time
```
**Explanation**: Sort and pick (k-1)th index, or use QuickSelect algorithm.

### 19. Top K Frequent Elements
**Problem**: Return k most frequent elements.
```javascript
function topKFrequent(nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    return [...freqMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}
```
**Explanation**: Count frequencies, sort by frequency, return top k.

### 20. Set Matrix Zeroes
**Problem**: If element is 0, set entire row and column to 0.
```javascript
function setZeroes(matrix) {
    let firstRowHasZero = false;
    let firstColHasZero = false;
    
    // Check first row and column
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    
    // Use first row/column to mark zeros
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeros based on marks
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Set first row and column if needed
    if (firstRowHasZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if (firstColHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
}
```
**Explanation**: Use first row and column as markers to store which rows/cols need zeroing.

### 21. Spiral Matrix
**Problem**: Return elements of matrix in spiral order.
```javascript
function spiralOrder(matrix) {
    if (!matrix.length) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Top row
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;
        
        // Right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        
        if (top > bottom || left > right) break;
        
        // Bottom row
        for (let j = right; j >= left; j--) {
            result.push(matrix[bottom][j]);
        }
        bottom--;
        
        // Left column
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }
    
    return result;
}
```
**Explanation**: Traverse matrix in layers, adjusting boundaries after each side.

### 22. Rotate Image
**Problem**: Rotate n x n matrix 90 degrees clockwise.
```javascript
function rotate(matrix) {
    const n = matrix.length;
    
    // Transpose matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
```
**Explanation**: Transpose then reverse each row for 90° rotation.

### 23. Counting Bits
**Problem**: For numbers 0 to n, return array with count of 1's in binary.
```javascript
function countBits(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
    }
    return dp;
}
```
**Explanation**: DP using relation that i & (i-1) drops lowest set bit.

### 24. Merge Intervals
**Problem**: Merge all overlapping intervals.
```javascript
function merge(intervals) {
    if (!intervals.length) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        const current = intervals[i];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    return merged;
}
```
**Explanation**: Sort by start time, then merge adjacent intervals.

### 25. Jump Game
**Problem**: Can you reach last index (each element = max jump length)?
```javascript
function canJump(nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos === 0;
}
```
**Explanation**: Work backwards tracking earliest position that can reach end.

**[⬆ Back to Top](#table-of-contents)**