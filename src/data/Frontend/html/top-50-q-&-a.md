# Top 50 Most Asked HTML Interview Questions 🚀

## Table of Contents

- [Basic HTML Questions ](#basic-html-questions)
- [HTML5 Specific Questions ](#html5-specific-questions)
- [Forms and Input ](#forms-and-input)
- [Multimedia](#multimedia)
- [Links and Navigation](#links-and-navigation)
- [Tables ](#tables)
- [Meta Tags and SEO ](#meta-tags-and-seo)
- [Accessibility ](#accessibility)
- [Storage ](#storage)
- [Performance ](#performance)
- [Advanced Questions ](#advanced-questions)
- [Compatibility and Validation ](#compatibility-and-validation)
- [Miscellaneous ](#miscellaneous)

## Basic HTML Questions 

1. **What is HTML?**  
    - HTML stands for HyperText Markup Language, the standard markup language for creating web pages. 🌐

2. **What are HTML tags and elements?**  
    - Tags are the opening and closing parts of an HTML element (e.g., `<p>` and `</p>`). Elements consist of tags and the content between them. 🏷️

3. **What is the basic structure of an HTML document?**  
    ```html
    <!DOCTYPE html>
    <html>
    <head>
         <title>Page Title</title>
    </head>
    <body>
         <!-- Content goes here -->
    </body>
    </html>
    ```
    🏗️

4. **What is the purpose of the `<!DOCTYPE html>` declaration?**  
    - It tells the browser which HTML version the document is using (HTML5 in this case). 📄

5. **What are void elements in HTML?**  
    - Elements that don't have closing tags or content (e.g., `<img>`, `<br>`, `<input>`). 🚫

## HTML5 Specific Questions 

6. **What are the new features in HTML5?**  
    - Semantic elements (`<header>`, `<footer>`, `<article>`, etc.) 🏛️  
    - Audio/Video support (`<audio>`, `<video>`) 🎵🎬  
    - Canvas and SVG graphics 🖼️  
    - Web storage (localStorage, sessionStorage) 💾  
    - New form controls (date, time, email, etc.) 🗓️

7. **What are semantic elements in HTML5?**  
    - Elements that clearly describe their meaning to both browser and developer (e.g., `<header>`, `<nav>`, `<section>`). 🧩

8. **What is the difference between `<div>` and `<span>`?**  
    - `<div>` is a block-level element, `<span>` is an inline element. 📦📝

9. **What is the purpose of the `<canvas>` element?**  
    - To draw graphics via JavaScript for animations, games, etc. 🎨

10. **What are data-* attributes?**  
     - Custom attributes that store extra information (e.g., `<div data-user-id="123"></div>`). 🗃️

## Forms and Input 

11. **How do you create a form in HTML?**  
     ```html
     <form action="/submit" method="post">
          <!-- Form elements go here -->
     </form>
     ```
     📝

12. **What are the different input types in HTML5?**  
     - text, password, email, number, date, checkbox, radio, file, submit, etc. 🔢

13. **What is the difference between GET and POST methods?**  
     - GET appends data to URL, has length limits, not secure for sensitive data.  
     - POST sends data in request body, no length limits, more secure. 🔒

14. **How do you create a dropdown list?**  
     ```html
     <select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
     </select>
     ```
     🔽

15. **What is the purpose of the `placeholder` attribute?**  
     - Shows hint text in an input field that disappears when user starts typing. 💡

## Multimedia 

16. **How do you embed audio in HTML5?**  
     ```html
     <audio controls>
          <source src="audio.mp3" type="audio/mpeg">
     </audio>
     ```
     🔊

17. **How do you embed video in HTML5?**  
     ```html
     <video controls width="250">
          <source src="video.mp4" type="video/mp4">
     </video>
     ```
     📹

18. **What is the difference between SVG and Canvas?**  
     - SVG is vector-based, scalable without quality loss, good for static images.  
     - Canvas is pixel-based, better for dynamic content like games. 🖌️

## Links and Navigation 

19. **How do you create a hyperlink?**  
     ```html
     <a href="https://example.com">Visit Example</a>
     ```
     🌍

20. **What is the purpose of the `target` attribute in links?**  
     - Specifies where to open the linked document (`_blank` for new tab, `_self` for same tab). 🆕

21. **How do you link to an email address?**  
     ```html
     <a href="mailto:someone@example.com">Send Email</a>
     ```
     📧

## Tables 

22. **How do you create a table in HTML?**  
     ```html
     <table>
          <tr>
                <th>Header 1</th>
                <th>Header 2</th>
          </tr>
          <tr>
                <td>Data 1</td>
                <td>Data 2</td>
          </tr>
     </table>
     ```
     🗂️

23. **What is the difference between `<th>` and `<td>`?**  
     - `<th>` defines a header cell, `<td>` defines a standard data cell. 🏷️

## Meta Tags and SEO 

24. **What is the purpose of the `<meta>` tag?**  
     - Provides metadata about the HTML document (character set, viewport settings, etc.). 🏷️

25. **How do you set the viewport for mobile devices?**  
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     ```
     📱

26. **What is the purpose of the `<title>` tag?**  
     - Defines the title of the document shown in browser's title bar or tab. 🏷️

## Accessibility 

27. **What is ARIA in HTML?**  
     - Accessible Rich Internet Applications - attributes that make web content more accessible. 🦾

28. **What is the purpose of the `alt` attribute in images?**  
     - Provides alternative text for screen readers and when images can't be displayed. 🖼️

## Storage 

29. **What is the difference between localStorage and sessionStorage?**  
     - localStorage persists after browser closes, sessionStorage clears when session ends. 🗄️

## Performance 

30. **How can you optimize HTML for better performance?**  
     - Minimize DOM size, use semantic elements, defer non-critical resources, etc. 🚀

## Advanced Questions 

31. **What is the difference between HTML and XHTML?**  
     - XHTML is stricter XML-based version of HTML with more rigid syntax rules. 📚

32. **What are web workers in HTML5?**  
     - JavaScript running in the background without affecting page performance. 🏃‍♂️

33. **What is the purpose of the `<iframe>` tag?**  
     - Embeds another HTML page within the current page. 🖼️

34. **How do you make a web page responsive?**  
     - Use viewport meta tag, fluid layouts, CSS media queries, flexible images. 📱💻

35. **What is the purpose of the `defer` and `async` attributes in script tags?**  
     - Both load scripts without blocking rendering, but `async` executes as soon as loaded while `defer` waits for document parsing to complete. ⏳

## Compatibility and Validation 

36. **What is HTML validation?**  
     - Process of checking HTML code against standards to identify errors. ✔️

37. **How do you handle browser-specific HTML tags?**  
     - Use feature detection and fallbacks or polyfills. 🧪

## Miscellaneous 

38. **What is the purpose of the `<nav>` element?**  
     - Defines a section of navigation links. 🧭

39. **How do you create a comment in HTML?**  
     ```html
     <!-- This is a comment -->
     ```
     💬

40. **What is the difference between `id` and `class` attributes?**  
     - `id` is unique per page, `class` can be used on multiple elements. 🆔🏷️

41. **How do you create a button in HTML?**  
     ```html
     <button type="button">Click Me</button>
     ```
     🔘

42. **What is the purpose of the `<figure>` and `<figcaption>` elements?**  
     - `<figure>` contains media content, `<figcaption>` provides a caption for it. 🖼️📝

43. **How do you embed a YouTube video?**  
     ```html
     <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
     ```
     ▶️

44. **What is the purpose of the `<datalist>` element?**  
     - Provides autocomplete options for `<input>` elements. 📝

45. **How do you create a progress bar?**  
     ```html
     <progress value="70" max="100">70%</progress>
     ```
     📊

46. **What is the purpose of the `<output>` element?**  
     - Represents the result of a calculation or user action. 🧮

47. **How do you create a tooltip in HTML?**  
     ```html
     <span title="This is a tooltip">Hover over me</span>
     ```
     💡

48. **What is the purpose of the `<template>` tag?**  
     - Holds client-side content that isn't rendered until activated by JavaScript. 🗂️

49. **How do you create a collapsible section?**  
     ```html
     <details>
          <summary>Click to expand</summary>
          <p>Hidden content</p>
     </details>
     ```
     📂

50. **What is the purpose of the `<main>` element?**  
     - Represents the dominant content of the `<body>` of a document. 🏛️

     **[⬆ Back to Top](#table-of-contents)**