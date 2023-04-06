var buf = Buffer.alloc(10);
buf.write("Hello");
console.log(buf);
console.log(buf.toString());

var buf2 = Buffer.from('Welcome');
var a = buf2.toJSON();
console.log(a.data) ;