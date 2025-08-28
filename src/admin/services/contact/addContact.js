export async function addContact({ name, phone }) {
  try {
    const res = await fetch(`http://localhost:5000/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name,phone}),
    });

    const data = await res.json();
 
    if (res.ok) {
      return data
    } else {
        console.log("errorr");
        
    }
  } catch (error) {
    console.error(error);
  }
}
