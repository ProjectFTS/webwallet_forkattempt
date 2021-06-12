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
define(["require", "exports", "../lib/numbersLab/DestructableView", "../model/AppState"], function (require, exports, DestructableView_1, AppState_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SupportView = /** @class */ (function (_super) {
        __extends(SupportView, _super);
        function SupportView(container) {
            var _this = _super.call(this, container) || this;
            var self = _this;
            AppState_1.AppState.enableLeftMenu();
            return _this;
        }
        return SupportView;
    }(DestructableView_1.DestructableView));
    new SupportView('#app');
});
