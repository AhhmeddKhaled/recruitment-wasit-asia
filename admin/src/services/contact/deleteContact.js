export default async function deleteContact(id) {
  const BASE_URL = `${import.meta.env.VITE_API_URL}/api/contactS/`;
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`فشل الحذف: ${res.status}`);
    }

    return true;
  } catch (err) {
    console.error(err);
  }
}
