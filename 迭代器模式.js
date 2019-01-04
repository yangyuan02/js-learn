var each = function(arr, callback) { 
    for (var i = 0, l = arr.length; i < l;i++) {
        callback.call(arr[i], i, arr[i])
    }
}
each([1,2,3],function(i,n){

})

var Iterator = function( obj ){ 
    var current = 0;
    var next = function(){ 
        current += 1;
    };
    var isDone = function(){
        return current >= obj.length;
    };
    var getCurrItem = function(){ 
        return obj[ current ];
    };
    return {
        next: next,
        isDone: isDone,
        getCurrItem: getCurrItem 
    };
}
var compare = function( iterator1, iterator2 ){
    while( !iterator1.isDone() && !iterator2.isDone() ){
    if ( iterator1.getCurrItem() !== iterator2.getCurrItem() ){ 
        throw new Error ( 'iterator1 和 iterator2 不相等' );
    } 
    iterator1.next(); 
    iterator2.next();
}
alert ( 'iterator1 和 iterator2 相等' ); }
var iterator1 = Iterator( [ 1, 2, 3 ] );
var iterator2 = Iterator( [ 1, 2, 3 ] );
compare( iterator1, iterator2 ); // 输出:iterator1 和 iterator2 相等

var reverseEach = function( ary, callback ){
    for ( var l = ary.length - 1; l >= 0; l-- ){
        callback( l, ary[ l ] ); }
    };
}
reverseEach( [ 0, 1, 2 ], function( i, n ){ 
    console.log( n ); // 分别输出:2, 1 ,0
});

var each = function( ary, callback ){
    for ( var i = 0, l = ary.length; i < l; i++ ){
        if ( callback( i, ary[ i ] ) === false ){ 
            break;
        } 
    }
};
each( [ 1, 2, 3, 4, 5 ], function( i, n ){
    if ( n > 3 ){ 
        return false;
    }
    console.log( n );
});

