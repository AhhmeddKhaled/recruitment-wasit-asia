export async function deleteWorker(id, type = "recruitment", setWorkers, setMessage) {
  try {
    const response = await fetch(`http://localhost:5000/api/workers/${type}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setMessage({ success: true, message: "تم حذف الخادمة بنجاح" });
    } else {
      setMessage({ success: false, message: "خطأ في حذف الخادمة" });
    }
  } catch (error) {
    console.error(error);
    setMessage({ success: false, message: "حدث خطأ أثناء الاتصال بالخادم" });
  }

  setTimeout(() => {
    setMessage("");
  }, 3000);
}
