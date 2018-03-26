# Create your own cap



## Specs
This project uses a lot of features. They are all thought of a PE mindset. This website can be used for every single browser and every user (goal). One of the first problems was finding the right font to write text on the cap.
The main problem here is:

#### How to write a fallback for all browsers when the font won't be loaded

I've found a lot of solutions to create a solution. First of all I wanted to make sure the font was always loading properly. The sad part is, we can't know this unless we write some JS functions around this. Still this wasn't my way of thinking.
Why fix something in JS when the CSS is still broken? So I've decided to ignore this problem. This may sound bad but I can't write a solution for this problem (yet).

My second problem was:

#### Making sure all browsers give the same font results

This problem is even bigger then the first one. Cause my case is about creating hats with a preview of the cap I need to make sure all caps look the same. I've thought of two posible solutions.

1. Render an image of the cap on the server and give this back to the user.
2. Creating a text overlay on the cap

The first solution will always work. This will be my first version. This version will always work when images are supported and loaded. If the browser doesn't support images I can't write any fallback cause this is the core functionality.
The second solution is a bit harder. This will be my enhanched version. The only problem here is that fonts look different on all browsers and all systems. For that I need to make sure I'm loading a custom font.
All browsers (expcept opera mini) support `font-face` in css. The only problem here is, that not all browsers support the `woff` font. I wrote a fallback for almost all browsers.

* .eot files (IE6 - IE8)
* .woff files (modern browsers)
* .ttf files (safari, Android, IOS)
* .svg files (Legacy IOS)

[source](https://css-tricks.com/snippets/css/using-font-face/)
