// 未使用享元模式

var Model = function (sex, underwear) {
    this.sex = sex;
    this.underwear = underwear;
}

Model.prototype.takePhoto = function () {
    console.log('sex=' + this.sex + 'underwear=' + this.underwear)
}

for (var i = 1; i < 50; i++) {
    var maleModel = new Model('male', 'underwear' + i);
    maleModel.takePhoto()
}

for (var j = 1; j < 50; j++) {
    var femaleModel = new Model('female', 'underwear', +i);
    femaleModel.takePhoto();
}


// 享元模式

var Model = function (sex) {
    this.sex = sex;
}

Model.prototype.takePhoto = function () {
    console.log('sex=' + this.sex + 'underwear=' + this.underwear);
}

var maleModel = new Model('male');
var femaleModel = new Model('female');
for(var i = 1; i <= 50; i++) {
    maleModel.underwear = 'underwear' + i;
    maleModel.takePhoto();
}

for (var j = 1; j <= 50; j++) {
    femaleModel.underwear = 'underwear' + i;
    femaleModel.takePhoto()
}