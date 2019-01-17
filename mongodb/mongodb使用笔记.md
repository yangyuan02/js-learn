1sudo mongod开启mongodb服务

2 mongo cd /data/db 进入终端操作数据库

### MongoDB数据库使用
#### 创建数据库
use DATABASE_NAME

eg:use runoob

#### 查看数据库
show dbs

### 删除数据库
db.dropDatabase()

eg: db.dropDatabase()删除当前数据库

### 创建集合
db.createColletion(name.options)

eg:db.createColletion("runoob")

### 查看集合
show collections

### 删除集合
db.collection.drop()

eg:db.runoob.drop()

### 插入文档
inser()或save()

语法: db.COLLECTIONS_NAME.inser(document)

eg:db.col.insert({age:1})

### 更新文档
updata()或save()方法更新集合文档

db.collection.updata(document)

eg:db.col.updata({age:1},{$set:{age:2}})

### 删除文档
db.colletion.remove({<query,justOne>})

db.colletion.remove({})删除所有文档

eg:db.col.remove({age:1})

### 查询文档(RDBMS Where语句比较关键字by等)
db.collection.find(query,projection)

db.col.find({key1:value1, key2:value2}).pretty()多个key用逗号隔开

db.collection.find(query,projection).pretty()格式化文档便于查看

eg:db.col.find()

### 条件操作符
$gt ===>大于

$lt ===>小于

$gte ===>大于等于

$lte ===>小于等于


eg:db.col.find({likes:{$gt:100}})查找出点赞数大于100的条数

eg:db.col.find({likes:50})查找出点赞数等于100的条数

eg:db.col.find({likes:{$lt:20,$gt:100}})查找出点赞数20-100之间的


### type操作符(百度MongoDBtype表)

查找数据类型为type类型

db.col.find({tile:{$type:2}})
或
db.col.find({title:{$type:'string'}})


### Limit与Skip方法
db.collection.find().limit(number)

ed:col.find({},{title:1,id:0}).limit(2) 过滤出数据

db.col.find({},{title:1}).limit(1).skip(1) 跳过某一条

### sort方法
db.collection.find().sort({key:1})
sort()方法通过参数指定排序的字段，并使用1和-1来指定排序的方式，其中1位升序-1为降序

eg:db.col.find().sort({age:-1})


### 索引
createIndex()方法
语法db.collection.createIndex(keys,options)
key创建的索引字段1为指定的升序创建索引-1为降序

db.col.createIndex({"title":1})

多个索引

db.col.createIndex({title:1,description:-1})

### 聚合
主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似sql语句中的 count(*)

aggregate()方法
db.collection.aggregate()
