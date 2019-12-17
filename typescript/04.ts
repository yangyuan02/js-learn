//声明文件 typescript不知道$ or jquery是什么东西
// $('#foo') or jQuery('#foo')
// declare/定义类型
declare var jQuery: (selector: string) => any;
jQuery('#foo')

//通常我们会把类型声明放到一个单独的文件中，这就是声明文件
// declare var jQuery: (string) => any;
//约定声明文件已.d.ts为后缀
//然后引用声明文件[三斜线指令]表示引用了声明文件
///<reference path="./jquery.d.ts" />
jQuery("#foo");

