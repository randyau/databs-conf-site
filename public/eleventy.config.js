// const pluginLocal = require( "./eleventy.config.local_filters.js") ;

module.exports = function(eleventyConfig) {

	// alias for layout
	eleventyConfig.addLayoutAlias( "base_layout"   , "base_layout.liquid" ) ;
	eleventyConfig.addLayoutAlias( "regular_page"  , "regular_page.liquid" ) ;

	// copy files as-is to destination directory

	eleventyConfig.addPassthroughCopy({
		"./static/"     : "/",
		"./generated/"  : "/" 
	});




	// - - - - - - - - - - - - - - - - - - - -
	// local filters and such
	// - - - - - - - - - - - - - - - - - - - -
	// eleventyConfig.addPlugin(pluginLocal);



	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "liquid",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "liquid",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
