import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            // react-hooks v7 で追加された規則。既存コードの書き方と合わないため無効化
            'react-hooks/error-boundaries': 'off',
            'react-hooks/set-state-in-effect': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    globalIgnores([
        'prisma/**/*',
        '**/*.prisma',
        'node_modules/**/*',
        '.next/**/*',
        '**/generated/**/*',
    ]),
])

export default eslintConfig
