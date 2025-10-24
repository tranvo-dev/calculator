import type { Config } from 'jest';
export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jest-preset-angular/environments/jest-jsdom-env',
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "!<rootDir>/src/main.ts",
        "!**/*.(routes|config).ts"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/public/",
    ],
    coverageThreshold: {
         global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    }
} satisfies Config;