/**
 * InlineLinting Copyright (c) 2014 Miguel Castillo.
 *
 * Licensed under MIT
 */

define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        AppInit        = brackets.getModule("utils/AppInit");


    var linterManager = require("linterManager");


    ExtensionUtils.loadStyleSheet(module, "style.less");


    function setDocument (event, currentEditor, previousEditor) {
        linterManager.init(currentEditor, previousEditor);
    }


    AppInit.appReady(function () {
        EditorManager.on("activeEditorChange.inlineLinter", setDocument);
    });
});
