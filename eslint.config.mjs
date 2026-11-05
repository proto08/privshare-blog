import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores([
        'prisma/**/*',
        '**/*.prisma',
        'node_modules/**/*',
        '.next/**/*',
        '**/generated/**/*',
    ]),
])

export default eslintConfig
