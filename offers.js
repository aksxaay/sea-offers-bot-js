'use strict';
const _0x311f38 = _0x12a0;
(function (_0x4bb209, _0x236d8b) {
    const _0x1bfbc5 = _0x12a0, _0x2141ef = _0x4bb209();
    while (!![]) {
        try {
            const _0x1c905b = parseInt(_0x1bfbc5(0x13b)) / 0x1 + parseInt(_0x1bfbc5(0x15a)) / 0x2 + parseInt(_0x1bfbc5(0x10b)) / 0x3 * (parseInt(_0x1bfbc5(0x104)) / 0x4) + -parseInt(_0x1bfbc5(0x164)) / 0x5 + parseInt(_0x1bfbc5(0x129)) / 0x6 * (parseInt(_0x1bfbc5(0x10a)) / 0x7) + -parseInt(_0x1bfbc5(0x115)) / 0x8 * (-parseInt(_0x1bfbc5(0x157)) / 0x9) + -parseInt(_0x1bfbc5(0xd3)) / 0xa * (parseInt(_0x1bfbc5(0x168)) / 0xb);
            if (_0x1c905b === _0x236d8b)
                break;
            else
                _0x2141ef['push'](_0x2141ef['shift']());
        } catch (_0x50dc14) {
            _0x2141ef['push'](_0x2141ef['shift']());
        }
    }
}(_0x5d04, 0xac654));
const _0x2e6d3e = require(_0x311f38(0x110)), {
        appendFileSync: _0x43fb33,
        writeFileSync: _0x4edc29,
        readFileSync: _0x1276d7,
        rmSync: _0x580de0
    } = require('fs'), {createInterface: _0x6e2c84} = require(_0x311f38(0x150)), _0x3a647b = _0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0xf4)] || Date[_0x311f38(0x192)]() % 0x2710 + '-' + Math['floor'](Math[_0x311f38(0x141)]() * 0x3e8), _0xcae573 = !!_0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0xd6)], _0xfaf92c = _0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0xf0)] || 0x0, _0x4680bd = !!_0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0xf6)], _0x6cf8e5 = _0x2e6d3e['argv'][_0x311f38(0xd1)] || 'list.txt', _0x4fcd85 = _0x2e6d3e['argv'][_0x311f38(0x16f)] || _0x311f38(0x102), _0x3bd170 = _0x2e6d3e[_0x311f38(0x10e)]['output'] || _0x311f38(0x16c), _0x52abe6 = _0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0x17a)], _0x3a22fd = !!_0x2e6d3e['argv'][_0x311f38(0x116)], _0x41c59e = !!_0x2e6d3e[_0x311f38(0x10e)][_0x311f38(0x143)], _0x262a45 = !!_0x2e6d3e['argv']['seaverb'], _0x54679a = _0x311f38(0xdb), _0x8cc5a = _0x311f38(0xde) + _0x3a647b;
