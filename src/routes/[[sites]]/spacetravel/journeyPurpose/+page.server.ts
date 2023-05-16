import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      JOURNEY_PURPOSE_DATA: await prisma.Journey_Purposes.findMany(),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Journey_Purposes data from DB!",
    });
  }
};
