const { RegExp } = window;
try {
  new RegExp('a', 'u');
} catch (err) {
  // @ts-ignore
  window.RegExp =
    (pattern, flags) => {
      if (flags && flags.includes('u')) {
        // Ignore unicode flag in RegExp
        flags = flags === 'u' ? undefined : flags.replace('u', '');
        // Discard parts of the patterns used by exceljs that error out in non-unicode RegExps.
        pattern = pattern.replace(/\uDC00-\uDBFF/g, '');
        pattern = pattern.replace(/\uDC00-\uDB7F/g, '');

        return new RegExp(pattern, flags);
      }
      return new RegExp(pattern, flags);
    };
  // @ts-ignore
  window.RegExp.prototype = RegExp.prototype;
}