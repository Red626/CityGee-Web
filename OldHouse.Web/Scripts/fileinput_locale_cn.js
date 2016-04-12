/*!
 * FileInput <_LANG_> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinput.locales._LANG_ = {
        fileSingle: '�ļ�',
        filePlural: '�ļ�',
        browseLabel: '��� &hellip;',
        removeLabel: '�Ƴ�',
        removeTitle: '�����ѡ�ļ�',
        cancelLabel: 'ȡ��',
        cancelTitle: '��ֹ�����ϴ�',
        uploadLabel: '�ϴ�',
        uploadTitle: '�ϴ���ѡ�ļ�',
        msgSizeTooLarge: '�ļ� "{name}" (<b>{size} KB</b>) ̫���ˣ��������� <b>{maxSize} KB</b>. ��������һ��!',
        msgFilesTooLess: '����������ѡ�� <b>{n}</b> {files} . ��������һ��!',
        msgFilesTooMany: '��ѡ����̫����ļ��� <b>({n})</b> ���������� <b>{m}</b>. Please retry your upload!',
        msgFileNotFound: '�ļ� "{name}" �Ҳ���!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgValidationError: 'File Upload Error',
        msgLoading: 'Loading file {index} of {files} &hellip;',
        msgProgress: 'Loading file {index} of {files} - {name} - {percent}% completed.',
        msgSelected: '{n} files selected',
        msgFoldersNotAllowed: 'Drag & drop files only! Skipped {n} dropped folder(s).',
        dropZoneTitle: '��������ק���� &hellip;'
    };

    $.extend($.fn.fileinput.defaults, $.fn.fileinput.locales._LANG_);
})(window.jQuery);