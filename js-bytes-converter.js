!function() {
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  /**
   * Convert bytes to unit needed
   * @param  {Number} bytes Ammount of bytes
   * @param  {String} unit  Unit to convert
   * @return {Number}       New value on unit needed
   */
  var bytesConverter = function(bytes, unit) {
      let convertValue = bytes / Math.pow(1024, units.indexOf(unit.toUpperCase()));
      return convertValue;
  }
   if (typeof define === "function" && define.amd) define(bytesConverter); else if (typeof module === "object" && module.exports) module.exports = bytesConverter;
 this.bytesConverter = bytesConverter;
}();