const _0x4d5b05 = _0x562a;
function _0x562a(_0x1fc388, _0x35c021) {
  const _0x1be39c = _0x1be3();
  return (
    (_0x562a = function (_0x562aad, _0x323312) {
      _0x562aad = _0x562aad - 0x167;
      let _0x57327a = _0x1be39c[_0x562aad];
      return _0x57327a;
    }),
    _0x562a(_0x1fc388, _0x35c021)
  );
}
function _0x1be3() {
  const _0x3bf31e = [
    "success",
    "base64",
    "1104180ZrUkWE",
    "input.network-password",
    "button[type=\x27submit\x27]",
    "click",
    "hidden",
    "location",
    "querySelector",
    "json",
    "594972aSOGal",
    "addEventListener",
    "bWNqdHp3aW5XYjNhQ3VVVTNDYVZ1S21BekhkRU54cFJmTmZvRWtnbQo=",
    "Welcome\x20to\x20the\x20browser\x20inspector!\x20You\x20are\x20in\x20the\x20Console\x20tab,\x20which\x20shows\x20you\x20JavaScript\x20logs\x20and\x20errors.",
    "7ZQRlWL",
    "1550133iDUjWt",
    "2ddZShZ",
    "&second=",
    "/challenges/path/Ef33KmMupauWUPzNJoY9WvMdtoTmXv.html",
    "value",
    "6332997BuCMgv",
    "10DdnreW",
    "something\x20went\x20wrong",
    "7244676LglIXO",
    "removeItem",
    "add",
    "application/json;\x20charset=UTF-8",
    "/challenges/path/VFtxYm9w3Pz9MTFH9CXknxetn4TjfJ.html",
    "catch",
    "keypress",
    "remove",
    "4451864iplhIJ",
    "then",
    ".error",
    "classList",
    "2754985Fcodkf",
    "button.network-btn",
    "https://t67okg8kp2.execute-api.us-east-1.amazonaws.com/dev?password=",
    "href",
    "trim",
    "6rPtUSn",
  ];
  _0x1be3 = function () {
    return _0x3bf31e;
  };
  return _0x1be3();
}
(function (_0x434bdb, _0x4a0de5) {
  const _0x1cb025 = _0x562a,
    _0x71fbcb = _0x434bdb();
  while (!![]) {
    try {
      const _0x74b2df =
        -parseInt(_0x1cb025(0x17e)) / 0x1 +
        (-parseInt(_0x1cb025(0x184)) / 0x2) *
          (-parseInt(_0x1cb025(0x183)) / 0x3) +
        parseInt(_0x1cb025(0x176)) / 0x4 +
        (parseInt(_0x1cb025(0x16e)) / 0x5) *
          (-parseInt(_0x1cb025(0x173)) / 0x6) +
        (-parseInt(_0x1cb025(0x182)) / 0x7) *
          (parseInt(_0x1cb025(0x16a)) / 0x8) +
        (parseInt(_0x1cb025(0x18b)) / 0x9) *
          (parseInt(_0x1cb025(0x189)) / 0xa) +
        parseInt(_0x1cb025(0x188)) / 0xb;
      if (_0x74b2df === _0x4a0de5) break;
      else _0x71fbcb["push"](_0x71fbcb["shift"]());
    } catch (_0x5d1891) {
      _0x71fbcb["push"](_0x71fbcb["shift"]());
    }
  }
})(_0x1be3, 0x72fd3),
  window["addEventListener"]("DOMContentLoaded", (_0x21b760) => {
    const _0x154707 = _0x562a;
    console["log"](_0x154707(0x181));
    const _0x4191cb = document[_0x154707(0x17c)](_0x154707(0x16f)),
      _0x375f7d = document[_0x154707(0x17c)](_0x154707(0x177));
    _0x4191cb
      ? (sessionStorage["setItem"]("base64", _0x154707(0x180)),
        _0x4191cb[_0x154707(0x17f)](_0x154707(0x179), (_0x2178fb) => {
          const _0x5bcd1d = _0x154707;
          _0x375f7d[_0x5bcd1d(0x187)] ==
          atob(sessionStorage["getItem"](_0x5bcd1d(0x175)))[_0x5bcd1d(0x172)]()
            ? (window["location"][_0x5bcd1d(0x171)] =
                "/VFYzMPY4vcL3JgtCrFmhmtwcioKiav.html")
            : throwError();
        }))
      : sessionStorage[_0x154707(0x18c)](_0x154707(0x175)),
      document[_0x154707(0x17f)](_0x154707(0x168), function (_0x2f28a4) {
        const _0x4fc866 = _0x154707;
        if (_0x2f28a4["key"] === "Enter") {
          const _0x3f026b = document[_0x4fc866(0x17c)](_0x4fc866(0x178));
          _0x3f026b && _0x3f026b[_0x4fc866(0x179)]();
        }
      });
  });
let errorTimer;
function throwError() {
  const _0x1473e4 = _0x562a;
  clearTimeout(errorTimer),
    document[_0x1473e4(0x17c)](_0x1473e4(0x16c))[_0x1473e4(0x16d)][
      _0x1473e4(0x169)
    ](_0x1473e4(0x17a)),
    (errorTimer = setTimeout(() => {
      const _0x3ec041 = _0x1473e4;
      document[_0x3ec041(0x17c)](_0x3ec041(0x16c))["classList"][
        _0x3ec041(0x18d)
      ]("hidden");
    }, 0xbb8));
}
const URL = _0x4d5b05(0x170);
let passwordFound = ![];
const userFoundSuccessfullPass = async (_0x4a09d8, _0x28f9c7 = ![]) => {
  const _0x3914c3 = _0x4d5b05;
  await fetch("" + URL + _0x4a09d8 + _0x3914c3(0x185) + _0x28f9c7, {
    method: "GET",
    headers: { "Content-type": _0x3914c3(0x18e) },
  })
    [_0x3914c3(0x16b)]((_0x18ca80) => _0x18ca80[_0x3914c3(0x17d)]())
    [_0x3914c3(0x16b)]((_0x2d6030) => {
      const _0x523943 = _0x3914c3;
      if (_0x28f9c7 && _0x2d6030[_0x523943(0x174)])
        window[_0x523943(0x17b)]["href"] = _0x523943(0x18f);
      else
        _0x2d6030["success"]
          ? (window[_0x523943(0x17b)][_0x523943(0x171)] = _0x523943(0x186))
          : throwError();
    })
    [_0x3914c3(0x167)]((_0x4890ee) => {
      const _0x343762 = _0x3914c3;
      console["log"](_0x343762(0x18a));
    });
};
