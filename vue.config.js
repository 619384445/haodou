module.exports = {
    devServer:{
        proxy:{
             "/hop":{
                 target:"https://hop.haodou.com",
                 changeOrigin:true
             }
        }      
     }
    // configureWebpack:{
    //     resolve:{
    //         alias:{
    //             "@":path.resolve(__dirname,"./src"),
    //             "@api":path.resolve(__dirname,"./src/api"),
    //             "@components":path.resolve(__dirname,"./src/components"),
    //             "@ro":path.resolve(__dirname,"./src/common"),
    //             "@common":path.resolve(__dirname,"./src/common"),
    //         }
    //     }
    // }
    
    
}