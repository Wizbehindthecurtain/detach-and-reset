// Shared zod schema for the book-a-call form. Same validator runs client-side
// (pre-submit gate) and server-side (route handler safeParse) so we never
// trust the client and never let the client submit obviously-bad data either.

import { z } from "zod";

// Loose phone gate — accepts (555) 123-4567 / 555-123-4567 / +1 555 123 4567.
const phoneRegex = /^[\d\s().+\-]{10,}$/;

export const BookingSchema = z.object({
  company: z
    .string()
    .trim()
    .min(2, { message: "Company name required." })
    .max(80, { message: "Company name too long." }),
  name: z
    .string()
    .trim()
    .min(2, { message: "Your name required." })
    .max(80, { message: "Name too long." }),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Enter a valid phone number." }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email." }),
  meetingDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Pick a preferred date." }),
  notes: z.string().trim().max(1000, { message: "Notes too long." }).default(""),
});

export type BookingInput = z.infer<typeof BookingSchema>;

/**
 * The shape we submit from the client — strings only, since native form inputs
 * always produce strings.
 */
export type BookingFormValues = {
  company: string;
  name: string;
  phone: string;
  email: string;
  meetingDate: string;
  notes: string;
};

export const emptyBookingFormValues: BookingFormValues = {
  company: "",
  name: "",
  phone: "",
  email: "",
  meetingDate: "",
  notes: "",
};
