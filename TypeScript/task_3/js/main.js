"use strict";
let __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
const CRUD = require("./crud");
const row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
const newRowID = CRUD.insertRow(row);
const updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
