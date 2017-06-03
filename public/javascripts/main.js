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
                makeTodoList(eval('(' + data + ')').todos);
                $('#newTodo')[0].value = "";
            })
        }
    };

    // 初始化列表
    var initTodos = function() {
        syncAction('get', null, '/todos', function(data) {
            makeTodoList(eval('(' + data + ')').todos);
        })
    }

    // 改变todo状态
    var changeStatus = function(status, id) {
        if (status == 1) {
            status = 0;
        }
        else if (status == 0) {
            status = 1;
        }

        if (typeof id  == 'number') {
            for (i = 0; i < todos.length; i++) {
                if (todos[i].id == id) {
                    todos[i].status = status;
                }
            }
        }

        syncAction('put', {
            "status": status
        }, '/todo/' + id, function(data) {
            // makeTodoList(eval(data));
            // console.log(1111)
            makeTodoList(todos);
        })
    }

    // 过滤列表
    var filterTodos = function(status, index){
        tabs = $('.filters a');
        // 重选中
        for(i = 0; i < tabs.length; i++){
            tabs[i].setAttribute('class', '');
        }
        tabs[index].setAttribute('class', 'selected');
        // 开始过滤
        if (status == 'all') {
            makeTodoList(todos, true)
            return;
        }
        _filterTodos = [];
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].status == status) {
                _filterTodos.push(todos[i]);
            }
        }
        makeTodoList(_filterTodos, true);
    }

    // 删除已完成
    var clearCompleted = function(){
        _clearIds = '';
        for(i = 0 ; i< todos.length; i ++){
            if (todos[i].status == 1) {
               todos[i].status = 2;
               _clearIds += todos[i].id;
               _clearIds += ',';
            }
        }   
        _clearIds = _clearIds.substr(_clearIds, _clearIds.length -1 );
        changeStatus(2, _clearIds);
    }

    // 初始化 
    initTodos();

    window.changeStatus = changeStatus;
    window.filterTodos = filterTodos;
    window.clearCompleted = clearCompleted;
    window.todos = [];

})()