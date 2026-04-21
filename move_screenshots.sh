#!/bin/bash
BRAIN_DIR="/Users/mac/.gemini/antigravity/brain/90c77946-5e54-45fe-81f9-22804207820d"
TARGET_DIR="public/images/resources"

mkdir -p "$TARGET_DIR"

# Batch 1
cp "$BRAIN_DIR/astro_docs_1771262891433.png" "$TARGET_DIR/astro.png"
cp "$BRAIN_DIR/tailwind_docs_1771262952807.png" "$TARGET_DIR/tailwind.png"
cp "$BRAIN_DIR/kubernetes_docs_1771263105588.png" "$TARGET_DIR/kubernetes.png"
cp "$BRAIN_DIR/clean_coder_blog_1771263215185.png" "$TARGET_DIR/clean-coder.png"

# Batch 2
cp "$BRAIN_DIR/google_cloud_code_marketplace_fixed_1771263476274.png" "$TARGET_DIR/google-cloud-code.png"
cp "$BRAIN_DIR/cursor_ai_home_1771263373624.png" "$TARGET_DIR/cursor.png"
cp "$BRAIN_DIR/deepseek_home_v2_1771263503644.png" "$TARGET_DIR/deepseek.png"
cp "$BRAIN_DIR/mistral_ai_home_1771263439359.png" "$TARGET_DIR/mistral.png"
cp "$BRAIN_DIR/notebooklm_screenshot_1771263631825.png" "$TARGET_DIR/notebooklm.png"
cp "$BRAIN_DIR/chatgpt_screenshot_1771263678902.png" "$TARGET_DIR/chatgpt.png"
cp "$BRAIN_DIR/perplexity_screenshot_1771263702167.png" "$TARGET_DIR/perplexity.png"
cp "$BRAIN_DIR/huggingchat_screenshot_1771263737554.png" "$TARGET_DIR/huggingchat.png"
cp "$BRAIN_DIR/poe_home_v3_1771263531623.png" "$TARGET_DIR/poe.png"
cp "$BRAIN_DIR/claude_ai_screenshot_1771263650916.png" "$TARGET_DIR/claude.png"

# Batch 3
cp "$BRAIN_DIR/storyset_screenshot_1771263856225.png" "$TARGET_DIR/storyset.png"
cp "$BRAIN_DIR/flaticon_screenshot_1771263900373.png" "$TARGET_DIR/flaticon.png"
cp "$BRAIN_DIR/fontawesome_screenshot_1771263938746.png" "$TARGET_DIR/fontawesome.png"
cp "$BRAIN_DIR/google_fonts_screenshot_1771263946500.png" "$TARGET_DIR/google-fonts.png"
cp "$BRAIN_DIR/inter_font_screenshot_1771263956649.png" "$TARGET_DIR/inter-font.png"
cp "$BRAIN_DIR/react_docs_screenshot_1771264412036.png" "$TARGET_DIR/react-docs.png"
cp "$BRAIN_DIR/nextjs_docs_screenshot_1771264413276.png" "$TARGET_DIR/nextjs-docs.png"
cp "$BRAIN_DIR/vuejs_docs_screenshot_1771264414117.png" "$TARGET_DIR/vuejs-docs.png"
cp "$BRAIN_DIR/vite_docs_screenshot_1771264415492.png" "$TARGET_DIR/vite-docs.png"
cp "$BRAIN_DIR/web_dev_screenshot_1771264416599.png" "$TARGET_DIR/web-dev.png"

# Batch 4 (New)
cp "$BRAIN_DIR/jsondataai_screenshot_1771265327487.png" "$TARGET_DIR/jsondataai.png"
cp "$BRAIN_DIR/unblast_screenshot_1771265382330.png" "$TARGET_DIR/unblast.png"

# Special
cp "$BRAIN_DIR/supermap_404_1771263245149.png" "$TARGET_DIR/supermap.png"

echo "All screenshots copied successfully"
