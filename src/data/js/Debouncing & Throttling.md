# Debouncing & Throttling

## Debouncing

**Debouncing** is a technique that delays the execution of a function until after a specified period of inactivity. If the function is called again before the delay period ends, the timer resets.

It is a strategy used to improve the performance of a feature by controlling the time at which a
function should be executed

Think of it like an elevator - it waits a few seconds after the last person presses a button before closing the doors.

### How it works:
- Function is called
- Timer starts
- If function is called again before timer expires, reset the timer
- Execute function only when timer completes without interruption

### Simple Example:

```javascript
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear the previous timer
    clearTimeout(timeoutId);
    
    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// example 1

// Usage: Search input
const searchInput = document.getElementById('search');
const handleSearch = (event) => {
  console.log('Searching for:', event.target.value);
  // API call would go here
};

// Debounced version - only search after user stops typing for 300ms
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// example 2
function handleResize() {
  console.log("Window resized", window.innerWidth);
}

window.addEventListener("resize", debouncing(handleResize, 300));
```

**Use Cases:**
- Search input fields
- Form validation
- Window resize events
- Button click prevention (prevent double-clicks)

---

## Throttling

**Throttling** is a mechanism that allows a function execution for a limited number of times after that
it will block its execution. It can also prohibit a function from execution if it is invoked recently. It also determines a consistent rate of execution.

Think of it like a toll booth - only one car can pass through every few seconds, regardless of how many cars are waiting.

### How it works:
- Function is called
- If not in cooldown period, execute immediately and start cooldown
- If in cooldown period, ignore the call (or queue it)
- After cooldown expires, can execute again

### Simple Example:

```javascript
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      // Execute function immediately
      func.apply(this, args);
      inThrottle = true;
      
      // Set cooldown period
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: Scroll event
const handleScroll = () => {
  console.log('Page scrolled to:', window.scrollY);
  // Update scroll position, show/hide elements, etc.
};

// Throttled version - only execute once every 100ms
const throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

**Use Cases:**
- Scroll events
- Mouse movement tracking
- API rate limiting
- Button clicks with loading states
- Game loop functions

---

## Key Differences

| Aspect | Debouncing | Throttling |
|--------|------------|------------|
| **Timing** | Waits for inactivity | Executes at regular intervals |
| **Frequency** | Once after delay | Multiple times within intervals |
| **Best for** | Final action matters | Consistent updates matter |
| **Example** | Search after user stops typing | Smooth scroll animations |

## Quick Memory Trick

- **Debouncing**: "Wait until they're done" (like waiting for someone to finish speaking)
- **Throttling**: "Steady pace" (like a speed limit - you can't go faster than X)