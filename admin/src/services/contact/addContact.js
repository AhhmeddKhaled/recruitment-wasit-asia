export async function addContact({ name, phone, role }) {
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

    return data; // هيرجع دايمًا إذا الطلب نجح
  } catch (error) {
    console.error(error);
    throw error; // ترمي الخطأ للخارج عشان handleSubmit يعرف يحصل خطأ
  }
}
