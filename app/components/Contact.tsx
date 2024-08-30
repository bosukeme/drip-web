import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center mb-4 mt-2">

            <div className="flex items-center justify-center gap-4">
                <FaPhoneAlt size={20} />
                <span className="font-bold text-base">+1 (682) 812‑0656</span>
            </div>
      
            <div className="flex items-center justify-center gap-4">
                <MdOutlineMailOutline size={20} />
                <span className="font-bold text-base ">dr.u.e.ekong@gmail.com</span>
            </div>


        </div>
    );
}