# React Component Creator

React Component Creator is a Visual Studio Code extension that simplifies the process of creating new React components. With this extension, you can quickly generate a new component folder structure, including a TypeScript/JavaScript file, a CSS/SCSS module, and an optional index file.

## Features

- Create React components via the context menu or command palette
- Customizable file types (TypeScript/JavaScript and CSS/SCSS)
- Optional index file creation for easy exporting
- Works with any folder structure

## Installation

Since this extension is not available on the Visual Studio Code Marketplace, you'll need to install it manually using a VSIX file.

1. Download the `react-component-creator-0.0.1.vsix` file (or the latest version) from the project's release page.

2. Open Visual Studio Code

3. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac).

4. Click on the "..." at the top of the Extensions view and select "Install from VSIX..."

5. Navigate to the downloaded VSIX file, select it, and click "Install"

6. Restart Visual Studio Code if prompted

## Usage

1. Right-click on any folder in the Explorer view where you want to create a new component
2. Select "Create React Component" from the context menu
3. Enter a name for your new component when prompted
4. The extension will create a new folder with the component name, containing:
   - A .tsx (or .jsx) file with a basic React component
   - A .module.scss (or .module.css) file
   - An index.ts file (if enabled in settings)

Alternatively, you can use the Command Palette:

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Create React Component" and select the command
3. Enter a name for your new component
4. The component will be created in the configured components folder

## Configuration

You can customize the behavior of React Component Creator through VS Code settings:

1. Open Settings (File > Preferences > Settings)
2. Search for "React Component Creator"
3. Adjust the following settings:
   - `reactComponentCreator.componentsFolder`: Name of the folder where components are stored (used when creating from command palette)
   - `reactComponentCreator.useTypescript`: Use TypeScript (.tsx) instead of JavaScript (.jsx)
   - `reactComponentCreator.useScss`: Use SCSS (.scss) instead of CSS (.css)
   - `reactComponentCreator.createIndexFile`: Create an index.ts file for exporting the component

## Feedback and Contributions

If you encounter any issues or have suggestions for improvements, please file an issue on the project's GitHub repository. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
