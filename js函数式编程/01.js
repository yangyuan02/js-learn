function splat(fun) {
    return function (array) {
        return fun.apply(null, array)
    }
}
const addArrayElements = splat(function (x, y) {
    return x + y;
})

addArrayElements([1,2])  // ==>3

function unsplat() {
    return function() {
        return fun.call(null, _.toArray);
    }
}
const joinElements = unsplat(function(array) {
    return array.join('');
})

joinElements(1,2) // ==> '1 2'

const letters = ['a','b','c'];
letters[1];

function naiveNth(a, index) {
    return a[index];
}
naiveNth(letters,1);

function parseAge(age) {
    if (!_.isString(age)) {
        throw new Error("Expecting a string")
    }
    var a;
    console.log("attempting to parse an age");
    if (_.isNaN(a)) {
        console.log(["Could not parse age:",age].join(""))
    }
    return a;
}

function fail(thing) {
    throw new Error(thing);
}
function warn(thing) {
    console.log(["WARNING:",thing].join(""))
}
function note(thing) {
    console.log(["NOTE:",thing].join(""))
}
function parseAge(age) {
    if (!_.isString(age)) fail("Expecting a string");
    var a ;
    note("attemping to parse an age");
    a = parseInt(age, 10);
    if (_.isNaN(a)) {
        warn(["Could not parse age:",age].join(""))
    }
    return a;
}

function second(a) {
    return nth(a, 1);
}
second(['a, b']);

[2,3,-1,-6,0,-108,42,10].sort((x, y) => {
    if (x < y) {
        return -1;
    }
    if (y > x) {
        return 1;
    }
    return 0;
});

function compareLessThanOrEqual(x, y) {
    if (x < y) {
        return -1;
    }
    if (y > x) {
        return 1;
    }
    return 0;
}
[2,3,-1,-6,0,-108,42,10].sort(compareLessThanOrEqual);

function lessOrEqual(x, y) { //返回一个布尔值
    return x <= y;
}
[2,3,-1,-6,0,-108,42,10].sort(lessOrEqual);

function comparator(pred) {
    return function(x, y) {
        if (truthy(pred(x, y))) {
            return -1;
        } else if (truthy(pred(x, y))) {
            return 1;
        }else {
            return 0;
        }
    }
}

[2,3,-1,-6,0,-108,42,10].sort(comparator(lessOrEqual));

function lameCSV(str) {
    return _.reduce(str, split("\n"), function(table, row) {
        table.push(_.map(row.split("\n"), function(c){
            return c.trim();
        }))
    })
}
function existy(x) {
    return x != null;
}
function truthy(x) {
    return (x !== false) && existy(x);
}

function doWhen(cond, action) {
    if(truthy(cond)) {
        return action();
    } else {
        return undefined;
    }
}

const fortytwo = function() {
    return 42;
}
const fortytwos = [42,function() {return 42}];
const fortytwos = {
    number:42,
    fun:function() {
        return 42;
    }
}
42 + (function() {return 42})();

function weirdAdd(n, f) {return n + f()};
weirdAdd(42,function(){return 42})
