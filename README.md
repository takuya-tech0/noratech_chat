# 前提条件
・Python 3.8以上がインストールされていること
・Node.js 14.x以上がインストールされていること
・pipおよびnpmがインストールされていること

# 事前準備
・バックエンドのセットアップ
バックエンドはFastAPIで構築されています。
backend_chatディレクトリに移動し、必要なパッケージをインストールします。

cd backend_chat
pip install -r requirements.txt

※以下はrequirements.txtファイルの内容です：
fastapi
uvicorn
pydantic

# アプリの起動方法
1. バックエンドの起動
バックエンドサーバーを起動します。
cd backend_chat
uvicorn main:app --reload

2. フロントエンドのセットアップ
フロントエンドはNext.jsで構築されています。frontend_chatディレクトリに移動し、必要なパッケージをインストールします。
cd frontend_chat
npm install

3. フロントエンドの起動
フロントエンド開発サーバーを起動します。
npm run dev

4. アプリケーションのアクセス
ブラウザで以下のURLにアクセスします：
フロントエンド: http://localhost:3000
バックエンド: http://localhost:8000


# ディレクトリ構造
アプリケーションのディレクトリ構造は以下のようになっています：

chat_app/
├── backend_chat/
│   ├── main.py
│   ├── requirements.txt
└── frontend_chat/
    ├── app/
    │   ├── page.tsx
    │   └── styles/
    │       └── chat.css
    ├── node_modules/ (このフォルダはリポジトリに含まれません)
    ├── package.json
    ├── tsconfig.json
    └── ...

# トラブルシューティング
バックエンドが起動しない場合
main.pyの内容が正しいことを確認してください。
必要なパッケージが正しくインストールされていることを確認してください。
バックエンドサーバーのログにエラーメッセージがないか確認してください。

# フロントエンドが起動しない場合
package.jsonの内容が正しいことを確認してください。
必要なパッケージが正しくインストールされていることを確認してください。
フロントエンドサーバーのログにエラーメッセージがないか確認してください。
