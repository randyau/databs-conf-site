# Data Behind the Scenes -- The Website

---


## The gist

This is our site for the event.  It started as a simple one-pager with
a splash of Tailwind.  Now that we need multiple pages and some automation,
it uses the Eleventy.


## Setup/maintenance

[Tailwind]( https://tailwindcss.com/ )
generates the site's CSS. It's a preprocessor that looks over the HTML file
to determine what CSS classes to include in the generated artifact.

[Eleventy]( https://www.11ty.dev/ )
is a static site generator.  Even though we only have a handful of pages,
a site generator keeps things consistent and makes it easy to propagate
changes.

You'll need both Tailwind and Eleventy to update the site. To install these
tools:

```
umask 022
cd public
npm init -y

npm install @11ty/eleventy@3.1.2

npm install tailwindcss@4.1.12
npm install @tailwindcss/cli@4.1.12


## Confirm that everything is installed:
npm ls
```


### Building/updating the site

If you change any classes in the HTML, then, be sure to rerun Tailwind.

For those using
[the CLI]( https://tailwindcss.com/docs/installation/tailwind-cli ) 
that boils down to:

```
tailwindcss -i src/input.css -o public/generated/css/main.css
```

Having updated the Tailwind-generated CSS, you can run Eleventy to (re)build
the site:

```
npx @11ty/eleventy  --serve
```

You can now point your browser to 
[localhost:8080]( http://localhost:8080 )
to inspect the site.


## Image credits

- "Studio camera setup" (landing page) by [Voyage Pro]( https://unsplash.com/@voyagepro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash ) on [Unsplash]( https://unsplash.com/photos/a-camera-set-up-in-front-of-a-white-background-hRZhwtLEDfQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash ).
 
