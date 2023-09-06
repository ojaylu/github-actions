/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${ nameToGreet }`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefiend, 2);
    console.log(`The event payload: ${ payload }`);
} catch(error) {
    core.setFailed(error.message);
}
