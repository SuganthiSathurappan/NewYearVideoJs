console.log('db connect')
module.exports = {
    HOST : "localhost",
    USER : "root",
    DB : 'skie',
    dialect :  "mysql",
    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}