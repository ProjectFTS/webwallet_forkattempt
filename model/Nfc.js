/**
 *	   Copyright (c) 2018, Gnock
 *     Copyright (c) 2018-2020, ExploShot
 *     Copyright (c) 2018-2020, The Qwertycoin Project
 *     Copyright (c) 2018-2020, The Masari Project
 *     Copyright (c) 2014-2018, MyMonero.com
 *
 *     All rights reserved.
 *     Redistribution and use in source and binary forms, with or without modification,
 *     are permitted provided that the following conditions are met:
 *
 *     ==> Redistributions of source code must retain the above copyright notice,
 *         this list of conditions and the following disclaimer.
 *     ==> Redistributions in binary form must reproduce the above copyright notice,
 *         this list of conditions and the following disclaimer in the documentation
 *         and/or other materials provided with the distribution.
 *     ==> Neither the name of Qwertycoin nor the names of its contributors
 *         may be used to endorse or promote products derived from this software
 *          without specific prior written permission.
 *
 *     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *     "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *     LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *     A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 *     CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *     EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 *     PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *     PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 *     LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *     NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *     SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Nfc = /** @class */ (function () {
        function Nfc() {
            var _this = this;
            this._nativeNfc = false;
            this._nativeNfcListening = false;
            this._pendingNdef = null;
            this._pendingNdefPromiseResolve = null;
            this._pendingNdefPromiseReject = null;
            this._ndefCallbacks = [];
            if (window.nfc) {
                this._nativeNfc = true;
                window.nfc.addNdefListener(function (event) {
                    if (event.tag.ndefMessage && window.ndef && window.util) {
                        for (var _i = 0, _a = event.tag.ndefMessage; _i < _a.length; _i++) {
                            var record = _a[_i];
                            var ndef = _this.parseNdefMessage(record);
                            if (ndef !== null)
                                for (var _b = 0, _c = _this._ndefCallbacks; _b < _c.length; _b++) {
                                    var callback = _c[_b];
                                    callback(ndef);
                                }
                        }
                    }
                    if (_this._pendingNdef !== null) {
                        _this.writeNdefOnTag();
                    }
                }, function (data) {
                    _this._nativeNfcListening = true;
                }, function (error) {
                    if (error === 'NFC_DISABLED') {
                    }
                    else
                        alert(JSON.stringify(error));
                });
            }
        }
        Nfc.prototype.registerListener = function () {
        };
        Nfc.prototype.parseNdefMessage = function (record) {
            var payload = record.payload.slice();
            if (window.ndef && window.util)
                if (record.tnf === window.ndef.TNF_WELL_KNOWN) {
                    var langLength = payload.splice(0, 1)[0];
                    var lang = window.util.bytesToString(payload.splice(0, langLength));
                    var text = window.util.bytesToString(payload);
                    return {
                        text: {
                            lang: lang,
                            content: text
                        }
                    };
                }
            return null;
        };
        Object.defineProperty(Nfc.prototype, "has", {
            get: function () {
                return this._nativeNfc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Nfc.prototype, "writableNfc", {
            get: function () {
                //TODO return true on andorid only
                return this._nativeNfc ? true : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Nfc.prototype, "enabled", {
            get: function () {
                if (window.nfc) {
                    return new Promise(function (resolve, reject) {
                        if (window.nfc)
                            window.nfc.enabled(function () {
                                resolve();
                            }, function (error) {
                                alert(error + ' ' + window.nfc.NO_NFC);
                                // if(window.nfc && error === window.nfc).NO_NFC){
                                // 	reject(Nfc.ERROR_NO_NFC);
                                // }else
                                reject(Nfc.ERROR_NO_NFC);
                            });
                    });
                }
                return Promise.reject(Nfc.ERROR_NO_NFC);
            },
            enumerable: true,
            configurable: true
        });
        Nfc.prototype.listenNdef = function (callback) {
            this._ndefCallbacks.push(callback);
        };
        Nfc.prototype.removeNdef = function (callback) {
            for (var i = 0; i < this._ndefCallbacks.length; ++i) {
                if (this._ndefCallbacks[i] === callback) {
                    this._ndefCallbacks.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        Nfc.prototype.shareNdef = function (message) {
            return new Promise(function (resolve, reject) {
                if (window.nfc && window.ndef) {
                    if (message.lang === '')
                        message.lang = 'en';
                    var nativeNdef = window.ndef.textRecord(message.content, message.lang);
                    window.nfc.share([nativeNdef], function (data) {
                        alert('share ok:' + JSON.stringify(data));
                        resolve();
                    }, function (data) {
                        alert('share ko:' + JSON.stringify(data));
                        reject();
                    });
                }
                else
                    reject('not_supported');
            });
        };
        Nfc.prototype.unshareNdef = function () {
            if (window.nfc) {
                window.nfc.unshare(function () {
                }, function () {
                });
            }
        };
        Nfc.prototype.writeNdef = function (message) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this._pendingNdef = message;
                _this._pendingNdefPromiseResolve = resolve;
                _this._pendingNdefPromiseReject = reject;
            });
        };
        Nfc.prototype.cancelWriteNdef = function () {
            this._pendingNdef = null;
        };
        Nfc.prototype.writeNdefOnTag = function () {
            var _this = this;
            if (window.nfc && window.ndef && this._pendingNdef) {
                if (this._pendingNdef.lang === '')
                    this._pendingNdef.lang = 'en';
                var nativeNdef = window.ndef.textRecord(this._pendingNdef.content, this._pendingNdef.lang);
                window.nfc.write([nativeNdef], function (data) {
                    if (_this._pendingNdefPromiseResolve)
                        _this._pendingNdefPromiseResolve();
                }, function (data) {
                    var error = 'unknown';
                    if (data.indexOf('Tag capacity') !== -1)
                        error = 'tag_capacity';
                    if (_this._pendingNdefPromiseReject)
                        _this._pendingNdefPromiseReject(error);
                });
            }
            this._pendingNdef = null;
        };
        Nfc.ERROR_NO_NFC = 'no_nfc';
        return Nfc;
    }());
    exports.Nfc = Nfc;
});
