import { command } from "./command";

export class initSeedersCommand extends command {
  args = [];
  getCommand() {
    return "init:seeders";
  }
}
