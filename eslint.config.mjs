import eslint from "@eslint/js";
import tslint from "typescript-eslint";

import stylistic from "@stylistic/eslint-plugin";
import prettier from "eslint-config-prettier";
import solidjs from "eslint-plugin-solid";

export default tslint.config(
	{ files: ["src/**/*.ts", "src/**/*.tsx"] },
	{ ignores: ["*config.*", "dist/**/*"] },

	eslint.configs.recommended,
	tslint.configs.eslintRecommended,

	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	tslint.configs.strictTypeChecked,
	tslint.configs.stylisticTypeChecked,
	solidjs.configs["flat/typescript"],

	stylistic.configs.recommended,
	prettier,
);
