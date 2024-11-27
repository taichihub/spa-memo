# SPAメモアプリ

Create React Appで開発されたSPAのメモアプリです。

## 環境構築

(※)Node.jsとnpmはインストールされていると仮定。

### ローカル環境にクローン

```
git@github.com:taichihub/spa-memo.git
```

### npmインストール

```
npm install
```

### 開発環境で起動

```
npm start
```

### アクセス

ブラウザで以下のURLにアクセスする。

```
http://localhost:3000/
```

## 使用方法

- メモ一覧画面
- `+新規メモ`ボタン押下でメモ作成画面に遷移
- 各メモの1行目のみがリスト形式で表示
- 各メモ押下でメモ編集画面に遷移
- メモ作成画面
  - テキストエリアにメモを記入
  - 保存ボタン押下でメモを保存。メモ一覧画面に遷移
  - キャンセルボタン押下でメモ作成を中止。メモ一覧画面に遷移
- メモ編集画面
  - テキストエリアに既存のメモが表示
    - 変更を加える場合はテキストエリア内のメモを編集
  - 保存ボタン押下でメモを保存。メモ一覧画面に遷移
  - 削除ボタン押下でメモを削除。メモ一覧画面に遷移
  - キャンセルボタン押下でメモ作成を中止。メモ一覧画面に遷移
