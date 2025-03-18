import { command } from "./command";

export class dbCreateCommand extends command {
  args = [];
  getCommand() {
    return "db:create";
  }
}
