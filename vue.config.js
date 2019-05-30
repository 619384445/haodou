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
    //             "@":resolve(__dirname,"./src"),
    //             "@common":resolve(__dirname,"./src/common")
    //         }
    //     }
    // }
    
    
}