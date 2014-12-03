/**
 * InlineLinting Copyright (c) 2014 Miguel Castillo.
 *
 * Licensed under MIT
 */

define(function (require, exports, module) {
    "use strict";

    var MainViewManager = brackets.getModule("view/MainViewManager"),
        CodeInspection  = brackets.getModule("language/CodeInspection"),
        EditorManager   = brackets.getModule("editor/EditorManager");

    var currentProviders;

    function handleDocumentChange(event, document, changeList) {
        CodeInspection.requestRun();
    }


    function setDocument(currentEditor, previousEditor) {
        if (currentEditor) {
            CodeInspection.getProvidersForPath(currentEditor.document.file._path)
            currentEditor.document.on("change.inline-linter", handleDocumentChange);
        }

        if (previousEditor) {
            previousEditor.document.off("change.inline-linter", handleDocumentChange);
        }
    }

    module.exports = {
        init: setDocument
    };
});
