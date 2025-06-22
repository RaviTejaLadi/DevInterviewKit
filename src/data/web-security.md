# 🔒 Web Security in JavaScript

Web security is crucial for protecting applications and users from various attacks. Here are the key concepts with JavaScript examples:

## 🔐 HTTPS (HTTP Secure)

HTTPS encrypts data transmission between client and server using TLS/SSL protocols.

### 💻 JavaScript Implementation
```javascript
// 🚨 Force HTTPS redirect
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}

// ✅ Check if connection is secure
if (location.protocol === 'https:') {
    console.log('🔒 Secure connection established');
} else {
    console.warn('⚠️ Insecure connection detected');
}

// 🛡️ Fetch with HTTPS enforcement
async function secureApiCall(url) {
    if (!url.startsWith('https://')) {
        throw new Error('🚫 Only HTTPS URLs are allowed');
    }
    return fetch(url);
}
```

## 🌐 CORS (Cross-Origin Resource Sharing)

CORS controls which domains can access your resources from a browser.

### 🖥️ Server-side Implementation (Node.js/Express)
```javascript
// 🔧 Basic CORS setup
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://trusted-domain.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// ⚙️ Using cors middleware
const cors = require('cors');
const corsOptions = {
    origin: ['https://mydomain.com', 'https://anotherdomain.com'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
```

### 🌍 Client-side CORS handling
```javascript
// 📡 Making CORS request with credentials
fetch('https://api.example.com/data', {
    method: 'POST',
    credentials: 'include', // 🍪 Include cookies
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: 'example' })
})
.then(response => response.json())
.catch(error => console.error('❌ CORS error:', error));
```

## 🛡️ CSP (Content Security Policy)

CSP prevents code injection attacks by controlling resource loading.

### 📋 Setting CSP Headers
```javascript
// 🔒 Express middleware for CSP
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', 
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' https://trusted-cdn.com; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "connect-src 'self' https://api.example.com"
    );
    next();
});
```

### 📝 CSP in HTML Meta Tag
```javascript
// 🏗️ Dynamically adding CSP meta tag
const meta = document.createElement('meta');
meta.httpEquiv = 'Content-Security-Policy';
meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'";
document.head.appendChild(meta);

// 🚨 CSP violation reporting
window.addEventListener('securitypolicyviolation', (event) => {
    console.log('⚠️ CSP Violation:', {
        blockedURI: event.blockedURI,
        directive: event.violatedDirective,
        originalPolicy: event.originalPolicy
    });
});
```

## 💉 XSS (Cross-Site Scripting) Protection

XSS attacks inject malicious scripts into web applications.

### 🧹 Input Sanitization
```javascript
// 🔧 HTML encoding function
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 🛡️ Safe innerHTML alternative
function safeSetHTML(element, htmlString) {
    // 🧼 Using DOMPurify library (recommended)
    element.innerHTML = DOMPurify.sanitize(htmlString);
}

// ✨ Validate and sanitize user input
function sanitizeInput(input) {
    return input
        .replace(/[<>]/g, '') // 🚫 Remove potential script tags
        .trim()
        .substring(0, 255); // 📏 Limit length
}

// 💡 Example usage
const userInput = "<script>alert('XSS')</script>Hello";
const safeInput = escapeHtml(userInput);
document.getElementById('output').textContent = safeInput;
```

### 🔒 XSS Prevention Techniques
```javascript
// ✅ Use textContent instead of innerHTML for user data
element.textContent = userProvidedData; // 🟢 Safe
// element.innerHTML = userProvidedData; // 🔴 Dangerous

// 🏗️ Parameterized queries for dynamic content
function createUserCard(name, email) {
    const template = document.getElementById('user-template');
    const clone = template.content.cloneNode(true);
    
    // 🛡️ Safe assignment
    clone.querySelector('.name').textContent = name;
    clone.querySelector('.email').textContent = email;
    
    return clone;
}
```

## 🎭 CSRF (Cross-Site Request Forgery) Protection

CSRF attacks trick users into performing unwanted actions.

