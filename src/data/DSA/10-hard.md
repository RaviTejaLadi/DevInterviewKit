# Top 10 DSA Interview Questions in JavaScript

### 1. Longest Palindromic Substring
**Problem**: Find the longest palindromic substring in a string.
```javascript
function longestPalindrome(s) {
    let start = 0, end = 0;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    return s.substring(start, end + 1);
}
```
**Explanation**: Expand around center for both odd and even length palindromes.

### 2. Course Schedule
**Problem**: Check if all courses can be finished given prerequisites.
```javascript
function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const visited = new Array(numCourses).fill(0);
    
    for (const [course, prereq] of prerequisites) {
        graph[course].push(prereq);
    }
    
    function hasCycle(course) {
        if (visited[course] === 1) return true;
        if (visited[course] === 2) return false;
        
        visited[course] = 1;
        for (const prereq of graph[course]) {
            if (hasCycle(prereq)) return true;
        }
        visited[course] = 2;
        
        return false;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }
    
    return true;
}
```
**Explanation**: Detect cycles in directed graph using DFS with three states (0=unvisited, 1=visiting, 2=visited).

### 3. Pacific Atlantic Water Flow
**Problem**: Find cells where water can flow to both Pacific and Atlantic oceans.
```javascript
function pacificAtlantic(matrix) {
    if (!matrix.length) return [];
    
    const rows = matrix.length, cols = matrix[0].length;
    const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const result = [];
    
    function dfs(i, j, ocean) {
        ocean[i][j] = true;
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        
        for (const [di, dj] of directions) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && nj >= 0 && ni < rows && nj < cols && 
                !ocean[ni][nj] && matrix[ni][nj] >= matrix[i][j]) {
                dfs(ni, nj, ocean);
            }
        }
    }
    
    // Pacific (top and left edges)
    for (let i = 0; i < rows; i++) dfs(i, 0, pacific);
    for (let j = 0; j < cols; j++) dfs(0, j, pacific);
    
    // Atlantic (bottom and right edges)
    for (let i = 0; i < rows; i++) dfs(i, cols-1, atlantic);
    for (let j = 0; j < cols; j++) dfs(rows-1, j, atlantic);
    
    // Find overlapping cells
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
}
```
**Explanation**: DFS from ocean edges to mark reachable cells, then find intersections.

### 4. Word Ladder
**Problem**: Find shortest transformation sequence from beginWord to endWord.
```javascript
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    let queue = [beginWord];
    let steps = 1;
    
    while (queue.length) {
        const nextQueue = [];
        
        for (const word of queue) {
            if (word === endWord) return steps;
            
            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1);
                    if (wordSet.has(newWord)) {
                        nextQueue.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        
        queue = nextQueue;
        steps++;
    }
    
    return 0;
}
```
**Explanation**: BFS where each transformation is one edge in graph.

### 5. Trapping Rain Water
**Problem**: Compute how much water can be trapped between bars.
```javascript
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}
```
**Explanation**: Two-pointer approach tracking max heights from both ends.


### 6. Find Median from Data Stream
**Problem**: Design class to find median of numbers as they're added.
```javascript
class MedianFinder {
    constructor() {
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }
    
    addNum(num) {
        this.maxHeap.insert(num);
        this.minHeap.insert(this.maxHeap.extract());
        
        if (this.maxHeap.size() < this.minHeap.size()) {
            this.maxHeap.insert(this.minHeap.extract());
        }
    }
    
    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        }
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
}
```
**Explanation**: Use two heaps to keep track of lower and higher halves.

### 7. LRU Cache
**Problem**: Design Least Recently Used (LRU) cache.
```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    
    get(key) {
        if (!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }
    
    put(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
}
```
**Explanation**: Map maintains insertion order, delete and reinsert on access.

### 8. Search in Rotated Sorted Array
**Problem**: Search target in rotated sorted array.
```javascript
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}
```
**Explanation**: Modified binary search checking which half is sorted.

### 9. Find First and Last Position in Sorted Array
**Problem**: Find first and last position of target in sorted array.
```javascript
function searchRange(nums, target) {
    function findFirst() {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (nums[mid] === target) index = mid;
        }
        return index;
    }
    
    function findLast() {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (nums[mid] === target) index = mid;
        }
        return index;
    }
    
    return [findFirst(), findLast()];
}
```
**Explanation**: Two binary searches - one for first, one for last occurrence.

### 10. Divide Two Integers
**Problem**: Divide two integers without using multiplication/division/mod.
```javascript
function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    
    let negative = (dividend > 0) ^ (divisor > 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let quotient = 0;
    while (dividend >= divisor) {
        let value = divisor;
        let power = 1;
        while (value + value <= dividend) {
            value += value;
            power += power;
        }
        dividend -= value;
        quotient += power;
    }
    
    if (negative) quotient = -quotient;
    return Math.min(Math.max(quotient, -2147483648), 2147483647);
}
```
**Explanation**: Exponential search to subtract largest possible divisor multiples.
