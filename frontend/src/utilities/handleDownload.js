import { sound } from "./sound";

export const handleDownload = async (worker, setMessage) => {

  try {
    const storedId = localStorage.getItem("userId");
    const id = storedId ? storedId : null;

    if (!id) {
      setMessage({
        message: "من فضلك قم بتسجيل الدخول لحجز السيرة الذاتية",
        success: "error",
      });
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/${id}`);

    if (!res.ok) {
      throw new Error(`فشل في جلب المستخدم: ${res.status}`);
    }
    const user = await res.json();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/resume`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ worker, user }),
    });

    if (response.ok) {
      const message = await response.json();
      console.log(message);
      
      setMessage({
        message: message.message,
        success: "success",
      });

      sound("/sounds/successed.mp3");

    } else {
      setMessage({
        message: "حدث خطأ أثناء إرسال البيانات",
        success: "error",
      });
      sound("/sounds/error.mp3");
    }
  } catch (error) {
    console.error(error);
    setMessage({
      message: "حدث خطأ في الاتصال بالسيرفر",
      success: "error",
    });
  }

};
