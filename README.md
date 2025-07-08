# Data Behind the Scenes -- The Website

---


## The gist

This is our simple, one-pager site for the event.  Over time it may grow
into the main site (complete with talk titles, speaker bios, and all that)
_or_ we might completely replace it.  We'll figure that out as we go along.


## Setup/maintenance

For now this site is a single HTML file, with a supporting stylesheet (CSS)
and image.  And the page layout is based on a Tailwind Plus template.

That CSS file is _generated,_ however, by Tailwind.  Full details are in the
[docs]( https://tailwindcss.com/ )
but the gist is that Tailwind is a preprocessor that looks over the HTML file
to determine what CSS classes to include in the generated artifact.

If you change any classes in the HTML, then, be sure to rerun Tailwind.

For those using
[the CLI]( https://tailwindcss.com/docs/installation/tailwind-cli ) 
that boils down to:

```
tailwindcss -i src/input.css -o public/css/main.css
```

That's about it.

(If we move to a multipage site and use a static site generator, these
instructions will certainly change.)


## Image credits

- "Studio camera setup" (landing page) by [Voyage Pro]( https://unsplash.com/@voyagepro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash ) on [Unsplash]( https://unsplash.com/photos/a-camera-set-up-in-front-of-a-white-background-hRZhwtLEDfQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash ).
 
