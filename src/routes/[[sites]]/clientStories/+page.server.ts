import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	try {
        return {
            CUSTOMER_DATA: await prisma.Customer_Data.findMany(),
            RATING_DATA: await prisma.Rating_Data.findMany()
        }
    } catch (error) {
        console.error(error);
            return fail(500, { message: 'Could not load Customer_Data ore Rating_Data from DB!'})
    }
}