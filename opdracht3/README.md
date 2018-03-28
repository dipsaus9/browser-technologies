# Create your own cap
This project contains a customizable hat in 4 different colors and your own text. You can fill in the input fields and it will generate your own hat. This process works on multiple ways. When you don't have a working js file or a modern browser the server will generate an image for you when you do a POST on the webpage. The server will respond with an image as a result. You can print this image by pressing the button (when you support this function).
All choices will be saved as a session (server side). It will place a cookie with your session id. When you come back on to the page you can continue creating your own hat.

The project is being served by the index.html file and you can find a preview on: [website](https://dipsaus9.github.io/browser-technologies/opdracht3/).

To work on this project you can run `npm install && grunt` or just work from the index.html file.

## Specs
This project uses a lot of features. They are all thought of a PE mindset. This website can be used for every single browser and every user (goal).
One of the first problems was finding the right font to write text on the cap.
I'll descibe some problems I faced creating this project.

## HTML
This may seem obvious but it wasn't actually. Ofcourse the page should work on all browsers and you can easily do this by using HTML only. Cause I'm creating a hat out of some inputs by the user I've decided to use input fields. Here I faced some hard decissions I would like to elaborate.

### Color picker
This project gives the user an abilty to pick their own colors. I was thinking of using the HTML 5 color input for this. Except this isn't supported on all browsers. Older browsers like IE8 will fallback to a regular input field. While this isn't a big problem it really is annoying when you want to create your own hat.
Thats why I decided to give the user a few options, a radio button. This way all users know what to do here and they can see all possible colors.

### Contenteditable attribute
This is an attribute that can be used in multiple ways. With this attribute activated you can edit the selected element. This way you can change text. This can be usefull for text on the hat.
I did some research on this attribute but it turns out the support on this attribute is terrible. IE does support this but has some huge bugs on it. So I don´t want to use this feature when it has so many bugs. I decided to go for a regular input field for this option.

After these choices I created this result:

![HTML only](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht3/img/startDifference.png")


## Fonts
Fonts can be a problem when you don't use them right.

### How to write a fallback for all browsers when the font won't be loaded

I've found a lot of solutions to create a solution. First of all I wanted to make sure the font was always loading properly. The sad part is, we can't know this unless we write some JS functions around this. Still this wasn't my way of thinking.
Why fix something in JS when the CSS is still broken? So I've decided to ignore this problem. This may sound bad but I can't write a solution for this problem (yet).

My second problem was:

### Making sure all browsers give the same font results

This problem is even bigger then the first one. Cause my case is about creating hats with a preview of the cap I need to make sure all caps look the same. I've thought of two posible solutions.

1. Render an image of the cap on the server and give this back to the user.
2. Creating a text overlay on the cap

The first solution will always work. This will be my first version. This version will always work when images are supported and loaded. If the browser doesn't support images I can't write any fallback cause this is the core functionality.
The second solution is a bit harder. This will be my enhanced version. The only problem here is that fonts look different on all browsers and all systems. For that I need to make sure I'm loading a custom font.
All browsers (expcept opera mini) support `font-face` in css. The only problem here is, that not all browsers support the `woff` font. I wrote a fallback for almost all browsers.

* .eot files (IE6 - IE8)
* .woff files (modern browsers)
* .ttf files (safari, Android, IOS)
* .svg files (Legacy IOS)

[source](https://css-tricks.com/snippets/css/using-font-face/)

## CSS
This project is based on a good CSS. A good CSS file can really give the user a better experience here. Cause the CSS properties I wanted to use (like display flex, svg animations, :checked states) aren't supported on all browsers I created multiple versions.
I started with a basic CSS file that will work on all browsers (at least a lot of browsers). This will use CSS properties that almost all browsers support (I won't list them all here, you can find them in the src/scss/app.scss file).
After I've done this and I made sure This works on all browsers after some testing I decided to write a `@supports` CSS exception. I checked this on `display: flex`. I also wanted to check if the `:checked` was supported. Unfortunately CSS doesn't support this part.
I solved this by using a small CSS hack:

``` css
/* app.css */
*:target, *:not(:target) {
  //your code here
}
```

IE8 for example will ignore everything after this code. Chrome will see this code and recognizes it. Then it will check if the code is false or true. Thats why I wrote a not statement.
`Use this code if(1 === 0 || 1 === 1)` This may sound hacky but it actually works!

This way I created a complete different CSS for modern browsers while old browsers still work.

![CSS difference](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht3/img/cssDifference.png")

## JS
The final step. To make a awesome page even better. By using JS I wanted to live update the hat. First I needed to check if the JS that I wanted to use was being supported, otherwise it will fallback to the original.

``` js
var printS = "print" in window;
var element = document.createElement('_');
var classList = "classList" in element;
var querySelector = "querySelector" in element;
var eventListener = "addEventListener" in element;
var support = false;
var canSvg = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);
```

This code checks all functions and properties I wanted to use in this project. All these variables return true or false, depending on the browser. When the functionality will be supported by the browser it returns true.
After checking this I could start coding. First I told my CSS my code was enhanced by adding a class to the body. This way I could add some different styling. Now I wrote a function using my checked functions to create a SVG of a hat.
By changing the input fields by a eventListener I changed the color and the text on the hat. Easy as that.

Final product:
![Final product](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht3/img/end.png")

## Print
You can also print your results (if supported by browser). I added `@media print` to write a print css. Here I created a display where you can only see the hat you created.


## To Do
This project just started. There are a lot of small bugs I want to solve.

* Responsive webpage (optimize)
* Create fallback for long text in input fields
* Write server feedback
* Write a session storage

## License
MIT © Dipsaus9
