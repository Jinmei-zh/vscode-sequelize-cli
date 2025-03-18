import { command } from "./command";

export class dbSeedUndoCommand extends command {
  args = [];
  getCommand() {
    return "db:seed:undo";
  }
}
