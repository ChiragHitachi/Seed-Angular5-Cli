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
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.reply = new core_1.EventEmitter();
    }
    ChildComponent.prototype.ngOnChanges = function (changes) {
        if (changes['title']) {
            console.log(changes['title']['currentValue']);
            if (changes['title']['currentValue'] === 'What is the plan for today') {
                this.reply.emit('Nothing much');
            }
            else if (changes['title']['currentValue'] === 'How Are you') {
                this.reply.emit('Fine. thanks');
            }
        }
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChildComponent.prototype, "reply", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        templateUrl: './child.component.html'
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map