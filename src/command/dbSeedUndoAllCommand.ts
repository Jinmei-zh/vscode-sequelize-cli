import { command } from "./command";

export class dbSeedUndoAllCommand extends command {
  args = [];
  getCommand() {
    return "db:seed:undo:all";
  }
}
