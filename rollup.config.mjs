import terser from "@rollup/plugin-terser";
import wsolid from "rollup-preset-solid";

export default wsolid({ plugins: [terser()] });
