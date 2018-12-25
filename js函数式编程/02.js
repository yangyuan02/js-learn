function createPerson() {
    var firstName = '';
    var lastName = '';
    var age = 0;
    return {
        setFirstName:function(fn) {
            firstName = fn;
            return this; // 返回this链式调用 jquery中大量采用这个模式
        },
        setLastName:function(fn) {
            firstName = fn;
            return this;
        },
        setAge:function(a) {
            age = a;
            return this;
        },
        toString:function(){
            return [firstName, lastName].join("")
        }
    }
}
createPerson.setFirstName("Mike").setLastName("Fogus").setAge(108).toString();