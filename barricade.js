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

(function () {
    "use strict";

    function isHeadless() {
        return navigator.webdriver === true;
    }

    function hasNoPlugins() {
        return navigator.plugins && navigator.plugins.length === 0;
    }

    function suspiciousUserAgent() {
        const ua = navigator.userAgent.toLowerCase();
        const suspiciousSignatures = [
            'headless', 'phantomjs', 'slimerjs', 'nightmare',
            'electron', 'puppeteer', 'playwright',
            'browserless', 'pyppeteer'
        ];
        return suspiciousSignatures.some(signature => ua.includes(signature));
    }

    function isLanguageMissing() {
        return !navigator.languages || navigator.languages.length === 0;
    }

    function isWebGLUnsupported() {
        try {
            const canvas = document.createElement("canvas");
            return !(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
        } catch (error) {
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
        try {
            const w = window;
            return Boolean(
                w.callPhantom ||
                w._phantom ||
                (typeof w.process === 'object' &&
                    w.process &&
                    w.process.versions &&
                    w.process.versions.electron) ||
                typeof w.nodeRequire === 'function' ||
                (navigator.plugins && navigator.plugins.length === 0 && navigator.webdriver)
            );
        } catch (error) {
            return false;
        }
    }

    window.barricade = {
        detect: function (threshold) {
            const safeThreshold = typeof threshold === "number" ? threshold : 3;

            const checks = [
                isHeadless(),
                hasNoPlugins(),
                suspiciousUserAgent(),
                isLanguageMissing(),
                isWebGLUnsupported()
            ];

            const score = checks.filter(Boolean).length;

            return {
                isBot: score >= safeThreshold,
                isSearchEngineBot: isSearchEngineBot(),
                isAutomationTool: isAutomationTool(),
                score: score,
                totalChecks: checks.length,
                thresholdUsed: safeThreshold
            };
        }
    };
})();
