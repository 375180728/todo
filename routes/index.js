var db = require('../connect');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendfile('views/index.html');
    });

    // 获取可用的todolist
    app.get('/todos', function(req, res) {
        db.query('select * from dolist where status in (0,1)', function(err, rows) {

            if (err) {
                console.log(err);
                return;
            }

            console.log(rows)
            o = [];
            for (var i = 0; i < rows.length; i++) {
                o.push({
                    id: rows[i].id,
                    content: rows[i].content,
                    status: rows[i].status
                });
            }
            _data = {
                status: 1,
                todos: o
            }
            res.end(JSON.stringify(_data))
        })

    });

    app.post('/dolist/create', function(req, res) {
        var content = req.body.content;
        db.query('insert into dolist set ?', {
            id: null,
            content: content,
            status: 0
        }, function(err, rows) {
            if (err) {
                console.log(err);
                res.end(JSON.stringify({
                    "status": 0
                }))
            } else {
                // 如果插入成功
                db.query('select * from dolist where status in (0,1)', function(err, rows) {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log(rows)
                    o = [];
                    for (var i = 0; i < rows.length; i++) {
                        o.push({
                            id: rows[i].id,
                            content: rows[i].content,
                            status: rows[i].status
                        });
                    }
                    data = {
                        "status": 1,
                        todos: o
                    };
                    res.end(JSON.stringify(data))
                })
            }
        });
    });

    // 更新状态
    app.put('/todo/:id', function(req, res) {
        console.log(req.params)
        var status = req.body.status;
        db.query('update dolist set status = ' + status + ' where id in (' + req.params.id + ')', function(err, rows) {
            if (err) {
                console.log(err);
                res.end(JSON.stringify({
                    "status": 0
                }))
            } else {
                console.log(err);
                res.end(JSON.stringify({
                    "status": 1
                }))
            }
        })

    });



};