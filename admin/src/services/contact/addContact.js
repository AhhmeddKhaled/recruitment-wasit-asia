export async function addContact({ phone, role }) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, role }),
    });

    const data = await res.json();
    

    if (!res.ok) {
      throw new Error(data.message || "Failed to add contact");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}
