"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs/promises");
var path = require("path");
var readline = require("readline");
// simple structure to store file info
var FileInfo = /** @class */ (function () {
    function FileInfo(filePath, size) {
        this.filePath = filePath;
        this.size = size;
    }
    return FileInfo;
}());
// this class scans folders and collects file info
var DirectoryScanner = /** @class */ (function () {
    function DirectoryScanner() {
        this.files = [];
    }
    // recursive function that walks through folders
    DirectoryScanner.prototype.scan = function (dir) {
        return __awaiter(this, void 0, void 0, function () {
            var items, err_1, _i, items_1, item, fullPath, stats, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.readdir(dir)];
                    case 1:
                        items = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log("Could not read directory:", dir);
                        return [2 /*return*/];
                    case 3:
                        _i = 0, items_1 = items;
                        _b.label = 4;
                    case 4:
                        if (!(_i < items_1.length)) return [3 /*break*/, 12];
                        item = items_1[_i];
                        fullPath = path.join(dir, item);
                        stats = void 0;
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, fs.stat(fullPath)];
                    case 6:
                        stats = _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _a = _b.sent();
                        console.log("Error reading:", fullPath);
                        return [3 /*break*/, 11];
                    case 8:
                        if (!stats.isDirectory()) return [3 /*break*/, 10];
                        // recursion happens here
                        return [4 /*yield*/, this.scan(fullPath)];
                    case 9:
                        // recursion happens here
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        this.files.push(new FileInfo(fullPath, stats.size));
                        _b.label = 11;
                    case 11:
                        _i++;
                        return [3 /*break*/, 4];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    DirectoryScanner.prototype.printFiles = function () {
        if (this.files.length === 0) {
            console.log("No files found.");
            return;
        }
        console.log("\nFiles discovered:\n");
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            console.log("".concat(file.filePath, " (").concat(file.size, " bytes)"));
        }
        console.log("\nTotal files: ".concat(this.files.length));
    };
    DirectoryScanner.prototype.getLargestFile = function () {
        if (this.files.length === 0) {
            return null;
        }
        var largest = this.files[0];
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (file.size > largest.size) {
                largest = file;
            }
        }
        return largest;
    };
    return DirectoryScanner;
}());
// CLI section
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask(question) {
    return new Promise(function (resolve) {
        rl.question(question, resolve);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var folder, scanner, largest, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Directory Scanner (TypeScript)");
                    console.log("-------------------------------");
                    return [4 /*yield*/, ask("Enter a folder path to scan: ")];
                case 1:
                    folder = _a.sent();
                    scanner = new DirectoryScanner();
                    console.log("\nScanning... this might take a moment.\n");
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, scanner.scan(folder)];
                case 3:
                    _a.sent();
                    scanner.printFiles();
                    largest = scanner.getLargestFile();
                    if (largest) {
                        console.log("\nLargest file:");
                        console.log("".concat(largest.filePath, " (").concat(largest.size, " bytes)"));
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log("Something went wrong while scanning.");
                    return [3 /*break*/, 5];
                case 5:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
