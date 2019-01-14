# Guppy-editor
A human-friendly, WYSIWYG math editor that exports in LaTeX, ASCIIMath, Plain text, JSON AST, JSON Equation List, and XML based on [Guppy](https://guppy.js.org/site/)
![guppy-editor screenshot demo](https://raw.githubusercontent.com/AlienKevin/Guppy-editor/master/images/guppy_editor_demo_1.png)
## Set up
1. clone or download this repository
2. click on the `index.html` to launch in your favorite browser

## Usage
I. Enter math expressions in the edit input box, to learn more about the functions and keyboard shortcuts Guppy supports, click the little icons in the bottom right of the input box.
1. Accessing help for Guppy functions
![Screenshot demo for help for Guppy functions](https://raw.githubusercontent.com/AlienKevin/Guppy-editor/master/images/guppy_editor_demo_functions.png)
2. Accessing help for Guppy keyboard shortcuts
![Screenshot demo for help for Guppy keyboard shortcuts](https://raw.githubusercontent.com/AlienKevin/Guppy-editor/master/images/guppy_editor_demo_key_shortcuts.png)

II. Click on an export button to export the expression in the format you want. The editor defaults to export expressions in LaTeX format and will automatically update the output box to show the LaTeX version of the expression you enter. You can temporarily change the export format by clicking on other buttons you want and the output box will change correspondingly. 
In case you want to work with a particular format for a long time, you can long click (hold for at least 0.5s) on any of the buttons to switch the export format. The selected export format button will appear in orange. To change export format to another type, simply long click on another button until it turns orange.
![Screenshot demo for long click on button to set export format](https://raw.githubusercontent.com/AlienKevin/Guppy-editor/master/images/guppy_editor_demo_long_click.png)
In the above case, export type is set to "Plain Text" which is very suitable for evaluation of an expression.
III. To copy the output, click on the copy button and the whole output (including those hidden because the output is too long) will be copied to your clipboard.
## License
This project is licensed under the terms of the MIT license.