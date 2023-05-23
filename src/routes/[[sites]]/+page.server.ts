import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	try {
        return {
            IMAGES: await prisma.Images.findMany(),
        }
    } catch (error) {
        console.error(error);
            return fail(500, { message: 'Could not load Images from DB!'})
    }
}