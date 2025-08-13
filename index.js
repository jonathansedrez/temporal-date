import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.zonedDateTimeISO();
console.log("Current date & time:", now.toString());

const today = Temporal.PlainDate.from("2025-08-12");
console.log("Today:", today.toString(), today, typeof today);


