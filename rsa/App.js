var rsa = require("node-rsa");
var fs = require("fs");

var publicKey = new rsa();
var privateKey = new rsa();

var public = fs.readFileSync("./Keys/public.pem", "utf8");
var private = fs.readFileSync("./Keys/private.pem", "utf8");

console.log("--------");

publicKey.importKey(public);
privateKey.importKey(private);

function CreateLicense(mail) {
    const saltFirst = "faekuhfkuahfkuaehfkuaeaefae";
    const saltSecond = "faekuhsedesfsefesffsefkuaeaefae";

    const encrypted = privateKey.encryptPrivate(saltFirst+mail+saltSecond, "base64");
    return encrypted;
}

function CheckValidity(License) {
    const decrypted = publicKey.decryptPublic(License, "utf8")

    if("hadkuwahkudwhafukwhfkuwahfukwagk@example.comfaekuhsedesfsefesffsefkuaeaefae" == decrypted) {
        return true;
    } else{
        return false;
    }
}

console.log(CheckValidity("jJ8thApU8iS+sU/ncFCuBinxBtvjmQyoINQQPwQ5M3TZ6IkIgVuqBlgCcN9Ci7s90a+Wq+Kka3iTB7IBxbR8T/HAA/cUg4TfgjAYX+LDpJukHMIRxu/HDR66gNJnKWmKRUlCLtxHK6en3TJwvwYulMZP06No9wbFmZpIljl6r9J9eQinAehIshWqSLf/0d//2DV41nw2yX9Ms998VT1M+j6nuRoA8aHJLwQQYE1AWMZxgq5h7DBGcnmTZiBd5NhbsyKdOGg+M8hZqPmtQDBNXwV3MtVA9/bgPjFFdlupqkQmgBw87rVEQg00MrDRrdodjKNflxvEHVCJuLmlr10/YA=="));

//console.log("License" + CreateLicense("a@example.com"));