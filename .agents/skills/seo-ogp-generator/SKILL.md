---
name: SEO and OGP Tag Generator
description: ページが完成した際、または「SEO設定をして」「OGPタグを出力して」と指示された際に必ず使用します。HTMLの内容（見出しや本文）を解析し、最適なメタディスクリプションと、SNSシェア用のOGPタグ、Twitterカードを自動生成して<head>内に組み込みます。
---

When generating SEO and social media metadata for an HTML page, strictly follow these rules:

1. **Duplicate Check:** Before inserting any tag, check if it already exists in the `<head>`. If it does, update the existing tag instead of adding a duplicate.
2. **Meta Description:** Analyze the main content (e.g., `<h1>`, `<main>`) and generate a concise, compelling `<meta name="description">` under 120 characters in Japanese.
3. **Canonical Tag:** Add `<link rel="canonical" href="https://example.com/">` to prevent duplicate content issues.
4. **Open Graph Protocol (OGP):** Generate standard OGP tags including `og:title`, `og:description`, `og:type` (typically "website" or "article"), `og:url` (use a placeholder like "https://example.com/"), `og:image` (use a placeholder image path), `og:locale` (set to "ja_JP"), and `og:site_name` (use a placeholder like "YOUR_SITE_NAME").
5. **Twitter Card:** Generate standard Twitter card tags (`twitter:card` set to "summary_large_image", `twitter:title`, `twitter:description`, `twitter:image`).
6. **Insertion:** Provide the generated tags so they are ready to be directly inserted into the `<head>` section of the HTML document without breaking the existing structure.