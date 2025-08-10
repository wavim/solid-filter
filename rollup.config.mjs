import terser from "@rollup/plugin-terser";
import wsolid from "rollup-preset-solid";

export default wsolid({
	input: "src/index.tsx",
	output: { sourcemap: false, format: "es", dir: "dist" },
	plugins: [terser()],
});
