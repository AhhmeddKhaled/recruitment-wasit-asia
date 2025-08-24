export const handleDownload = async (worker, user, setMessage) => {
  if (!user) {
    setMessage({message: "من فضلك قم بتسجيل الدخول لحجز السيرة الذاتية",success: "error"});
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/notify-owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        worker,
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      }),
    });

    if (response.ok) {
      setMessage({message: "تم إرسال البيانات لصاحب الموقع بنجاح",success: "success"});
    } else {
      setMessage({message: "حدث خطأ أثناء إرسال البيانات",success: "error"});
    }
  } catch (error) {
      setMessage({message: "حدث خطأ في الاتصال بالسيرفر",success: "error"});
  }
};
