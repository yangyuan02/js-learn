function ajax(options) {
    
    var xhr = new XMLHttpRequest();


    xhr.open(options.type,options.url,options.async);


    xhr.responesType = 'json';


    xhr.setRequest('Content-Type','application/x-www-urlencoded');

    xhr.timeout = options.timeout || 3000;

    var ajax = new Promise(function(resolve,reject){

        xhr.onreadystatechange = function(){

           if (xhr.readyState == 4) {

              if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {

                  resolve(xhr.response);

              } else {

                reject(xhr.response);

              }
           }

        }


    })


    xhr.type == 'get' ? xhr.send(null) : xhr.send(options.data);


    return ajax;


}

ajax({
    type:'get',
    url:'/api/list',
    dataType:'json'
}).then(function(data){
    
    

})