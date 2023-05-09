import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      DESTINATIONS: await prisma.Destinations.findMany(),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Customer_Data ore Rating_Data from DB!",
    });
  }
};
