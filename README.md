# A presentation on [ghostface][1]

[ghostface][1] is a simple [phantomjs][2] wrapper that lets you evaluate
Javascript in phantom, and print the output to your console. It has some
nicities such as:

- Timeouts: automatically stopping execution when no output has been received
  for a set number of milliseconds
- HTML Templates: provide the HTML context that your JS is run in
- Sane Stacktraces: with sourcemap support! See your errors printed nicely
- Accepts piped input: `broserify my_source_file.js | ghostface`

The talk was primarily me running commands in ghostface, and talking up
[tape][3], the test harness that makes running your tests in different
environments easy. Slides are:

- [./01-intro.txt][]: Intro slide an contact information
- [./02-commands.txt][]: Commands that I ran to show off some features
- [./03-end.txt][]: Info on some nice features, and other libraries you should
  check out.

Please leave [an issue][3] if there's any questions you'd like addressed!

## License

This talk is [MIT Licensed](./LICENSE), why not.

[1]: http://npm.im/ghostface
[2]: http://phantomjs.org/
[3]: https://github.com/fardog/pdxnode-ghostface-presentation/issues
