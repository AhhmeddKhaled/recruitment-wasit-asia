
export async function deleteWorker(
    id,
    getWorkers,
    setGetWorkers,
    setMessage
)  {



        try {
            const response = await fetch(`http://localhost:5000/api/workers/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setMessage({success: true, message: "تم حذف الخادمة بنجاح"})
                setGetWorkers(getWorkers.filter((worker) => worker._id !== id));
            } else {
                setMessage({success: false, message: 'خطأ في حذف الخادمة'})
            }
        } catch (error) {
            console.error(error);
        }

        setTimeout(() => {
            setMessage('')
        },3000)
    };