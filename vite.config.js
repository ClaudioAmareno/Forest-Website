import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import babel from 'vite-plugin-babel'



export default defineConfig(() => {
	const DEFAULT_OPTIONS = {
		test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
		exclude: undefined,
		include: undefined,
		includePublic: true,
		logStats: true,
		ansiColors: true,
		svg: {
			multipass: true,
			plugins: [
				{
					name: 'preset-default',
					params: {
						overrides: {
							cleanupNumericValues: false,
							removeViewBox: false,
						},
						cleanupIDs: {
							minify: false,
							remove: false,
						},
						convertPathData: false,
					},
				},
				'sortAttrs',
				{
					name: 'addAttributesToSVGElement',
					params: {
						attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
					},
				},
			],
		},
		png: {
			quality: 80,
		},
		jpeg: {
			quality: 80,
		},
		jpg: {
			quality: 80,
		},
		webp: {
			lossless: true,
		},
		avif: {
			lossless: true,
		},
		cache: false,
		cacheLocation: undefined,
	}
	return {
		plugins: [
			ViteImageOptimizer(DEFAULT_OPTIONS),
			babel(),
		],
	}


})
