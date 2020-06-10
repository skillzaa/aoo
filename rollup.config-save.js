import { terser } from "rollup-plugin-terser";
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';

export default {
	input: 'src/Aoo.js',
	output: {
	  file: 'dist/Aoo.js',
	//  format: 'cjs',
	 format: 'es',
	 plugins: [
		copy({
			targets: [
			  { src: 'src/useless.js', dest: 'dist/' },
			]
		  }),

		 del({
			targets: 'src/*.md'
		  }),

		  terser(),
		]	
	}
	
  };