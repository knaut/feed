module.exports = function(obj) {
  // better type checking
  // https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
}