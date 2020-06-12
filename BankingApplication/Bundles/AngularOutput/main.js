(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 0, vars: 0, template: function AppComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_show_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/show.directive */ "./src/app/shared/show.directive.ts");
/* harmony import */ var _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transaction/transaction.component */ "./src/app/components/transaction/transaction.component.ts");
/* harmony import */ var _components_credit_credit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/credit/credit.component */ "./src/app/components/credit/credit.component.ts");
/* harmony import */ var _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/proposal/proposal.component */ "./src/app/components/proposal/proposal.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _shared_profile_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/profile.directive */ "./src/app/shared/profile.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        _shared_show_directive__WEBPACK_IMPORTED_MODULE_7__["ShowDirective"],
        _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_8__["TransactionComponent"],
        _components_credit_credit_component__WEBPACK_IMPORTED_MODULE_9__["CreditComponent"],
        _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_10__["ProposalComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _shared_profile_directive__WEBPACK_IMPORTED_MODULE_12__["ProfileDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
                    _shared_show_directive__WEBPACK_IMPORTED_MODULE_7__["ShowDirective"],
                    _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_8__["TransactionComponent"],
                    _components_credit_credit_component__WEBPACK_IMPORTED_MODULE_9__["CreditComponent"],
                    _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_10__["ProposalComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _shared_profile_directive__WEBPACK_IMPORTED_MODULE_12__["ProfileDirective"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ],
                providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _components_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
    _shared_show_directive__WEBPACK_IMPORTED_MODULE_7__["ShowDirective"],
    _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_8__["TransactionComponent"],
    _components_credit_credit_component__WEBPACK_IMPORTED_MODULE_9__["CreditComponent"],
    _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_10__["ProposalComponent"],
    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
    _shared_profile_directive__WEBPACK_IMPORTED_MODULE_12__["ProfileDirective"]], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Account */ "./src/app/models/Account.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");





function AccountComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.newTrans(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nowa transakcja");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-transaction", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kind", ctx_r1.kind);
} }
function AccountComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r9.accountNumber, " ");
} }
function AccountComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showLimitEdit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zmie\u0144 limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_37_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.lim = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_37_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeLimit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zmie\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.lim);
} }
const _c0 = function (a0) { return { color: a0 }; };
function AccountComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transaction", t_r15)("id", ctx_r5.currentAccount.accountNumber)("kind", ctx_r5.kind[t_r15.operationKindId - 1] == null ? null : ctx_r5.kind[t_r15.operationKindId - 1].kind);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, t_r15.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.kind[t_r15.operationKindId - 1] == null ? null : ctx_r5.kind[t_r15.operationKindId - 1].kind, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r5.getColor(t_r15.direction)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 11, t_r15.amount, "1.2-2"), " PLN ");
} }
function AccountComponent_li_71_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_li_71_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const p_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.pagee(p_r16 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r16 + 1);
} }
class AccountComponent {
    constructor(service, document) {
        this.service = service;
        this.document = document;
        this.LOCAL = 'https://localhost:44305/HomeAngular/';
        this.kaczka = false;
        this.isHidden = true;
        this.showEditLimit = false;
        this.pageSize = 5;
        this.page = 1;
    }
    ngOnInit() {
        this.service.getAllAcounts().subscribe(data => {
            this.account = data;
            this.currentId = this.account[0].id;
            this.currentAccount = this.account[0];
            this.service.getTransaction(this.currentAccount.id).subscribe(data => {
                this.transaction = data;
                this.maxPage = Math.ceil(this.transaction.length / this.pageSize);
                this.numbers = Array(this.maxPage).fill(1).map((x, i) => i);
            });
        });
        this.service.getAllKinds().subscribe(data => {
            this.kind = data;
        });
        this.service.getProfile().subscribe(data => {
            this.profile = data;
        });
    }
    check(event) {
        for (let v in this.account) {
            if (this.account[v].id == event.target.value) {
                this.currentAccount = this.account[v];
                this.service.getTransaction(this.currentAccount.id).subscribe(data => {
                    this.transaction = data;
                });
            }
        }
    }
    getColor(direction) {
        return direction == 0 ? "#9C2542" : "#319177";
    }
    newTrans(arg) {
        this.kaczka = arg;
    }
    hid() {
        this.isHidden = !this.isHidden;
    }
    prev() {
        if (this.page > 1) {
            this.page--;
        }
    }
    next() {
        if (this.page < this.maxPage) {
            this.page++;
        }
        console.log(this.maxPage);
    }
    last() {
        this.page = this.maxPage;
    }
    first() {
        this.page = 1;
    }
    pagee(p) {
        this.page = p;
    }
    newAccount() {
        this.service.addAcount(new _models_Account__WEBPACK_IMPORTED_MODULE_1__["default"]()).subscribe(data => {
            console.log(data);
        });
    }
    changeLimit() {
        this.profile.limit = this.lim;
        this.service.updateProfile(this.profile).subscribe(data => {
            console.log(data);
        });
        this.showLimitEdit(false);
    }
    showLimitEdit(arg) {
        this.showEditLimit = arg;
    }
    search() {
        if (this.title != "") {
            this.transaction = this.transaction.filter(res => {
                return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
            });
            this.maxPage = Math.ceil(this.transaction.length / this.pageSize);
            this.numbers = Array(this.maxPage).fill(1).map((x, i) => i);
        }
        else if (this.title == "") {
            this.ngOnInit();
        }
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 100, vars: 24, consts: [[1, "bg"], ["id", "new", 1, "btn", "btn-background-slide", 3, "click"], ["id", "prof", 3, "hidden", "click"], [1, "glyphicon", "glyphicon-user"], [1, "btn", "btn-background-slide"], ["href", "Account/LogOff"], [1, "mx-auto", 2, "width", "60%"], ["id", "profile", 3, "hidden"], ["appProfile", "", 1, "profile", 3, "hidden"], ["class", "btn btn-background-slide", "type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "accounts", 1, "container"], ["name", "account", 1, "dropdown-toggle", "btn-lg", 3, "ngModel", "ngModelChange", "input"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "balance", 1, "float-lg-right"], ["class", "btn btn-background-slide", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Tytu\u0142", 3, "ngModel", "ngModelChange", "input"], [1, "table"], [1, "thead"], ["appShow", "", 3, "transaction", "id", "kind", 4, "ngFor", "ngForOf"], [1, "container"], [1, "pagination"], [3, "click"], ["href", "#"], [3, "click", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-background-slide", 3, "click"], [3, "kind"], [3, "value"], [1, "btn", "btn-background-slide", 3, "click"], ["placeholder", "Limit", "type", "number", 3, "ngModel", "ngModelChange"], ["appShow", "", 3, "transaction", "id", "kind"], [3, "ngStyle"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_1_listener() { return ctx.newAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Za\u0142\u00F3\u017C nowe konto bankowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_p_click_3_listener() { return ctx.hid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wyloguj si\u0119!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-profile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Brak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountComponent_button_14_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AccountComponent_p_16_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Konto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_Template_select_ngModelChange_23_listener($event) { return ctx.currentId = $event; })("input", function AccountComponent_Template_select_input_23_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountComponent_option_24_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Dost\u0119pne \u015Brodki:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Dzienny limit transakcji: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AccountComponent_button_36_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AccountComponent_div_37_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Szukaj po tytule:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_Template_input_ngModelChange_46_listener($event) { return ctx.title = $event; })("input", function AccountComponent_Template_input_input_46_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "RODZAJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "TYTU\u0141");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "KWOTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccountComponent_tr_59_Template, 11, 16, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_li_click_63_listener() { return ctx.first(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pierwsza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_li_click_67_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AccountComponent_li_71_Template, 4, 1, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_li_click_72_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_li_click_76_listener() { return ctx.last(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Ostatnia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "app-credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "brak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "app-proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "brak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Projekt z PZ 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Dybowski Dominik ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.kaczka);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kaczka);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 14, ctx.currentAccount == null ? null : ctx.currentAccount.balance, "1.2-2"), " PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 17, ctx.profile.limit - ctx.profile.currentLimit, "1.2-2"), " PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEditLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](60, 20, ctx.transaction, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
    } }, styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  -webkit-animation: gradient 15s ease infinite;\n          animation: gradient 15s ease infinite;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  width: 100%;\n  font-family: \"Roboto\";\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.bg[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n}\n\n.profile[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  width: 95%;\n  height: 800px;\n}\n\n#profile[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.glyphicon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.glyphicon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#new[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50px;\n  bottom: 0%;\n  top: 5%;\n  height: 30px;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: #222;\n  padding: 0.5em 1em;\n  border: none;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  --background-color: #E3E3E3;\n  --border-size: 2px;\n  --accent-color: #0AF;\n}\n\n.btn.btn-border-pop[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  border: var(--border-size) solid var(--background-color);\n  transition: top, left, right, bottom, 100ms ease-in-out;\n}\n\n.btn.btn-border-pop[_ngcontent-%COMP%]:hover::before, .btn.btn-border-pop[_ngcontent-%COMP%]:focus::before {\n  top: calc(var(--border-size) * -2);\n  left: calc(var(--border-size) * -2);\n  right: calc(var(--border-size) * -2);\n  bottom: calc(var(--border-size) * -2);\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  background-color: var(--accent-color);\n  transition: transform 300ms ease-in-out;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]:hover::before, .btn.btn-background-slide[_ngcontent-%COMP%]:focus::before {\n  transform: scaleX(1);\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%] {\n  transition: color 300ms ease-in-out;\n  z-index: 1;\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]:hover, .btn.btn-background-slide[_ngcontent-%COMP%]:focus {\n  color: white;\n}\n\napp-transaction[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\ntbody[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.thead[_ngcontent-%COMP%] {\n  background: #0bb5e2;\n  background: linear-gradient(90deg, #0bb5e2 0%, #0994c6 50%, #0787ac 100%);\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n#prof[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 200px;\n  bottom: 0%;\n  top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L0M6XFxVc2Vyc1xcZHlib3dcXHNvdXJjZVxccHJvamVjdFxcQmFua2luZ0FwcGxpY2F0aW9uXFxCYW5raW5nQXBwbGljYXRpb25cXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjY291bnRcXGFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUVBQUE7RUFDQSwwQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBRERBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0FDSUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQ0E7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsdURBQUE7QUNFRjs7QURDQTs7RUFFRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQ0VGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBOztFQUVFLG9CQUFBO0FDREY7O0FESUE7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7QUNERjs7QURLQTs7RUFFRSxZQUFBO0FDRkY7O0FESUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EseUVBQUE7QUNDRjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VlNzc1MiwgI2U3M2M3ZSwgIzIzYTZkNSwgIzIzZDVhYik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmJnIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuI3Byb2ZpbGUge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5nbHlwaGljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZ2x5cGhpY29uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbmV3IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogNTBweDtcclxuICBib3R0b206IDAlO1xyXG4gIHRvcDogNSU7XHJcbiAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xyXG4gIC0tYm9yZGVyLXNpemU6IDJweDtcclxuICAtLWFjY2VudC1jb2xvcjogIzBBRjtcclxufVxyXG5cclxuLmJ0bi5idG4tYm9yZGVyLXBvcDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUpIHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJvcmRlci1wb3A6aG92ZXI6OmJlZm9yZSxcclxuLmJ0bi5idG4tYm9yZGVyLXBvcDpmb2N1czo6YmVmb3JlIHtcclxuICB0b3A6IGNhbGModmFyKC0tYm9yZGVyLXNpemUpICogLTIpO1xyXG4gIGxlZnQ6IGNhbGModmFyKC0tYm9yZGVyLXNpemUpICogLTIpO1xyXG4gIHJpZ2h0OiBjYWxjKHZhcigtLWJvcmRlci1zaXplKSAqIC0yKTtcclxuICBib3R0b206IGNhbGModmFyKC0tYm9yZGVyLXNpemUpICogLTIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYnRuLmJ0bi1iYWNrZ3JvdW5kLXNsaWRlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3Zlcjo6YmVmb3JlLFxyXG4uYnRuLmJ0bi1iYWNrZ3JvdW5kLXNsaWRlOmZvY3VzOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1iYWNrZ3JvdW5kLXNsaWRlIHtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3ZlcixcclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpmb2N1cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmFwcC10cmFuc2FjdGlvbiB7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG50Ym9keSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRoZWFkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTEsMTgxLDIyNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExLDE4MSwyMjYsMSkgMCUsIHJnYmEoOSwxNDgsMTk4LDEpIDUwJSwgcmdiYSg3LDEzNSwxNzIsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcntcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgXHJcbn1cclxuI3Byb2Yge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDoyMDBweDtcclxuICBib3R0b206IDAlO1xyXG4gIHRvcDogNSU7XHJcbn1cclxuXHJcbiIsImJvZHksIGh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iZyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnByb2ZpbGUge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA4MDBweDtcbn1cblxuI3Byb2ZpbGUge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5nbHlwaGljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwcHg7XG4gIGJvdHRvbTogMCU7XG4gIHRvcDogNSU7XG4gIGhlaWdodDogMzBweDtcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XG4gIC0tYm9yZGVyLXNpemU6IDJweDtcbiAgLS1hY2NlbnQtY29sb3I6ICMwQUY7XG59XG5cbi5idG4uYnRuLWJvcmRlci1wb3A6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4uYnRuLWJvcmRlci1wb3A6aG92ZXI6OmJlZm9yZSxcbi5idG4uYnRuLWJvcmRlci1wb3A6Zm9jdXM6OmJlZm9yZSB7XG4gIHRvcDogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG4gIGxlZnQ6IGNhbGModmFyKC0tYm9yZGVyLXNpemUpICogLTIpO1xuICByaWdodDogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG4gIGJvdHRvbTogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG59XG5cbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3Zlcjo6YmVmb3JlLFxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpmb2N1czo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGUge1xuICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3Zlcixcbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6Zm9jdXMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmFwcC10cmFuc2FjdGlvbiB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxudGJvZHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRoZWFkIHtcbiAgYmFja2dyb3VuZDogIzBiYjVlMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMGJiNWUyIDAlLCAjMDk5NGM2IDUwJSwgIzA3ODdhYyAxMDAlKTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jcHJvZiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwMHB4O1xuICBib3R0b206IDAlO1xuICB0b3A6IDUlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/credit/credit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/credit/credit.component.ts ***!
  \*******************************************************/
