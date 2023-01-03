const os=require('os');

harry={
name: "Harry",
favNum: 3,
developer: true
}
//console.log(exports,require,__filename,__dirname)
module.exports=harry;
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
