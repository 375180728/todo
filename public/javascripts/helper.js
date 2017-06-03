// 工具类
function $(selector) {
    return document.querySelectorAll(selector);
}


// 请求方法
function action(method, data, urlParam, callback) {

}


// AJAX 异步方法
function syncAction(method, data, url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // xmlhttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open(method, url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (method == 'post' || method == 'put') {
        var x = makePostData(data);
        console.log(x);
        xmlhttp.send(x);
    } else {
        xmlhttp.send();
    }
}

// 生成POST数据
function makePostData(obj) {
    var str = "";
    for (var prop in obj) {
        str += prop + "=" + obj[prop] + "&"
    }

    return str.substr(0, str.length - 1);
}

// MVVM
function makeTodoList(data, isFilter) {
    _listDOM = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i].status == 2) {
            continue;
        }
        var _class = 'todo';
        if (data[i].status == 1) {
            _class = 'todo completed';
        }
        _checked = data[i].status ? 'checked' :'';
        var template = '' +
            '<li class="' + _class + '">' +
            '    <div class="view">' +
            '        <input type="checkbox" class="toggle changeStatus" onClick="changeStatus(' + data[i].status + ', ' + data[i].id + ')" '+_checked+'> ' +
            '        <label>' + data[i].content + '</label> ' +
            '        <button class="destroy" onClick="changeStatus(2, ' + data[i].id + ')"></button>' +
            '    </div> ' +
            '    <input type="text" class="edit">' +
            '</li>';
        _listDOM += template;
    }
    $('.todo-list')[0].innerHTML = _listDOM;
    $('.todo-count strong')[0].innerHTML = data.length;
    if (!isFilter) {
        todos = data;
    }
}