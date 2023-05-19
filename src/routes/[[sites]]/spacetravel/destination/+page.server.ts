import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //the load function returns an object with a property named DESTINATION_DATA.
      DESTINATION_DATA: await prisma.Destinations.findMany(), ////findMany() is called on the Destinations model, which  represents a table in the database.
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load DESTINATION_DATA from DB!",
    });
  }
};
