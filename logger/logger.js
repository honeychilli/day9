const url ="http://localhost:8000/logger"
function log(message){
    console.log("logger says",message);
}
module.exports.log=log;
module.exports.endpoint=url;