import { command } from "./command";

export class migrationGenerateCommand extends command {
  args = ["--name"];
  getCommand() {
    return "migration:generate";
  }
}
