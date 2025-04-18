# B.A.R.R.I.C.A.D.E

**Bot Activity Recognition & Reputation-based Inspection for Client-side Anomaly Detection & Evaluation**

![License](https://img.shields.io/github/license/wprimadi/barricade)
![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=wprimadi_barricade&metric=alert_status) 
[![BARRICADE CDN](https://data.jsdelivr.com/v1/package/gh/wprimadi/barricade/badge)](https://www.jsdelivr.com/package/gh/wprimadi/barricade)
[![CDN Hits](https://data.jsdelivr.com/v1/package/gh/wprimadi/barricade/badge)](https://www.jsdelivr.com/package/gh/wprimadi/barricade)
[![CDN Downloads](https://data.jsdelivr.com/v1/package/gh/wprimadi/barricade/badge)](https://www.jsdelivr.com/package/gh/wprimadi/barricade)
[![jsDelivr Usage](https://data.jsdelivr.com/v1/package/gh/wprimadi/barricade/badge)](https://www.jsdelivr.com/package/gh/wprimadi/barricade)
[![npm version](https://img.shields.io/npm/v/@wprimadi/barricade.svg)](https://www.npmjs.com/package/@wprimadi/barricade)
[![npm downloads](https://img.shields.io/npm/dm/@wprimadi/barricade.svg)](https://www.npmjs.com/package/@wprimadi/barricade)

B.A.R.R.I.C.A.D.E is a lightweight and extensible JavaScript library that helps you detect bots, headless browsers, automation tools, and suspicious activities right from your frontend. Whether you're dealing with scrapers, brute force attempts, or malicious actors, this tool gives you real-time insights to take action and stay protected.

---

## 🚀 Features

- ✅ Detects headless browsers and automation tools (Puppeteer, Playwright, Selenium, PhantomJS, and more)
- ✅ Classifies search engine bots separately
- ✅ Real-time scoring based on user environment & behavior
- ✅ Fully customizable thresholds and detection rules
- ✅ No dependencies – works with vanilla JS or jQuery
- ✅ Privacy-respecting and lightweight

---

## 📦 Installation

You can include B.A.R.R.I.C.A.D.E via script tag or serve it from your own CDN/server.

```html
<script src="path/to/barricade.min.js"></script>
```

Or serve it via NPM/CDN:

### CDN

You can include B.A.R.R.I.C.A.D.E from a CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/wprimadi/barricade@v1.0.0/barricade.min.js"></script>
```

Or the latest version:

```html
<script src="https://cdn.jsdelivr.net/gh/wprimadi/barricade/barricade.min.js"></script>
```

### NPM

Install via NPM:

```bash
npm install @wprimadi/barricade
```

Or use it from the CDN NPM package:

```html
<script src="https://cdn.jsdelivr.net/npm/@wprimadi/barricade/barricade.min.js"></script>
```

For more details, visit the [NPM page](https://www.npmjs.com/package/@wprimadi/barricade).

---

## 🧠 Usage

```html
<script>
  const result = barricade.detect(3);
  console.log(result);
</script>
```

---

## 🛡 Use Cases

- Block bot registrations or logins
- Protect APIs and form endpoints
- Strengthen CAPTCHAs or security layers
- Collect analytics on suspicious activity

---

## 📖 API

### `barricade.detect(parameter)`

| Parameter       | Type     | Description |
|-----------------|----------|-------------|
| `threshold`     | `number` | Minimum suspicious checks to mark as a bot (default: 3) |

---

## 🧑‍💻 Author

**Wahyu Primadi**  
📧 [saya@wahyuprimadi.com](mailto:saya@wahyuprimadi.com)  
🌐 [https://wahyuprimadi.com](https://wahyuprimadi.com)

---

## 📄 License

MIT License — feel free to use, modify, and contribute.

---

## ❤️ Contributions Welcome

Pull requests, suggestions, and bug reports are highly appreciated. Help make B.A.R.R.I.C.A.D.E even better!

