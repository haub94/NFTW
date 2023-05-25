import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //the load function returns an object with a property named IMAGES.
      IMAGES: await prisma.Images.findMany(), //findMany() is called on the Images model, which  represents a table in the database.
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Images data from DB!",
    });
  }
};
