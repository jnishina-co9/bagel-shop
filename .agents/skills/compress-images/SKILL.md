---
name: Image Compressor
description: ユーザーから画像ファイル（PNGやJPGなど）が提供・アップロードされた際、または「画像を圧縮・最適化して」と指示された際に必ず使用します。画像を軽量なWebP形式に変換し、規定サイズへのリサイズと元の画像ファイルの削除を自動で行います。
---

When an image file is provided, execute the following image optimization process:

1. **Format Check:** If the file is already in WebP format, skip all processing. If the file is GIF or SVG format, skip all processing and keep the original file as-is.
2. **Format Conversion:** Convert the original image (PNG/JPG) to WebP format.
3. **Quality Setting:** Set the WebP export quality to 80% to balance file size and visual fidelity.
4. **Resize Optimization:** If the image's width exceeds 1920px, downscale it proportionally so the maximum width is 1920px while maintaining the original aspect ratio. If the image is 1920px or smaller in width, do not resize it.
5. **File Management:** After the successful creation of the WebP file, delete the original image file (PNG/JPG) from the directory. Ensure only the latest optimized WebP files remain.
6. **Batch Processing:** If multiple image files are provided, apply the above process to each file sequentially.