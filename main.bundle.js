webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /* Extra Small Devices, Phones */\r\n \r\n\r\n @media only screen and (min-width : 480px) {\r\n    .aroundStuff{\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n    }\r\n    main, .chatBottom{\r\n      width: 400px;\r\n    }\r\n  }\r\n\r\n  /* Small Devices, Tablets */\r\n  @media only screen and (min-width : 768px) {\r\n    .aroundStuff{\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n    }\r\n    main, .chatBottom{\r\n      width: 400px;\r\n    }\r\n\r\n\r\n  }\r\n\r\n  /* Medium Devices, Desktops */\r\n  @media only screen and (min-width : 992px) {\r\n    .aroundStuff{\r\n      background:whitesmoke;\r\n      height: 50vh;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n     }\r\n  }\r\n\r\n  /* Large Devices, Wide Screens */\r\n  @media only screen and (min-width : 1200px) {\r\n \r\n  }\r\n\r\n  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav>\r\n        <div class=\"nav-wrapper light-blue\">\r\n            <a href=\"/\" class=\"brand-logo center  \" >\r\n             {{today | date:'fullDate'}}\r\n            </a>\r\n        </div>\r\n    </nav>\r\n   \r\n    <p-tabView  >\r\n        <p-tabPanel header=\"Home\">\r\n            <app-home></app-home>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Products\">\r\n            <app-Products></app-Products>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Table\">\r\n            <app-tabla></app-tabla>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Add products\">\r\n             <app-add-Product></app-add-Product>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Edit products\">\r\n            <app-lista></app-lista>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Chat\">\r\n            <app-chat></app-chat>\r\n        </p-tabPanel>\r\n    </p-tabView>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'app';
        this.today = Date.now();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Products_Products_component__ = __webpack_require__("../../../../../src/app/components/Products/Products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cities_service__ = __webpack_require__("../../../../../src/app/services/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_add_Product_add_Product_component__ = __webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_autocomplete__ = __webpack_require__("../../../../primeng/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_checkbox__ = __webpack_require__("../../../../primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_datatable__ = __webpack_require__("../../../../primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_carousel__ = __webpack_require__("../../../../primeng/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_datalist__ = __webpack_require__("../../../../primeng/datalist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_datalist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_datalist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dataview__ = __webpack_require__("../../../../primeng/dataview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_dataview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_dataview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_tabview__ = __webpack_require__("../../../../primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_fileupload__ = __webpack_require__("../../../../primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_picklist__ = __webpack_require__("../../../../primeng/picklist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_picklist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_picklist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_orderlist__ = __webpack_require__("../../../../primeng/orderlist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_orderlist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_orderlist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_menubar__ = __webpack_require__("../../../../primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_dialog__ = __webpack_require__("../../../../primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_tabmenu__ = __webpack_require__("../../../../primeng/tabmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_tabmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_tabmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_slider__ = __webpack_require__("../../../../primeng/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_lista_lista_component__ = __webpack_require__("../../../../../src/app/components/lista/lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_tabla_tabla_component__ = __webpack_require__("../../../../../src/app/components/tabla/tabla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_distance_distance_component__ = __webpack_require__("../../../../../src/app/components/distance/distance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_cities_cities_component__ = __webpack_require__("../../../../../src/app/components/cities/cities.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var appRoutes = [
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_7__components_Products_Products_component__["a" /* ProductsComponent */] },
    { path: 'addProduct', component: __WEBPACK_IMPORTED_MODULE_10__components_add_Product_add_Product_component__["a" /* AddProductComponent */] },
    { path: 'lista', component: __WEBPACK_IMPORTED_MODULE_27__components_lista_lista_component__["a" /* ListaComponent */] },
    { path: 'tabla', component: __WEBPACK_IMPORTED_MODULE_28__components_tabla_tabla_component__["a" /* TablaComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_32__components_chat_chat_component__["a" /* ChatComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_Products_Products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_add_Product_add_Product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_lista_lista_component__["a" /* ListaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_tabla_tabla_component__["a" /* TablaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_distance_distance_component__["a" /* DistanceComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_cities_cities_component__["a" /* CitiesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_12_primeng_autocomplete__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_carousel__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_datalist__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_dataview__["DataViewModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_picklist__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_orderlist__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_24_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_36__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_35_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_25_primeng_tabmenu__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_slider__["SliderModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_Product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_34__services_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_9__services_cities_service__["a" /* CitiesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".derecha{\r\n    \r\n    padding-top: 40px;\r\n    padding-right: 30px;\r\n    padding-bottom: 30px;\r\n    padding-left: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Products?.length > 0;else noProducts\">\r\n   \r\n    <p-dataList [value]=\"Products\" [paginator]=\"true\" [rows]=\"1\" paginatorPosition=\"both\"  >\r\n\r\n        <p-header>\r\n            List of Products\r\n        </p-header>\r\n        <ul *ngFor=\"let Product of Products\" class=\"collection\">\r\n        <ng-template let-product pTemplate=\"item\">\r\n            <div class=\"ui-g ui-fluid product-item\">\r\n                <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">  \r\n                <div class=\"ui-g-12 ui-md-9 product-details\">\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-2 ui-sm-6\">Name: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.name}}</div>\r\n                        \r\n                        <div class=\"ui-g-2 ui-sm-6\">Place: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.place}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Contact name: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.cname}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Conatct phone: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.cphone}}</div>\r\n \r\n                        <div class=\"ui-g-2 ui-sm-6\">Conatct want: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.need}}</div>\r\n\r\n                        <div class=\"ui-g-2 ui-sm-6\">Published: </div>\r\n                        <div class=\"ui-g-10 ui-sm-6\">{{product.date}}</div>\r\n                        \r\n                    </div>\r\n                </div>\r\n              <!--  <div class=\"derecha\">\r\n                    <i (click)=\"deleteProduct($event, Product)\" class=\"fa fa-trash fa-2x\"  ></i>\r\n                    </div>-->\r\n            </div>\r\n        </ng-template>\r\n      </ul>  \r\n    </p-dataList>\r\n  </div>\r\n  \r\n  \r\n  <ng-template #noProducts>\r\n      <h5>There is not Products yet.</h5>\r\n    </ng-template>\r\n\r\n   <!--\r\n      <p>Today is {{today | date}}</p>\r\n      <p>Or if you prefer, {{today | date:'fullDate'}}</p>\r\n      <p>The time is {{today | date:'jmZ'}}</p>\r\n      <p>Finally the date and time is {{today | date:'short'}}</p>\r\n   \r\n   \r\n  <ul *ngFor=\"let Product of Products\" class=\"collection\">\r\n    <li class=\"collection-item\" (dblclick)=\"deleteProduct($event, Product)\">\r\n      <strong>{{ Product.name }}</strong> : {{ Product.place }} \r\n      <a href=\"#\" class=\"secondary-content\">\r\n        <i (click)=\"deleteProduct($event, Product)\" class=\"fa fa-trash\"></i>\r\n        <i (click)=\"editProduct($event, Product)\" class=\"fa fa-pencil\"></i>\r\n      </a>\r\n      <div *ngIf=\"editState && ProductToEdit.id === Product.id\">\r\n        <form (ngSubmit)=\"updateProduct(Product)\">\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s6\">\r\n              <input \r\n                type=\"text\" name=\"name\"\r\n                placeholder=\"Edit name\" [(ngModel)]=\"Product.name\">\r\n            </div>\r\n            <div class=\"input-field col s6\">\r\n                <input \r\n                  type=\"text\" name=\"place\"\r\n                  placeholder=\"Edit place\" [(ngModel)]=\"Product.place\">\r\n            </div>\r\n            <input type=\"submit\" class=\"btn\" value=\"Update Product\">\r\n            <button class=\"btn red\" (click)=\"deleteProduct($event, Product)\">Delete Product</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n\r\n  <p-orderList [value]=\"Products\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"Products\" \r\n  filter=\"filter\" filterBy=\"name\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\" dragdropScope=\"Products\">\r\n  <ng-template let-product pTemplate=\"item\">\r\n      <div class=\"ui-helper-clearfix\" (dblclick)=\"deleteProduct($event, Product)\">\r\n          <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">\r\n          <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{ product.name }} {{ product.place }}  </div>\r\n      </div>\r\n  </ng-template>\r\n</p-orderList>-->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/Products/Products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(ProductService) {
        this.ProductService = ProductService;
        this.editState = false;
        this.today = Date.now();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
        });
    };
    ProductsComponent.prototype.deleteProduct = function (event, Product) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.ProductService.deleteProduct(Product);
            location.reload();
        }
        return;
    };
    ProductsComponent.prototype.editProduct = function (event, Product) {
        this.editState = !this.editState;
        this.ProductToEdit = Product;
    };
    ProductsComponent.prototype.updateProduct = function (Product) {
        this.ProductService.updateProduct(Product);
        this.ProductToEdit = null;
        this.editState = false;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-Products',
            template: __webpack_require__("../../../../../src/app/components/Products/Products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/Products/Products.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-content\">\r\n    <span class=\"card-name\">Add Product</span>\r\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col-s6\">\r\n          <input type=\"text\" placeholder=\"Add name (Required)\" [(ngModel)]=\"Product.name\" name=\"name\" required >\r\n          \r\n        </div>\r\n      \r\n        <div class=\"input-field col-s6\">\r\n          <app-cities></app-cities>\r\n        </div>\r\n\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"Add Contact name (Required)\" [(ngModel)]=\"Product.cname\" name=\"contactName\" required >\r\n           \r\n         </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"Add Phone (Required)\" [(ngModel)]=\"Product.cphone\" name=\"phone\" required >\r\n            \r\n        </div>\r\n        <div class=\"input-field col-s6\">\r\n            <input type=\"text\" placeholder=\"What do you want (Required)?\" [(ngModel)]=\"Product.need\" name=\"need\" required >\r\n           \r\n        </div>\r\n        <div >\r\n            <input type=\"date\" placeholder=\"Publish day required\" [(ngModel)]=\"Product.date\" format=\"dd/MM/yyyy\" name=\"published\" min=\"today\" required >\r\n            <br> <label>(Required)</label>\r\n           \r\n        </div>\r\n\r\n      \r\n      </div>\r\n        <input type=\"submit\"  class=\"btn light-blue\">\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/add-Product/add-Product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cities_cities_component__ = __webpack_require__("../../../../../src/app/components/cities/cities.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProductComponent = (function () {
    function AddProductComponent(ProductService) {
        this.ProductService = ProductService;
        this.Product = {
            name: '',
            place: '',
            cname: '',
            cphone: '',
            need: '',
            date: '',
        };
        this.today = Date.now();
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onSubmit = function () {
        if (this.Product.name != ''
            && this.city.city != ''
            && this.Product.cname != ''
            && this.Product.cphone != ''
            && this.Product.need != ''
            && this.Product.date != '') {
            this.Product.place = this.city.city.name;
            this.ProductService.addProduct(this.Product);
            this.Product.name = '';
            this.Product.place = '';
            this.Product.cname = '';
            this.Product.cphone = '';
            this.Product.need = '';
            this.Product.date = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__cities_cities_component__["a" /* CitiesComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cities_cities_component__["a" /* CitiesComponent */])
    ], AddProductComponent.prototype, "city", void 0);
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-Product',
            template: __webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-Product/add-Product.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nfont-family: 'Josefin Slab', serif;\r\nfont-family: 'Raleway', sans-serif;\r\n\r\nCustom, iPhone Retina\r\n\r\n\r\n*/\r\n\r\n\r\n.loader,\r\n.loader:after {\r\n  border-radius: 50%;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n.loader {\r\n  margin: 60px auto;\r\n  font-size: 10px;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  border-top: 1.1em solid rgba(206, 159, 252, 0.2);\r\n  border-right: 1.1em solid rgba(206, 159, 252, 0.2);\r\n  border-bottom: 1.1em solid rgba(206, 159, 252, 0.2);\r\n  border-left: 1.1em solid #F761A1;\r\n  transform: translateZ(0);\r\n  animation: load8 1.1s infinite linear;\r\n}\r\n@keyframes load8 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n.loading{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background: #f5f5f5;\r\n  z-index: 100;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  font-family: 'Josefin Slab', serif;\r\n}\r\n    @media only screen and (min-width : 320px) {\r\n      .aroundStuff{\r\n        background: #C9D6DF;\r\n        height: 110vh;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n       \r\n      }\r\n\r\n      main{\r\n        \r\n        width: 100vw;\r\n        height: 95vh;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n        background: #f5f5f5;\r\n        position: relative;\r\n        max-height: 700px;\r\n        \r\n      }\r\n\r\n      .chatHead{\r\n        width: 100%;\r\n        background: white;\r\n        height: 50px;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        font-family: 'Josefin Slab', serif;\r\n        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);\r\n      \r\n      }\r\n\r\n      .messages{\r\n        height: calc(100vh - 50px);\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n        top:0px; \r\n        overflow-y: auto;\r\n      }\r\n      #placeholder{\r\n        height: 100px;\r\n        \r\n      }\r\n\r\n      .each-message{\r\n        max-width: 80%;\r\n        background-image: linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%);\r\n        color: #f8f8f8;\r\n        font-family: 'Raleway', sans-serif;\r\n        border-radius: 20px 20px 20px 0px;\r\n        padding: 10px 5px 10px 5px;\r\n        margin-top: 10px;\r\n      }\r\n\r\n      .each-message span{\r\n        font-size: 12px;\r\n        color: #F9F7F7;\r\n        margin-left: 2px;\r\n      }\r\n\r\n      .yourMessage{\r\n        background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);\r\n        margin-left: 20%;\r\n        border-radius: 20px 20px 0px 20px;\r\n      }\r\n\r\n      .chatBottom{\r\n        width: 100%;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        height: 50px;\r\n        background: white;\r\n        position: absolute;\r\n        bottom: 0;\r\n        box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.2);\r\n      }\r\n\r\n      form{\r\n        width: 100%;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n\r\n      }\r\n      form input{\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n        width: 100%;\r\n        font-size: 18px;\r\n        padding-left: 5%;\r\n        overflow: scroll;\r\n      }\r\n\r\n      form input:focus{\r\n        outline-color: transparent;\r\n        outline-style: none;\r\n      }\r\n\r\n      form button{\r\n        font-size: 20px;\r\n        background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);\r\n        color: #f8f8f8;\r\n        border: 0px;\r\n        border-radius: 50px;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n        padding: 8px;\r\n        margin-right: 5px;\r\n      }\r\n\r\n      .nameh1{\r\n        font-family: 'Josefin Slab', serif;\r\n        text-align: center;\r\n        margin-top: 50px;\r\n      }\r\n\r\n      .signupForm{\r\n        width: 100%;\r\n        height: 60%;\r\n        padding-left: 5%;\r\n        padding-right: 5%;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n      }\r\n\r\n      .signupForm input{\r\n        width: 100%;\r\n        border-bottom: 1px solid black;\r\n        border-top: 0px;\r\n        border-left: 0px;\r\n        border-right: 0px;\r\n        text-align: center;\r\n      }\r\n\r\n      .signupForm button{\r\n        font-size: 17px;\r\n        width: 50%;\r\n        margin-top: 20px;\r\n      }\r\n\r\n      .spons{\r\n        font-family: 'Raleway', sans-serif;\r\n        margin-bottom: 30px;\r\n      }\r\n    }\r\n\r\n    \r\n    /* Extra Small Devices, Phones */\r\n    @media only screen and (min-width : 480px) {\r\n      .aroundStuff{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n      }\r\n      main, .chatBottom{\r\n        width: 400px;\r\n      }\r\n    }\r\n\r\n    /* Small Devices, Tablets */\r\n    @media only screen and (min-width : 768px) {\r\n      .aroundStuff{\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n      }\r\n      main, .chatBottom{\r\n        width: 400px;\r\n      }\r\n\r\n\r\n    }\r\n\r\n    /* Medium Devices, Desktops */\r\n    @media only screen and (min-width : 992px) {\r\n\r\n    }\r\n\r\n    /* Large Devices, Wide Screens */\r\n    @media only screen and (min-width : 1200px) {\r\n\r\n    }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aroundStuff\">\r\n  <p class=\"spons\">Chat </p>\r\n  <main *ngIf=\"user\">\r\n    <section class=\"chatHead\">\r\n      <h1>{{user.displayName}}</h1>\r\n    </section>\r\n    <section class=\"messages\" id=\"messageDiv\">\r\n      <div *ngFor=\"let message of messages | async\">\r\n        <div *ngIf=\"yourMessage(message)\" class=\"each-message yourMessage\">\r\n          <span>{{message.name}}</span>\r\n          <p>{{message.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"!yourMessage(message)\" class=\"each-message\">\r\n          <span>{{message.name}}</span>\r\n          <p>{{message.message}}</p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"\" id=\"placeholder\">\r\n      </div>\r\n    </section>\r\n    <section class=\"chatBottom\">\r\n      <form class=\"\" action=\"\" method=\"\" (ngSubmit)=\"onSubmitMessage($event)\">\r\n        <input type=\"text\" name=\"chatMessage\" value=\"\" placeholder=\"Message\" [(ngModel)]=\"message\">\r\n        <button type=\"submit\" name=\"button\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\r\n      </form>\r\n    </section>\r\n    <div class=\"test\">\r\n\r\n    </div>\r\n  </main>\r\n\r\n  <main *ngIf=\"!user\">\r\n    <h1 class=\"nameh1\">Your name</h1>\r\n    <form class=\"signupForm\" action=\"\" method=\"\" (ngSubmit)=\"onSubmit($event)\">\r\n      <input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Name\" [(ngModel)]=\"name\">\r\n      <button type=\"submit\" name=\"button\">Lets Chat</button>\r\n    </form>\r\n  </main>\r\n</div>\r\n\r\n<div class=\"loading\" *ngIf=\"!ready\">\r\n  <div class=\"loader\">Loading...</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(auth, db) {
        var _this = this;
        this.auth = auth;
        this.db = db;
        this.ready = false;
        auth.user.subscribe(function (s) {
            _this.user = s;
            if (_this.user) {
                _this.messages = db.messages;
                db.messages.subscribe(function (s) {
                    var div = document.getElementById('messageDiv');
                    div.scrollTop = div.scrollHeight + 10000;
                });
                _this.div_show();
            }
            else {
                _this.ready = true;
            }
        });
    }
    /*@HostListener('window:unload', ['$event'])
    unloadHandler(event) {
      this.auth.logout();
    }*/
    ChatComponent.prototype.div_show = function () {
        var that = this;
        setTimeout(function () {
            that.ready = true;
            var div = document.getElementById('messageDiv');
            div.scrollTop = div.scrollHeight + 10000;
        }, 2000);
    };
    ChatComponent.prototype.change = function () {
        this.ready = true;
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
    };
    ChatComponent.prototype.onSubmit = function (e) {
        if (this.name != undefined) {
            this.auth.login(this.name);
        }
    };
    ChatComponent.prototype.onSubmitMessage = function (e) {
        if (this.message != undefined) {
            if (this.message.length > 0) {
                this.db.pushData(this.user.uid, this.user.displayName, this.message);
                this.message = '';
            }
        }
    };
    ChatComponent.prototype.yourMessage = function (message) {
        if (this.user.uid == message.uid) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatComponent.prototype.getName = function (uid) {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_db_service__["a" /* DbService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cities/cities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cities/cities.component.html":
/***/ (function(module, exports) {

module.exports = "<p-autoComplete [(ngModel)]=\"city\" [suggestions]=\"filteredCities\"\n  (completeMethod)=\"filterCities($event)\" field=\"name\"\n  placeholder=\"Add city (required)\" [dropdown]=\"true\" [forceSelection]=\"true\">\n</p-autoComplete>"

/***/ }),

/***/ "../../../../../src/app/components/cities/cities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cities_service__ = __webpack_require__("../../../../../src/app/services/cities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var H = window['H'];
var CitiesComponent = (function () {
    function CitiesComponent(CitiesService) {
        this.CitiesService = CitiesService;
        this.platform = new H.service.Platform({
            'app_id': 'TvLRh302Uii5r4PkDhqL',
            'app_code': '-1IQ506Zwd4DnuzLwLWYTw',
            'useHTTPS': true
        });
    }
    CitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cities = this.CitiesService.getCities();
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                _this.getLocalCity(latitude, longitude);
            });
        }
        ;
    };
    CitiesComponent.prototype.getLocalCity = function (latitude, longitude) {
        var reverseGeocodingParameters = {
            prox: latitude + ',' + longitude + ',0',
            mode: 'retrieveAddresses',
            maxresults: 1,
            gen: 9,
            language: 'eng',
            locationattributes: 'none,ar',
            responseattributes: 'none',
            addressattributes: 'none,city,county'
        };
        function onSuccess(result) {
            var location = result.Response.View[0].Result[0];
            var curCity = location.Location.Address.City;
            var curCounty = location.Location.Address.County;
            var localCity = this.filterCityName(curCity);
            if (localCity == undefined) {
                localCity = this.filterCityName(curCounty);
            }
            if (localCity != '')
                this.city = localCity;
        }
        ;
        var geocoder = this.platform.getGeocodingService();
        geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess.bind(this), function (e) { });
    };
    CitiesComponent.prototype.filterCities = function (event) {
        var query = event.query;
        this.filteredCities = this.filterCity(query, this.cities);
    };
    CitiesComponent.prototype.filterCity = function (query, cities) {
        var filtered = [];
        for (var i = 0; i < cities.length; i++) {
            var city = cities[i];
            if (city.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(city);
            }
        }
        return filtered;
    };
    CitiesComponent.prototype.filterCityName = function (byName) {
        for (var i = 0; i < this.cities.length; i++) {
            var foundCity = this.cities[i];
            if (foundCity.name.toLowerCase().indexOf(byName.toLowerCase()) == 0) {
                return foundCity;
            }
        }
    };
    CitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cities',
            template: __webpack_require__("../../../../../src/app/components/cities/cities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cities/cities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cities_service__["a" /* CitiesService */]])
    ], CitiesComponent);
    return CitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/distance/distance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/distance/distance.component.html":
/***/ (function(module, exports) {

module.exports = "<p-checkbox label=\"Search by max distance: {{distance}} km\" [(ngModel)]=\"filter\"\nbinary=\"true\" (onChange)=\"onCheckboxChange($event)\" [disabled]=\"disableFilter\"></p-checkbox>\n<p-slider [disabled]=\"disableSlider\" [(ngModel)]=\"distance\" [max]=\"100\" [style]=\"{'width':'50%'}\"\n(onSlideEnd)=\"handleSliderChange($event)\" (onChange)=\"handleSliderChange($event)\"></p-slider>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/distance/distance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DistanceComponent = (function () {
    function DistanceComponent() {
        this.onDistanceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stopFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filter = false;
        this.disableFilter = true;
        this.disableSlider = true;
        this.distance = 100;
    }
    DistanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                _this.disableFilter = false;
            });
        }
    };
    DistanceComponent.prototype.onCheckboxChange = function (e) {
        this.disableSlider = !e;
        this.filter = e;
        if (e == true)
            this.onDistanceChange.emit(this.distance);
        else
            this.stopFilter.emit();
    };
    DistanceComponent.prototype.handleSliderChange = function (e) {
        this.onDistanceChange.emit(this.distance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DistanceComponent.prototype, "onDistanceChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DistanceComponent.prototype, "stopFilter", void 0);
    DistanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distance',
            template: __webpack_require__("../../../../../src/app/components/distance/distance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/distance/distance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DistanceComponent);
    return DistanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>Israel Mezan</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\r\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\r\n.fa-anchor,.fa-coffee {font-size:200px}\r\n</style>\r\n<body>\r\n\r\n\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-light-blue w3-center \" style=\"padding:10px 8px\" >\r\n  <h3 class=\"w3-margin w3-jumbo\">Bartering</h3>\r\n  <p class=\"w3-xlarge\"></p>\r\n</header>\r\n\r\n<!-- First Grid\r\n<div class=\"w3-row-padding w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-twothird\">\r\n      <h1>History of barter</h1>\r\n      <p class=\"w3-text-grey\">The history of bartering dates all the way back to 6000 BC. Introduced by Mesopotamia tribes, bartering was adopted by Phoenicians. Phoenicians bartered goods to those located in various other cities across oceans. Babylonian's also developed an improved bartering system. Goods were exchanged for food, tea, weapons, and spices. At times, human skulls were used as well. Salt was another popular item exchanged. Salt was so valuable that Roman soldiers' salaries were paid with it. In the Middle Ages, Europeans traveled around the globe to barter crafts and furs in exchange for silks and perfumes. Colonial Americans exchanged musket balls, deer skins, and wheat. When money was invented, bartering did not end, it become more organized.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"w3-third w3-center\">\r\n        <img src=\"assets/barter2.jpg \" >   \r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- Second Grid -->\r\n<div class=\"w3-row-padding w3-light-grey w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-third w3-center\">\r\n        <img src=\"assets/barter3.jpg \" width=\"50%\" height=\"50%\" >  \r\n    </div>\r\n\r\n    <div class=\"w3-twothird\">\r\n      <h1>Why barter?</h1>\r\n      <h5 class=\"w3-padding-32\"></h5>\r\n\r\n      <p class=\"w3-text-grey\">You’re not spending money.<br><br>\r\n          When you barter, you don’t have to use any of your actual profits as pay. Exchange any excess products or time you may have for other goods and services. You are going to need your cash when the business is having a lull, something that happens to every business, so save the pay. Exchange your goods and services for other goods and services; once you begin working with the trading system, you’ll never have to wonder why barter is a good idea.<br><br>\r\n          There is flexibility in bartering<br><br>\r\n          Related products can be traded such as portable tablets in exchange for laptops. Or, items that are completely different can be traded such as lawn mowers for televisions. Homes can now be exchanged when people are traveling, which can save both parties money. For instance, if your parents have friends in another state and they need somewhere to stay while on a family vacation, their friends may trade their home for a week or so in exchange for your parents allowing them to use your home.<br><br>\r\n          Exchange service for a product<br><br>\r\n          If your friend has a skateboard that you want and their bicycle needs work, if you are good at fixing things, you can offer to fix their bike in exchange for the skateboard. With bartering two parties can get something they want or need from each other without having to spend any money.\r\n\r\n         </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"w3-container w3-black w3-center w3-opacity \" style=\"padding:10px 8px\">\r\n    <h1 class=\"w3-margin w3-xlarge\">Bartering is better!</h1>\r\n    <p class=\"w3-xlarge\"></p>\r\n</div>\r\n\r\n\r\n\r\n<script>\r\n// Used to toggle the menu on small screens when clicking on the menu button\r\nfunction myFunction() {\r\n    var x = document.getElementById(\"navDemo\");\r\n    if (x.className.indexOf(\"w3-show\") == -1) {\r\n        x.className += \" w3-show\";\r\n    } else { \r\n        x.className = x.className.replace(\" w3-show\", \"\");\r\n    }\r\n}\r\n</script>\r\n\r\n<footer class=\"w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge\">\r\n  <a href=\"https://www.facebook.com/Bartering-2002524083411260/?modal=admin_todo_tour\" class=\"fa fa-facebook w3-hover-opacity\"></a>\r\n <!-- <a href=\"#\"class=\"fa fa-instagram w3-hover-opacity\"></a>\r\n  <a href=\"#\" class=\"fa fa-snapchat w3-hover-opacity\"></a>\r\n  <a href=\"#\" class=\"fa fa-pinterest-p w3-hover-opacity\"></a>\r\n  <a href=\"#\" class=\"fa fa-twitter w3-hover-opacity\"></a>\r\n  <a href=\"#\" class=\"fa fa-linkedin w3-hover-opacity\"></a> -->\r\n  <p class=\"w3-medium\"> <a href=\"https://english.jce.ac.il/\" target=\"_blank\">Azrieli College of Engineering Jerusalem</a></p>\r\n</footer>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nbody, html {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.bg {\r\n    \r\n    height: 100%; \r\n\r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div *ngIf=\"Products?.length > 0;else noProducts\">\r\n    <ul *ngFor=\"let Product of Products\" class=\"collection\">\r\n        <li class=\"collection-item\" (dblclick)=\"deleteProduct($event, Product)\">\r\n          <strong>Name: {{ Product.name }}</strong>\r\n           <br> Place: {{ Product.place }}\r\n          <a href=\"#\" class=\"secondary-content\">\r\n            <i (click)=\"deleteProduct($event, Product)\" class=\"fa fa-trash\"></i>\r\n            <i (click)=\"editProduct($event, Product)\" class=\"fa fa-pencil\"></i>\r\n          </a>\r\n          <div *ngIf=\"editState && ProductToEdit.id === Product.id\">\r\n            <form (ngSubmit)=\"updateProduct(Product)\">\r\n              <div class=\"row\">\r\n                <div class=\"input-field col s6\">\r\n                  <input \r\n                    type=\"text\" name=\"name\"\r\n                    placeholder=\"Product name\" [(ngModel)]=\"Product.name\">\r\n                </div>\r\n                <div class=\"input-field col s6\">\r\n                    <input \r\n                      type=\"text\" name=\"place\"\r\n                      placeholder=\"Place\" [(ngModel)]=\"Product.place\">\r\n                </div>\r\n                <div class=\"input-field col s6\">\r\n                  <input \r\n                      type=\"text\" name=\"cname\"\r\n                      placeholder=\"Your name\" [(ngModel)]=\"Product.cname\">\r\n                </div>\r\n                <div class=\"input-field col s6\">\r\n                  <input \r\n                     type=\"text\" name=\"phone\"\r\n                     placeholder=\"Phone\" [(ngModel)]=\"Product.cphone\">\r\n                </div>\r\n                <div class=\"input-field col s6\">\r\n                  <input \r\n                     type=\"text\" name=\"need\"\r\n                     placeholder=\"Want do you want?\" [(ngModel)]=\"Product.need\">\r\n                </div>\r\n                <div class=\"input-field col s6\">\r\n                    <input \r\n                       type=\"date\" name=\"published\"\r\n                       placeholder=\"Published date\" [(ngModel)]=\"Product.date\">\r\n                  </div>\r\n                  <input type=\"submit\" class=\"btn\" value=\"Update Product\">\r\n                  <button class=\"btn red\" (click)=\"deleteProduct($event, Product)\" >Delete Product</button>\r\n           \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n   </div>\r\n\r\n  <ng-template #noProducts>\r\n      <h5>There is not Products yet.</h5>\r\n    </ng-template>\r\n   \r\n  <p-orderList [value]=\"Products\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"Products\" \r\n  filter=\"filter\" filterBy=\"name\" filterPlaceholder=\"Filter by brand\" dragdrop=\"true\" dragdropScope=\"Products\">\r\n  <ng-template let-product pTemplate=\"item\">\r\n      <div class=\"ui-helper-clearfix\" (dblclick)=\"deleteProduct($event, Product)\">\r\n          <img src=\"assets/iphone.jpg\" width=\"10%\" height=\"10%\">\r\n          <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{ product.name }} {{ product.place }}  </div>\r\n      </div>\r\n  </ng-template>\r\n</p-orderList>-->\r\n\r\n\r\n\r\n<body>\r\n\r\n  <div class=\"bg\"><img src=\"assets/send.jpg\"  > </div>\r\n  \r\n  <p>The edit and delete function is cooming soon <br>\r\n    please send me your request and i will love to do it for you</p>\r\n\r\n    Email <a href=\"mailto:copycolormorde@gmail.com\">copycolormorde@gmail.com</a>\r\n  \r\n  </body>\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/lista/lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaComponent = (function () {
    function ListaComponent(ProductService) {
        this.ProductService = ProductService;
        this.editState = false;
        this.display = false;
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
        });
    };
    ListaComponent.prototype.deleteProduct = function (event, Product) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.ProductService.deleteProduct(Product);
            location.reload();
        }
        return;
    };
    ListaComponent.prototype.editProduct = function (event, Product) {
        this.editState = !this.editState;
        this.ProductToEdit = Product;
    };
    ListaComponent.prototype.updateProduct = function (Product) {
        this.ProductService.updateProduct(Product);
        this.ProductToEdit = null;
        this.editState = false;
    };
    ListaComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__("../../../../../src/app/components/lista/lista.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lista/lista.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n  <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search for you\">\r\n</div>\r\n\r\n<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n  <app-distance (onDistanceChange)=\"filterByDistance($event)\" (stopFilter)=\"stopFilterByDistance()\"></app-distance>\r\n</div>\r\n\r\n<p-dataTable #dataTable [value]=\"Products\"  [rows]=\"5\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt [sortField]=\"sortF\" scrollable=\"true\"  scrollHeight=\"200px\"  [style]=\"{'margin-top':'30px'}\" >\r\n  <p-column field=\"name\" header=\"Name\" [sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n  <p-column field=\"place\" header=\"Place\"[sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n  <p-column field=\"cname\" header=\"Contact name\"[sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n  <p-column field=\"cphone\" header=\"Contact phone\"[sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n  <p-column field=\"need\" header=\"Contact want\"[sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n  <p-column field=\"date\" header=\"Published\"  [sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column> \r\n</p-dataTable>\r\n\r\n<p-dialog header=\"Add product\" [(visible)]=\"display\">\r\n  <app-add-Product></app-add-Product>\r\n</p-dialog>\r\n\r\n<button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Add product\" ></button>\r\n<!--\r\n<p-dialog header=\"Edit or delete product\" [(visible)]=\"display2\">\r\n  <app-lista></app-lista>\r\n</p-dialog>\r\n\r\n<button type=\"text\" (click)=\"showDialog2()\" pButton icon=\"fa-external-link-square\" label=\"Edit or delete product\" ></button>-->"

/***/ }),

/***/ "../../../../../src/app/components/tabla/tabla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Product_service__ = __webpack_require__("../../../../../src/app/services/Product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cities_service__ = __webpack_require__("../../../../../src/app/services/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distance_distance_component__ = __webpack_require__("../../../../../src/app/components/distance/distance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_datatable__ = __webpack_require__("../../../../primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var H = window['H'];
var TablaComponent = (function () {
    function TablaComponent(ProductService, CitiesService) {
        this.ProductService = ProductService;
        this.CitiesService = CitiesService;
        this.editState = false;
        this.display = false;
        this.display2 = false;
        this.localCity = '';
        this.citiesDistance = new Map();
        this.platform = new H.service.Platform({
            'app_id': 'TvLRh302Uii5r4PkDhqL',
            'app_code': '-1IQ506Zwd4DnuzLwLWYTw',
            'useHTTPS': true
        });
    }
    TablaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProductService.getProducts().subscribe(function (Products) {
            //console.log(Products);
            _this.Products = Products;
            _this.allProducts = Products;
        });
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.fillCitiesMap();
            });
        }
        ;
    };
    TablaComponent.prototype.fillCitiesMap = function () {
        var geocoder = this.platform.getGeocodingService();
        function onSuccess(result) {
            var location = result.Response.View[0].Result[0];
            var curCity = location.Location.Address.City;
            var distance = location.Distance;
            this.citiesDistance.set(curCity, distance);
        }
        ;
        for (var _i = 0, _a = this.CitiesService.getCities(); _i < _a.length; _i++) {
            var city = _a[_i];
            var geocodingParameters = this.getParameters(city.name);
            geocoder.geocode(geocodingParameters, onSuccess.bind(this), function (e) { });
        }
    };
    TablaComponent.prototype.getParameters = function (cityName) {
        var geocodingParameters = {
            prox: this.latitude + ',' + this.longitude + ',0',
            maxresults: 1,
            gen: 9,
            city: cityName,
            language: 'eng',
            locationattributes: 'none,ar',
            responseattributes: 'none',
            addressattributes: 'none,city,county'
        };
        return geocodingParameters;
    };
    TablaComponent.prototype.filterProductsByCities = function (cities) {
        var productsInCities = [];
        for (var _i = 0, _a = this.allProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            if (cities.includes(product["place"]))
                productsInCities.push(product);
        }
        this.Products = productsInCities;
    };
    TablaComponent.prototype.stopFilterByCities = function () {
        this.Products = this.allProducts;
    };
    TablaComponent.prototype.showDialog = function () {
        this.display = true;
    };
    TablaComponent.prototype.showDialog2 = function () {
        this.display2 = true;
    };
    TablaComponent.prototype.filterByDistance = function (e) {
        var distanceInMeters = e * 1000;
        var geocoder = this.platform.getGeocodingService();
        this.filteredCities = [];
        this.getLocalCity(this.latitude, this.longitude);
        if (this.localCity != '')
            this.filteredCities.push(this.localCity);
        for (var _i = 0, _a = this.CitiesService.getCities(); _i < _a.length; _i++) {
            var city = _a[_i];
            if (this.citiesDistance.get(city.name) <= distanceInMeters)
                this.filteredCities.push(city.name);
        }
        this.filterProductsByCities(this.filteredCities);
    };
    TablaComponent.prototype.getLocalCity = function (latitude, longitude) {
        var reverseGeocodingParameters = {
            prox: latitude + ',' + longitude + ',0',
            mode: 'retrieveAddresses',
            maxresults: 1,
            gen: 9,
            language: 'eng',
            locationattributes: 'none,ar',
            responseattributes: 'none',
            addressattributes: 'none,city,county'
        };
        function onSuccess(result) {
            var location = result.Response.View[0].Result[0];
            var curCity = location.Location.Address.City;
            var curCounty = location.Location.Address.County;
            var localCity = this.filterCityName(curCity);
            if (localCity == undefined) {
                localCity = this.filterCityName(curCounty);
            }
            if (localCity != '')
                this.localCity = localCity.name;
        }
        ;
        var geocoder = this.platform.getGeocodingService();
        geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess.bind(this), function (e) { });
    };
    TablaComponent.prototype.filterCityName = function (byName) {
        for (var i = 0; i < this.CitiesService.getCities().length; i++) {
            var foundCity = this.CitiesService.getCities()[i];
            if (foundCity.name.toLowerCase().indexOf(byName.toLowerCase()) == 0) {
                return foundCity;
            }
        }
    };
    TablaComponent.prototype.stopFilterByDistance = function () {
        this.stopFilterByCities();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__distance_distance_component__["a" /* DistanceComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__distance_distance_component__["a" /* DistanceComponent */])
    ], TablaComponent.prototype, "distance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_primeng_datatable__["DataTableModule"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_primeng_datatable__["DataTableModule"])
    ], TablaComponent.prototype, "dataTable", void 0);
    TablaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabla',
            template: __webpack_require__("../../../../../src/app/components/tabla/tabla.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tabla/tabla.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_Product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_cities_service__["a" /* CitiesService */]])
    ], TablaComponent);
    return TablaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/Product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(afs) {
        this.afs = afs;
        this.ProductsCollection = this.afs.collection('Products');
        // this.Products = this.afs.collection('Products').valueChanges();
        this.Products = this.ProductsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    ProductService.prototype.getProducts = function () {
        return this.Products;
    };
    ProductService.prototype.addProduct = function (Product) {
        this.ProductsCollection.add(Product);
    };
    ProductService.prototype.deleteProduct = function (Product) {
        this.ProductDoc = this.afs.doc("Products/" + Product.id);
        this.ProductDoc.delete();
    };
    ProductService.prototype.updateProduct = function (Product) {
        this.ProductDoc = this.afs.doc("Products/" + Product.id);
        this.ProductDoc.update(Product);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.user = afAuth.authState;
    }
    AuthService.prototype.login = function (name) {
        var _this = this;
        this.afAuth.auth.signInAnonymously().then(function () {
            _this.afAuth.auth.currentUser.updateProfile({
                displayName: name,
                photoURL: "sd"
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var H = window['H'];
var CitiesService = (function () {
    function CitiesService() {
        this.cities = [
            { "name": "Abirim" },
            { "name": "Acre" },
            { "name": "Adamit" },
            { "name": "Adanim" },
            { "name": "Aderet" },
            { "name": "Adi Ad" },
            { "name": "Adirim" },
            { "name": "Adora" },
            { "name": "Afek" },
            { "name": "Afik" },
            { "name": "Afikim" },
            { "name": "Afula" },
            { "name": "Agnat" },
            { "name": "Agur" },
            { "name": "Ahi'ezer" },
            { "name": "Ahihud" },
            { "name": "Ahisamakh" },
            { "name": "Ahituv" },
            { "name": "Ahuzam" },
            { "name": "Ahuzat Barak" },
            { "name": "Ahwa" },
            { "name": "Aley Zahav" },
            { "name": "Al'fey Menashe" },
            { "name": "Alma" },
            { "name": "Almagor" },
            { "name": "Almog" },
            { "name": "Almon" },
            { "name": "Alon" },
            { "name": "Alon HaGalil" },
            { "name": "Alon Shvut" },
            { "name": "Alonei HaBashan" },
            { "name": "Alonim" },
            { "name": "Aluma" },
            { "name": "Alumim" },
            { "name": "Alumot" },
            { "name": "Ami'ad" },
            { "name": "Amikam" },
            { "name": "Aminadav" },
            { "name": "Ami'oz" },
            { "name": "Amir" },
            { "name": "Amirim" },
            { "name": "Amka" },
            { "name": "Amnun" },
            { "name": "Amuqqa" },
            { "name": "Ani'am" },
            { "name": "Arad" },
            { "name": "Arbel" },
            { "name": "Argaman" },
            { "name": "Ari'el" },
            { "name": "Arsuf" },
            { "name": "Arugot" },
            { "name": "Aseret" },
            { "name": "Ashalim" },
            { "name": "Ashdod" },
            { "name": "Ashdot Ya'aqov(Ihud)" },
            { "name": "Ashdot Ya'akov (Me'uhad)" },
            { "name": "Ashqelon" },
            { "name": "Ateret" },
            { "name": "Atlit" },
            { "name": "Avdon" },
            { "name": "Avi'el" },
            { "name": "Avi'ezer" },
            { "name": "Avigail" },
            { "name": "Avigdor" },
            { "name": "Avihayil" },
            { "name": "Avital" },
            { "name": "Avivim" },
            { "name": "Avne Eitan" },
            { "name": "Avne Hefetz" },
            { "name": "Avshalom" },
            { "name": "Avtalyon" },
            { "name": "Ayelet HaShahar" },
            { "name": "Azarya" },
            { "name": "Azor" },
            { "name": "Azri'el" },
            { "name": "Azrikam" },
            { "name": "Bahan" },
            { "name": "Bar Giyora" },
            { "name": "Bar Yohay" },
            { "name": "Barak" },
            { "name": "Baram" },
            { "name": "Bareket" },
            { "name": "Barkan" },
            { "name": "Bat Ayin" },
            { "name": "Bat Hadar" },
            { "name": "Bat Hefer" },
            { "name": "Bat Hen" },
            { "name": "Bat Shlomo" },
            { "name": "Bat Yam" },
            { "name": "Batsra" },
            { "name": "Be'er Milka" },
            { "name": "Be'er Ora" },
            { "name": "Be'er Sheva" },
            { "name": "Be'er Toviya" },
            { "name": "Be'er Ya'akov" },
            { "name": "Be'eri" },
            { "name": "Be'erot Yits'haq" },
            { "name": "Be'erotayim" },
            { "name": "Beit El Faqs" },
            { "name": "Bet Alfa" },
            { "name": "Bet Arif" },
            { "name": "Bet Dagan" },
            { "name": "Bet El'azari" },
            { "name": "Bet Ezra" },
            { "name": "Bet Gamli'el" },
            { "name": "Bet Guvrin" },
            { "name": "Bet Ha'Arava" },
            { "name": "Bet Ha'Emek" },
            { "name": "Bet HaGadi" },
            { "name": "Bet HaLevi" },
            { "name": "Bet Ha'Shita" },
            { "name": "Bet Hananiya" },
            { "name": "Bet Hasan" },
            { "name": "Bet Hashmonay" },
            { "name": "Bet Herut" },
            { "name": "Bet Hilkiya" },
            { "name": "Bet Hilel" },
            { "name": "Bet Kama" },
            { "name": "Bet Keshet" },
            { "name": "Bet Me'ir" },
            { "name": "Bet Nehemya" },
            { "name": "Bet Nekofa" },
            { "name": "Bet Nir" },
            { "name": "Bet Oren" },
            { "name": "Bet Oved" },
            { "name": "Bet Rimon" },
            { "name": "Bet She'an" },
            { "name": "Bet She'arim" },
            { "name": "Bet Shemesh" },
            { "name": "Bet Shikma" },
            { "name": "Bet Ta'mir" },
            { "name": "Bet Uzi'el" },
            { "name": "Bet Yanay" },
            { "name": "Bet Yehoshu'a" },
            { "name": "Bet Yits'hak Sha'ar Hefer" },
            { "name": "Bet Yosef" },
            { "name": "Bet Zayit" },
            { "name": "Bet Zera" },
            { "name": "Beka'ot" },
            { "name": "Beko'a" },
            { "name": "Ben Ami" },
            { "name": "Ben Zakay" },
            { "name": "Benaya" },
            { "name": "Berekhya" },
            { "name": "Bethlehem" },
            { "name": "Betset" },
            { "name": "Beyt Khoron" },
            { "name": "Beytar Ilit" },
            { "name": "Binyamina-Giv'at Ada" },
            { "name": "Birya" },
            { "name": "Bitan A'haron" },
            { "name": "Bit'ha" },
            { "name": "Bitsaron" },
            { "name": "Bne Atarot" },
            { "name": "Bne Ayish" },
            { "name": "Bne Brak" },
            { "name": "Bne Darom" },
            { "name": "Bne Dror" },
            { "name": "Bne Re'em" },
            { "name": "Bne Tsiyon" },
            { "name": "Bne Yehuda" },
            { "name": "Brechin" },
            { "name": "Bror Hayil" },
            { "name": "Brosh" },
            { "name": "Burgeta" },
            { "name": "Bustan HaGalil" },
            { "name": "Carmel" },
            { "name": "Dafna" },
            { "name": "Dalton" },
            { "name": "Dan" },
            { "name": "Dganya Alef" },
            { "name": "Dganya Bet" },
            { "name": "Dekel" },
            { "name": "Dimona" },
            { "name": "Dishon" },
            { "name": "Dolev" },
            { "name": "Dor" },
            { "name": "Dorot" },
            { "name": "Dovev" },
            { "name": "Dovrat" },
            { "name": "Dvin" },
            { "name": "Dvora" },
            { "name": "Efrata" },
            { "name": "Eilat" },
            { "name": "Eildon" },
            { "name": "Elot" },
            { "name": "En Ayala" },
            { "name": "En Dor" },
            { "name": "En Gedi" },
            { "name": "En Gev" },
            { "name": "En HaBsor" },
            { "name": "En Ha'Emek" },
            { "name": "En HaHoresh" },
            { "name": "En HaMifrats" },
            { "name": "En HaNetsiv" },
            { "name": "En HaShlosha" },
            { "name": "En HaShofet" },
            { "name": "En Harod (Ihud)" },
            { "name": "En Harod (Me'uhad)" },
            { "name": "En Hatseva" },
            { "name": "En Hod" },
            { "name": "En Iron" },
            { "name": "En Karmel" },
            { "name": "En Sarid" },
            { "name": "En Shemer" },
            { "name": "En Tamar" },
            { "name": "En Tsurim" },
            { "name": "En Vered" },
            { "name": "En Ya'akov" },
            { "name": "En Ya'hav" },
            { "name": "En Zivan" },
            { "name": "Enat" },
            { "name": "Enav" },
            { "name": "Etan" },
            { "name": "El-Rom" },
            { "name": "El'ad" },
            { "name": "El'azar" },
            { "name": "Eli" },
            { "name": "Eli Ad" },
            { "name": "Elifaz" },
            { "name": "Elifelet" },
            { "name": "Elishama" },
            { "name": "Elkana" },
            { "name": "Elkosh" },
            { "name": "Elon More" },
            { "name": "El'yakhin " },
            { "name": "El'yashiv" },
            { "name": "Elyakim" },
            { "name": "Emunim" },
            { "name": "Erez" },
            { "name": "Esh Kodesh" },
            { "name": "Eshbal" },
            { "name": "Eshbol" },
            { "name": "Eshel HaNasi" },
            { "name": "Esh'har" },
            { "name": "Eshkolot" },
            { "name": "Eshta'ol" },
            { "name": "Ets Efraim" },
            { "name": "Even Menahem" },
            { "name": "Even Sapir" },
            { "name": "Even Shmuel" },
            { "name": "Even Yehuda" },
            { "name": "Evron" },
            { "name": "Eyal" },
            { "name": "Ezer" },
            { "name": "Ezuz" },
            { "name": "Ga'ash" },
            { "name": "Ga'ton" },
            { "name": "Gadish" },
            { "name": "Gadot" },
            { "name": "Gal'ed" },
            { "name": "Gal'on" },
            { "name": "Gan HaDarom" },
            { "name": "Gan HaShomron" },
            { "name": "Gan Hayim" },
            { "name": "Gan Ner" },
            { "name": "Gan Shmu'el" },
            { "name": "Gan Sorek" },
            { "name": "Gan Yavne" },
            { "name": "Gan Yoshiya" },
            { "name": "Gane'Am" },
            { "name": "Gane Hadar" },
            { "name": "Gane Tikva" },
            { "name": "Gane Yohanan" },
            { "name": "Ganot" },
            { "name": "Ganot Hadar" },
            { "name": "Gat" },
            { "name": "Gat Rimon" },
            { "name": "Gazit" },
            { "name": "Ge'a" },
            { "name": "Gealya" },
            { "name": "Gedera" },
            { "name": "Gefen" },
            { "name": "Gerofit" },
            { "name": "Gesher" },
            { "name": "Gesher HaZiv" },
            { "name": "Geshur" },
            { "name": "Ge'ule Teman" },
            { "name": "Ge'ulim" },
            { "name": "Geva" },
            { "name": "Geva Binyamin" },
            { "name": "Geva Karmel" },
            { "name": "Gevim" },
            { "name": "Gezer" },
            { "name": "Gibton" },
            { "name": "Gid'ona" },
            { "name": "Gilat" },
            { "name": "Gilgal" },
            { "name": "Gilon" },
            { "name": "Gimzo" },
            { "name": "Ginaton" },
            { "name": "Ginegar" },
            { "name": "Ginosar" },
            { "name": "Gita" },
            { "name": "Gitit" },
            { "name": "Giv'at Avni" },
            { "name": "Giv'at Brener" },
            { "name": "Giv'at Ela" },
            { "name": "Giv'at HaShlosha" },
            { "name": "Giv'at Hayim (Ihud)" },
            { "name": "Giv'at Hayim (Me'uhad)" },
            { "name": "Giv'at Hen" },
            { "name": "Giv'at Ko'ah" },
            { "name": "Giv'at Nili" },
            { "name": "Giv'at Oz" },
            { "name": "Giv'at Shapira" },
            { "name": "Giv'at Shmu'el" },
            { "name": "Giv'at Ye'arim" },
            { "name": "Giv'at Yesha'yahu" },
            { "name": "Giv'at Yo'av" },
            { "name": "Giv'at Ze'ev" },
            { "name": "Giv'atayim" },
            { "name": "Giv'ati" },
            { "name": "Giv'olim" },
            { "name": "Giv'on HaHadasha" },
            { "name": "Giv'ot Bar" },
            { "name": "Gizo" },
            { "name": "Glil Yam" },
            { "name": "Gonen" },
            { "name": "Goren" },
            { "name": "Gornot HaGalil" },
            { "name": "Gvar'am" },
            { "name": "Gvat" },
            { "name": "Gvulot" },
            { "name": "HaBonim" },
            { "name": "HaGoshrim" },
            { "name": "HaHotrim" },
            { "name": "HaMa'pil" },
            { "name": "HaOgen" },
            { "name": "Ha'On" },
            { "name": "HaSolelim" },
            { "name": "HaYogev" },
            { "name": "HaZore'a" },
            { "name": "HaZor'im" },
            { "name": "Had Nes" },
            { "name": "Hadar Am" },
            { "name": "Hadera" },
            { "name": "Hadid" },
            { "name": "Hagor" },
            { "name": "Haifa" },
            { "name": "Halamish" },
            { "name": "Hamadia" },
            { "name": "Hamra" },
            { "name": "Hanaton" },
            { "name": "Hani'el" },
            { "name": "Hanita" },
            { "name": "Har Adar" },
            { "name": "Har Amasa" },
            { "name": "Har Gilo" },
            { "name": "Hararit" },
            { "name": "Harashim" },
            { "name": "Harasta" },
            { "name": "Harduf" },
            { "name": "Harel" },
            { "name": "Harish" },
            { "name": "Harutsim" },
            { "name": "Hashmona'im" },
            { "name": "Hatsav" },
            { "name": "Hatserim" },
            { "name": "Hatseva" },
            { "name": "Hatsor-Ashdod" },
            { "name": "Hatsor HaGlilit" },
            { "name": "Havatselet HaSharon" },
            { "name": "Hazon" },
            { "name": "Hefets Hayim" },
            { "name": "Helets" },
            { "name": "Hemdat" },
            { "name": "Hemed" },
            { "name": "Herev Le'et" },
            { "name": "Hermesh" },
            { "name": "Herut" },
            { "name": "Herzliya" },
            { "name": "Hibat Tziyon" },
            { "name": "Hinanit" },
            { "name": "Hispin" },
            { "name": "Hod HaSharon" },
            { "name": "Hodiya" },
            { "name": "Hofit" },
            { "name": "Hogla" },
            { "name": "Holit" },
            { "name": "Holon" },
            { "name": "Horshim" },
            { "name": "Hosen" },
            { "name": "Hosha'ya" },
            { "name": "Hukok" },
            { "name": "Hulata" },
            { "name": "Hulda" },
            { "name": "Idan" },
            { "name": "Ilaniya" },
            { "name": "Imanu'el" },
            { "name": "Itamar" },
            { "name": "Jerusalem" },
            { "name": "Kabri" },
            { "name": "Kadarim" },
            { "name": "Kadima-Tsoran" },
            { "name": "Kahal" },
            { "name": "Kalanit" },
            { "name": "Kalia" },
            { "name": "Kalya" },
            { "name": "Kamon" },
            { "name": "Kanaf" },
            { "name": "Karkom" },
            { "name": "Karme Yosef" },
            { "name": "Karmey Tsur" },
            { "name": "Karmiya" },
            { "name": "Karmi'el" },
            { "name": "Karney Shomron" },
            { "name": "Katsrin" },
            { "name": "Kdumim" },
            { "name": "Kedar" },
            { "name": "Kela" },
            { "name": "Kelil" },
            { "name": "Kerem Ben Shemen" },
            { "name": "Kerem Ben Zimra" },
            { "name": "Kerem Maharal" },
            { "name": "Kerem Shalom" },
            { "name": "Kesariya" },
            { "name": "Keshet" },
            { "name": "Kfar Adumim" },
            { "name": "Kfar Ahim" },
            { "name": "Kfar Aviv" },
            { "name": "Kfar Aza" },
            { "name": "Kfar Barukh" },
            { "name": "Kfar Bialik" },
            { "name": "Kfar Bilu" },
            { "name": "Kfar Bin Nun" },
            { "name": "Kfar Blum" },
            { "name": "Kfar Daniel" },
            { "name": "Kfar Eldad" },
            { "name": "Kfar Etsion" },
            { "name": "Kfar Gid'on" },
            { "name": "Kfar Gil'adi" },
            { "name": "Kfar Glikson" },
            { "name": "Kfar Habad" },
            { "name": "Kfar HaHoresh" },
            { "name": "Kfar HaMakabi" },
            { "name": "Kfar HaNagid" },
            { "name": "Kfar HaNasi" },
            { "name": "Kfar Ha'Oranim" },
            { "name": "Kfar HaRif" },
            { "name": "Kfar Hayim" },
            { "name": "Kfar Hananya" },
            { "name": "Kfar Haro'e" },
            { "name": "Kfar Haruv" },
            { "name": "Kfar Hasidim Alef" },
            { "name": "Kfar Hasidim Bet" },
            { "name": "Kfar Hess" },
            { "name": "Kfar Hitim" },
            { "name": "Kfar Kish" },
            { "name": "Kfar Ma'as" },
            { "name": "Kfar Malal" },
            { "name": "Kfar Masaryk" },
            { "name": "Kfar Maymon" },
            { "name": "Kfar Menahem" },
            { "name": "Kfar Monash" },
            { "name": "Kfar Mordekhay" },
            { "name": "Kfar Neter" },
            { "name": "Kfar Pines" },
            { "name": "Kfar Rosh HaNikra" },
            { "name": "Kfar Rupin" },
            { "name": "Kfar Rut" },
            { "name": "Kfar Sava" },
            { "name": "Kfar Shamay" },
            { "name": "Kfar Shmar'yahu" },
            { "name": "Kfar Shmu'el" },
            { "name": "Kfar Sirkin" },
            { "name": "Kfar Sold" },
            { "name": "Kfar Tapuakh" },
            { "name": "Kfar Tavor" },
            { "name": "Kfar Truman" },
            { "name": "Kfar Uria" },
            { "name": "Kfar Vitkin" },
            { "name": "Kfar Vradim" },
            { "name": "Kfar Warburg" },
            { "name": "Kfar Yabetz" },
            { "name": "Kfar Yedidya" },
            { "name": "Kfar Yehezkel" },
            { "name": "Kfar Yehoshu'a" },
            { "name": "Kfar Yona" },
            { "name": "Kfar Zetim" },
            { "name": "Kidmat Tsvi" },
            { "name": "Kidron" },
            { "name": "Kineret (Kvutsa)" },
            { "name": "Kiryat Anavim" },
            { "name": "Kiryat Arba" },
            { "name": "Kiryat Ata" },
            { "name": "Kiryat Bialik" },
            { "name": "Kiryat Ekron" },
            { "name": "Kiryat Gat" },
            { "name": "Kiryat Mal'akhi" },
            { "name": "Kiryat Motzkin" },
            { "name": "Kiryat Netafim" },
            { "name": "Kiryat Ono" },
            { "name": "Kiryat Shmona" },
            { "name": "Kiryat Tiv'on" },
            { "name": "Kiryat Yam" },
            { "name": "Kiryat Ye'arim" },
            { "name": "Kishor" },
            { "name": "Kisufim" },
            { "name": "Klahim" },
            { "name": "Kmehin" },
            { "name": "Kokhav HaShahar" },
            { "name": "Kokhav Mikha'el" },
            { "name": "Kokhav Ya'akov" },
            { "name": "Kokhav Ya'ir Tsur Yig'al" },
            { "name": "Komemiyut" },
            { "name": "Koranit" },
            { "name": "Korazim" },
            { "name": "Kramim" },
            { "name": "K'salon" },
            { "name": "Ktura" },
            { "name": "Kvutsat Yavne" },
            { "name": "Lahav" },
            { "name": "Lahavot HaBashan" },
            { "name": "Lahavot Haviva" },
            { "name": "Lakhish" },
            { "name": "Lapid" },
            { "name": "Lapidot" },
            { "name": "Lavi" },
            { "name": "Lavon" },
            { "name": "Lehavim" },
            { "name": "Liman" },
            { "name": "Livnim" },
            { "name": "Lod" },
            { "name": "Lohme HaGeta'ot" },
            { "name": "Lotan" },
            { "name": "Lotem" },
            { "name": "Luzit" },
            { "name": "Ma'barot" },
            { "name": "Ma'galim" },
            { "name": "Ma'agan" },
            { "name": "Ma'agan Mikha'el" },
            { "name": "Ma'ale Adumim" },
            { "name": "Ma'ale Amos" },
            { "name": "Ma'ale Efrayim" },
            { "name": "Ma'ale Gamla" },
            { "name": "Ma'ale Gilbo'a" },
            { "name": "Ma'ale HaHamisha" },
            { "name": "Ma'ale Levona" },
            { "name": "Ma'ale Mikhmas" },
            { "name": "Ma'ale Shomron" },
            { "name": "Ma'alot-Tarshiha" },
            { "name": "Ma'anit" },
            { "name": "Ma'yan Barukh" },
            { "name": "Ma'yan Tsvi" },
            { "name": "Mabu;im" },
            { "name": "Magal" },
            { "name": "Magen" },
            { "name": "Magen Sha'ul" },
            { "name": "Magshimim" },
            { "name": "Mahanayim" },
            { "name": "Mahseya" },
            { "name": "Malkiya" },
            { "name": "Manof" },
            { "name": "Manot" },
            { "name": "Ma'on" },
            { "name": "Ma'or" },
            { "name": "Ma'oz Hayim" },
            { "name": "Margaliyot" },
            { "name": "Masad" },
            { "name": "Masada" },
            { "name": "Mash'abe Sade" },
            { "name": "Mash'en" },
            { "name": "Maskiyot" },
            { "name": "Maslul" },
            { "name": "Masua" },
            { "name": "Mata" },
            { "name": "Matan" },
            { "name": "Matat" },
            { "name": "Matit'yahu" },
            { "name": "Matsli'ah" },
            { "name": "Matsuva" },
            { "name": "Mavki'im" },
            { "name": "Mazkeret Batya" },
            { "name": "Mazor" },
            { "name": "Mefalsim" },
            { "name": "Megadim" },
            { "name": "Megido" },
            { "name": "Mehola" },
            { "name": "Me Ami" },
            { "name": "Merav" },
            { "name": "Meshar" },
            { "name": "Metar" },
            { "name": "Metav" },
            { "name": "Mekhora" },
            { "name": "Mele'a" },
            { "name": "Melilot" },
            { "name": "Menahemya" },
            { "name": "Menara" },
            { "name": "Menuha" },
            { "name": "Me'ona" },
            { "name": "Merhav Am" },
            { "name": "Merhavya (Moshav)" },
            { "name": "Merom Golan" },
            { "name": "Meron" },
            { "name": "Mesilat Tsiyon" },
            { "name": "Mesilot" },
            { "name": "Masu'ot Yits'hak" },
            { "name": "Metula" },
            { "name": "Metser" },
            { "name": "Mevaseret Tsiyon" },
            { "name": "Mevo Betar" },
            { "name": "Mevo Dotan" },
            { "name": "Mevo Hama" },
            { "name": "Mevo Horon" },
            { "name": "Mevo Modi'im" },
            { "name": "Midrakh Oz" },
            { "name": "Migdal Ha'Emek" },
            { "name": "Migdal Oz" },
            { "name": "Migdalim" },
            { "name": "Migron" },
            { "name": "Mikhmanim" },
            { "name": "Mikhmoret" },
            { "name": "Misgav Am" },
            { "name": "Misgav Dov" },
            { "name": "Mishmar Ayalon" },
            { "name": "Mishmar David" },
            { "name": "Mishmar Ha'Emek" },
            { "name": "Mishmar HaNegev" },
            { "name": "Mishmar HaSharon" },
            { "name": "Mishmar HaShiv'a" },
            { "name": "Mishmar HaYarden" },
            { "name": "Mishmarot" },
            { "name": "Mishmeret" },
            { "name": "Mitspa" },
            { "name": "Mitspe Aviv" },
            { "name": "Mitspe Netofa" },
            { "name": "Mitspe Ramon" },
            { "name": "Mitspe Shalem" },
            { "name": "Mitspe Yeriho" },
            { "name": "Mivtahim" },
            { "name": "Mizra" },
            { "name": "Modi'in Ilit" },
            { "name": "Modi'in Makkabbim-Re'ut" },
            { "name": "Moledet" },
            { "name": "Moran" },
            { "name": "Moreshet" },
            { "name": "Motsa Ilit" },
            { "name": "Na'ale" },
            { "name": "Na'an" },
            { "name": "Nahal Oz" },
            { "name": "Nahala" },
            { "name": "Nahalal" },
            { "name": "Naham" },
            { "name": "Nahariya" },
            { "name": "Nahli'el" },
            { "name": "Nahsholim" },
            { "name": "Nahshon" },
            { "name": "Nahshonim" },
            { "name": "Nataf" },
            { "name": "Natsrat Ilit " },
            { "name": "Natur" },
            { "name": "Negba" },
            { "name": "Negohot" },
            { "name": "Nehalim" },
            { "name": "Nehora" },
            { "name": "Nehusha" },
            { "name": "Ne'ot Golan" },
            { "name": "Ne'ot HaKikar" },
            { "name": "Ne'ot Mordekhay" },
            { "name": "Ne'ot Smadar" },
            { "name": "Neria" },
            { "name": "Nes Amim" },
            { "name": "Nes Harim" },
            { "name": "Nes Tsiyona" },
            { "name": "Nesher" },
            { "name": "Neta'im" },
            { "name": "Netanya" },
            { "name": "Netiv Ha'Asara" },
            { "name": "Netiv HaGdud" },
            { "name": "Netiv HaLamed'He" },
            { "name": "Netiv HaShayara" },
            { "name": "Netivot" },
            { "name": "Netu'a" },
            { "name": "Netser Sereni" },
            { "name": "Nevatim" },
            { "name": "Neve Ativ" },
            { "name": "Neve Daniel" },
            { "name": "Neve Etan" },
            { "name": "Neve Harif" },
            { "name": "Neve Ilan" },
            { "name": "Neve Mikha'el" },
            { "name": "Neve Mivtah" },
            { "name": "Neve Or" },
            { "name": "Neve Yam" },
            { "name": "Neve Yamin" },
            { "name": "Neve Yarak" },
            { "name": "Neve Ziv" },
            { "name": "Neve Zohar" },
            { "name": "Nili" },
            { "name": "Nimrod" },
            { "name": "Nir Akiva" },
            { "name": "Nir Am" },
            { "name": "Nir Banim" },
            { "name": "Nir Eliyahu" },
            { "name": "Nir Ets'yon" },
            { "name": "Nir Galim" },
            { "name": "Nir Hen" },
            { "name": "Nir Moshe" },
            { "name": "Nir Oz" },
            { "name": "Nir Tsvi" },
            { "name": "Nir Yafe" },
            { "name": "Nir Yits'hak" },
            { "name": "Niran" },
            { "name": "Nirim" },
            { "name": "Nirit" },
            { "name": "Nitsan" },
            { "name": "Nitsan Bet" },
            { "name": "Nitsane Oz" },
            { "name": "Nitsane Sinay (Qadesh Barnea)" },
            { "name": "Nitsanim" },
            { "name": "No\am" },
            { "name": "Nof Ayalon" },
            { "name": "Nofei Prat" },
            { "name": "Nofekh" },
            { "name": "Nofim" },
            { "name": "Nofit" },
            { "name": "Noga" },
            { "name": "Nokdim" },
            { "name": "Nordi'ya" },
            { "name": "Nov" },
            { "name": "Odem" },
            { "name": "Ofakim" },
            { "name": "Ofer" },
            { "name": "Ofra" },
            { "name": "Ohad" },
            { "name": "Olesh" },
            { "name": "Omer" },
            { "name": "Omets" },
            { "name": "Or Akiva" },
            { "name": "Or HaGanuz" },
            { "name": "Or HaNer" },
            { "name": "Or Yehuda" },
            { "name": "Ora" },
            { "name": "Oranit" },
            { "name": "Orot" },
            { "name": "Ortal" },
            { "name": "Oshrat" },
            { "name": "Otni'el" },
            { "name": "Otsem" },
            { "name": "Pa'ame Tashaz" },
            { "name": "Palmahim" },
            { "name": "Paran" },
            { "name": "Pardes Hana-Karkur" },
            { "name": "Pardesi'ya" },
            { "name": "Parod" },
            { "name": "Patish" },
            { "name": "Pedaya" },
            { "name": "Pedu'el" },
            { "name": "Peduyim" },
            { "name": "Peki'in HaHadasha" },
            { "name": "Pelekh" },
            { "name": "Petah Tikva" },
            { "name": "Petah'ya" },
            { "name": "Petsa'el" },
            { "name": "Porat" },
            { "name": "Pori'ya Ilit" },
            { "name": "Pori'ya-Kfar Avoda" },
            { "name": "Pori'ya-Neve Oved" },
            { "name": "Prazon" },
            { "name": "Pri-Gan" },
            { "name": "Psagot" },
            { "name": "Ra'anana" },
            { "name": "Rakefet" },
            { "name": "Ram-On" },
            { "name": "Ramat David" },
            { "name": "Ramat Gan" },
            { "name": "Ramat HaKovesh" },
            { "name": "Ramat HaSharon" },
            { "name": "Ramat HaShofet" },
            { "name": "Ramat Magshimim" },
            { "name": "Ramat Rahel" },
            { "name": "Ramat Razi'el" },
            { "name": "Ramat Tsvi" },
            { "name": "Ramat Yishay" },
            { "name": "Ramat Yohanan" },
            { "name": "Ramla" },
            { "name": "Ramot" },
            { "name": "Ramot HaShavim" },
            { "name": "Ramot Me'ir" },
            { "name": "Ramot Menashe" },
            { "name": "Ramot Naftali" },
            { "name": "Ranen" },
            { "name": "Ravid" },
            { "name": "Regavim" },
            { "name": "Regba" },
            { "name": "Rehov" },
            { "name": "Rehovot" },
            { "name": "Re'im" },
            { "name": "Rekhassim" },
            { "name": "Reshafim" },
            { "name": "Retamim" },
            { "name": "Revadim" },
            { "name": "Revaha" },
            { "name": "Revava" },
            { "name": "Revaya" },
            { "name": "Revivim" },
            { "name": "Rimonim" },
            { "name": "Rinat'ya" },
            { "name": "Rishon Letsiyon" },
            { "name": "Rishpon" },
            { "name": "Ro'i" },
            { "name": "Rosh Ha'Ayin" },
            { "name": "Rosh Pina" },
            { "name": "Rosh Tsurim" },
            { "name": "Rotem" },
            { "name": "Ruhama" },
            { "name": "Sa'ad" },
            { "name": "Sa'ar" },
            { "name": "Sal'it" },
            { "name": "Samar" },
            { "name": "Sansana" },
            { "name": "Sapir" },
            { "name": "Sarona" },
            { "name": "Sasa" },
            { "name": "Savyon" },
            { "name": "Sde Avraham" },
            { "name": "Sde Boker" },
            { "name": "Sde David" },
            { "name": "Sde Eli'ezer" },
            { "name": "Sde Eliyahu" },
            { "name": "Sde Hemed" },
            { "name": "Sde Ilan" },
            { "name": "Sde Moshe" },
            { "name": "Sde Nahum" },
            { "name": "Sde Nehemya" },
            { "name": "Sde Nitsan" },
            { "name": "Sde Trumot" },
            { "name": "Sde Tsvi" },
            { "name": "Sde Uziyahu" },
            { "name": "Sde Warburg" },
            { "name": "Sde Ya'akov" },
            { "name": "Sde Yits'hak" },
            { "name": "Sde Yo'av" },
            { "name": "Sderot" },
            { "name": "Sdot Mikha" },
            { "name": "Sdot Yam" },
            { "name": "Segula" },
            { "name": "Sha'al" },
            { "name": "Sha'alvim" },
            { "name": "Sha'ar Efrayim" },
            { "name": "Sha'ar Ha'Amakim" },
            { "name": "Sha'ar HaGolan" },
            { "name": "Shaarey Tikva" },
            { "name": "Shadmot Dvora" },
            { "name": "Shadmot Mehola" },
            { "name": "Shafir" },
            { "name": "Shahar" },
            { "name": "Shaharut" },
            { "name": "Shaked" },
            { "name": "Shalva" },
            { "name": "Shamir" },
            { "name": "Shapira Center" },
            { "name": "Sharsheret" },
            { "name": "Shavey Shomron" },
            { "name": "Shave Tsiyon" },
            { "name": "Shdema" },
            { "name": "She'ar Yashuv" },
            { "name": "Shefer" },
            { "name": "Shekef" },
            { "name": "Shekhanya" },
            { "name": "Shezor" },
            { "name": "Shfayim" },
            { "name": "Shibolim" },
            { "name": "Shilat" },
            { "name": "Shilo" },
            { "name": "Shim'a" },
            { "name": "Shimshit" },
            { "name": "Shlomi" },
            { "name": "Shluhot" },
            { "name": "Sho'eva" },
            { "name": "Shoham" },
            { "name": "Shokeda" },
            { "name": "Shomera" },
            { "name": "Shomrat" },
            { "name": "Shomriya" },
            { "name": "Shorashim" },
            { "name": "Shoresh" },
            { "name": "Shoshanat HaAmakim" },
            { "name": "Shoval" },
            { "name": "Shtula" },
            { "name": "Shtulim" },
            { "name": "Shuva" },
            { "name": "Shvut Rakhel" },
            { "name": "Sifsufa-Kfar Hoshen" },
            { "name": "Sitriya" },
            { "name": "Snir" },
            { "name": "Sufa" },
            { "name": "Susiya" },
            { "name": "Tal-El" },
            { "name": "Tal Menashe" },
            { "name": "Tal Shahar" },
            { "name": "Talme Bilu" },
            { "name": "Talme El'azar" },
            { "name": "Talme Eliyahu" },
            { "name": "Talme Yafe" },
            { "name": "Talme Yehi'el" },
            { "name": "Talme Yosef" },
            { "name": "Talmon" },
            { "name": "Ta'oz" },
            { "name": "Tarum" },
            { "name": "Te'ashur" },
            { "name": "Teko'a" },
            { "name": "Tekuma" },
            { "name": "Tel Adashim" },
            { "name": "Tel Aviv-Yafo" },
            { "name": "Tel Katsir" },
            { "name": "Tel Mond" },
            { "name": "Tel Te'omim" },
            { "name": "Tel Yits'hak" },
            { "name": "Tel Yosef" },
            { "name": "Telem" },
            { "name": "Tenuvot" },
            { "name": "Tfahot" },
            { "name": "Tiberias" },
            { "name": "Tidhar" },
            { "name": "Tifrah" },
            { "name": "Timorim" },
            { "name": "Timrat" },
            { "name": "Tirat Karmel" },
            { "name": "Tirat Yehuda" },
            { "name": "Tirat Tsvi" },
            { "name": "Tirosh" },
            { "name": "Tlalim" },
            { "name": "Tlamim" },
            { "name": "Tomer" },
            { "name": "Tsafririm" },
            { "name": "Tsafriya" },
            { "name": "Tse'elim" },
            { "name": "Tsfat" },
            { "name": "Tsipori" },
            { "name": "Tsiv'on" },
            { "name": "Tslafon" },
            { "name": "Tsofar" },
            { "name": "Tsor'a" },
            { "name": "Tsova" },
            { "name": "Tsufim" },
            { "name": "Tsrufa" },
            { "name": "Tsuke Yam" },
            { "name": "Tsukim" },
            { "name": "Tsur Hadasa" },
            { "name": "Tsur Moshe" },
            { "name": "Tsur Natan" },
            { "name": "Tsur Yitshak" },
            { "name": "Tsuri'el" },
            { "name": "Tsurit" },
            { "name": "Tushiya" },
            { "name": "Tuval" },
            { "name": "Udim" },
            { "name": "Urim" },
            { "name": "Usha" },
            { "name": "Uza" },
            { "name": "Vardon" },
            { "name": "Vered Yeriho" },
            { "name": "Ya'ad" },
            { "name": "Ya'ara" },
            { "name": "Yad Binyamin" },
            { "name": "Yad HaShmona" },
            { "name": "Yad Hana" },
            { "name": "Yad Mordekhay" },
            { "name": "Yad Natan" },
            { "name": "Yad Rambam" },
            { "name": "Yafit" },
            { "name": "Yagel" },
            { "name": "Yagur" },
            { "name": "Ya'ad" },
            { "name": "Yahel" },
            { "name": "Yakhini" },
            { "name": "Yakir" },
            { "name": "Yakum" },
            { "name": "Yanuv" },
            { "name": "Yardena" },
            { "name": "Yarhiv" },
            { "name": "Yarkona" },
            { "name": "Yashresh" },
            { "name": "Yas'ur" },
            { "name": "Yated" },
            { "name": "Yatsits" },
            { "name": "Yavne" },
            { "name": "Yavne'el" },
            { "name": "Ye'af" },
            { "name": "Yehi'am" },
            { "name": "Yehud Monosson" },
            { "name": "Yeroham" },
            { "name": "Yesha" },
            { "name": "Yesodot" },
            { "name": "Yesud HaMa'ala" },
            { "name": "Yevul" },
            { "name": "Yif'at" },
            { "name": "Yiftah" },
            { "name": "Yinon" },
            { "name": "Yir'on" },
            { "name": "Yish'i" },
            { "name": "Yitav" },
            { "name": "Yits'har" },
            { "name": "Yizre'el" },
            { "name": "Yodfat" },
            { "name": "Yokne'am Ilit" },
            { "name": "Yokne'am (Moshava)" },
            { "name": "Yonatan" },
            { "name": "Yoshivia" },
            { "name": "Yotvata" },
            { "name": "Yuval" },
            { "name": "Yuvalim" },
            { "name": "Zano'ah" },
            { "name": "Zar'it" },
            { "name": "Zavdi'el" },
            { "name": "Zekhar'ya" },
            { "name": "Zeru'a" },
            { "name": "Zetan" },
            { "name": "Zikhron Ya'akov" },
            { "name": "Zikim" },
            { "name": "Zimrat" },
            { "name": "Zofit" },
            { "name": "Zohar" },
            { "name": "Zrah'ya" }
        ];
    }
    CitiesService.prototype.getCities = function () {
        return this.cities;
    };
    CitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CitiesService);
    return CitiesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DbService = (function () {
    function DbService(auth, db) {
        var _this = this;
        this.auth = auth;
        this.db = db;
        auth.user.subscribe(function (s) {
            _this.user = s;
        });
        this.messages = db.list('messages');
    }
    DbService.prototype.pushData = function (uid, name, message) {
        this.messages.push({ "uid": uid, "name": name, "message": message });
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDC7QFPEXVKQiFQWKDoAddC-UxZ-A0EQy0",
        authDomain: "copycolor-1729c.firebaseapp.com",
        databaseURL: "https://copycolor-1729c.firebaseio.com",
        projectId: "copycolor-1729c",
        storageBucket: "copycolor-1729c.appspot.com",
        messagingSenderId: "891936853879"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map