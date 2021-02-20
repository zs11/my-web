var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name,
            this.age = age;
    }
    MyClass.prototype.say = function () {
        console.log('123');
    };
    return MyClass;
}());


var obj = {
    a: 1
}

var proxy = new Proxy(obj, {
    get(target, key) {
        console.log(123)
        return Reflect.get(target, key)
    }
})