var zccmpzw1ve8srz;
(function(d, t) {
    var s = d.createElement(t), options = {
        'userName':'wanchain',
        'formHash':'zccmpzw1ve8srz',
        'autoResize':true,
        'height':'1216',
        'async':true,
        'host':'wufoo.eu',
        'header':'show',
        'ssl':true};
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.eu/scripts/embed/form.js';
    s.onload = s.onreadystatechange = function() {
        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
        try { zccmpzw1ve8srz = new WufooForm();zccmpzw1ve8srz.initialize(options);zccmpzw1ve8srz.display(); } catch (e) {}};
    var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
