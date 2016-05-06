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
var core_1 = require('@angular/core');
var InViewport = (function () {
    function InViewport(_el) {
        this._el = _el;
        this.inViewport = new core_1.EventEmitter();
    }
    InViewport.prototype.ngOnInit = function () {
        this.isInViewport();
    };
    InViewport.prototype.onViewportResize = function (event) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.isInViewport();
        });
    };
    InViewport.prototype.onViewportScroll = function (event) {
        var _this = this;
        window.requestAnimationFrame(function () {
            _this.isInViewport();
        });
    };
    InViewport.prototype.isInViewport = function (partial, direction) {
        if (partial === void 0) { partial = true; }
        if (direction === void 0) { direction = 'both'; }
        var el = this._el.nativeElement;
        var elSize = (el.offsetWidth * el.offsetHeight);
        var rec = el.getBoundingClientRect();
        var vp = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        var tViz = rec.top >= 0 && rec.top < vp.height;
        var bViz = rec.bottom > 0 && rec.bottom <= vp.height;
        var lViz = rec.left >= 0 && rec.left < vp.width;
        var rViz = rec.right > 0 && rec.right <= vp.width;
        var vVisible = partial ? tViz || bViz : tViz && bViz;
        var hVisible = partial ? lViz || rViz : lViz && rViz;
        var event = {
            target: el,
            value: false
        };
        if (direction === 'both') {
            event['value'] = (elSize && vVisible && hVisible) ? true : false;
        }
        else if (direction === 'vertical') {
            event['value'] = (elSize && vVisible) ? true : false;
        }
        else if (direction === 'horizontal') {
            event['value'] = (elSize && hVisible) ? true : false;
        }
        this.inViewport.emit(event);
    };
    __decorate([
        core_1.Output('inViewport'), 
        __metadata('design:type', core_1.EventEmitter)
    ], InViewport.prototype, "inViewport", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], InViewport.prototype, "onViewportResize", null);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], InViewport.prototype, "onViewportScroll", null);
    InViewport = __decorate([
        core_1.Directive({
            selector: '[in-viewport]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InViewport);
    return InViewport;
}());
exports.InViewport = InViewport;
//# sourceMappingURL=in-viewport.directive.js.map
