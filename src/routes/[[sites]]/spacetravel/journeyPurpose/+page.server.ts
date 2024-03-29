import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //the load function returns an object with a property named JOURNEY_PURPOSE_DATA.
      JOURNEY_PURPOSE_DATA: await prisma.Journey_Purposes.findMany(), //findMany() is called on the Journey_Purposes model, which  represents a table in the database.
      IMAGES: await prisma.Images.findMany(),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Journey_Purposes data from DB!",
    });
  }
};
