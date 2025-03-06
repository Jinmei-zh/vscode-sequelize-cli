// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  // 创建一个终端
  let terminal: vscode.Terminal;

  const commands = [
    {
      command: "db:migrate",
      describe: "Run pending migrations",
    },
    {
      command: "db:migrate:schema:timestamps:add",
      describe: "Update migration table to have timestamps",
    },
    {
      command: "db:migrate:status",
      describe: "List the status of all migrations",
    },
    {
      command: "db:migrate:undo",
      describe: "Reverts a migration",
    },
    {
      command: "db:migrate:undo:all",
      describe: "Revert all migrations ran",
    },
    {
      command: "db:migrate:fresh",
      describe: "Drop all tables and re-run all migrations",
    },
    {
      command: "db:seed",
      describe: "Run specified seeder",
    },
    {
      command: "db:seed:undo",
      describe: "Deletes data from the database",
    },
    {
      command: "db:seed:all",
      describe: "Run every seeder",
    },
    {
      command: "db:seed:undo:all",
      describe: "Deletes data from the database",
    },
    {
      command: "db:create",
      describe: "Create database specified by configuration",
    },
    {
      command: "db:drop",
      describe: "Drop database specified by configuration",
    },

    {
      command: "init",
      describe: "Initializes project",
    },
    {
      command: "init:config",
      describe: "Initializes configuration",
    },
    {
      command: "init:migrations",
      describe: "Initializes migrations",
    },

    {
      command: "init:models",
      describe: "Initializes models",
    },
    {
      command: "init:seeders",
      describe: "Initializes seeders",
    },
    {
      command: "migration:generate",
      describe:
        "Generates a new migration file      [aliases: migration:create]",
    },
    {
      command: "model:generate",
      describe: "Generates a model and its migration [aliases: model:create]",
    },
    {
      command: "seed:generate",
      describe: "Generates a new seed file           [aliases: seed:create]",
    },
  ];

  commands.map((item) => {
    const disposable = vscode.commands.registerCommand(
      "sequelize-cli." + item.command,
      async () => {
        let selectedCommand: string = `npx sequelize ${item.command}`;
        const params: string[] = [];

        if (item.command === "db:migrate:fresh") {
          selectedCommand = [
            "npx sequelize db:migrate:undo:all",
            "npx sequelize db:migrate ",
          ].join(process.platform === "win32" ? ";" : "&&");
        } else {
          if (item.command.includes("generate")) {
            // 表名输入
            const nameInput = await vscode.window.showInputBox({
              placeHolder: "Table Name",
              prompt: "请输入命令",
              ignoreFocusOut: true,
            });

            if (!nameInput) {
              vscode.window.showInformationMessage("没有输入命令，操作已取消");
              return;
            }
            params.push("--name", nameInput);

            if (["model:generate"].includes(item.command)) {
              // 列名输入
              const attributesInput = await vscode.window.showInputBox({
                placeHolder: "Attributes",
                prompt: "name:string,description:string",
                ignoreFocusOut: true,
              });
              if (!attributesInput) {
                vscode.window.showInformationMessage(
                  "没有输入命令，操作已取消"
                );
                return;
              }
              params.push("--attributes", attributesInput);
            }
          }
          selectedCommand += " " + params.join(" ");
        }

        if (!terminal) {
          terminal = vscode.window.createTerminal();
        }
        if (selectedCommand) {
          // 显示终端
          terminal.show();

          // 执行选中的命令
          terminal.sendText(selectedCommand);
        }
      }
    );

    context.subscriptions.push(disposable);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
