import { command } from "./command";

export class initModelsCommand extends command {
  args = [];
  getCommand() {
    return "init:models";
  }
}