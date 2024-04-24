export async function loadPosts() {
    /* const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users') */
    const { all_appointments } = await import("@/data/appointment.json");
    /* const data = res.json() */
    
    /* return data */
    return all_appointments
}

export async function loadPaths(id: any) {
    /* const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`) */
    const { all_appointments } = await import("@/data/appointment.json");
    /* const data = res.json() */

    const eventData = all_appointments.find(user => id === user.id)
    
    return eventData
}

