var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../model/AppState", "../lib/numbersLab/DestructableView"], function (require, exports, AppState_1, DestructableView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelfXSSPage = /** @class */ (function (_super) {
        __extends(SelfXSSPage, _super);
        function SelfXSSPage(container) {
            return _super.call(this, container) || this;
        }
        return SelfXSSPage;
    }(DestructableView_1.DestructableView));
    new SelfXSSPage('#app');
    AppState_1.AppState.enableLeftMenu();
});
