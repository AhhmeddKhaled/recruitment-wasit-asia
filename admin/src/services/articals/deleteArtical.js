export async function deleteArtical(id, setMessage) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articals/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setMessage({ success: 'success', message: "تم حذف المقال بنجاح" });
    } else {
      setMessage({ success: 'error', message: "خطأ في حذف المقال" });
    }
  } catch (error) {
    console.error(error);
    setMessage({ success: 'error', message: "حدث خطأ أثناء الاتصال بالخادم" });
  }

  setTimeout(() => {
    setMessage("");
  }, 3000);
}
