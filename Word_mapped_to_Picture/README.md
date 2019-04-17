# Mapping words to an image of flowers

### Loading an image of roses. Mapping the image pixels value to type.
### The pixels of the image control the configuration of the letters.

#### The size of each letter depends on the grey values of the pixels in the image.

The type that is being mapped to this image is a paragraph about the psychology of colour taken from an article on [medium](https://medium.com/building-creative-market/a-color-exercise-for-our-brands-illustration-db39af44f081).


Before a letter is drawn, its position co-ordinates is matched to the corrosponding position
in the original image in pixel co-ordinates

You can save a .png image of the canvas by pressing the key 's'.

KEYS:

1 - Change the render mode.
2 - Swap Colour Modes (RGB/HSB).
3 - Reduce row size to increase detail of image.
4 - Set the font-size to correspond with the colour value of each pixel.
5 - Refresh the canvas.

UP DOWN - Alter Maximum font size value
LEFT RIGHT - Alter Minimum font size value

```js
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  // Change render mode
  if (key == '1') fontSame = !fontSame;
  // Change color mode to HSB
  if (key == '2')   colorMode(HSB);
  // Reduce the size of the rows to make image more detailed
  if (key == '3')   spacing = 4;
  // Set the font size to correspond to the amount of colour in each pixel
  if (key == '4')   textSize(fontSize2);
  // Refresh canvas
  if (key == '5')   location.reload();
  loop();
}
```


[See code in action](https://mgn00150905.github.io/GenerativeDesignProjects/Word_mapped_to_Picture) (Ctrl/Cmnd Click to open in new tab)
