import { command } from "./command";

export class dbMigrateUndoCommand extends command {
  args = [];
  getCommand() {
    return "db:migrate:undo";
  }
}
