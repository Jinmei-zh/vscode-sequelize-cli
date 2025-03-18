import * as vscode from "vscode";

enum commands {
  "db:migrate",
  "db:migrate:schema:timestamps:add",
  "db:migrate:status",
  "db:migrate:undo",
  "db:migrate:undo:all",
  "db:migrate:fresh",
  "db:seed",
  "db:seed:undo",
  "db:seed:all",
  "db:seed:undo:all",
  "db:create",
  "db:drop",
  "init",
  "init:config",
  "init:migrations",
  "init:models",
  "init:seeders",
  "migration:generate",
  "model:generate",
  "seed:generate",
}

export class command {
  args: string[] = [];
  argsPrompt: { [name: string]: string } = {};
  // receiver: commands;
  static terminal: vscode.Terminal;

  constructor() {
    //receiver: commands
    // this.receiver = receiver;
    // this.terminal = vscode.window.createTerminal();
  }

  async input(placeHolder: string = "Input", prompt?: string) {
    const nameInput = await vscode.window.showInputBox({
      placeHolder: placeHolder,
      prompt: prompt ?? "Please enter " + placeHolder,
      ignoreFocusOut: true,
    });

    if (!nameInput) {
      // vscode.window.showInformationMessage("没有输入命令，操作已取消");
      // return;
      throw new Error("没有输入命令，操作已取消");
    }
    return nameInput;
  }

  createTerminal() {
    command.terminal = vscode.window.createTerminal();
  }

  async getParams() {
    const params: string[] = [];
    let count = 0;
    while (count < this.args.length) {
      const item = this.args[count];
      const input = await this.input(
        item.replace("--", ""),
        this.argsPrompt[item] ?? null
      );
      if (input) {
        params.push(item, input);
      }
      count++;
    }
    return params;
  }

  getCommand() {
    throw new Error("getCommand 方法必须在子类中实现");
  }

  async execute() {
    if (!command.terminal) {
      this.createTerminal();
    }

    // 获取输入参数
    try {
      const params = await this.getParams();

      // 显示终端
      command.terminal.show();

      const commandText =
        "npx sequelize " + this.getCommand() + " " + params.join(" ");

      // 执行选中的命令
      command.terminal.sendText(commandText);
    } catch (error) {
      // vscode.window.showInformationMessage("没有输入命令，操作已取消");
      return;
    }
  }
}
