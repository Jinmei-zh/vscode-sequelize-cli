import { command } from "./command";

export class dbDropCommand extends command {
  args = [];
  getCommand() {
    return "db:drop";
  }
}
