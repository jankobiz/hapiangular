
let knexmssql = require('knex')({
  client: 'mssql',
  connection: {
    server     : '192.168.7.210',
    port: '1433',
    user     : 'autogf',
    password : 'ForumsGet',
    database : 'CrawlingStats'
  }  
});

let bookshelfMSSQL = require('bookshelf')(knexmssql);

let TestsitesMSSQL = bookshelfMSSQL.Model.extend({
  tableName: 'testforums',
  idAttribute: 'forumid'
});

let testsiteMSSQL = new TestsitesMSSQL();

knexmssql.raw(`select forumid, siteid, forumlink, fname, forumnumber from testforums
where siteid = '3b13ad7f108';`).then(function (response) {
    console.log(response[0].forumlink)
})


testsiteMSSQL.where('siteid', '3b13ad7f108').fetchAll()
.then(function(siteMSSQL) {
  let resultsMSSQl = siteMSSQL.toJSON();
  console.log(resultsMSSQl.length + ' MS SQL testsites records fetched');
}).finally(function () {
    process.exit()
})