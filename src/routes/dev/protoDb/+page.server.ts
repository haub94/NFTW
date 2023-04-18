import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    addCustomer: async ({ request }) => {
        const { firstName, lastName, email } = Object.fromEntries(await request.formData()) as {
            firstName: string, 
            lastName: string, 
            email: string 
        }
        try {
            await prisma.customers.create({
                data: {
                    firstName,
                    lastName,
                    email
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