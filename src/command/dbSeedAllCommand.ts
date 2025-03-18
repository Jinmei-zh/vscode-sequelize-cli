import { command } from "./command";

export class dbSeedAllCommand extends command {
  args = [];
  getCommand() {
    return "db:seed:all";
  }
}