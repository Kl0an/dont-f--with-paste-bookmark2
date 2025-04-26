(function() {
    function injectScriptFile() {
        const script = document.createElement("script");
        script.setAttribute('type', 'text/javascript');
        script.src = chrome.runtime.getURL("inject.js");
        script.onload = function() {
            this.remove(); 
        };
        (document.head || document.documentElement).appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectScriptFile);
    } else {
        injectScriptFile();
    }
})();