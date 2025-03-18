import { command } from "./command";

export class dbMigrateCommand extends command {
  args = [];
  getCommand() {
    return "db:migrate";
  }
}