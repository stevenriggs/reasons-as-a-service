import { noReasons } from "./data/no";
import { workExcuses } from "./data/work-excuses";
import { genericReasons } from "./data/generic";

export async function getReasons(type: string) {
  console.log(type);
  switch (type) {
    case "no":
      return noReasons;
      break;
    case "work-excuse":
      return workExcuses;
      break;
    case "generic":
      return genericReasons;
      break;
    default:
      // Code to execute if no case matches
      return [...noReasons, ...workExcuses, ...genericReasons];
  }
}
