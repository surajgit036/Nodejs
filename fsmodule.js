const fs = require('fs');


fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)

})
console.log("Finished reading file")
console.log(__dirname)
console.log(__filename)





