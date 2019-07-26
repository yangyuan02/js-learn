(function(global) {
  var AMD = {};
  var moduleStorage = {};
  AMD.define = function(name, dependencies, factory) {
    var that = this;
    var _name, _dependencies, _factory;
    var _exec = false;
    if (factory) {
      // 三个参数时候
      _name = name;
      _dependencies = dependencies;
      _factory = factory;
    } else {
      if (dependencies) {
        // 两个参数时候
        if (typeof name === 'string' && typeof dependencies === 'function') {
          _name = name;
          _dependencies = [];
          _factory = dependencies;
        } else if (name instanceof Array && typeof dependencies === 'function') {
          _dependencies = name;
          _factory = dependencies;
          _name = 'temp-' + new Date().getTime();
          _exec = true;
        }
      } else {
        if (typeof name === 'function') {
          _name = 'temp-' + new Date().getTime();
          _dependencies = [];
          _factory = name;
          _exec = true;
        } else {
          return false;
        }
      }
    }
    if (!moduleStorage.hasOwnProperty(_name)) {
      var _module = {
        name: _name,
        dependencies: _dependencies,
        factory: _factory
      };
      moduleStorage[_name] = _module;
    }
    if (_exec) {
      that.emit(_name);
    } else {
      return moduleStorage[_name];
    }
  };
  AMD.emit = function(name) {
    var that = this;
    var module = moduleStorage[name];
    if (typeof module.entity === 'undefined') {
      var _args = [];
      for (var i = 0, len = module.dependencies.length; i < len; i++) {
        var _entity = module.dependencies[i].entity;
        if (typeof _entity !== 'undefined') {
          _args.push(_entity);
          console.log(_entity);
        } else {
          _args.push(that.emit(module.dependencies[i]));
        }
      }
      module.entity = module.factory.apply(function() {}, _args);
    }
    return module.entity;
  };
  AMD.require = function(name) {
    return this.emit(name);
  };
  global.define = function(name, dependencies, factory) {
    AMD.define(name, dependencies, factory);
  };
  global.require = function(name) {
    AMD.require(name);
  };
})(window);

define('test-1', [], function() {
  return {
    name: 'test-1',
    func: function() {
      console.log('test-1');
    }
  };
});

define('test-2', function() {
  return {
    name: 'test-2',
    func: function() {
      console.log('test-2');
    }
  };
});

define('test-1, test-2', function(t1, t2) {
  return {
    name: 'test-2',
    func: function() {
      t1.func();
      t2.func();
    }
  };
});

define(function() {
  console.log(111);
});
