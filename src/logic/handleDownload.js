import { useContext } from "react";
import { UsersContext } from "../data/AllProviders/UsersContext";
import { messageTime } from "./messageTime";

  export const handleDownload = (workerId) => {
      const { user } = useContext(UsersContext);
      const [message, setMessage] = useState('');
    
    if (!user) {
      setMessage("من فضلك قم بتسجيل الدخول لحجز السيرة الذاتية");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    fetch(`/api/workers/${workerId}/cv`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${workerId}.pdf`;
        a.click();
      })
      .catch(() => alert("غير مصرح لك بتحميل السيرة الذاتية"));
  };