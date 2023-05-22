import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../../../../../../.svelte-kit/types/src/routes/[[sites]]/spacetravel/journeyPurpose/phototour/$types";

export const load: PageServerLoad = async () => {
  try {
    return {
      //return an object with the fetched DESTINATIONS data and HOTELS data
      DESTINATIONS: await prisma.Destinations.findUnique({
        where: { destinationID: 1 }, //taking the ID of 1 from the database using prisma.Destinations.findUnique().
      }),
      HOTELS: await prisma.Hotels.findUnique({
        where: { hotelID: 1 }, //taking the ID of 1 from the database using prisma.Hotels.findUnique().
      }),
    };
  } catch (error) {
    console.error(error);
    return fail(500, {
      message: "Could not load Data from DB!",
    });
  }
};
