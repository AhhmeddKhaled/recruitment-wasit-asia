export async function addArtical({ title, paragraph, img, setMessage }) {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraph);
    formData.append("img", img);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/articals`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
 
    if (res.ok) {
      setMessage({ success: 'success', message: "تم إضافة المقال بنجاح" });
      return data
    } else {
      setMessage({ success: 'error', message: "خطأ في إضافة المقال " });
    }
  } catch (error) {
    console.error(error);
  }
}
