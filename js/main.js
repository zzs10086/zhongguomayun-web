/**
 * Created by Administrator on 2018/1/12.
 */
// 收藏本站
function addFavorite(obj, opts){
    var _t, _u;
    if(typeof opts != 'object'){
        _t = document.title;
        _u = location.href;
    }else{
        _t = opts.title || document.title;
        _u = opts.url || location.href;
    }
    try{
        window.external.addFavorite(_u, _t);
    }catch(e){
        if(window.sidebar){
            obj.href = _u;
            obj.title = _t;
            obj.rel = 'sidebar';
        }else{
            alert('抱歉，您所使用的浏览器无法完成此操作。\n\n请使用 Ctrl + D 将本页加入收藏夹！');
        }
    }
}