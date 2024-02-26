import fs from "fs"
import path, {dirname} from "path"
import { faker } from "@faker-js/faker"
import { requestStatuses } from "@/constants"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const requests = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  name: faker.hacker.noun() + ' ' + faker.animal.type(),
  total_cost: faker.number.int({ min: 500, max: 4000 }),
  item_count: faker.number.int({ min: 5, max: 200 }),
  contact_no: faker.helpers.fromRegExp('[0-9]{11}'),
  contact_email: faker.internet.email({ provider: 'ucmerced.edu'}),
  status: faker.helpers.arrayElement(requestStatuses).value,
}))

const tsVariable = `export const requests = ${JSON.stringify(requests, null, 2)}`;
fs.writeFileSync(path.join(__dirname, "requests.ts"), tsVariable, 'utf-8');

console.log("✅ Tasks data generated.")