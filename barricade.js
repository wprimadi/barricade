/*!
 * B.A.R.R.I.C.A.D.E - Browser Activity-based Real-time Recognition & Intelligent Classification for Automation & Detection Enhancement
 * 
 * A lightweight JavaScript library for detecting bots, headless browsers, and automation tools directly from the browser.
 * 
 * Author: Wahyu Primadi
 * Email: saya@wahyuprimadi.com
 * Website: https://wahyuprimadi.com
 * 
 * © 2025 Wahyu Primadi. All rights reserved.
 */

function isHeadless() {
    return navigator.webdriver === true;
  }
  
  function hasNoPlugins() {
    return navigator.plugins.length === 0;
  }
  
  function suspiciousUserAgent() {
    const ua = navigator.userAgent.toLowerCase();
    return (
      ua.includes('headless') ||
      ua.includes('phantomjs') ||
      ua.includes('slimerjs') ||
      ua.includes('nightmare') ||
      ua.includes('electron') ||
      ua.includes('puppeteer') ||
      ua.includes('playwright') ||
      ua.includes('browserless') ||
      ua.includes('pyppeteer')
    );
  }
  
  function isLanguageMissing() {
    return navigator.languages === undefined || navigator.languages.length === 0;
  }
  
  function isWebGLUnsupported() {
    try {
      const canvas = document.createElement("canvas");
      return !canvas.getContext("webgl") && !canvas.getContext("experimental-webgl");
    } catch (e) {
      return true;
    }
  }
  
  function isSearchEngineBot() {
    const ua = navigator.userAgent.toLowerCase();
    const knownBots = [
      "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
      "yandexbot", "sogou", "exabot", "facebot", "ia_archiver"
    ];
    return knownBots.some(bot => ua.includes(bot));
  }
  
  function isAutomationTool() {
    const w = window;
    return (
      !!w.callPhantom ||
      !!w._phantom ||
      (typeof w.process === 'object' && !!w.process.versions?.electron) ||
      typeof w.nodeRequire === 'function' ||
      (!!navigator.plugins && navigator.plugins.length === 0 && navigator.webdriver)
    );
  }
  
  window.barricade = {
    detect: function (threshold = 3) {
      const checks = [
        isHeadless(),
        hasNoPlugins(),
        suspiciousUserAgent(),
        isLanguageMissing(),
        isWebGLUnsupported()
      ];
  
      const score = checks.filter(Boolean).length;
  
      return {
        isBot: score >= threshold,
        isSearchEngineBot: isSearchEngineBot(),
        isAutomationTool: isAutomationTool(),
        score: score,
        totalChecks: checks.length,
        thresholdUsed: threshold
      };
    }
  };