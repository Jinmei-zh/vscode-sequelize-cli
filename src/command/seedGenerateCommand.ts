import { command } from "./command";

export class seedGenerateCommand extends command {
  args = ["--name"];
  getCommand() {
    return "seed:generate";
  }
}
