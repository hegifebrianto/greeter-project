# Greeter Component (Vue.js)

This is a standalone Vue 3 component that can be embedded in third-party applications via a `<script>` tag.

---

## ✅ Features
- Self-contained component that renders a button
- Accepts a customizable `message` prop
- Prints message to console when the button is clicked
- Can be embedded with `<script src="compiled-greeter.js"></script>`

---

## 🔧 Usage
```html
<script src="compiled-greeter.js"></script>
<div id="my-component"></div>
<script>
  Greeter.init('#my-component', { message: 'Hello from the host app!' });
</script>
```

---

## 📦 Build Instructions
```bash
npm install
npm run build
```
This will generate `dist/compiled-greeter.js` for external embedding.

---

## 🧪 Run Tests
```bash
npm run test
```
To test expected rendering and button click behavior.

---

## 💡 Why Virtual DOM?
The component uses Vue's built-in Virtual DOM (`h()` function) to:
- Ensure the component is lightweight and self-contained
- Avoid conflicts with the host application's HTML
- Provide flexibility with render functions and reactivity

Virtual DOM is ideal here because it gives full control over output without assuming any host DOM structure or state.

---

## 📁 File Structure
```
/greeter.js          -> Component logic
/vite.config.js      -> Build config for standalone IIFE
/Greeter.test.js     -> Unit tests (Vitest)
/README.md           -> This file
```

---

## 🔗 License
MIT
