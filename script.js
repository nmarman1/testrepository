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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var answer;
var guesses = 0;
var correct = 0;
var guessStage = false;
function getTeamMember() {
    return __awaiter(this, void 0, void 0, function () {
        var textField, x, retData, parsedData, picture;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (numMons == 6) {
                        document.getElementById("Name").innerHTML = "You already have 6 pokemon!";
                        return [2 /*return*/, 0];
                    }
                    textField = document.getElementById("textfield");
                    x = textField.value;
                    textField.value = "";
                    if (x == "") {
                        console.log("Nothing!");
                        return [2 /*return*/, 0];
                    }
                    x = x.toLowerCase();
                    return [4 /*yield*/, getPokemon(x)];
                case 1:
                    retData = _a.sent();
                    if (retData == undefined) {
                        document.getElementById("Name").innerHTML = x + " not found!";
                        return [2 /*return*/, 0];
                    }
                    numMons++;
                    parsedData = JSON.parse(retData);
                    console.log(parsedData.sprites.front_default);
                    picture = document.createElement("img");
                    picture.addEventListener("click", function () {
                        numMons--;
                        picture.remove();
                    });
                    picture.src = parsedData.sprites.front_default;
                    document.body.insertBefore(picture, document.getElementById("Guesser"));
                    document.getElementById("Name").innerHTML = "It's " + x + "!";
                    return [2 /*return*/, 0];
            }
        });
    });
}
var numMons = 0;
document.getElementById("Clicked").addEventListener("click", getTeamMember);
document.getElementById("textfield").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getTeamMember();
    }
});
document.getElementById("WTP B1").addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!guessStage) return [3 /*break*/, 1];
                    this.innerHTML = "Pick a random pokemon";
                    guesses++;
                    document.getElementById("whosthatpokemon").style.filter = "brightness(100%)";
                    document.getElementById("Answer").innerHTML = "It was " + answer + "! Score: " + correct + "/" + guesses;
                    guessStage = false;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, whosThatPokemon()];
                case 2:
                    answer = _a.sent();
                    this.innerHTML = "Give Up";
                    guessStage = true;
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
});
document.getElementById("guess").addEventListener("keydown", function (e) {
    return __awaiter(this, void 0, void 0, function () {
        var parsed_answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(e.key === "Enter")) return [3 /*break*/, 8];
                    parsed_answer = answer.match(/^([a-z0-9]*)/)[0];
                    if (!(parsed_answer == this.value.toLowerCase())) return [3 /*break*/, 4];
                    if (!guessStage) return [3 /*break*/, 1];
                    correct++;
                    guesses++;
                    document.getElementById("Answer").innerHTML = "It's " + answer + "! Score: " + correct + "/" + guesses;
                    document.getElementById("whosthatpokemon").style.filter = "brightness(100%)";
                    document.getElementById("WTP B1").innerHTML = "Pick a random pokemon";
                    guessStage = false;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, whosThatPokemon()];
                case 2:
                    answer = _a.sent();
                    document.getElementById("WTP B1").innerHTML = "Give Up";
                    this.innerHTML = "";
                    guessStage = true;
                    _a.label = 3;
                case 3: return [3 /*break*/, 7];
                case 4:
                    if (!guessStage) return [3 /*break*/, 5];
                    guesses++;
                    document.getElementById("Answer").innerHTML = "Nope! Try again! Score: " + correct + "/" + guesses;
                    document.getElementById("guess").innerHTML = "";
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, whosThatPokemon()];
                case 6:
                    answer = _a.sent();
                    document.getElementById("WTP B1").innerHTML = "Give Up";
                    this.innerHTML = "";
                    guessStage = true;
                    _a.label = 7;
                case 7:
                    this.value = "";
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
});
document.onkeydown = function (event) {
    if (event.ctrlKey && event.shiftKey && event.key == "I") {
        return false;
    }
};
function whosThatPokemon() {
    return __awaiter(this, void 0, void 0, function () {
        var id, retData, parsedData, pic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = String(Math.floor(Math.random() * 898 + 1));
                    return [4 /*yield*/, (getPokemon(id))];
                case 1:
                    retData = _a.sent();
                    parsedData = JSON.parse(retData);
                    pic = document.getElementById("whosthatpokemon");
                    pic.src = parsedData.sprites.front_default;
                    pic.style.filter = "brightness(0%)";
                    pic.height = 200;
                    pic.width = 200;
                    return [2 /*return*/, parsedData.name];
            }
        });
    });
}
function getPokemon(id) {
    return __awaiter(this, void 0, void 0, function () {
        var http, url, ret;
        return __generator(this, function (_a) {
            http = new XMLHttpRequest();
            url = "https://pokeapi.co/api/v2/pokemon/" + id;
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    ret = http.responseText;
                }
                else {
                    ret = undefined;
                }
            };
            http.open("GET", url, false);
            http.send();
            return [2 /*return*/, ret];
        });
    });
}
