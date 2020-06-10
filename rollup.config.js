import { terser } from "rollup-plugin-terser";
//import del from 'rollup-plugin-delete';
//import copy from 'rollup-plugin-copy';
import copy from 'rollup-plugin-cpy'

export default {
	input: 'src/Aoo.js',
	output: [
		{ file: "dist/Aoo.js", format: "cjs" },
		{ file: "dist/Aoo.min.js", format: "esm", plugins: [terser()] },
		{ file: "dist/Aoo.esm.js", format: "esm" },
	  ],
	  plugins: [
		copy([
			  { files: 'src/**/*.md', dest: './dist/' }
			])
			// del({
			// 	targets: 'src/**/*.md',
			// 	hook: 'buildEnd'
			//   }),
	  ]
	   
	
	
  };