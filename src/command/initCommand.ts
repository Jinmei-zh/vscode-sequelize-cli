import { command } from "./command";

export class initCommand extends command {
  args = [];
  getCommand() {
    return "init";
  }
}
