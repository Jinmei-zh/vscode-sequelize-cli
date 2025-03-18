import { command } from "./command";

export class dbMigrateStatusCommand extends command {
  args = [];
  getCommand() {
    return "db:migrate:status";
  }
}
