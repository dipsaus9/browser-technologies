# Create your own cap
This project contains a customizable hat in 4 different colors and your own text. You can fill in the input fields and it will generate your own hat. This process works on multiple ways. When you don't have a working js file or a modern browser the server will generate an image for you when you do a POST on the webpage. The server will respond with an image as a result. You can print this image by pressing the button (when you support this function).
All choices will be saved as a session (server side). It will place a cookie with your session id. When you come back on to the page you can continue creating your own hat.

The project is being served by the index.html file and you can find a preview on: [website](https://dipsaus9.github.io/browser-technologies/opdracht3/).

To work on this project you can run `npm install && grunt` or just work from the index.html file.

## Specs
This project uses a lot of features. They are all thought of a PE mindset. This website can be used for every single browser and every user (goal).
One of the first problems was finding the right font to write text on the cap.
I'll descibe some problems I faced creating this project.

### HTML
This may seem obvious but it wasn't actually. Ofcourse the page should work on all browsers and you can easily do this by using HTML only. Cause I'm creating a hat out of some inputs by the user I've decided to use input fields. Here I faced some hard decissions I would like to elaborate.

#### Color picker
This project gives the user an abilty to pick their own colors. I was thinking of using the HTML 5 color input for this. Except this isn't supported on all browsers. Older browsers like IE8 will fallback to a regular input field. While this isn't a big problem it really is annoying when you want to create your own hat.
Thats why I decided to give the user a few options, a radio button. This way all users know what to do here and they can see all possible colors.

#### contenteditable
This is an attribute that can be used in multiple ways. With this attribute activated you can edit the selected element. This way you can change text. This can be usefull for text on the hat.
I did some research on this attribute but it turns out the support on this attribute is terrible. IE does support this but has some huge bugs on it. So I don´t want to use this feature when it has so many bugs. I decided to go for a regular input field for this option. 

### Fonts
Fonts can be a problem when you don't use them right.

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

### CSS
This project is based on a good CSS. A good CSS file can really give the user a better experience here. Cause the CSS properties I wanted to use (like display flex, svg animations, :checked states) aren't supported on all browsers I created multiple versions. I started with a basic CSS file that will work on all browsers (at least a lot of browsers).
