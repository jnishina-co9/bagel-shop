---
trigger: always_on
---
* 基本構造: ReactやVueなどのフレームワークを使用せず、必ず `index.html` をルートとし、その下に `css`、`js`、`img` フォルダを配置するシンプルなバニラ構成で制作すること。
* 必須メタタグ: すべてのHTMLファイルの `<head>` 内に、必ず以下の2つのメタタグを記述すること。
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
* CSS設計: スタイルは必ず `css/style.css` に記述し、HTMLファイル内へのインラインスタイルは使用しないこと。
* アクセシビリティ: すべての `<img>` タグには、画像の内容を説明する意味のある `alt` 属性を必ず記述すること。
* GEO・セマンティック最適化:
  - `<div>` の乱用を禁止し、`<header>`, `<main>`, `<article>`, `<section>`, `<footer>` などのセマンティックHTMLを厳格に使用すること。
  - すべてのページの `<head>` 内に、Schema.org に準拠した `Organization` または `WebPage` タイプの JSON-LD を必ず自動生成して記述すること（※企業情報が不明な場合は架空のデータを入れず、プレースホルダー（例：`"name": "YOUR_COMPANY_NAME"`）を使用すること）。
  - ページ内にQ&Aや解説が含まれる場合は、追加で `FAQPage` または `Article` タイプの JSON-LD も自動生成して記述し、AIクローラーが構造を即座に理解できるようにすること。