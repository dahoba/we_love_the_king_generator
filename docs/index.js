var username = document.getElementById('username')
    , offset = document.getElementById('offset')
    , fontsize = document.getElementById('fontsize')
    , download = document.getElementById('download')
    , canvas = document.getElementById('canvas')
    // , context = canvas.getContext('2d')
    , render = function () {
        window.location.hash = username.value;
        weloveking();
    }
    , isFacebookApp = function () {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    };

if (isFacebookApp()) {
    var dialog = document.getElementById('fb_app_browser');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();

}

if (window.location.hash) {
    username.value = decodeURIComponent(window.location.hash.replace(/#|@(.)+/g, '') || 'เรา');
}
render();
username.onkeyup = render;
username.onchange = render;
offset.oninput = render;
fontsize.oninput = render;
download.onclick = function (e) {
    ga('Main.send', 'event', 'สร้างรูปเรารักในหลวง - Download', 'view', username.value);
    this.href = document.getElementById('canvas').toDataURL();
    this.download = username.value + '_Love_the_King.png';
};
var avatar;
function weloveking() {
    //$('.weloveking').prepend($('#username').val());
    var options = {
        'shape': 'square',
        'backgroundColor': '#f39bb2',
        'fontFamily': 'noworry',
        'fontSize': fontsize.value,
        'textColor': '#fff',
        'name': username.value,
        'offset': offset.value
    };
    console.log('font: ' + fontsize.value);
    console.log('offset: ' + offset.value);

    MaterialAvatar(document.getElementById('weloveking'), options);

}
$(window).bind('load', setTimeout(function () {
    MaterialAvatar(document.getElementById('weloveking'), options);
}, 1000));