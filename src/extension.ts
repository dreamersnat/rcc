import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

interface ComponentCreatorConfig {
  componentsFolder: string;
  useTypescript: boolean;
  useScss: boolean;
  createIndexFile: boolean;
}

export function activate(context: vscode.ExtensionContext) {
  console.log("React Component Creator extension is now active!");

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "react-component-creator.createComponent",
      async (resource: vscode.Uri) => {
        const config = vscode.workspace.getConfiguration(
          "reactComponentCreator"
        ) as ComponentCreatorConfig;

        let targetDirectory: string;
        if (resource && fs.statSync(resource.fsPath).isDirectory()) {
          targetDirectory = resource.fsPath;
        } else {
          const workspaceFolders = vscode.workspace.workspaceFolders;
          if (!workspaceFolders) {
            vscode.window.showErrorMessage("Please open a workspace first");
            return;
          }
          targetDirectory = path.join(
            workspaceFolders[0].uri.fsPath,
            config.componentsFolder
          );
        }

        const componentName = await vscode.window.showInputBox({
          prompt: "Enter the name of the new component",
          validateInput: (value) => {
            return value && value.length > 0
              ? null
              : "Component name cannot be empty";
          },
        });

        if (componentName) {
          const newComponentPath = path.join(targetDirectory, componentName);
          fs.mkdirSync(newComponentPath, { recursive: true });
          createReactComponentFiles(newComponentPath, componentName, config);
        }
      }
    )
  );
}

function createReactComponentFiles(
  folderPath: string,
  componentName: string,
  config: ComponentCreatorConfig
) {
  const fileExtension = config.useTypescript ? "tsx" : "jsx";
  const styleExtension = config.useScss ? "scss" : "css";

  // Create component file
  const componentContent = `import styles from './${componentName}.module.${styleExtension}';

interface Props {
}

export function ${componentName}({ }: Props) {
    return (
        <div className={styles.container}>
        </div>
    );
};
`;
  fs.writeFileSync(
    path.join(folderPath, `${componentName}.${fileExtension}`),
    componentContent
  );

  // Create style file
  const styleContent = `.container {

}
`;
  fs.writeFileSync(
    path.join(folderPath, `${componentName}.module.${styleExtension}`),
    styleContent
  );

  // Create index file
  if (config.createIndexFile) {
    const indexContent = `export * from './${componentName}';
`;
    fs.writeFileSync(path.join(folderPath, "index.ts"), indexContent);
  }

  vscode.window.showInformationMessage(
    `React component ${componentName} created successfully!`
  );
}

export function deactivate() {}
