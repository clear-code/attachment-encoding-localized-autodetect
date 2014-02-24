# これは何？

以下のコミットが反映されて以降のバージョンのThunderbirdでは、プレーンテキスト形式のファイルをメールに添付する際に、内容の文字エンコーディングが自動判別されるようになりました。
http://hg.mozilla.org/comm-central/rev/2b9773749c86

しかしながら、常に一般的な判別器が使われるために、Thunderbirdはしばしば文字エンコーディングの判別に失敗します。例えば日本語環境では、Shift_JISとEUC-JPはwindows-1252と誤判定されやすいです。

このアドオンは、上記の場面でシステムの言語に適した判別器を使うよう、Thunderbirdに対して矯正します。その結果、プレーンテキスト形式の添付ファイルは正しいエンコーディング情報を伴って添付されるようになります。

## テストの手順

注意：以下の手順は日本語環境で野物です。他の言語では別の判別結果になる可能性がありますので注意して下さい。

 1. リポジトリのsamples/*.txtを新しいメッセージに添付します。
 2. 下書きフォルダにメッセージを保存します。
 3. 「表示」→「ソースを表示」を選択します。
 4. 各添付ファイルのヘッダ領域の"Content-Type:text/plain; charset=...."という部分を見ます。

このアドオン無しの環境では、sjis.txtとeuc.txtはwindows-1252と誤判定されます。
このアドオンがあると、正しくShift_JISおよびEUC-JPと判定されます。