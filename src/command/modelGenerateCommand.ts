import { command } from "./command";

export class modelGenerateCommand extends command {
  args = ["--name", "--attributes"];
  argsPrompt = {
    "--attributes": "name:string,age:number",
  };

  getCommand() {
    return "model:generate";
  }
}
