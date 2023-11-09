"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "../../node_modules/fast-glob/out/utils/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.splitWhen = exports.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports.splitWhen = splitWhen;
  }
});

// ../../node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "../../node_modules/fast-glob/out/utils/errno.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports.isEnoentCodeError = isEnoentCodeError;
  }
});

// ../../node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "../../node_modules/fast-glob/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// ../../node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "../../node_modules/fast-glob/out/utils/path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
    var os = require("os");
    var path2 = require("path");
    var IS_WINDOWS_PLATFORM = os.platform() === "win32";
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
    var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([(){}]|^!|[!+@](?=\())/g;
    var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
    var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@{}])/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path2.resolve(cwd, filepath);
    }
    exports.makeAbsolute = makeAbsolute;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports.removeLeadingDotSegment = removeLeadingDotSegment;
    exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
    function escapeWindowsPath(pattern) {
      return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapeWindowsPath = escapeWindowsPath;
    function escapePosixPath(pattern) {
      return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports.escapePosixPath = escapePosixPath;
    exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
    function convertWindowsPathToPattern(filepath) {
      return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
    }
    exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
    function convertPosixPathToPattern(filepath) {
      return escapePosixPath(filepath);
    }
    exports.convertPosixPathToPattern = convertPosixPathToPattern;
  }
});

// ../../node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "../../node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// ../../node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "../../node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// ../../node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "../../node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// ../../node_modules/braces/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// ../../node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// ../../node_modules/is-number/index.js
var require_is_number = __commonJS({
  "../../node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// ../../node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "../../node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// ../../node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "../../node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// ../../node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "../../node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, { ...options, wrap: false, toRegex: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// ../../node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "../../node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// ../../node_modules/braces/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// ../../node_modules/braces/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/braces/index.js
var require_braces = __commonJS({
  "../../node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// ../../node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path2.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// ../../node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// ../../node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "../../node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// ../../node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
  "../../node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            output = token.close = `)${rest})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// ../../node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "../../node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse2();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path2.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// ../../node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "../../node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// ../../node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "../../node_modules/micromatch/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch = require_picomatch2();
    var utils = require_utils2();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = /* @__PURE__ */ new Set();
      let keep = /* @__PURE__ */ new Set();
      let items = /* @__PURE__ */ new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = /* @__PURE__ */ new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult)
          options.onResult(state);
        items.push(state.output);
      };
      let matches = micromatch(list, patterns, { ...options, onResult });
      for (let item of items) {
        if (!matches.includes(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, { ...options, contains: true });
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch.makeRe(...args);
    micromatch.scan = (...args) => picomatch.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch.braces(pattern, { ...options, expand: true });
    };
    module2.exports = micromatch;
  }
});

// ../../node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "../../node_modules/fast-glob/out/utils/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
    var path2 = require("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
    var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
    var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern(pattern, options);
    }
    exports.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
      }
      return false;
    }
    exports.isDynamicPattern = isDynamicPattern;
    function hasBraceExpansion(pattern) {
      const openingBraceIndex = pattern.indexOf("{");
      if (openingBraceIndex === -1) {
        return false;
      }
      const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
      if (closingBraceIndex === -1) {
        return false;
      }
      const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
      return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
    }
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path2.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      const patterns = micromatch.braces(pattern, { expand: true, nodupes: true });
      patterns.sort((a, b) => a.length - b.length);
      return patterns.filter((pattern2) => pattern2 !== "");
    }
    exports.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports.matchAny = matchAny;
    function removeDuplicateSlashes(pattern) {
      return pattern.replace(DOUBLE_SLASH_RE, "/");
    }
    exports.removeDuplicateSlashes = removeDuplicateSlashes;
  }
});

// ../../node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "../../node_modules/merge2/index.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});

// ../../node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "../../node_modules/fast-glob/out/utils/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// ../../node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "../../node_modules/fast-glob/out/utils/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = exports.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports.isEmpty = isEmpty;
  }
});

// ../../node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "../../node_modules/fast-glob/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
    var array = require_array();
    exports.array = array;
    var errno = require_errno();
    exports.errno = errno;
    var fs4 = require_fs();
    exports.fs = fs4;
    var path2 = require_path();
    exports.path = path2;
    var pattern = require_pattern();
    exports.pattern = pattern;
    var stream = require_stream();
    exports.stream = stream;
    var string = require_string();
    exports.string = string;
  }
});

// ../../node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "../../node_modules/fast-glob/out/managers/tasks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
    var utils = require_utils3();
    function generate(input, settings) {
      const patterns = processPatterns(input, settings);
      const ignore = processPatterns(settings.ignore, settings);
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(
        staticPatterns,
        negativePatterns,
        /* dynamic */
        false
      );
      const dynamicTasks = convertPatternsToTasks(
        dynamicPatterns,
        negativePatterns,
        /* dynamic */
        true
      );
      return staticTasks.concat(dynamicTasks);
    }
    exports.generate = generate;
    function processPatterns(input, settings) {
      let patterns = input;
      if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
      }
      if (settings.baseNameMatch) {
        patterns = patterns.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`);
      }
      return patterns.map((pattern) => utils.pattern.removeDuplicateSlashes(pattern));
    }
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings, callback) {
      settings.fs.lstat(path2, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path2, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// ../../node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    function read(path2, settings) {
      const lstat = settings.fs.lstatSync(path2);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path2);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports.read = read;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fs4 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "../../node_modules/@nodelib/fs.stat/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = exports.stat = exports.Settings = void 0;
    var async = require_async();
    var sync2 = require_sync();
    var settings_1 = require_settings();
    exports.Settings = settings_1.default;
    function stat(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.stat = stat;
    function statSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync2.read(path2, settings);
    }
    exports.statSync = statSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "../../node_modules/queue-microtask/index.js"(exports, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// ../../node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "../../node_modules/run-parallel/index.js"(exports, module2) {
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb)
            cb(err, results);
          cb = null;
        }
        if (isSync)
          queueMicrotask2(end);
        else
          end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports.createDirentFromStats = createDirentFromStats;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fs = void 0;
    var fs4 = require_fs3();
    exports.fs = fs4;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path2 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path2, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path2,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports.readdir = readdir;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    exports.FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      stat: fs4.stat,
      lstatSync: fs4.lstatSync,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var fs4 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs4.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "../../node_modules/@nodelib/fs.scandir/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.scandirSync = exports.scandir = void 0;
    var async = require_async2();
    var sync2 = require_sync2();
    var settings_1 = require_settings2();
    exports.Settings = settings_1.default;
    function scandir(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports.scandir = scandir;
    function scandirSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync2.read(path2, settings);
    }
    exports.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "../../node_modules/reusify/reusify.js"(exports, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});

// ../../node_modules/fastq/queue.js
var require_queue = __commonJS({
  "../../node_modules/fastq/queue.js"(exports, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker2, concurrency) {
      if (typeof context === "function") {
        concurrency = worker2;
        worker2 = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self2 = {
        push,
        drain: noop,
        saturated: noop,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop,
        kill,
        killAndDrain,
        error
      };
      return self2;
      function running() {
        return _running;
      }
      function pause() {
        self2.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self2.paused)
          return;
        self2.paused = false;
        for (var i = 0; i < self2.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self2.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self2.concurrency || self2.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker2.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self2.concurrency || self2.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self2.saturated();
          }
        } else {
          _running++;
          worker2.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self2.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker2.call(context, next.value, next.worked);
            if (queueTail === null) {
              self2.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self2.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self2.drain = noop;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self2.drain();
        self2.drain = noop;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop() {
    }
    function Task() {
      this.value = null;
      this.callback = noop;
      this.next = null;
      this.release = noop;
      this.context = null;
      this.errorHandler = null;
      var self2 = this;
      this.worked = function worked(err, result) {
        var callback = self2.callback;
        var errorHandler = self2.errorHandler;
        var val = self2.value;
        self2.value = null;
        self2.callback = noop;
        if (self2.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self2.context, err, result);
        self2.release(self2);
      };
    }
    function queueAsPromised(context, worker2, concurrency) {
      if (typeof context === "function") {
        concurrency = worker2;
        worker2 = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker2.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function drained() {
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
          queue.drain = function() {
            previousDrain();
            resolve();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports.joinPathSegments = joinPathSegments;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports.default = Reader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports.default = AsyncReader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports.default = StreamProvider;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = /* @__PURE__ */ new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports.default = SyncReader;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports.default = SyncProvider;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "../../node_modules/@nodelib/fs.walk/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// ../../node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "../../node_modules/fast-glob/out/readers/reader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path2.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports.default = Reader;
  }
});

// ../../node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "../../node_modules/fast-glob/out/readers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root, options) {
        return this._walkStream(root, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve(stats) : reject(error);
          });
        });
      }
    };
    exports.default = ReaderStream;
  }
});

// ../../node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
  "../../node_modules/fast-glob/out/readers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var stream_1 = require_stream3();
    var ReaderAsync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
      }
      dynamic(root, options) {
        return new Promise((resolve, reject) => {
          this._walkAsync(root, options, (error, entries) => {
            if (error === null) {
              resolve(entries);
            } else {
              reject(error);
            }
          });
        });
      }
      async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        return new Promise((resolve, reject) => {
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(entry));
          stream.once("end", () => resolve(entries));
        });
      }
    };
    exports.default = ReaderAsync;
  }
});

// ../../node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "../../node_modules/fast-glob/out/providers/matchers/matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        for (const pattern of this._patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports.default = Matcher;
  }
});

// ../../node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "../../node_modules/fast-glob/out/providers/matchers/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports.default = PartialMatcher;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/deep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports.default = DeepFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = /* @__PURE__ */ new Map();
      }
      getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }));
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(filepath, negativeRe)) {
          return false;
        }
        const isDirectory = entry.dirent.isDirectory();
        const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(filepath, negativeRe, isDirectory);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(filepath);
        }
        return isMatched;
      }
      _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
      }
      _createIndexRecord(filepath) {
        this.index.set(filepath, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
      }
      _isMatchToPatterns(filepath, patternsRe, isDirectory) {
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        if (!isMatched && isDirectory) {
          return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
      }
    };
    exports.default = EntryFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "../../node_modules/fast-glob/out/providers/filters/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports.default = ErrorFilter;
  }
});

// ../../node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "../../node_modules/fast-glob/out/providers/transformers/entry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports.default = EntryTransformer;
  }
});

// ../../node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "../../node_modules/fast-glob/out/providers/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path2 = require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path2.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports.default = Provider;
  }
});

// ../../node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
  "../../node_modules/fast-glob/out/providers/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var async_1 = require_async5();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new async_1.default(this._settings);
      }
      async read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root, task, options);
        return entries.map((entry) => options.transform(entry));
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderAsync;
  }
});

// ../../node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "../../node_modules/fast-glob/out/providers/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stream_1 = require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderStream;
  }
});

// ../../node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "../../node_modules/fast-glob/out/readers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root, options) {
        return this._walkSync(root, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports.default = ReaderSync;
  }
});

// ../../node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "../../node_modules/fast-glob/out/providers/sync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports.default = ProviderSync;
  }
});

// ../../node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "../../node_modules/fast-glob/out/settings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs4 = require("fs");
    var os = require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs4.lstat,
      lstatSync: fs4.lstatSync,
      stat: fs4.stat,
      statSync: fs4.statSync,
      readdir: fs4.readdir,
      readdirSync: fs4.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
        this.ignore = [].concat(this.ignore);
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports.default = Settings;
  }
});

// ../../node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "../../node_modules/fast-glob/out/index.js"(exports, module2) {
    "use strict";
    var taskManager = require_tasks();
    var async_1 = require_async6();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      FastGlob2.glob = FastGlob2;
      FastGlob2.globSync = sync2;
      FastGlob2.globStream = stream;
      FastGlob2.async = FastGlob2;
      function sync2(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync2;
      function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
      function convertPathToPattern(source) {
        assertPatternsInput(source);
        return utils.path.convertPathToPattern(source);
      }
      FastGlob2.convertPathToPattern = convertPathToPattern;
      let posix;
      (function(posix2) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapePosixPath(source);
        }
        posix2.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertPosixPathToPattern(source);
        }
        posix2.convertPathToPattern = convertPathToPattern2;
      })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
      let win32;
      (function(win322) {
        function escapePath2(source) {
          assertPatternsInput(source);
          return utils.path.escapeWindowsPath(source);
        }
        win322.escapePath = escapePath2;
        function convertPathToPattern2(source) {
          assertPatternsInput(source);
          return utils.path.convertWindowsPathToPattern(source);
        }
        win322.convertPathToPattern = convertPathToPattern2;
      })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = [].concat(source);
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});

// ../../node_modules/ws/lib/constants.js
var require_constants4 = __commonJS({
  "../../node_modules/ws/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// ../../node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "../../node_modules/ws/lib/buffer-util.js"(exports, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants4();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0)
        return EMPTY_BUFFER;
      if (list.length === 1)
        return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data))
        return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module2.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = require("bufferutil");
        module2.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "../../node_modules/ws/lib/limiter.js"(exports, module2) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency)
          return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// ../../node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "../../node_modules/ws/lib/permessage-deflate.js"(exports, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants4();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// ../../node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "../../node_modules/ws/lib/validation.js"(exports, module2) {
    "use strict";
    var { isUtf8 } = require("buffer");
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    module2.exports = {
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module2.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = require("utf-8-validate");
        module2.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "../../node_modules/ws/lib/receiver.js"(exports, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants4();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var Receiver = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        let err;
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            default:
              this._loop = false;
              return;
          }
        } while (this._loop);
        cb(err);
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          this._loop = false;
          return error(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          this._loop = false;
          return error(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (!this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            this._loop = false;
            return error(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
          }
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            this._loop = false;
            return error(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
          }
        } else {
          this._loop = false;
          return error(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            this._loop = false;
            return error(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
          }
        } else if (this._masked) {
          this._loop = false;
          return error(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
        }
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          return this.haveLength();
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }
      /**
       * Payload length has been read.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      haveLength() {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7)
          return this.controlMessage(data);
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        return this.dataMessage();
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(
                error(
                  RangeError,
                  "Max payload size exceeded",
                  false,
                  1009,
                  "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
                )
              );
            }
            this._fragments.push(buf);
          }
          const er = this.dataMessage();
          if (er)
            return cb(er);
          this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @return {(Error|undefined)} A possible error
       * @private
       */
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;
          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];
          if (this._opcode === 2) {
            let data;
            if (this._binaryType === "nodebuffer") {
              data = concat(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
              data = toArrayBuffer(concat(fragments, messageLength));
            } else {
              data = fragments;
            }
            this.emit("message", data, true);
          } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              this._loop = false;
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("message", buf, false);
          }
        }
        this._state = GET_INFO;
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data) {
        if (this._opcode === 8) {
          this._loop = false;
          if (data.length === 0) {
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              return error(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("conclude", code, buf);
            this.end();
          }
        } else if (this._opcode === 9) {
          this.emit("ping", data);
        } else {
          this.emit("pong", data);
        }
        this._state = GET_INFO;
      }
    };
    module2.exports = Receiver;
    function error(ErrorCtor, message, prefix, statusCode, errorCode) {
      const err = new ErrorCtor(
        prefix ? `Invalid WebSocket frame: ${message}` : message
      );
      Error.captureStackTrace(err, error);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
});

// ../../node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "../../node_modules/ws/lib/sender.js"(exports, module2) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER } = require_constants4();
    var { isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var Sender = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {(net.Socket|tls.Socket)} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            randomFillSync(mask, 0, 4);
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask)
          return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking)
          return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        if (perMessageDeflate) {
          const opts = {
            [kByteLength]: byteLength,
            fin: options.fin,
            generateMask: this._generateMask,
            mask: options.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1
          };
          if (this._deflating) {
            this.enqueue([this.dispatch, data, this._compress, opts, cb]);
          } else {
            this.dispatch(data, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(
            _Sender.frame(data, {
              [kByteLength]: byteLength,
              fin: options.fin,
              generateMask: this._generateMask,
              mask: options.mask,
              maskBuffer: this._maskBuffer,
              opcode,
              readOnly,
              rsv1: false
            }),
            cb
          );
        }
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            if (typeof cb === "function")
              cb(err);
            for (let i = 0; i < this._queue.length; i++) {
              const params = this._queue[i];
              const callback = params[params.length - 1];
              if (typeof callback === "function")
                callback(err);
            }
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._deflating = false;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {Buffer[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender;
  }
});

// ../../node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "../../node_modules/ws/lib/event-target.js"(exports, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants4();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// ../../node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "../../node_modules/ws/lib/extension.js"(exports, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0)
        dest[name] = [elem];
      else
        dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values))
                values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// ../../node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "../../node_modules/ws/lib/websocket.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Readable } = require("stream");
    var { URL: URL2 } = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver = require_receiver();
    var Sender = require_sender();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants4();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var closeTimeout = 30 * 1e3;
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
      }
      /**
       * This deviates from the WHATWG interface since ws doesn't support the
       * required default "blob" type (instead we define a custom "nodebuffer"
       * type).
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type))
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket)
          return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        this._sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        socket.setTimeout(0);
        socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED)
          return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._closeTimer = setTimeout(
          this._socket.destroy.bind(this._socket),
          closeTimeout
        );
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain)
          this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED)
          return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute])
              return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function")
            return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: void 0,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
        websocket._url = address.href;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
        websocket._url = address;
      }
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = isSecure ? tlsConnect : netConnect;
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost)
              delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted])
          return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING)
          return;
        req = websocket._req = null;
        if (res.headers.upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt)
          websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = toBuffer(data).length;
        if (websocket._socket)
          websocket._sender._bufferedBytes += length;
        else
          websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0)
        return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused)
        websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      websocket.emit("error", err);
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      websocket.pong(data, !websocket._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      let chunk;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// ../../node_modules/ws/lib/stream.js
var require_stream5 = __commonJS({
  "../../node_modules/ws/lib/stream.js"(exports, module2) {
    "use strict";
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data))
          ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed)
          return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed)
          return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called)
            callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy)
          ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null)
          return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted)
            duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused)
          ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream;
  }
});

// ../../node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "../../node_modules/ws/lib/subprotocol.js"(exports, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// ../../node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "../../node_modules/ws/lib/websocket-server.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var http = require("http");
    var https = require("https");
    var net = require("net");
    var tls = require("tls");
    var { createHash } = require("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { GUID, kWebSocket } = require_constants4();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb)
          this.once("close", cb);
        if (this._state === CLOSING)
          return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path)
            return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (req.headers.upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (!key || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 8 && version !== 13) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING)
          return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message);
      }
    }
  }
});

// ../../node_modules/ws/index.js
var require_ws = __commonJS({
  "../../node_modules/ws/index.js"(exports, module2) {
    "use strict";
    var WebSocket2 = require_websocket();
    WebSocket2.createWebSocketStream = require_stream5();
    WebSocket2.Server = require_websocket_server();
    WebSocket2.Receiver = require_receiver();
    WebSocket2.Sender = require_sender();
    WebSocket2.WebSocket = WebSocket2;
    WebSocket2.WebSocketServer = WebSocket2.Server;
    module2.exports = WebSocket2;
  }
});

// src/bindings/duckdb-mvp.js
var require_duckdb_mvp = __commonJS({
  "src/bindings/duckdb-mvp.js"(exports, module2) {
    "use strict";
    var DuckDB3 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined")
        _scriptDir = _scriptDir || __filename;
      return function(DuckDB4 = {}) {
        var Module = typeof DuckDB4 != "undefined" ? DuckDB4 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path2) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path2, scriptDirectory);
          }
          return scriptDirectory + path2;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_NODE) {
          var fs4 = require("fs");
          var nodePath = require("path");
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs4.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror, binary = true) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs4.readFile(filename, binary ? void 0 : "utf8", (err2, data) => {
              if (err2)
                onerror(err2);
              else
                onload(binary ? data.buffer : data);
            });
          };
          if (!Module["thisProgram"] && process.argv.length > 1) {
            thisProgram = process.argv[1].replace(/\\/g, "/");
          }
          arguments_ = process.argv.slice(2);
          quit_ = (status, toThrow) => {
            process.exitCode = status;
            throw toThrow;
          };
          Module["inspect"] = () => "[Emscripten Module object]";
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"])
          arguments_ = Module["arguments"];
        if (Module["thisProgram"])
          thisProgram = Module["thisProgram"];
        if (Module["quit"])
          quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"])
          wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module["HEAP8"] = HEAP8 = new Int8Array(b);
          Module["HEAP16"] = HEAP16 = new Int16Array(b);
          Module["HEAP32"] = HEAP32 = new Int32Array(b);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
              Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (!Module["noFSInit"] && !FS.init.initialized)
            FS.init();
          FS.ignorePermissions = false;
          TTY.init();
          SOCKFS.root = FS.mount(SOCKFS, {}, null);
          callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          callRuntimeCallbacks(__ATMAIN__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
              Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function getUniqueRunDependency(id) {
          return id;
        }
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "./duckdb-mvp.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + binaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(() => getBinary(binaryFile));
            }
          }
          return Promise.resolve().then(() => getBinary(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile).then((binary) => {
            return WebAssembly.instantiate(binary, imports);
          }).then((instance) => {
            return instance;
          }).then(receiver, (reason) => {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason);
          });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
            return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
              var result = WebAssembly.instantiateStreaming(response, imports);
              return result.then(callback, function(reason) {
                err("wasm streaming compile failed: " + reason);
                err("falling back to ArrayBuffer instantiation");
                return instantiateArrayBuffer(binaryFile, imports, callback);
              });
            });
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { "a": wasmImports };
          function receiveInstance(instance, module3) {
            var exports2 = instance.exports;
            Module["asm"] = exports2;
            wasmMemory = Module["asm"]["Ga"];
            updateMemoryViews();
            wasmTable = Module["asm"]["Ja"];
            addOnInit(Module["asm"]["Ha"]);
            removeRunDependency("wasm-instantiate");
            return exports2;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module["instantiateWasm"]) {
            try {
              return Module["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = `Program terminated with exit(${status})`;
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function _XML_GetBuffer() {
          err("missing function: XML_GetBuffer");
          abort(-1);
        }
        function _XML_GetErrorCode() {
          err("missing function: XML_GetErrorCode");
          abort(-1);
        }
        function _XML_Parse() {
          err("missing function: XML_Parse");
          abort(-1);
        }
        function _XML_ParseBuffer() {
          err("missing function: XML_ParseBuffer");
          abort(-1);
        }
        function _XML_ParserCreate() {
          err("missing function: XML_ParserCreate");
          abort(-1);
        }
        function _XML_ParserFree() {
          err("missing function: XML_ParserFree");
          abort(-1);
        }
        function _XML_ResumeParser() {
          err("missing function: XML_ResumeParser");
          abort(-1);
        }
        function _XML_SetCharacterDataHandler() {
          err("missing function: XML_SetCharacterDataHandler");
          abort(-1);
        }
        function _XML_SetElementHandler() {
          err("missing function: XML_SetElementHandler");
          abort(-1);
        }
        function _XML_SetUserData() {
          err("missing function: XML_SetUserData");
          abort(-1);
        }
        function _XML_StopParser() {
          err("missing function: XML_StopParser");
          abort(-1);
        }
        function ExceptionInfo(excPtr) {
          this.excPtr = excPtr;
          this.ptr = excPtr - 24;
          this.set_type = function(type) {
            HEAPU32[this.ptr + 4 >>> 2] = type;
          };
          this.get_type = function() {
            return HEAPU32[this.ptr + 4 >>> 2];
          };
          this.set_destructor = function(destructor) {
            HEAPU32[this.ptr + 8 >>> 2] = destructor;
          };
          this.get_destructor = function() {
            return HEAPU32[this.ptr + 8 >>> 2];
          };
          this.set_caught = function(caught) {
            caught = caught ? 1 : 0;
            HEAP8[this.ptr + 12 >>> 0] = caught;
          };
          this.get_caught = function() {
            return HEAP8[this.ptr + 12 >>> 0] != 0;
          };
          this.set_rethrown = function(rethrown) {
            rethrown = rethrown ? 1 : 0;
            HEAP8[this.ptr + 13 >>> 0] = rethrown;
          };
          this.get_rethrown = function() {
            return HEAP8[this.ptr + 13 >>> 0] != 0;
          };
          this.init = function(type, destructor) {
            this.set_adjusted_ptr(0);
            this.set_type(type);
            this.set_destructor(destructor);
          };
          this.set_adjusted_ptr = function(adjustedPtr) {
            HEAPU32[this.ptr + 16 >>> 2] = adjustedPtr;
          };
          this.get_adjusted_ptr = function() {
            return HEAPU32[this.ptr + 16 >>> 2];
          };
          this.get_exception_ptr = function() {
            var isPointer = ___cxa_is_pointer_type(this.get_type());
            if (isPointer) {
              return HEAPU32[this.excPtr >>> 2];
            }
            var adjusted = this.get_adjusted_ptr();
            if (adjusted !== 0)
              return adjusted;
            return this.excPtr;
          };
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        function ___cxa_throw(ptr, type, destructor) {
          var info = new ExceptionInfo(ptr);
          info.init(type, destructor);
          exceptionLast = ptr;
          uncaughtExceptionCount++;
          throw exceptionLast;
        }
        var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://emscripten.org/docs/compiling/Dynamic-Linking.html";
        function ___dlsym(handle, symbol, ra) {
          abort(dlopenMissingError);
        }
        var PATH = { isAbs: (path2) => path2.charAt(0) === "/", splitPath: (filename) => {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        }, normalizeArray: (parts, allowAboveRoot) => {
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }
          return parts;
        }, normalize: (path2) => {
          var isAbsolute = PATH.isAbs(path2), trailingSlash = path2.substr(-1) === "/";
          path2 = PATH.normalizeArray(path2.split("/").filter((p) => !!p), !isAbsolute).join("/");
          if (!path2 && !isAbsolute) {
            path2 = ".";
          }
          if (path2 && trailingSlash) {
            path2 += "/";
          }
          return (isAbsolute ? "/" : "") + path2;
        }, dirname: (path2) => {
          var result = PATH.splitPath(path2), root = result[0], dir = result[1];
          if (!root && !dir) {
            return ".";
          }
          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }
          return root + dir;
        }, basename: (path2) => {
          if (path2 === "/")
            return "/";
          path2 = PATH.normalize(path2);
          path2 = path2.replace(/\/$/, "");
          var lastSlash = path2.lastIndexOf("/");
          if (lastSlash === -1)
            return path2;
          return path2.substr(lastSlash + 1);
        }, join: function() {
          var paths = Array.prototype.slice.call(arguments);
          return PATH.normalize(paths.join("/"));
        }, join2: (l, r) => {
          return PATH.normalize(l + "/" + r);
        } };
        function initRandomFill() {
          if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
            return (view) => crypto.getRandomValues(view);
          } else if (ENVIRONMENT_IS_NODE) {
            try {
              var crypto_module = require("crypto");
              var randomFillSync = crypto_module["randomFillSync"];
              if (randomFillSync) {
                return (view) => crypto_module["randomFillSync"](view);
              }
              var randomBytes = crypto_module["randomBytes"];
              return (view) => (view.set(randomBytes(view.byteLength)), view);
            } catch (e) {
            }
          }
          abort("initRandomDevice");
        }
        function randomFill(view) {
          return (randomFill = initRandomFill())(view);
        }
        var PATH_FS = { resolve: function() {
          var resolvedPath = "", resolvedAbsolute = false;
          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path2 = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path2 != "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path2) {
              return "";
            }
            resolvedPath = path2 + "/" + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path2);
          }
          resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        }, relative: (from, to) => {
          from = PATH_FS.resolve(from).substr(1);
          to = PATH_FS.resolve(to).substr(1);
          function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
              if (arr[start] !== "")
                break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== "")
                break;
            }
            if (start > end)
              return [];
            return arr.slice(start, end - start + 1);
          }
          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }
          var outputParts = [];
          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }
          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        } };
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          outIdx >>>= 0;
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              heap[outIdx++ >>> 0] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 192 | u >> 6;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 224 | u >> 12;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 240 | u >> 18;
              heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            }
          }
          heap[outIdx >>> 0] = 0;
          return outIdx - startIdx;
        }
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
          if (dontAddNull)
            u8array.length = numBytesWritten;
          return u8array;
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          idx >>>= 0;
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        var TTY = { ttys: [], init: function() {
        }, shutdown: function() {
        }, register: function(dev, ops) {
          TTY.ttys[dev] = { input: [], output: [], ops };
          FS.registerDevice(dev, TTY.stream_ops);
        }, stream_ops: { open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        }, close: function(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, fsync: function(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, read: function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0)
              break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        }, write: function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        } }, default_tty_ops: { get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = fs4.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1);
              } catch (e) {
                if (e.toString().includes("EOF"))
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        }, put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        }, fsync: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } }, default_tty1_ops: { put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        }, fsync: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } } };
        function zeroMemory(address, size) {
          HEAPU8.fill(0, address, address + size);
          return address;
        }
        function alignMemory(size, alignment) {
          return Math.ceil(size / alignment) * alignment;
        }
        function mmapAlloc(size) {
          size = alignMemory(size, 65536);
          var ptr = _emscripten_builtin_memalign(65536, size);
          if (!ptr)
            return 0;
          return zeroMemory(ptr, size);
        }
        var MEMFS = { ops_table: null, mount: function(mount) {
          return MEMFS.createNode(null, "/", 16384 | 511, 0);
        }, createNode: function(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63);
          }
          if (!MEMFS.ops_table) {
            MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } };
          }
          var node = FS.createNode(parent, name, mode, dev);
          if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
          } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null;
          } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
          } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
          }
          node.timestamp = Date.now();
          if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp;
          }
          return node;
        }, getFileDataAsTypedArray: function(node) {
          if (!node.contents)
            return new Uint8Array(0);
          if (node.contents.subarray)
            return node.contents.subarray(0, node.usedBytes);
          return new Uint8Array(node.contents);
        }, expandFileStorage: function(node, newCapacity) {
          newCapacity >>>= 0;
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity)
            return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
          if (prevCapacity != 0)
            newCapacity = Math.max(newCapacity, 256);
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity);
          if (node.usedBytes > 0)
            node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        }, resizeFileStorage: function(node, newSize) {
          newSize >>>= 0;
          if (node.usedBytes == newSize)
            return;
          if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0;
          } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
              node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
            }
            node.usedBytes = newSize;
          }
        }, node_ops: { getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        }, setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        }, lookup: function(parent, name) {
          throw FS.genericErrors[44];
        }, mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        }, rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now();
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        }, unlink: function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        }, rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        }, readdir: function(node) {
          var entries = [".", ".."];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        }, symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        }, readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        } }, stream_ops: { read: function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes)
            return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer[offset + i] = contents[position + i];
          }
          return size;
        }, write: function(stream, buffer, offset, length, position, canOwn) {
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
          if (!length)
            return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        }, llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        }, allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        }, mmap: function(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            ptr >>>= 0;
            HEAP8.set(contents, ptr >>> 0);
          }
          return { ptr, allocated };
        }, msync: function(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        } } };
        function asyncLoad(url, onload, onerror, noRunDep) {
          var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
          readAsync(url, (arrayBuffer) => {
            assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
            onload(new Uint8Array(arrayBuffer));
            if (dep)
              removeRunDependency(dep);
          }, (event) => {
            if (onerror) {
              onerror();
            } else {
              throw `Loading data file "${url}" failed.`;
            }
          });
          if (dep)
            addRunDependency(dep);
        }
        var preloadPlugins = Module["preloadPlugins"] || [];
        function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) {
          if (typeof Browser != "undefined")
            Browser.init();
          var handled = false;
          preloadPlugins.forEach(function(plugin) {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, onerror);
              handled = true;
            }
          });
          return handled;
        }
        function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency(`cp ${fullname}`);
          function processData(byteArray) {
            function finish(byteArray2) {
              if (preFinish)
                preFinish();
              if (!dontCreateFile) {
                FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
              }
              if (onload)
                onload();
              removeRunDependency(dep);
            }
            if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
              if (onerror)
                onerror();
              removeRunDependency(dep);
            })) {
              return;
            }
            finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == "string") {
            asyncLoad(url, (byteArray) => processData(byteArray), onerror);
          } else {
            processData(url);
          }
        }
        function FS_modeStringToFlags(str) {
          var flagModes = { "r": 0, "r+": 2, "w": 512 | 64 | 1, "w+": 512 | 64 | 2, "a": 1024 | 64 | 1, "a+": 1024 | 64 | 2 };
          var flags = flagModes[str];
          if (typeof flags == "undefined") {
            throw new Error(`Unknown file open mode: ${str}`);
          }
          return flags;
        }
        function FS_getMode(canRead, canWrite) {
          var mode = 0;
          if (canRead)
            mode |= 292 | 73;
          if (canWrite)
            mode |= 146;
          return mode;
        }
        var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (path2, opts = {}) => {
          path2 = PATH_FS.resolve(path2);
          if (!path2)
            return { path: "", node: null };
          var defaults = { follow_mount: true, recurse_count: 0 };
          opts = Object.assign(defaults, opts);
          if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32);
          }
          var parts = path2.split("/").filter((p) => !!p);
          var current = FS.root;
          var current_path = "/";
          for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
              break;
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
              if (!islast || islast && opts.follow_mount) {
                current = current.mounted.root;
              }
            }
            if (!islast || opts.follow) {
              var count = 0;
              while (FS.isLink(current.mode)) {
                var link = FS.readlink(current_path);
                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                current = lookup.node;
                if (count++ > 40) {
                  throw new FS.ErrnoError(32);
                }
              }
            }
          }
          return { path: current_path, node: current };
        }, getPath: (node) => {
          var path2;
          while (true) {
            if (FS.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path2)
                return mount;
              return mount[mount.length - 1] !== "/" ? `${mount}/${path2}` : mount + path2;
            }
            path2 = path2 ? `${node.name}/${path2}` : node.name;
            node = node.parent;
          }
        }, hashName: (parentid, name) => {
          var hash = 0;
          for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
          }
          return (parentid + hash >>> 0) % FS.nameTable.length;
        }, hashAddNode: (node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash];
          FS.nameTable[hash] = node;
        }, hashRemoveNode: (node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
          } else {
            var current = FS.nameTable[hash];
            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }
              current = current.name_next;
            }
          }
        }, lookupNode: (parent, name) => {
          var errCode = FS.mayLookup(parent);
          if (errCode) {
            throw new FS.ErrnoError(errCode, parent);
          }
          var hash = FS.hashName(parent.id, name);
          for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
              return node;
            }
          }
          return FS.lookup(parent, name);
        }, createNode: (parent, name, mode, rdev) => {
          var node = new FS.FSNode(parent, name, mode, rdev);
          FS.hashAddNode(node);
          return node;
        }, destroyNode: (node) => {
          FS.hashRemoveNode(node);
        }, isRoot: (node) => {
          return node === node.parent;
        }, isMountpoint: (node) => {
          return !!node.mounted;
        }, isFile: (mode) => {
          return (mode & 61440) === 32768;
        }, isDir: (mode) => {
          return (mode & 61440) === 16384;
        }, isLink: (mode) => {
          return (mode & 61440) === 40960;
        }, isChrdev: (mode) => {
          return (mode & 61440) === 8192;
        }, isBlkdev: (mode) => {
          return (mode & 61440) === 24576;
        }, isFIFO: (mode) => {
          return (mode & 61440) === 4096;
        }, isSocket: (mode) => {
          return (mode & 49152) === 49152;
        }, flagsToPermissionString: (flag) => {
          var perms = ["r", "w", "rw"][flag & 3];
          if (flag & 512) {
            perms += "w";
          }
          return perms;
        }, nodePermissions: (node, perms) => {
          if (FS.ignorePermissions) {
            return 0;
          }
          if (perms.includes("r") && !(node.mode & 292)) {
            return 2;
          } else if (perms.includes("w") && !(node.mode & 146)) {
            return 2;
          } else if (perms.includes("x") && !(node.mode & 73)) {
            return 2;
          }
          return 0;
        }, mayLookup: (dir) => {
          var errCode = FS.nodePermissions(dir, "x");
          if (errCode)
            return errCode;
          if (!dir.node_ops.lookup)
            return 2;
          return 0;
        }, mayCreate: (dir, name) => {
          try {
            var node = FS.lookupNode(dir, name);
            return 20;
          } catch (e) {
          }
          return FS.nodePermissions(dir, "wx");
        }, mayDelete: (dir, name, isdir) => {
          var node;
          try {
            node = FS.lookupNode(dir, name);
          } catch (e) {
            return e.errno;
          }
          var errCode = FS.nodePermissions(dir, "wx");
          if (errCode) {
            return errCode;
          }
          if (isdir) {
            if (!FS.isDir(node.mode)) {
              return 54;
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
              return 10;
            }
          } else {
            if (FS.isDir(node.mode)) {
              return 31;
            }
          }
          return 0;
        }, mayOpen: (node, flags) => {
          if (!node) {
            return 44;
          }
          if (FS.isLink(node.mode)) {
            return 32;
          } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
              return 31;
            }
          }
          return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
        }, MAX_OPEN_FDS: 4096, nextfd: () => {
          for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
            if (!FS.streams[fd]) {
              return fd;
            }
          }
          throw new FS.ErrnoError(33);
        }, getStream: (fd) => FS.streams[fd], createStream: (stream, fd = -1) => {
          if (!FS.FSStream) {
            FS.FSStream = function() {
              this.shared = {};
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, { object: { get: function() {
              return this.node;
            }, set: function(val) {
              this.node = val;
            } }, isRead: { get: function() {
              return (this.flags & 2097155) !== 1;
            } }, isWrite: { get: function() {
              return (this.flags & 2097155) !== 0;
            } }, isAppend: { get: function() {
              return this.flags & 1024;
            } }, flags: { get: function() {
              return this.shared.flags;
            }, set: function(val) {
              this.shared.flags = val;
            } }, position: { get: function() {
              return this.shared.position;
            }, set: function(val) {
              this.shared.position = val;
            } } });
          }
          stream = Object.assign(new FS.FSStream(), stream);
          if (fd == -1) {
            fd = FS.nextfd();
          }
          stream.fd = fd;
          FS.streams[fd] = stream;
          return stream;
        }, closeStream: (fd) => {
          FS.streams[fd] = null;
        }, chrdev_stream_ops: { open: (stream) => {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        }, llseek: () => {
          throw new FS.ErrnoError(70);
        } }, major: (dev) => dev >> 8, minor: (dev) => dev & 255, makedev: (ma, mi) => ma << 8 | mi, registerDevice: (dev, ops) => {
          FS.devices[dev] = { stream_ops: ops };
        }, getDevice: (dev) => FS.devices[dev], getMounts: (mount) => {
          var mounts = [];
          var check = [mount];
          while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts);
          }
          return mounts;
        }, syncfs: (populate, callback) => {
          if (typeof populate == "function") {
            callback = populate;
            populate = false;
          }
          FS.syncFSRequests++;
          if (FS.syncFSRequests > 1) {
            err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
          }
          var mounts = FS.getMounts(FS.root.mount);
          var completed = 0;
          function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode);
          }
          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }
              return;
            }
            if (++completed >= mounts.length) {
              doCallback(null);
            }
          }
          mounts.forEach((mount) => {
            if (!mount.type.syncfs) {
              return done(null);
            }
            mount.type.syncfs(mount, populate, done);
          });
        }, mount: (type, opts, mountpoint) => {
          var root = mountpoint === "/";
          var pseudo = !mountpoint;
          var node;
          if (root && FS.root) {
            throw new FS.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            if (!FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
          }
          var mount = { type, opts, mountpoint, mounts: [] };
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;
          if (root) {
            FS.root = mountRoot;
          } else if (node) {
            node.mounted = mount;
            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }
          return mountRoot;
        }, unmount: (mountpoint) => {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28);
          }
          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS.getMounts(mount);
          Object.keys(FS.nameTable).forEach((hash) => {
            var current = FS.nameTable[hash];
            while (current) {
              var next = current.name_next;
              if (mounts.includes(current.mount)) {
                FS.destroyNode(current);
              }
              current = next;
            }
          });
          node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1);
        }, lookup: (parent, name) => {
          return parent.node_ops.lookup(parent, name);
        }, mknod: (path2, mode, dev) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path2);
          if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.mayCreate(parent, name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.mknod(parent, name, mode, dev);
        }, create: (path2, mode) => {
          mode = mode !== void 0 ? mode : 438;
          mode &= 4095;
          mode |= 32768;
          return FS.mknod(path2, mode, 0);
        }, mkdir: (path2, mode) => {
          mode = mode !== void 0 ? mode : 511;
          mode &= 511 | 512;
          mode |= 16384;
          return FS.mknod(path2, mode, 0);
        }, mkdirTree: (path2, mode) => {
          var dirs = path2.split("/");
          var d = "";
          for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i])
              continue;
            d += "/" + dirs[i];
            try {
              FS.mkdir(d, mode);
            } catch (e) {
              if (e.errno != 20)
                throw e;
            }
          }
        }, mkdev: (path2, mode, dev) => {
          if (typeof dev == "undefined") {
            dev = mode;
            mode = 438;
          }
          mode |= 8192;
          return FS.mknod(path2, mode, dev);
        }, symlink: (oldpath, newpath) => {
          if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44);
          }
          var lookup = FS.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var newname = PATH.basename(newpath);
          var errCode = FS.mayCreate(parent, newname);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.symlink(parent, newname, oldpath);
        }, rename: (old_path, new_path) => {
          var old_dirname = PATH.dirname(old_path);
          var new_dirname = PATH.dirname(new_path);
          var old_name = PATH.basename(old_path);
          var new_name = PATH.basename(new_path);
          var lookup, old_dir, new_dir;
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
          if (!old_dir || !new_dir)
            throw new FS.ErrnoError(44);
          if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75);
          }
          var old_node = FS.lookupNode(old_dir, old_name);
          var relative = PATH_FS.relative(old_path, new_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28);
          }
          relative = PATH_FS.relative(new_path, old_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55);
          }
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (old_node === new_node) {
            return;
          }
          var isdir = FS.isDir(old_node.mode);
          var errCode = FS.mayDelete(old_dir, old_name, isdir);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10);
          }
          if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          FS.hashRemoveNode(old_node);
          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
          } catch (e) {
            throw e;
          } finally {
            FS.hashAddNode(old_node);
          }
        }, rmdir: (path2) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path2);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, true);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.rmdir(parent, name);
          FS.destroyNode(node);
        }, readdir: (path2) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          var node = lookup.node;
          if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54);
          }
          return node.node_ops.readdir(node);
        }, unlink: (path2) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var name = PATH.basename(path2);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, false);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.unlink(parent, name);
          FS.destroyNode(node);
        }, readlink: (path2) => {
          var lookup = FS.lookupPath(path2);
          var link = lookup.node;
          if (!link) {
            throw new FS.ErrnoError(44);
          }
          if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28);
          }
          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
        }, stat: (path2, dontFollow) => {
          var lookup = FS.lookupPath(path2, { follow: !dontFollow });
          var node = lookup.node;
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63);
          }
          return node.node_ops.getattr(node);
        }, lstat: (path2) => {
          return FS.stat(path2, true);
        }, chmod: (path2, mode, dontFollow) => {
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & ~4095, timestamp: Date.now() });
        }, lchmod: (path2, mode) => {
          FS.chmod(path2, mode, true);
        }, fchmod: (fd, mode) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chmod(stream.node, mode);
        }, chown: (path2, uid, gid, dontFollow) => {
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { timestamp: Date.now() });
        }, lchown: (path2, uid, gid) => {
          FS.chown(path2, uid, gid, true);
        }, fchown: (fd, uid, gid) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chown(stream.node, uid, gid);
        }, truncate: (path2, len) => {
          if (len < 0) {
            throw new FS.ErrnoError(28);
          }
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: true });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.nodePermissions(node, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
        }, ftruncate: (fd, len) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28);
          }
          FS.truncate(stream.node, len);
        }, utime: (path2, atime, mtime) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          var node = lookup.node;
          node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
        }, open: (path2, flags, mode) => {
          if (path2 === "") {
            throw new FS.ErrnoError(44);
          }
          flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
          mode = typeof mode == "undefined" ? 438 : mode;
          if (flags & 64) {
            mode = mode & 4095 | 32768;
          } else {
            mode = 0;
          }
          var node;
          if (typeof path2 == "object") {
            node = path2;
          } else {
            path2 = PATH.normalize(path2);
            try {
              var lookup = FS.lookupPath(path2, { follow: !(flags & 131072) });
              node = lookup.node;
            } catch (e) {
            }
          }
          var created = false;
          if (flags & 64) {
            if (node) {
              if (flags & 128) {
                throw new FS.ErrnoError(20);
              }
            } else {
              node = FS.mknod(path2, mode, 0);
              created = true;
            }
          }
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (FS.isChrdev(node.mode)) {
            flags &= ~512;
          }
          if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
          if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          if (flags & 512 && !created) {
            FS.truncate(node, 0);
          }
          flags &= ~(128 | 512 | 131072);
          var stream = FS.createStream({ node, path: FS.getPath(node), flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false });
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
          if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles)
              FS.readFiles = {};
            if (!(path2 in FS.readFiles)) {
              FS.readFiles[path2] = 1;
            }
          }
          return stream;
        }, close: (stream) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (stream.getdents)
            stream.getdents = null;
          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(stream.fd);
          }
          stream.fd = null;
        }, isClosed: (stream) => {
          return stream.fd === null;
        }, llseek: (stream, offset, whence) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70);
          }
          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28);
          }
          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        }, read: (stream, buffer, offset, length, position) => {
          offset >>>= 0;
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          if (!seeking)
            stream.position += bytesRead;
          return bytesRead;
        }, write: (stream, buffer, offset, length, position, canOwn) => {
          offset >>>= 0;
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28);
          }
          if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          if (!seeking)
            stream.position += bytesWritten;
          return bytesWritten;
        }, allocate: (stream, offset, length) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138);
          }
          stream.stream_ops.allocate(stream, offset, length);
        }, mmap: (stream, length, position, prot, flags) => {
          if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2);
          }
          if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43);
          }
          return stream.stream_ops.mmap(stream, length, position, prot, flags);
        }, msync: (stream, buffer, offset, length, mmapFlags) => {
          offset >>>= 0;
          if (!stream.stream_ops.msync) {
            return 0;
          }
          return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
        }, munmap: (stream) => 0, ioctl: (stream, cmd, arg) => {
          if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59);
          }
          return stream.stream_ops.ioctl(stream, cmd, arg);
        }, readFile: (path2, opts = {}) => {
          opts.flags = opts.flags || 0;
          opts.encoding = opts.encoding || "binary";
          if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error(`Invalid encoding type "${opts.encoding}"`);
          }
          var ret;
          var stream = FS.open(path2, opts.flags);
          var stat = FS.stat(path2);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS.read(stream, buf, 0, length, 0);
          if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0);
          } else if (opts.encoding === "binary") {
            ret = buf;
          }
          FS.close(stream);
          return ret;
        }, writeFile: (path2, data, opts = {}) => {
          opts.flags = opts.flags || 577;
          var stream = FS.open(path2, opts.flags, opts.mode);
          if (typeof data == "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
          } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
          FS.close(stream);
        }, cwd: () => FS.currentPath, chdir: (path2) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          if (lookup.node === null) {
            throw new FS.ErrnoError(44);
          }
          if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54);
          }
          var errCode = FS.nodePermissions(lookup.node, "x");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          FS.currentPath = lookup.path;
        }, createDefaultDirectories: () => {
          FS.mkdir("/tmp");
          FS.mkdir("/home");
          FS.mkdir("/home/web_user");
        }, createDefaultDevices: () => {
          FS.mkdir("/dev");
          FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (stream, buffer, offset, length, pos) => length });
          FS.mkdev("/dev/null", FS.makedev(1, 3));
          TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
          TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
          FS.mkdev("/dev/tty", FS.makedev(5, 0));
          FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var randomBuffer = new Uint8Array(1024), randomLeft = 0;
          var randomByte = () => {
            if (randomLeft === 0) {
              randomLeft = randomFill(randomBuffer).byteLength;
            }
            return randomBuffer[--randomLeft];
          };
          FS.createDevice("/dev", "random", randomByte);
          FS.createDevice("/dev", "urandom", randomByte);
          FS.mkdir("/dev/shm");
          FS.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories: () => {
          FS.mkdir("/proc");
          var proc_self = FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd");
          FS.mount({ mount: () => {
            var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
            node.node_ops = { lookup: (parent, name) => {
              var fd = +name;
              var stream = FS.getStream(fd);
              if (!stream)
                throw new FS.ErrnoError(8);
              var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => stream.path } };
              ret.parent = ret;
              return ret;
            } };
            return node;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams: () => {
          if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdin");
          }
          if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdout");
          }
          if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"]);
          } else {
            FS.symlink("/dev/tty1", "/dev/stderr");
          }
          var stdin = FS.open("/dev/stdin", 0);
          var stdout = FS.open("/dev/stdout", 1);
          var stderr = FS.open("/dev/stderr", 1);
        }, ensureErrnoError: () => {
          if (FS.ErrnoError)
            return;
          FS.ErrnoError = function ErrnoError(errno, node) {
            this.name = "ErrnoError";
            this.node = node;
            this.setErrno = function(errno2) {
              this.errno = errno2;
            };
            this.setErrno(errno);
            this.message = "FS error";
          };
          FS.ErrnoError.prototype = new Error();
          FS.ErrnoError.prototype.constructor = FS.ErrnoError;
          [44].forEach((code) => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>";
          });
        }, staticInit: () => {
          FS.ensureErrnoError();
          FS.nameTable = new Array(4096);
          FS.mount(MEMFS, {}, "/");
          FS.createDefaultDirectories();
          FS.createDefaultDevices();
          FS.createSpecialDirectories();
          FS.filesystems = { "MEMFS": MEMFS };
        }, init: (input, output, error) => {
          FS.init.initialized = true;
          FS.ensureErrnoError();
          Module["stdin"] = input || Module["stdin"];
          Module["stdout"] = output || Module["stdout"];
          Module["stderr"] = error || Module["stderr"];
          FS.createStandardStreams();
        }, quit: () => {
          FS.init.initialized = false;
          for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
              continue;
            }
            FS.close(stream);
          }
        }, findObject: (path2, dontResolveLastLink) => {
          var ret = FS.analyzePath(path2, dontResolveLastLink);
          if (!ret.exists) {
            return null;
          }
          return ret.object;
        }, analyzePath: (path2, dontResolveLastLink) => {
          try {
            var lookup = FS.lookupPath(path2, { follow: !dontResolveLastLink });
            path2 = lookup.path;
          } catch (e) {
          }
          var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var lookup = FS.lookupPath(path2, { parent: true });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path2);
            lookup = FS.lookupPath(path2, { follow: !dontResolveLastLink });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/";
          } catch (e) {
            ret.error = e.errno;
          }
          return ret;
        }, createPath: (parent, path2, canRead, canWrite) => {
          parent = typeof parent == "string" ? parent : FS.getPath(parent);
          var parts = path2.split("/").reverse();
          while (parts.length) {
            var part = parts.pop();
            if (!part)
              continue;
            var current = PATH.join2(parent, part);
            try {
              FS.mkdir(current);
            } catch (e) {
            }
            parent = current;
          }
          return current;
        }, createFile: (parent, name, properties, canRead, canWrite) => {
          var path2 = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
          var mode = FS_getMode(canRead, canWrite);
          return FS.create(path2, mode);
        }, createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
          var path2 = name;
          if (parent) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            path2 = name ? PATH.join2(parent, name) : parent;
          }
          var mode = FS_getMode(canRead, canWrite);
          var node = FS.create(path2, mode);
          if (data) {
            if (typeof data == "string") {
              var arr = new Array(data.length);
              for (var i = 0, len = data.length; i < len; ++i)
                arr[i] = data.charCodeAt(i);
              data = arr;
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
          }
          return node;
        }, createDevice: (parent, name, input, output) => {
          var path2 = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
          var mode = FS_getMode(!!input, !!output);
          if (!FS.createDevice.major)
            FS.createDevice.major = 64;
          var dev = FS.makedev(FS.createDevice.major++, 0);
          FS.registerDevice(dev, { open: (stream) => {
            stream.seekable = false;
          }, close: (stream) => {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          }, read: (stream, buffer, offset, length, pos) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0)
                break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          }, write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          } });
          return FS.mkdev(path2, mode, dev);
        }, forceLoadFile: (obj) => {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
            return true;
          if (typeof XMLHttpRequest != "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else if (read_) {
            try {
              obj.contents = intArrayFromString(read_(obj.url), true);
              obj.usedBytes = obj.contents.length;
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        }, createLazyFile: (parent, name, url, canRead, canWrite) => {
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = [];
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return void 0;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          };
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          };
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing)
              chunkSize = datalength;
            var doXHR = (from, to) => {
              if (from > to)
                throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength - 1)
                throw new Error("only " + datalength + " bytes available! programmer error!");
              var xhr2 = new XMLHttpRequest();
              xhr2.open("GET", url, false);
              if (datalength !== chunkSize)
                xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
              xhr2.responseType = "arraybuffer";
              if (xhr2.overrideMimeType) {
                xhr2.overrideMimeType("text/plain; charset=x-user-defined");
              }
              xhr2.send(null);
              if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
              if (xhr2.response !== void 0) {
                return new Uint8Array(xhr2.response || []);
              }
              return intArrayFromString(xhr2.responseText || "", true);
            };
            var lazyArray2 = this;
            lazyArray2.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);
              if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                lazyArray2.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                throw new Error("doXHR failed!");
              return lazyArray2.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          };
          if (typeof XMLHttpRequest != "undefined") {
            if (!ENVIRONMENT_IS_WORKER)
              throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array();
            Object.defineProperties(lazyArray, { length: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            } }, chunkSize: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            } } });
            var properties = { isDevice: false, contents: lazyArray };
          } else {
            var properties = { isDevice: false, url };
          }
          var node = FS.createFile(parent, name, properties, canRead, canWrite);
          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }
          Object.defineProperties(node, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var stream_ops = {};
          var keys = Object.keys(node.stream_ops);
          keys.forEach((key) => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
              FS.forceLoadFile(node);
              return fn.apply(null, arguments);
            };
          });
          function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length)
              return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents[position + i];
              }
            } else {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents.get(position + i);
              }
            }
            return size;
          }
          stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position);
          };
          stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            writeChunks(stream, HEAP8, ptr, length, position);
            return { ptr, allocated: true };
          };
          node.stream_ops = stream_ops;
          return node;
        } };
        function UTF8ToString(ptr, maxBytesToRead) {
          ptr >>>= 0;
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        var SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt: function(dirfd, path2, allowEmpty) {
          if (PATH.isAbs(path2)) {
            return path2;
          }
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = SYSCALLS.getStreamFromFD(dirfd);
            dir = dirstream.path;
          }
          if (path2.length == 0) {
            if (!allowEmpty) {
              throw new FS.ErrnoError(44);
            }
            return dir;
          }
          return PATH.join2(dir, path2);
        }, doStat: function(func, path2, buf) {
          try {
            var stat = func(path2);
          } catch (e) {
            if (e && e.node && PATH.normalize(path2) !== PATH.normalize(FS.getPath(e.node))) {
              return -54;
            }
            throw e;
          }
          HEAP32[buf >>> 2] = stat.dev;
          HEAP32[buf + 8 >>> 2] = stat.ino;
          HEAP32[buf + 12 >>> 2] = stat.mode;
          HEAPU32[buf + 16 >>> 2] = stat.nlink;
          HEAP32[buf + 20 >>> 2] = stat.uid;
          HEAP32[buf + 24 >>> 2] = stat.gid;
          HEAP32[buf + 28 >>> 2] = stat.rdev;
          tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >>> 2] = tempI64[0], HEAP32[buf + 44 >>> 2] = tempI64[1];
          HEAP32[buf + 48 >>> 2] = 4096;
          HEAP32[buf + 52 >>> 2] = stat.blocks;
          var atime = stat.atime.getTime();
          var mtime = stat.mtime.getTime();
          var ctime = stat.ctime.getTime();
          tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >>> 2] = tempI64[0], HEAP32[buf + 60 >>> 2] = tempI64[1];
          HEAPU32[buf + 64 >>> 2] = atime % 1e3 * 1e3;
          tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >>> 2] = tempI64[0], HEAP32[buf + 76 >>> 2] = tempI64[1];
          HEAPU32[buf + 80 >>> 2] = mtime % 1e3 * 1e3;
          tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >>> 2] = tempI64[0], HEAP32[buf + 92 >>> 2] = tempI64[1];
          HEAPU32[buf + 96 >>> 2] = ctime % 1e3 * 1e3;
          tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >>> 2] = tempI64[0], HEAP32[buf + 108 >>> 2] = tempI64[1];
          return 0;
        }, doMsync: function(addr, stream, len, flags, offset) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (flags & 2) {
            return 0;
          }
          addr >>>= 0;
          var buffer = HEAPU8.slice(addr, addr + len);
          FS.msync(stream, buffer, offset, len, flags);
        }, varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >>> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        }, getStreamFromFD: function(fd) {
          var stream = FS.getStream(fd);
          if (!stream)
            throw new FS.ErrnoError(8);
          return stream;
        } };
        function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
          try {
            var total = 0;
            var srcReadLow = readfds ? HEAP32[readfds >>> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >>> 2] : 0;
            var srcWriteLow = writefds ? HEAP32[writefds >>> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >>> 2] : 0;
            var srcExceptLow = exceptfds ? HEAP32[exceptfds >>> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0;
            var dstReadLow = 0, dstReadHigh = 0;
            var dstWriteLow = 0, dstWriteHigh = 0;
            var dstExceptLow = 0, dstExceptHigh = 0;
            var allLow = (readfds ? HEAP32[readfds >>> 2] : 0) | (writefds ? HEAP32[writefds >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds >>> 2] : 0);
            var allHigh = (readfds ? HEAP32[readfds + 4 >>> 2] : 0) | (writefds ? HEAP32[writefds + 4 >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0);
            var check = function(fd2, low, high, val) {
              return fd2 < 32 ? low & val : high & val;
            };
            for (var fd = 0; fd < nfds; fd++) {
              var mask = 1 << fd % 32;
              if (!check(fd, allLow, allHigh, mask)) {
                continue;
              }
              var stream = SYSCALLS.getStreamFromFD(fd);
              var flags = SYSCALLS.DEFAULT_POLLMASK;
              if (stream.stream_ops.poll) {
                flags = stream.stream_ops.poll(stream);
              }
              if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
                fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
                total++;
              }
              if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
                fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
                total++;
              }
              if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
                fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
                total++;
              }
            }
            if (readfds) {
              HEAP32[readfds >>> 2] = dstReadLow;
              HEAP32[readfds + 4 >>> 2] = dstReadHigh;
            }
            if (writefds) {
              HEAP32[writefds >>> 2] = dstWriteLow;
              HEAP32[writefds + 4 >>> 2] = dstWriteHigh;
            }
            if (exceptfds) {
              HEAP32[exceptfds >>> 2] = dstExceptLow;
              HEAP32[exceptfds + 4 >>> 2] = dstExceptHigh;
            }
            return total;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        var SOCKFS = { mount: function(mount) {
          Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
          Module["websocket"]._callbacks = {};
          Module["websocket"]["on"] = function(event, callback) {
            if ("function" === typeof callback) {
              this._callbacks[event] = callback;
            }
            return this;
          };
          Module["websocket"].emit = function(event, param) {
            if ("function" === typeof this._callbacks[event]) {
              this._callbacks[event].call(this, param);
            }
          };
          return FS.createNode(null, "/", 16384 | 511, 0);
        }, createSocket: function(family, type, protocol) {
          type &= ~526336;
          var streaming = type == 1;
          if (streaming && protocol && protocol != 6) {
            throw new FS.ErrnoError(66);
          }
          var sock = { family, type, protocol, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops };
          var name = SOCKFS.nextname();
          var node = FS.createNode(SOCKFS.root, name, 49152, 0);
          node.sock = sock;
          var stream = FS.createStream({ path: name, node, flags: 2, seekable: false, stream_ops: SOCKFS.stream_ops });
          sock.stream = stream;
          return sock;
        }, getSocket: function(fd) {
          var stream = FS.getStream(fd);
          if (!stream || !FS.isSocket(stream.node.mode)) {
            return null;
          }
          return stream.node.sock;
        }, stream_ops: { poll: function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        }, ioctl: function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        }, read: function(stream, buffer, offset, length, position) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        }, write: function(stream, buffer, offset, length, position) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        }, close: function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        } }, nextname: function() {
          if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0;
          }
          return "socket[" + SOCKFS.nextname.current++ + "]";
        }, websocket_sock_ops: { createPeer: function(sock, addr, port) {
          var ws;
          if (typeof addr == "object") {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            } else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            try {
              var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
              var url = "ws:#".replace("#", "//");
              if (runtimeConfig) {
                if ("string" === typeof Module["websocket"]["url"]) {
                  url = Module["websocket"]["url"];
                }
              }
              if (url === "ws://" || url === "wss://") {
                var parts = addr.split("/");
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
              }
              var subProtocols = "binary";
              if (runtimeConfig) {
                if ("string" === typeof Module["websocket"]["subprotocol"]) {
                  subProtocols = Module["websocket"]["subprotocol"];
                }
              }
              var opts = void 0;
              if (subProtocols !== "null") {
                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                opts = subProtocols;
              }
              if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                subProtocols = "null";
                opts = void 0;
              }
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = require_ws();
              } else {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = "arraybuffer";
            } catch (e) {
              throw new FS.ErrnoError(23);
            }
          }
          var peer = { addr, port, socket: ws, dgram_send_queue: [] };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          if (sock.type === 2 && typeof sock.sport != "undefined") {
            peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]));
          }
          return peer;
        }, getPeer: function(sock, addr, port) {
          return sock.peers[addr + ":" + port];
        }, addPeer: function(sock, peer) {
          sock.peers[peer.addr + ":" + peer.port] = peer;
        }, removePeer: function(sock, peer) {
          delete sock.peers[peer.addr + ":" + peer.port];
        }, handlePeerEvents: function(sock, peer) {
          var first = true;
          var handleOpen = function() {
            Module["websocket"].emit("open", sock.stream.fd);
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            if (typeof data == "string") {
              var encoder3 = new TextEncoder();
              data = encoder3.encode(data);
            } else {
              assert(data.byteLength !== void 0);
              if (data.byteLength == 0) {
                return;
              }
              data = new Uint8Array(data);
            }
            var wasfirst = first;
            first = false;
            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
              var newport = data[8] << 8 | data[9];
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data });
            Module["websocket"].emit("message", sock.stream.fd);
          }
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on("open", handleOpen);
            peer.socket.on("message", function(data, isBinary) {
              if (!isBinary) {
                return;
              }
              handleMessage(new Uint8Array(data).buffer);
            });
            peer.socket.on("close", function() {
              Module["websocket"].emit("close", sock.stream.fd);
            });
            peer.socket.on("error", function(error) {
              sock.error = 14;
              Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module["websocket"].emit("close", sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              sock.error = 14;
              Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        }, poll: function(sock) {
          if (sock.type === 1 && sock.server) {
            return sock.pending.length ? 64 | 1 : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
          if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 64 | 1;
          }
          if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
            mask |= 4;
          }
          if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 16;
          }
          return mask;
        }, ioctl: function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[arg >>> 2] = bytes;
              return 0;
            default:
              return 28;
          }
        }, close: function(sock) {
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        }, bind: function(sock, addr, port) {
          if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
            throw new FS.ErrnoError(28);
          }
          sock.saddr = addr;
          sock.sport = port;
          if (sock.type === 2) {
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e.name === "ErrnoError"))
                throw e;
              if (e.errno !== 138)
                throw e;
            }
          }
        }, connect: function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(138);
          }
          if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(7);
              } else {
                throw new FS.ErrnoError(30);
              }
            }
          }
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          throw new FS.ErrnoError(26);
        }, listen: function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(138);
          }
          if (sock.server) {
            throw new FS.ErrnoError(28);
          }
          var WebSocketServer = require_ws().Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({ host, port: sock.sport });
          Module["websocket"].emit("listen", sock.stream.fd);
          sock.server.on("connection", function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              sock.pending.push(newsock);
              Module["websocket"].emit("connection", newsock.stream.fd);
            } else {
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module["websocket"].emit("connection", sock.stream.fd);
            }
          });
          sock.server.on("close", function() {
            Module["websocket"].emit("close", sock.stream.fd);
            sock.server = null;
          });
          sock.server.on("error", function(error) {
            sock.error = 23;
            Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        }, accept: function(listensock) {
          if (!listensock.server || !listensock.pending.length) {
            throw new FS.ErrnoError(28);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        }, getname: function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === void 0 || sock.dport === void 0) {
              throw new FS.ErrnoError(53);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr, port };
        }, sendmsg: function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            if (addr === void 0 || port === void 0) {
              addr = sock.daddr;
              port = sock.dport;
            }
            if (addr === void 0 || port === void 0) {
              throw new FS.ErrnoError(17);
            }
          } else {
            addr = sock.daddr;
            port = sock.dport;
          }
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(53);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
          var data;
          data = buffer.slice(offset, offset + length);
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(28);
          }
        }, recvmsg: function(sock, length) {
          if (sock.type === 1 && sock.server) {
            throw new FS.ErrnoError(53);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                throw new FS.ErrnoError(53);
              }
              if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                return null;
              }
              throw new FS.ErrnoError(6);
            }
            throw new FS.ErrnoError(6);
          }
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = { buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead), addr: queued.addr, port: queued.port };
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        } } };
        function getSocketFromFD(fd) {
          var socket = SOCKFS.getSocket(fd);
          if (!socket)
            throw new FS.ErrnoError(8);
          return socket;
        }
        function setErrNo(value) {
          HEAP32[___errno_location() >>> 2] = value;
          return value;
        }
        function inetNtop4(addr) {
          return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
        }
        function inetNtop6(ints) {
          var str = "";
          var word = 0;
          var longest = 0;
          var lastzero = 0;
          var zstart = 0;
          var len = 0;
          var i = 0;
          var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
          var hasipv4 = true;
          var v4part = "";
          for (i = 0; i < 5; i++) {
            if (parts[i] !== 0) {
              hasipv4 = false;
              break;
            }
          }
          if (hasipv4) {
            v4part = inetNtop4(parts[6] | parts[7] << 16);
            if (parts[5] === -1) {
              str = "::ffff:";
              str += v4part;
              return str;
            }
            if (parts[5] === 0) {
              str = "::";
              if (v4part === "0.0.0.0")
                v4part = "";
              if (v4part === "0.0.0.1")
                v4part = "1";
              str += v4part;
              return str;
            }
          }
          for (word = 0; word < 8; word++) {
            if (parts[word] === 0) {
              if (word - lastzero > 1) {
                len = 0;
              }
              lastzero = word;
              len++;
            }
            if (len > longest) {
              longest = len;
              zstart = word - longest + 1;
            }
          }
          for (word = 0; word < 8; word++) {
            if (longest > 1) {
              if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                if (word === zstart) {
                  str += ":";
                  if (zstart === 0)
                    str += ":";
                }
                continue;
              }
            }
            str += Number(_ntohs(parts[word] & 65535)).toString(16);
            str += word < 7 ? ":" : "";
          }
          return str;
        }
        function readSockaddr(sa, salen) {
          var family = HEAP16[sa >>> 1];
          var port = _ntohs(HEAPU16[sa + 2 >>> 1]);
          var addr;
          switch (family) {
            case 2:
              if (salen !== 16) {
                return { errno: 28 };
              }
              addr = HEAP32[sa + 4 >>> 2];
              addr = inetNtop4(addr);
              break;
            case 10:
              if (salen !== 28) {
                return { errno: 28 };
              }
              addr = [HEAP32[sa + 8 >>> 2], HEAP32[sa + 12 >>> 2], HEAP32[sa + 16 >>> 2], HEAP32[sa + 20 >>> 2]];
              addr = inetNtop6(addr);
              break;
            default:
              return { errno: 5 };
          }
          return { family, addr, port };
        }
        function inetPton4(str) {
          var b = str.split(".");
          for (var i = 0; i < 4; i++) {
            var tmp = Number(b[i]);
            if (isNaN(tmp))
              return null;
            b[i] = tmp;
          }
          return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
        }
        function jstoi_q(str) {
          return parseInt(str);
        }
        function inetPton6(str) {
          var words;
          var w, offset, z;
          var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
          var parts = [];
          if (!valid6regx.test(str)) {
            return null;
          }
          if (str === "::") {
            return [0, 0, 0, 0, 0, 0, 0, 0];
          }
          if (str.startsWith("::")) {
            str = str.replace("::", "Z:");
          } else {
            str = str.replace("::", ":Z:");
          }
          if (str.indexOf(".") > 0) {
            str = str.replace(new RegExp("[.]", "g"), ":");
            words = str.split(":");
            words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
            words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
            words = words.slice(0, words.length - 2);
          } else {
            words = str.split(":");
          }
          offset = 0;
          z = 0;
          for (w = 0; w < words.length; w++) {
            if (typeof words[w] == "string") {
              if (words[w] === "Z") {
                for (z = 0; z < 8 - words.length + 1; z++) {
                  parts[w + z] = 0;
                }
                offset = z - 1;
              } else {
                parts[w + offset] = _htons(parseInt(words[w], 16));
              }
            } else {
              parts[w + offset] = words[w];
            }
          }
          return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
        }
        var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
          var res = inetPton4(name);
          if (res !== null) {
            return name;
          }
          res = inetPton6(name);
          if (res !== null) {
            return name;
          }
          var addr;
          if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name];
          } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, "exceeded max address mappings of 65535");
            addr = "172.29." + (id & 255) + "." + (id & 65280);
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr;
          }
          return addr;
        }, lookup_addr: function(addr) {
          if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr];
          }
          return null;
        } };
        function getSocketAddress(addrp, addrlen, allowNull) {
          if (allowNull && addrp === 0)
            return null;
          var info = readSockaddr(addrp, addrlen);
          if (info.errno)
            throw new FS.ErrnoError(info.errno);
          info.addr = DNS.lookup_addr(info.addr) || info.addr;
          return info;
        }
        function ___syscall_bind(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            var info = getSocketAddress(addr, addrlen);
            sock.sock_ops.bind(sock, info.addr, info.port);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            var info = getSocketAddress(addr, addrlen);
            sock.sock_ops.connect(sock, info.addr, info.port);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_faccessat(dirfd, path2, amode, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            if (amode & ~7) {
              return -28;
            }
            var lookup = FS.lookupPath(path2, { follow: true });
            var node = lookup.node;
            if (!node) {
              return -44;
            }
            var perms = "";
            if (amode & 4)
              perms += "r";
            if (amode & 2)
              perms += "w";
            if (amode & 1)
              perms += "x";
            if (perms && FS.nodePermissions(node, perms)) {
              return -2;
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_fcntl64(fd, cmd, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (cmd) {
              case 0: {
                var arg = SYSCALLS.get();
                if (arg < 0) {
                  return -28;
                }
                var newStream;
                newStream = FS.createStream(stream, arg);
                return newStream.fd;
              }
              case 1:
              case 2:
                return 0;
              case 3:
                return stream.flags;
              case 4: {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0;
              }
              case 5: {
                var arg = SYSCALLS.get();
                var offset = 0;
                HEAP16[arg + offset >>> 1] = 2;
                return 0;
              }
              case 6:
              case 7:
                return 0;
              case 16:
              case 8:
                return -28;
              case 9:
                setErrNo(28);
                return -1;
              default: {
                return -28;
              }
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_fstat64(fd, buf) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            return SYSCALLS.doStat(FS.stat, stream.path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function convertI32PairToI53Checked(lo, hi) {
          return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
        }
        function ___syscall_ftruncate64(fd, length_low, length_high) {
          try {
            var length = convertI32PairToI53Checked(length_low, length_high);
            if (isNaN(length))
              return -61;
            FS.ftruncate(fd, length);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function ___syscall_getdents64(fd, dirp, count) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            if (!stream.getdents) {
              stream.getdents = FS.readdir(stream.path);
            }
            var struct_size = 280;
            var pos = 0;
            var off = FS.llseek(stream, 0, 1);
            var idx = Math.floor(off / struct_size);
            while (idx < stream.getdents.length && pos + struct_size <= count) {
              var id;
              var type;
              var name = stream.getdents[idx];
              if (name === ".") {
                id = stream.node.id;
                type = 4;
              } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, { parent: true });
                id = lookup.node.id;
                type = 4;
              } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
              }
              tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >>> 2] = tempI64[0], HEAP32[dirp + pos + 4 >>> 2] = tempI64[1];
              tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >>> 2] = tempI64[0], HEAP32[dirp + pos + 12 >>> 2] = tempI64[1];
              HEAP16[dirp + pos + 16 >>> 1] = 280;
              HEAP8[dirp + pos + 18 >>> 0] = type;
              stringToUTF8(name, dirp + pos + 19, 256);
              pos += struct_size;
              idx += 1;
            }
            FS.llseek(stream, idx * struct_size, 0);
            return pos;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function writeSockaddr(sa, family, addr, port, addrlen) {
          switch (family) {
            case 2:
              addr = inetPton4(addr);
              zeroMemory(sa, 16);
              if (addrlen) {
                HEAP32[addrlen >>> 2] = 16;
              }
              HEAP16[sa >>> 1] = family;
              HEAP32[sa + 4 >>> 2] = addr;
              HEAP16[sa + 2 >>> 1] = _htons(port);
              break;
            case 10:
              addr = inetPton6(addr);
              zeroMemory(sa, 28);
              if (addrlen) {
                HEAP32[addrlen >>> 2] = 28;
              }
              HEAP32[sa >>> 2] = family;
              HEAP32[sa + 8 >>> 2] = addr[0];
              HEAP32[sa + 12 >>> 2] = addr[1];
              HEAP32[sa + 16 >>> 2] = addr[2];
              HEAP32[sa + 20 >>> 2] = addr[3];
              HEAP16[sa + 2 >>> 1] = _htons(port);
              break;
            default:
              return 5;
          }
          return 0;
        }
        function ___syscall_getpeername(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            if (!sock.daddr) {
              return -53;
            }
            var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_getsockopt(fd, level, optname, optval, optlen, d1) {
          try {
            var sock = getSocketFromFD(fd);
            if (level === 1) {
              if (optname === 4) {
                HEAP32[optval >>> 2] = sock.error;
                HEAP32[optlen >>> 2] = 4;
                sock.error = null;
                return 0;
              }
            }
            return -50;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_ioctl(fd, op, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (op) {
              case 21509:
              case 21505: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21510:
              case 21511:
              case 21512:
              case 21506:
              case 21507:
              case 21508: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21519: {
                if (!stream.tty)
                  return -59;
                var argp = SYSCALLS.get();
                HEAP32[argp >>> 2] = 0;
                return 0;
              }
              case 21520: {
                if (!stream.tty)
                  return -59;
                return -28;
              }
              case 21531: {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp);
              }
              case 21523: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21524: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              default:
                return -28;
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_lstat64(path2, buf) {
          try {
            path2 = SYSCALLS.getStr(path2);
            return SYSCALLS.doStat(FS.lstat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_mkdirat(dirfd, path2, mode) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            path2 = PATH.normalize(path2);
            if (path2[path2.length - 1] === "/")
              path2 = path2.substr(0, path2.length - 1);
            FS.mkdir(path2, mode, 0);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_newfstatat(dirfd, path2, buf, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            var nofollow = flags & 256;
            var allowEmpty = flags & 4096;
            flags = flags & ~6400;
            path2 = SYSCALLS.calculateAt(dirfd, path2, allowEmpty);
            return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_openat(dirfd, path2, flags, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            var mode = varargs ? SYSCALLS.get() : 0;
            return FS.open(path2, flags, mode).fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
          try {
            var sock = getSocketFromFD(fd);
            var msg = sock.sock_ops.recvmsg(sock, len);
            if (!msg)
              return 0;
            if (addr) {
              var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
            }
            HEAPU8.set(msg.buffer, buf >>> 0);
            return msg.buffer.byteLength;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
          try {
            oldpath = SYSCALLS.getStr(oldpath);
            newpath = SYSCALLS.getStr(newpath);
            oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
            newpath = SYSCALLS.calculateAt(newdirfd, newpath);
            FS.rename(oldpath, newpath);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_rmdir(path2) {
          try {
            path2 = SYSCALLS.getStr(path2);
            FS.rmdir(path2);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
          try {
            var sock = getSocketFromFD(fd);
            var dest = getSocketAddress(addr, addr_len, true);
            if (!dest) {
              return FS.write(sock.stream, HEAP8, message, length);
            }
            return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_socket(domain, type, protocol) {
          try {
            var sock = SOCKFS.createSocket(domain, type, protocol);
            return sock.stream.fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_stat64(path2, buf) {
          try {
            path2 = SYSCALLS.getStr(path2);
            return SYSCALLS.doStat(FS.stat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_unlinkat(dirfd, path2, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            if (flags === 0) {
              FS.unlink(path2);
            } else if (flags === 512) {
              FS.rmdir(path2);
            } else {
              abort("Invalid flags passed to unlinkat");
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        var nowIsMonotonic = true;
        function __emscripten_get_now_is_monotonic() {
          return nowIsMonotonic;
        }
        function readI53FromI64(ptr) {
          return HEAPU32[ptr >>> 2] + HEAP32[ptr + 4 >>> 2] * 4294967296;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        function ydayFromDate(date) {
          var leap = isLeapYear(date.getFullYear());
          var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
          var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
          return yday;
        }
        function __localtime_js(time, tmPtr) {
          var date = new Date(readI53FromI64(time) * 1e3);
          HEAP32[tmPtr >>> 2] = date.getSeconds();
          HEAP32[tmPtr + 4 >>> 2] = date.getMinutes();
          HEAP32[tmPtr + 8 >>> 2] = date.getHours();
          HEAP32[tmPtr + 12 >>> 2] = date.getDate();
          HEAP32[tmPtr + 16 >>> 2] = date.getMonth();
          HEAP32[tmPtr + 20 >>> 2] = date.getFullYear() - 1900;
          HEAP32[tmPtr + 24 >>> 2] = date.getDay();
          var yday = ydayFromDate(date) | 0;
          HEAP32[tmPtr + 28 >>> 2] = yday;
          HEAP32[tmPtr + 36 >>> 2] = -(date.getTimezoneOffset() * 60);
          var start = new Date(date.getFullYear(), 0, 1);
          var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
          var winterOffset = start.getTimezoneOffset();
          var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
          HEAP32[tmPtr + 32 >>> 2] = dst;
        }
        function stringToNewUTF8(str) {
          var size = lengthBytesUTF8(str) + 1;
          var ret = _malloc(size);
          if (ret)
            stringToUTF8(str, ret, size);
          return ret;
        }
        function __tzset_js(timezone, daylight, tzname) {
          var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
          var winter = new Date(currentYear, 0, 1);
          var summer = new Date(currentYear, 6, 1);
          var winterOffset = winter.getTimezoneOffset();
          var summerOffset = summer.getTimezoneOffset();
          var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
          HEAPU32[timezone >>> 2] = stdTimezoneOffset * 60;
          HEAP32[daylight >>> 2] = Number(winterOffset != summerOffset);
          function extractZone(date) {
            var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
            return match ? match[1] : "GMT";
          }
          var winterName = extractZone(winter);
          var summerName = extractZone(summer);
          var winterNamePtr = stringToNewUTF8(winterName);
          var summerNamePtr = stringToNewUTF8(summerName);
          if (summerOffset < winterOffset) {
            HEAPU32[tzname >>> 2] = winterNamePtr;
            HEAPU32[tzname + 4 >>> 2] = summerNamePtr;
          } else {
            HEAPU32[tzname >>> 2] = summerNamePtr;
            HEAPU32[tzname + 4 >>> 2] = winterNamePtr;
          }
        }
        function _abort() {
          abort("");
        }
        function _dlopen(filename, flags) {
          abort(dlopenMissingError);
        }
        function _duckdb_web_fs_directory_create(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_exists(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_list_files(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_remove(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_file_close(fileId) {
          return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
        }
        function _duckdb_web_fs_file_exists(path2, pathLen, url, urlLen) {
          return globalThis.DUCKDB_RUNTIME.checkFile(Module, path2, pathLen, url, urlLen);
        }
        function _duckdb_web_fs_file_get_last_modified_time(fileId) {
          return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
        }
        function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
          return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
        }
        function _duckdb_web_fs_file_open(fileId, flags) {
          return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId, flags);
        }
        function _duckdb_web_fs_file_read(fileId, buf, size, location) {
          return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
        }
        function _duckdb_web_fs_file_truncate(fileId, newSize) {
          return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
        }
        function _duckdb_web_fs_file_write(fileId, buf, size, location) {
          return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
        }
        function _duckdb_web_fs_get_default_data_protocol(Module2) {
          return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(Module2);
        }
        function _duckdb_web_fs_glob(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.glob(Module, path2, pathLen);
        }
        function _duckdb_web_test_platform_feature(feature) {
          return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
        }
        function _duckdb_web_udf_scalar_call(funcId, descPtr, descSize, ptrsPtr, ptrsSize, response) {
          return globalThis.DUCKDB_RUNTIME.callScalarUDF(Module, funcId, descPtr, descSize, ptrsPtr, ptrsSize, response);
        }
        function _emscripten_date_now() {
          return Date.now();
        }
        function getHeapMax() {
          return 4294901760;
        }
        function _emscripten_get_heap_max() {
          return getHeapMax();
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_NODE) {
          global.performance = require("perf_hooks").performance;
        }
        _emscripten_get_now = () => performance.now();
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          var pages = size - b.byteLength + 65535 >>> 16;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
            for (var x in ENV) {
              if (ENV[x] === void 0)
                delete env[x];
              else
                env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(`${x}=${env[x]}`);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function stringToAscii(str, buffer) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer++ >>> 0] = str.charCodeAt(i);
          }
          HEAP8[buffer >>> 0] = 0;
        }
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function(string, i) {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >>> 2] = ptr;
            stringToAscii(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >>> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function(string) {
            bufSize += string.length + 1;
          });
          HEAPU32[penviron_buf_size >>> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_fdstat_get(fd, pbuf) {
          try {
            var rightsBase = 0;
            var rightsInheriting = 0;
            var flags = 0;
            {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
            }
            HEAP8[pbuf >>> 0] = type;
            HEAP16[pbuf + 2 >>> 1] = flags;
            tempI64 = [rightsBase >>> 0, (tempDouble = rightsBase, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 8 >>> 2] = tempI64[0], HEAP32[pbuf + 12 >>> 2] = tempI64[1];
            tempI64 = [rightsInheriting >>> 0, (tempDouble = rightsInheriting, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 16 >>> 2] = tempI64[0], HEAP32[pbuf + 20 >>> 2] = tempI64[1];
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function doReadv(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >>> 2];
            var len = HEAPU32[iov + 4 >>> 2];
            iov += 8;
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (curr < len)
              break;
            if (typeof offset !== "undefined") {
              offset += curr;
            }
          }
          return ret;
        }
        function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt, offset);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function doWritev(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >>> 2];
            var len = HEAPU32[iov + 4 >>> 2];
            iov += 8;
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (typeof offset !== "undefined") {
              offset += curr;
            }
          }
          return ret;
        }
        function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt, offset);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.llseek(stream, offset, whence);
            tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >>> 2] = tempI64[0], HEAP32[newOffset + 4 >>> 2] = tempI64[1];
            if (stream.getdents && offset === 0 && whence === 0)
              stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_sync(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            if (stream.stream_ops && stream.stream_ops.fsync) {
              return stream.stream_ops.fsync(stream);
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _getaddrinfo(node, service, hint, out2) {
          var addr = 0;
          var port = 0;
          var flags = 0;
          var family = 0;
          var type = 0;
          var proto = 0;
          var ai;
          function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
            var sa, salen, ai2;
            var errno;
            salen = family2 === 10 ? 28 : 16;
            addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
            sa = _malloc(salen);
            errno = writeSockaddr(sa, family2, addr2, port2);
            assert(!errno);
            ai2 = _malloc(32);
            HEAP32[ai2 + 4 >>> 2] = family2;
            HEAP32[ai2 + 8 >>> 2] = type2;
            HEAP32[ai2 + 12 >>> 2] = proto2;
            HEAPU32[ai2 + 24 >>> 2] = canon;
            HEAPU32[ai2 + 20 >>> 2] = sa;
            if (family2 === 10) {
              HEAP32[ai2 + 16 >>> 2] = 28;
            } else {
              HEAP32[ai2 + 16 >>> 2] = 16;
            }
            HEAP32[ai2 + 28 >>> 2] = 0;
            return ai2;
          }
          if (hint) {
            flags = HEAP32[hint >>> 2];
            family = HEAP32[hint + 4 >>> 2];
            type = HEAP32[hint + 8 >>> 2];
            proto = HEAP32[hint + 12 >>> 2];
          }
          if (type && !proto) {
            proto = type === 2 ? 17 : 6;
          }
          if (!type && proto) {
            type = proto === 17 ? 2 : 1;
          }
          if (proto === 0) {
            proto = 6;
          }
          if (type === 0) {
            type = 1;
          }
          if (!node && !service) {
            return -2;
          }
          if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
            return -1;
          }
          if (hint !== 0 && HEAP32[hint >>> 2] & 2 && !node) {
            return -1;
          }
          if (flags & 32) {
            return -2;
          }
          if (type !== 0 && type !== 1 && type !== 2) {
            return -7;
          }
          if (family !== 0 && family !== 2 && family !== 10) {
            return -6;
          }
          if (service) {
            service = UTF8ToString(service);
            port = parseInt(service, 10);
            if (isNaN(port)) {
              if (flags & 1024) {
                return -2;
              }
              return -8;
            }
          }
          if (!node) {
            if (family === 0) {
              family = 2;
            }
            if ((flags & 1) === 0) {
              if (family === 2) {
                addr = _htonl(2130706433);
              } else {
                addr = [0, 0, 0, 1];
              }
            }
            ai = allocaddrinfo(family, type, proto, null, addr, port);
            HEAPU32[out2 >>> 2] = ai;
            return 0;
          }
          node = UTF8ToString(node);
          addr = inetPton4(node);
          if (addr !== null) {
            if (family === 0 || family === 2) {
              family = 2;
            } else if (family === 10 && flags & 8) {
              addr = [0, 0, _htonl(65535), addr];
              family = 10;
            } else {
              return -2;
            }
          } else {
            addr = inetPton6(node);
            if (addr !== null) {
              if (family === 0 || family === 10) {
                family = 10;
              } else {
                return -2;
              }
            }
          }
          if (addr != null) {
            ai = allocaddrinfo(family, type, proto, node, addr, port);
            HEAPU32[out2 >>> 2] = ai;
            return 0;
          }
          if (flags & 4) {
            return -2;
          }
          node = DNS.lookup_name(node);
          addr = inetPton4(node);
          if (family === 0) {
            family = 2;
          } else if (family === 10) {
            addr = [0, 0, _htonl(65535), addr];
          }
          ai = allocaddrinfo(family, type, proto, null, addr, port);
          HEAPU32[out2 >>> 2] = ai;
          return 0;
        }
        function _getentropy(buffer, size) {
          randomFill(HEAPU8.subarray(buffer >>> 0, buffer + size >>> 0));
          return 0;
        }
        function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
          var info = readSockaddr(sa, salen);
          if (info.errno) {
            return -6;
          }
          var port = info.port;
          var addr = info.addr;
          var overflowed = false;
          if (node && nodelen) {
            var lookup;
            if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
              if (flags & 8) {
                return -2;
              }
            } else {
              addr = lookup;
            }
            var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
            if (numBytesWrittenExclNull + 1 >= nodelen) {
              overflowed = true;
            }
          }
          if (serv && servlen) {
            port = "" + port;
            var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
            if (numBytesWrittenExclNull + 1 >= servlen) {
              overflowed = true;
            }
          }
          if (overflowed) {
            return -12;
          }
          return 0;
        }
        function arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {
          }
          return sum;
        }
        var MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function writeArrayToMemory(array, buffer) {
          HEAP8.set(array, buffer >>> 0);
        }
        function _strftime(s, maxsize, format, tm) {
          var tm_zone = HEAP32[tm + 40 >>> 2];
          var date = { tm_sec: HEAP32[tm >>> 2], tm_min: HEAP32[tm + 4 >>> 2], tm_hour: HEAP32[tm + 8 >>> 2], tm_mday: HEAP32[tm + 12 >>> 2], tm_mon: HEAP32[tm + 16 >>> 2], tm_year: HEAP32[tm + 20 >>> 2], tm_wday: HEAP32[tm + 24 >>> 2], tm_yday: HEAP32[tm + 28 >>> 2], tm_isdst: HEAP32[tm + 32 >>> 2], tm_gmtoff: HEAP32[tm + 36 >>> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
          var pattern = UTF8ToString(format);
          var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
          }
          var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          function leadingSomething(value, digits, character) {
            var str = typeof value == "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear() - 1;
          }
          var EXPANSION_RULES_2 = { "%a": function(date2) {
            return WEEKDAYS[date2.tm_wday].substring(0, 3);
          }, "%A": function(date2) {
            return WEEKDAYS[date2.tm_wday];
          }, "%b": function(date2) {
            return MONTHS[date2.tm_mon].substring(0, 3);
          }, "%B": function(date2) {
            return MONTHS[date2.tm_mon];
          }, "%C": function(date2) {
            var year = date2.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2);
          }, "%d": function(date2) {
            return leadingNulls(date2.tm_mday, 2);
          }, "%e": function(date2) {
            return leadingSomething(date2.tm_mday, 2, " ");
          }, "%g": function(date2) {
            return getWeekBasedYear(date2).toString().substring(2);
          }, "%G": function(date2) {
            return getWeekBasedYear(date2);
          }, "%H": function(date2) {
            return leadingNulls(date2.tm_hour, 2);
          }, "%I": function(date2) {
            var twelveHour = date2.tm_hour;
            if (twelveHour == 0)
              twelveHour = 12;
            else if (twelveHour > 12)
              twelveHour -= 12;
            return leadingNulls(twelveHour, 2);
          }, "%j": function(date2) {
            return leadingNulls(date2.tm_mday + arraySum(isLeapYear(date2.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
          }, "%m": function(date2) {
            return leadingNulls(date2.tm_mon + 1, 2);
          }, "%M": function(date2) {
            return leadingNulls(date2.tm_min, 2);
          }, "%n": function() {
            return "\n";
          }, "%p": function(date2) {
            if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
              return "AM";
            }
            return "PM";
          }, "%S": function(date2) {
            return leadingNulls(date2.tm_sec, 2);
          }, "%t": function() {
            return "	";
          }, "%u": function(date2) {
            return date2.tm_wday || 7;
          }, "%U": function(date2) {
            var days = date2.tm_yday + 7 - date2.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2);
          }, "%V": function(date2) {
            var val = Math.floor((date2.tm_yday + 7 - (date2.tm_wday + 6) % 7) / 7);
            if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
              val++;
            }
            if (!val) {
              val = 52;
              var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
              if (dec31 == 4 || dec31 == 5 && isLeapYear(date2.tm_year % 400 - 1)) {
                val++;
              }
            } else if (val == 53) {
              var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
              if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date2.tm_year)))
                val = 1;
            }
            return leadingNulls(val, 2);
          }, "%w": function(date2) {
            return date2.tm_wday;
          }, "%W": function(date2) {
            var days = date2.tm_yday + 7 - (date2.tm_wday + 6) % 7;
            return leadingNulls(Math.floor(days / 7), 2);
          }, "%y": function(date2) {
            return (date2.tm_year + 1900).toString().substring(2);
          }, "%Y": function(date2) {
            return date2.tm_year + 1900;
          }, "%z": function(date2) {
            var off = date2.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
          }, "%Z": function(date2) {
            return date2.tm_zone;
          }, "%%": function() {
            return "%";
          } };
          pattern = pattern.replace(/%%/g, "\0\0");
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.includes(rule)) {
              pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
            }
          }
          pattern = pattern.replace(/\0\0/g, "%");
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format, tm, loc) {
          return _strftime(s, maxsize, format, tm);
        }
        function _unzClose() {
          err("missing function: unzClose");
          abort(-1);
        }
        function _unzCloseCurrentFile() {
          err("missing function: unzCloseCurrentFile");
          abort(-1);
        }
        function _unzGetCurrentFileInfo() {
          err("missing function: unzGetCurrentFileInfo");
          abort(-1);
        }
        function _unzGetCurrentFileInfo64() {
          err("missing function: unzGetCurrentFileInfo64");
          abort(-1);
        }
        function _unzGetGlobalInfo() {
          err("missing function: unzGetGlobalInfo");
          abort(-1);
        }
        function _unzGoToFirstFile() {
          err("missing function: unzGoToFirstFile");
          abort(-1);
        }
        function _unzGoToNextFile() {
          err("missing function: unzGoToNextFile");
          abort(-1);
        }
        function _unzLocateFile() {
          err("missing function: unzLocateFile");
          abort(-1);
        }
        function _unzOpen2() {
          err("missing function: unzOpen2");
          abort(-1);
        }
        function _unzOpenCurrentFile() {
          err("missing function: unzOpenCurrentFile");
          abort(-1);
        }
        function _unzReadCurrentFile() {
          err("missing function: unzReadCurrentFile");
          abort(-1);
        }
        function _proc_exit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            if (Module["onExit"])
              Module["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          _proc_exit(status);
        }
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function stringToUTF8OnStack(str) {
          var size = lengthBytesUTF8(str) + 1;
          var ret = stackAlloc(size);
          stringToUTF8(str, ret, size);
          return ret;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": (str) => {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              ret2 = stringToUTF8OnStack(str);
            }
            return ret2;
          }, "array": (arr) => {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0)
                  stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0)
              stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        var FSNode = function(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.mounted = null;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.node_ops = {};
          this.stream_ops = {};
          this.rdev = rdev;
        };
        var readMode = 292 | 73;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, { read: { get: function() {
          return (this.mode & readMode) === readMode;
        }, set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        } }, write: { get: function() {
          return (this.mode & writeMode) === writeMode;
        }, set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        } }, isFolder: { get: function() {
          return FS.isDir(this.mode);
        } }, isDevice: { get: function() {
          return FS.isChrdev(this.mode);
        } } });
        FS.FSNode = FSNode;
        FS.createPreloadedFile = FS_createPreloadedFile;
        FS.staticInit();
        var wasmImports = { "g": _XML_GetBuffer, "T": _XML_GetErrorCode, "U": _XML_Parse, "m": _XML_ParseBuffer, "o": _XML_ParserCreate, "c": _XML_ParserFree, "z": _XML_ResumeParser, "f": _XML_SetCharacterDataHandler, "b": _XML_SetElementHandler, "n": _XML_SetUserData, "h": _XML_StopParser, "a": ___cxa_throw, "Aa": ___dlsym, "ua": ___syscall__newselect, "ya": ___syscall_bind, "xa": ___syscall_connect, "qa": ___syscall_faccessat, "d": ___syscall_fcntl64, "pa": ___syscall_fstat64, "N": ___syscall_ftruncate64, "ka": ___syscall_getdents64, "sa": ___syscall_getpeername, "ta": ___syscall_getsockopt, "I": ___syscall_ioctl, "ma": ___syscall_lstat64, "la": ___syscall_mkdirat, "na": ___syscall_newfstatat, "J": ___syscall_openat, "va": ___syscall_recvfrom, "ia": ___syscall_renameat, "D": ___syscall_rmdir, "wa": ___syscall_sendto, "F": ___syscall_socket, "oa": ___syscall_stat64, "E": ___syscall_unlinkat, "Ca": __emscripten_get_now_is_monotonic, "W": __localtime_js, "X": __tzset_js, "e": _abort, "Ba": _dlopen, "ba": _duckdb_web_fs_directory_create, "ca": _duckdb_web_fs_directory_exists, "$": _duckdb_web_fs_directory_list_files, "aa": _duckdb_web_fs_directory_remove, "B": _duckdb_web_fs_file_close, "Z": _duckdb_web_fs_file_exists, "M": _duckdb_web_fs_file_get_last_modified_time, "_": _duckdb_web_fs_file_move, "ea": _duckdb_web_fs_file_open, "p": _duckdb_web_fs_file_read, "da": _duckdb_web_fs_file_truncate, "C": _duckdb_web_fs_file_write, "fa": _duckdb_web_fs_get_default_data_protocol, "Y": _duckdb_web_fs_glob, "A": _duckdb_web_test_platform_feature, "ga": _duckdb_web_udf_scalar_call, "K": _emscripten_date_now, "Da": _emscripten_get_heap_max, "i": _emscripten_get_now, "za": _emscripten_memcpy_big, "Fa": _emscripten_resize_heap, "L": _environ_get, "R": _environ_sizes_get, "k": _fd_close, "V": _fd_fdstat_get, "P": _fd_pread, "O": _fd_pwrite, "H": _fd_read, "Q": _fd_seek, "ja": _fd_sync, "u": _fd_write, "G": _getaddrinfo, "ha": _getentropy, "ra": _getnameinfo, "Ea": _strftime_l, "j": _unzClose, "t": _unzCloseCurrentFile, "x": _unzGetCurrentFileInfo, "q": _unzGetCurrentFileInfo64, "S": _unzGetGlobalInfo, "y": _unzGoToFirstFile, "w": _unzGoToNextFile, "s": _unzLocateFile, "v": _unzOpen2, "r": _unzOpenCurrentFile, "l": _unzReadCurrentFile };
        var asm = createWasm();
        var ___wasm_call_ctors = function() {
          return (___wasm_call_ctors = Module["asm"]["Ha"]).apply(null, arguments);
        };
        var _main = Module["_main"] = function() {
          return (_main = Module["_main"] = Module["asm"]["Ia"]).apply(null, arguments);
        };
        var _duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = function() {
          return (_duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = Module["asm"]["Ka"]).apply(null, arguments);
        };
        var _duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = function() {
          return (_duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = Module["asm"]["La"]).apply(null, arguments);
        };
        var _duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = function() {
          return (_duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = Module["asm"]["Ma"]).apply(null, arguments);
        };
        var _duckdb_web_reset = Module["_duckdb_web_reset"] = function() {
          return (_duckdb_web_reset = Module["_duckdb_web_reset"] = Module["asm"]["Na"]).apply(null, arguments);
        };
        var _duckdb_web_connect = Module["_duckdb_web_connect"] = function() {
          return (_duckdb_web_connect = Module["_duckdb_web_connect"] = Module["asm"]["Oa"]).apply(null, arguments);
        };
        var _duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = function() {
          return (_duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = Module["asm"]["Pa"]).apply(null, arguments);
        };
        var _duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = function() {
          return (_duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = Module["asm"]["Qa"]).apply(null, arguments);
        };
        var _duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = function() {
          return (_duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = Module["asm"]["Ra"]).apply(null, arguments);
        };
        var _duckdb_web_open = Module["_duckdb_web_open"] = function() {
          return (_duckdb_web_open = Module["_duckdb_web_open"] = Module["asm"]["Sa"]).apply(null, arguments);
        };
        var _duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = function() {
          return (_duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = Module["asm"]["Ta"]).apply(null, arguments);
        };
        var _duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = function() {
          return (_duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = Module["asm"]["Ua"]).apply(null, arguments);
        };
        var _duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = function() {
          return (_duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = Module["asm"]["Va"]).apply(null, arguments);
        };
        var _duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = function() {
          return (_duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = Module["asm"]["Wa"]).apply(null, arguments);
        };
        var _duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = function() {
          return (_duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = Module["asm"]["Xa"]).apply(null, arguments);
        };
        var _duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = function() {
          return (_duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = Module["asm"]["Ya"]).apply(null, arguments);
        };
        var _duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = function() {
          return (_duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = Module["asm"]["Za"]).apply(null, arguments);
        };
        var _duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = function() {
          return (_duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = Module["asm"]["_a"]).apply(null, arguments);
        };
        var _duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = function() {
          return (_duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = Module["asm"]["$a"]).apply(null, arguments);
        };
        var _duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = function() {
          return (_duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = Module["asm"]["ab"]).apply(null, arguments);
        };
        var _duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = function() {
          return (_duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = Module["asm"]["bb"]).apply(null, arguments);
        };
        var _duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = function() {
          return (_duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = Module["asm"]["cb"]).apply(null, arguments);
        };
        var _duckdb_web_get_version = Module["_duckdb_web_get_version"] = function() {
          return (_duckdb_web_get_version = Module["_duckdb_web_get_version"] = Module["asm"]["db"]).apply(null, arguments);
        };
        var _duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = function() {
          return (_duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = Module["asm"]["eb"]).apply(null, arguments);
        };
        var _duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = function() {
          return (_duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = Module["asm"]["fb"]).apply(null, arguments);
        };
        var _duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = function() {
          return (_duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = Module["asm"]["gb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = function() {
          return (_duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = Module["asm"]["hb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = function() {
          return (_duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = Module["asm"]["ib"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = function() {
          return (_duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = Module["asm"]["jb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = function() {
          return (_duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = Module["asm"]["kb"]).apply(null, arguments);
        };
        var _duckdb_web_query_run = Module["_duckdb_web_query_run"] = function() {
          return (_duckdb_web_query_run = Module["_duckdb_web_query_run"] = Module["asm"]["lb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = function() {
          return (_duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = Module["asm"]["mb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = function() {
          return (_duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = Module["asm"]["nb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = function() {
          return (_duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = Module["asm"]["ob"]).apply(null, arguments);
        };
        var _duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = function() {
          return (_duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = Module["asm"]["pb"]).apply(null, arguments);
        };
        var _duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = function() {
          return (_duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = Module["asm"]["qb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = function() {
          return (_duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = Module["asm"]["rb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = function() {
          return (_duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = Module["asm"]["sb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = function() {
          return (_duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = Module["asm"]["tb"]).apply(null, arguments);
        };
        var ___errno_location = function() {
          return (___errno_location = Module["asm"]["ub"]).apply(null, arguments);
        };
        var _htonl = function() {
          return (_htonl = Module["asm"]["vb"]).apply(null, arguments);
        };
        var _htons = function() {
          return (_htons = Module["asm"]["wb"]).apply(null, arguments);
        };
        var _ntohs = function() {
          return (_ntohs = Module["asm"]["xb"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["yb"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["zb"]).apply(null, arguments);
        };
        var _emscripten_builtin_memalign = function() {
          return (_emscripten_builtin_memalign = Module["asm"]["Ab"]).apply(null, arguments);
        };
        var stackSave = function() {
          return (stackSave = Module["asm"]["Bb"]).apply(null, arguments);
        };
        var stackRestore = function() {
          return (stackRestore = Module["asm"]["Cb"]).apply(null, arguments);
        };
        var stackAlloc = function() {
          return (stackAlloc = Module["asm"]["Db"]).apply(null, arguments);
        };
        var ___cxa_is_pointer_type = function() {
          return (___cxa_is_pointer_type = Module["asm"]["Eb"]).apply(null, arguments);
        };
        Module["stackAlloc"] = stackAlloc;
        Module["stackSave"] = stackSave;
        Module["stackRestore"] = stackRestore;
        Module["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function callMain() {
          var entryFunction = _main;
          var argc = 0;
          var argv = 0;
          try {
            var ret = entryFunction(argc, argv);
            exitJS(ret, true);
            return ret;
          } catch (e) {
            return handleException(e);
          }
        }
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT)
              return;
            initRuntime();
            preMain();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"])
              Module["onRuntimeInitialized"]();
            if (shouldRunNow)
              callMain();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        var shouldRunNow = true;
        if (Module["noInitialRun"])
          shouldRunNow = false;
        run();
        return DuckDB4.ready;
      };
    })();
    if (typeof exports === "object" && typeof module2 === "object")
      module2.exports = DuckDB3;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return DuckDB3;
      });
    else if (typeof exports === "object")
      exports["DuckDB"] = DuckDB3;
  }
});

// src/bindings/duckdb-eh.js
var require_duckdb_eh = __commonJS({
  "src/bindings/duckdb-eh.js"(exports, module2) {
    "use strict";
    var DuckDB3 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined")
        _scriptDir = _scriptDir || __filename;
      return function(DuckDB4 = {}) {
        var Module = typeof DuckDB4 != "undefined" ? DuckDB4 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path2) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path2, scriptDirectory);
          }
          return scriptDirectory + path2;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_NODE) {
          var fs4 = require("fs");
          var nodePath = require("path");
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs4.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror, binary = true) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs4.readFile(filename, binary ? void 0 : "utf8", (err2, data) => {
              if (err2)
                onerror(err2);
              else
                onload(binary ? data.buffer : data);
            });
          };
          if (!Module["thisProgram"] && process.argv.length > 1) {
            thisProgram = process.argv[1].replace(/\\/g, "/");
          }
          arguments_ = process.argv.slice(2);
          quit_ = (status, toThrow) => {
            process.exitCode = status;
            throw toThrow;
          };
          Module["inspect"] = () => "[Emscripten Module object]";
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"])
          arguments_ = Module["arguments"];
        if (Module["thisProgram"])
          thisProgram = Module["thisProgram"];
        if (Module["quit"])
          quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"])
          wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module["HEAP8"] = HEAP8 = new Int8Array(b);
          Module["HEAP16"] = HEAP16 = new Int16Array(b);
          Module["HEAP32"] = HEAP32 = new Int32Array(b);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() {
          return noExitRuntime || runtimeKeepaliveCounter > 0;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
              Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (!Module["noFSInit"] && !FS.init.initialized)
            FS.init();
          FS.ignorePermissions = false;
          TTY.init();
          SOCKFS.root = FS.mount(SOCKFS, {}, null);
          callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          callRuntimeCallbacks(__ATMAIN__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
              Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function getUniqueRunDependency(id) {
          return id;
        }
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          if (runtimeInitialized) {
            ___trap();
          }
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "./duckdb-eh.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function") {
              return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + binaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(() => getBinary(binaryFile));
            }
          }
          return Promise.resolve().then(() => getBinary(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile).then((binary) => {
            return WebAssembly.instantiate(binary, imports);
          }).then((instance) => {
            return instance;
          }).then(receiver, (reason) => {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason);
          });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
            return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
              var result = WebAssembly.instantiateStreaming(response, imports);
              return result.then(callback, function(reason) {
                err("wasm streaming compile failed: " + reason);
                err("falling back to ArrayBuffer instantiation");
                return instantiateArrayBuffer(binaryFile, imports, callback);
              });
            });
          } else {
            return instantiateArrayBuffer(binaryFile, imports, callback);
          }
        }
        function createWasm() {
          var info = { "a": wasmImports };
          function receiveInstance(instance, module3) {
            var exports2 = instance.exports;
            Module["asm"] = exports2;
            wasmMemory = Module["asm"]["Fa"];
            updateMemoryViews();
            wasmTable = Module["asm"]["Ia"];
            addOnInit(Module["asm"]["Ga"]);
            removeRunDependency("wasm-instantiate");
            return exports2;
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          if (Module["instantiateWasm"]) {
            try {
              return Module["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = `Program terminated with exit(${status})`;
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function _XML_GetBuffer() {
          err("missing function: XML_GetBuffer");
          abort(-1);
        }
        function _XML_GetErrorCode() {
          err("missing function: XML_GetErrorCode");
          abort(-1);
        }
        function _XML_Parse() {
          err("missing function: XML_Parse");
          abort(-1);
        }
        function _XML_ParseBuffer() {
          err("missing function: XML_ParseBuffer");
          abort(-1);
        }
        function _XML_ParserCreate() {
          err("missing function: XML_ParserCreate");
          abort(-1);
        }
        function _XML_ParserFree() {
          err("missing function: XML_ParserFree");
          abort(-1);
        }
        function _XML_ResumeParser() {
          err("missing function: XML_ResumeParser");
          abort(-1);
        }
        function _XML_SetCharacterDataHandler() {
          err("missing function: XML_SetCharacterDataHandler");
          abort(-1);
        }
        function _XML_SetElementHandler() {
          err("missing function: XML_SetElementHandler");
          abort(-1);
        }
        function _XML_SetUserData() {
          err("missing function: XML_SetUserData");
          abort(-1);
        }
        function _XML_StopParser() {
          err("missing function: XML_StopParser");
          abort(-1);
        }
        var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://emscripten.org/docs/compiling/Dynamic-Linking.html";
        function ___dlsym(handle, symbol, ra) {
          abort(dlopenMissingError);
        }
        var PATH = { isAbs: (path2) => path2.charAt(0) === "/", splitPath: (filename) => {
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return splitPathRe.exec(filename).slice(1);
        }, normalizeArray: (parts, allowAboveRoot) => {
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }
          if (allowAboveRoot) {
            for (; up; up--) {
              parts.unshift("..");
            }
          }
          return parts;
        }, normalize: (path2) => {
          var isAbsolute = PATH.isAbs(path2), trailingSlash = path2.substr(-1) === "/";
          path2 = PATH.normalizeArray(path2.split("/").filter((p) => !!p), !isAbsolute).join("/");
          if (!path2 && !isAbsolute) {
            path2 = ".";
          }
          if (path2 && trailingSlash) {
            path2 += "/";
          }
          return (isAbsolute ? "/" : "") + path2;
        }, dirname: (path2) => {
          var result = PATH.splitPath(path2), root = result[0], dir = result[1];
          if (!root && !dir) {
            return ".";
          }
          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }
          return root + dir;
        }, basename: (path2) => {
          if (path2 === "/")
            return "/";
          path2 = PATH.normalize(path2);
          path2 = path2.replace(/\/$/, "");
          var lastSlash = path2.lastIndexOf("/");
          if (lastSlash === -1)
            return path2;
          return path2.substr(lastSlash + 1);
        }, join: function() {
          var paths = Array.prototype.slice.call(arguments);
          return PATH.normalize(paths.join("/"));
        }, join2: (l, r) => {
          return PATH.normalize(l + "/" + r);
        } };
        function initRandomFill() {
          if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
            return (view) => crypto.getRandomValues(view);
          } else if (ENVIRONMENT_IS_NODE) {
            try {
              var crypto_module = require("crypto");
              var randomFillSync = crypto_module["randomFillSync"];
              if (randomFillSync) {
                return (view) => crypto_module["randomFillSync"](view);
              }
              var randomBytes = crypto_module["randomBytes"];
              return (view) => (view.set(randomBytes(view.byteLength)), view);
            } catch (e) {
            }
          }
          abort("initRandomDevice");
        }
        function randomFill(view) {
          return (randomFill = initRandomFill())(view);
        }
        var PATH_FS = { resolve: function() {
          var resolvedPath = "", resolvedAbsolute = false;
          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path2 = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path2 != "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path2) {
              return "";
            }
            resolvedPath = path2 + "/" + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path2);
          }
          resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        }, relative: (from, to) => {
          from = PATH_FS.resolve(from).substr(1);
          to = PATH_FS.resolve(to).substr(1);
          function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
              if (arr[start] !== "")
                break;
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== "")
                break;
            }
            if (start > end)
              return [];
            return arr.slice(start, end - start + 1);
          }
          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }
          var outputParts = [];
          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }
          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        } };
        function lengthBytesUTF8(str) {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          outIdx >>>= 0;
          if (!(maxBytesToWrite > 0))
            return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx)
                break;
              heap[outIdx++ >>> 0] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 192 | u >> 6;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 224 | u >> 12;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx)
                break;
              heap[outIdx++ >>> 0] = 240 | u >> 18;
              heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            }
          }
          heap[outIdx >>> 0] = 0;
          return outIdx - startIdx;
        }
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
          if (dontAddNull)
            u8array.length = numBytesWritten;
          return u8array;
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          idx >>>= 0;
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        var TTY = { ttys: [], init: function() {
        }, shutdown: function() {
        }, register: function(dev, ops) {
          TTY.ttys[dev] = { input: [], output: [], ops };
          FS.registerDevice(dev, TTY.stream_ops);
        }, stream_ops: { open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        }, close: function(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, fsync: function(stream) {
          stream.tty.ops.fsync(stream.tty);
        }, read: function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0)
              break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        }, write: function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        } }, default_tty_ops: { get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = fs4.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1);
              } catch (e) {
                if (e.toString().includes("EOF"))
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        }, put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        }, fsync: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } }, default_tty1_ops: { put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        }, fsync: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        } } };
        function zeroMemory(address, size) {
          HEAPU8.fill(0, address, address + size);
          return address;
        }
        function alignMemory(size, alignment) {
          return Math.ceil(size / alignment) * alignment;
        }
        function mmapAlloc(size) {
          size = alignMemory(size, 65536);
          var ptr = _emscripten_builtin_memalign(65536, size);
          if (!ptr)
            return 0;
          return zeroMemory(ptr, size);
        }
        var MEMFS = { ops_table: null, mount: function(mount) {
          return MEMFS.createNode(null, "/", 16384 | 511, 0);
        }, createNode: function(parent, name, mode, dev) {
          if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63);
          }
          if (!MEMFS.ops_table) {
            MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } };
          }
          var node = FS.createNode(parent, name, mode, dev);
          if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {};
          } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null;
          } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream;
          } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream;
          }
          node.timestamp = Date.now();
          if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp;
          }
          return node;
        }, getFileDataAsTypedArray: function(node) {
          if (!node.contents)
            return new Uint8Array(0);
          if (node.contents.subarray)
            return node.contents.subarray(0, node.usedBytes);
          return new Uint8Array(node.contents);
        }, expandFileStorage: function(node, newCapacity) {
          newCapacity >>>= 0;
          var prevCapacity = node.contents ? node.contents.length : 0;
          if (prevCapacity >= newCapacity)
            return;
          var CAPACITY_DOUBLING_MAX = 1024 * 1024;
          newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
          if (prevCapacity != 0)
            newCapacity = Math.max(newCapacity, 256);
          var oldContents = node.contents;
          node.contents = new Uint8Array(newCapacity);
          if (node.usedBytes > 0)
            node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        }, resizeFileStorage: function(node, newSize) {
          newSize >>>= 0;
          if (node.usedBytes == newSize)
            return;
          if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0;
          } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
              node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
            }
            node.usedBytes = newSize;
          }
        }, node_ops: { getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        }, setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        }, lookup: function(parent, name) {
          throw FS.genericErrors[44];
        }, mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        }, rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now();
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        }, unlink: function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        }, rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        }, readdir: function(node) {
          var entries = [".", ".."];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        }, symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        }, readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        } }, stream_ops: { read: function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes)
            return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer[offset + i] = contents[position + i];
          }
          return size;
        }, write: function(stream, buffer, offset, length, position, canOwn) {
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
          if (!length)
            return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        }, llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        }, allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        }, mmap: function(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            ptr >>>= 0;
            HEAP8.set(contents, ptr >>> 0);
          }
          return { ptr, allocated };
        }, msync: function(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        } } };
        function asyncLoad(url, onload, onerror, noRunDep) {
          var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
          readAsync(url, (arrayBuffer) => {
            assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
            onload(new Uint8Array(arrayBuffer));
            if (dep)
              removeRunDependency(dep);
          }, (event) => {
            if (onerror) {
              onerror();
            } else {
              throw `Loading data file "${url}" failed.`;
            }
          });
          if (dep)
            addRunDependency(dep);
        }
        var preloadPlugins = Module["preloadPlugins"] || [];
        function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) {
          if (typeof Browser != "undefined")
            Browser.init();
          var handled = false;
          preloadPlugins.forEach(function(plugin) {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, onerror);
              handled = true;
            }
          });
          return handled;
        }
        function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency(`cp ${fullname}`);
          function processData(byteArray) {
            function finish(byteArray2) {
              if (preFinish)
                preFinish();
              if (!dontCreateFile) {
                FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
              }
              if (onload)
                onload();
              removeRunDependency(dep);
            }
            if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
              if (onerror)
                onerror();
              removeRunDependency(dep);
            })) {
              return;
            }
            finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == "string") {
            asyncLoad(url, (byteArray) => processData(byteArray), onerror);
          } else {
            processData(url);
          }
        }
        function FS_modeStringToFlags(str) {
          var flagModes = { "r": 0, "r+": 2, "w": 512 | 64 | 1, "w+": 512 | 64 | 2, "a": 1024 | 64 | 1, "a+": 1024 | 64 | 2 };
          var flags = flagModes[str];
          if (typeof flags == "undefined") {
            throw new Error(`Unknown file open mode: ${str}`);
          }
          return flags;
        }
        function FS_getMode(canRead, canWrite) {
          var mode = 0;
          if (canRead)
            mode |= 292 | 73;
          if (canWrite)
            mode |= 146;
          return mode;
        }
        var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (path2, opts = {}) => {
          path2 = PATH_FS.resolve(path2);
          if (!path2)
            return { path: "", node: null };
          var defaults = { follow_mount: true, recurse_count: 0 };
          opts = Object.assign(defaults, opts);
          if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32);
          }
          var parts = path2.split("/").filter((p) => !!p);
          var current = FS.root;
          var current_path = "/";
          for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
              break;
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
              if (!islast || islast && opts.follow_mount) {
                current = current.mounted.root;
              }
            }
            if (!islast || opts.follow) {
              var count = 0;
              while (FS.isLink(current.mode)) {
                var link = FS.readlink(current_path);
                current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                current = lookup.node;
                if (count++ > 40) {
                  throw new FS.ErrnoError(32);
                }
              }
            }
          }
          return { path: current_path, node: current };
        }, getPath: (node) => {
          var path2;
          while (true) {
            if (FS.isRoot(node)) {
              var mount = node.mount.mountpoint;
              if (!path2)
                return mount;
              return mount[mount.length - 1] !== "/" ? `${mount}/${path2}` : mount + path2;
            }
            path2 = path2 ? `${node.name}/${path2}` : node.name;
            node = node.parent;
          }
        }, hashName: (parentid, name) => {
          var hash = 0;
          for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
          }
          return (parentid + hash >>> 0) % FS.nameTable.length;
        }, hashAddNode: (node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          node.name_next = FS.nameTable[hash];
          FS.nameTable[hash] = node;
        }, hashRemoveNode: (node) => {
          var hash = FS.hashName(node.parent.id, node.name);
          if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next;
          } else {
            var current = FS.nameTable[hash];
            while (current) {
              if (current.name_next === node) {
                current.name_next = node.name_next;
                break;
              }
              current = current.name_next;
            }
          }
        }, lookupNode: (parent, name) => {
          var errCode = FS.mayLookup(parent);
          if (errCode) {
            throw new FS.ErrnoError(errCode, parent);
          }
          var hash = FS.hashName(parent.id, name);
          for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
              return node;
            }
          }
          return FS.lookup(parent, name);
        }, createNode: (parent, name, mode, rdev) => {
          var node = new FS.FSNode(parent, name, mode, rdev);
          FS.hashAddNode(node);
          return node;
        }, destroyNode: (node) => {
          FS.hashRemoveNode(node);
        }, isRoot: (node) => {
          return node === node.parent;
        }, isMountpoint: (node) => {
          return !!node.mounted;
        }, isFile: (mode) => {
          return (mode & 61440) === 32768;
        }, isDir: (mode) => {
          return (mode & 61440) === 16384;
        }, isLink: (mode) => {
          return (mode & 61440) === 40960;
        }, isChrdev: (mode) => {
          return (mode & 61440) === 8192;
        }, isBlkdev: (mode) => {
          return (mode & 61440) === 24576;
        }, isFIFO: (mode) => {
          return (mode & 61440) === 4096;
        }, isSocket: (mode) => {
          return (mode & 49152) === 49152;
        }, flagsToPermissionString: (flag) => {
          var perms = ["r", "w", "rw"][flag & 3];
          if (flag & 512) {
            perms += "w";
          }
          return perms;
        }, nodePermissions: (node, perms) => {
          if (FS.ignorePermissions) {
            return 0;
          }
          if (perms.includes("r") && !(node.mode & 292)) {
            return 2;
          } else if (perms.includes("w") && !(node.mode & 146)) {
            return 2;
          } else if (perms.includes("x") && !(node.mode & 73)) {
            return 2;
          }
          return 0;
        }, mayLookup: (dir) => {
          var errCode = FS.nodePermissions(dir, "x");
          if (errCode)
            return errCode;
          if (!dir.node_ops.lookup)
            return 2;
          return 0;
        }, mayCreate: (dir, name) => {
          try {
            var node = FS.lookupNode(dir, name);
            return 20;
          } catch (e) {
          }
          return FS.nodePermissions(dir, "wx");
        }, mayDelete: (dir, name, isdir) => {
          var node;
          try {
            node = FS.lookupNode(dir, name);
          } catch (e) {
            return e.errno;
          }
          var errCode = FS.nodePermissions(dir, "wx");
          if (errCode) {
            return errCode;
          }
          if (isdir) {
            if (!FS.isDir(node.mode)) {
              return 54;
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
              return 10;
            }
          } else {
            if (FS.isDir(node.mode)) {
              return 31;
            }
          }
          return 0;
        }, mayOpen: (node, flags) => {
          if (!node) {
            return 44;
          }
          if (FS.isLink(node.mode)) {
            return 32;
          } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
              return 31;
            }
          }
          return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
        }, MAX_OPEN_FDS: 4096, nextfd: () => {
          for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
            if (!FS.streams[fd]) {
              return fd;
            }
          }
          throw new FS.ErrnoError(33);
        }, getStream: (fd) => FS.streams[fd], createStream: (stream, fd = -1) => {
          if (!FS.FSStream) {
            FS.FSStream = function() {
              this.shared = {};
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, { object: { get: function() {
              return this.node;
            }, set: function(val) {
              this.node = val;
            } }, isRead: { get: function() {
              return (this.flags & 2097155) !== 1;
            } }, isWrite: { get: function() {
              return (this.flags & 2097155) !== 0;
            } }, isAppend: { get: function() {
              return this.flags & 1024;
            } }, flags: { get: function() {
              return this.shared.flags;
            }, set: function(val) {
              this.shared.flags = val;
            } }, position: { get: function() {
              return this.shared.position;
            }, set: function(val) {
              this.shared.position = val;
            } } });
          }
          stream = Object.assign(new FS.FSStream(), stream);
          if (fd == -1) {
            fd = FS.nextfd();
          }
          stream.fd = fd;
          FS.streams[fd] = stream;
          return stream;
        }, closeStream: (fd) => {
          FS.streams[fd] = null;
        }, chrdev_stream_ops: { open: (stream) => {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        }, llseek: () => {
          throw new FS.ErrnoError(70);
        } }, major: (dev) => dev >> 8, minor: (dev) => dev & 255, makedev: (ma, mi) => ma << 8 | mi, registerDevice: (dev, ops) => {
          FS.devices[dev] = { stream_ops: ops };
        }, getDevice: (dev) => FS.devices[dev], getMounts: (mount) => {
          var mounts = [];
          var check = [mount];
          while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts);
          }
          return mounts;
        }, syncfs: (populate, callback) => {
          if (typeof populate == "function") {
            callback = populate;
            populate = false;
          }
          FS.syncFSRequests++;
          if (FS.syncFSRequests > 1) {
            err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
          }
          var mounts = FS.getMounts(FS.root.mount);
          var completed = 0;
          function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode);
          }
          function done(errCode) {
            if (errCode) {
              if (!done.errored) {
                done.errored = true;
                return doCallback(errCode);
              }
              return;
            }
            if (++completed >= mounts.length) {
              doCallback(null);
            }
          }
          mounts.forEach((mount) => {
            if (!mount.type.syncfs) {
              return done(null);
            }
            mount.type.syncfs(mount, populate, done);
          });
        }, mount: (type, opts, mountpoint) => {
          var root = mountpoint === "/";
          var pseudo = !mountpoint;
          var node;
          if (root && FS.root) {
            throw new FS.ErrnoError(10);
          } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            if (!FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
          }
          var mount = { type, opts, mountpoint, mounts: [] };
          var mountRoot = type.mount(mount);
          mountRoot.mount = mount;
          mount.root = mountRoot;
          if (root) {
            FS.root = mountRoot;
          } else if (node) {
            node.mounted = mount;
            if (node.mount) {
              node.mount.mounts.push(mount);
            }
          }
          return mountRoot;
        }, unmount: (mountpoint) => {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28);
          }
          var node = lookup.node;
          var mount = node.mounted;
          var mounts = FS.getMounts(mount);
          Object.keys(FS.nameTable).forEach((hash) => {
            var current = FS.nameTable[hash];
            while (current) {
              var next = current.name_next;
              if (mounts.includes(current.mount)) {
                FS.destroyNode(current);
              }
              current = next;
            }
          });
          node.mounted = null;
          var idx = node.mount.mounts.indexOf(mount);
          node.mount.mounts.splice(idx, 1);
        }, lookup: (parent, name) => {
          return parent.node_ops.lookup(parent, name);
        }, mknod: (path2, mode, dev) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path2);
          if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.mayCreate(parent, name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.mknod(parent, name, mode, dev);
        }, create: (path2, mode) => {
          mode = mode !== void 0 ? mode : 438;
          mode &= 4095;
          mode |= 32768;
          return FS.mknod(path2, mode, 0);
        }, mkdir: (path2, mode) => {
          mode = mode !== void 0 ? mode : 511;
          mode &= 511 | 512;
          mode |= 16384;
          return FS.mknod(path2, mode, 0);
        }, mkdirTree: (path2, mode) => {
          var dirs = path2.split("/");
          var d = "";
          for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i])
              continue;
            d += "/" + dirs[i];
            try {
              FS.mkdir(d, mode);
            } catch (e) {
              if (e.errno != 20)
                throw e;
            }
          }
        }, mkdev: (path2, mode, dev) => {
          if (typeof dev == "undefined") {
            dev = mode;
            mode = 438;
          }
          mode |= 8192;
          return FS.mknod(path2, mode, dev);
        }, symlink: (oldpath, newpath) => {
          if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44);
          }
          var lookup = FS.lookupPath(newpath, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var newname = PATH.basename(newpath);
          var errCode = FS.mayCreate(parent, newname);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63);
          }
          return parent.node_ops.symlink(parent, newname, oldpath);
        }, rename: (old_path, new_path) => {
          var old_dirname = PATH.dirname(old_path);
          var new_dirname = PATH.dirname(new_path);
          var old_name = PATH.basename(old_path);
          var new_name = PATH.basename(new_path);
          var lookup, old_dir, new_dir;
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
          if (!old_dir || !new_dir)
            throw new FS.ErrnoError(44);
          if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75);
          }
          var old_node = FS.lookupNode(old_dir, old_name);
          var relative = PATH_FS.relative(old_path, new_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28);
          }
          relative = PATH_FS.relative(new_path, old_dirname);
          if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55);
          }
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {
          }
          if (old_node === new_node) {
            return;
          }
          var isdir = FS.isDir(old_node.mode);
          var errCode = FS.mayDelete(old_dir, old_name, isdir);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10);
          }
          if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          FS.hashRemoveNode(old_node);
          try {
            old_dir.node_ops.rename(old_node, new_dir, new_name);
          } catch (e) {
            throw e;
          } finally {
            FS.hashAddNode(old_node);
          }
        }, rmdir: (path2) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          var name = PATH.basename(path2);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, true);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.rmdir(parent, name);
          FS.destroyNode(node);
        }, readdir: (path2) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          var node = lookup.node;
          if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54);
          }
          return node.node_ops.readdir(node);
        }, unlink: (path2) => {
          var lookup = FS.lookupPath(path2, { parent: true });
          var parent = lookup.node;
          if (!parent) {
            throw new FS.ErrnoError(44);
          }
          var name = PATH.basename(path2);
          var node = FS.lookupNode(parent, name);
          var errCode = FS.mayDelete(parent, name, false);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          parent.node_ops.unlink(parent, name);
          FS.destroyNode(node);
        }, readlink: (path2) => {
          var lookup = FS.lookupPath(path2);
          var link = lookup.node;
          if (!link) {
            throw new FS.ErrnoError(44);
          }
          if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28);
          }
          return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
        }, stat: (path2, dontFollow) => {
          var lookup = FS.lookupPath(path2, { follow: !dontFollow });
          var node = lookup.node;
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63);
          }
          return node.node_ops.getattr(node);
        }, lstat: (path2) => {
          return FS.stat(path2, true);
        }, chmod: (path2, mode, dontFollow) => {
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & ~4095, timestamp: Date.now() });
        }, lchmod: (path2, mode) => {
          FS.chmod(path2, mode, true);
        }, fchmod: (fd, mode) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chmod(stream.node, mode);
        }, chown: (path2, uid, gid, dontFollow) => {
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: !dontFollow });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          node.node_ops.setattr(node, { timestamp: Date.now() });
        }, lchown: (path2, uid, gid) => {
          FS.chown(path2, uid, gid, true);
        }, fchown: (fd, uid, gid) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          FS.chown(stream.node, uid, gid);
        }, truncate: (path2, len) => {
          if (len < 0) {
            throw new FS.ErrnoError(28);
          }
          var node;
          if (typeof path2 == "string") {
            var lookup = FS.lookupPath(path2, { follow: true });
            node = lookup.node;
          } else {
            node = path2;
          }
          if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63);
          }
          if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          var errCode = FS.nodePermissions(node, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
        }, ftruncate: (fd, len) => {
          var stream = FS.getStream(fd);
          if (!stream) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28);
          }
          FS.truncate(stream.node, len);
        }, utime: (path2, atime, mtime) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          var node = lookup.node;
          node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
        }, open: (path2, flags, mode) => {
          if (path2 === "") {
            throw new FS.ErrnoError(44);
          }
          flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
          mode = typeof mode == "undefined" ? 438 : mode;
          if (flags & 64) {
            mode = mode & 4095 | 32768;
          } else {
            mode = 0;
          }
          var node;
          if (typeof path2 == "object") {
            node = path2;
          } else {
            path2 = PATH.normalize(path2);
            try {
              var lookup = FS.lookupPath(path2, { follow: !(flags & 131072) });
              node = lookup.node;
            } catch (e) {
            }
          }
          var created = false;
          if (flags & 64) {
            if (node) {
              if (flags & 128) {
                throw new FS.ErrnoError(20);
              }
            } else {
              node = FS.mknod(path2, mode, 0);
              created = true;
            }
          }
          if (!node) {
            throw new FS.ErrnoError(44);
          }
          if (FS.isChrdev(node.mode)) {
            flags &= ~512;
          }
          if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
          if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
          }
          if (flags & 512 && !created) {
            FS.truncate(node, 0);
          }
          flags &= ~(128 | 512 | 131072);
          var stream = FS.createStream({ node, path: FS.getPath(node), flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false });
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
          if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles)
              FS.readFiles = {};
            if (!(path2 in FS.readFiles)) {
              FS.readFiles[path2] = 1;
            }
          }
          return stream;
        }, close: (stream) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (stream.getdents)
            stream.getdents = null;
          try {
            if (stream.stream_ops.close) {
              stream.stream_ops.close(stream);
            }
          } catch (e) {
            throw e;
          } finally {
            FS.closeStream(stream.fd);
          }
          stream.fd = null;
        }, isClosed: (stream) => {
          return stream.fd === null;
        }, llseek: (stream, offset, whence) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70);
          }
          if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28);
          }
          stream.position = stream.stream_ops.llseek(stream, offset, whence);
          stream.ungotten = [];
          return stream.position;
        }, read: (stream, buffer, offset, length, position) => {
          offset >>>= 0;
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
          if (!seeking)
            stream.position += bytesRead;
          return bytesRead;
        }, write: (stream, buffer, offset, length, position, canOwn) => {
          offset >>>= 0;
          if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28);
          }
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31);
          }
          if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28);
          }
          if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2);
          }
          var seeking = typeof position != "undefined";
          if (!seeking) {
            position = stream.position;
          } else if (!stream.seekable) {
            throw new FS.ErrnoError(70);
          }
          var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
          if (!seeking)
            stream.position += bytesWritten;
          return bytesWritten;
        }, allocate: (stream, offset, length) => {
          if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8);
          }
          if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28);
          }
          if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8);
          }
          if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138);
          }
          stream.stream_ops.allocate(stream, offset, length);
        }, mmap: (stream, length, position, prot, flags) => {
          if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2);
          }
          if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2);
          }
          if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43);
          }
          return stream.stream_ops.mmap(stream, length, position, prot, flags);
        }, msync: (stream, buffer, offset, length, mmapFlags) => {
          offset >>>= 0;
          if (!stream.stream_ops.msync) {
            return 0;
          }
          return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
        }, munmap: (stream) => 0, ioctl: (stream, cmd, arg) => {
          if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59);
          }
          return stream.stream_ops.ioctl(stream, cmd, arg);
        }, readFile: (path2, opts = {}) => {
          opts.flags = opts.flags || 0;
          opts.encoding = opts.encoding || "binary";
          if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error(`Invalid encoding type "${opts.encoding}"`);
          }
          var ret;
          var stream = FS.open(path2, opts.flags);
          var stat = FS.stat(path2);
          var length = stat.size;
          var buf = new Uint8Array(length);
          FS.read(stream, buf, 0, length, 0);
          if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0);
          } else if (opts.encoding === "binary") {
            ret = buf;
          }
          FS.close(stream);
          return ret;
        }, writeFile: (path2, data, opts = {}) => {
          opts.flags = opts.flags || 577;
          var stream = FS.open(path2, opts.flags, opts.mode);
          if (typeof data == "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
          } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
          FS.close(stream);
        }, cwd: () => FS.currentPath, chdir: (path2) => {
          var lookup = FS.lookupPath(path2, { follow: true });
          if (lookup.node === null) {
            throw new FS.ErrnoError(44);
          }
          if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54);
          }
          var errCode = FS.nodePermissions(lookup.node, "x");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
          FS.currentPath = lookup.path;
        }, createDefaultDirectories: () => {
          FS.mkdir("/tmp");
          FS.mkdir("/home");
          FS.mkdir("/home/web_user");
        }, createDefaultDevices: () => {
          FS.mkdir("/dev");
          FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (stream, buffer, offset, length, pos) => length });
          FS.mkdev("/dev/null", FS.makedev(1, 3));
          TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
          TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
          FS.mkdev("/dev/tty", FS.makedev(5, 0));
          FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var randomBuffer = new Uint8Array(1024), randomLeft = 0;
          var randomByte = () => {
            if (randomLeft === 0) {
              randomLeft = randomFill(randomBuffer).byteLength;
            }
            return randomBuffer[--randomLeft];
          };
          FS.createDevice("/dev", "random", randomByte);
          FS.createDevice("/dev", "urandom", randomByte);
          FS.mkdir("/dev/shm");
          FS.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories: () => {
          FS.mkdir("/proc");
          var proc_self = FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd");
          FS.mount({ mount: () => {
            var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
            node.node_ops = { lookup: (parent, name) => {
              var fd = +name;
              var stream = FS.getStream(fd);
              if (!stream)
                throw new FS.ErrnoError(8);
              var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => stream.path } };
              ret.parent = ret;
              return ret;
            } };
            return node;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams: () => {
          if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdin");
          }
          if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"]);
          } else {
            FS.symlink("/dev/tty", "/dev/stdout");
          }
          if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"]);
          } else {
            FS.symlink("/dev/tty1", "/dev/stderr");
          }
          var stdin = FS.open("/dev/stdin", 0);
          var stdout = FS.open("/dev/stdout", 1);
          var stderr = FS.open("/dev/stderr", 1);
        }, ensureErrnoError: () => {
          if (FS.ErrnoError)
            return;
          FS.ErrnoError = function ErrnoError(errno, node) {
            this.name = "ErrnoError";
            this.node = node;
            this.setErrno = function(errno2) {
              this.errno = errno2;
            };
            this.setErrno(errno);
            this.message = "FS error";
          };
          FS.ErrnoError.prototype = new Error();
          FS.ErrnoError.prototype.constructor = FS.ErrnoError;
          [44].forEach((code) => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>";
          });
        }, staticInit: () => {
          FS.ensureErrnoError();
          FS.nameTable = new Array(4096);
          FS.mount(MEMFS, {}, "/");
          FS.createDefaultDirectories();
          FS.createDefaultDevices();
          FS.createSpecialDirectories();
          FS.filesystems = { "MEMFS": MEMFS };
        }, init: (input, output, error) => {
          FS.init.initialized = true;
          FS.ensureErrnoError();
          Module["stdin"] = input || Module["stdin"];
          Module["stdout"] = output || Module["stdout"];
          Module["stderr"] = error || Module["stderr"];
          FS.createStandardStreams();
        }, quit: () => {
          FS.init.initialized = false;
          for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
              continue;
            }
            FS.close(stream);
          }
        }, findObject: (path2, dontResolveLastLink) => {
          var ret = FS.analyzePath(path2, dontResolveLastLink);
          if (!ret.exists) {
            return null;
          }
          return ret.object;
        }, analyzePath: (path2, dontResolveLastLink) => {
          try {
            var lookup = FS.lookupPath(path2, { follow: !dontResolveLastLink });
            path2 = lookup.path;
          } catch (e) {
          }
          var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var lookup = FS.lookupPath(path2, { parent: true });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path2);
            lookup = FS.lookupPath(path2, { follow: !dontResolveLastLink });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/";
          } catch (e) {
            ret.error = e.errno;
          }
          return ret;
        }, createPath: (parent, path2, canRead, canWrite) => {
          parent = typeof parent == "string" ? parent : FS.getPath(parent);
          var parts = path2.split("/").reverse();
          while (parts.length) {
            var part = parts.pop();
            if (!part)
              continue;
            var current = PATH.join2(parent, part);
            try {
              FS.mkdir(current);
            } catch (e) {
            }
            parent = current;
          }
          return current;
        }, createFile: (parent, name, properties, canRead, canWrite) => {
          var path2 = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
          var mode = FS_getMode(canRead, canWrite);
          return FS.create(path2, mode);
        }, createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
          var path2 = name;
          if (parent) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            path2 = name ? PATH.join2(parent, name) : parent;
          }
          var mode = FS_getMode(canRead, canWrite);
          var node = FS.create(path2, mode);
          if (data) {
            if (typeof data == "string") {
              var arr = new Array(data.length);
              for (var i = 0, len = data.length; i < len; ++i)
                arr[i] = data.charCodeAt(i);
              data = arr;
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode);
          }
          return node;
        }, createDevice: (parent, name, input, output) => {
          var path2 = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
          var mode = FS_getMode(!!input, !!output);
          if (!FS.createDevice.major)
            FS.createDevice.major = 64;
          var dev = FS.makedev(FS.createDevice.major++, 0);
          FS.registerDevice(dev, { open: (stream) => {
            stream.seekable = false;
          }, close: (stream) => {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          }, read: (stream, buffer, offset, length, pos) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0)
                break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          }, write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          } });
          return FS.mkdev(path2, mode, dev);
        }, forceLoadFile: (obj) => {
          if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
            return true;
          if (typeof XMLHttpRequest != "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          } else if (read_) {
            try {
              obj.contents = intArrayFromString(read_(obj.url), true);
              obj.usedBytes = obj.contents.length;
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        }, createLazyFile: (parent, name, url, canRead, canWrite) => {
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = [];
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
              return void 0;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset];
          };
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          };
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing)
              chunkSize = datalength;
            var doXHR = (from, to) => {
              if (from > to)
                throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength - 1)
                throw new Error("only " + datalength + " bytes available! programmer error!");
              var xhr2 = new XMLHttpRequest();
              xhr2.open("GET", url, false);
              if (datalength !== chunkSize)
                xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
              xhr2.responseType = "arraybuffer";
              if (xhr2.overrideMimeType) {
                xhr2.overrideMimeType("text/plain; charset=x-user-defined");
              }
              xhr2.send(null);
              if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
              if (xhr2.response !== void 0) {
                return new Uint8Array(xhr2.response || []);
              }
              return intArrayFromString(xhr2.responseText || "", true);
            };
            var lazyArray2 = this;
            lazyArray2.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum + 1) * chunkSize - 1;
              end = Math.min(end, datalength - 1);
              if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                lazyArray2.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                throw new Error("doXHR failed!");
              return lazyArray2.chunks[chunkNum];
            });
            if (usesGzip || !datalength) {
              chunkSize = datalength = 1;
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          };
          if (typeof XMLHttpRequest != "undefined") {
            if (!ENVIRONMENT_IS_WORKER)
              throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array();
            Object.defineProperties(lazyArray, { length: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._length;
            } }, chunkSize: { get: function() {
              if (!this.lengthKnown) {
                this.cacheLength();
              }
              return this._chunkSize;
            } } });
            var properties = { isDevice: false, contents: lazyArray };
          } else {
            var properties = { isDevice: false, url };
          }
          var node = FS.createFile(parent, name, properties, canRead, canWrite);
          if (properties.contents) {
            node.contents = properties.contents;
          } else if (properties.url) {
            node.contents = null;
            node.url = properties.url;
          }
          Object.defineProperties(node, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var stream_ops = {};
          var keys = Object.keys(node.stream_ops);
          keys.forEach((key) => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
              FS.forceLoadFile(node);
              return fn.apply(null, arguments);
            };
          });
          function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length)
              return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents[position + i];
              }
            } else {
              for (var i = 0; i < size; i++) {
                buffer[offset + i] = contents.get(position + i);
              }
            }
            return size;
          }
          stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position);
          };
          stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            writeChunks(stream, HEAP8, ptr, length, position);
            return { ptr, allocated: true };
          };
          node.stream_ops = stream_ops;
          return node;
        } };
        function UTF8ToString(ptr, maxBytesToRead) {
          ptr >>>= 0;
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        var SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt: function(dirfd, path2, allowEmpty) {
          if (PATH.isAbs(path2)) {
            return path2;
          }
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = SYSCALLS.getStreamFromFD(dirfd);
            dir = dirstream.path;
          }
          if (path2.length == 0) {
            if (!allowEmpty) {
              throw new FS.ErrnoError(44);
            }
            return dir;
          }
          return PATH.join2(dir, path2);
        }, doStat: function(func, path2, buf) {
          try {
            var stat = func(path2);
          } catch (e) {
            if (e && e.node && PATH.normalize(path2) !== PATH.normalize(FS.getPath(e.node))) {
              return -54;
            }
            throw e;
          }
          HEAP32[buf >>> 2] = stat.dev;
          HEAP32[buf + 8 >>> 2] = stat.ino;
          HEAP32[buf + 12 >>> 2] = stat.mode;
          HEAPU32[buf + 16 >>> 2] = stat.nlink;
          HEAP32[buf + 20 >>> 2] = stat.uid;
          HEAP32[buf + 24 >>> 2] = stat.gid;
          HEAP32[buf + 28 >>> 2] = stat.rdev;
          tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >>> 2] = tempI64[0], HEAP32[buf + 44 >>> 2] = tempI64[1];
          HEAP32[buf + 48 >>> 2] = 4096;
          HEAP32[buf + 52 >>> 2] = stat.blocks;
          var atime = stat.atime.getTime();
          var mtime = stat.mtime.getTime();
          var ctime = stat.ctime.getTime();
          tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >>> 2] = tempI64[0], HEAP32[buf + 60 >>> 2] = tempI64[1];
          HEAPU32[buf + 64 >>> 2] = atime % 1e3 * 1e3;
          tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >>> 2] = tempI64[0], HEAP32[buf + 76 >>> 2] = tempI64[1];
          HEAPU32[buf + 80 >>> 2] = mtime % 1e3 * 1e3;
          tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >>> 2] = tempI64[0], HEAP32[buf + 92 >>> 2] = tempI64[1];
          HEAPU32[buf + 96 >>> 2] = ctime % 1e3 * 1e3;
          tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >>> 2] = tempI64[0], HEAP32[buf + 108 >>> 2] = tempI64[1];
          return 0;
        }, doMsync: function(addr, stream, len, flags, offset) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (flags & 2) {
            return 0;
          }
          addr >>>= 0;
          var buffer = HEAPU8.slice(addr, addr + len);
          FS.msync(stream, buffer, offset, len, flags);
        }, varargs: void 0, get: function() {
          SYSCALLS.varargs += 4;
          var ret = HEAP32[SYSCALLS.varargs - 4 >>> 2];
          return ret;
        }, getStr: function(ptr) {
          var ret = UTF8ToString(ptr);
          return ret;
        }, getStreamFromFD: function(fd) {
          var stream = FS.getStream(fd);
          if (!stream)
            throw new FS.ErrnoError(8);
          return stream;
        } };
        function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
          try {
            var total = 0;
            var srcReadLow = readfds ? HEAP32[readfds >>> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >>> 2] : 0;
            var srcWriteLow = writefds ? HEAP32[writefds >>> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >>> 2] : 0;
            var srcExceptLow = exceptfds ? HEAP32[exceptfds >>> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0;
            var dstReadLow = 0, dstReadHigh = 0;
            var dstWriteLow = 0, dstWriteHigh = 0;
            var dstExceptLow = 0, dstExceptHigh = 0;
            var allLow = (readfds ? HEAP32[readfds >>> 2] : 0) | (writefds ? HEAP32[writefds >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds >>> 2] : 0);
            var allHigh = (readfds ? HEAP32[readfds + 4 >>> 2] : 0) | (writefds ? HEAP32[writefds + 4 >>> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >>> 2] : 0);
            var check = function(fd2, low, high, val) {
              return fd2 < 32 ? low & val : high & val;
            };
            for (var fd = 0; fd < nfds; fd++) {
              var mask = 1 << fd % 32;
              if (!check(fd, allLow, allHigh, mask)) {
                continue;
              }
              var stream = SYSCALLS.getStreamFromFD(fd);
              var flags = SYSCALLS.DEFAULT_POLLMASK;
              if (stream.stream_ops.poll) {
                flags = stream.stream_ops.poll(stream);
              }
              if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
                fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
                total++;
              }
              if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
                fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
                total++;
              }
              if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
                fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
                total++;
              }
            }
            if (readfds) {
              HEAP32[readfds >>> 2] = dstReadLow;
              HEAP32[readfds + 4 >>> 2] = dstReadHigh;
            }
            if (writefds) {
              HEAP32[writefds >>> 2] = dstWriteLow;
              HEAP32[writefds + 4 >>> 2] = dstWriteHigh;
            }
            if (exceptfds) {
              HEAP32[exceptfds >>> 2] = dstExceptLow;
              HEAP32[exceptfds + 4 >>> 2] = dstExceptHigh;
            }
            return total;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        var SOCKFS = { mount: function(mount) {
          Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
          Module["websocket"]._callbacks = {};
          Module["websocket"]["on"] = function(event, callback) {
            if ("function" === typeof callback) {
              this._callbacks[event] = callback;
            }
            return this;
          };
          Module["websocket"].emit = function(event, param) {
            if ("function" === typeof this._callbacks[event]) {
              this._callbacks[event].call(this, param);
            }
          };
          return FS.createNode(null, "/", 16384 | 511, 0);
        }, createSocket: function(family, type, protocol) {
          type &= ~526336;
          var streaming = type == 1;
          if (streaming && protocol && protocol != 6) {
            throw new FS.ErrnoError(66);
          }
          var sock = { family, type, protocol, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops };
          var name = SOCKFS.nextname();
          var node = FS.createNode(SOCKFS.root, name, 49152, 0);
          node.sock = sock;
          var stream = FS.createStream({ path: name, node, flags: 2, seekable: false, stream_ops: SOCKFS.stream_ops });
          sock.stream = stream;
          return sock;
        }, getSocket: function(fd) {
          var stream = FS.getStream(fd);
          if (!stream || !FS.isSocket(stream.node.mode)) {
            return null;
          }
          return stream.node.sock;
        }, stream_ops: { poll: function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        }, ioctl: function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        }, read: function(stream, buffer, offset, length, position) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        }, write: function(stream, buffer, offset, length, position) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        }, close: function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        } }, nextname: function() {
          if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0;
          }
          return "socket[" + SOCKFS.nextname.current++ + "]";
        }, websocket_sock_ops: { createPeer: function(sock, addr, port) {
          var ws;
          if (typeof addr == "object") {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            } else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            try {
              var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
              var url = "ws:#".replace("#", "//");
              if (runtimeConfig) {
                if ("string" === typeof Module["websocket"]["url"]) {
                  url = Module["websocket"]["url"];
                }
              }
              if (url === "ws://" || url === "wss://") {
                var parts = addr.split("/");
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
              }
              var subProtocols = "binary";
              if (runtimeConfig) {
                if ("string" === typeof Module["websocket"]["subprotocol"]) {
                  subProtocols = Module["websocket"]["subprotocol"];
                }
              }
              var opts = void 0;
              if (subProtocols !== "null") {
                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                opts = subProtocols;
              }
              if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                subProtocols = "null";
                opts = void 0;
              }
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
                WebSocketConstructor = require_ws();
              } else {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = "arraybuffer";
            } catch (e) {
              throw new FS.ErrnoError(23);
            }
          }
          var peer = { addr, port, socket: ws, dgram_send_queue: [] };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          if (sock.type === 2 && typeof sock.sport != "undefined") {
            peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]));
          }
          return peer;
        }, getPeer: function(sock, addr, port) {
          return sock.peers[addr + ":" + port];
        }, addPeer: function(sock, peer) {
          sock.peers[peer.addr + ":" + peer.port] = peer;
        }, removePeer: function(sock, peer) {
          delete sock.peers[peer.addr + ":" + peer.port];
        }, handlePeerEvents: function(sock, peer) {
          var first = true;
          var handleOpen = function() {
            Module["websocket"].emit("open", sock.stream.fd);
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            if (typeof data == "string") {
              var encoder3 = new TextEncoder();
              data = encoder3.encode(data);
            } else {
              assert(data.byteLength !== void 0);
              if (data.byteLength == 0) {
                return;
              }
              data = new Uint8Array(data);
            }
            var wasfirst = first;
            first = false;
            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
              var newport = data[8] << 8 | data[9];
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data });
            Module["websocket"].emit("message", sock.stream.fd);
          }
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on("open", handleOpen);
            peer.socket.on("message", function(data, isBinary) {
              if (!isBinary) {
                return;
              }
              handleMessage(new Uint8Array(data).buffer);
            });
            peer.socket.on("close", function() {
              Module["websocket"].emit("close", sock.stream.fd);
            });
            peer.socket.on("error", function(error) {
              sock.error = 14;
              Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module["websocket"].emit("close", sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              sock.error = 14;
              Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        }, poll: function(sock) {
          if (sock.type === 1 && sock.server) {
            return sock.pending.length ? 64 | 1 : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
          if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 64 | 1;
          }
          if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
            mask |= 4;
          }
          if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 16;
          }
          return mask;
        }, ioctl: function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[arg >>> 2] = bytes;
              return 0;
            default:
              return 28;
          }
        }, close: function(sock) {
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        }, bind: function(sock, addr, port) {
          if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
            throw new FS.ErrnoError(28);
          }
          sock.saddr = addr;
          sock.sport = port;
          if (sock.type === 2) {
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e.name === "ErrnoError"))
                throw e;
              if (e.errno !== 138)
                throw e;
            }
          }
        }, connect: function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(138);
          }
          if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(7);
              } else {
                throw new FS.ErrnoError(30);
              }
            }
          }
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          throw new FS.ErrnoError(26);
        }, listen: function(sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(138);
          }
          if (sock.server) {
            throw new FS.ErrnoError(28);
          }
          var WebSocketServer = require_ws().Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({ host, port: sock.sport });
          Module["websocket"].emit("listen", sock.stream.fd);
          sock.server.on("connection", function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              sock.pending.push(newsock);
              Module["websocket"].emit("connection", newsock.stream.fd);
            } else {
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
              Module["websocket"].emit("connection", sock.stream.fd);
            }
          });
          sock.server.on("close", function() {
            Module["websocket"].emit("close", sock.stream.fd);
            sock.server = null;
          });
          sock.server.on("error", function(error) {
            sock.error = 23;
            Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        }, accept: function(listensock) {
          if (!listensock.server || !listensock.pending.length) {
            throw new FS.ErrnoError(28);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        }, getname: function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === void 0 || sock.dport === void 0) {
              throw new FS.ErrnoError(53);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr, port };
        }, sendmsg: function(sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            if (addr === void 0 || port === void 0) {
              addr = sock.daddr;
              port = sock.dport;
            }
            if (addr === void 0 || port === void 0) {
              throw new FS.ErrnoError(17);
            }
          } else {
            addr = sock.daddr;
            port = sock.dport;
          }
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(53);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(6);
            }
          }
          if (ArrayBuffer.isView(buffer)) {
            offset += buffer.byteOffset;
            buffer = buffer.buffer;
          }
          var data;
          data = buffer.slice(offset, offset + length);
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(28);
          }
        }, recvmsg: function(sock, length) {
          if (sock.type === 1 && sock.server) {
            throw new FS.ErrnoError(53);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                throw new FS.ErrnoError(53);
              }
              if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                return null;
              }
              throw new FS.ErrnoError(6);
            }
            throw new FS.ErrnoError(6);
          }
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = { buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead), addr: queued.addr, port: queued.port };
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        } } };
        function getSocketFromFD(fd) {
          var socket = SOCKFS.getSocket(fd);
          if (!socket)
            throw new FS.ErrnoError(8);
          return socket;
        }
        function setErrNo(value) {
          HEAP32[___errno_location() >>> 2] = value;
          return value;
        }
        function inetNtop4(addr) {
          return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
        }
        function inetNtop6(ints) {
          var str = "";
          var word = 0;
          var longest = 0;
          var lastzero = 0;
          var zstart = 0;
          var len = 0;
          var i = 0;
          var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
          var hasipv4 = true;
          var v4part = "";
          for (i = 0; i < 5; i++) {
            if (parts[i] !== 0) {
              hasipv4 = false;
              break;
            }
          }
          if (hasipv4) {
            v4part = inetNtop4(parts[6] | parts[7] << 16);
            if (parts[5] === -1) {
              str = "::ffff:";
              str += v4part;
              return str;
            }
            if (parts[5] === 0) {
              str = "::";
              if (v4part === "0.0.0.0")
                v4part = "";
              if (v4part === "0.0.0.1")
                v4part = "1";
              str += v4part;
              return str;
            }
          }
          for (word = 0; word < 8; word++) {
            if (parts[word] === 0) {
              if (word - lastzero > 1) {
                len = 0;
              }
              lastzero = word;
              len++;
            }
            if (len > longest) {
              longest = len;
              zstart = word - longest + 1;
            }
          }
          for (word = 0; word < 8; word++) {
            if (longest > 1) {
              if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                if (word === zstart) {
                  str += ":";
                  if (zstart === 0)
                    str += ":";
                }
                continue;
              }
            }
            str += Number(_ntohs(parts[word] & 65535)).toString(16);
            str += word < 7 ? ":" : "";
          }
          return str;
        }
        function readSockaddr(sa, salen) {
          var family = HEAP16[sa >>> 1];
          var port = _ntohs(HEAPU16[sa + 2 >>> 1]);
          var addr;
          switch (family) {
            case 2:
              if (salen !== 16) {
                return { errno: 28 };
              }
              addr = HEAP32[sa + 4 >>> 2];
              addr = inetNtop4(addr);
              break;
            case 10:
              if (salen !== 28) {
                return { errno: 28 };
              }
              addr = [HEAP32[sa + 8 >>> 2], HEAP32[sa + 12 >>> 2], HEAP32[sa + 16 >>> 2], HEAP32[sa + 20 >>> 2]];
              addr = inetNtop6(addr);
              break;
            default:
              return { errno: 5 };
          }
          return { family, addr, port };
        }
        function inetPton4(str) {
          var b = str.split(".");
          for (var i = 0; i < 4; i++) {
            var tmp = Number(b[i]);
            if (isNaN(tmp))
              return null;
            b[i] = tmp;
          }
          return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
        }
        function jstoi_q(str) {
          return parseInt(str);
        }
        function inetPton6(str) {
          var words;
          var w, offset, z;
          var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
          var parts = [];
          if (!valid6regx.test(str)) {
            return null;
          }
          if (str === "::") {
            return [0, 0, 0, 0, 0, 0, 0, 0];
          }
          if (str.startsWith("::")) {
            str = str.replace("::", "Z:");
          } else {
            str = str.replace("::", ":Z:");
          }
          if (str.indexOf(".") > 0) {
            str = str.replace(new RegExp("[.]", "g"), ":");
            words = str.split(":");
            words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
            words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
            words = words.slice(0, words.length - 2);
          } else {
            words = str.split(":");
          }
          offset = 0;
          z = 0;
          for (w = 0; w < words.length; w++) {
            if (typeof words[w] == "string") {
              if (words[w] === "Z") {
                for (z = 0; z < 8 - words.length + 1; z++) {
                  parts[w + z] = 0;
                }
                offset = z - 1;
              } else {
                parts[w + offset] = _htons(parseInt(words[w], 16));
              }
            } else {
              parts[w + offset] = words[w];
            }
          }
          return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]];
        }
        var DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(name) {
          var res = inetPton4(name);
          if (res !== null) {
            return name;
          }
          res = inetPton6(name);
          if (res !== null) {
            return name;
          }
          var addr;
          if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name];
          } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, "exceeded max address mappings of 65535");
            addr = "172.29." + (id & 255) + "." + (id & 65280);
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr;
          }
          return addr;
        }, lookup_addr: function(addr) {
          if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr];
          }
          return null;
        } };
        function getSocketAddress(addrp, addrlen, allowNull) {
          if (allowNull && addrp === 0)
            return null;
          var info = readSockaddr(addrp, addrlen);
          if (info.errno)
            throw new FS.ErrnoError(info.errno);
          info.addr = DNS.lookup_addr(info.addr) || info.addr;
          return info;
        }
        function ___syscall_bind(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            var info = getSocketAddress(addr, addrlen);
            sock.sock_ops.bind(sock, info.addr, info.port);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_connect(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            var info = getSocketAddress(addr, addrlen);
            sock.sock_ops.connect(sock, info.addr, info.port);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_faccessat(dirfd, path2, amode, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            if (amode & ~7) {
              return -28;
            }
            var lookup = FS.lookupPath(path2, { follow: true });
            var node = lookup.node;
            if (!node) {
              return -44;
            }
            var perms = "";
            if (amode & 4)
              perms += "r";
            if (amode & 2)
              perms += "w";
            if (amode & 1)
              perms += "x";
            if (perms && FS.nodePermissions(node, perms)) {
              return -2;
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_fcntl64(fd, cmd, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (cmd) {
              case 0: {
                var arg = SYSCALLS.get();
                if (arg < 0) {
                  return -28;
                }
                var newStream;
                newStream = FS.createStream(stream, arg);
                return newStream.fd;
              }
              case 1:
              case 2:
                return 0;
              case 3:
                return stream.flags;
              case 4: {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0;
              }
              case 5: {
                var arg = SYSCALLS.get();
                var offset = 0;
                HEAP16[arg + offset >>> 1] = 2;
                return 0;
              }
              case 6:
              case 7:
                return 0;
              case 16:
              case 8:
                return -28;
              case 9:
                setErrNo(28);
                return -1;
              default: {
                return -28;
              }
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_fstat64(fd, buf) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            return SYSCALLS.doStat(FS.stat, stream.path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function convertI32PairToI53Checked(lo, hi) {
          return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
        }
        function ___syscall_ftruncate64(fd, length_low, length_high) {
          try {
            var length = convertI32PairToI53Checked(length_low, length_high);
            if (isNaN(length))
              return -61;
            FS.ftruncate(fd, length);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        function ___syscall_getdents64(fd, dirp, count) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            if (!stream.getdents) {
              stream.getdents = FS.readdir(stream.path);
            }
            var struct_size = 280;
            var pos = 0;
            var off = FS.llseek(stream, 0, 1);
            var idx = Math.floor(off / struct_size);
            while (idx < stream.getdents.length && pos + struct_size <= count) {
              var id;
              var type;
              var name = stream.getdents[idx];
              if (name === ".") {
                id = stream.node.id;
                type = 4;
              } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, { parent: true });
                id = lookup.node.id;
                type = 4;
              } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
              }
              tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >>> 2] = tempI64[0], HEAP32[dirp + pos + 4 >>> 2] = tempI64[1];
              tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >>> 2] = tempI64[0], HEAP32[dirp + pos + 12 >>> 2] = tempI64[1];
              HEAP16[dirp + pos + 16 >>> 1] = 280;
              HEAP8[dirp + pos + 18 >>> 0] = type;
              stringToUTF8(name, dirp + pos + 19, 256);
              pos += struct_size;
              idx += 1;
            }
            FS.llseek(stream, idx * struct_size, 0);
            return pos;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function writeSockaddr(sa, family, addr, port, addrlen) {
          switch (family) {
            case 2:
              addr = inetPton4(addr);
              zeroMemory(sa, 16);
              if (addrlen) {
                HEAP32[addrlen >>> 2] = 16;
              }
              HEAP16[sa >>> 1] = family;
              HEAP32[sa + 4 >>> 2] = addr;
              HEAP16[sa + 2 >>> 1] = _htons(port);
              break;
            case 10:
              addr = inetPton6(addr);
              zeroMemory(sa, 28);
              if (addrlen) {
                HEAP32[addrlen >>> 2] = 28;
              }
              HEAP32[sa >>> 2] = family;
              HEAP32[sa + 8 >>> 2] = addr[0];
              HEAP32[sa + 12 >>> 2] = addr[1];
              HEAP32[sa + 16 >>> 2] = addr[2];
              HEAP32[sa + 20 >>> 2] = addr[3];
              HEAP16[sa + 2 >>> 1] = _htons(port);
              break;
            default:
              return 5;
          }
          return 0;
        }
        function ___syscall_getpeername(fd, addr, addrlen, d1, d2, d3) {
          try {
            var sock = getSocketFromFD(fd);
            if (!sock.daddr) {
              return -53;
            }
            var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_getsockopt(fd, level, optname, optval, optlen, d1) {
          try {
            var sock = getSocketFromFD(fd);
            if (level === 1) {
              if (optname === 4) {
                HEAP32[optval >>> 2] = sock.error;
                HEAP32[optlen >>> 2] = 4;
                sock.error = null;
                return 0;
              }
            }
            return -50;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_ioctl(fd, op, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (op) {
              case 21509:
              case 21505: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21510:
              case 21511:
              case 21512:
              case 21506:
              case 21507:
              case 21508: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21519: {
                if (!stream.tty)
                  return -59;
                var argp = SYSCALLS.get();
                HEAP32[argp >>> 2] = 0;
                return 0;
              }
              case 21520: {
                if (!stream.tty)
                  return -59;
                return -28;
              }
              case 21531: {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp);
              }
              case 21523: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              case 21524: {
                if (!stream.tty)
                  return -59;
                return 0;
              }
              default:
                return -28;
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_lstat64(path2, buf) {
          try {
            path2 = SYSCALLS.getStr(path2);
            return SYSCALLS.doStat(FS.lstat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_mkdirat(dirfd, path2, mode) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            path2 = PATH.normalize(path2);
            if (path2[path2.length - 1] === "/")
              path2 = path2.substr(0, path2.length - 1);
            FS.mkdir(path2, mode, 0);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_newfstatat(dirfd, path2, buf, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            var nofollow = flags & 256;
            var allowEmpty = flags & 4096;
            flags = flags & ~6400;
            path2 = SYSCALLS.calculateAt(dirfd, path2, allowEmpty);
            return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_openat(dirfd, path2, flags, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            var mode = varargs ? SYSCALLS.get() : 0;
            return FS.open(path2, flags, mode).fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
          try {
            var sock = getSocketFromFD(fd);
            var msg = sock.sock_ops.recvmsg(sock, len);
            if (!msg)
              return 0;
            if (addr) {
              var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
            }
            HEAPU8.set(msg.buffer, buf >>> 0);
            return msg.buffer.byteLength;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
          try {
            oldpath = SYSCALLS.getStr(oldpath);
            newpath = SYSCALLS.getStr(newpath);
            oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
            newpath = SYSCALLS.calculateAt(newdirfd, newpath);
            FS.rename(oldpath, newpath);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_rmdir(path2) {
          try {
            path2 = SYSCALLS.getStr(path2);
            FS.rmdir(path2);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
          try {
            var sock = getSocketFromFD(fd);
            var dest = getSocketAddress(addr, addr_len, true);
            if (!dest) {
              return FS.write(sock.stream, HEAP8, message, length);
            }
            return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_socket(domain, type, protocol) {
          try {
            var sock = SOCKFS.createSocket(domain, type, protocol);
            return sock.stream.fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_stat64(path2, buf) {
          try {
            path2 = SYSCALLS.getStr(path2);
            return SYSCALLS.doStat(FS.stat, path2, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        function ___syscall_unlinkat(dirfd, path2, flags) {
          try {
            path2 = SYSCALLS.getStr(path2);
            path2 = SYSCALLS.calculateAt(dirfd, path2);
            if (flags === 0) {
              FS.unlink(path2);
            } else if (flags === 512) {
              FS.rmdir(path2);
            } else {
              abort("Invalid flags passed to unlinkat");
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return -e.errno;
          }
        }
        var nowIsMonotonic = true;
        function __emscripten_get_now_is_monotonic() {
          return nowIsMonotonic;
        }
        function readI53FromI64(ptr) {
          return HEAPU32[ptr >>> 2] + HEAP32[ptr + 4 >>> 2] * 4294967296;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        }
        var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        function ydayFromDate(date) {
          var leap = isLeapYear(date.getFullYear());
          var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
          var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
          return yday;
        }
        function __localtime_js(time, tmPtr) {
          var date = new Date(readI53FromI64(time) * 1e3);
          HEAP32[tmPtr >>> 2] = date.getSeconds();
          HEAP32[tmPtr + 4 >>> 2] = date.getMinutes();
          HEAP32[tmPtr + 8 >>> 2] = date.getHours();
          HEAP32[tmPtr + 12 >>> 2] = date.getDate();
          HEAP32[tmPtr + 16 >>> 2] = date.getMonth();
          HEAP32[tmPtr + 20 >>> 2] = date.getFullYear() - 1900;
          HEAP32[tmPtr + 24 >>> 2] = date.getDay();
          var yday = ydayFromDate(date) | 0;
          HEAP32[tmPtr + 28 >>> 2] = yday;
          HEAP32[tmPtr + 36 >>> 2] = -(date.getTimezoneOffset() * 60);
          var start = new Date(date.getFullYear(), 0, 1);
          var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
          var winterOffset = start.getTimezoneOffset();
          var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
          HEAP32[tmPtr + 32 >>> 2] = dst;
        }
        function stringToNewUTF8(str) {
          var size = lengthBytesUTF8(str) + 1;
          var ret = _malloc(size);
          if (ret)
            stringToUTF8(str, ret, size);
          return ret;
        }
        function __tzset_js(timezone, daylight, tzname) {
          var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
          var winter = new Date(currentYear, 0, 1);
          var summer = new Date(currentYear, 6, 1);
          var winterOffset = winter.getTimezoneOffset();
          var summerOffset = summer.getTimezoneOffset();
          var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
          HEAPU32[timezone >>> 2] = stdTimezoneOffset * 60;
          HEAP32[daylight >>> 2] = Number(winterOffset != summerOffset);
          function extractZone(date) {
            var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
            return match ? match[1] : "GMT";
          }
          var winterName = extractZone(winter);
          var summerName = extractZone(summer);
          var winterNamePtr = stringToNewUTF8(winterName);
          var summerNamePtr = stringToNewUTF8(summerName);
          if (summerOffset < winterOffset) {
            HEAPU32[tzname >>> 2] = winterNamePtr;
            HEAPU32[tzname + 4 >>> 2] = summerNamePtr;
          } else {
            HEAPU32[tzname >>> 2] = summerNamePtr;
            HEAPU32[tzname + 4 >>> 2] = winterNamePtr;
          }
        }
        function _abort() {
          abort("");
        }
        function _dlopen(filename, flags) {
          abort(dlopenMissingError);
        }
        function _duckdb_web_fs_directory_create(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_exists(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_list_files(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path2, pathLen);
        }
        function _duckdb_web_fs_directory_remove(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path2, pathLen);
        }
        function _duckdb_web_fs_file_close(fileId) {
          return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
        }
        function _duckdb_web_fs_file_exists(path2, pathLen, url, urlLen) {
          return globalThis.DUCKDB_RUNTIME.checkFile(Module, path2, pathLen, url, urlLen);
        }
        function _duckdb_web_fs_file_get_last_modified_time(fileId) {
          return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
        }
        function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
          return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
        }
        function _duckdb_web_fs_file_open(fileId, flags) {
          return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId, flags);
        }
        function _duckdb_web_fs_file_read(fileId, buf, size, location) {
          return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
        }
        function _duckdb_web_fs_file_truncate(fileId, newSize) {
          return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
        }
        function _duckdb_web_fs_file_write(fileId, buf, size, location) {
          return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
        }
        function _duckdb_web_fs_get_default_data_protocol(Module2) {
          return globalThis.DUCKDB_RUNTIME.getDefaultDataProtocol(Module2);
        }
        function _duckdb_web_fs_glob(path2, pathLen) {
          return globalThis.DUCKDB_RUNTIME.glob(Module, path2, pathLen);
        }
        function _duckdb_web_test_platform_feature(feature) {
          return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
        }
        function _duckdb_web_udf_scalar_call(funcId, descPtr, descSize, ptrsPtr, ptrsSize, response) {
          return globalThis.DUCKDB_RUNTIME.callScalarUDF(Module, funcId, descPtr, descSize, ptrsPtr, ptrsSize, response);
        }
        function _emscripten_date_now() {
          return Date.now();
        }
        function getHeapMax() {
          return 4294901760;
        }
        function _emscripten_get_heap_max() {
          return getHeapMax();
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_NODE) {
          global.performance = require("perf_hooks").performance;
        }
        _emscripten_get_now = () => performance.now();
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
        }
        function emscripten_realloc_buffer(size) {
          var b = wasmMemory.buffer;
          var pages = size - b.byteLength + 65535 >>> 16;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var ENV = {};
        function getExecutableName() {
          return thisProgram || "./this.program";
        }
        function getEnvStrings() {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
            for (var x in ENV) {
              if (ENV[x] === void 0)
                delete env[x];
              else
                env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(`${x}=${env[x]}`);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        }
        function stringToAscii(str, buffer) {
          for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer++ >>> 0] = str.charCodeAt(i);
          }
          HEAP8[buffer >>> 0] = 0;
        }
        function _environ_get(__environ, environ_buf) {
          var bufSize = 0;
          getEnvStrings().forEach(function(string, i) {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >>> 2] = ptr;
            stringToAscii(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        }
        function _environ_sizes_get(penviron_count, penviron_buf_size) {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >>> 2] = strings.length;
          var bufSize = 0;
          strings.forEach(function(string) {
            bufSize += string.length + 1;
          });
          HEAPU32[penviron_buf_size >>> 2] = bufSize;
          return 0;
        }
        function _fd_close(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_fdstat_get(fd, pbuf) {
          try {
            var rightsBase = 0;
            var rightsInheriting = 0;
            var flags = 0;
            {
              var stream = SYSCALLS.getStreamFromFD(fd);
              var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
            }
            HEAP8[pbuf >>> 0] = type;
            HEAP16[pbuf + 2 >>> 1] = flags;
            tempI64 = [rightsBase >>> 0, (tempDouble = rightsBase, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 8 >>> 2] = tempI64[0], HEAP32[pbuf + 12 >>> 2] = tempI64[1];
            tempI64 = [rightsInheriting >>> 0, (tempDouble = rightsInheriting, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[pbuf + 16 >>> 2] = tempI64[0], HEAP32[pbuf + 20 >>> 2] = tempI64[1];
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function doReadv(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >>> 2];
            var len = HEAPU32[iov + 4 >>> 2];
            iov += 8;
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (curr < len)
              break;
            if (typeof offset !== "undefined") {
              offset += curr;
            }
          }
          return ret;
        }
        function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt, offset);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function doWritev(stream, iov, iovcnt, offset) {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >>> 2];
            var len = HEAPU32[iov + 4 >>> 2];
            iov += 8;
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
              return -1;
            ret += curr;
            if (typeof offset !== "undefined") {
              offset += curr;
            }
          }
          return ret;
        }
        function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt, offset);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_read(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          try {
            var offset = convertI32PairToI53Checked(offset_low, offset_high);
            if (isNaN(offset))
              return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.llseek(stream, offset, whence);
            tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >>> 2] = tempI64[0], HEAP32[newOffset + 4 >>> 2] = tempI64[1];
            if (stream.getdents && offset === 0 && whence === 0)
              stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_sync(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            if (stream.stream_ops && stream.stream_ops.fsync) {
              return stream.stream_ops.fsync(stream);
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt);
            HEAPU32[pnum >>> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
              throw e;
            return e.errno;
          }
        }
        function _getaddrinfo(node, service, hint, out2) {
          var addr = 0;
          var port = 0;
          var flags = 0;
          var family = 0;
          var type = 0;
          var proto = 0;
          var ai;
          function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
            var sa, salen, ai2;
            var errno;
            salen = family2 === 10 ? 28 : 16;
            addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
            sa = _malloc(salen);
            errno = writeSockaddr(sa, family2, addr2, port2);
            assert(!errno);
            ai2 = _malloc(32);
            HEAP32[ai2 + 4 >>> 2] = family2;
            HEAP32[ai2 + 8 >>> 2] = type2;
            HEAP32[ai2 + 12 >>> 2] = proto2;
            HEAPU32[ai2 + 24 >>> 2] = canon;
            HEAPU32[ai2 + 20 >>> 2] = sa;
            if (family2 === 10) {
              HEAP32[ai2 + 16 >>> 2] = 28;
            } else {
              HEAP32[ai2 + 16 >>> 2] = 16;
            }
            HEAP32[ai2 + 28 >>> 2] = 0;
            return ai2;
          }
          if (hint) {
            flags = HEAP32[hint >>> 2];
            family = HEAP32[hint + 4 >>> 2];
            type = HEAP32[hint + 8 >>> 2];
            proto = HEAP32[hint + 12 >>> 2];
          }
          if (type && !proto) {
            proto = type === 2 ? 17 : 6;
          }
          if (!type && proto) {
            type = proto === 17 ? 2 : 1;
          }
          if (proto === 0) {
            proto = 6;
          }
          if (type === 0) {
            type = 1;
          }
          if (!node && !service) {
            return -2;
          }
          if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
            return -1;
          }
          if (hint !== 0 && HEAP32[hint >>> 2] & 2 && !node) {
            return -1;
          }
          if (flags & 32) {
            return -2;
          }
          if (type !== 0 && type !== 1 && type !== 2) {
            return -7;
          }
          if (family !== 0 && family !== 2 && family !== 10) {
            return -6;
          }
          if (service) {
            service = UTF8ToString(service);
            port = parseInt(service, 10);
            if (isNaN(port)) {
              if (flags & 1024) {
                return -2;
              }
              return -8;
            }
          }
          if (!node) {
            if (family === 0) {
              family = 2;
            }
            if ((flags & 1) === 0) {
              if (family === 2) {
                addr = _htonl(2130706433);
              } else {
                addr = [0, 0, 0, 1];
              }
            }
            ai = allocaddrinfo(family, type, proto, null, addr, port);
            HEAPU32[out2 >>> 2] = ai;
            return 0;
          }
          node = UTF8ToString(node);
          addr = inetPton4(node);
          if (addr !== null) {
            if (family === 0 || family === 2) {
              family = 2;
            } else if (family === 10 && flags & 8) {
              addr = [0, 0, _htonl(65535), addr];
              family = 10;
            } else {
              return -2;
            }
          } else {
            addr = inetPton6(node);
            if (addr !== null) {
              if (family === 0 || family === 10) {
                family = 10;
              } else {
                return -2;
              }
            }
          }
          if (addr != null) {
            ai = allocaddrinfo(family, type, proto, node, addr, port);
            HEAPU32[out2 >>> 2] = ai;
            return 0;
          }
          if (flags & 4) {
            return -2;
          }
          node = DNS.lookup_name(node);
          addr = inetPton4(node);
          if (family === 0) {
            family = 2;
          } else if (family === 10) {
            addr = [0, 0, _htonl(65535), addr];
          }
          ai = allocaddrinfo(family, type, proto, null, addr, port);
          HEAPU32[out2 >>> 2] = ai;
          return 0;
        }
        function _getentropy(buffer, size) {
          randomFill(HEAPU8.subarray(buffer >>> 0, buffer + size >>> 0));
          return 0;
        }
        function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
          var info = readSockaddr(sa, salen);
          if (info.errno) {
            return -6;
          }
          var port = info.port;
          var addr = info.addr;
          var overflowed = false;
          if (node && nodelen) {
            var lookup;
            if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
              if (flags & 8) {
                return -2;
              }
            } else {
              addr = lookup;
            }
            var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
            if (numBytesWrittenExclNull + 1 >= nodelen) {
              overflowed = true;
            }
          }
          if (serv && servlen) {
            port = "" + port;
            var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
            if (numBytesWrittenExclNull + 1 >= servlen) {
              overflowed = true;
            }
          }
          if (overflowed) {
            return -12;
          }
          return 0;
        }
        function arraySum(array, index) {
          var sum = 0;
          for (var i = 0; i <= index; sum += array[i++]) {
          }
          return sum;
        }
        var MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function addDays(date, days) {
          var newDate = new Date(date.getTime());
          while (days > 0) {
            var leap = isLeapYear(newDate.getFullYear());
            var currentMonth = newDate.getMonth();
            var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
            if (days > daysInCurrentMonth - newDate.getDate()) {
              days -= daysInCurrentMonth - newDate.getDate() + 1;
              newDate.setDate(1);
              if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1);
              } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1);
              }
            } else {
              newDate.setDate(newDate.getDate() + days);
              return newDate;
            }
          }
          return newDate;
        }
        function writeArrayToMemory(array, buffer) {
          HEAP8.set(array, buffer >>> 0);
        }
        function _strftime(s, maxsize, format, tm) {
          var tm_zone = HEAP32[tm + 40 >>> 2];
          var date = { tm_sec: HEAP32[tm >>> 2], tm_min: HEAP32[tm + 4 >>> 2], tm_hour: HEAP32[tm + 8 >>> 2], tm_mday: HEAP32[tm + 12 >>> 2], tm_mon: HEAP32[tm + 16 >>> 2], tm_year: HEAP32[tm + 20 >>> 2], tm_wday: HEAP32[tm + 24 >>> 2], tm_yday: HEAP32[tm + 28 >>> 2], tm_isdst: HEAP32[tm + 32 >>> 2], tm_gmtoff: HEAP32[tm + 36 >>> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
          var pattern = UTF8ToString(format);
          var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
          for (var rule in EXPANSION_RULES_1) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
          }
          var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          function leadingSomething(value, digits, character) {
            var str = typeof value == "number" ? value.toString() : value || "";
            while (str.length < digits) {
              str = character[0] + str;
            }
            return str;
          }
          function leadingNulls(value, digits) {
            return leadingSomething(value, digits, "0");
          }
          function compareByDay(date1, date2) {
            function sgn(value) {
              return value < 0 ? -1 : value > 0 ? 1 : 0;
            }
            var compare;
            if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
              if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate());
              }
            }
            return compare;
          }
          function getFirstWeekStartDate(janFourth) {
            switch (janFourth.getDay()) {
              case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
              case 1:
                return janFourth;
              case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
              case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
              case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
              case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30);
            }
          }
          function getWeekBasedYear(date2) {
            var thisDate = addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
            var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
            var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
            var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
            var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
            if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
              if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1;
              }
              return thisDate.getFullYear();
            }
            return thisDate.getFullYear() - 1;
          }
          var EXPANSION_RULES_2 = { "%a": function(date2) {
            return WEEKDAYS[date2.tm_wday].substring(0, 3);
          }, "%A": function(date2) {
            return WEEKDAYS[date2.tm_wday];
          }, "%b": function(date2) {
            return MONTHS[date2.tm_mon].substring(0, 3);
          }, "%B": function(date2) {
            return MONTHS[date2.tm_mon];
          }, "%C": function(date2) {
            var year = date2.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2);
          }, "%d": function(date2) {
            return leadingNulls(date2.tm_mday, 2);
          }, "%e": function(date2) {
            return leadingSomething(date2.tm_mday, 2, " ");
          }, "%g": function(date2) {
            return getWeekBasedYear(date2).toString().substring(2);
          }, "%G": function(date2) {
            return getWeekBasedYear(date2);
          }, "%H": function(date2) {
            return leadingNulls(date2.tm_hour, 2);
          }, "%I": function(date2) {
            var twelveHour = date2.tm_hour;
            if (twelveHour == 0)
              twelveHour = 12;
            else if (twelveHour > 12)
              twelveHour -= 12;
            return leadingNulls(twelveHour, 2);
          }, "%j": function(date2) {
            return leadingNulls(date2.tm_mday + arraySum(isLeapYear(date2.tm_year + 1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
          }, "%m": function(date2) {
            return leadingNulls(date2.tm_mon + 1, 2);
          }, "%M": function(date2) {
            return leadingNulls(date2.tm_min, 2);
          }, "%n": function() {
            return "\n";
          }, "%p": function(date2) {
            if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
              return "AM";
            }
            return "PM";
          }, "%S": function(date2) {
            return leadingNulls(date2.tm_sec, 2);
          }, "%t": function() {
            return "	";
          }, "%u": function(date2) {
            return date2.tm_wday || 7;
          }, "%U": function(date2) {
            var days = date2.tm_yday + 7 - date2.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2);
          }, "%V": function(date2) {
            var val = Math.floor((date2.tm_yday + 7 - (date2.tm_wday + 6) % 7) / 7);
            if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
              val++;
            }
            if (!val) {
              val = 52;
              var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
              if (dec31 == 4 || dec31 == 5 && isLeapYear(date2.tm_year % 400 - 1)) {
                val++;
              }
            } else if (val == 53) {
              var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
              if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date2.tm_year)))
                val = 1;
            }
            return leadingNulls(val, 2);
          }, "%w": function(date2) {
            return date2.tm_wday;
          }, "%W": function(date2) {
            var days = date2.tm_yday + 7 - (date2.tm_wday + 6) % 7;
            return leadingNulls(Math.floor(days / 7), 2);
          }, "%y": function(date2) {
            return (date2.tm_year + 1900).toString().substring(2);
          }, "%Y": function(date2) {
            return date2.tm_year + 1900;
          }, "%z": function(date2) {
            var off = date2.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
          }, "%Z": function(date2) {
            return date2.tm_zone;
          }, "%%": function() {
            return "%";
          } };
          pattern = pattern.replace(/%%/g, "\0\0");
          for (var rule in EXPANSION_RULES_2) {
            if (pattern.includes(rule)) {
              pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
            }
          }
          pattern = pattern.replace(/\0\0/g, "%");
          var bytes = intArrayFromString(pattern, false);
          if (bytes.length > maxsize) {
            return 0;
          }
          writeArrayToMemory(bytes, s);
          return bytes.length - 1;
        }
        function _strftime_l(s, maxsize, format, tm, loc) {
          return _strftime(s, maxsize, format, tm);
        }
        function _unzClose() {
          err("missing function: unzClose");
          abort(-1);
        }
        function _unzCloseCurrentFile() {
          err("missing function: unzCloseCurrentFile");
          abort(-1);
        }
        function _unzGetCurrentFileInfo() {
          err("missing function: unzGetCurrentFileInfo");
          abort(-1);
        }
        function _unzGetCurrentFileInfo64() {
          err("missing function: unzGetCurrentFileInfo64");
          abort(-1);
        }
        function _unzGetGlobalInfo() {
          err("missing function: unzGetGlobalInfo");
          abort(-1);
        }
        function _unzGoToFirstFile() {
          err("missing function: unzGoToFirstFile");
          abort(-1);
        }
        function _unzGoToNextFile() {
          err("missing function: unzGoToNextFile");
          abort(-1);
        }
        function _unzLocateFile() {
          err("missing function: unzLocateFile");
          abort(-1);
        }
        function _unzOpen2() {
          err("missing function: unzOpen2");
          abort(-1);
        }
        function _unzOpenCurrentFile() {
          err("missing function: unzOpenCurrentFile");
          abort(-1);
        }
        function _unzReadCurrentFile() {
          err("missing function: unzReadCurrentFile");
          abort(-1);
        }
        function _proc_exit(code) {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            if (Module["onExit"])
              Module["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          _proc_exit(status);
        }
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function stringToUTF8OnStack(str) {
          var size = lengthBytesUTF8(str) + 1;
          var ret = stackAlloc(size);
          stringToUTF8(str, ret, size);
          return ret;
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = { "string": (str) => {
            var ret2 = 0;
            if (str !== null && str !== void 0 && str !== 0) {
              ret2 = stringToUTF8OnStack(str);
            }
            return ret2;
          }, "array": (arr) => {
            var ret2 = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret2);
            return ret2;
          } };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean")
              return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0)
                  stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0)
              stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        var FSNode = function(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.mounted = null;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.node_ops = {};
          this.stream_ops = {};
          this.rdev = rdev;
        };
        var readMode = 292 | 73;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, { read: { get: function() {
          return (this.mode & readMode) === readMode;
        }, set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        } }, write: { get: function() {
          return (this.mode & writeMode) === writeMode;
        }, set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        } }, isFolder: { get: function() {
          return FS.isDir(this.mode);
        } }, isDevice: { get: function() {
          return FS.isChrdev(this.mode);
        } } });
        FS.FSNode = FSNode;
        FS.createPreloadedFile = FS_createPreloadedFile;
        FS.staticInit();
        var wasmImports = { "f": _XML_GetBuffer, "R": _XML_GetErrorCode, "T": _XML_Parse, "l": _XML_ParseBuffer, "n": _XML_ParserCreate, "b": _XML_ParserFree, "z": _XML_ResumeParser, "e": _XML_SetCharacterDataHandler, "a": _XML_SetElementHandler, "m": _XML_SetUserData, "i": _XML_StopParser, "Aa": ___dlsym, "va": ___syscall__newselect, "za": ___syscall_bind, "ya": ___syscall_connect, "ra": ___syscall_faccessat, "c": ___syscall_fcntl64, "qa": ___syscall_fstat64, "M": ___syscall_ftruncate64, "la": ___syscall_getdents64, "ta": ___syscall_getpeername, "ua": ___syscall_getsockopt, "I": ___syscall_ioctl, "na": ___syscall_lstat64, "ma": ___syscall_mkdirat, "oa": ___syscall_newfstatat, "J": ___syscall_openat, "wa": ___syscall_recvfrom, "ja": ___syscall_renameat, "D": ___syscall_rmdir, "xa": ___syscall_sendto, "F": ___syscall_socket, "pa": ___syscall_stat64, "E": ___syscall_unlinkat, "K": __emscripten_get_now_is_monotonic, "V": __localtime_js, "W": __tzset_js, "d": _abort, "Ba": _dlopen, "ba": _duckdb_web_fs_directory_create, "ca": _duckdb_web_fs_directory_exists, "_": _duckdb_web_fs_directory_list_files, "$": _duckdb_web_fs_directory_remove, "B": _duckdb_web_fs_file_close, "Y": _duckdb_web_fs_file_exists, "L": _duckdb_web_fs_file_get_last_modified_time, "Z": _duckdb_web_fs_file_move, "ea": _duckdb_web_fs_file_open, "o": _duckdb_web_fs_file_read, "da": _duckdb_web_fs_file_truncate, "C": _duckdb_web_fs_file_write, "fa": _duckdb_web_fs_get_default_data_protocol, "X": _duckdb_web_fs_glob, "A": _duckdb_web_test_platform_feature, "ga": _duckdb_web_udf_scalar_call, "u": _emscripten_date_now, "S": _emscripten_get_heap_max, "g": _emscripten_get_now, "Da": _emscripten_memcpy_big, "Ea": _emscripten_resize_heap, "aa": _environ_get, "ia": _environ_sizes_get, "j": _fd_close, "Ca": _fd_fdstat_get, "O": _fd_pread, "N": _fd_pwrite, "H": _fd_read, "P": _fd_seek, "ka": _fd_sync, "t": _fd_write, "G": _getaddrinfo, "ha": _getentropy, "sa": _getnameinfo, "U": _strftime_l, "h": _unzClose, "s": _unzCloseCurrentFile, "x": _unzGetCurrentFileInfo, "p": _unzGetCurrentFileInfo64, "Q": _unzGetGlobalInfo, "y": _unzGoToFirstFile, "w": _unzGoToNextFile, "r": _unzLocateFile, "v": _unzOpen2, "q": _unzOpenCurrentFile, "k": _unzReadCurrentFile };
        var asm = createWasm();
        var ___wasm_call_ctors = function() {
          return (___wasm_call_ctors = Module["asm"]["Ga"]).apply(null, arguments);
        };
        var _main = Module["_main"] = function() {
          return (_main = Module["_main"] = Module["asm"]["Ha"]).apply(null, arguments);
        };
        var _duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = function() {
          return (_duckdb_web_fs_glob_add_path = Module["_duckdb_web_fs_glob_add_path"] = Module["asm"]["Ja"]).apply(null, arguments);
        };
        var _duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = function() {
          return (_duckdb_web_clear_response = Module["_duckdb_web_clear_response"] = Module["asm"]["Ka"]).apply(null, arguments);
        };
        var _duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = function() {
          return (_duckdb_web_fail_with = Module["_duckdb_web_fail_with"] = Module["asm"]["La"]).apply(null, arguments);
        };
        var _duckdb_web_reset = Module["_duckdb_web_reset"] = function() {
          return (_duckdb_web_reset = Module["_duckdb_web_reset"] = Module["asm"]["Ma"]).apply(null, arguments);
        };
        var _duckdb_web_connect = Module["_duckdb_web_connect"] = function() {
          return (_duckdb_web_connect = Module["_duckdb_web_connect"] = Module["asm"]["Na"]).apply(null, arguments);
        };
        var _duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = function() {
          return (_duckdb_web_disconnect = Module["_duckdb_web_disconnect"] = Module["asm"]["Oa"]).apply(null, arguments);
        };
        var _duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = function() {
          return (_duckdb_web_flush_files = Module["_duckdb_web_flush_files"] = Module["asm"]["Pa"]).apply(null, arguments);
        };
        var _duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = function() {
          return (_duckdb_web_flush_file = Module["_duckdb_web_flush_file"] = Module["asm"]["Qa"]).apply(null, arguments);
        };
        var _duckdb_web_open = Module["_duckdb_web_open"] = function() {
          return (_duckdb_web_open = Module["_duckdb_web_open"] = Module["asm"]["Ra"]).apply(null, arguments);
        };
        var _duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = function() {
          return (_duckdb_web_get_global_file_info = Module["_duckdb_web_get_global_file_info"] = Module["asm"]["Sa"]).apply(null, arguments);
        };
        var _duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = function() {
          return (_duckdb_web_collect_file_stats = Module["_duckdb_web_collect_file_stats"] = Module["asm"]["Ta"]).apply(null, arguments);
        };
        var _duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = function() {
          return (_duckdb_web_export_file_stats = Module["_duckdb_web_export_file_stats"] = Module["asm"]["Ua"]).apply(null, arguments);
        };
        var _duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = function() {
          return (_duckdb_web_fs_drop_file = Module["_duckdb_web_fs_drop_file"] = Module["asm"]["Va"]).apply(null, arguments);
        };
        var _duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = function() {
          return (_duckdb_web_fs_drop_files = Module["_duckdb_web_fs_drop_files"] = Module["asm"]["Wa"]).apply(null, arguments);
        };
        var _duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = function() {
          return (_duckdb_web_fs_glob_file_infos = Module["_duckdb_web_fs_glob_file_infos"] = Module["asm"]["Xa"]).apply(null, arguments);
        };
        var _duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = function() {
          return (_duckdb_web_fs_get_file_info_by_id = Module["_duckdb_web_fs_get_file_info_by_id"] = Module["asm"]["Ya"]).apply(null, arguments);
        };
        var _duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = function() {
          return (_duckdb_web_fs_get_file_info_by_name = Module["_duckdb_web_fs_get_file_info_by_name"] = Module["asm"]["Za"]).apply(null, arguments);
        };
        var _duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = function() {
          return (_duckdb_web_fs_register_file_url = Module["_duckdb_web_fs_register_file_url"] = Module["asm"]["_a"]).apply(null, arguments);
        };
        var _duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = function() {
          return (_duckdb_web_fs_register_file_buffer = Module["_duckdb_web_fs_register_file_buffer"] = Module["asm"]["$a"]).apply(null, arguments);
        };
        var _duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = function() {
          return (_duckdb_web_copy_file_to_buffer = Module["_duckdb_web_copy_file_to_buffer"] = Module["asm"]["ab"]).apply(null, arguments);
        };
        var _duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = function() {
          return (_duckdb_web_copy_file_to_path = Module["_duckdb_web_copy_file_to_path"] = Module["asm"]["bb"]).apply(null, arguments);
        };
        var _duckdb_web_get_version = Module["_duckdb_web_get_version"] = function() {
          return (_duckdb_web_get_version = Module["_duckdb_web_get_version"] = Module["asm"]["cb"]).apply(null, arguments);
        };
        var _duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = function() {
          return (_duckdb_web_get_feature_flags = Module["_duckdb_web_get_feature_flags"] = Module["asm"]["db"]).apply(null, arguments);
        };
        var _duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = function() {
          return (_duckdb_web_tokenize = Module["_duckdb_web_tokenize"] = Module["asm"]["eb"]).apply(null, arguments);
        };
        var _duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = function() {
          return (_duckdb_web_udf_scalar_create = Module["_duckdb_web_udf_scalar_create"] = Module["asm"]["fb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = function() {
          return (_duckdb_web_prepared_create = Module["_duckdb_web_prepared_create"] = Module["asm"]["gb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = function() {
          return (_duckdb_web_prepared_close = Module["_duckdb_web_prepared_close"] = Module["asm"]["hb"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = function() {
          return (_duckdb_web_prepared_run = Module["_duckdb_web_prepared_run"] = Module["asm"]["ib"]).apply(null, arguments);
        };
        var _duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = function() {
          return (_duckdb_web_prepared_send = Module["_duckdb_web_prepared_send"] = Module["asm"]["jb"]).apply(null, arguments);
        };
        var _duckdb_web_query_run = Module["_duckdb_web_query_run"] = function() {
          return (_duckdb_web_query_run = Module["_duckdb_web_query_run"] = Module["asm"]["kb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = function() {
          return (_duckdb_web_pending_query_start = Module["_duckdb_web_pending_query_start"] = Module["asm"]["lb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = function() {
          return (_duckdb_web_pending_query_poll = Module["_duckdb_web_pending_query_poll"] = Module["asm"]["mb"]).apply(null, arguments);
        };
        var _duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = function() {
          return (_duckdb_web_pending_query_cancel = Module["_duckdb_web_pending_query_cancel"] = Module["asm"]["nb"]).apply(null, arguments);
        };
        var _duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = function() {
          return (_duckdb_web_query_fetch_results = Module["_duckdb_web_query_fetch_results"] = Module["asm"]["ob"]).apply(null, arguments);
        };
        var _duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = function() {
          return (_duckdb_web_get_tablenames = Module["_duckdb_web_get_tablenames"] = Module["asm"]["pb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = function() {
          return (_duckdb_web_insert_arrow_from_ipc_stream = Module["_duckdb_web_insert_arrow_from_ipc_stream"] = Module["asm"]["qb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = function() {
          return (_duckdb_web_insert_csv_from_path = Module["_duckdb_web_insert_csv_from_path"] = Module["asm"]["rb"]).apply(null, arguments);
        };
        var _duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = function() {
          return (_duckdb_web_insert_json_from_path = Module["_duckdb_web_insert_json_from_path"] = Module["asm"]["sb"]).apply(null, arguments);
        };
        var ___errno_location = function() {
          return (___errno_location = Module["asm"]["tb"]).apply(null, arguments);
        };
        var _htonl = function() {
          return (_htonl = Module["asm"]["ub"]).apply(null, arguments);
        };
        var _htons = function() {
          return (_htons = Module["asm"]["vb"]).apply(null, arguments);
        };
        var _ntohs = function() {
          return (_ntohs = Module["asm"]["wb"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["xb"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["yb"]).apply(null, arguments);
        };
        var _emscripten_builtin_memalign = function() {
          return (_emscripten_builtin_memalign = Module["asm"]["zb"]).apply(null, arguments);
        };
        var ___trap = function() {
          return (___trap = Module["asm"]["Ab"]).apply(null, arguments);
        };
        var stackSave = function() {
          return (stackSave = Module["asm"]["Bb"]).apply(null, arguments);
        };
        var stackRestore = function() {
          return (stackRestore = Module["asm"]["Cb"]).apply(null, arguments);
        };
        var stackAlloc = function() {
          return (stackAlloc = Module["asm"]["Db"]).apply(null, arguments);
        };
        Module["stackAlloc"] = stackAlloc;
        Module["stackSave"] = stackSave;
        Module["stackRestore"] = stackRestore;
        Module["ccall"] = ccall;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun)
            run();
          if (!calledRun)
            dependenciesFulfilled = runCaller;
        };
        function callMain() {
          var entryFunction = _main;
          var argc = 0;
          var argv = 0;
          try {
            var ret = entryFunction(argc, argv);
            exitJS(ret, true);
            return ret;
          } catch (e) {
            return handleException(e);
          }
        }
        function run() {
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun)
              return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT)
              return;
            initRuntime();
            preMain();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"])
              Module["onRuntimeInitialized"]();
            if (shouldRunNow)
              callMain();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        var shouldRunNow = true;
        if (Module["noInitialRun"])
          shouldRunNow = false;
        run();
        return DuckDB4.ready;
      };
    })();
    if (typeof exports === "object" && typeof module2 === "object")
      module2.exports = DuckDB3;
    else if (typeof define === "function" && define["amd"])
      define([], function() {
        return DuckDB3;
      });
    else if (typeof exports === "object")
      exports["DuckDB"] = DuckDB3;
  }
});

// src/bindings/connection.ts
var arrow = __toESM(require("apache-arrow"));
var DuckDBConnection = class {
  /** Constructor */
  constructor(bindings, conn) {
    this._bindings = bindings;
    this._conn = conn;
  }
  /** Close a connection */
  close() {
    this._bindings.disconnect(this._conn);
  }
  /** Brave souls may use this function to consume the underlying connection id */
  useUnsafe(callback) {
    return callback(this._bindings, this._conn);
  }
  /** Run a query */
  query(text) {
    const buffer = this._bindings.runQuery(this._conn, text);
    const reader = arrow.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow.Table(reader);
  }
  /** Send a query */
  async send(text) {
    let header = this._bindings.startPendingQuery(this._conn, text);
    while (header == null) {
      header = await new Promise((resolve, reject) => {
        try {
          resolve(this._bindings.pollPendingQuery(this._conn));
        } catch (e) {
          console.log(e);
          reject(e);
        }
      });
    }
    const iter = new ResultStreamIterator(this._bindings, this._conn, header);
    const reader = arrow.RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
  /** Cancel a query that was sent earlier */
  cancelSent() {
    return this._bindings.cancelPendingQuery(this._conn);
  }
  /** Get table names */
  getTableNames(query) {
    return this._bindings.getTableNames(this._conn, query);
  }
  /** Create a prepared statement */
  prepare(text) {
    const stmt = this._bindings.createPrepared(this._conn, text);
    return new PreparedStatement(this._bindings, this._conn, stmt);
  }
  /** Create a scalar function */
  createScalarFunction(name, returns, func) {
    this._bindings.createScalarFunction(this._conn, name, returns, func);
  }
  /** Insert an arrow table */
  insertArrowTable(table, options) {
    const buffer = arrow.tableToIPC(table, "stream");
    this.insertArrowFromIPCStream(buffer, options);
  }
  /** Insert an arrow table from an ipc stream */
  insertArrowFromIPCStream(buffer, options) {
    this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
  }
  /** Inesrt csv file from path */
  insertCSVFromPath(path2, options) {
    this._bindings.insertCSVFromPath(this._conn, path2, options);
  }
  /** Insert json file from path */
  insertJSONFromPath(path2, options) {
    this._bindings.insertJSONFromPath(this._conn, path2, options);
  }
};
var ResultStreamIterator = class {
  constructor(bindings, conn, header) {
    this.bindings = bindings;
    this.conn = conn;
    this.header = header;
    this._first = true;
    this._depleted = false;
  }
  next() {
    if (this._first) {
      this._first = false;
      return { done: false, value: this.header };
    }
    if (this._depleted) {
      return { done: true, value: null };
    }
    const bufferI8 = this.bindings.fetchQueryResults(this.conn);
    this._depleted = bufferI8.length == 0;
    return {
      done: this._depleted,
      value: bufferI8
    };
  }
  [Symbol.iterator]() {
    return this;
  }
};
var PreparedStatement = class {
  /** Constructor */
  constructor(bindings, connectionId, statementId) {
    this.bindings = bindings;
    this.connectionId = connectionId;
    this.statementId = statementId;
  }
  /** Close a prepared statement */
  close() {
    this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  /** Run a prepared statement */
  query(...params) {
    const buffer = this.bindings.runPrepared(this.connectionId, this.statementId, params);
    const reader = arrow.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow.Table(reader);
  }
  /** Send a prepared statement */
  send(...params) {
    const header = this.bindings.sendPrepared(this.connectionId, this.statementId, params);
    const iter = new ResultStreamIterator(this.bindings, this.connectionId, header);
    const reader = arrow.RecordBatchReader.from(iter);
    console.assert(reader.isSync());
    console.assert(reader.isStream());
    return reader;
  }
};

// src/bindings/udf_runtime.ts
var TEXT_ENCODER = new TextEncoder();
var TEXT_DECODER = new TextDecoder("utf-8");
function storeError(mod, response, message) {
  const msgBuffer = TEXT_ENCODER.encode(message);
  const heapAddr = mod._malloc(msgBuffer.byteLength);
  const heapArray = mod.HEAPU8.subarray(heapAddr, heapAddr + msgBuffer.byteLength);
  heapArray.set(msgBuffer);
  mod.HEAPF64[(response >> 3) + 0] = 1;
  mod.HEAPF64[(response >> 3) + 1] = heapAddr;
  mod.HEAPF64[(response >> 3) + 2] = heapArray.byteLength;
}
function getTypeSize(ptype) {
  switch (ptype) {
    case "UINT8":
    case "INT8":
      return 1;
    case "INT32":
    case "FLOAT":
      return 4;
    case "INT64":
    case "UINT64":
    case "DOUBLE":
    case "VARCHAR":
      return 8;
    default:
      return 0;
  }
}
function ptrToArray(mod, ptr, ptype, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * getTypeSize(ptype));
  switch (ptype) {
    case "UINT8":
      return new Uint8Array(heap.buffer, heap.byteOffset, n);
    case "INT8":
      return new Int8Array(heap.buffer, heap.byteOffset, n);
    case "INT32":
      return new Int32Array(heap.buffer, heap.byteOffset, n);
    case "FLOAT":
      return new Float32Array(heap.buffer, heap.byteOffset, n);
    case "DOUBLE":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    case "VARCHAR":
      return new Float64Array(heap.buffer, heap.byteOffset, n);
    default:
      return new Array(0);
  }
}
function ptrToUint8Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n);
  return new Uint8Array(heap.buffer, heap.byteOffset, n);
}
function ptrToFloat64Array(mod, ptr, n) {
  const heap = mod.HEAPU8.subarray(ptr, ptr + n * 8);
  return new Float64Array(heap.buffer, heap.byteOffset, n);
}
function callScalarUDF(runtime, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) {
  try {
    const udf = runtime._udfFunctions.get(funcId);
    if (!udf) {
      storeError(mod, response, "Unknown UDF with id: " + funcId);
      return;
    }
    const rawDesc = TEXT_DECODER.decode(mod.HEAPU8.subarray(descPtr, descPtr + descSize));
    const desc = JSON.parse(rawDesc);
    const ptrs = ptrToFloat64Array(mod, ptrsPtr, ptrsSize / 8);
    const buildResolver = (arg) => {
      var _a;
      let validity = null;
      if (arg.validityBuffer !== void 0) {
        validity = ptrToUint8Array(mod, ptrs[arg.validityBuffer], desc.rows);
      }
      switch (arg.physicalType) {
        case "VARCHAR": {
          if (arg.dataBuffer === null || arg.dataBuffer === void 0) {
            throw new Error("malformed data view, expected data buffer for VARCHAR argument");
          }
          if (arg.lengthBuffer === null || arg.lengthBuffer === void 0) {
            throw new Error("malformed data view, expected data length buffer for VARCHAR argument");
          }
          const raw = ptrToArray(mod, ptrs[arg.dataBuffer], arg.physicalType, desc.rows);
          const strings = [];
          const stringLengths = ptrToFloat64Array(mod, ptrs[arg.lengthBuffer], desc.rows);
          for (let j = 0; j < desc.rows; ++j) {
            if (validity != null && !validity[j]) {
              strings.push(null);
              continue;
            }
            const subarray = mod.HEAPU8.subarray(
              raw[j],
              raw[j] + stringLengths[j]
            );
            const str = TEXT_DECODER.decode(subarray);
            strings.push(str);
          }
          return (row) => strings[row];
        }
        case "STRUCT": {
          const tmp = {};
          const children = [];
          for (let j = 0; j < (((_a = arg.children) == null ? void 0 : _a.length) || 0); ++j) {
            const attr = arg.children[j];
            const child = buildResolver(attr);
            children.push((row) => {
              tmp[attr.name] = child(row);
            });
          }
          if (validity != null) {
            return (row) => {
              if (!validity[row]) {
                return null;
              }
              for (const resolver of children) {
                resolver(row);
              }
              return tmp;
            };
          } else {
            return (row) => {
              for (const resolver of children) {
                resolver(row);
              }
              return tmp;
            };
          }
        }
        default: {
          if (arg.dataBuffer === void 0) {
            throw new Error(
              "malformed data view, expected data buffer for argument of type: " + arg.physicalType
            );
          }
          const data = ptrToArray(mod, ptrs[arg.dataBuffer], arg.physicalType, desc.rows);
          if (validity != null) {
            return (row) => !validity[row] ? null : data[row];
          } else {
            return (row) => data[row];
          }
        }
      }
    };
    const argResolvers = [];
    for (let i = 0; i < desc.args.length; ++i) {
      argResolvers.push(buildResolver(desc.args[i]));
    }
    const resultDataLen = desc.rows * getTypeSize(desc.ret.physicalType);
    const resultDataPtr = mod._malloc(resultDataLen);
    const resultData = ptrToArray(mod, resultDataPtr, desc.ret.physicalType, desc.rows);
    const resultValidityPtr = mod._malloc(desc.rows);
    const resultValidity = ptrToUint8Array(mod, resultValidityPtr, desc.rows);
    if (resultData.length == 0 || resultValidity.length == 0) {
      storeError(mod, response, "Can't create physical arrays for result");
      return;
    }
    let rawResultData = resultData;
    if (desc.ret.physicalType == "VARCHAR") {
      rawResultData = new Array(desc.rows);
    }
    const args = [];
    for (let i = 0; i < desc.args.length; ++i) {
      args.push(null);
    }
    for (let i = 0; i < desc.rows; ++i) {
      for (let j = 0; j < desc.args.length; ++j) {
        args[j] = argResolvers[j](i);
      }
      const res = udf.func(...args);
      rawResultData[i] = res;
      resultValidity[i] = res === void 0 || res === null ? 0 : 1;
    }
    let resultLengthsPtr = 0;
    switch (desc.ret.physicalType) {
      case "VARCHAR": {
        const resultDataUTF8 = new Array(0);
        resultLengthsPtr = mod._malloc(desc.rows * getTypeSize("DOUBLE"));
        const resultLengths = ptrToFloat64Array(mod, resultLengthsPtr, desc.rows);
        let totalLength = 0;
        for (let row = 0; row < desc.rows; ++row) {
          const utf8 = TEXT_ENCODER.encode(rawResultData[row] || "");
          resultDataUTF8.push(utf8);
          resultLengths[row] = utf8.length;
          totalLength += utf8.length;
        }
        const resultStringPtr = mod._malloc(totalLength);
        const resultStringBuf = mod.HEAPU8.subarray(resultStringPtr, resultStringPtr + totalLength);
        let writerOffset = 0;
        for (let row = 0; row < desc.rows; ++row) {
          resultData[row] = writerOffset;
          const resultUTF8 = resultDataUTF8[row];
          const writer = resultStringBuf.subarray(writerOffset, writerOffset + resultUTF8.length);
          writer.set(resultUTF8);
          writerOffset += resultUTF8.length;
        }
      }
    }
    const retLen = 3 * 8;
    const retPtr = mod._malloc(retLen);
    const retBuffer = ptrToFloat64Array(mod, retPtr, 3);
    retBuffer[0] = resultDataPtr;
    retBuffer[1] = resultValidityPtr;
    retBuffer[2] = resultLengthsPtr;
    mod.HEAPF64[(response >> 3) + 0] = 0;
    mod.HEAPF64[(response >> 3) + 1] = retPtr;
    mod.HEAPF64[(response >> 3) + 2] = 0;
  } catch (e) {
    storeError(mod, response, e.toString());
  }
}

// src/bindings/runtime.ts
function TextDecoderWrapper() {
  const decoder2 = new TextDecoder();
  return (data) => {
    if (typeof SharedArrayBuffer !== "undefined" && data.buffer instanceof SharedArrayBuffer) {
      data = new Uint8Array(data);
    }
    return decoder2.decode(data);
  };
}
var decodeText = TextDecoderWrapper();
function failWith(mod, msg) {
  console.error(`FAIL WITH: ${msg}`);
  mod.ccall("duckdb_web_fail_with", null, ["string"], [msg]);
}
function copyBuffer(mod, begin, length) {
  const buffer = mod.HEAPU8.subarray(begin, begin + length);
  const copy = new Uint8Array(new ArrayBuffer(buffer.byteLength));
  copy.set(buffer);
  return copy;
}
function readString(mod, begin, length) {
  return decodeText(mod.HEAPU8.subarray(begin, begin + length));
}
function callSRet(mod, funcName, argTypes, args) {
  const stackPointer = mod.stackSave();
  const response = mod.stackAlloc(3 * 8);
  argTypes.unshift("number");
  args.unshift(response);
  mod.ccall(funcName, null, argTypes, args);
  const status = mod.HEAPF64[(response >> 3) + 0];
  const data = mod.HEAPF64[(response >> 3) + 1];
  const dataSize = mod.HEAPF64[(response >> 3) + 2];
  mod.stackRestore(stackPointer);
  return [status, data, dataSize];
}
function dropResponseBuffers(mod) {
  mod.ccall("duckdb_web_clear_response", null, [], []);
}

// src/bindings/opfs.ts
var opfsScheme = "opfs";
var defaultOPFSDomain = "default";
function stringifyOPFSURL(filePath, isDirectory, authority) {
  const prefix = `${opfsScheme}://${authority || defaultOPFSDomain}`.replace(/\/*$/, "/");
  const path2 = filePath.replace(/^\/*/, "");
  if (!isDirectory && !path2)
    throw new Error(`Invalid OPFS file path "${filePath}"`);
  return prefix + path2.replace(/\/*$/, isDirectory ? "/" : "");
}

// src/bindings/file_stats.ts
var FileStatistics = class {
  constructor(u8array) {
    const f64 = new Float64Array(u8array.buffer, u8array.byteOffset, u8array.byteLength / 8);
    const blocks = new Uint8Array(new ArrayBuffer(u8array.byteLength));
    blocks.set(u8array.subarray(7 * 8));
    this.totalFileReadsCold = f64[0];
    this.totalFileReadsAhead = f64[1];
    this.totalFileReadsCached = f64[2];
    this.totalFileWrites = f64[3];
    this.totalPageAccesses = f64[4];
    this.totalPageLoads = f64[5];
    this.blockSize = f64[6];
    this.blockStats = blocks;
  }
  /** The block stats */
  getBlockStats(index, out) {
    out = out || {
      file_reads_cold: 0,
      file_reads_ahead: 0,
      file_reads_cached: 0,
      file_writes: 0,
      page_accesses: 0,
      page_loads: 0
    };
    out.file_writes = this.blockStats[index * 3 + 0] & 15;
    out.file_reads_cold = this.blockStats[index * 3 + 0] >> 4;
    out.file_reads_ahead = this.blockStats[index * 3 + 1] & 15;
    out.file_reads_cached = this.blockStats[index * 3 + 1] >> 4;
    out.page_accesses = this.blockStats[index * 3 + 1] & 15;
    out.page_loads = this.blockStats[index * 3 + 1] >> 4;
    return out;
  }
};

// src/json_typedef.ts
var arrow2 = __toESM(require("apache-arrow"));
function arrowToSQLType(type) {
  switch (type.typeId) {
    case arrow2.Type.Binary:
      return { sqlType: "binary" };
    case arrow2.Type.Bool:
      return { sqlType: "bool" };
    case arrow2.Type.Date:
      return { sqlType: "date" };
    case arrow2.Type.DateDay:
      return { sqlType: "date32[d]" };
    case arrow2.Type.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case arrow2.Type.Decimal: {
      const dec = type;
      return { sqlType: "decimal", precision: dec.precision, scale: dec.scale };
    }
    case arrow2.Type.Float:
      return { sqlType: "float" };
    case arrow2.Type.Float16:
      return { sqlType: "float16" };
    case arrow2.Type.Float32:
      return { sqlType: "float32" };
    case arrow2.Type.Float64:
      return { sqlType: "float64" };
    case arrow2.Type.Int:
      return { sqlType: "int32" };
    case arrow2.Type.Int16:
      return { sqlType: "int16" };
    case arrow2.Type.Int32:
      return { sqlType: "int32" };
    case arrow2.Type.Int64:
      return { sqlType: "int64" };
    case arrow2.Type.Uint16:
      return { sqlType: "uint16" };
    case arrow2.Type.Uint32:
      return { sqlType: "uint32" };
    case arrow2.Type.Uint64:
      return { sqlType: "uint64" };
    case arrow2.Type.Uint8:
      return { sqlType: "uint8" };
    case arrow2.Type.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case arrow2.Type.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case arrow2.Type.List: {
      const list = type;
      return {
        sqlType: "list",
        valueType: arrowToSQLType(list.valueType)
      };
    }
    case arrow2.Type.FixedSizeBinary: {
      const bin = type;
      return { sqlType: "fixedsizebinary", byteWidth: bin.byteWidth };
    }
    case arrow2.Type.Null:
      return { sqlType: "null" };
    case arrow2.Type.Utf8:
      return { sqlType: "utf8" };
    case arrow2.Type.Struct: {
      const struct_ = type;
      return {
        sqlType: "struct",
        fields: struct_.children.map((c) => arrowToSQLField(c.name, c.type))
      };
    }
    case arrow2.Type.Map: {
      const map_ = type;
      return {
        sqlType: "map",
        keyType: arrowToSQLType(map_.keyType),
        valueType: arrowToSQLType(map_.valueType)
      };
    }
    case arrow2.Type.Time:
      return { sqlType: "time[s]" };
    case arrow2.Type.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case arrow2.Type.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case arrow2.Type.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case arrow2.Type.TimeSecond:
      return { sqlType: "time[s]" };
    case arrow2.Type.Timestamp: {
      const ts = type;
      return { sqlType: "timestamp", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampSecond: {
      const ts = type;
      return { sqlType: "timestamp[s]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampMicrosecond: {
      const ts = type;
      return { sqlType: "timestamp[us]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampNanosecond: {
      const ts = type;
      return { sqlType: "timestamp[ns]", timezone: ts.timezone || void 0 };
    }
    case arrow2.Type.TimestampMillisecond: {
      const ts = type;
      return { sqlType: "timestamp[ms]", timezone: ts.timezone || void 0 };
    }
  }
  throw new Error(`unsupported arrow type: ${type.toString()}`);
}
function arrowToSQLField(name, type) {
  const t = arrowToSQLType(type);
  t.name = name;
  return t;
}

// src/bindings/bindings_base.ts
var logWASMCall = !!process.env.KEEP_DEBUG_LOGS;
var TEXT_ENCODER2 = new TextEncoder();
var DuckDBBindingsBase = class {
  constructor(logger, runtime) {
    /** The instance */
    this._instance = null;
    /** The loading promise */
    this._initPromise = null;
    /** The resolver for the open promise (called by onRuntimeInitialized) */
    this._initPromiseResolver = () => {
    };
    /** Instantiate the module */
    this.onInstantiationProgress = [];
    this._logger = logger;
    this._runtime = runtime;
    this._nextUDFId = 1;
  }
  /** Get the logger */
  get logger() {
    return this._logger;
  }
  /** Get the instance */
  get mod() {
    return this._instance;
  }
  /** Get the instance */
  get pthread() {
    return this.mod.PThread || null;
  }
  /** Instantiate the database */
  async instantiate(onProgress = (_) => {
  }) {
    if (this._instance != null) {
      return this;
    }
    if (this._initPromise != null) {
      this.onInstantiationProgress.push(onProgress);
      await this._initPromise;
    }
    this._initPromise = new Promise((resolve) => {
      this._initPromiseResolver = resolve;
    });
    this.onInstantiationProgress = [onProgress];
    this._instance = await this.instantiateImpl({
      print: console.log.bind(console),
      printErr: console.log.bind(console),
      onRuntimeInitialized: this._initPromiseResolver
    });
    await this._initPromise;
    this._initPromise = null;
    this.onInstantiationProgress = this.onInstantiationProgress.filter((x) => x != onProgress);
    return this;
  }
  /** Open a database with a config */
  open(config) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_open", ["string"], [JSON.stringify(config)]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Reset the database */
  reset() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_reset", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Get the version */
  getVersion() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_version", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const version = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return version;
  }
  /** Get the feature flags */
  getFeatureFlags() {
    return this.mod.ccall("duckdb_web_get_feature_flags", "number", [], []);
  }
  /** Tokenize a script */
  tokenize(text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_tokenize", ["string"], [text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  /** Connect to database */
  connect() {
    const conn = this.mod.ccall("duckdb_web_connect", "number", [], []);
    return new DuckDBConnection(this, conn);
  }
  /** Disconnect from database */
  disconnect(conn) {
    this.mod.ccall("duckdb_web_disconnect", null, ["number"], [conn]);
    if (this.pthread) {
      for (const worker2 of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker2.postMessage({
          cmd: "dropUDFFunctions",
          connectionId: conn
        });
      }
    }
  }
  /** Send a query and return the full result */
  runQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_run", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /**
   *  Start a pending query asynchronously.
   *  This method returns either the arrow ipc schema or null.
   *  On null, the query has to be executed using `pollPendingQuery` until that returns != null.
   *  Results can then be fetched using `fetchQueryResults`
   */
  startPendingQuery(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_pending_query_start", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    if (d == 0) {
      return null;
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /** Poll a pending query */
  pollPendingQuery(conn) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_pending_query_poll", ["number"], [conn]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    if (d == 0) {
      return null;
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /** Cancel a pending query */
  cancelPendingQuery(conn) {
    return this.mod.ccall("duckdb_web_pending_query_cancel", "boolean", ["number"], [conn]);
  }
  /** Fetch query results */
  fetchQueryResults(conn) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_query_fetch_results", ["number"], [conn]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /** Get table names */
  getTableNames(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_get_tablenames", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return JSON.parse(res);
  }
  /** Create a scalar function */
  createScalarFunction(conn, name, returns, func) {
    const decl = {
      functionId: this._nextUDFId,
      name,
      returnType: arrowToSQLType(returns)
    };
    const def = {
      functionId: decl.functionId,
      connectionId: conn,
      name,
      returnType: returns,
      func
    };
    this._nextUDFId += 1;
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_udf_scalar_create",
      ["number", "string"],
      [conn, JSON.stringify(decl)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._udfFunctions = (globalThis.DUCKDB_RUNTIME._udfFunctions || /* @__PURE__ */ new Map()).set(
      def.functionId,
      def
    );
    if (this.pthread) {
      for (const worker2 of [...this.pthread.runningWorkers, ...this.pthread.unusedWorkers]) {
        worker2.postMessage({
          cmd: "registerUDFFunction",
          udf: def
        });
      }
    }
  }
  /** Prepare a statement and return its identifier */
  createPrepared(conn, text) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_create", ["number", "string"], [conn, text]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    return d;
  }
  /** Close a prepared statement */
  closePrepared(conn, statement) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_prepared_close", ["number", "number"], [conn, statement]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Execute a prepared statement and return the full result */
  runPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_prepared_run",
      ["number", "number", "string"],
      [conn, statement, JSON.stringify(params)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /** Execute a prepared statement and stream the result */
  sendPrepared(conn, statement, params) {
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_prepared_send",
      ["number", "number", "string"],
      [conn, statement, JSON.stringify(params)]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const res = copyBuffer(this.mod, d, n);
    dropResponseBuffers(this.mod);
    return res;
  }
  /** Insert record batches from an arrow ipc stream */
  insertArrowFromIPCStream(conn, buffer, options) {
    if (buffer.length == 0)
      return;
    const bufferPtr = this.mod._malloc(buffer.length);
    const bufferOfs = this.mod.HEAPU8.subarray(bufferPtr, bufferPtr + buffer.length);
    bufferOfs.set(buffer);
    const optJSON = options ? JSON.stringify(options) : "";
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_arrow_from_ipc_stream",
      ["number", "number", "number", "string"],
      [conn, bufferPtr, buffer.length, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  /** Insert csv from path */
  insertCSVFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = { ...options };
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_csv_from_path",
      ["number", "string", "string"],
      [conn, path2, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  /** Insert json from path */
  insertJSONFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      options.columnsFlat = [];
      for (const k in options.columns) {
        options.columnsFlat.push(arrowToSQLField(k, options.columns[k]));
      }
    }
    const opt = { ...options };
    opt.columns = opt.columnsFlat;
    delete opt.columnsFlat;
    const optJSON = JSON.stringify(opt);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_insert_json_from_path",
      ["number", "string", "string"],
      [conn, path2, optJSON]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  /** Glob file infos */
  globFiles(path2) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_glob_file_infos", ["string"], [path2]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const infoStr = readString(this.mod, d, n);
    dropResponseBuffers(this.mod);
    const info = JSON.parse(infoStr);
    if (info == null) {
      return [];
    }
    return info;
  }
  /** Register a file object URL */
  registerFileURL(name, url, proto, directIO = false) {
    if (url === void 0) {
      url = name;
    }
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_url",
      ["string", "string"],
      [name, url, proto, directIO]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Register file text */
  registerFileText(name, text) {
    const buffer = TEXT_ENCODER2.encode(text);
    this.registerFileBuffer(name, buffer);
  }
  /** Register a file buffer */
  registerFileBuffer(name, buffer) {
    const ptr = this.mod._malloc(buffer.length);
    const dst = this.mod.HEAPU8.subarray(ptr, ptr + buffer.length);
    dst.set(buffer);
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_buffer",
      ["string", "number", "number"],
      [name, ptr, buffer.length]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Register a file object URL */
  async registerFileHandle(name, handle, protocol, directIO) {
    let fileURL = name;
    if (protocol === 3 /* BROWSER_FSACCESS */) {
      const opfsHandle = handle;
      if (!(opfsHandle == null ? void 0 : opfsHandle.filePath))
        throw new Error(`Invalid OPFS file handle for "${name}"`);
      const { filePath, domain } = opfsHandle;
      if (!opfsHandle._url)
        opfsHandle._url = stringifyOPFSURL(filePath, false, domain);
      fileURL = opfsHandle._url;
    }
    const [s, d, n] = callSRet(
      this.mod,
      "duckdb_web_fs_register_file_url",
      ["string", "string", "number", "boolean"],
      [name, fileURL, protocol, directIO]
    );
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
    globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || /* @__PURE__ */ new Map()).set(name, handle);
    if (protocol === 3 /* BROWSER_FSACCESS */) {
      const opfsHandle = handle;
      const { fileHandle } = opfsHandle;
      if (fileHandle) {
        if (!opfsHandle.accessHandle) {
          opfsHandle.accessHandle = await fileHandle.createSyncAccessHandle();
          console.debug(`prepared SyncAccessHandle for OPFS file "${name}"`);
        }
      } else {
        console.warn(`Invalid file handle for OPFS file "${name}"`);
      }
    }
    if (this.pthread) {
      for (const worker2 of this.pthread.runningWorkers) {
        worker2.postMessage({
          cmd: "registerFileHandle",
          fileName: name,
          fileHandle: handle
        });
      }
      for (const worker2 of this.pthread.unusedWorkers) {
        worker2.postMessage({
          cmd: "dropFileHandle",
          fileName: name
        });
      }
    }
  }
  /** Drop file */
  dropFile(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_file", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Drop files */
  dropFiles() {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_fs_drop_files", [], []);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Flush all files */
  flushFiles() {
    var _a;
    this.mod.ccall("duckdb_web_flush_files", null, [], []);
    const entries = (_a = this._runtime._files) == null ? void 0 : _a.entries();
    if (!entries)
      return;
    for (const [fileName, handle] of entries) {
      if (handle.accessHandle) {
        if (logWASMCall)
          console.log(`[WASM-CALL] flushFiles() => flushFile("${fileName}")`);
        const opfs = handle;
        if (opfs.accessHandle)
          opfs.accessHandle.flush();
      }
    }
  }
  /** Write a file to a path */
  copyFileToPath(name, path2) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_path", ["string", "string"], [name, path2]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    dropResponseBuffers(this.mod);
  }
  /** Write a file to a buffer */
  copyFileToBuffer(name) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_copy_file_to_buffer", ["string"], [name]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    const buffer = this.mod.HEAPU8.subarray(d, d + n);
    const copy = new Uint8Array(buffer.length);
    copy.set(buffer);
    dropResponseBuffers(this.mod);
    return copy;
  }
  /** Close file (This method is used for explicitly clsoing OPFS file handle) */
  closeFile(fileName) {
    var _a, _b;
    const ok = (_b = (_a = this._runtime).closeFileByName) == null ? void 0 : _b.call(_a, this.mod, fileName);
    return ok || false;
  }
  /** Enable tracking of file statistics */
  collectFileStatistics(file, enable) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_collect_file_stats", ["string", "boolean"], [file, enable]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
  }
  /** Export file statistics */
  exportFileStatistics(file) {
    const [s, d, n] = callSRet(this.mod, "duckdb_web_export_file_stats", ["string"], [file]);
    if (s !== 0 /* SUCCESS */) {
      throw new Error(readString(this.mod, d, n));
    }
    return new FileStatistics(this.mod.HEAPU8.subarray(d, d + n));
  }
};

// src/log.ts
var VoidLogger = class {
  log(_entry) {
  }
};

// ../../node_modules/wasm-feature-detect/dist/esm/index.js
var bulkMemory = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11]));
var exceptions = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11]));
var simd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
var threads = () => (async (e) => {
  try {
    return "undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch (e2) {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));

// src/platform.ts
var isNode = () => typeof navigator === "undefined" ? true : false;
var bigInt64Array = null;
var wasmExceptions = null;
var wasmThreads = null;
var wasmSIMD = null;
var wasmBulkMemory = null;
async function getPlatformFeatures() {
  if (bigInt64Array == null) {
    bigInt64Array = typeof BigInt64Array != "undefined";
  }
  if (wasmExceptions == null) {
    wasmExceptions = await exceptions();
  }
  if (wasmThreads == null) {
    wasmThreads = await threads();
  }
  if (wasmSIMD == null) {
    wasmSIMD = await simd();
  }
  if (wasmBulkMemory == null) {
    wasmBulkMemory = await bulkMemory();
  }
  return {
    bigInt64Array,
    crossOriginIsolated: isNode() || globalThis.crossOriginIsolated || false,
    wasmExceptions,
    wasmSIMD,
    wasmThreads,
    wasmBulkMemory
  };
}
async function selectBundle(bundles) {
  const platform = await getPlatformFeatures();
  if (platform.wasmExceptions) {
    if (platform.wasmSIMD && platform.wasmThreads && platform.crossOriginIsolated && bundles.coi) {
      return {
        mainModule: bundles.coi.mainModule,
        mainWorker: bundles.coi.mainWorker,
        pthreadWorker: bundles.coi.pthreadWorker
      };
    }
    if (bundles.eh) {
      return {
        mainModule: bundles.eh.mainModule,
        mainWorker: bundles.eh.mainWorker,
        pthreadWorker: null
      };
    }
  }
  return {
    mainModule: bundles.mvp.mainModule,
    mainWorker: bundles.mvp.mainWorker,
    pthreadWorker: null
  };
}

// src/bindings/runtime_node.ts
var import_fs = __toESM(require("fs"));
var fg = __toESM(require_out4());
var NODE_RUNTIME = {
  _files: /* @__PURE__ */ new Map(),
  _filesById: /* @__PURE__ */ new Map(),
  _fileInfoCache: /* @__PURE__ */ new Map(),
  _udfFunctions: /* @__PURE__ */ new Map(),
  resolveFileInfo(mod, fileId) {
    try {
      const cached = NODE_RUNTIME._fileInfoCache.get(fileId);
      const [s, d, n] = callSRet(
        mod,
        "duckdb_web_fs_get_file_info_by_id",
        ["number", "number"],
        [fileId, (cached == null ? void 0 : cached.cacheEpoch) || 0]
      );
      if (s !== 0 /* SUCCESS */) {
        failWith(mod, readString(mod, d, n));
        return null;
      } else if (n === 0) {
        dropResponseBuffers(mod);
        return cached;
      }
      const infoStr = readString(mod, d, n);
      dropResponseBuffers(mod);
      const info = JSON.parse(infoStr);
      if (info == null)
        return null;
      NODE_RUNTIME._fileInfoCache.set(fileId, info);
      return info;
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return null;
    }
  },
  testPlatformFeature: (_mod, feature) => {
    switch (feature) {
      case 1:
        return typeof BigInt64Array !== "undefined";
      default:
        console.warn(`test for unknown feature: ${feature}`);
        return false;
    }
  },
  getDefaultDataProtocol(mod) {
    return 1 /* NODE_FS */;
  },
  openFile(mod, fileId, flags) {
    var _a, _b;
    try {
      NODE_RUNTIME._fileInfoCache.delete(fileId);
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NODE_FS */: {
          let fd = (_a = NODE_RUNTIME._files) == null ? void 0 : _a.get(file.dataUrl);
          if (fd === null || fd === void 0) {
            fd = import_fs.default.openSync(
              file.dataUrl,
              import_fs.default.constants.O_CREAT | import_fs.default.constants.O_RDWR,
              import_fs.default.constants.S_IRUSR | import_fs.default.constants.S_IWUSR
            );
            (_b = NODE_RUNTIME._filesById) == null ? void 0 : _b.set(file.fileId, fd);
          }
          const fileSize = import_fs.default.fstatSync(fd).size;
          const result = mod._malloc(2 * 8);
          mod.HEAPF64[(result >> 3) + 0] = +fileSize;
          mod.HEAPF64[(result >> 3) + 1] = 0;
          return result;
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          failWith(mod, "Unsupported data protocol");
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  syncFile: (_mod, _fileId) => {
  },
  closeFile: (mod, fileId) => {
    try {
      const fileInfo = NODE_RUNTIME._fileInfoCache.get(fileId);
      NODE_RUNTIME._fileInfoCache.delete(fileId);
      switch (fileInfo == null ? void 0 : fileInfo.dataProtocol) {
        case 1 /* NODE_FS */: {
          const fileHandle = NODE_RUNTIME._filesById.get(fileId);
          NODE_RUNTIME._filesById.delete(fileId);
          if (fileHandle !== null && fileHandle !== void 0) {
            import_fs.default.closeSync(fileHandle);
          }
          break;
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          break;
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  truncateFile: (mod, fileId, newSize) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NODE_FS */: {
          import_fs.default.truncateSync(file.dataUrl, newSize);
          break;
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          failWith(mod, "Unsupported data protocol");
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  readFile: (mod, fileId, buf, bytes, location) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NODE_FS */: {
          const fileHandle = NODE_RUNTIME._filesById.get(fileId);
          if (fileHandle === null || fileHandle === void 0) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          return import_fs.default.readSync(fileHandle, mod.HEAPU8, buf, bytes, location);
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          failWith(mod, "Unsupported data protocol");
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  writeFile: (mod, fileId, buf, bytes, location) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NODE_FS */: {
          const fileHandle = NODE_RUNTIME._filesById.get(fileId);
          if (fileHandle === null || fileHandle === void 0) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          const src = mod.HEAPU8.subarray(buf, buf + bytes);
          return import_fs.default.writeSync(fileHandle, src, 0, src.length, location);
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          failWith(mod, "Unsupported data protocol");
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  getLastFileModificationTime: (mod, fileId) => {
    try {
      const file = NODE_RUNTIME.resolveFileInfo(mod, fileId);
      switch (file == null ? void 0 : file.dataProtocol) {
        case 1 /* NODE_FS */: {
          const fileHandle = NODE_RUNTIME._filesById.get(fileId);
          if (fileHandle === null || fileHandle === void 0) {
            failWith(mod, `File ${fileId} is missing a file descriptor`);
            return 0;
          }
          return import_fs.default.fstatSync(fileHandle).mtime.getTime();
        }
        case 2 /* BROWSER_FILEREADER */:
        case 3 /* BROWSER_FSACCESS */:
        case 4 /* HTTP */:
        case 5 /* S3 */:
          failWith(mod, "Unsupported data protocol");
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
    }
    return 0;
  },
  checkDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.existsSync(path2);
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return false;
    }
  },
  createDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.mkdirSync(path2);
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return 0;
    }
  },
  removeDirectory: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.rmdirSync(path2);
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return 0;
    }
  },
  listDirectoryEntries: (mod, _pathPtr, _pathLen) => {
    failWith(mod, "Not Implemented");
    return false;
  },
  glob: (mod, pathPtr, pathLen) => {
    try {
      const path2 = readString(mod, pathPtr, pathLen);
      const entries = fg.sync([path2], { dot: true });
      for (const entry of entries) {
        mod.ccall("duckdb_web_fs_glob_add_path", null, ["string"], [entry]);
      }
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return 0;
    }
  },
  moveFile: (mod, fromPtr, fromLen, toPtr, toLen) => {
    var _a, _b;
    const from = readString(mod, fromPtr, fromLen);
    const to = readString(mod, toPtr, toLen);
    const handle = (_a = NODE_RUNTIME._files) == null ? void 0 : _a.get(from);
    if (handle !== void 0) {
      NODE_RUNTIME._files.delete(handle);
      NODE_RUNTIME._files.set(to, handle);
    }
    for (const [key, value] of ((_b = NODE_RUNTIME._fileInfoCache) == null ? void 0 : _b.entries()) || []) {
      if (value.dataUrl == from) {
        NODE_RUNTIME._fileInfoCache.delete(key);
        break;
      }
    }
    return true;
  },
  checkFile: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.existsSync(path2);
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return false;
    }
  },
  removeFile: (mod, pathPtr, pathLen) => {
    try {
      const path2 = decodeText(mod.HEAPU8.subarray(pathPtr, pathPtr + pathLen));
      return import_fs.default.rmSync(path2);
    } catch (e) {
      console.log(e);
      failWith(mod, e.toString());
      return 0;
    }
  },
  callScalarUDF: (mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize) => {
    callScalarUDF(NODE_RUNTIME, mod, response, funcId, descPtr, descSize, ptrsPtr, ptrsSize);
  }
};

// src/bindings/bindings_node_mvp.ts
var import_duckdb_mvp2 = __toESM(require_duckdb_mvp());

// src/bindings/bindings_node_base.ts
var import_duckdb_mvp = __toESM(require_duckdb_mvp());
var import_fs2 = __toESM(require("fs"));
var DuckDBNodeBindings = class extends DuckDBBindingsBase {
  /** Constructor */
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath) {
    super(logger, runtime);
    this.mainModulePath = mainModulePath;
    this.pthreadWorkerPath = pthreadWorkerPath;
  }
  /** Locate a file */
  locateFile(path2, prefix) {
    if (path2.endsWith(".wasm")) {
      return this.mainModulePath;
    }
    if (path2.endsWith(".worker.js")) {
      if (!this.pthreadWorkerPath) {
        throw new Error("Missing DuckDB worker path!");
      }
      return this.pthreadWorkerPath;
    }
    throw new Error(`WASM instantiation requested unexpected file: prefix=${prefix} path=${path2}`);
  }
  /** Instantiate the wasm module */
  instantiateWasm(imports, success) {
    globalThis.DUCKDB_RUNTIME = {};
    for (const func of Object.getOwnPropertyNames(this._runtime)) {
      if (func == "constructor")
        continue;
      const runtime = globalThis.DUCKDB_RUNTIME;
      runtime[func] = Object.getOwnPropertyDescriptor(this._runtime, func).value;
    }
    const buf = import_fs2.default.readFileSync(this.mainModulePath);
    WebAssembly.instantiate(buf, imports).then((output) => {
      success(output.instance, output.module);
    });
    return [];
  }
  /** Instantiate the bindings */
  instantiateImpl(moduleOverrides) {
    return (0, import_duckdb_mvp.default)({
      ...moduleOverrides,
      instantiateWasm: this.instantiateWasm.bind(this)
    });
  }
};

// src/bindings/bindings_node_mvp.ts
var DuckDB = class extends DuckDBNodeBindings {
  /** Constructor */
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath = null) {
    super(logger, runtime, mainModulePath, pthreadWorkerPath);
  }
  /** Instantiate the bindings */
  instantiateImpl(moduleOverrides) {
    return (0, import_duckdb_mvp2.default)({
      ...moduleOverrides,
      instantiateWasm: this.instantiateWasm.bind(this),
      locateFile: this.locateFile.bind(this)
    });
  }
};

// src/bindings/bindings_node_eh.ts
var import_duckdb_eh = __toESM(require_duckdb_eh());
var DuckDB2 = class extends DuckDBNodeBindings {
  /** Constructor */
  constructor(logger, runtime, mainModulePath, pthreadWorkerPath = null) {
    super(logger, runtime, mainModulePath, pthreadWorkerPath);
  }
  /** Instantiate the bindings */
  instantiateImpl(moduleOverrides) {
    return (0, import_duckdb_eh.default)({
      ...moduleOverrides,
      instantiateWasm: this.instantiateWasm.bind(this),
      locateFile: this.locateFile.bind(this)
    });
  }
};

// src/targets/duckdb-node-blocking.ts
async function createDuckDB(bundles, logger, runtime) {
  const platform = await getPlatformFeatures();
  if (platform.wasmExceptions) {
    if (bundles.eh) {
      return new DuckDB2(logger, runtime, bundles.eh.mainModule);
    }
  }
  return new DuckDB(logger, runtime, bundles.mvp.mainModule);
}

// src/parallel/async_connection.ts
var arrow3 = __toESM(require("apache-arrow"));
var AsyncDuckDBConnection = class {
  constructor(bindings, conn) {
    this._bindings = bindings;
    this._conn = conn;
  }
  /** Access the database bindings */
  get bindings() {
    return this._bindings;
  }
  /** Disconnect from the database */
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  /** Brave souls may use this function to consume the underlying connection id */
  useUnsafe(callback) {
    return callback(this._bindings, this._conn);
  }
  /** Run a query */
  async query(text) {
    this._bindings.logger.log({
      timestamp: /* @__PURE__ */ new Date(),
      level: 2 /* INFO */,
      origin: 4 /* ASYNC_DUCKDB */,
      topic: 4 /* QUERY */,
      event: 4 /* RUN */,
      value: text
    });
    const buffer = await this._bindings.runQuery(this._conn, text);
    const reader = arrow3.RecordBatchReader.from(buffer);
    console.assert(reader.isSync(), "Reader is not sync");
    console.assert(reader.isFile(), "Reader is not file");
    return new arrow3.Table(reader);
  }
  /** Send a query */
  async send(text) {
    this._bindings.logger.log({
      timestamp: /* @__PURE__ */ new Date(),
      level: 2 /* INFO */,
      origin: 4 /* ASYNC_DUCKDB */,
      topic: 4 /* QUERY */,
      event: 4 /* RUN */,
      value: text
    });
    let header = await this._bindings.startPendingQuery(this._conn, text);
    while (header == null) {
      header = await this._bindings.pollPendingQuery(this._conn);
    }
    const iter = new AsyncResultStreamIterator(this._bindings, this._conn, header);
    const reader = await arrow3.RecordBatchReader.from(iter);
    console.assert(reader.isAsync());
    console.assert(reader.isStream());
    return reader;
  }
  /** Cancel a query that was sent earlier */
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  /** Get table names */
  async getTableNames(query) {
    return await this._bindings.getTableNames(this._conn, query);
  }
  /** Create a prepared statement */
  async prepare(text) {
    const stmt = await this._bindings.createPrepared(this._conn, text);
    return new AsyncPreparedStatement(this._bindings, this._conn, stmt);
  }
  /** Insert an arrow table */
  async insertArrowTable(table, options) {
    const buffer = arrow3.tableToIPC(table, "stream");
    await this.insertArrowFromIPCStream(buffer, options);
  }
  /** Insert an arrow table from an ipc stream */
  async insertArrowFromIPCStream(buffer, options) {
    await this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
  }
  /** Insert csv file from path */
  async insertCSVFromPath(text, options) {
    await this._bindings.insertCSVFromPath(this._conn, text, options);
  }
  /** Insert json file from path */
  async insertJSONFromPath(text, options) {
    await this._bindings.insertJSONFromPath(this._conn, text, options);
  }
};
var AsyncResultStreamIterator = class {
  constructor(db2, conn, header) {
    this.db = db2;
    this.conn = conn;
    this.header = header;
    this._first = true;
    this._depleted = false;
    this._inFlight = null;
  }
  async next() {
    if (this._first) {
      this._first = false;
      return { done: false, value: this.header };
    }
    if (this._depleted) {
      return { done: true, value: null };
    }
    let buffer;
    if (this._inFlight != null) {
      buffer = await this._inFlight;
      this._inFlight = null;
    } else {
      buffer = await this.db.fetchQueryResults(this.conn);
    }
    this._depleted = buffer.length == 0;
    if (!this._depleted) {
      this._inFlight = this.db.fetchQueryResults(this.conn);
    }
    return {
      done: this._depleted,
      value: buffer
    };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
};
var AsyncPreparedStatement = class {
  /** Constructor */
  constructor(bindings, connectionId, statementId) {
    this.bindings = bindings;
    this.connectionId = connectionId;
    this.statementId = statementId;
  }
  /** Close a prepared statement */
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  /** Run a prepared statement */
  async query(...params) {
    const buffer = await this.bindings.runPrepared(this.connectionId, this.statementId, params);
    const reader = arrow3.RecordBatchReader.from(buffer);
    console.assert(reader.isSync());
    console.assert(reader.isFile());
    return new arrow3.Table(reader);
  }
  /** Send a prepared statement */
  async send(...params) {
    const header = await this.bindings.sendPrepared(this.connectionId, this.statementId, params);
    const iter = new AsyncResultStreamIterator(this.bindings, this.connectionId, header);
    const reader = await arrow3.RecordBatchReader.from(iter);
    console.assert(reader.isAsync());
    console.assert(reader.isStream());
    return reader;
  }
};

// src/parallel/worker_request.ts
var WorkerTask = class {
  constructor(type, data) {
    this.promiseResolver = () => {
    };
    this.promiseRejecter = () => {
    };
    this.type = type;
    this.data = data;
    this.promise = new Promise(
      (resolve, reject) => {
        this.promiseResolver = resolve;
        this.promiseRejecter = reject;
      }
    );
  }
};

// src/parallel/async_bindings.ts
var TEXT_ENCODER3 = new TextEncoder();
var AsyncDuckDB = class {
  constructor(logger, worker2 = null) {
    /** Instantiate the module */
    this._onInstantiationProgress = [];
    /** The worker */
    this._worker = null;
    /** The promise for the worker shutdown */
    this._workerShutdownPromise = null;
    /** Make the worker as terminated */
    this._workerShutdownResolver = () => {
    };
    /** The next message id */
    this._nextMessageId = 0;
    /** The pending requests */
    this._pendingRequests = /* @__PURE__ */ new Map();
    this._logger = logger;
    this._onMessageHandler = this.onMessage.bind(this);
    this._onErrorHandler = this.onError.bind(this);
    this._onCloseHandler = this.onClose.bind(this);
    if (worker2 != null)
      this.attach(worker2);
  }
  /** Get the logger */
  get logger() {
    return this._logger;
  }
  /** Attach to worker */
  attach(worker2) {
    this._worker = worker2;
    this._worker.addEventListener("message", this._onMessageHandler);
    this._worker.addEventListener("error", this._onErrorHandler);
    this._worker.addEventListener("close", this._onCloseHandler);
    this._workerShutdownPromise = new Promise(
      (resolve, _reject) => {
        this._workerShutdownResolver = resolve;
      }
    );
  }
  /** Detach from worker */
  detach() {
    if (!this._worker)
      return;
    this._worker.removeEventListener("message", this._onMessageHandler);
    this._worker.removeEventListener("error", this._onErrorHandler);
    this._worker.removeEventListener("close", this._onCloseHandler);
    this._worker = null;
    this._workerShutdownResolver(null);
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
  }
  /** Kill the worker */
  async terminate() {
    if (!this._worker)
      return;
    this._worker.terminate();
    this._worker = null;
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
  }
  /** Post a task */
  async postTask(task, transfer = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return void 0;
    }
    const mid = this._nextMessageId++;
    this._pendingRequests.set(mid, task);
    this._worker.postMessage(
      {
        messageId: mid,
        type: task.type,
        data: task.data
      },
      transfer
    );
    return await task.promise;
  }
  /** Received a message */
  onMessage(event) {
    var _a;
    const response = event.data;
    switch (response.type) {
      case "LOG" /* LOG */: {
        this._logger.log(response.data);
        return;
      }
      case "INSTANTIATE_PROGRESS" /* INSTANTIATE_PROGRESS */: {
        for (const p of this._onInstantiationProgress) {
          p(response.data);
        }
        return;
      }
    }
    const task = this._pendingRequests.get(response.requestId);
    if (!task) {
      console.warn(`unassociated response: [${response.requestId}, ${response.type.toString()}]`);
      return;
    }
    this._pendingRequests.delete(response.requestId);
    if (response.type == "ERROR" /* ERROR */) {
      const e = new Error(response.data.message);
      e.name = response.data.name;
      if ((_a = Object.getOwnPropertyDescriptor(e, "stack")) == null ? void 0 : _a.writable) {
        e.stack = response.data.stack;
      }
      task.promiseRejecter(e);
      return;
    }
    switch (task.type) {
      case "CLOSE_PREPARED" /* CLOSE_PREPARED */:
      case "COLLECT_FILE_STATISTICS" /* COLLECT_FILE_STATISTICS */:
      case "COPY_FILE_TO_PATH" /* COPY_FILE_TO_PATH */:
      case "DISCONNECT" /* DISCONNECT */:
      case "DROP_FILE" /* DROP_FILE */:
      case "DROP_FILES" /* DROP_FILES */:
      case "FLUSH_FILES" /* FLUSH_FILES */:
      case "INSERT_ARROW_FROM_IPC_STREAM" /* INSERT_ARROW_FROM_IPC_STREAM */:
      case "IMPORT_CSV_FROM_PATH" /* INSERT_CSV_FROM_PATH */:
      case "IMPORT_JSON_FROM_PATH" /* INSERT_JSON_FROM_PATH */:
      case "OPEN" /* OPEN */:
      case "PING" /* PING */:
      case "REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */:
      case "REGISTER_FILE_HANDLE" /* REGISTER_FILE_HANDLE */:
      case "REGISTER_FILE_URL" /* REGISTER_FILE_URL */:
      case "RESET" /* RESET */:
        if (response.type == "OK" /* OK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "INSTANTIATE" /* INSTANTIATE */:
        this._onInstantiationProgress = [];
        if (response.type == "OK" /* OK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS" /* GLOB_FILE_INFOS */:
        if (response.type == "FILE_INFOS" /* FILE_INFOS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_VERSION" /* GET_VERSION */:
        if (response.type == "VERSION_STRING" /* VERSION_STRING */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS" /* GET_FEATURE_FLAGS */:
        if (response.type == "FEATURE_FLAGS" /* FEATURE_FLAGS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES" /* GET_TABLE_NAMES */:
        if (response.type == "TABLE_NAMES" /* TABLE_NAMES */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "TOKENIZE" /* TOKENIZE */:
        if (response.type == "SCRIPT_TOKENS" /* SCRIPT_TOKENS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER" /* COPY_FILE_TO_BUFFER */:
        if (response.type == "FILE_BUFFER" /* FILE_BUFFER */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS" /* EXPORT_FILE_STATISTICS */:
        if (response.type == "FILE_STATISTICS" /* FILE_STATISTICS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "CONNECT" /* CONNECT */:
        if (response.type == "CONNECTION_INFO" /* CONNECTION_INFO */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "RUN_PREPARED" /* RUN_PREPARED */:
      case "RUN_QUERY" /* RUN_QUERY */:
        if (response.type == "QUERY_RESULT" /* QUERY_RESULT */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "SEND_PREPARED" /* SEND_PREPARED */:
        if (response.type == "QUERY_RESULT_HEADER" /* QUERY_RESULT_HEADER */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "START_PENDING_QUERY" /* START_PENDING_QUERY */:
        if (response.type == "QUERY_RESULT_HEADER_OR_NULL" /* QUERY_RESULT_HEADER_OR_NULL */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "POLL_PENDING_QUERY" /* POLL_PENDING_QUERY */:
        if (response.type == "QUERY_RESULT_HEADER_OR_NULL" /* QUERY_RESULT_HEADER_OR_NULL */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "CANCEL_PENDING_QUERY" /* CANCEL_PENDING_QUERY */:
      case "CLOSE_FILE" /* CLOSE_FILE */:
        this._onInstantiationProgress = [];
        if (response.type == "SUCCESS" /* SUCCESS */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS" /* FETCH_QUERY_RESULTS */:
        if (response.type == "QUERY_RESULT_CHUNK" /* QUERY_RESULT_CHUNK */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
      case "CREATE_PREPARED" /* CREATE_PREPARED */:
        if (response.type == "PREPARED_STATEMENT_ID" /* PREPARED_STATEMENT_ID */) {
          task.promiseResolver(response.data);
          return;
        }
        break;
    }
    task.promiseRejecter(new Error(`unexpected response type: ${response.type.toString()}`));
  }
  /** Received an error */
  onError(event) {
    console.error(event);
    console.error(`error in duckdb worker: ${event.message}`);
    this._pendingRequests.clear();
  }
  /** The worker was closed */
  onClose() {
    this._workerShutdownResolver(null);
    if (this._pendingRequests.size != 0) {
      console.warn(`worker terminated with ${this._pendingRequests.size} pending requests`);
      return;
    }
    this._pendingRequests.clear();
  }
  /** Reset the duckdb */
  async reset() {
    const task = new WorkerTask("RESET" /* RESET */, null);
    return await this.postTask(task);
  }
  /** Ping the worker thread */
  async ping() {
    const task = new WorkerTask("PING" /* PING */, null);
    await this.postTask(task);
  }
  /** Try to drop a file */
  async dropFile(name) {
    const task = new WorkerTask("DROP_FILE" /* DROP_FILE */, name);
    return await this.postTask(task);
  }
  /** Try to drop files */
  async dropFiles() {
    const task = new WorkerTask("DROP_FILES" /* DROP_FILES */, null);
    return await this.postTask(task);
  }
  /** Flush all files */
  async flushFiles() {
    const task = new WorkerTask("FLUSH_FILES" /* FLUSH_FILES */, null);
    return await this.postTask(task);
  }
  async closeFile(name) {
    const task = new WorkerTask("CLOSE_FILE" /* CLOSE_FILE */, name);
    return await this.postTask(task);
  }
  /** Open the database */
  async instantiate(mainModuleURL, pthreadWorkerURL = null, progress = (_p) => {
  }) {
    this._onInstantiationProgress.push(progress);
    const task = new WorkerTask(
      "INSTANTIATE" /* INSTANTIATE */,
      [mainModuleURL, pthreadWorkerURL]
    );
    return await this.postTask(task);
  }
  /** Get the version */
  async getVersion() {
    const task = new WorkerTask("GET_VERSION" /* GET_VERSION */, null);
    const version = await this.postTask(task);
    return version;
  }
  /** Get the feature flags */
  async getFeatureFlags() {
    const task = new WorkerTask(
      "GET_FEATURE_FLAGS" /* GET_FEATURE_FLAGS */,
      null
    );
    const feature = await this.postTask(task);
    return feature;
  }
  /** Open a new database */
  async open(config) {
    const task = new WorkerTask("OPEN" /* OPEN */, config);
    await this.postTask(task);
  }
  /** Tokenize a script text */
  async tokenize(text) {
    const task = new WorkerTask("TOKENIZE" /* TOKENIZE */, text);
    const tokens = await this.postTask(task);
    return tokens;
  }
  /** Connect to the database */
  async connectInternal() {
    const task = new WorkerTask("CONNECT" /* CONNECT */, null);
    return await this.postTask(task);
  }
  /** Connect to the database */
  async connect() {
    const cid = await this.connectInternal();
    return new AsyncDuckDBConnection(this, cid);
  }
  /** Disconnect from the database */
  async disconnect(conn) {
    const task = new WorkerTask(
      "DISCONNECT" /* DISCONNECT */,
      conn
    );
    await this.postTask(task);
  }
  /** Run a query */
  async runQuery(conn, text) {
    const task = new WorkerTask(
      "RUN_QUERY" /* RUN_QUERY */,
      [conn, text]
    );
    return await this.postTask(task);
  }
  /** Start a pending query */
  async startPendingQuery(conn, text) {
    const task = new WorkerTask(
      "START_PENDING_QUERY" /* START_PENDING_QUERY */,
      [conn, text]
    );
    return await this.postTask(task);
  }
  /** Poll a pending query */
  async pollPendingQuery(conn) {
    const task = new WorkerTask(
      "POLL_PENDING_QUERY" /* POLL_PENDING_QUERY */,
      conn
    );
    return await this.postTask(task);
  }
  /** Cancel a pending query */
  async cancelPendingQuery(conn) {
    const task = new WorkerTask(
      "CANCEL_PENDING_QUERY" /* CANCEL_PENDING_QUERY */,
      conn
    );
    return await this.postTask(task);
  }
  /** Fetch query results */
  async fetchQueryResults(conn) {
    const task = new WorkerTask(
      "FETCH_QUERY_RESULTS" /* FETCH_QUERY_RESULTS */,
      conn
    );
    return await this.postTask(task);
  }
  /** Get table names */
  async getTableNames(conn, text) {
    const task = new WorkerTask(
      "GET_TABLE_NAMES" /* GET_TABLE_NAMES */,
      [conn, text]
    );
    return await this.postTask(task);
  }
  /** Prepare a statement and return its identifier */
  async createPrepared(conn, text) {
    const task = new WorkerTask(
      "CREATE_PREPARED" /* CREATE_PREPARED */,
      [conn, text]
    );
    return await this.postTask(task);
  }
  /** Close a prepared statement */
  async closePrepared(conn, statement) {
    const task = new WorkerTask(
      "CLOSE_PREPARED" /* CLOSE_PREPARED */,
      [conn, statement]
    );
    await this.postTask(task);
  }
  /** Execute a prepared statement and return the full result */
  async runPrepared(conn, statement, params) {
    const task = new WorkerTask(
      "RUN_PREPARED" /* RUN_PREPARED */,
      [conn, statement, params]
    );
    return await this.postTask(task);
  }
  /** Execute a prepared statement and stream the result */
  async sendPrepared(conn, statement, params) {
    const task = new WorkerTask(
      "SEND_PREPARED" /* SEND_PREPARED */,
      [conn, statement, params]
    );
    return await this.postTask(task);
  }
  /** Glob file infos */
  async globFiles(path2) {
    const task = new WorkerTask(
      "GLOB_FILE_INFOS" /* GLOB_FILE_INFOS */,
      path2
    );
    return await this.postTask(task);
  }
  /** Register file text */
  async registerFileText(name, text) {
    const buffer = TEXT_ENCODER3.encode(text);
    await this.registerFileBuffer(name, buffer);
  }
  /** Register a file path. */
  async registerFileURL(name, url, proto, directIO) {
    if (url === void 0) {
      url = name;
    }
    const task = new WorkerTask("REGISTER_FILE_URL" /* REGISTER_FILE_URL */, [name, url, proto, directIO]);
    await this.postTask(task);
  }
  /** Register an empty file buffer. */
  async registerEmptyFileBuffer(name) {
    const task = new WorkerTask(
      "REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */,
      [name, new Uint8Array()]
    );
    await this.postTask(task);
  }
  /** Register a file buffer. */
  async registerFileBuffer(name, buffer) {
    const task = new WorkerTask(
      "REGISTER_FILE_BUFFER" /* REGISTER_FILE_BUFFER */,
      [name, buffer]
    );
    await this.postTask(task, [buffer.buffer]);
  }
  /** Register a file handle. */
  async registerFileHandle(name, handle, protocol, directIO) {
    const task = new WorkerTask("REGISTER_FILE_HANDLE" /* REGISTER_FILE_HANDLE */, [name, handle, protocol, directIO]);
    await this.postTask(task, []);
  }
  /** Enable file statistics */
  async collectFileStatistics(name, enable) {
    const task = new WorkerTask(
      "COLLECT_FILE_STATISTICS" /* COLLECT_FILE_STATISTICS */,
      [name, enable]
    );
    await this.postTask(task, []);
  }
  /** Export file statistics */
  async exportFileStatistics(name) {
    const task = new WorkerTask(
      "EXPORT_FILE_STATISTICS" /* EXPORT_FILE_STATISTICS */,
      name
    );
    return await this.postTask(task, []);
  }
  /** Copy a file to a buffer. */
  async copyFileToBuffer(name) {
    const task = new WorkerTask(
      "COPY_FILE_TO_BUFFER" /* COPY_FILE_TO_BUFFER */,
      name
    );
    return await this.postTask(task);
  }
  /** Copy a file to a path. */
  async copyFileToPath(name, path2) {
    const task = new WorkerTask(
      "COPY_FILE_TO_PATH" /* COPY_FILE_TO_PATH */,
      [name, path2]
    );
    await this.postTask(task);
  }
  /** Insert arrow from an ipc stream */
  async insertArrowFromIPCStream(conn, buffer, options) {
    if (buffer.length == 0)
      return;
    const task = new WorkerTask("INSERT_ARROW_FROM_IPC_STREAM" /* INSERT_ARROW_FROM_IPC_STREAM */, [conn, buffer, options]);
    await this.postTask(task, [buffer.buffer]);
  }
  /** Insert a csv file */
  async insertCSVFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      const out = [];
      for (const k in options.columns) {
        const type = options.columns[k];
        out.push(arrowToSQLField(k, type));
      }
      options.columnsFlat = out;
      delete options.columns;
    }
    const task = new WorkerTask(
      "IMPORT_CSV_FROM_PATH" /* INSERT_CSV_FROM_PATH */,
      [conn, path2, options]
    );
    await this.postTask(task);
  }
  /** Insert a json file */
  async insertJSONFromPath(conn, path2, options) {
    if (options.columns !== void 0) {
      const out = [];
      for (const k in options.columns) {
        const type = options.columns[k];
        out.push(arrowToSQLField(k, type));
      }
      options.columnsFlat = out;
      delete options.columns;
    }
    const task = new WorkerTask(
      "IMPORT_JSON_FROM_PATH" /* INSERT_JSON_FROM_PATH */,
      [conn, path2, options]
    );
    await this.postTask(task);
  }
};

// test/index_node.ts
var import_path = __toESM(require("path"));
var import_web_worker = __toESM(require("web-worker"));
var import_fs3 = __toESM(require("fs"));

// test/all_types.test.ts
var import_apache_arrow = require("apache-arrow");
var MINIMUM_DATE_STR = "-271821-04-20";
var MINIMUM_DATE = new Date(Date.UTC(-271821, 3, 20));
var MAXIMUM_DATE_STR = "275760-09-13";
var MAXIMUM_DATE = new Date(Date.UTC(275760, 8, 13));
var NOT_IMPLEMENTED_TYPES = [
  "timestamp_s",
  "timestamp_ms",
  "timestamp_ns",
  "timestamp_tz",
  "hugeint",
  "dec_18_6",
  "dec38_10",
  "uuid",
  "map",
  "json",
  "date_array",
  "timestamp_array",
  "timestamptz_array"
];
var PARTIALLY_IMPLEMENTED_TYPES = ["date", "timestamp"];
var PARTIALLY_IMPLEMENTED_ANSWER_MAP = {
  date: [MINIMUM_DATE.valueOf(), MAXIMUM_DATE.valueOf(), null],
  timestamp: [MINIMUM_DATE.valueOf(), MAXIMUM_DATE.valueOf(), null]
};
var PARTIALLY_IMPLEMENTED_TYPES_SUBSTITUTIONS = [
  `(SELECT array_extract(['${MINIMUM_DATE_STR}'::Date,'${MAXIMUM_DATE_STR}'::Date,null],i + 1)) as date`,
  `(SELECT array_extract(['${MINIMUM_DATE_STR}'::Timestamp,'${MAXIMUM_DATE_STR}'::Timestamp,null],i + 1)) as timestamp`
];
var TYPES_REQUIRING_CUSTOM_CONFIG = ["dec_4_1", "dec_9_4"];
var FULLY_IMPLEMENTED_ANSWER_MAP = {
  bool: [false, true, null],
  tinyint: [-128, 127, null],
  smallint: [-32768, 32767, null],
  int: [-2147483648, 2147483647, null],
  utinyint: [0, 255, null],
  usmallint: [0, 65535, null],
  uint: [0, 4294967295, null],
  ubigint: [BigInt(0), BigInt("18446744073709551615"), null],
  bigint: [BigInt("-9223372036854775808"), BigInt("9223372036854775807"), null],
  // Note that we multiply by thousand (and add 999 for the max) because the value returned by DuckDB is in microseconds,
  // whereas the Date object is in milliseconds.
  time: [BigInt(0), BigInt((/* @__PURE__ */ new Date("1970-01-01T23:59:59.999+00:00")).valueOf()) * BigInt(1e3) + BigInt(999), null],
  time_tz: [
    BigInt(0),
    BigInt((/* @__PURE__ */ new Date("1970-01-01T23:59:59.999+00:00")).valueOf()) * BigInt(1e3) + BigInt(999),
    null
  ],
  interval: [new Int32Array([0, 0]), new Int32Array([0, 0]), null],
  float: [-34028234663852886e22, 34028234663852886e22, null],
  double: [-17976931348623157e292, 17976931348623157e292, null],
  varchar: ["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}", "goo\0se", null],
  small_enum: ["DUCK_DUCK_ENUM", "GOOSE", null],
  medium_enum: ["enum_0", "enum_299", null],
  large_enum: ["enum_0", "enum_69999", null],
  int_array: [[], [42, 999, null, null, -42], null],
  double_array: [[], [42, NaN, Infinity, -Infinity, null, -42], null],
  varchar_array: [[], ["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}", "goose", null, ""], null],
  nested_int_array: [[], [[], [42, 999, null, null, -42], null, [], [42, 999, null, null, -42]], null],
  struct: ['{"a":null,"b":null}', '{"a":42,"b":"\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}"}', null],
  struct_of_arrays: [
    '{"a":null,"b":null}',
    '{"a":[42,999,null,null,-42],"b":["\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}","goose",null,""]}',
    null
  ],
  array_of_structs: [[], ['{"a":null,"b":null}', '{"a":42,"b":"\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}\u{1F986}"}', null], null],
  // XXX sometimes throws
  // map: ['{}', '{"key1":"🦆🦆🦆🦆🦆🦆","key2":"goose"}', null],
  blob: [
    Uint8Array.from([
      116,
      104,
      105,
      115,
      105,
      115,
      97,
      108,
      111,
      110,
      103,
      98,
      108,
      111,
      98,
      0,
      119,
      105,
      116,
      104,
      110,
      117,
      108,
      108,
      98,
      121,
      116,
      101,
      115
    ]),
    Uint8Array.from([0, 0, 0, 97]),
    null
  ]
};
var REPLACE_COLUMNS = PARTIALLY_IMPLEMENTED_TYPES.concat(NOT_IMPLEMENTED_TYPES).concat(TYPES_REQUIRING_CUSTOM_CONFIG);
function unpack(v) {
  if (v === null)
    return null;
  if (v instanceof import_apache_arrow.Vector) {
    const ret = Array.from(v.toArray());
    for (let i = 0; i < ret.length; i++) {
      if (!v.isValid(i)) {
        ret[i] = null;
      }
    }
    return unpack(ret);
  } else if (v instanceof Array) {
    const ret = [];
    for (let i = 0; i < v.length; i++) {
      ret[i] = unpack(v[i]);
    }
    return ret;
  } else if (v instanceof Uint8Array) {
    return v;
  } else if (v.toJSON instanceof Function) {
    return JSON.stringify(v.toJSON());
  }
  return v;
}
function getValue(x) {
  if (typeof (x == null ? void 0 : x.valueOf) === "function") {
    return x.valueOf();
  } else {
    return x;
  }
}
var ALL_TYPES_TEST = [
  {
    name: "fully supported types",
    query: `SELECT * REPLACE('not_implemented' as map) FROM test_all_types()`,
    skip: REPLACE_COLUMNS,
    answerMap: FULLY_IMPLEMENTED_ANSWER_MAP,
    answerCount: REPLACE_COLUMNS.length + Object.keys(FULLY_IMPLEMENTED_ANSWER_MAP).length,
    queryConfig: null
  },
  {
    name: "partially supported types",
    query: `SELECT ${PARTIALLY_IMPLEMENTED_TYPES_SUBSTITUTIONS.join(", ")}
                FROM range(0, 3) tbl(i)`,
    skip: [],
    answerMap: PARTIALLY_IMPLEMENTED_ANSWER_MAP,
    answerCount: PARTIALLY_IMPLEMENTED_TYPES.length,
    queryConfig: null
  },
  {
    name: "types with custom config",
    query: `SELECT ${TYPES_REQUIRING_CUSTOM_CONFIG.join(",")} FROM test_all_types()`,
    skip: [],
    answerMap: {
      dec_4_1: [-999.9000000000001, 999.9000000000001, null],
      dec_9_4: [-99999.99990000001, 99999.99990000001, null]
    },
    answerCount: TYPES_REQUIRING_CUSTOM_CONFIG.length,
    queryConfig: {
      castDecimalToDouble: true
    }
  }
];
function testAllTypes(db2) {
  let conn;
  beforeEach(() => {
    db2().flushFiles();
  });
  afterEach(() => {
    if (conn) {
      conn.close();
      conn = null;
    }
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("Test All Types", () => {
    for (const test of ALL_TYPES_TEST) {
      it(test.name, () => {
        if (test.queryConfig)
          db2().open({ query: test.queryConfig });
        conn = db2().connect();
        const results = conn.query(test.query);
        expect(results.numCols).toEqual(test.answerCount);
        const skip = /* @__PURE__ */ new Map();
        for (const s of test.skip) {
          skip.set(s, true);
        }
        for (let i = 0; i < results.numCols; i++) {
          const name = results.schema.fields[i].name;
          if (name == "bit")
            continue;
          const col = results.getChildAt(i);
          if (skip.get(name))
            continue;
          expect(col).not.toBeNull();
          expect(col == null ? void 0 : col.length).not.toEqual(0);
          expect(unpack(getValue(col.get(0)))).withContext(name).toEqual(test.answerMap[name][0]);
          expect(unpack(getValue(col.get(1)))).withContext(name).toEqual(test.answerMap[name][1]);
          expect(col.get(2)).withContext(name).toEqual(test.answerMap[name][2]);
        }
      });
    }
  });
}
function testAllTypesAsync(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Test All Types Async", () => {
    for (const test of ALL_TYPES_TEST) {
      it(test.name, async () => {
        if (test.queryConfig)
          db2().open({ query: test.queryConfig });
        conn = await db2().connect();
        const results = await conn.query(test.query);
        expect(results.numCols).toEqual(test.answerCount);
        const skip = /* @__PURE__ */ new Map();
        for (const s of test.skip) {
          skip.set(s, true);
        }
        for (let i = 0; i < results.numCols; i++) {
          const name = results.schema.fields[i].name;
          if (name == "bit")
            continue;
          const col = results.getChildAt(i);
          if (skip.get(name))
            continue;
          expect(col).not.toBeNull();
          expect(col == null ? void 0 : col.length).not.toEqual(0);
          expect(Object.keys(test.answerMap)).toContain(name);
          expect(unpack(getValue(col.get(0)))).withContext(name + "|" + (col == null ? void 0 : col.toString()) + "|[0]").toEqual(test.answerMap[name][0]);
          expect(unpack(getValue(col.get(1)))).withContext(name + "|" + (col == null ? void 0 : col.toString()) + "|[1]").toEqual(test.answerMap[name][1]);
          expect(col.get(2)).withContext(name + "|" + (col == null ? void 0 : col.toString()) + "|[2]").toEqual(test.answerMap[name][2]);
        }
      });
    }
  });
}

// test/bindings.test.ts
var arrow4 = __toESM(require("apache-arrow"));
function testBindings(db2, baseURL) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("DuckDBBindings", () => {
    describe("error handling", () => {
      it("INVALID SQL", async () => {
        let error = null;
        try {
          await conn.send("INVALID");
        } catch (e) {
          error = e;
        }
        expect(error).not.toBe(null);
      });
    });
    describe("Check version", () => {
      it("Version check", async () => {
        await db2().reset();
        conn = db2().connect();
        const version = conn.query(
          "select * from (select version()) where version() != 'v0.0.1-dev0';"
        );
        const rows = version.toArray();
        expect(rows.length).toEqual(1);
        await db2().reset();
      });
    });
    describe("Check platform", () => {
      it("Platform check", async () => {
        var _a;
        await db2().reset();
        conn = db2().connect();
        const version = conn.query(
          "PRAGMA platform;"
        );
        const rows = (_a = version.getChildAt(0)) == null ? void 0 : _a.toArray();
        expect(rows.length).toEqual(1);
        expect(rows[0].toString().substr(0, 5)).toEqual("wasm_");
        await db2().reset();
      });
    });
    describe("Reset", () => {
      it("table must disappear", async () => {
        var _a;
        await db2().reset();
        conn = db2().connect();
        conn.query("CREATE TABLE foo (a int)");
        let table = conn.query("PRAGMA show_tables;");
        let rows = table.toArray();
        expect(rows.length).toEqual(1);
        expect((_a = rows[0]) == null ? void 0 : _a.name).toEqual("foo");
        await db2().reset();
        conn = db2().connect();
        table = conn.query("PRAGMA show_tables;");
        rows = table.toArray();
        expect(rows.length).toEqual(0);
      });
    });
    describe("Prepared Statement", () => {
      it("Materialized", async () => {
        const stmt = conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const result = stmt.query(234);
        expect(result.numRows).toBe(10001);
        stmt.close();
      });
      it("Streaming", async () => {
        const stmt = conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const stream = stmt.send(234);
        let size = 0;
        for (const batch of stream) {
          size += batch.numRows;
        }
        expect(size).toBe(10001);
        conn.close();
      });
      it("Typecheck", async () => {
        conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
        const stmt = conn.prepare("INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)");
        expect(
          () => stmt.query(true, 100, 1e4, 1e6, 5e9, 0.5, Math.PI, "hello world", "hi")
        ).not.toThrow();
        expect(
          () => stmt.query(
            "test",
            // varchar for bool
            100,
            1e4,
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          )
        ).toThrow();
        expect(
          () => stmt.query(
            true,
            1e4,
            // smallint for tinyint
            1e4,
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          )
        ).toThrow();
        expect(
          () => stmt.query(
            true,
            100,
            1e6,
            // int for smallint
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          )
        ).toThrow();
        expect(
          () => stmt.query(
            true,
            100,
            1e4,
            5e9,
            // bigint for int
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          )
        ).toThrow();
        conn.close();
      });
    });
  });
}
function testAsyncBindings(adb2, baseURL, baseDirProto) {
  beforeEach(async () => {
  });
  afterEach(async () => {
    await adb2().flushFiles();
    await adb2().dropFiles();
    await adb2().open({
      path: ":memory:"
    });
  });
  describe("Bindings", () => {
    describe("Open", () => {
      it("Remote TPCH 0_01", async () => {
        await adb2().registerFileURL("tpch_0_01.db", `${baseURL}/tpch/0_01/duckdb/db`, baseDirProto, false);
        await adb2().open({
          path: "tpch_0_01.db"
        });
      });
    });
    describe("Patching", () => {
      it("Count(*) Default", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            castBigIntToDouble: false
          }
        });
        const conn = await adb2().connect();
        const table = await conn.query("select 1::BIGINT");
        expect(table.schema.fields.length).toEqual(1);
        expect(table.schema.fields[0].typeId).toEqual(arrow4.Type.Int);
      });
      it("Count(*) No BigInt", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            castBigIntToDouble: true
          }
        });
        const conn = await adb2().connect();
        const table = await conn.query("select 1::BIGINT");
        expect(table.schema.fields.length).toEqual(1);
        expect(table.schema.fields[0].typeId).toEqual(arrow4.Type.Float);
      });
    });
    describe("Prepared Statement", () => {
      it("Materialized", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare("SELECT v + ? FROM generate_series(0, 10000) as t(v);");
        const result = await stmt.query(234);
        expect(result.numRows).toBe(10001);
        await stmt.close();
      });
      it("Streaming", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare("SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);");
        const stream = await stmt.send(234);
        let size = 0;
        for await (const batch of stream) {
          size += batch.numRows;
        }
        expect(size).toBe(10001);
        await conn.close();
      });
      it("Typecheck", async () => {
        const conn = await adb2().connect();
        await conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
        const stmt = await conn.prepare("INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)");
        const expectToThrow = async (fn) => {
          let throwed = false;
          try {
            await fn();
          } catch (e) {
            throwed = true;
          }
          expect(throwed).toBe(true);
        };
        expectToThrow(async () => {
          await stmt.query(
            "test",
            // varchar for bool
            100,
            1e4,
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          );
        });
        expectToThrow(async () => {
          await stmt.query(
            true,
            1e4,
            // smallint for tinyint
            1e4,
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          );
        });
        expectToThrow(async () => {
          await stmt.query(
            true,
            100,
            1e6,
            // int for smallint
            1e6,
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          );
        });
        expectToThrow(async () => {
          await stmt.query(
            true,
            100,
            1e4,
            5e9,
            // bigint for int
            5e9,
            0.5,
            Math.PI,
            "hello world",
            "hi"
          );
        });
        await conn.close();
      });
    });
    describe("AccessMode", () => {
      it("READ_ONLY", async () => {
        await expectAsync(
          adb2().open({
            accessMode: 2 /* READ_ONLY */
          })
        ).toBeRejectedWithError(/Cannot launch in-memory database in read-only mode/);
      });
      it("READ_WRITE", async () => {
        await expectAsync(
          adb2().open({
            accessMode: 3 /* READ_WRITE */
          })
        ).toBeResolved();
      });
    });
    describe("Cancellation", () => {
      it("hello cancel", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            queryPollingInterval: 0
          }
        });
        const conn = await adb2().connect();
        const result = await conn.useUnsafe(
          (db2, id) => db2.startPendingQuery(id, "SELECT SUM(i) FROM range(1000000) tbl(i);")
        );
        expect(result).toBeNull();
        const cancelOK = await conn.useUnsafe((db2, id) => db2.cancelPendingQuery(id));
        expect(cancelOK).toBeTrue();
        let polledHeader = null;
        let polledError = null;
        try {
          polledHeader = await conn.useUnsafe((db2, id) => db2.pollPendingQuery(id));
        } catch (e) {
          polledError = e;
        }
        expect(polledHeader).toBeNull();
        expect(polledError).not.toBeNull();
        expect(polledError.toString()).toEqual("Error: query was canceled");
        const canceledAgain = await conn.useUnsafe((db2, id) => db2.cancelPendingQuery(id));
        expect(canceledAgain).toBeFalse();
        const table = await conn.query("select 42::integer;");
        expect(table.schema.fields.length).toEqual(1);
      });
      it("noop cancel", async () => {
        await adb2().open({
          path: ":memory:",
          query: {
            queryPollingInterval: 0
          }
        });
        const conn = await adb2().connect();
        const result = await conn.useUnsafe(
          (db2, id) => db2.startPendingQuery(id, "SELECT SUM(i) FROM range(1000000) tbl(i);")
        );
        expect(result).toBeNull();
        let polledHeader = null;
        let polledError = null;
        try {
          while (polledHeader == null) {
            polledHeader = await conn.useUnsafe((db2, id) => db2.pollPendingQuery(id));
          }
        } catch (e) {
          polledError = e;
        }
        expect(polledHeader).not.toBeNull();
        expect(polledError).toBeNull();
        const cancelOK = await conn.useUnsafe((db2, id) => db2.cancelPendingQuery(id));
        expect(cancelOK).toBeFalse();
        const anotherOne = await conn.useUnsafe((db2, id) => db2.cancelPendingQuery(id));
        expect(anotherOne).toBeFalse();
      });
    });
  });
}

// test/batch_stream.test.ts
var testRows = 1e4;
function testBatchStream(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("Arrow Record-Batches Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Record-Batches Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Table Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const table = conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const table = conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const table = conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++);
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const table = conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const table = conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v.valueOf()).toBe(String(i++));
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
  describe("Arrow Table Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", () => {
        const table = conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows + 1);
      });
      it("SMALLINT", () => {
        const table = conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows + 1);
      });
      it("INTEGER", () => {
        const table = conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++);
        }
        expect(i).toBe(testRows + 1);
      });
      it("BIGINT", () => {
        const table = conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows + 1);
      });
      it("STRING", () => {
        const table = conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(String(i++));
        }
        expect(i).toBe(testRows + 1);
      });
    });
  });
}

// test/filesystem.test.ts
var arrow5 = __toESM(require("apache-arrow"));
var decoder = new TextDecoder();
function testFilesystem(db2, resolveData2, baseDir, baseDirProto) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("File buffer registration", () => {
    const test = async () => {
      var _a;
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(
        new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
      );
    };
    it("File buffer used once", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await test();
    });
    it("File buffer registered twice", async () => {
      const students0 = await resolveData2("/uni/studenten.parquet");
      const students1 = await resolveData2("/uni/studenten.parquet");
      expect(students0).not.toBeNull();
      expect(students1).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students0);
      await test();
      await db2().registerFileBuffer("studenten.parquet", students1);
      await test();
    });
    it("File buffer used twice", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await test();
      await test();
    });
  });
  describe("Parquet Scans", () => {
    it("single table from buffer", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(
        new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
      );
    });
    it("simple join", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      const hoeren = await resolveData2("/uni/hoeren.parquet");
      const vorlesungen = await resolveData2("/uni/vorlesungen.parquet");
      expect(students).not.toBeNull();
      expect(hoeren).not.toBeNull();
      expect(vorlesungen).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerFileBuffer("hoeren.parquet", hoeren);
      await db2().registerFileBuffer("vorlesungen.parquet", vorlesungen);
      const result = await conn.send(`
                    SELECT students.matrnr, vorlesungen.titel
                    FROM parquet_scan('studenten.parquet') students
                    INNER JOIN parquet_scan('hoeren.parquet') hoeren ON (students.matrnr = hoeren.matrnr)
                    INNER JOIN parquet_scan('vorlesungen.parquet') vorlesungen ON (vorlesungen.vorlnr = hoeren.vorlnr);
                `);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect(table.numCols).toBe(2);
      const flat = [];
      for (const row of table) {
        flat.push({
          matrnr: row == null ? void 0 : row.matrnr,
          titel: (_a = row == null ? void 0 : row.titel) == null ? void 0 : _a.toString()
        });
      }
      expect(flat).toEqual([
        { matrnr: 26120, titel: "Grundz\xFCge" },
        { matrnr: 27550, titel: "Grundz\xFCge" },
        { matrnr: 27550, titel: "Logik" },
        { matrnr: 28106, titel: "Ethik" },
        { matrnr: 28106, titel: "Wissenschaftstheorie" },
        { matrnr: 28106, titel: "Bioethik" },
        { matrnr: 28106, titel: "Der Wiener Kreis" },
        { matrnr: 29120, titel: "Grundz\xFCge" },
        { matrnr: 29120, titel: "Ethik" },
        { matrnr: 29120, titel: "M\xE4eutik" },
        { matrnr: 29555, titel: "Glaube und Wissen" },
        { matrnr: 25403, titel: "Glaube und Wissen" }
      ]);
    });
  });
  describe("Writing", () => {
    it("Copy To CSV Buffer", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students.csv");
      await conn.query(`CREATE TABLE students AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students TO 'students.csv' WITH (HEADER 1, DELIMITER ';', FORMAT CSV);`);
      await conn.query(`DROP TABLE IF EXISTS students`);
      const outBuffer = await db2().copyFileToBuffer("students.csv");
      expect(outBuffer).not.toBeNull();
      const text = decoder.decode(outBuffer);
      expect(text).toBe(`matrnr;name;semester
24002;Xenokrates;18
25403;Jonas;12
26120;Fichte;10
26830;Aristoxenos;8
27550;Schopenhauer;6
28106;Carnap;3
29120;Theophrastos;2
29555;Feuerbach;2
`);
    });
    it("Copy To Parquet", async () => {
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students2.parquet");
      await conn.query(`CREATE TABLE students2 AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students2 TO 'students2.parquet' (FORMAT PARQUET);`);
      const url = await db2().copyFileToBuffer("students2.parquet");
      expect(url).not.toBeNull();
    });
    it("Copy To Parquet And Load Again", async () => {
      var _a;
      const students = await resolveData2("/uni/studenten.parquet");
      expect(students).not.toBeNull();
      await db2().registerFileBuffer("studenten.parquet", students);
      await db2().registerEmptyFileBuffer("students3.parquet");
      await conn.query(`CREATE TABLE students3 AS SELECT * FROM parquet_scan('studenten.parquet');`);
      await conn.query(`COPY students3 TO 'students3.parquet' (FORMAT PARQUET);`);
      const url = await db2().copyFileToBuffer("students3.parquet");
      expect(url).not.toBeNull();
      await conn.query(`CREATE TABLE students4 AS SELECT * FROM parquet_scan('students3.parquet');`);
      const result = await conn.send(`SELECT matrnr FROM students4;`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(
        new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
      );
    });
  });
  describe("File access", () => {
    it("Small Parquet file", async () => {
      var _a;
      await db2().registerFileURL("studenten.parquet", `${baseDir}/uni/studenten.parquet`, baseDirProto, true);
      const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(
        new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
      );
    });
    it("Large Parquet file", async () => {
      var _a;
      await db2().registerFileURL(
        "lineitem.parquet",
        `${baseDir}/tpch/0_01/parquet/lineitem.parquet`,
        baseDirProto,
        true
      );
      const result = await conn.send(`SELECT count(*)::INTEGER as cnt FROM parquet_scan('lineitem.parquet');`);
      const batches = [];
      for await (const batch of result) {
        batches.push(batch);
      }
      const table = await new arrow5.Table(batches);
      expect((_a = table.getChildAt(0)) == null ? void 0 : _a.get(0)).toBeGreaterThan(6e4);
    });
  });
  describe("Export", () => {
    it("Generate Series as CSV", async () => {
      await conn.query("CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)");
      await conn.query(`EXPORT DATABASE '/tmp/duckdbexportcsv'`);
      const results = await db2().globFiles("/tmp/duckdbexportcsv/*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(3);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual([
        "/tmp/duckdbexportcsv/foo.csv",
        "/tmp/duckdbexportcsv/load.sql",
        "/tmp/duckdbexportcsv/schema.sql"
      ]);
      const csv_buffer_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/foo.csv");
      const load_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/load.sql");
      const schema_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportcsv/schema.sql");
      expect(load_script_utf8.length).not.toEqual(0);
      expect(schema_script_utf8.length).not.toEqual(0);
      expect(csv_buffer_utf8.length).not.toEqual(0);
      const load_script = decoder.decode(load_script_utf8);
      const schema_script = decoder.decode(schema_script_utf8);
      const csv_buffer = decoder.decode(csv_buffer_utf8);
      expect(load_script.trim()).toEqual(
        `COPY foo FROM '/tmp/duckdbexportcsv/foo.csv' (FORMAT 'csv', quote '"', delimiter ',', header 0);`
      );
      expect(schema_script.trim()).toEqual(`CREATE TABLE foo(v BIGINT);`);
      expect(csv_buffer.trim()).toEqual(`1
2
3
4
5`);
    });
    it("Generate Series as Parquet", async () => {
      var _a;
      await conn.query("CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)");
      await conn.query(`EXPORT DATABASE '/tmp/duckdbexportparquet' (FORMAT PARQUET)`);
      const results = await db2().globFiles("/tmp/duckdbexportparquet/*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(3);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual([
        "/tmp/duckdbexportparquet/foo.parquet",
        "/tmp/duckdbexportparquet/load.sql",
        "/tmp/duckdbexportparquet/schema.sql"
      ]);
      const parquet_buffer = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/foo.parquet");
      const load_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/load.sql");
      const schema_script_utf8 = await db2().copyFileToBuffer("/tmp/duckdbexportparquet/schema.sql");
      expect(load_script_utf8.length).not.toEqual(0);
      expect(schema_script_utf8.length).not.toEqual(0);
      expect(parquet_buffer.length).not.toEqual(0);
      const content = await conn.query(
        `SELECT v::integer FROM parquet_scan('/tmp/duckdbexportparquet/foo.parquet')`
      );
      expect(content.nullCount).toEqual(0);
      expect(content.numRows).toEqual(5);
      expect((_a = content.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
    });
  });
  describe("Copy", () => {
    it("Generate Series as Parquet", async () => {
      var _a;
      await conn.query(
        `COPY (SELECT * FROM generate_series(1, 5) t(v)) TO '/tmp/duckdbcopytest.parquet' (FORMAT 'parquet')`
      );
      const results = await db2().globFiles("/tmp/duckdbcopytest*");
      expect(results).not.toEqual([]);
      expect(results.length).toEqual(1);
      const filenames = results.map((file) => file.fileName).sort();
      expect(filenames).toEqual(["/tmp/duckdbcopytest.parquet"]);
      const parquet_buffer = await db2().copyFileToBuffer("/tmp/duckdbcopytest.parquet");
      expect(parquet_buffer.length).not.toEqual(0);
      const content = await conn.query(`SELECT v::integer FROM parquet_scan('/tmp/duckdbcopytest.parquet')`);
      expect(content.numRows).toEqual(5);
      expect((_a = content.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
    });
  });
}

// test/batch_stream_async.test.ts
var testRows2 = 1e4;
function testAsyncBatchStream(db2) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("AsyncDuckDB", () => {
    it("ping", async () => {
      await db2().ping();
    });
  });
  describe("Arrow Record-Batches Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const row of batch) {
            expect(row.v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
    describe("scripts", () => {
      it("test1", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS x, (sin(v) * 100 + 100)::INTEGER AS y FROM generate_series(0, ${testRows2}) as t(v)
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(2);
          for (const row of batch) {
            expect(row.x).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Record-Batches Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 127);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++ & 32767);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(i++);
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(BigInt(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for await (const batch of result) {
          expect(batch.numCols).toBe(1);
          for (const v of batch.getChildAt(0)) {
            expect(v).toBe(String(i++));
          }
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Table Row-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const table = await conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(i++);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const table = await conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const table = await conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const row of table) {
          expect(row == null ? void 0 : row.v.valueOf()).toBe(String(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
  describe("Arrow Table Column-Major", () => {
    describe("single column", () => {
      it("TINYINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 127);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("SMALLINT", async () => {
        const table = await conn.query(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++ & 32767);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("INTEGER", async () => {
        const table = await conn.query(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(i++);
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("BIGINT", async () => {
        const table = await conn.query(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(BigInt(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
      it("STRING", async () => {
        const table = await conn.query(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
        let i = 0;
        for (const v of table.getChildAt(0)) {
          expect(v).toBe(String(i++));
        }
        expect(i).toBe(testRows2 + 1);
      });
    });
  });
}

// test/insert_arrow.test.ts
var arrow6 = __toESM(require("apache-arrow"));

// test/table_test.ts
function compareTable(table, expected) {
  var _a, _b;
  const colCount = expected.length;
  expect(table.numCols).toEqual(colCount);
  if (colCount == 0)
    return;
  const rowCount = expected[0].values.length;
  for (let i = 0; i < colCount; ++i) {
    expect(expected[i].values.length).toEqual(rowCount);
    expect((_a = table.getChildAt(i)) == null ? void 0 : _a.length).toEqual(rowCount);
    expect((_b = table.schema.fields[i]) == null ? void 0 : _b.name).toEqual(expected[i].name);
  }
  for (let i = 0; i < colCount; ++i) {
    const col = table.getChildAt(i);
    const have = [];
    for (let j = 0; j < rowCount; ++j) {
      have.push(col.get(j));
    }
    expect(Number(have)).toEqual(Number(expected[i].values));
  }
}

// test/insert_arrow.test.ts
var buildUtf8Array = (values) => {
  const builder = new arrow6.Utf8Builder({
    type: new arrow6.Utf8()
  });
  for (const v of values) {
    builder.append(v);
  }
  builder.finish();
  return builder.flush();
};
var ARROW_INSERT_TESTS = [
  {
    name: "integers_1",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int32()),
      new arrow6.Field("c", new arrow6.Int32())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([2, 5, 8]) }),
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([3, 6, 9]) })
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "combined_1",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int16()),
      new arrow6.Field("c", new arrow6.Utf8())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([2, 5, 8]) }),
          buildUtf8Array(["3", "6", "9"])
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  },
  {
    name: "combined_2",
    schema: new arrow6.Schema([
      new arrow6.Field("a", new arrow6.Int32()),
      new arrow6.Field("b", new arrow6.Int16()),
      new arrow6.Field("c", new arrow6.Utf8())
    ]),
    batches: [
      {
        numRows: 3,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([1, 4, 7]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([2, 5, 8]) }),
          buildUtf8Array(["3", "6", "9"])
        ]
      },
      {
        numRows: 2,
        columns: [
          arrow6.makeData({ type: new arrow6.Int32(), data: new Int32Array([10, 13]) }),
          arrow6.makeData({ type: new arrow6.Int16(), data: new Int16Array([11, 14]) }),
          buildUtf8Array(["12", "15"])
        ]
      }
    ],
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7, 10, 13] },
      { name: "b", values: [2, 5, 8, 11, 14] },
      { name: "c", values: ["3", "6", "9", "12", "15"] }
    ]
  }
];
function testArrowInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Arrow insert from iterable", () => {
    for (const test of ARROW_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const batches = test.batches.map((b) => {
          const data = arrow6.makeData({
            type: new arrow6.Struct(test.schema.fields),
            children: b.columns
          });
          return new arrow6.RecordBatch(test.schema, data);
        });
        const table = new arrow6.Table(test.schema, batches);
        conn.insertArrowTable(table, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testArrowInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("Arrow async insert from iterable", () => {
    for (const test of ARROW_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const batches = test.batches.map((b) => {
          const data = arrow6.makeData({
            type: new arrow6.Struct(test.schema.fields),
            children: b.columns
          });
          return new arrow6.RecordBatch(test.schema, data);
        });
        const table = new arrow6.Table(test.schema, batches);
        await conn.insertArrowTable(table, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describe("Arrow async insert from table", () => {
    it("simple integers", async () => {
      await conn.query(`DROP TABLE IF EXISTS insert_from_table`);
      const table = new arrow6.Table({
        a: arrow6.makeVector(new Int32Array([1, 4, 7])),
        b: arrow6.makeVector(new Int32Array([2, 5, 8])),
        c: arrow6.vectorFromArray(["3", "6", "9"])
      });
      await conn.insertArrowTable(table, {
        name: "insert_from_vectors"
      });
      const results = await conn.query("select * from insert_from_vectors");
      compareTable(results, [
        { name: "a", values: [1, 4, 7] },
        { name: "b", values: [2, 5, 8] },
        { name: "c", values: ["3", "6", "9"] }
      ]);
    });
  });
}

// test/insert_json.test.ts
var arrow7 = __toESM(require("apache-arrow"));
function describeBrowser(description, specDefinitions) {
  if (typeof window !== "undefined") {
    describe(description, specDefinitions);
  }
}
var encoder = new TextEncoder();
var JSON_INSERT_TESTS = [
  {
    name: "rows_integers",
    input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "cols_integers",
    input: `{
            "a": [1, 4, 7],
            "b": [2, 5, 8],
            "c": [3, 6, 9]
        }`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "options_1",
    input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
    options: {
      schema: "main",
      name: "foo",
      shape: "row-array" /* ROW_ARRAY */,
      columns: {
        a: new arrow7.Int16(),
        b: new arrow7.Int32(),
        c: new arrow7.Utf8()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  }
];
var TEST_FILE = "TEST";
function testJSONInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("JSON Insert Sync", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        db2().registerFileBuffer(TEST_FILE, buffer);
        conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testJSONInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("JSON Insert Buffer Async", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        await db2().registerFileBuffer(TEST_FILE, buffer);
        await conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describeBrowser("JSON Insert Blob Async", () => {
    for (const test of JSON_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder.encode(test.input);
        const blob = new Blob([buffer]);
        await db2().registerFileHandle(TEST_FILE, blob, 2 /* BROWSER_FILEREADER */, false);
        await conn.insertJSONFromPath(TEST_FILE, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}

// test/insert_csv.test.ts
var arrow8 = __toESM(require("apache-arrow"));
function describeBrowser2(description, specDefinitions) {
  if (typeof window !== "undefined") {
    describe(description, specDefinitions);
  }
}
var encoder2 = new TextEncoder();
var CSV_INSERT_TESTS = [
  {
    name: "integers_auto_1",
    input: `"a","b","c"
1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "integers_auto_2",
    input: `a,b,c
1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: [3, 6, 9] }
    ]
  },
  {
    name: "integers_auto_3",
    input: `a,b,c`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "column0", values: ["a"] },
      { name: "column1", values: ["b"] },
      { name: "column2", values: ["c"] }
    ]
  },
  {
    name: "integers_auto_2",
    input: `a
1
4
7
`,
    options: {
      schema: "main",
      name: "foo"
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [{ name: "a", values: [1, 4, 7] }]
  },
  {
    name: "options_1",
    input: `1,2,3
4,5,6
7,8,9
`,
    options: {
      schema: "main",
      name: "foo2",
      header: false,
      detect: false,
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.Utf8()
      }
    },
    query: "SELECT * FROM main.foo2",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      { name: "c", values: ["3", "6", "9"] }
    ]
  },
  {
    name: "options_2",
    input: `1|2|01/02/2020
4|5|01/03/2020
7|8|01/04/2020
`,
    options: {
      schema: "main",
      name: "foo",
      detect: false,
      header: false,
      delimiter: "|",
      dateFormat: "%m/%d/%Y",
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.DateDay()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      {
        name: "c",
        values: [
          new Date(Date.UTC(2020, 0, 2)),
          new Date(Date.UTC(2020, 0, 3)),
          new Date(Date.UTC(2020, 0, 4))
        ]
      }
    ]
  },
  {
    name: "options_3",
    input: `1|2|20:32:45 1992-03-02
4|5|20:32:50 1992-03-02
7|8|20:32:55 1992-03-02
`,
    options: {
      schema: "main",
      name: "foo",
      detect: false,
      header: false,
      delimiter: "|",
      quote: "'",
      timestampFormat: "%H:%M:%S %Y-%m-%d",
      columns: {
        a: new arrow8.Int16(),
        b: new arrow8.Int32(),
        c: new arrow8.TimestampSecond()
      }
    },
    query: "SELECT * FROM main.foo",
    expectedColumns: [
      { name: "a", values: [1, 4, 7] },
      { name: "b", values: [2, 5, 8] },
      {
        name: "c",
        values: [
          new Date(Date.UTC(1992, 2, 2, 20, 32, 45)).getTime(),
          new Date(Date.UTC(1992, 2, 2, 20, 32, 50)).getTime(),
          new Date(Date.UTC(1992, 2, 2, 20, 32, 55)).getTime()
        ]
      }
    ]
  }
];
var TEST_FILE2 = "TEST";
function testCSVInsert(db2) {
  let conn;
  beforeEach(async () => {
    db2().flushFiles();
    conn = db2().connect();
  });
  afterEach(async () => {
    conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("CSV Insert Sync", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, () => {
        conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        db2().registerFileBuffer(TEST_FILE2, buffer);
        conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}
function testCSVInsertAsync(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("CSV Insert Buffer Async", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        await db2().registerFileBuffer(TEST_FILE2, buffer);
        await conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
  describeBrowser2("CSV Insert Blob Async", () => {
    for (const test of CSV_INSERT_TESTS) {
      it(test.name, async () => {
        await conn.query(`DROP TABLE IF EXISTS ${test.options.schema || "main"}.${test.options.name}`);
        const buffer = encoder2.encode(test.input);
        const blob = new Blob([buffer]);
        await db2().registerFileHandle(TEST_FILE2, blob, 2 /* BROWSER_FILEREADER */, false);
        await conn.insertCSVFromPath(TEST_FILE2, test.options);
        const results = await conn.query(test.query);
        compareTable(results, test.expectedColumns);
      });
    }
  });
}

// test/tokenizer.test.ts
function testTokenization(db2) {
  describe("Tokenizer", () => {
    it("SELECT 1", async () => {
      expect(db2().tokenize("SELECT 1")).toEqual({
        offsets: [0, 7],
        types: [4, 1]
      });
    });
    it("SELECT * FROM region", async () => {
      expect(db2().tokenize("SELECT * FROM region")).toEqual({
        offsets: [0, 7, 9, 14],
        types: [4, 3, 4, 0]
      });
    });
  });
}
function testTokenizationAsync(db2) {
  describe("Tokenizer", () => {
    it("SELECT 1", async () => {
      expect(await db2().tokenize("SELECT 1")).toEqual({
        offsets: [0, 7],
        types: [4, 1]
      });
    });
    it("SELECT * FROM region", async () => {
      expect(await db2().tokenize("SELECT * FROM region")).toEqual({
        offsets: [0, 7, 9, 14],
        types: [4, 3, 4, 0]
      });
    });
  });
}

// test/tablenames.test.ts
var TABLENAME_TESTS = [
  {
    name: "standard",
    input: "SELECT * FROM my_table",
    tables: ["my_table"]
  },
  {
    name: "fetch_specific",
    input: "SELECT col_a FROM my_table",
    tables: ["my_table"]
  },
  {
    name: "multiple_tables",
    input: "SELECT * FROM my_table1, my_table2, my_table3",
    tables: ["my_table1", "my_table2", "my_table3"]
  },
  {
    name: "same_table_multiple_times",
    input: "SELECT col_a FROM my_table, my_table m2, my_table m3",
    tables: ["my_table"]
  },
  {
    name: "subqueries",
    input: "SELECT * FROM (SELECT * FROM (SELECT * FROM my_table) bla) bla3",
    tables: ["my_table"]
  },
  {
    name: "join",
    input: "SELECT col_a FROM my_table JOIN my_table2 ON (my_table.col_b=my_table2.col_d)",
    tables: ["my_table", "my_table2"]
  },
  {
    name: "scalar_subquery",
    input: "SELECT (SELECT COUNT(*) FROM my_table)",
    tables: ["my_table"]
  },
  {
    name: "set_operations",
    input: "SELECT * FROM my_table UNION ALL SELECT * FROM my_table2 INTERSECT SELECT * FROM my_table3",
    tables: ["my_table", "my_table2", "my_table3"]
  },
  {
    name: "window_functions",
    input: "SELECT row_number() OVER (ORDER BY (SELECT i+j FROM my_table2)) FROM my_table",
    tables: ["my_table", "my_table2"]
  }
];
function testTableNames(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
  });
  describe("TableNames", () => {
    for (const test of TABLENAME_TESTS) {
      it(test.name, () => {
        const tables = conn.getTableNames(test.input);
        expect(tables).toEqual(test.tables);
      });
    }
  });
}
function testTableNamesAsync(db2) {
  let conn;
  beforeEach(async () => {
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
  });
  describe("TableNames Async", () => {
    for (const test of TABLENAME_TESTS) {
      it(test.name, async () => {
        const tables = await conn.getTableNames(test.input);
        expect(tables).toEqual(test.tables);
      });
    }
  });
}

// test/udf.test.ts
var import_apache_arrow2 = require("apache-arrow");
function testUDF(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("UDF", () => {
    it("simple", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf", new import_apache_arrow2.Int32(), (a) => a);
      const result = conn.query(
        "SELECT max(jsudf(v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([1e4]));
    });
    it("double", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf2", new import_apache_arrow2.Float64(), (a) => a);
      const result = conn.query(
        "SELECT max(jsudf2(v::DOUBLE))::DOUBLE as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Float64Array([1e4]));
    });
    it("2 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf3", new import_apache_arrow2.Int32(), (a, b) => a + b);
      const result = conn.query(
        "SELECT max(jsudf3(v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([2e4]));
    });
    it("3 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf3args", new import_apache_arrow2.Int32(), (a, b, c) => a + b + c);
      const result = conn.query(
        "SELECT max(jsudf3args(v::INTEGER, v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([3e4]));
    });
    it("4 args", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf4args", new import_apache_arrow2.Int32(), (a, b, c, d) => a + b + c + d);
      const result = conn.query(
        "SELECT max(jsudf4args(v::INTEGER, v::INTEGER, v::INTEGER, v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([4e4]));
    });
    it("noargs", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf4", new import_apache_arrow2.Int32(), () => 42);
      const result = conn.query("SELECT max(jsudf4())::INTEGER as foo FROM generate_series(1, 10000) as t(v)");
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([42]));
    });
    it("withnulls", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf5", new import_apache_arrow2.Int32(), (a) => a == null ? -100 : a);
      const result = conn.query(
        "SELECT min(jsudf5((case when v % 2 = 0 then v else null end)::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([-100]));
    });
    it("stringparam", async () => {
      var _a, _b;
      function jsudf6(s) {
        return s.length;
      }
      conn.createScalarFunction("jsudf6", new import_apache_arrow2.Int32(), jsudf6);
      const result = conn.query(
        "SELECT max(jsudf6('str_' || v))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([9]));
    });
    it("stringparamnulls", async () => {
      var _a, _b;
      function jsudf7(s) {
        if (s == void 0) {
          return 0;
        } else {
          return s.length;
        }
      }
      conn.createScalarFunction("jsudf7", new import_apache_arrow2.Int32(), jsudf7);
      const result = conn.query(
        "SELECT max(jsudf7((case when v % 2 = 0 then 'str_' || v else null end)::VARCHAR))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([9]));
    });
    it("nullintreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf8", new import_apache_arrow2.Int32(), (a) => void 0);
      const result = conn.query(
        "SELECT max(COALESCE(jsudf8(v::INTEGER), 42))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([42]));
    });
    it("stringreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf9", new import_apache_arrow2.Utf8(), (a) => "Hello " + a);
      const result = conn.query(
        "SELECT max(LENGTH(jsudf9(v::INTEGER)))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([11]));
    });
    it("nullstringreturn", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf10", new import_apache_arrow2.Utf8(), (a) => a % 2 == 0 ? "Hello" : void 0);
      const result = conn.query(
        "SELECT COUNT(jsudf10(v::INTEGER))::INTEGER as foo FROM generate_series(1, 10000) as t(v)"
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([5e3]));
    });
    it("struct", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf11", new import_apache_arrow2.Int32(), (a) => a.x == null ? -100 : a.x);
      const result = conn.query(
        `SELECT min(jsudf11({'x': (case when v % 2 = 0 then v else null end)::INTEGER, 'y': 42}))::INTEGER as foo FROM generate_series(1, 10000) as t(v)`
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([-100]));
    });
    it("structnested", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf12", new import_apache_arrow2.Int32(), (a) => a.x.y == null ? -100 : a.x.y);
      const result = conn.query(
        `SELECT min(jsudf12({'x': {'y': (case when v % 2 = 0 then v else null end)::INTEGER }, 'z': 42}))::INTEGER as foo FROM generate_series(1, 10000) as t(v)`
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([-100]));
    });
    it("structnestednull", async () => {
      var _a, _b;
      conn.createScalarFunction("jsudf13", new import_apache_arrow2.Int32(), (a) => {
        var _a2;
        return ((_a2 = a.x) == null ? void 0 : _a2.y) == null ? -100 : a.x.y;
      });
      const result = conn.query(
        `SELECT min(jsudf13({'x': (case when v % 2 = 0 then {'y': v::INTEGER } else null end), 'z': 42}))::INTEGER as foo FROM generate_series(1, 10000) as t(v)`
      );
      expect(result.numRows).toEqual(1);
      expect(result.numCols).toEqual(1);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.length).toEqual(1);
      expect((_b = result.getChildAt(0)) == null ? void 0 : _b.toArray()).toEqual(new Int32Array([-100]));
    });
  });
}

// test/regression/github_332.test.ts
function test332(db2) {
  let conn;
  beforeEach(async () => {
    await db2().flushFiles();
    conn = await db2().connect();
  });
  afterEach(async () => {
    await conn.close();
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("332", async () => {
      await db2().registerFileText(
        "Products.csv",
        `ProductGroup,Product,Year,Quarter,Revenue,Units,Count,Product Key,Reseller,Product Info,QuarterAsNumber
Electronics,Phone,2018,Q1,103,7,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q1,102,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2019,Q1,98,12,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2018,Q1,104,3,1,2018-Q1,Samsung,Format=XML; <Properties>\u2026,1
Electronics,Computer,2019,Q1,83,7,1,2019-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2018,Q1,17,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2019,Q1,20,7,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2018,Q1,25,12,1,2018-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Movies,2019,Q1,26,13,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2018,Q2,99,4,1,2018-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2019,Q2,84,20,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2018,Q2,17,4,1,2018-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Media,Theater,2019,Q2,22,5,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2018,Q2,25,12,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2019,Q2,26,14,1,2019-Q2,Google,Format=XML; <Properties>\u2026,2
Electronics,Phone,2000,Q1,103,7,1,2000-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2001,Q1,102,4,1,2001-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2002,Q1,98,12,1,2002-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Computer,2003,Q1,104,3,1,2003-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2004,Q1,83,7,1,2004-Q1,Samsung,Format=XML; <Properties>\u2026,1
Media,Theater,2005,Q1,17,4,1,2005-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2006,Q1,20,7,1,2006-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2007,Q1,25,12,1,2007-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2008,Q1,26,13,1,2008-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Phone,2009,Q2,105,5,1,2009-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2010,Q2,82,15,1,2010-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2011,Q2,99,4,1,2011-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2012,Q2,84,20,1,2012-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2013,Q2,17,4,1,2013-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2014,Q2,22,5,1,2014-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2015,Q2,25,12,1,2015-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2016,Q2,26,14,1,2016-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2017,Q1,26,13,1,2017-Q1,Google,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2020,Q2,99,4,1,2020-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q1,103,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2020,Q2,102,4,1,2020-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q3,98,12,1,2020-Q3,LG,Format=XML; <Properties>\u2026,3
Electronics,Computer,2020,Q4,104,3,1,2020-Q4,LG,Format=XML; <Properties>\u2026,4
Electronics,Computer,2020,Q1,83,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,17,4,1,2020-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,20,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
`
      );
      await conn.query("CREATE TABLE products AS SELECT * FROM 'Products.csv'");
      const all = await conn.query("SELECT * FROM products");
      expect(all.schema.fields.length).toBe(11);
      expect(all.schema.fields[0].name).toBe("ProductGroup");
      const insensitive = await conn.query("SELECT productgroup FROM products GROUP BY productgroup");
      expect(insensitive.schema.fields.length).toBe(1);
      expect(insensitive.schema.fields[0].name).toBe("ProductGroup");
      expect(insensitive.toArray().length).toEqual(2);
      await conn.query("DROP TABLE products");
    });
  });
}

// test/regression/github_334.test.ts
var arrow9 = __toESM(require("apache-arrow"));
function test334(adb2) {
  describe("GitHub issues", () => {
    describe("334", () => {
      it("CSV insert", async () => {
        await adb2().registerFileText(`data.csv`, "1|foo\n2|bar\n");
        const conn = await adb2().connect();
        await conn.insertCSVFromPath("data.csv", {
          schema: "main",
          name: "foo",
          detect: false,
          header: false,
          delimiter: "|",
          columns: {
            col1: new arrow9.Int32(),
            col2: new arrow9.Utf8()
          }
        });
        await conn.query("DROP TABLE IF EXISTS foo");
        await conn.close();
        await adb2().dropFile("data.csv");
      });
      it("JSON row insert", async () => {
        await adb2().registerFileText(
          "rows.json",
          `[
                    { "col1": 1, "col2": "foo" },
                    { "col1": 2, "col2": "bar" },
                ]`
        );
        const conn = await adb2().connect();
        await conn.insertJSONFromPath("rows.json", { name: "rows" });
        await conn.query("DROP TABLE IF EXISTS rows");
        await conn.close();
        await adb2().dropFile("rows.json");
      });
      it("JSON column insert", async () => {
        await adb2().registerFileText(
          "columns.json",
          `{
                    "col1": [1, 2],
                    "col2": ["foo", "bar"]
                }`
        );
        const conn = await adb2().connect();
        await conn.insertJSONFromPath("columns.json", { name: "columns" });
        await conn.query("DROP TABLE IF EXISTS columns");
        await conn.close();
        await adb2().dropFile("columns.json");
      });
      it("Query result materialized", async () => {
        const conn = await adb2().connect();
        await conn.query(`
                SELECT * FROM generate_series(1, 100) t(v)
            `);
        await conn.close();
      });
      it("Query result streamed", async () => {
        const conn = await adb2().connect();
        for await (const batch of await conn.send(`
                SELECT * FROM generate_series(1, 100) t(v)
            `)) {
          expect(batch.numRows).toBeGreaterThan(0);
        }
        await conn.close();
      });
      it("Prepared statement materialized", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
        await stmt.query(234);
        await stmt.close();
        await conn.close();
      });
      it("Prepared statement streamed", async () => {
        const conn = await adb2().connect();
        const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
        for await (const batch of await stmt.send(234)) {
          expect(batch.numRows).toBeGreaterThan(0);
        }
        await stmt.close();
        await conn.close();
      });
    });
  });
}

// test/regression/github_393.test.ts
function test393(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("393", async () => {
      var _a, _b;
      await db2().open({
        path: ":memory:",
        query: {
          castTimestampToDate: false
        }
      });
      conn = await db2().connect();
      const resultWithoutCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
      expect((_a = resultWithoutCast.toArray()[0]) == null ? void 0 : _a.ts).toEqual(new Date(Date.UTC(1992, 2, 22, 1, 2, 3)).getTime());
      await db2().open({
        path: ":memory:",
        query: {
          castTimestampToDate: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
      expect((_b = resultWithCast.toArray()[0]) == null ? void 0 : _b.ts).toEqual(new Date(Date.UTC(1992, 2, 22, 1, 2, 3)));
    });
  });
}

// test/regression/github_448.test.ts
function test448(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("448", async () => {
      var _a;
      conn = await db2().connect();
      await conn.query(`create temp table test448(i integer)`);
      await conn.query(`insert into test448 values (1),(2),(1)`);
      let result = await conn.query(`select * from test448`);
      expect(result.numCols).toBe(1);
      expect(result.numRows).toBe(3);
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(new Int32Array([1, 2, 1]));
      result = await conn.query(`select histogram(i) from test448`);
      expect(result.numCols).toBe(1);
      expect(result.numRows).toBe(1);
      const array = result.getChildAt(0).toArray();
      expect(array.length).toEqual(1);
      expect(array[0].toString()).toEqual("{1: 2, 2: 1}");
    });
  });
}

// test/regression/github_470.test.ts
function test470(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("470", async () => {
      var _a, _b, _c, _d, _e, _f;
      await db2().open({
        path: ":memory:",
        query: {
          castDurationToTime64: false
        }
      });
      conn = await db2().connect();
      const result1 = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
      expect((_b = (_a = result1.toArray()[0]) == null ? void 0 : _a.interval) == null ? void 0 : _b.toString()).toEqual("0,3");
      await db2().open({
        path: ":memory:",
        query: {
          castDurationToTime64: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
      expect((_d = (_c = resultWithCast.toArray()[0]) == null ? void 0 : _c.interval) == null ? void 0 : _d.toString()).toEqual("0,3");
      await db2().open({
        path: ":memory:",
        query: {}
      });
      conn = await db2().connect();
      const resultWithDefault = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
      expect((_f = (_e = resultWithDefault.toArray()[0]) == null ? void 0 : _e.interval) == null ? void 0 : _f.toString()).toEqual("0,3");
    });
  });
}

// test/regression/github_477.test.ts
function test477(db2) {
  let conn = null;
  beforeEach(async () => {
    await db2().flushFiles();
  });
  afterEach(async () => {
    if (conn) {
      await conn.close();
      conn = null;
    }
    await db2().flushFiles();
    await db2().dropFiles();
  });
  describe("GitHub issues", () => {
    it("477", async () => {
      var _a, _b;
      await db2().open({
        path: ":memory:",
        query: {}
      });
      conn = await db2().connect();
      const resultWithoutCast = await conn.query(`SELECT (-1.9)::DECIMAL(2,1) as decimal`);
      expect(resultWithoutCast.schema.fields[0].type.scale).toEqual(1);
      expect(resultWithoutCast.schema.fields[0].type.precision).toEqual(2);
      expect(((_a = resultWithoutCast.toArray()[0]) == null ? void 0 : _a.decimal) == -19).toBe(false);
      await db2().open({
        path: ":memory:",
        query: {
          castDecimalToDouble: true
        }
      });
      conn = await db2().connect();
      const resultWithCast = await conn.query(`SELECT (-1.9)::DECIMAL(2,1) as decimal`);
      expect((_b = resultWithCast.toArray()[0]) == null ? void 0 : _b.decimal).toEqual(-1.9000000000000001);
    });
  });
}

// test/regression/index.ts
function testRegressionAsync(adb2) {
  test332(adb2);
  test334(adb2);
  test393(adb2);
  test448(adb2);
  test470(adb2);
  test477(adb2);
}

// test/fts.test.ts
function testFTS(db2) {
  let conn;
  beforeEach(() => {
    conn = db2().connect();
  });
  afterEach(() => {
    conn.close();
    db2().flushFiles();
    db2().dropFiles();
  });
  describe("FTS", () => {
    it("sample", async () => {
      var _a;
      await conn.query(
        "CREATE TABLE documents(document_identifier VARCHAR, text_content VARCHAR, author VARCHAR, doc_version INTEGER);"
      );
      await conn.query(
        "INSERT INTO documents VALUES ('doc1', 'The mallard is a dabbling duck that breeds throughout the temperate.','Hannes M\xFChleisen', 3), ('doc2', 'The cat is a domestic species of small carnivorous mammal.', 'Laurens Kuiper', 2);"
      );
      await conn.query("PRAGMA create_fts_index('documents', 'document_identifier', 'text_content', 'author');");
      const result = conn.query(
        "SELECT document_identifier, score\n            FROM (SELECT *, fts_main_documents.match_bm25(document_identifier, 'Muhleisen', fields := 'author') AS score\n            FROM documents) sq\n            WHERE score IS NOT NULL\n            AND doc_version > 2\n            ORDER BY score DESC;"
      );
      expect((_a = result.getChildAt(0)) == null ? void 0 : _a.toArray()).toEqual(["doc1"]);
    });
  });
}

// test/index_node.ts
jasmine.DEFAULT_TIMEOUT_INTERVAL = 6e4;
var dataDir = import_path.default.resolve(__dirname, "../../../data");
var resolveBuffer = (url) => {
  const p = import_path.default.join(dataDir, url);
  if (!import_fs3.default.existsSync(p))
    return null;
  return new Uint8Array(import_fs3.default.readFileSync(p));
};
var resolveData = async (url) => {
  switch (url) {
    case "/uni/all.zip":
      return await resolveBuffer("/uni/all.zip");
    case "/uni/assistenten.parquet":
      return await resolveBuffer("/uni/assistenten.parquet");
    case "/uni/studenten.parquet":
      return await resolveBuffer("/uni/studenten.parquet");
    case "/uni/hoeren.parquet":
      return await resolveBuffer("/uni/hoeren.parquet");
    case "/uni/vorlesungen.parquet":
      return await resolveBuffer("/uni/vorlesungen.parquet");
    default:
      return null;
  }
};
var db = null;
var adb = null;
var worker = null;
beforeAll(async () => {
  const DUCKDB_BUNDLES = {
    mvp: {
      mainModule: import_path.default.resolve(__dirname, "./duckdb-mvp.wasm"),
      mainWorker: import_path.default.resolve(__dirname, "./duckdb-node-mvp.worker.cjs")
    },
    eh: {
      mainModule: import_path.default.resolve(__dirname, "./duckdb-eh.wasm"),
      mainWorker: import_path.default.resolve(__dirname, "./duckdb-node-eh.worker.cjs")
    }
  };
  const DUCKDB_CONFIG = await selectBundle(DUCKDB_BUNDLES);
  const logger = new VoidLogger();
  db = await createDuckDB(DUCKDB_BUNDLES, logger, NODE_RUNTIME);
  await db.instantiate((_) => {
  });
  worker = new import_web_worker.default(DUCKDB_CONFIG.mainWorker);
  adb = new AsyncDuckDB(logger, worker);
  await adb.instantiate(DUCKDB_CONFIG.mainModule, DUCKDB_CONFIG.pthreadWorker);
});
afterAll(async () => {
  if (worker)
    worker.terminate();
});
testUDF(() => db);
testTableNames(() => db);
testTableNamesAsync(() => adb);
testRegressionAsync(() => adb);
testAllTypes(() => db);
testAllTypesAsync(() => adb);
testBindings(() => db, dataDir);
testAsyncBindings(() => adb, dataDir, 1 /* NODE_FS */);
testBatchStream(() => db);
testAsyncBatchStream(() => adb);
testFilesystem(() => adb, resolveData, dataDir, 1 /* NODE_FS */);
testArrowInsert(() => db);
testArrowInsertAsync(() => adb);
testJSONInsert(() => db);
testJSONInsertAsync(() => adb);
testCSVInsert(() => db);
testCSVInsertAsync(() => adb);
testTokenization(() => db);
testTokenizationAsync(() => adb);
testFTS(() => db);
/*! Bundled license information:

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

run-parallel/index.js:
  (*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=tests-node.cjs.map
