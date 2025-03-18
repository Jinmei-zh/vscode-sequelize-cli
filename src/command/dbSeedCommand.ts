import { command } from "./command";

export class dbSeedCommand extends command {
  args = ["--seed"];
  getCommand() {
    return "db:seed";
  }
}
