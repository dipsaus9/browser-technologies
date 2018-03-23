# Browser Technologies
For this project I created two folders with each a different feature. The features I'm describing here are:

- FAQ page
- Image Picker

I started this project with the image picker ([Image Picker](https://dipsaus9.github.io/browser-technologies/opdracht2/image-picker/)).

## Image Picker
My first thought was: Oh, that will be easy, I'll just use the input field with `type="file"`. But if everything was that easy....
So I looked in the [whatwg.org](https://html.spec.whatwg.org/multipage/) website to check the support and how to use this element. As I found out quickly this input element isn't supported on all browsers.

![Support of the type="file"](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/file_upload.png)

So when I saw this I was thinking how to solve this problem. I decided I'm not going to create an extra support function for this. As you can see on the image the support goes back really far. If the browser didn't support the file type this input will always fall back to a text field.
Because I saw this problem I wanted to create a small solution. I created some radio buttons - cause these allways work (hopefully) - where you can select a previous uploaded image. Here you can select an image to change your profile picture.

This was the basic off this project, and it was pretty solid. I tested this on multiple devices and I didn't find a single problem. Well, I found one problem. IE11 didn't support img tags in labels. If you place an image tab inside of a label you can't click on the label anymore.
To solve this problem I added a `pointer-events: none` to the img tag. This is supported on IE11 so now it will always work.

![First version](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/start_image_picker.png)

After this stage I created some extra CSS to give it some styling. I didn't use that much difficult css. The only part I made some different choices were the `:checked` input fields. This part isn't supported on all browsers. But CSS ignores the rule when it doesn't know this rule. So I created a solution using: `input:checked, input:not(:checked)`.
By using this method I'm creating support for browser who can use this feature.

![Second version](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/image_picker_with_css.png)

After I completed this I created some extra JS to make it even better. By checking all support on the top of my JS file I made sure the app wouldn't crash. After I knew what methods I could use I created some function to give the app some exra functionality.

![Latsest version](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/image_picker_end.png)


## FAQ
([Image Picker](https://dipsaus9.github.io/browser-technologies/opdracht2/faq/).

![First version](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/faq_without_css.png)

This project was created by using the target selectors. New browser also have a smooth scroll function in CSS to give the page a nice scroll function. This isn't supported on all browsers. But, even when this isn't supported you can still navigate and find all the content you need.
This project didn't use any JS cause CSS can solve all these problems.

![Latest version](https://github.com/dipsaus9/browser-technologies/blob/master/opdracht2/images/faq_withcss.png)
