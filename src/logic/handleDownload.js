export const handleDownload = async (worker, setMessage) => {
  try {
    const storedId = localStorage.getItem("userId");
    const id = storedId ? storedId : null; // لو متخزن بـ JSON.stringify


    if (!id) {
      setMessage({
        message: "من فضلك قم بتسجيل الدخول لحجز السيرة الذاتية",
        success: "error",
      });
      return;
    }

    const res = await fetch(`http://localhost:5000/api/auth/${id}`);
    if (!res.ok) {
      throw new Error(`فشل في جلب المستخدم: ${res.status}`);
    }
    const user = await res.json();
    console.log(user);
    console.log(JSON.stringify(user));
    
    

    const response = await fetch("http://localhost:5000/api/notify-owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ worker, user }),
    });

    if (response.ok) {
      setMessage({
        message: "تم إرسال البيانات لصاحب الموقع بنجاح",
        success: "success",
      });
    } else {
      setMessage({
        message: "حدث خطأ أثناء إرسال البيانات",
        success: "error",
      });
    }
  } catch (error) {
    console.error(error);
    setMessage({
      message: "حدث خطأ في الاتصال بالسيرفر",
      success: "error",
    });
  }
};
