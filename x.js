!function () {
  //缓存
  const installModuels = {};

  function __webpack_require__(moduleId) {
    if (installModuels[moduleId]) {
      return installModuels[moduleId];
    }

    let modules = installModuels[moduleId] = {
      exports: {},
    };

    modules[moduleId] = call(moduleId.exports, module, __webpack_require__);

    return module.exports;
  }

  return __webpack_require__('./src/index.js');
}({"./src/index.js": function(module, exports, __webpack_require__){
        eval(`const sayHi = __webpack_require__("./src/a.js");

sayHi('你好么');
`)
      }
      ,"./src/a.js": function(module, exports, __webpack_require__){
        eval(`module.exports = (name) => {
  console.log('hello world ' + name);
};
`)
      }
      ,});
