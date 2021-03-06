"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var enums_1 = require("../../models/enums");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginService, commonService, router) {
        var _this = this;
        this.loginService = loginService;
        this.commonService = commonService;
        this.router = router;
        var vm = this;
        vm.login = function () {
            if (!vm.userName || vm.userName.length === 0) {
            }
            else if (!vm.password || vm.password.length === 0) {
            }
            else {
                _this.loginService.login(_this.userName, _this.password).subscribe(function (result) {
                    if (result.status === enums_1.responseStatus.Success) {
                        _this.loginDetail = result.data;
                        _this.loginDetail.loggedinDate = new Date();
                        _this.loginDetail.isLoggedIn = true;
                        _this.commonService.LoginDetail = _this.loginDetail;
                        _this.router.navigateByUrl('/landing');
                    }
                    else {
                    }
                }, function (error) {
                });
            }
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html'
    }),
    __param(0, core_1.Inject('ILoginService')), __param(1, core_1.Inject('ICommonService')),
    __metadata("design:paramtypes", [Object, Object, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map