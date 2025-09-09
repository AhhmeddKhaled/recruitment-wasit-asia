
export const handleSend = async ({ name, phone, subject, message }) => {

  try {
    const id = localStorage.getItem("userId")
    const res = await fetch(`http://localhost:5000/api/auth/${id}`);
    const user = await res.json();
    const email = user.email;

    const response = await fetch(`http://localhost:5000/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    if (response.ok) {
      return { status: "success"}
    } else {
      return { status: "error" }
    }
  } catch (err) {
    console.log(err);
  }

  return feedBack
};
