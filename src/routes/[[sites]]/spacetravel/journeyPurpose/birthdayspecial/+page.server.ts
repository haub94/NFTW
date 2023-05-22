import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../../../../.svelte-kit/types/src/routes/[[sites]]/spacetravel/journeyPurpose/phototour/$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //return an object with the fetched JOURNEY_PURPOSES data
      JOURNEY_PURPOSES: await prisma.Journey_Purposes.findUnique({
        where: { id: 2 }, //taking the ID of 2 from the database using prisma.Journey_Purposes.findUnique().
      }),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Data from DB!",
    });
  }
};
