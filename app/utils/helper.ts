"use server"

import { cookies } from "next/headers"

export async function getBySessionName(sessionName: string) {
    const cookieStore = await cookies();
    return cookieStore.get(sessionName)?.value;
}
