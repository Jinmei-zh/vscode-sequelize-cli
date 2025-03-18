// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { dbMigrateCommand } from "./command/dbMigrateCommand";
import { dbMigrateSchemaTimestampsAddCommand } from "./command/dbMigrateSchemaTimestampsAddCommand";
import { dbMigrateStatusCommand } from "./command/dbMigrateStatusCommand";
import { dbMigrateUndoCommand } from "./command/dbMigrateUndoCommand";
import { dbMigrateUndoAllCommand } from "./command/dbMigrateUndoAllCommand";
import { dbSeedCommand } from "./command/dbSeedCommand";
import { dbSeedUndoCommand } from "./command/dbSeedUndoCommand";
import { dbSeedAllCommand } from "./command/dbSeedAllCommand";
import { dbSeedUndoAllCommand } from "./command/dbSeedUndoAllCommand";
import { dbCreateCommand } from "./command/dbCreateCommand";
import { dbDropCommand } from "./command/dbDropCommand";
import { initCommand } from "./command/initCommand";
import { initConfigCommand } from "./command/initConfigCommand";
import { initMigrationsCommand } from "./command/initMigrationsCommand";
import { initModelsCommand } from "./command/initModelsCommand";
import { initSeedersCommand } from "./command/initSeedersCommand";
import { migrationGenerateCommand } from "./command/migrationGenerateCommand";
import { modelGenerateCommand } from "./command/modelGenerateCommand";
import { seedGenerateCommand } from "./command/seedGenerateCommand";
import { dbMigrateFreshCommand } from "./command/dbMigrateFreshCommand";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  const commands: { [name: string]: any } = {
    "db:migrate": dbMigrateCommand,
    "db:migrate:schema:timestamps:add": dbMigrateSchemaTimestampsAddCommand,
    "db:migrate:status": dbMigrateStatusCommand,
    "db:migrate:undo": dbMigrateUndoCommand,
    "db:migrate:undo:all": dbMigrateUndoAllCommand,
    "db:migrate:fresh": dbMigrateFreshCommand,
    "db:seed": dbSeedCommand,
    "db:seed:undo": dbSeedUndoCommand,
    "db:seed:all": dbSeedAllCommand,
    "db:seed:undo:all": dbSeedUndoAllCommand,
    "db:create": dbCreateCommand,
    "db:drop": dbDropCommand,
    init: initCommand,
    "init:config": initConfigCommand,
    "init:migrations": initMigrationsCommand,
    "init:models": initModelsCommand,
    "init:seeders": initSeedersCommand,
    "migration:generate": migrationGenerateCommand,
    "model:generate": modelGenerateCommand,
    "seed:generate": seedGenerateCommand,
  };

  Object.keys(commands).map((index) => {
    const disposable = vscode.commands.registerCommand(
      "sequelize-cli." + index,
      async () => {
        const cl = commands[index];
        new cl().execute();
      }
    );
    context.subscriptions.push(disposable);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
