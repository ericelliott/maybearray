echo "# Index
" > docs/api.md

jsdoc2md src/index.js | sed '/\*\*Kind\*\*/d' > docs/api.md