/*! exports provided: CreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditComponent", function() { return CreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CreditComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, c_r1.startDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r1.years, " lat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, c_r1.loanAmount, "1.2-2"), " PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, c_r1.repaymentAmount, "1.2-2"), " PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getAccount(c_r1.accountId), " ");
} }
class CreditComponent {
    constructor(serv) {
        this.serv = serv;
    }
    ngOnInit() {
        this.serv.getAllCredits().subscribe(data => {
            this.credit = data;
        });
        this.serv.getAllAcounts().subscribe(data => {
            this.account = data;
        });
    }
    getAccount(id) {
        for (let v in this.account) {
            if (this.account[v].id == id) {
                return this.account[v].accountNumber;
            }
        }
    }
}
CreditComponent.ɵfac = function CreditComponent_Factory(t) { return new (t || CreditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
CreditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditComponent, selectors: [["app-credit"]], decls: 17, vars: 1, consts: [[1, "table"], [1, "thead"], [4, "ngFor", "ngForOf"]], template: function CreditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kredyty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DATA ZATWIERDZENIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Okres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "KWOTA KREDYTU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "KWOTA DO SP\u0141ATY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NUMER KONTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreditComponent_tr_16_Template, 14, 14, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.credit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["tbody[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.thead[_ngcontent-%COMP%] {\n  background: #0bb5e2;\n  background: linear-gradient(90deg, #0bb5e2 0%, #0994c6 50%, #0787ac 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVkaXQvQzpcXFVzZXJzXFxkeWJvd1xcc291cmNlXFxwcm9qZWN0XFxCYW5raW5nQXBwbGljYXRpb25cXEJhbmtpbmdBcHBsaWNhdGlvblxcQW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JlZGl0XFxjcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3JlZGl0L2NyZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHlFQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWRpdC9jcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0Ym9keSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aGVhZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDExLDE4MSwyMjYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMSwxODEsMjI2LDEpIDAlLCByZ2JhKDksMTQ4LDE5OCwxKSA1MCUsIHJnYmEoNywxMzUsMTcyLDEpIDEwMCUpO1xyXG59XHJcbiIsInRib2R5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICMwYmI1ZTI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBiYjVlMiAwJSwgIzA5OTRjNiA1MCUsICMwNzg3YWMgMTAwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-credit',
                templateUrl: './credit.component.html',
                styleUrls: ['./credit.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProfileComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/Photos/", ctx_r0.profile == null ? null : ctx_r0.profile.photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProfileComponent {
    constructor(serv, comp) {
        this.serv = serv;
        this.comp = comp;
    }
    ngOnInit() {
        this.serv.getProfile().subscribe(data => {
            this.profile = data;
        });
        this.serv.getAddress().subscribe(data => {
            this.address = data;
        });
    }
    hid() {
        this.comp.hid();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 53, vars: 13, consts: [["id", "main"], ["alt", "", "width", "100px", "height", "150px", 3, "src", 4, "ngIf"], [1, "float-lg-right"], ["type", "button", 1, "float-lg-right", 3, "click"], ["alt", "", "width", "100px", "height", "150px", 3, "src"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M\u00F3j profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_img_4_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID KLIENTA: \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IMI\u0118 I NAZWISKO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DATA URODZENIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kraj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wojew\u00F3dztwo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Miasto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ulica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_46_listener() { return ctx.hid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Numer domu/mieszkania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profile == null ? null : ctx.profile.photo) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profile == null ? null : ctx.profile.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.profile == null ? null : ctx.profile.name, " ", ctx.profile == null ? null : ctx.profile.surname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 10, ctx.profile == null ? null : ctx.profile.born, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address == null ? null : ctx.address.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address == null ? null : ctx.address.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address == null ? null : ctx.address.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address == null ? null : ctx.address.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address == null ? null : ctx.address.numberHouse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["#main[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  font-size: 20px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #555555;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcZHlib3dcXHNvdXJjZVxccHJvamVjdFxcQmFua2luZ0FwcGxpY2F0aW9uXFxCYW5raW5nQXBwbGljYXRpb25cXEFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTU1NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiI21haW4ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: _account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/proposal/proposal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/proposal/proposal.component.ts ***!
  \***********************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { color: a0 }; };
function ProposalComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r0.getColor(p_r3.status)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, p_r3.income, "1.2-2"), " PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.fatherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.motherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r3.motherMaidenName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 12, p_r3.loanAmount, "1.2-2"), " PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatus(p_r3.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getAccount(p_r3.accountId), " ");
} }
function ProposalComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProposalComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newTrans(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Z\u0142\u00F3\u017C wniosek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProposalComponent_div_24_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r10.accountNumber, " ");
} }
function ProposalComponent_div_24_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Imie Ojca jest wymagane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProposalComponent_div_24_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Imie Matki jest wymagane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProposalComponent_div_24_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nazwisko Panie\u0144skie Matki jest wymagane ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProposalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProposalComponent_div_24_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.newTrans(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wniosek o kredyt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProposalComponent_div_24_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Konto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProposalComponent_div_24_option_12_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProposalComponent_div_24_div_16_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProposalComponent_div_24_div_20_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProposalComponent_div_24_div_24_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wykonaj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["fatherName"].invalid && (ctx_r2.form.controls["fatherName"].dirty || ctx_r2.form.controls["fatherName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["motherName"].invalid && (ctx_r2.form.controls["motherName"].dirty || ctx_r2.form.controls["motherName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["motherMaidenName"].invalid && (ctx_r2.form.controls["motherMaidenName"].dirty || ctx_r2.form.controls["motherMaidenName"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form.valid);
} }
class ProposalComponent {
    constructor(serv) {
        this.serv = serv;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            income: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            motherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            motherMaidenName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            loanAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.serv.getAllProposals().subscribe(data => {
            this.proposal = data;
        });
        this.serv.getAllAcounts().subscribe(data => {
            this.account = data;
            this.form.controls['accountId'].setValue(this.account[0].id);
        });
    }
    getAccount(id) {
        for (let v in this.account) {
            if (this.account[v].id == id) {
                return this.account[v].accountNumber;
            }
        }
    }
    getStatus(id) {
        if (id == 0) {
            return 'Rozpatrzany';
        }
        else if (id == 1) {
            return 'Zaakceptowany';
        }
        else {
            return 'Odrzucony';
        }
    }
    getColor(id) {
        if (id == 0) {
            return '#C46210';
        }
        else if (id == 1) {
            return '#319177';
        }
        else {
            return '#9C2542';
        }
    }
    newTrans(arg) {
        this.kaczka = arg;
    }
    onSubmit() {
        this.prop = this.form.value;
        if (this.prop.loanAmount > 0 && this.prop.income > 0) {
            this.form.reset();
            this.serv.addProposal(this.prop).subscribe(data => {
                console.log(data);
            });
        }
    }
}
ProposalComponent.ɵfac = function ProposalComponent_Factory(t) { return new (t || ProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
ProposalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalComponent, selectors: [["app-proposal"]], decls: 25, vars: 3, consts: [[1, "table"], [1, "thead"], [3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "btn btn-background-slide", "type", "button", 3, "click", 4, "ngIf"], ["id", "proposal", 4, "ngIf"], [3, "ngStyle"], ["type", "button", 1, "btn", "btn-background-slide", 3, "click"], ["id", "proposal"], [1, "jumbotron"], [1, "float-lg-right"], [1, "glyphicon", "glyphicon-remove", 3, "click"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["id", "accounts", 1, "form-group", "row"], [1, "col-xs-3"], ["formControlName", "accountId", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "row"], [1, "col-xs-2"], ["placeholder", "Imie Ojca", "id", "fatherName", "type", "text", "formControlName", "fatherName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["placeholder", "Imie Matki", "required", "", "id", "motherName", "type", "text", "formControlName", "motherName", 1, "form-control"], ["placeholder", "Nazwisko Panie\u0144skie Matki", "required", "", "id", "motherMaidenName", "type", "text", "formControlName", "motherMaidenName", 1, "form-control"], ["placeholder", "Doch\u00F3d", "required", "", "min", "0", "id", "income", "type", "number", "formControlName", "income", 1, "form-control"], ["placeholder", "Kwota kredytu", "required", "", "min", "0", "id", "loanAmount", "type", "number", "formControlName", "loanAmount", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"], [1, "text-danger"]], template: function ProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wnioski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DOCH\u00D3D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IMIE OJCA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "IMIE MATKI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NAZWISKO PANIE\u0143SKIE MATKI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "KWOTA KREDYTU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NUMER KONTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProposalComponent_tr_22_Template, 19, 17, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProposalComponent_button_23_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProposalComponent_div_24_Template, 33, 6, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proposal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.kaczka);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kaczka);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".glyphicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: red;\n}\n\n.glyphicon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: #222;\n  padding: 0.5em 1em;\n  border: none;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  --background-color: #E3E3E3;\n  --border-size: 2px;\n  --accent-color: #0AF;\n}\n\n.btn.btn-border-pop[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  border: var(--border-size) solid var(--background-color);\n  transition: top, left, right, bottom, 100ms ease-in-out;\n}\n\n.btn.btn-border-pop[_ngcontent-%COMP%]:hover::before, .btn.btn-border-pop[_ngcontent-%COMP%]:focus::before {\n  top: calc(var(--border-size) * -2);\n  left: calc(var(--border-size) * -2);\n  right: calc(var(--border-size) * -2);\n  bottom: calc(var(--border-size) * -2);\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  background-color: var(--accent-color);\n  transition: transform 300ms ease-in-out;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]:hover::before, .btn.btn-background-slide[_ngcontent-%COMP%]:focus::before {\n  transform: scaleX(1);\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%] {\n  transition: color 300ms ease-in-out;\n  z-index: 1;\n}\n\n.btn.btn-background-slide[_ngcontent-%COMP%]:hover, .btn.btn-background-slide[_ngcontent-%COMP%]:focus {\n  color: white;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n}\n\n#proposal[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\ntbody[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.thead[_ngcontent-%COMP%] {\n  background: #0bb5e2;\n  background: linear-gradient(90deg, #0bb5e2 0%, #0994c6 50%, #0787ac 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9wb3NhbC9DOlxcVXNlcnNcXGR5Ym93XFxzb3VyY2VcXHByb2plY3RcXEJhbmtpbmdBcHBsaWNhdGlvblxcQmFua2luZ0FwcGxpY2F0aW9uXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9wb3NhbFxccHJvcG9zYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvcG9zYWwvcHJvcG9zYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsdURBQUE7QUNBRjs7QURHQTs7RUFFRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQ0FGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BOztFQUVFLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxtQ0FBQTtFQUNBLFVBQUE7QUNIRjs7QURPQTs7RUFFRSxZQUFBO0FDSkY7O0FEUUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNMRjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtFQUNBLHlFQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb3Bvc2FsL3Byb3Bvc2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5nbHlwaGljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBjb2xvcjogIzIyMjtcclxuICBwYWRkaW5nOiAuNWVtIDFlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcclxuICAtLWJvcmRlci1zaXplOiAycHg7XHJcbiAgLS1hY2NlbnQtY29sb3I6ICMwQUY7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJvcmRlci1wb3A6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKSBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIDEwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1ib3JkZXItcG9wOmhvdmVyOjpiZWZvcmUsXHJcbi5idG4uYnRuLWJvcmRlci1wb3A6Zm9jdXM6OmJlZm9yZSB7XHJcbiAgdG9wOiBjYWxjKHZhcigtLWJvcmRlci1zaXplKSAqIC0yKTtcclxuICBsZWZ0OiBjYWxjKHZhcigtLWJvcmRlci1zaXplKSAqIC0yKTtcclxuICByaWdodDogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XHJcbiAgYm90dG9tOiBjYWxjKHZhcigtLWJvcmRlci1zaXplKSAqIC0yKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbn1cclxuXHJcbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6aG92ZXI6OmJlZm9yZSxcclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpmb2N1czo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxufVxyXG5cclxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZSB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6aG92ZXIsXHJcbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6Zm9jdXMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4jcHJvcG9zYWwge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxudGJvZHkge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGhlYWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMSwxODEsMjI2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTEsMTgxLDIyNiwxKSAwJSwgcmdiYSg5LDE0OCwxOTgsMSkgNTAlLCByZ2JhKDcsMTM1LDE3MiwxKSAxMDAlKTtcclxufVxyXG4iLCIuZ2x5cGhpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ2x5cGhpY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XG4gIC0tYm9yZGVyLXNpemU6IDJweDtcbiAgLS1hY2NlbnQtY29sb3I6ICMwQUY7XG59XG5cbi5idG4uYnRuLWJvcmRlci1wb3A6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZSkgc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHRyYW5zaXRpb246IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgMTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idG4uYnRuLWJvcmRlci1wb3A6aG92ZXI6OmJlZm9yZSxcbi5idG4uYnRuLWJvcmRlci1wb3A6Zm9jdXM6OmJlZm9yZSB7XG4gIHRvcDogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG4gIGxlZnQ6IGNhbGModmFyKC0tYm9yZGVyLXNpemUpICogLTIpO1xuICByaWdodDogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG4gIGJvdHRvbTogY2FsYyh2YXIoLS1ib3JkZXItc2l6ZSkgKiAtMik7XG59XG5cbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3Zlcjo6YmVmb3JlLFxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpmb2N1czo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGUge1xuICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJ0bi5idG4tYmFja2dyb3VuZC1zbGlkZTpob3Zlcixcbi5idG4uYnRuLWJhY2tncm91bmQtc2xpZGU6Zm9jdXMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNjAlO1xufVxuXG4jcHJvcG9zYWwge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbnRib2R5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICMwYmI1ZTI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBiYjVlMiAwJSwgIzA5OTRjNiA1MCUsICMwNzg3YWMgMTAwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProposalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proposal',
                templateUrl: './proposal.component.html',
                styleUrls: ['./proposal.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/transaction/transaction.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/transaction/transaction.component.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Transaction */ "./src/app/models/Transaction.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function TransactionComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", k_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", k_r8.kind, " ");
} }
function TransactionComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r9.accountNumber, " ");
} }
function TransactionComponent_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Kredyt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_19_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, c_r11.startDate, "dd/MM/yyyy HH:mm"), " ");
} }
function TransactionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransactionComponent_div_19_option_3_Template, 3, 5, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.credit);
} }
function TransactionComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Numer konta musi mie\u0107 26 cyfr ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TransactionComponent_div_20_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSearchChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransactionComponent_div_20_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.controls["toAccountNumber"].invalid && (ctx_r4.form.controls["toAccountNumber"].dirty || ctx_r4.form.controls["toAccountNumber"].touched));
} }
function TransactionComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bank: ", ctx_r5.bank == null ? null : ctx_r5.bank.nazwa_banku, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Adres: ", ctx_r5.bank == null ? null : ctx_r5.bank.adres_banku, "");
} }
function TransactionComponent_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tytu\u0142 jest wymagany ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransactionComponent_div_25_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.form.controls["title"].invalid && (ctx_r6.form.controls["title"].dirty || ctx_r6.form.controls["title"].touched));
} }
function TransactionComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TransactionComponent {
    constructor(service, acc) {
        this.service = service;
        this.acc = acc;
        this.transaction = new _models_Transaction__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            accountId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            operationKindId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            toAccountNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            creditId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.service.getAllAcounts().subscribe(data => {
            this.account = data;
            this.form.controls['accountId'].setValue(this.account[0].id);
        });
        this.service.getAllCredits().subscribe(data => {
            this.credit = data;
            this.form.controls['creditId'].setValue(this.credit[0].id);
        });
        this.form.controls['operationKindId'].setValue(this.kind[0].id);
        this.currentId = 1;
        this.service.getProfile().subscribe(data => {
            this.profile = data;
        });
    }
    onSubmit() {
        this.transaction = this.form.value;
        if (this.currentId == 1) {
            this.transaction.direction = 0;
        }
        else if (this.currentId == 2) {
            this.transaction.direction = 1;
            this.transaction.toAccountNumber = '';
            this.transaction.title = "Wpłata na własny rachunek";
        }
        else if (this.currentId == 3) {
            this.transaction.direction = 0;
            this.transaction.toAccountNumber = '';
            this.transaction.title = "Wypłata z własnego rachunku";
        }
        else {
            this.transaction.direction = 0;
            this.transaction.toAccountNumber = '';
            this.transaction.title = "Spłata kredytu";
        }
        if (this.transaction.amount > (this.profile.limit - this.profile.currentLimit)) {
            this.error = 'Kwota transakcji przekracza dzienny limit transakcji!';
        }
        else if (this.transaction.amount > this.getAccount(this.transaction.accountId).balance) {
            this.error = 'Kwota transakcji przekracza środki na podanym koncie!';
        }
        else {
            this.form.reset();
            this.error = '';
            this.service.addTransaction(this.transaction).subscribe(data => {
                console.log(data);
            });
            this.exit(false);
        }
    }
    check(event) {
        for (let v in this.kind) {
            if (this.kind[v].id == event.target.value) {
                this.currentKind = this.kind[v];
                this.currentId = Number.parseInt(v) + 1;
                if (this.currentId == 1) {
                    this.form.get('toAccountNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    this.form.get('toAccountNumber').updateValueAndValidity();
                }
                else {
                    this.form.get('toAccountNumber').clearValidators();
                    this.form.get('toAccountNumber').updateValueAndValidity();
                }
                if (this.currentId != 1) {
                    this.form.get('title').clearValidators();
                    this.form.get('title').updateValueAndValidity();
                }
            }
        }
    }
    getAccount(id) {
        for (let v in this.account) {
            if (this.account[v].id == id) {
                return this.account[v];
            }
        }
    }
    onSearchChange(searchValue) {
        if (searchValue.length > 25) {
            this.service.getBank(searchValue).subscribe(data => {
                this.bank = data;
            });
        }
        else {
            this.bank = null;
        }
    }
    exit(arg) {
        this.acc.newTrans(arg);
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"])); };
TransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], inputs: { kind: "kind" }, decls: 31, vars: 11, consts: [[1, "jumbotron"], [1, "float-lg-right"], [1, "glyphicon", "glyphicon-remove", 3, "click"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["id", "kind", 1, "form-group", "row"], [1, "col-xs-2"], ["required", "", "formControlName", "operationKindId", 1, "form-control", 3, "input"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "accounts", 1, "form-group", "row"], [1, "col-xs-3"], ["formControlName", "accountId", 1, "form-control"], [4, "ngIf"], ["id", "credits", "class", "form-group row", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row"], ["required", "", "min", "0", "id", "amount", "type", "number", "formControlName", "amount", "placeholder", "Kwota trasakcji", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "value"], ["id", "credits", 1, "form-group", "row"], ["formControlName", "creditId", 1, "form-control"], ["minlength", "26", "maxlength", "26", "id", "toAccountNumber", "type", "text", "formControlName", "toAccountNumber", "placeholder", "Numer konta", 1, "form-control", 3, "input"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["required", "", "id", "title", "type", "text", "formControlName", "title", "placeholder", "Tytu\u0142", 1, "form-control"], ["placeholder", "Opis", "id", "description", "type", "text", "formControlName", "description", 1, "form-control"]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionComponent_Template_span_click_2_listener() { return ctx.exit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transakcja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransactionComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rodzaj transakcji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TransactionComponent_Template_select_input_10_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransactionComponent_option_11_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Konto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TransactionComponent_option_17_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TransactionComponent_label_18_Template, 2, 0, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TransactionComponent_div_19_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TransactionComponent_div_20_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TransactionComponent_div_21_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TransactionComponent_div_25_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TransactionComponent_div_26_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wykonaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentId == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentId == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentId == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bank != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentId == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentId == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".glyphicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: red;\n}\n\n.glyphicon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: #222;\n  padding: 0.5em 1em;\n  border: none;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  --background-color: #E3E3E3;\n  --border-size: 2px;\n  --accent-color: #0AF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbi9DOlxcVXNlcnNcXGR5Ym93XFxzb3VyY2VcXHByb2plY3RcXEJhbmtpbmdBcHBsaWNhdGlvblxcQmFua2luZ0FwcGxpY2F0aW9uXFxBbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmFuc2FjdGlvblxcdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5nbHlwaGljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgLS1ib3JkZXItc2l6ZTogMnB4O1xyXG4gIC0tYWNjZW50LWNvbG9yOiAjMEFGO1xyXG59XHJcbiIsIi5nbHlwaGljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5nbHlwaGljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5qdW1ib3Ryb24ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogNjAlO1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiAjMjIyO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcbiAgLS1ib3JkZXItc2l6ZTogMnB4O1xuICAtLWFjY2VudC1jb2xvcjogIzBBRjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction',
                templateUrl: './transaction.component.html',
                styleUrls: ['./transaction.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] }]; }, { kind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/models/Account.ts":
/*!***********************************!*\
  !*** ./src/app/models/Account.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
class Account {
}


/***/ }),

/***/ "./src/app/models/Transaction.ts":
/*!***************************************!*\
  !*** ./src/app/models/Transaction.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transaction; });
class Transaction {
}


/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MainService {
    constructor(http) {
        this.http = http;
        this.API = 'https://localhost:44305/api';
        this.ACCOUNT_ENDPOINT = `${this.API}/Accounts`;
        this.TRANSACTION_ENDPOINT = `${this.API}/Transactions`;
        this.KIND_ENDPOINT = `${this.API}/OperationKinds`;
        this.CREDIT_ENDPOINT = `${this.API}/Credits`;
        this.PROPOSAL_ENDPOINT = `${this.API}/Proposals`;
        this.PROFILE_ENDPOINT = `${this.API}/Profiles`;
        this.ADDRESS_ENDPOINT = `${this.API}/Addresses`;
        this.BANK_ENDPOINT = `https://jakitobank.pl/api/?numer=`;
    }
    getAllAcounts() {
        return this.http.get(this.ACCOUNT_ENDPOINT);
    }
    getTransaction(id) {
        return this.http.get(this.TRANSACTION_ENDPOINT + "/" + id);
    }
    getAllKinds() {
        return this.http.get(this.KIND_ENDPOINT);
    }
    addTransaction(trans) {
        return this.http.post(this.TRANSACTION_ENDPOINT, trans);
    }
    getAllCredits() {
        return this.http.get(this.CREDIT_ENDPOINT);
    }
    getAllProposals() {
        return this.http.get(this.PROPOSAL_ENDPOINT);
    }
    addProposal(prop) {
        return this.http.post(this.PROPOSAL_ENDPOINT, prop);
    }
    getProfile() {
        return this.http.get(this.PROFILE_ENDPOINT);
    }
    getAddress() {
        return this.http.get(this.ADDRESS_ENDPOINT);
    }
    addAcount(acc) {
        return this.http.post(this.ACCOUNT_ENDPOINT, acc);
    }
    getBank(num) {
        return this.http.get(this.BANK_ENDPOINT + num);
    }
    updateProfile(limit) {
        return this.http.put(this.PROFILE_ENDPOINT + "/" + limit.id, limit);
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/profile.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/profile.directive.ts ***!
  \*********************************************/
/*! exports provided: ProfileDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDirective", function() { return ProfileDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfileDirective {
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this.numberOfClicks = 0;
    }
}
ProfileDirective.ɵfac = function ProfileDirective_Factory(t) { return new (t || ProfileDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ProfileDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProfileDirective, selectors: [["", "appProfile", ""]], inputs: { isHidden: "isHidden" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appProfile]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { isHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/show.directive.ts":
/*!******************************************!*\
  !*** ./src/app/shared/show.directive.ts ***!
  \******************************************/
/*! exports provided: ShowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDirective", function() { return ShowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ShowDirective {
    constructor(el, render) {
        this.el = el;
        this.render = render;
        this.myDiv = this.render.createElement('div');
    }
    mouseEnter() {
        if (this.transaction.direction == 0) {
            this.myDiv.innerHTML = "<br><hr>Transakcja " + this.id + " ==>  " + this.transaction.toAccountNumber + "<br>Kwota transakcji: " + this.transaction.amount + " PLN<br>Rodzaj: " + this.kind +
                "<br><br>Data: " + this.transform(this.transaction.date) + "<br><br> Opis:<br>" + (this.transaction.description == null ? "Brak" : this.transaction.description) + "<br><br>ID transakcji: " + this.transaction.id;
        }
        else {
            this.myDiv.innerHTML = "<br><hr>Transakcja " + this.transaction.toAccountNumber + " ==>  " + this.id + "<br>Kwota transakcji: " + this.transaction.amount + " PLN<br>Rodzaj: " + this.kind +
                "<br><br>Data: " + this.transform(this.transaction.date) + "<br><br> Opis:<br>" + (this.transaction.description == null ? "Brak" : this.transaction.description) + "<br><br>ID transakcji: " + this.transaction.id;
        }
        this.render.setStyle(this.myDiv, 'color', 'white');
        this.render.insertBefore(this.el.nativeElement.parentElement, this.myDiv, this.el.nativeElement.nextSibling);
    }
    mouseLeave() {
        this.myDiv.innerHTML = '';
    }
    transform(value) {
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]("en-US");
        return datePipe.transform(value, 'dd/MM/yyyy hh:mm');
    }
}
ShowDirective.ɵfac = function ShowDirective_Factory(t) { return new (t || ShowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ShowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShowDirective, selectors: [["", "appShow", ""]], hostBindings: function ShowDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ShowDirective_mouseenter_HostBindingHandler() { return ctx.mouseEnter(); })("mouseleave", function ShowDirective_mouseleave_HostBindingHandler() { return ctx.mouseLeave(); });
    } }, inputs: { transaction: "transaction", id: "id", kind: "kind" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appShow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { transaction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], kind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], mouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dybow\source\project\BankingApplication\BankingApplication\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map