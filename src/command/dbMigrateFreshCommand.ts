import { command } from "./command";

export class dbMigrateFreshCommand extends command {
  args = [];
  getCommand() {
    return ["db:migrate:undo:all", "npx sequelize-cli db:migrate"].join(
      process.platform === "win32" ? ";" : "&&"
    );
  }
}
