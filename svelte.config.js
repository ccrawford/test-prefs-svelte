// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: vitePreprocess(),
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

	
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true

		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			base: process.env.NODE_ENV === 'production' ? '/test-perfs-svelte' : ''
		}
	}
};

export default config;


// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: 'index.html',
// 			precompress: false,
// 			strict: true
// 		})
// 	}
	
// };

