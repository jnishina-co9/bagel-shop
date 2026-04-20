---
name: Professional Manual Creator
description: ユーザーから「マニュアルを作成して」「手順を記録して」などの指示があった際に必ず使用します。ブラウザ操作を自動化してスクショを取得し、Markdownマニュアル（manual.md）を作成します。その際、特定の手順（セキュリティ確認など）がなぜ必要なのか、論理的な目的を必ず説明に含めてください。
---

# Professional Manual Creator Skill

## Goal
Execute browser operations, capture screenshots, and generate a detailed Markdown manual (`manual.md`). The tone should be professional, clear, and objective. It must explicitly explain the logical purpose of required actions (e.g., security checks) to reduce user anxiety, without using unnecessary cheerleading or emotional encouragement.

## Instructions
1. **Capture & Record**: For every significant UI change or action, take a screenshot and save it to Artifacts.
2. **Purpose-Driven Explanation**: Clearly explain *why* specific steps (especially security checks, phone verification, or permissions) are necessary. Focus on clarity and logical reasons rather than emotional encouragement.
3. **Warning Blocks**: For critical rules (like passwords), use the `> [!WARNING]` syntax to make it stand out.
4. **Formatting**:
   - Use clear headings (e.g., `## Step 1: ...`).
   - Provide descriptive actions (using **bold** text for specific buttons/actions).
   - Insert the corresponding screenshots immediately after the action description.
   - Include any relevant rules or tips.
5. **Naming Convention for Screenshots**:
   - When saving screenshots, use the format: `step[XX]_[description].png` (e.g., `step01_login.png`).
   - `[XX]` must be a two-digit sequential number starting from 01.