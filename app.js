// const canvas = document.getElementById("signature-pad");
// const ctx = canvas.getContext("2d");
// const clearButton = document.getElementById("clear");
// const save = document.getElementById("save");


// let drawing = false;
// let prevX = 0;
// let prevY = 0;
// // Event listeners for drawing
// canvas.addEventListener("mousedown", (e) => {
//     drawing = true;
//     prevX = e.clientX - canvas.getBoundingClientRect().left;
//     prevY = e.clientY - canvas.getBoundingClientRect().top;
// });
// canvas.addEventListener("mousemove", (e) => {
//     if (!drawing) return;
//     draw(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
// });
// canvas.addEventListener("mouseup", () => {
//     drawing = false;
// });
// canvas.addEventListener("mouseleave", () => {
//     drawing = false;
// });
// // Function to draw on the canvas
// function draw(x, y) {
//     ctx.beginPath();
//     ctx.strokeStyle = "#000";
//     ctx.lineWidth = 2;
//     ctx.lineJoin = "round";
//     ctx.moveTo(prevX, prevY);
//     ctx.lineTo(x, y);
//     ctx.closePath();
//     ctx.stroke();
//     prevX = x;
//     prevY = y;
// }
// clearButton.addEventListener("click", () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// save.addEventListener("click", () => {
//     const dataURL = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = dataURL;
//     a.download = "signature.png";
//     a.click();
// });
function _0x39ad() {
    const _0x18967d = ['click', 'clientX', 'lineWidth', '#000', 'moveTo', '2fWpmid', 'height', 'clientY', 'addEventListener', 'toDataURL', '576VMKYUp', 'left', 'signature-pad', '1629221ofWKeW', '20ydhHZF', 'lineJoin', '220584Qjkwnx', 'href', 'closePath', 'clear', '185312XtzMxB', '24xTKusu', '14844BoCSJA', 'lineTo', 'image/png', '710791FODWoH', 'mousedown', 'mousemove', 'getBoundingClientRect', 'clearRect', 'mouseup', 'createElement', 'signature.png', '1265dnFVZY', 'width', 'beginPath', 'getElementById', 'top', '82103EScAjB', '311031ppZXEO'];
    _0x39ad = function() { return _0x18967d; };
    return _0x39ad();
}
const _0x5a3795 = _0x5b17;
(function(_0x224748, _0x497ef9) {
    const _0x14e6aa = _0x5b17,
        _0x2dfc28 = _0x224748();
    while (!![]) {
        try {
            const _0x1081b7 = parseInt(_0x14e6aa(0x1e6)) / 0x1 * (parseInt(_0x14e6aa(0x1d2)) / 0x2) + -parseInt(_0x14e6aa(0x1cc)) / 0x3 + parseInt(_0x14e6aa(0x1e3)) / 0x4 * (-parseInt(_0x14e6aa(0x1ee)) / 0x5) + -parseInt(_0x14e6aa(0x1e2)) / 0x6 * (parseInt(_0x14e6aa(0x1cb)) / 0x7) + -parseInt(_0x14e6aa(0x1e1)) / 0x8 * (-parseInt(_0x14e6aa(0x1d7)) / 0x9) + parseInt(_0x14e6aa(0x1db)) / 0xa * (-parseInt(_0x14e6aa(0x1da)) / 0xb) + -parseInt(_0x14e6aa(0x1dd)) / 0xc;
            if (_0x1081b7 === _0x497ef9) break;
            else _0x2dfc28['push'](_0x2dfc28['shift']());
        } catch (_0x34511d) { _0x2dfc28['push'](_0x2dfc28['shift']()); }
    }
}(_0x39ad, 0xc0ad7));
const canvas = document[_0x5a3795(0x1c9)](_0x5a3795(0x1d9)),
    ctx = canvas['getContext']('2d'),
    clearButton = document[_0x5a3795(0x1c9)](_0x5a3795(0x1e0)),
    save = document[_0x5a3795(0x1c9)]('save');
let drawing = ![],
    prevX = 0x0,
    prevY = 0x0;
canvas['addEventListener'](_0x5a3795(0x1e7), _0x20e6a9 => {
    const _0x5eb3be = _0x5a3795;
    drawing = !![], prevX = _0x20e6a9[_0x5eb3be(0x1ce)] - canvas[_0x5eb3be(0x1e9)]()[_0x5eb3be(0x1d8)], prevY = _0x20e6a9['clientY'] - canvas[_0x5eb3be(0x1e9)]()[_0x5eb3be(0x1ca)];
}), canvas['addEventListener'](_0x5a3795(0x1e8), _0x4fae2a => {
    const _0x4f7443 = _0x5a3795;
    if (!drawing) return;
    draw(_0x4fae2a[_0x4f7443(0x1ce)] - canvas[_0x4f7443(0x1e9)]()[_0x4f7443(0x1d8)], _0x4fae2a[_0x4f7443(0x1d4)] - canvas[_0x4f7443(0x1e9)]()['top']);
}), canvas[_0x5a3795(0x1d5)](_0x5a3795(0x1eb), () => { drawing = ![]; }), canvas[_0x5a3795(0x1d5)]('mouseleave', () => { drawing = ![]; });

function draw(_0x518a95, _0x151689) {
    const _0x732096 = _0x5a3795;
    ctx[_0x732096(0x1c8)](), ctx['strokeStyle'] = _0x732096(0x1d0), ctx[_0x732096(0x1cf)] = 0x2, ctx[_0x732096(0x1dc)] = 'round', ctx[_0x732096(0x1d1)](prevX, prevY), ctx[_0x732096(0x1e4)](_0x518a95, _0x151689), ctx[_0x732096(0x1df)](), ctx['stroke'](), prevX = _0x518a95, prevY = _0x151689;
}

function _0x5b17(_0x26cec8, _0x1c5a80) { const _0x39ad8f = _0x39ad(); return _0x5b17 = function(_0x5b171e, _0x580a9c) { _0x5b171e = _0x5b171e - 0x1c8; let _0x574535 = _0x39ad8f[_0x5b171e]; return _0x574535; }, _0x5b17(_0x26cec8, _0x1c5a80); }
clearButton[_0x5a3795(0x1d5)](_0x5a3795(0x1cd), () => {
    const _0x3449a6 = _0x5a3795;
    ctx[_0x3449a6(0x1ea)](0x0, 0x0, canvas[_0x3449a6(0x1ef)], canvas[_0x3449a6(0x1d3)]);
}), save[_0x5a3795(0x1d5)]('click', () => {
    const _0x300fa4 = _0x5a3795,
        _0x1a6edf = canvas[_0x300fa4(0x1d6)](_0x300fa4(0x1e5)),
        _0xa4409e = document[_0x300fa4(0x1ec)]('a');
    _0xa4409e[_0x300fa4(0x1de)] = _0x1a6edf, _0xa4409e['download'] = _0x300fa4(0x1ed), _0xa4409e[_0x300fa4(0x1cd)]();
});