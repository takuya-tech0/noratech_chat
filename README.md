# 前提条件</br>
・Python 3.8以上がインストールされていること</br>
・Node.js 14.x以上がインストールされていること</br>
・pipおよびnpmがインストールされていること

# 事前準備
・バックエンドのセットアップ</br>
バックエンドはFastAPIで構築されています。</br>
backend_chatディレクトリに移動し、必要なパッケージをインストールします。

cd backend_chat</br>
pip install -r requirements.txt

※以下はrequirements.txtファイルの内容です：</br>
fastapi
uvicorn
pydantic

# アプリの起動方法</br>
1. バックエンドの起動</br>
バックエンドサーバーを起動します。</br>
cd backend_chat</br>
uvicorn main:app --reload

2. フロントエンドのセットアップ</br>
フロントエンドはNext.jsで構築されています。frontend_chatディレクトリに移動し、必要なパッケージをインストールします。</br>
cd frontend_chat</br>
npm install</br>

3. フロントエンドの起動</br>
フロントエンド開発サーバーを起動します。</br>
npm run dev<

4. アプリケーションのアクセス</br>
ブラウザで以下のURLにアクセスします：</br>
フロントエンド: http://localhost:3000</br>
バックエンド: http://localhost:8000


# ディレクトリ構造</br>
アプリケーションのディレクトリ構造は以下のようになっています：

chat_app/</br>
├── backend_chat/</br>
│   ├── main.py</br>
│   ├── requirements.txt</br>
└── frontend_chat/</br>
    ├── app/</br>
    │   ├── page.tsx</br>
    │   └── styles/</br>
    │       └── chat.css</br>
    ├── node_modules/ (このフォルダはリポジトリに含まれません)</br>
    ├── package.json</br>
    ├── tsconfig.json</br>
    └── ...

# トラブルシューティング</br>
バックエンドが起動しない場合</br>
main.pyの内容が正しいことを確認してください。</br>
必要なパッケージが正しくインストールされていることを確認してください。</br>
バックエンドサーバーのログにエラーメッセージがないか確認してください。

# フロントエンドが起動しない場合</br>
package.jsonの内容が正しいことを確認してください。</br>
必要なパッケージが正しくインストールされていることを確認してください。</br>
フロントエンドサーバーのログにエラーメッセージがないか確認してください。
