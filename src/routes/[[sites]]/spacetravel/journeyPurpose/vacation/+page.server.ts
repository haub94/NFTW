import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //return an object with the fetched JOURNEY_PURPOSES data
      JOURNEY_PURPOSES: await prisma.Journey_Purposes.findUnique({
        where: { id: 4 }, //taking the ID of 4 from the database using prisma.Journey_Purposes.findUnique().
      }),
      IMAGES: await prisma.Images.findMany(),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Data from DB!",
    });
  }
};
