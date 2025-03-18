import { command } from "./command";

export class initConfigCommand extends command {
  args = [];
  getCommand() {
    return "init:config";
  }
}