### 🎫 CSRF Token Implementation
```javascript
// 🎲 Generate CSRF token (server-side)
function generateCSRFToken() {
    return require('crypto').randomBytes(32).toString('hex');
}

// 🔐 Client-side CSRF token handling
class CSRFProtection {
    constructor() {
        this.token = this.getTokenFromMeta();
    }
    
    🏷️ getTokenFromMeta() {
        const meta = document.querySelector('meta[name="csrf-token"]');
        return meta ? meta.getAttribute('content') : null;
    }
    
    ➕ addTokenToForm(form) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = '_csrf';
        input.value = this.token;
        form.appendChild(input);
    }
    
    🔒 secureAjax(url, options = {}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'X-CSRF-Token': this.token,
                'Content-Type': 'application/json'
            }
        });
    }
}

// 🚀 Usage
const csrf = new CSRFProtection();
csrf.secureAjax('/api/sensitive-action', {
    method: 'POST',
    body: JSON.stringify({ action: 'delete' })
});
```

### 🍪 SameSite Cookie Protection
```javascript
// 🔐 Setting secure cookies (server-side)
app.use(session({
    cookie: {
        httpOnly: true,    // 🚫 Prevent XSS access
        secure: true,      // 🔒 HTTPS only
        sameSite: 'strict' // 🛡️ CSRF protection
    }
}));

// 🍪 Client-side cookie handling
function setSecureCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Strict; Secure`;
}
```

## 📊 Security Summary Table

| 🔒 Security Measure | 🎯 Purpose | 💻 JavaScript Implementation | 📝 Key Points |
|---------------------|------------|------------------------------|---------------|
| **🔐 HTTPS** | 🔑 Encrypt data transmission | Force HTTPS redirects, validate secure connections | ✅ Always use HTTPS in production |
| **🌐 CORS** | 🛡️ Control cross-origin access | Set proper headers, handle preflight requests | 📋 Whitelist trusted domains only |
| **🛡️ CSP** | 🚫 Prevent code injection | Set CSP headers, handle violations | 🏠 Use 'self' and avoid 'unsafe-inline' |
| **💉 XSS Protection** | 🚨 Prevent script injection | Sanitize inputs, use textContent over innerHTML | ⚠️ Never trust user input |
| **🎭 CSRF Protection** | 🛡️ Prevent unauthorized actions | Use tokens, SameSite cookies, validate referrer | 🎫 Include tokens in all state-changing requests |

## 🏆 Complete Security Implementation Example

```javascript
class WebSecurityManager {
    constructor() {
        this.csrfToken = this.getCSRFToken();
        this.enforceHTTPS();
        this.setupCSP();
    }
    
    🔒 enforceHTTPS() {
        if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            location.replace('https:' + window.location.href.substring(5));
        }
    }
    
    🎫 getCSRFToken() {
        return document.querySelector('meta[name="csrf-token"]')?.content;
    }
    
    🧼 sanitizeHTML(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
    
    🛡️ secureAjaxRequest(url, options = {}) {
        // 🔐 Ensure HTTPS
        if (!url.startsWith('https://') && !url.startsWith('/')) {
            throw new Error('🚫 Only HTTPS URLs allowed');
        }
        
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'X-CSRF-Token': this.csrfToken,
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });
    }
    
    👂 setupCSP() {
        window.addEventListener('securitypolicyviolation', (event) => {
            console.warn('⚠️ CSP Violation:', event.violatedDirective);
            // 📊 Report to security monitoring service
            this.reportSecurityViolation(event);
        });
    }
    
    📈 reportSecurityViolation(event) {
        // 📤 Send violation report to security service
        fetch('/security/csp-violation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                blockedURI: event.blockedURI,
                directive: event.violatedDirective,
                timestamp: new Date().toISOString()
            })
        });
    }
}

// 🚀 Initialize security manager
const security = new WebSecurityManager();
```

🎯 These security measures work together to create a comprehensive defense against common web vulnerabilities. Always implement multiple layers of security rather than relying on a single protection mechanism! 🛡️✨