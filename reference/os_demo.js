const os = require("os");

// Platform (windows, mac etc)

console.log(os.platform());

//cpu arch
console.log(os.arch());

//cpu core info
console.log(os.cpus());

//free memory
console.log(os.freemem());
