# LINE Bot エコーサーバー

このプロジェクトは、受信したテキストメッセージをそのまま返すシンプルなLINE Botです。Node.js、Express、およびLINE Messaging API SDKを使用して構築されています。

## 前提条件

- お使いのマシンにNode.jsとnpmがインストールされていること。
- LINE Developers Consoleでアカウントを作成し、チャンネルを設定していること。

## セットアップ

1. リポジトリをクローンし、プロジェクトディレクトリに移動します。

2. 必要な依存関係をインストールします。

   ```bash
   npm install
   ```

3. ルートディレクトリに`.env`ファイルを作成し、LINE Botの認証情報を追加します。

   ```plaintext
   CHANNEL_ACCESS_TOKEN=YOUR_CHANNEL_ACCESS_TOKEN
   CHANNEL_SECRET=YOUR_CHANNEL_SECRET
   ```

   `YOUR_CHANNEL_ACCESS_TOKEN`と`YOUR_CHANNEL_SECRET`をLINE Developers Consoleから取得した実際の認証情報に置き換えてください。

4. サーバーを起動します。

   ```bash
   node line-bot.js
   ```

   サーバーはポート3000で起動します。

## 使用方法

- Botは受信したテキストメッセージをそのまま返します。
- LINE Developers ConsoleでWebhook URLが正しくサーバーを指していることを確認してください。

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。
