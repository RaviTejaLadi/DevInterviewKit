# Deep dive into “Semantic HTML & Accessibility” —crucial topics for frontend interviews:

## Table of Contents

- [ Semantic HTML](#semantic-html)
- [ Accessibility (a11y)](#accessibility-(a11y))
- [ Interview Tips](#interview-tips)
- [ Summary](#summary)

##  Semantic HTML

### 🔹 What is Semantic HTML?

Semantic HTML uses **meaningful tags** that clearly describe their purpose in the document — improving both **readability** and **SEO/accessibility**.

### ✅ Common Semantic Elements

| Element                     | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| `<header>`                  | Defines a section's or page's header (usually contains logos/nav) |
| `<nav>`                     | Defines navigation links                                          |
| `<main>`                    | Main content of the document (one per page)                       |
| `<section>`                 | Represents a standalone section of content                        |
| `<article>`                 | Represents a self-contained block (e.g., blog post, news article) |
| `<aside>`                   | Side content related to main content (e.g., sidebar, ad)          |
| `<footer>`                  | Footer for section/page (can contain contact, links, etc.)        |
| `<figure>` + `<figcaption>` | For images/diagrams with optional caption                         |
| `<mark>`                    | Highlights text for reference                                     |
| `<time>`                    | Encodes machine-readable timestamps                               |

### ⚠️ Non-Semantic Example

```html
<div class="nav">...</div>
```

### ✅ Semantic Equivalent

```html
<nav>...</nav>
```

### 🔍 Why It Matters

* Helps **search engines** better understand your content.
* Aids **screen readers** in navigation and context.
* Makes code more **maintainable and readable** for devs.

---

##  Accessibility (a11y)

### 📌 Goals of Accessibility

Make the web usable for people with disabilities (e.g., vision, mobility, cognitive impairments).

### 🔹 Key Accessibility Concepts

| Concept                                      | Explanation                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `alt` attributes                             | Describe images for screen readers                           |
| `<label>` with `for`                         | Associates text with form elements                           |
| Keyboard navigation                          | Ensure all elements are usable via **Tab** / **Enter**       |
| Contrast ratio                               | Sufficient text/background contrast for readability          |
| ARIA (Accessible Rich Internet Applications) | Attributes that provide additional accessibility hints       |
| `role` attribute                             | Defines landmark roles like `role="button"`, `role="dialog"` |
| Focus management                             | Use `tabindex`, `focus()` programmatically when needed       |

### ✅ Examples

**Accessible Form Field:**

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required />
```

**Image with Alt Text:**

```html
<img src="logo.png" alt="Company Logo" />
```

**Using ARIA Role:**

```html
<div role="dialog" aria-labelledby="modal-title">...</div>
```

---

## Interview Tips

### 📌 Common Questions

* What are semantic tags and why are they important?
* How does HTML contribute to web accessibility?
* What's the purpose of ARIA roles?
* How would you make a custom button accessible?
* How do you ensure screen readers interpret your form correctly?

---

##  Summary

| Topic             | Remember                                                                |
| ----------------- | ----------------------------------------------------------------------- |
| Semantic HTML     | Use appropriate tags for better SEO, maintainability, and accessibility |
| Accessibility     | Add `alt`, `label`, keyboard support, and ARIA where needed             |
| Interview Insight | Focus on **why** each element improves user experience                  |

