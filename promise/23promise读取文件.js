        //1.引入fs模块
        const fs = require('fs');

        //2.调用方法读取文件
        // fs.readFile('./21.Promise基本语法.html',(err,data)=>{
        //     //如果失败，抛出错误
        //     if(err)throw err;
        //     //如果没有出错，则输出内容
        //     console.log(data.toString());
        // })

        //3.使用promise封装

    const p = new Promise(function (resolve,reject) {
        fs.readFile('./21.Promise基本语法.html',(err,data)=>{
            //判断失败
            if(err) reject(err);
            //如果成功
            resolve(data);
        });
    })

    p.then(function(value){
        console.log(value.toString())
    },function(reason){
        console.log("读取失败！！")
    });