if (_0xcae573) {
    _0x4edc29(_0x54679a, '');
    return;
}
function _0x55d2cb(_0x13ec4f) {
    _0x3a22fd && console['log'](_0x13ec4f), _0x43fb33(_0x3bd170, _0x13ec4f + '\x0a');
}
function _0x414d16(_0x2f4995) {
    const _0x148d42 = _0x311f38;
    _0x262a45 && _0x55d2cb(_0x148d42(0x191) + ('' + _0x2f4995)[_0x148d42(0x16e)]('\x0a', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'));
}
function _0x2ef9bb(_0x59f7b0) {
    const _0xc8909a = _0x311f38, _0x179879 = '\x0a' + (_0x59f7b0['stack'] ? _0x59f7b0[_0xc8909a(0xf1)] : _0x59f7b0[_0xc8909a(0x170)] ? 'Error:\x20' + _0x59f7b0[_0xc8909a(0x170)] : '' + _0x59f7b0);
    _0x3a22fd && console[_0xc8909a(0x11a)](_0x179879), _0x43fb33(_0x3bd170, _0x179879 + '\x0a');
}
function _0x4e1c56(_0x563867) {
    const _0x20af7d = _0x311f38;
    return _0x563867 === 'mainnet' || _0x563867 === _0x20af7d(0x171) ? _0x20af7d(0xce) : _0x20af7d(0x194);
}
function _0x55fa42() {
    const _0x4541c5 = _0x311f38;
    try {
        _0x55d2cb(_0x4541c5(0x189));
        var _0x5ed66e = JSON[_0x4541c5(0x134)](_0x1276d7(_0x4fcd85));
        return _0x5ed66e[_0x4541c5(0xe9)] = _0x4541c5(0x167) in _0x5ed66e, _0x5ed66e[_0x4541c5(0x163)] = _0x5ed66e[_0x4541c5(0x167)] || _0x5ed66e[_0x4541c5(0x18e)], !!_0x5ed66e[_0x4541c5(0x109)] && (_0x5ed66e[_0x4541c5(0x109)] = _0x4e1c56(_0x5ed66e[_0x4541c5(0x109)])), !('delay' in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x14b)] = 0x1388), !('random_delay' in _0x5ed66e) && (_0x5ed66e['random_delay'] = 0x1388), !(_0x4541c5(0x176) in _0x5ed66e) && (_0x5ed66e['acquire_delay'] = 0x3e8), !(_0x4541c5(0x137) in _0x5ed66e) && (_0x5ed66e['acquire_random_delay'] = 0x3e8), !('expiration' in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x188)] = 0x18), !(_0x4541c5(0xf8) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0xf8)] = 0x1388), !(_0x4541c5(0x131) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x131)] = !![]), !(_0x4541c5(0xed) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0xed)] = !![]), !(_0x4541c5(0xe0) in _0x5ed66e) && (_0x5ed66e['skip_if_owner_is_buyer'] = !![]), !(_0x4541c5(0xe5) in _0x5ed66e) && (_0x5ed66e['skip_if_order_created'] = !![]), !(_0x4541c5(0x196) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x196)] = 0xa), !(_0x4541c5(0xd7) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0xd7)] = 0xa), !(_0x4541c5(0xf5) in _0x5ed66e) && (_0x5ed66e['restart_threshold'] = 0x14), !(_0x4541c5(0x178) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x178)] = !![]), !(_0x4541c5(0x15b) in _0x5ed66e) && (_0x5ed66e['price_epsilon'] = 0.0001), !(_0x4541c5(0xcc) in _0x5ed66e) && (_0x5ed66e['price_floor'] = 0.0001), !(_0x4541c5(0x183) in _0x5ed66e) && (_0x5ed66e['price_roof'] = 0x1), !('proxy_list' in _0x5ed66e) && _0x52abe6 && (_0x5ed66e[_0x4541c5(0x16a)] = _0x52abe6), !(_0x4541c5(0x12b) in _0x5ed66e) && (_0x5ed66e['proxy_protocol'] = _0x4541c5(0x152)), !(_0x4541c5(0x151) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x151)] = !![]), !(_0x4541c5(0x181) in _0x5ed66e) && (_0x5ed66e['switch_delay'] = 0x1388), !(_0x4541c5(0xf7) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0xf7)] = ![]), !(_0x4541c5(0x144) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x144)] = ![]), !(_0x4541c5(0x12f) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0x12f)] = 0x1388), !(_0x4541c5(0xf2) in _0x5ed66e) && (_0x5ed66e[_0x4541c5(0xf2)] = 0x1388), _0x5ed66e;
    } catch (_0x2572f2) {
        _0x2ef9bb(_0x2572f2);
    }
    return {};
}
function _0x5536a4() {
    const _0xefa6f0 = _0x311f38;
    let _0x44404e = !![];
    return !(_0xefa6f0(0x109) in _0x165081) && (_0x55d2cb(_0xefa6f0(0x12c)), _0x44404e = ![]), !(_0xefa6f0(0x154) in _0x165081) && (_0x55d2cb(_0xefa6f0(0x187)), _0x44404e = ![]), !(_0xefa6f0(0x163) in _0x165081) && (_0x55d2cb(_0xefa6f0(0xcf)), _0x44404e = ![]), !('wallet_address' in _0x165081) && (_0x55d2cb(_0xefa6f0(0x15d)), _0x44404e = ![]), _0x165081['delay'] < 0x0 && (_0x55d2cb(_0xefa6f0(0x119)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x193)] < 0x0 && (_0x55d2cb(_0xefa6f0(0x174)), _0x44404e = ![]), _0x165081['acquire_delay'] < 0x0 && (_0x55d2cb(_0xefa6f0(0x146)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x137)] < 0x0 && (_0x55d2cb(_0xefa6f0(0x13a)), _0x44404e = ![]), _0x165081['restart_delay'] < 0x0 && (_0x55d2cb(_0xefa6f0(0xd8)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x181)] < 0x0 && (_0x55d2cb(_0xefa6f0(0x100)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x12f)] < 0x0 && (_0x55d2cb(_0xefa6f0(0x147)), _0x44404e = ![]), _0x165081[_0xefa6f0(0xf2)] < 0x0 && (_0x55d2cb(_0xefa6f0(0xfa)), _0x44404e = ![]), _0x165081[_0xefa6f0(0xcc)] < 0x0 && (_0x55d2cb(_0xefa6f0(0x13c)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x183)] < 0x0 && (_0x55d2cb(_0xefa6f0(0xd4)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x15b)] < 0x0 && (_0x55d2cb(_0xefa6f0(0xda)), _0x44404e = ![]), _0x165081[_0xefa6f0(0x188)] < 0x0 && (_0x55d2cb(_0xefa6f0(0xe2)), _0x44404e = ![]), _0x44404e;
}
function _0x8ed7bd() {
    const _0x2df2a3 = _0x311f38;
    try {
        let _0x322680 = 0x0, _0x18bb7d = 0x0, _0x4086b6 = 0x0;
        const _0xd9ec1 = String(_0x1276d7(_0x8cc5a))[_0x2df2a3(0x160)]('\x20');
        if (_0xd9ec1) {
            if (_0xd9ec1[_0x2df2a3(0xdd)] > 0x0)
                _0x322680 = parseInt(_0xd9ec1[0x0]);
            if (_0xd9ec1[_0x2df2a3(0xdd)] > 0x1 && _0x322680 > 0x0)
                _0x18bb7d = (parseInt(_0xd9ec1[0x1]) + 0x1) % _0x322680;
            if (_0xd9ec1[_0x2df2a3(0xdd)] > 0x2)
                _0x4086b6 = parseInt(_0xd9ec1[0x2]);
        }
        _0x4edc29(_0x8cc5a, _0x322680 + '\x20' + _0x18bb7d + '\x20' + _0x4086b6);
    } catch (_0x3c6058) {
    }
}
const _0x165081 = _0x55fa42();
if (!_0x5536a4())
    return;
