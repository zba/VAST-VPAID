import VPAIDInterface from 'interface/VPAIDInterface.js';
const HTML_TEMPLATE = '<div style="position: absolute; bottom:20px;; height: 100px; width: 100%; background: white">This is the banner</div>';
// const HTML_TEMPLATE = null;

function testTemplate(template) {
  VPAIDInterface.call(this, template);
}
testTemplate.prototype = Object.create(VPAIDInterface.prototype);
testTemplate.prototype.constructor = VPAIDInterface;

export default new testTemplate(HTML_TEMPLATE);
