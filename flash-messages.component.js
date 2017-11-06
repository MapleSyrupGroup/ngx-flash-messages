import { Component } from '@angular/core';
import { FlashMessagesService, } from './flash-messages.service';
var FlashMessagesComponent = (function () {
    function FlashMessagesComponent(flashMessagesService) {
        this.flashMessagesService = flashMessagesService;
        this.messages = [];
    }
    FlashMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flashMessagesService.message.subscribe(function (message) {
            _this.handleMessage(message);
        });
    };
    FlashMessagesComponent.prototype.handleMessage = function (message) {
        var _this = this;
        var defaultOpts = {
            classes: [],
            timeout: 3000
        };
        Object.assign(defaultOpts, message.options);
        message.options = defaultOpts;
        var timestamp = message.timestamp = +new Date();
        this.messages.push(message);
        setTimeout(function () {
            _this.messages = _this.messages.filter(function (msg) { return msg.timestamp !== timestamp; });
        }, message.options.timeout);
    };
    return FlashMessagesComponent;
}());
export { FlashMessagesComponent };
FlashMessagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-flash-messages',
                template: "<div id=\"flashMessages\" class=\"flash-messages\"><div class=\"flash-message\" *ngFor=\"let message of messages\" [ngClass]=\"message.options.classes\"><p>{{ message.text }}</p></div></div>",
            },] },
];
/** @nocollapse */
FlashMessagesComponent.ctorParameters = function () { return [
    { type: FlashMessagesService, },
]; };
//# sourceMappingURL=flash-messages.component.js.map
