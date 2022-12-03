"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/esbuild.ts
var esbuild_exports = {};
__export(esbuild_exports, {
  AutoImgPlugin: () => AutoImgPlugin
});
module.exports = __toCommonJS(esbuild_exports);

// src/index.ts
var import_unplugin = require("unplugin");
var src_default = (0, import_unplugin.createUnplugin)((options) => ({
  name: "unplugin-auto-img"
}));

// src/esbuild.ts
var AutoImgPlugin = src_default.esbuild;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoImgPlugin
});
