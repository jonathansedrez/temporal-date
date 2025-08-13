import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.zonedDateTimeISO();
console.log("Current date & time:", now.toString());
