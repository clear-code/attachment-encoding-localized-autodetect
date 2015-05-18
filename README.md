# What's this?

When I attach plaintext files to a mail, Thunderbird automatically tries to detect their character encoding from their contents, by the commit:

http://hg.mozilla.org/comm-central/rev/2b9773749c86

However, because the universal (global, generic) detector is always used, Thunderbird often fails to detect character encoding of files. For example, on a Japanese environment, "Shift_JIS" and "EUC-JP" are wrongly detected as "windows-1252".

This addon forces Thunderbird to use localized encoding detector based on the system language, As the result, plain text files will be attached with correct encoding.

## Versions of Thunderbird who want this addon

By the commit between Thunderbird 31 and Thunderbird 38, the universal charset detector is removed:

http://hg.mozilla.org/mozilla-central/rev/2f0c68d4d7ca

It is introduced by the bug:

844115 – Remove the "universal" encoding detector (chardet)
https://bugzilla.mozilla.org/show_bug.cgi?id=844115

After that, basically Thunderbird 38 and later uses language-specific charset detector.
So Thunderbird 38 and later doesn't need this addon.
(Of course, this addon will become useful again, if less-effective universal charset detector is re-introduced in the future.)

## Steps to test

Note: these steps are just for a Japanese environments. In other languages, they are possibly detected unexpected encodings...

 1. Attach samples/*.txt files to a new message.
 2. Save it to the Draft folder.
 3. Choose "View" => "View Sorce".
 4. You'll see detection result for file contents as "Content-Type:text/plain; charset=...." in each header of attachments.

Without this addon, sjis.txt and euc.txt are detected as "windows-1252" unexpectedly.
With this addon, they are correctly detected as Shift_JIS or EUC-JP.
