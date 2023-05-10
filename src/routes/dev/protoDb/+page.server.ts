import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		customer_data: await prisma.Customer_Data.findMany()
	}
}

export const actions: Actions = {
    addCustomer: async ({ request }) => {
        const { firstName, lastName, emailAddress } = Object.fromEntries(await request.formData()) as {
            firstName: string, 
            lastName: string, 
            emailAddress: string 
        }
        try {
            await prisma.Customer_Data.create({
                data: {
                    firstName,
                    lastName,
                    emailAddress
                }
            })
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Could not add the customer!'})
        }     
        
        return {
            status: 201
        }
    }
}