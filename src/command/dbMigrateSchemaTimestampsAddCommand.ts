import { command } from "./command";

export class dbMigrateSchemaTimestampsAddCommand extends command {
  args = [];
  getCommand() {
    return "db:migrate:schema:timestamps:add";
  }
}