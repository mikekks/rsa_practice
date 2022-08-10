var rsa = require("node-rsa");
var fs = require("fs")

function GeneratorPair() {
    var key = new rsa().generateKeyPair();

    var publickey = key.exportKey("public");

    var privatekey = key.exportKey("private");

    fs.openSync("./Keys/public.pem", "w")
    fs.writeFileSync("./Keys/public.pem", publickey, "utf8")

    fs.openSync("./Keys/private.pem", "w")
    fs.writeFileSync("./Keys/private.pem", privatekey, "utf8")



    

}

GeneratorPair();