if (!_0x4680bd) {
    function _0x53d628() {
        const _0x3af016 = _0x311f38;
        try {
            const {execSync: _0x3d86e9} = require(_0x3af016(0x17d));
            let _0x2a41fe = '--norestart' + ('\x20--instanceid=' + _0x3a647b) + (_0x3af016(0xfe) + _0x6cf8e5) + ('\x20--config=' + _0x4fcd85) + (_0x3af016(0x108) + _0x3bd170);
            _0x3a22fd && (_0x2a41fe = _0x2a41fe + _0x3af016(0x14f)), _0x41c59e && (_0x2a41fe = _0x2a41fe + '\x20--printinfo'), _0x262a45 && (_0x2a41fe = _0x2a41fe + '\x20--seaverb'), _0x165081[_0x3af016(0x16a)] && (_0x2a41fe = _0x2a41fe + _0x3af016(0x182) + _0x165081['proxy_list']), _0x3d86e9(_0x3af016(0xff) + _0x2a41fe, { 'stdio': 'inherit' });
        } catch (_0x3a7a24) {
            _0x55d2cb(_0x3af016(0x153)), _0x8ed7bd(), setTimeout(() => {
                _0x53d628();
            }, _0x165081['restart_delay']);
        }
    }
    _0x53d628();
    return;
}
const {isNullOrUndefined: _0x5184d3} = require(_0x311f38(0xe3)), _0x21d627 = require('http'), _0xa17bb3 = require(_0x311f38(0x11c));
var _0x36b5dc = 0x0, _0x1a478c = _0xfaf92c, _0x8f5873 = ![], _0x386679 = [], _0x4a8d26 = 0x0, _0x4a0e88 = _0x311f38(0x111);
function _0x15b91a() {
    const _0x217466 = _0x311f38;
    try {
        const _0x2a9bb4 = String(_0x1276d7(_0x8cc5a))['split']('\x20');
        if (_0x2a9bb4) {
            if (_0x2a9bb4[_0x217466(0xdd)] > 0x1)
                _0x4a8d26 = parseInt(_0x2a9bb4[0x2]);
            if (_0x2a9bb4[_0x217466(0xdd)] > 0x2)
                _0x1a478c = parseInt(_0x2a9bb4[0x3]);
        }
    } catch (_0x4e3978) {
    }
}
function _0x2ace05() {
    const _0x3b6b0c = _0x311f38;
    _0x4edc29(_0x8cc5a, _0x386679[_0x3b6b0c(0xdd)] + '\x20' + _0x4a8d26 + '\x20' + _0x1a478c);
}
function _0x32b7a8(_0x463faa) {
    const _0x4f2df4 = _0x311f38;
    try {
        let _0xa005de = _0x165081[_0x4f2df4(0x12b)], _0xcccd8b = _0x463faa[_0x4f2df4(0x16e)]('\x20', '');
        _0xcccd8b[_0x4f2df4(0xec)]('//') && (_0xa005de = _0xcccd8b[_0x4f2df4(0x16e)](/\/\/.*$/g, '//'), _0xcccd8b = _0xcccd8b[_0x4f2df4(0x16e)](/^.*\/\//g, ''));
        if (_0xcccd8b[_0x4f2df4(0xec)]('@') && (_0xcccd8b[_0x4f2df4(0x14a)](/\:/g) || [])[_0x4f2df4(0xdd)] == 0x2) {
            const _0x34ba1c = _0xcccd8b[_0x4f2df4(0x16e)](/.*@/, ''), _0x2d54c0 = _0xcccd8b[_0x4f2df4(0x16e)]('@' + _0x34ba1c, '');
            if (!_0x2d54c0 || _0x2d54c0[_0x4f2df4(0xdd)] == 0x0)
                return _0x55d2cb(_0x4f2df4(0x117) + _0x463faa + '.'), {};
            if (!_0x34ba1c || _0x34ba1c[_0x4f2df4(0xdd)] == 0x0)
                return _0x55d2cb(_0x4f2df4(0x117) + _0x463faa + '.'), {};
            const _0x3a762a = _0x2d54c0[_0x4f2df4(0x160)](':'), _0xfdd456 = _0x34ba1c[_0x4f2df4(0x160)](':');
            if (_0x3a762a[_0x4f2df4(0xdd)] != 0x2)
                return _0x55d2cb('Error:\x20Invalid\x20proxy\x20syntax\x20-\x20' + _0x463faa + '.'), {};
            if (_0xfdd456[_0x4f2df4(0xdd)] != 0x2)
                return _0x55d2cb(_0x4f2df4(0x117) + _0x463faa + '.'), {};
            return {
                'protocol': _0xa005de,
                'user': _0x3a762a[0x0],
                'pass': _0x3a762a[0x1],
                'host': _0xfdd456[0x0],
                'port': parseInt(_0xfdd456[0x1])
            };
        }
        const _0x1809c2 = _0xcccd8b[_0x4f2df4(0x160)](':');
        if (_0x1809c2['length'] == 0x2)
            return {
                'protocol': _0xa005de,
                'host': _0x1809c2[0x0],
                'port': parseInt(_0x1809c2[0x1])
            };
        if (_0x1809c2['length'] == 0x4)
            return {
                'protocol': _0xa005de,
                'user': _0x1809c2[0x2],
                'pass': _0x1809c2[0x3],
                'host': _0x1809c2[0x0],
                'port': parseInt(_0x1809c2[0x1])
            };
    } catch (_0x41fd70) {
        _0x2ef9bb(_0x41fd70);
    }
    return _0x55d2cb(_0x4f2df4(0x117) + _0x463faa + '.'), {};
}
function _0x671da() {
    const _0x4a6225 = _0x311f38;
    if (_0x21d627[_0x4a6225(0xeb)])
        _0x21d627[_0x4a6225(0xeb)][_0x4a6225(0x107)]();
    if (_0xa17bb3[_0x4a6225(0xeb)])
        _0xa17bb3['globalAgent'][_0x4a6225(0x107)]();
}
function _0x4eb6c8(_0x35acbe, _0x5a196c) {
    const _0x4fd188 = _0x311f38;
    _0x671da(), _0x21d627[_0x4fd188(0xeb)] = _0x35acbe, _0xa17bb3[_0x4fd188(0xeb)] = _0x5a196c;
}
function _0x5436df(_0x1e37c2) {
    const _0x174e5c = _0x311f38;
    _0x671da(), _0x21d627[_0x174e5c(0xeb)] = _0x1e37c2, _0xa17bb3[_0x174e5c(0xeb)] = _0x1e37c2;
}
function _0x38b7ff() {
    const _0x19794b = _0x311f38;
    _0x671da(), _0x21d627[_0x19794b(0xeb)] = new _0x21d627[(_0x19794b(0x12e))](), _0xa17bb3[_0x19794b(0xeb)] = new _0xa17bb3[(_0x19794b(0x12e))]();
}
function _0x27301e(_0x456910, _0x910ff1) {
    const _0x1afbaa = _0x311f38;
    try {
        const _0x1a2370 = _0x32b7a8(_0x910ff1);
        if (_0x1a2370 && _0x1a2370 !== {}) {
            let _0x400b9f;
            _0x1a2370['user'] && _0x1a2370[_0x1afbaa(0xe7)][_0x1afbaa(0xdd)] > 0x0 ? _0x400b9f = '' + _0x1a2370[_0x1afbaa(0x106)] + _0x1a2370[_0x1afbaa(0xe7)] + ':' + _0x1a2370['pass'] + '@' + _0x1a2370[_0x1afbaa(0x15c)] + ':' + _0x1a2370[_0x1afbaa(0xfc)] : _0x400b9f = '' + _0x1a2370[_0x1afbaa(0x106)] + _0x1a2370[_0x1afbaa(0x15c)] + ':' + _0x1a2370[_0x1afbaa(0xfc)];
            if (_0x1a2370[_0x1afbaa(0x106)][_0x1afbaa(0xec)](_0x1afbaa(0x186))) {
                _0x4eb6c8(new require('http-proxy-agent')(_0x400b9f), new require('https-proxy-agent')(_0x400b9f)), _0x55d2cb('\x0a\x20\x20\x20Switch\x20proxy\x20' + _0x456910 + _0x1afbaa(0x14d) + _0x1a2370[_0x1afbaa(0x106)] + _0x1a2370['host'] + ':' + _0x1a2370[_0x1afbaa(0xfc)]);
                return;
            }
            if (_0x1a2370[_0x1afbaa(0x106)][_0x1afbaa(0xec)]('socks')) {
                _0x5436df(new require(_0x1afbaa(0x138))(_0x400b9f)), _0x55d2cb(_0x1afbaa(0x158) + _0x456910 + _0x1afbaa(0x14d) + _0x1a2370[_0x1afbaa(0x106)] + _0x1a2370[_0x1afbaa(0x15c)] + ':' + _0x1a2370[_0x1afbaa(0xfc)]);
                return;
            }
            _0x55d2cb(_0x1afbaa(0x175) + _0x910ff1 + '.');
        }
        _0x38b7ff();
    } catch (_0x260c02) {
        _0x2ef9bb(_0x260c02);
    }
}
function _0x231812() {
    const _0x350097 = _0x311f38;
    _0x386679 && _0x386679[_0x350097(0xdd)] > 0x0 && (_0x4a8d26 = (_0x4a8d26 + 0x1) % _0x386679[_0x350097(0xdd)], _0x27301e(_0x4a8d26 + 0x1, _0x386679[_0x4a8d26]), _0x2ace05());
}
async function _0x2b0ba2(_0x55db79) {
    const _0x333f19 = _0x311f38, _0x459491 = require(_0x333f19(0xea))[_0x333f19(0x13d)], _0x1ff87e = new _0x459491();
    let _0x5bee60 = await _0x1ff87e[_0x333f19(0x179)]();
    setTimeout(() => {
        _0x5bee60();
    }, _0x55db79), _0x5bee60 = await _0x1ff87e['acquire'](), _0x5bee60();
}
async function _0x55ffcb() {
    const _0x1ffd98 = _0x311f38;
    let _0x295fe2 = ![];
    try {
        while (!_0x295fe2) {
            _0x295fe2 = !![], _0x231812();
            if (_0x165081[_0x1ffd98(0x151)] && global[_0x1ffd98(0x136)])
                try {
                    await global['fetch'](_0x4a0e88, { 'timeout': _0x165081[_0x1ffd98(0x12f)] });
                } catch (_0x23e99e) {
                    try {
                        await global['fetch'](_0x4a0e88, { 'timeout': _0x165081[_0x1ffd98(0x12f)] });
                    } catch (_0x329fa7) {
                        _0x295fe2 = !![];
                    }
                }
            !_0x295fe2 && await _0x2b0ba2(_0x165081[_0x1ffd98(0x181)]);
        }
    } catch (_0x467bac) {
        _0x2ef9bb(_0x467bac);
    }
}
function _0x5d04() {
    const _0x4b1f95 = [
        'MatchOrders',
        'log.txt',
        'address',
        'replace',
        'config',
        'message',
        'live',
        '\x0a\x20%\x20Transaction\x20created',
        '\x0a\x20%\x20All\x20assets\x20approved',
        'Invalid\x20random\x20delay.',
        'Error:\x20Proxy\x20not\x20supported\x20-\x20',
        'acquire_delay',
        'wallet_address',
        'price_auto',
        'acquire',
        'proxy',
        '\x20\x20\x20Invalid\x20asset\x20on\x20line\x20',
        'TransactionConfirmed',
        'child_process',
        '@truffle/hdwallet-provider',
        '\x0a\x20%\x20Asset\x20approved',
        'cloudflare',
        'switch_delay',
        '\x20--proxy=',
        'price_roof',
        '\x0a\x20\x20\x20\x20\x20Price:\x20\x20\x20',
        '\x20Offer\x20succeed\x20with\x20errors.',
        'http',
        'Missing\x20MetaMask\x20mnemonic.',
        'expiration',
        '\x0aInit\x20config...',
        'Rinkeby',
        'TransactionFailed',
        '\x0a\x20%\x20Unwrap\x20wETH',
        '\x20Internal\x20server\x20error.',
        'alchemy_key',
        '\x0a\x20\x20\x20Fetching\x0a\x20\x20\x20',
        '.infura.io/v3/',
        '\x0a\x20\x20\x20OpenSea:\x20\x20',
        'now',
        'random_delay',
        'rinkeby',
        'currentPrice',
        'switch_threshold',
        'ApproveCurrency',
        'price_floor',
        '\x0a\x20%\x20Order\x20created',
        'mainnet',
        'Missing\x20blockchain\x20node\x20API\x20key.',
        'Main',
        'file',
        '\x0a\x20\x20\x20\x20\x20Calculated\x20price:\x20',
        '5066150ZtWVwB',
        'Invalid\x20price\x20roof.',
        '\x20Offer\x20skipped.\x20Already\x20have\x20a\x20bid.',
        'stop',
        'discard_threshold',
        'Invalid\x20restart\x20delay.',
        'API\x20Error\x20429',
        'Invalid\x20price\x20epsilon.',
        '.stop',
        '\x20Internal\x20error\x20due\x20processing.',
        'length',
        '.progress-',
        'Init\x20OpenSea\x20SDK...',
        'skip_if_owner_is_buyer',
        'https://',
        'Invalid\x20expiration\x20time.',
        'util',
        'ApproveAllAssets',
        'skip_if_order_created',
        'headers',
        'user',
        '\x0a\x20%\x20Transaction\x20failed',
        'is_infura',
        'async-mutex',
        'globalAgent',
        'includes',
        'skip_if_too_high',
        '\x20Request\x20was\x20throttled.',
        'API\x20Error\x20408',
        'resume',
        'stack',
        'cache_time',
        'roof:\x20',
        'instanceid',
        'restart_threshold',
        'norestart',
        'log_fetch',
        'restart_delay',
        'api',
        'Invalid\x20cache\x20time.',
        '\x0a\x20\x20\x20\x20\x20Id:\x20\x20\x20\x20\x20\x20',
        'port',
        '\x20Offer\x20skipped.\x20Price\x20too\x20high.',
        '\x20--file=',
        'node\x20offers.js\x20',
        'Invalid\x20switch\x20delay.',
        'user_agent',
        'config.json',
        'Default\x20floor:\x20',
        '653028vsVbys',
        'catch',
        'protocol',
        'destroy',
        '\x20--output=',
        'network',
        '7VGkowj',
        '12jeDNCR',
        'opensea-js',
        'epsilon:\x20',
        'argv',
        'timeout',
        'yargs',
        'https://opensea.io/',
        '\x0a\x20%\x20Order\x20denied',
        '\x20Offer\x20discarded.\x20Too\x20many\x20errors.',
        'owner',
        '8SgZYBZ',
        'verbose',
        'Error:\x20Invalid\x20proxy\x20syntax\x20-\x20',
        'createBuyOrder',
        'Invalid\x20delay.',
        'error',
        '\x20Request\x20was\x20blocked\x20by\x20Cloudflare.',
        'https',
        '.alchemyapi.io/v2/',
        'toLowerCase',
        'CancelOrder',
        'Fatal\x20error:\x20No\x20OpenSeaPort.',
        'addListener',
        'TransactionCreated',
        '\x0a\x20*\x20',
        'UnwrapWeth',
        'round',
        '\x0aStarting...\x0aInstance\x20ID:\x20',
        'Init\x20proxies...',
        'ApproveAsset',
        '5480514LFqyyE',
        'Delay\x20per\x20line:\x20',
        'proxy_protocol',
        'Missing\x20network\x20name.',
        '\x0a\x20%\x20Order\x20cancelled',
        'Agent',
        'fetch_timeout',
        '\x0a\x20%\x20Transaction\x20confirmed',
        'skip_if_have_bid',
        'OrderDenied',
        '\x20Offer\x20skipped.\x20Already\x20own\x20this\x20asset.',
        'parse',
        'Using\x20Alchemy...',
        'fetch',
        'acquire_random_delay',
        'socks-proxy-agent',
        'maker',
        'Invalid\x20acquire\x20random\x20delay.',
        '385402SZjbfP',
        'Invalid\x20price\x20floor.',
        'Mutex',
        'buyOrders',
        '\x0a\x20%\x20Account\x20initialized',
        'https://eth-',
        'random',
        '\x0a\x20!\x20',
        'printinfo',
        'log_full',
        'opensea_key',
        'Invalid\x20acquire\x20delay.',
        'Invalid\x20fetch\x20timeout.',
        '\x20Request\x20timeout.',
        '\x20Acquiring\x20asset...',
        'match',
        'delay',
        'CreateOrder',
        '\x20-\x20',
        'Network',
        '\x20--verbose',
        'readline',
        'proxy_checking',
        'http://',
        '\x0aFatal\x20error.\x20Restarting...',
        'mnemonic',
        'gasPrice',
        '\x0a\x20\x20\x20',
        '3691017zPCGwu',
        '\x0a\x20\x20\x20Switch\x20proxy\x20',
        '\x0a\x20\x20\x20\x20\x20Address:\x20',
        '2172674uSHfuJ',
        'price_epsilon',
        'host',
        'Missing\x20wallet\x20address.',
        '\x0a\x20%\x20Currency\x20approved',
        'cookie',
        'split',
        'InitializeAccount',
        'Using\x20network:\x20rinkeby...',
        'node_key',
        '6111610NIBxre',
        '\x0a\x20%\x20Transaction\x20denied',
        '\x20ms.\x0a',
        'infura_key',
        '33vqbomH',
        '\x20Offer\x20succeed.',
        'proxy_list'
    ];
    _0x5d04 = function () {
        return _0x4b1f95;
    };
    return _0x5d04();
}
function _0xdbd4ac(_0x297941) {
    const {createReadStream: _0xe0caca} = require('fs'), _0x1d400f = _0xe0caca(_0x297941);
    return _0x6e2c84({
        'input': _0x1d400f,
        'crlfDelay': Infinity
    });
}
async function _0x557c83() {
    const _0xf7944f = _0x311f38;
    try {
        if (_0x165081[_0xf7944f(0x16a)]) {
            _0x55d2cb(_0xf7944f(0x127));
            const _0x24e176 = _0xdbd4ac(_0x165081['proxy_list']);
            let _0x587d81 = 0x0, _0x4ecc84 = _0x4a8d26;
            for await (const _0x451774 of _0x24e176) {
                _0x451774 && _0x451774[_0xf7944f(0xdd)] > 0x0 && (_0x386679[_0x587d81] = _0x451774, _0x587d81 == _0x4ecc84 && (_0x4a8d26--, await _0x55ffcb(), _0x55d2cb('')), _0x587d81++);
            }
        }
    } catch (_0x522e5f) {
        _0x2ef9bb(_0x522e5f);
    }
}
function _0x1b5986() {
    const _0x63ef46 = _0x311f38;
    try {
        _0x55d2cb(_0x63ef46(0xdf));
        const _0xcccd37 = require(_0x63ef46(0x10c)), _0x5dc488 = require(_0x63ef46(0x17e));
        _0x165081[_0x63ef46(0x109)] === _0x63ef46(0xce) ? _0x55d2cb('Using\x20network:\x20mainnet...') : _0x55d2cb(_0x63ef46(0x162));
        _0x165081['is_infura'] ? _0x55d2cb('Using\x20Infura...') : _0x55d2cb(_0x63ef46(0x135));
        const _0x208f56 = new _0x5dc488({
            'mnemonic': { 'phrase': _0x165081[_0x63ef46(0x154)] },
            'providerOrUrl': _0x165081[_0x63ef46(0xe9)] ? _0x63ef46(0xe1) + _0x165081[_0x63ef46(0x109)] + _0x63ef46(0x190) + _0x165081[_0x63ef46(0x163)] : _0x63ef46(0x140) + _0x165081['network'] + _0x63ef46(0x11d) + _0x165081[_0x63ef46(0x163)]
        });
        _0x165081['opensea_key'] && _0x55d2cb('Using\x20provided\x20OpenSea\x20API\x20key...');
        var _0x22541e = {
            'networkName': _0x165081['network'] === _0x63ef46(0xce) ? _0xcccd37[_0x63ef46(0x14e)][_0x63ef46(0xd0)] : _0xcccd37[_0x63ef46(0x14e)][_0x63ef46(0x18a)],
            'apiKey': _0x165081[_0x63ef46(0x145)]
        };
        return _0x165081['gas_price'] && (_0x22541e[_0x63ef46(0x155)] = _0x165081['gas_price']), new _0xcccd37['OpenSeaPort'](_0x208f56, _0x22541e, _0x2116dc => _0x414d16(_0x2116dc));
    } catch (_0x28e479) {
        _0x2ef9bb(_0x28e479);
    }
    return null;
}
function _0x5495be() {
    const {
            fetchBuilder: _0x652cd8,
            MemoryCache: _0x3a83fa
        } = require('node-fetch-cache'), _0x5ec068 = _0x652cd8['withCache'](new _0x3a83fa({ 'ttl': _0x165081['cache_time'] }));
    global['fetch'] = (_0xe410a0, _0x393558) => {
        const _0x3995c3 = _0x12a0;
        let _0x15b19b = { ..._0x393558 };
        return !_0x15b19b[_0x3995c3(0x10f)] && (_0x15b19b['timeout'] = _0x165081[_0x3995c3(0x12f)]), _0x165081[_0x3995c3(0x15f)] && (_0x15b19b[_0x3995c3(0xe6)] = {
            ..._0x393558[_0x3995c3(0xe6)],
            'user-agent': _0x165081[_0x3995c3(0x101)],
            'cookie': _0x165081[_0x3995c3(0x15f)]
        }), _0x165081['log_fetch'] && _0x55d2cb(_0x3995c3(0x18f) + _0xe410a0), new Promise((_0x1dacbd, _0x532b20) => {
            const _0x34b853 = _0x3995c3;
            _0x5ec068(_0xe410a0, _0x15b19b)['then'](_0x7bbafa => {
                _0x1dacbd(_0x7bbafa);
            })[_0x34b853(0x105)](_0x4fb7f6 => {
                _0x532b20(_0x4fb7f6);
            });
        });
    };
}
_0x5495be(), global['SAFE_EVENT_EMITTER_HANDLER'] = _0x356989 => {
    _0x2ef9bb(_0x356989);
};
const _0x31f789 = _0x1b5986();
if (_0x5184d3(_0x31f789))
    return;
function _0x12a0(_0x32b363, _0x13f7c4) {
    const _0x5d04f0 = _0x5d04();
    return _0x12a0 = function (_0x12a031, _0x1344fc) {
        _0x12a031 = _0x12a031 - 0xcc;
        let _0x48c448 = _0x5d04f0[_0x12a031];
        return _0x48c448;
    }, _0x12a0(_0x32b363, _0x13f7c4);
}
async function _0x1a6a58() {
    const _0x1dd2bf = _0x311f38;
    if (!_0x31f789) {
        _0x55d2cb(_0x1dd2bf(0x120));
        return;
    }
    try {
        _0x55d2cb('Init\x20event\x20handlers...');
        const {EventType: _0x4ab8fe} = require('opensea-js');
        _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x122)], () => {
            const _0x1bf394 = _0x1dd2bf;
            _0x55d2cb(_0x1bf394(0x172));
        }), _0x31f789['addListener'](_0x4ab8fe[_0x1dd2bf(0x17c)], () => {
            const _0x4467cd = _0x1dd2bf;
            _0x55d2cb(_0x4467cd(0x130));
        }), _0x31f789['addListener'](_0x4ab8fe['TransactionDenied'], () => {
            const _0x177b40 = _0x1dd2bf;
            _0x55d2cb(_0x177b40(0x165));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x18b)], () => {
            const _0x380995 = _0x1dd2bf;
            _0x55d2cb(_0x380995(0xe8));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x161)], () => {
            const _0x2af93f = _0x1dd2bf;
            _0x55d2cb(_0x2af93f(0x13f));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe['WrapEth'], () => {
            _0x55d2cb('\x0a\x20%\x20Wrap\x20ETH');
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x124)], () => {
            const _0x5277cf = _0x1dd2bf;
            _0x55d2cb(_0x5277cf(0x18c));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x197)], () => {
            const _0x2c493b = _0x1dd2bf;
            _0x55d2cb(_0x2c493b(0x15e));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0xe4)], () => {
            const _0x29cf1d = _0x1dd2bf;
            _0x55d2cb(_0x29cf1d(0x173));
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x128)], () => {
            const _0x19315f = _0x1dd2bf;
            _0x55d2cb(_0x19315f(0x17f));
        }), _0x31f789['addListener'](_0x4ab8fe[_0x1dd2bf(0x14c)], () => {
            const _0x4d2074 = _0x1dd2bf;
            _0x55d2cb(_0x4d2074(0xcd)), _0x8f5873 = !![];
        }), _0x31f789[_0x1dd2bf(0x121)](_0x4ab8fe[_0x1dd2bf(0x132)], () => {
            const _0x923496 = _0x1dd2bf;
            _0x55d2cb(_0x923496(0x112));
        }), _0x31f789['addListener'](_0x4ab8fe[_0x1dd2bf(0x16b)], () => {
            _0x55d2cb('\x0a\x20%\x20Orders\x20matched');
        }), _0x31f789['addListener'](_0x4ab8fe[_0x1dd2bf(0x11f)], () => {
            const _0x1c993b = _0x1dd2bf;
            _0x55d2cb(_0x1c993b(0x12d));
        });
    } catch (_0x44045e) {
        _0x2ef9bb(_0x44045e);
    }
}
function _0x12ffe6(_0x37b66e, _0x376023) {
    const _0x564ecb = _0x311f38, _0x598176 = _0x376023[_0x564ecb(0x16e)](/\s\s*/g, '\x20')[_0x564ecb(0x16e)](/^\s*/g, '')['replace'](/\s*$/g, '')['split']('\x20');
    if (!_0x598176 || _0x598176[_0x564ecb(0xdd)] == 0x0)
        return [];
    if (_0x598176[_0x564ecb(0xdd)] > 0x4)
        return _0x55d2cb(_0x564ecb(0x17b) + _0x37b66e + ':\x20' + _0x376023), [];
    let _0x57c07c = _0x598176[0x0][_0x564ecb(0x16e)](/^.*0x/, '0x');
    const _0x337acd = _0x57c07c[_0x564ecb(0x16e)](/\/.*/, ''), _0x455d66 = _0x57c07c[_0x564ecb(0x16e)](/.*\//, '');
    if (!_0x337acd && _0x337acd[_0x564ecb(0xdd)] == 0x0)
        return _0x55d2cb(_0x564ecb(0x17b) + _0x37b66e + ':\x20' + _0x376023), [];
    if (!_0x455d66 && _0x455d66[_0x564ecb(0xdd)] == 0x0)
        return _0x55d2cb(_0x564ecb(0x17b) + _0x37b66e + ':\x20' + _0x376023), [];
    let _0x473835 = [
        _0x165081[_0x564ecb(0xcc)],
        _0x165081['price_roof'],
        _0x165081['price_epsilon']
    ];
    if (_0x598176[_0x564ecb(0xdd)] >= 0x2) {
        _0x473835[0x0] = parseFloat(_0x598176[0x1][_0x564ecb(0x16e)](',', '.'));
        if (isNaN(_0x473835[0x0]))
            return _0x55d2cb('\x20\x20\x20Invalid\x20asset\x20on\x20line\x20' + _0x37b66e + ':\x20' + _0x376023), [];
    }
    if (_0x598176[_0x564ecb(0xdd)] >= 0x3) {
        _0x473835[0x1] = parseFloat(_0x598176[0x2][_0x564ecb(0x16e)](',', '.'));
        if (isNaN(_0x473835[0x1]))
            return _0x55d2cb('\x20\x20\x20Invalid\x20asset\x20on\x20line\x20' + _0x37b66e + ':\x20' + _0x376023), [];
    }
    if (_0x598176[_0x564ecb(0xdd)] == 0x4) {
        _0x473835[0x2] = parseFloat(_0x598176[0x3]['replace'](',', '.'));
        if (isNaN(_0x473835[0x2]))
            return _0x55d2cb(_0x564ecb(0x17b) + _0x37b66e + ':\x20' + _0x376023), [];
    }
    return [
        _0x337acd,
        _0x455d66,
        _0x473835
    ];
}
function _0x1f71bd(_0x2a8cbd) {
    return _0x2a8cbd / 0xde0b6b3a7640000;
}
function _0x4d69f4(_0x12bb35, _0xb90594, _0x3d9a4a) {
    const _0x55d931 = _0x311f38;
    let _0x18421a = _0xb90594;
    if (_0x12bb35['buyOrders'] && _0x12bb35[_0x55d931(0x13e)][_0x55d931(0xdd)] > 0x0)
        for (const _0x4144ec of _0x12bb35[_0x55d931(0x13e)]) {
            let _0x41a49f;
            _0x4144ec[_0x55d931(0x139)][_0x55d931(0x11e)]() == _0x165081[_0x55d931(0x177)][_0x55d931(0x11e)]() ? _0x41a49f = _0x1f71bd(_0x4144ec[_0x55d931(0x195)]) : _0x41a49f = _0x1f71bd(_0x4144ec['currentPrice']) + _0x3d9a4a, _0x18421a < _0x41a49f && (_0x18421a = _0x41a49f);
        }
    return _0x18421a;
}
function _0x8f1b0e() {
    const _0x169fc5 = _0x311f38;
    return _0x165081['acquire_delay'] + Math[_0x169fc5(0x141)]() * _0x165081[_0x169fc5(0x137)];
}
function _0x347838() {
    const _0x10f6d5 = _0x311f38;
    return _0x165081[_0x10f6d5(0x178)] || _0x41c59e || _0x165081[_0x10f6d5(0x131)] || _0x165081['skip_if_owner_is_buyer'];
}
async function _0x542ba7(_0x1b7206, _0x2d1a02, _0x12ce72, _0x3e14ec) {
    const _0x1c9ffa = _0x311f38;
    if (!_0x31f789)
        return _0x55d2cb(_0x1c9ffa(0x120)), !![];
    let _0x1e1509 = _0x3e14ec[0x0];
    _0x8f5873 = ![];
    try {
        let _0x136ec9;
        _0x347838() && (_0x55d2cb('\x0a\x20\x20\x20' + _0x1b7206 + _0x1c9ffa(0x149) + (_0x1c9ffa(0x159) + _0x2d1a02) + ('\x0a\x20\x20\x20\x20\x20Id:\x20\x20\x20\x20\x20\x20' + _0x12ce72)), _0x136ec9 = await _0x31f789[_0x1c9ffa(0xf9)]['getAsset']({
            'tokenAddress': _0x2d1a02,
            'tokenId': _0x12ce72
        }), await _0x2b0ba2(_0x8f1b0e()));
        if (_0x165081[_0x1c9ffa(0xe0)]) {
            if (_0x136ec9[_0x1c9ffa(0x114)][_0x1c9ffa(0x16d)][_0x1c9ffa(0x11e)]() == _0x165081[_0x1c9ffa(0x177)][_0x1c9ffa(0x11e)]())
                return _0x55d2cb('\x0a\x20*\x20' + _0x1b7206 + _0x1c9ffa(0x133)), !![];
        }
        const _0x5af081 = _0x3e14ec[0x1], _0x248c03 = _0x3e14ec[0x2];
        if (_0x165081[_0x1c9ffa(0x178)]) {
            _0x1e1509 = _0x4d69f4(_0x136ec9, _0x1e1509, _0x248c03);
            if (_0x1e1509 > _0x5af081) {
                if (_0x165081[_0x1c9ffa(0xed)])
                    return _0x55d2cb('\x0a\x20*\x20' + _0x1b7206 + _0x1c9ffa(0xfd)), !![];
                _0x1e1509 = _0x5af081;
            }
        }
        if (_0x41c59e)
            _0x165081[_0x1c9ffa(0x178)] && _0x55d2cb(_0x1c9ffa(0xd2) + _0x1e1509), _0x55d2cb('\x0a' + JSON['stringify'](_0x136ec9, null, 0x2));
        else {
            if (_0x165081[_0x1c9ffa(0x131)])
                for (const _0x284cc1 of _0x136ec9[_0x1c9ffa(0x13e)]) {
                    if (_0x284cc1[_0x1c9ffa(0x139)][_0x1c9ffa(0x11e)]() == _0x165081[_0x1c9ffa(0x177)]['toLowerCase']() && _0x1f71bd(_0x284cc1[_0x1c9ffa(0x195)]) + _0x248c03 >= _0x1e1509)
                        return _0x55d2cb(_0x1c9ffa(0x123) + _0x1b7206 + _0x1c9ffa(0xd5)), !![];
                }
            _0x55d2cb(_0x1c9ffa(0x156) + _0x1b7206 + '\x20Processing...' + (_0x1c9ffa(0x159) + _0x2d1a02) + (_0x1c9ffa(0xfb) + _0x12ce72) + (_0x1c9ffa(0x184) + _0x1e1509));
            let _0x5765e0 = 0x0;
            _0x165081[_0x1c9ffa(0x188)] > 0x0 && (_0x5765e0 = Math[_0x1c9ffa(0x125)](Date[_0x1c9ffa(0x192)]() / 0x3e8 + 0x3c * 0x3c * _0x165081[_0x1c9ffa(0x188)]));
            const _0x51b983 = await _0x31f789[_0x1c9ffa(0x118)]({
                'asset': {
                    'tokenId': _0x12ce72,
                    'tokenAddress': _0x2d1a02
                },
                'accountAddress': _0x165081['wallet_address'],
                'expirationTime': _0x5765e0,
                'startAmount': _0x1e1509
            });
            _0x55d2cb('\x0a\x20*\x20' + _0x1b7206 + _0x1c9ffa(0x169) + ('\x0a\x20\x20\x20\x20\x20Address:\x20' + _0x2d1a02) + (_0x1c9ffa(0xfb) + _0x12ce72) + (_0x1c9ffa(0x184) + _0x1e1509));
        }
        return !![];
    } catch (_0x7e8d55) {
        _0x8f5873 && (_0x165081[_0x1c9ffa(0xe5)] ? _0x55d2cb(_0x1c9ffa(0x123) + _0x1b7206 + _0x1c9ffa(0x185) + (_0x1c9ffa(0x159) + _0x2d1a02) + ('\x0a\x20\x20\x20\x20\x20Id:\x20\x20\x20\x20\x20\x20' + _0x12ce72) + (_0x1c9ffa(0x184) + _0x1e1509)) : _0x8f5873 = ![]);
        if (_0x7e8d55[_0x1c9ffa(0x170)] && _0x7e8d55[_0x1c9ffa(0x170)]['includes'](_0x1c9ffa(0xef)))
            _0x55d2cb(_0x1c9ffa(0x156) + _0x1b7206 + _0x1c9ffa(0x148));
        else {
            if (_0x7e8d55[_0x1c9ffa(0x170)] && _0x7e8d55[_0x1c9ffa(0x170)]['includes'](_0x1c9ffa(0xd9)))
                _0x55d2cb('\x0a\x20\x20\x20' + _0x1b7206 + _0x1c9ffa(0xee));
            else {
                if (_0x7e8d55[_0x1c9ffa(0x170)] && _0x7e8d55[_0x1c9ffa(0x170)][_0x1c9ffa(0xec)]('API\x20Error\x20500'))
                    _0x55d2cb(_0x1c9ffa(0x156) + _0x1b7206 + _0x1c9ffa(0x18d));
                else
                    _0x7e8d55['message'] && _0x7e8d55['message'][_0x1c9ffa(0x11e)]()[_0x1c9ffa(0xec)](_0x1c9ffa(0x180)) ? _0x55d2cb(_0x1c9ffa(0x156) + _0x1b7206 + _0x1c9ffa(0x11b)) : _0x55d2cb(_0x1c9ffa(0x156) + _0x1b7206 + _0x1c9ffa(0xdc));
            }
        }
        if (_0x165081[_0x1c9ffa(0x144)])
            _0x2ef9bb(_0x7e8d55);
    }
    return _0x8f5873;
}
async function _0xaa8b3f() {
    _0x13df0d(_0x54679a) && await _0x3a434f();
}
function _0x2d43a0() {
    const _0x48bfd1 = _0x311f38;
    return _0x165081['delay'] + Math[_0x48bfd1(0x141)]() * _0x165081[_0x48bfd1(0x193)];
}
async function _0x3a7e65(_0x1b7c7b, _0x23d52e) {
    const _0x42dc56 = _0x311f38;
    _0x2ace05();
    if (!_0x23d52e || _0x23d52e[_0x42dc56(0xdd)] == 0x0)
        return;
    const _0x542652 = _0x12ffe6(_0x1b7c7b, _0x23d52e);
    if (!_0x542652 || _0x542652[_0x42dc56(0xdd)] != 0x3)
        return;
    const [_0x74036b, _0x56007c, _0x4b24bc] = _0x542652;
    let _0x7bb6a5 = ![], _0x2e1755 = 0x0;
    while (!_0x7bb6a5) {
        await _0xaa8b3f(), await _0x2b0ba2(_0x2d43a0()), _0x7bb6a5 = await _0x542ba7(_0x1b7c7b, _0x74036b, _0x56007c, _0x4b24bc), !_0x7bb6a5 && (_0x2e1755++, _0x36b5dc++, _0x2e1755 >= _0x165081['restart_threshold'] && process['exit'](0x1), _0x36b5dc >= _0x165081[_0x42dc56(0x196)] && (await _0x55ffcb(), _0x36b5dc = 0x0), _0x2e1755 >= _0x165081[_0x42dc56(0xd7)] && (_0x55d2cb(_0x42dc56(0x142) + _0x1b7c7b + _0x42dc56(0x113) + (_0x42dc56(0x159) + _0x74036b) + (_0x42dc56(0xfb) + _0x56007c)), _0x7bb6a5 = !![]));
    }
}
async function _0xff6845(_0x3304a0) {
    let _0x4c14df = _0x1a478c;
    _0x1a478c = 0x0;
    for await (const _0x12063f of _0x3304a0) {
        _0x1a478c >= _0x4c14df && _0x12063f['length'] > 0x0 && await _0x3a7e65(_0x1a478c + 0x1, _0x12063f), _0x1a478c++;
    }
}
async function _0x26dd66() {
    process['exit'](0x0);
}
async function _0x3a434f() {
    try {
        _0x580de0(_0x8cc5a);
    } catch (_0x68d557) {
    }
    try {
        _0x580de0(_0x54679a);
    } catch (_0x28f07a) {
    }
    _0x55d2cb('\x0aDone.\x0a'), await _0x26dd66();
}
function _0x13df0d(_0x41365b) {
    try {
        _0x1276d7(_0x41365b);
    } catch (_0xdff31b) {
        return ![];
    }
    return !![];
}
async function _0x1b7735(_0x184be7) {
    const _0x1c1a8b = _0x311f38;
    try {
        _0x55d2cb(_0x1c1a8b(0x126) + _0x3a647b);
        _0x165081[_0x1c1a8b(0x178)] && _0x55d2cb('Auto\x20price\x20enabled.\x0a' + (_0x1c1a8b(0x103) + _0x165081[_0x1c1a8b(0xcc)] + ',\x20') + (_0x1c1a8b(0xf3) + _0x165081[_0x1c1a8b(0x183)] + ',\x20') + (_0x1c1a8b(0x10d) + _0x165081[_0x1c1a8b(0x15b)] + '.'));
        let _0x47cf11 = _0x165081['delay'], _0x10d55c = _0x165081[_0x1c1a8b(0x193)];
        _0x347838() && (_0x47cf11 += _0x165081[_0x1c1a8b(0x176)], _0x10d55c += _0x165081[_0x1c1a8b(0x137)]);
        _0x10d55c > 0x0 ? _0x55d2cb(_0x1c1a8b(0x12a) + _0x47cf11 + '--' + (_0x47cf11 + _0x10d55c) + _0x1c1a8b(0x166)) : _0x55d2cb(_0x1c1a8b(0x12a) + _0x47cf11 + _0x1c1a8b(0x166));
        _0x1a478c > 0x0 && _0x55d2cb('Resuming\x20progress\x20from\x20line\x20' + _0x1a478c + '...\x0a');
        const _0x38a274 = _0xdbd4ac(_0x184be7);
        await _0xff6845(_0x38a274);
    } catch (_0x27bdfa) {
        _0x2ef9bb(_0x27bdfa);
    }
    await _0x3a434f();
}
async function _0xa307dd() {
    _0x15b91a(), await _0x557c83(), await _0x1a6a58(), await _0x1b7735(_0x6cf8e5);
}
_0xa307dd();
