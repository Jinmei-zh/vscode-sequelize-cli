import { command } from "./command";

export class dbMigrateUndoAllCommand extends command {
  args = [];
  getCommand() {
    return "db:migrate:undo:all";
  }
}
