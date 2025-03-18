import { command } from "./command";

export class initMigrationsCommand extends command {
  args = [];
  getCommand() {
    return "init:migrations";
  }
}