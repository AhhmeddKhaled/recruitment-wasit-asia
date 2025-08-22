export async function addArtical({ title, paragraph, img, setMessage }) {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraph);
    formData.append("img", img);
    const res = await fetch(`http://localhost:5000/api/articals`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
 
    if (res.ok) {
      setMessage({ success: true, message: "تم إضافة المقال بنجاح" });
      console.log("تم الاضافة بنجاح");
      return data
    } else {
      setMessage({ success: false, message: "خطأ في إضافة المقال " });
    }
  } catch (error) {
    console.error(error);
  }
}
