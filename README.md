# React Component Creator

A Visual Studio Code extension that allows users to quickly generate a full React component folder structure with the necessary files (`index.ts`, `.module.scss`, and `.tsx` component file). Streamline your React development workflow by creating components effortlessly through the command palette or context menu.

## Features

- Create a React component folder with:
  - `index.ts` for cleaner imports
  - A `.tsx` component file with the default component structure
  - A `.module.scss` file for scoped styling
- Easily accessible through:
  - Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS)
  - Context Menu (Right-click on the file explorer)

## Installation

1. Download and install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).
2. Once installed, you can use the extension through the command palette or context menu.

## Usage

### Command Palette

1. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Type `Create React Component` and select the option.
3. Enter the component name.
4. The extension will create a new folder in the selected directory with the following files:
   - `ComponentName.tsx`
   - `ComponentName.module.scss`
   - `index.ts`

### Context Menu

1. In the VS Code file explorer, right-click on the folder where you want to create the component.
2. Select `Create React Component` from the context menu.
3. Enter the component name.
4. The extension will generate the same folder structure and files as above.

### File Structure Example

After generating the component, the following structure will be created:

/ComponentName |-- ComponentName.tsx |-- ComponentName.module.scss |-- index.ts

The `index.ts` file will automatically export the component for cleaner and more convenient imports.

### Default Component Template

The `.tsx` component file will be created with a default functional component template, following best practices in React development. For example:

```tsx
import styles from "./ComponentName.module.scss";

interface Props {}

export function ComponentName({}: Props) {
  return <div className={styles.container}></div>;
}
```
