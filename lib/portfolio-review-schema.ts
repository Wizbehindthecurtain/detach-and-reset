// Shared zod schema for the /enterprise portfolio-review form. Same validator
// runs client-side (pre-submit gate) and server-side (route handler safeParse).

import { z } from "zod";

export const PortfolioReviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Your name is required." })
    .max(120, { message: "Name too long." }),
  firm: z
    .string()
    .trim()
    .min(2, { message: "Firm or platform is required." })
    .max(120, { message: "Firm name too long." }),
  scope: z
    .string()
    .trim()
    .max(2000, { message: "Portfolio scope too long." })
    .default(""),
});

export type PortfolioReviewInput = z.infer<typeof PortfolioReviewSchema>;

/** Form values shape — strings only, matches native input behavior. */
export type PortfolioReviewFormValues = {
  name: string;
  firm: string;
  scope: string;
};

export const emptyPortfolioReviewFormValues: PortfolioReviewFormValues = {
  name: "",
  firm: "",
  scope: "",
};
