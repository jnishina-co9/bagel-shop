---
name: HTML Manual Converter
description: manual.mdが作成された後、またはユーザーから求められた際に、それをYu Gothicベースの特定のデザインを持った index.html に変換します。
---

# SKILL: HTML Manual Creator (Yu Gothic, Sharp & Auto-Title Edition)

## DESCRIPTION:
Converts `manual.md` into `index.html` with Junko's sharp design (no rounded corners) and Yu Gothic typography. It automatically sets the browser tab title based on the manual's H1 header.

## STRICT FILENAME RULE:
- Output MUST be named exactly `index.html`.

## TITLE RULE:
- Identify the first H1 header (# Title) in `manual.md`.
- Set this text as the `<title>` tag in the generated `index.html`.

## PROMPT SPLITTING RULE:
- For code blocks containing `---`:
  1. Everything BEFORE `---` (English) goes into the copyable `<pre>` tag.
  2. Everything AFTER `---` (Japanese) goes into a separate `<div class="translation-box">` below the prompt container.

## CSS & JS TEMPLATE:
```html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>[AUTO_INSERT_H1_TITLE]</title>
<style>
    body { 
        font-family: "Yu Gothic Medium", "Yu Gothic", "YuGothic", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif; 
        font-size: 18px; line-height: 1.8; color: #333; background-color: #f9f9f9; margin: 0; padding: 0; 
    }
    .container { max-width: 1000px; margin: 40px auto; padding: 40px; background-color: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-radius: 0; position: relative; }
    .version-info { text-align: right; color: #888; margin-bottom: 5px; font-size: 14px; }
    h1 { font-size: 26px; border-bottom: 3px solid #4285f4; padding-bottom: 12px; margin-top: 5px; color: #1a1a1a; font-weight: bold; }
    h2 { font-size: 22px; border-left: 6px solid #4285f4; padding-left: 15px; margin-top: 45px; margin-bottom: 18px; color: #1a1a1a; }
    .prompt-container { position: relative; margin: 30px 0 10px 0; }
    pre { background-color: #f4f4f4; border-left: 5px solid #ff9800; padding: 25px; padding-top: 75px; border-radius: 0; white-space: pre-wrap; font-family: Consolas, Monaco, monospace; font-size: 16px; position: relative; }
    .copy-btn { position: absolute; top: 15px; right: 15px; padding: 8px 16px; background-color: #ff9800; color: white; border: none; border-radius: 0; cursor: pointer; font-weight: bold; z-index: 10; }
    .translation-box { font-size: 16px; color: #666; background: #f9f9f9; padding: 15px; border-left: 3px solid #ccc; margin-bottom: 30px; border-radius: 0; }
    img { max-width: 100%; height: auto; display: block; margin: 25px auto; border-radius: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .important-box { background-color: #fff3e0; border: 1px solid #ff9800; padding: 20px; margin: 25px 0; border-radius: 0; }
    .tip-box { background-color: #e3f2fd; border: 1px solid #2196f3; padding: 20px; margin-top: 40px; border-radius: 0; }
</style>
</head>
<body>
<div class="container">
    [INSERT_VERSION_IF_EXISTS]
    [INSERT_CONTENT]
</div>
<script>
    function copyPrompt(btn) {
        const pre = btn.closest('.prompt-container').querySelector('pre');
        navigator.clipboard.writeText(pre.innerText.trim()).then(() => {
            const originalText = btn.innerText;
            btn.innerText = 'コピー完了！'; btn.style.backgroundColor = '#e0e0e0'; btn.style.color = '#333';
            setTimeout(() => { btn.innerText = originalText; btn.style.backgroundColor = '#ff9800'; btn.style.color = 'white'; }, 2000);
        });
    }
</script>
</body>
</html>