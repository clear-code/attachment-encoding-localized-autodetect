# What's this?

When I attach plaintext files to a mail, Thunderbird automatically tries to detect their character encoding from their contents, by the commit:
http://hg.mozilla.org/comm-central/rev/2b9773749c86

However, because the universal (global, generic) detector is always used, Thunderbird often fails to detect character encoding of files. For example, on a Japanese environment, "Shift_JIS" and "EUC-JP" are wrongly detected as "windows-1252".

This addon forces Thunderbird to use localized encoding detector based on the system language, As the result, plain text files will be attached with correct encoding.

## Steps to test

Note: these steps are just for a Japanese environments. In other languages, they are possibly detected unexpected encodings...

 1. Attach samples/*.txt files to a new message.
 2. Save it to the Draft folder.
 3. Choose "View" => "View Sorce".
 4. You'll see detection result for file contents as "Content-Type:text/plain; charset=...." in each header of attachments.

Without this addon, sjis.txt and euc.txt are detected as "windows-1252" unexpectedly.
With this addon, they are correctly detected as Shift_JIS or EUC-JP.
