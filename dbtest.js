
var knexmssql = require('knex')({
  client: 'mssql',
  connection: {
    server     : '192.168.7.210',
    port: '1433',
    user     : 'autogf',
    password : 'ForumsGet',
    database : 'CrawlingStats'
  }  
});


knexmssql.raw(`select forumid, siteid, forumlink, fname, forumnumber from testforums
where siteid = '3b13ad7f108';`).then(function (response) {
    console.log(response[0].forumlink)
})
