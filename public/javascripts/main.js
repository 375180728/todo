// 主要的js
(function() {

    // 监听当在输入新todo时候的回车键
    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var _id = document.activeElement.id;
        if (_id == 'newTodo' && e && e.keyCode == 13) {
            content = {
                "content": $('#newTodo')[0].value
            }
            syncAction('post', content, '/dolist/create', function(data) {
                makeTodoList(eval(data));
            })
        }
    };

    // 初始化列表
    var initTodos = function() {
        syncAction('get', null, '/todos', function(data){
            makeTodoList(eval(data));
        })
    }

    // 改变todo状态
    var changeStatus = function(status, id){
        if (status == 1) {
            status = 0;
        }
        if(status == 0){
            status = 1;
        }

        for(i = 0; i< todos.length; i++){
            if(todos[i].id == id){
                todos[i].status = status;                
            }
        }

        syncAction('put', {"status": status}, '/todo/' + id, function(data){
            // makeTodoList(eval(data));
            // console.log(1111)
            makeTodoList(todos);
        })
    }

    // 初始化 
    initTodos();

    window.changeStatus = changeStatus;
    window.todos = [];

})()