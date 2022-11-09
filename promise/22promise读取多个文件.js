        //1.引入fs模块
        const fs = require('fs');

        //1.原始的
        // fs.readFile('./resource/1.md',(err,data1)=>{
        //     fs.readFile('./resource/2.md',(err,data2)=>{
        //         fs.readFile('./resource/3.md',(err,data3)=>{
        //             let result = data1+data2+data3;
        //             console.log(result)
        //         });
        //     });
        // });

        //2.promise链式调用
        const p = new Promise((resolve,reject)=>{
            fs.readFile('./resource/1.md',(err,data)=>{
                resolve(data);
            });
        });

        // const p = new Promise((resolve,reject)=>{
        //     fs.readFile('./resource/2.md',(err,data)=>{
        //         resolve(data);
        //     });
        // });m

        p.then(value=>{
            return new Promise((resolve,reject)=>{
                fs.readFile('./resource/2.md',(err,data)=>{
                    resolve([value,data]);
                });
            })
            // console.log(value.toString());
        }).then(value=>{
            return new Promise((resolve,reject)=>{
                fs.readFile('./resource/3.md',(err,data)=>{
                    // resolve([value,data]);
                    value.push(data);
                    resolve(value);
                });
            })
        }).then(value=>{
            // console.log(value.toString());
            console.log(value.join('\r\n'));
        })
