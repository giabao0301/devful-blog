import React from "react";
import { FaShippingFast, FaLaptop } from 'react-icons/fa';
import { BsCartCheck, BsClockHistory } from 'react-icons/bs'

const data = [
  {
    icon: <FaShippingFast size={30} color="#8cb4f5" />,
    heading: "Tư vấn công nghệ",
    text: "Cung cấp thông tin tư vấn về công nghệ",
  },
  {
    icon: <FaLaptop size={30} color="#f7d272" />,
    heading: "Sửa chữa, nâng cấp",
    text: "Sửa chữa và nâng cấp các thiết bị máy tính",
  },
  {
    icon: <BsCartCheck size={30} color="#fa82ea" />,
    heading: "Khóa đào tạo",
    text: "Cung cấp các khóa đào tạo kỹ năng lập trình",
  },
  {
    icon: <BsClockHistory size={30} color="#82fa9e" />,
    heading: "Hỗ trợ 24/7",
    text: "Đội kỹ thuật viên hỗ trợ kỹ thuật từ xa 24/7",
  },
];


const Introduction = () => {
  return (
    <section className=" md:mt-28  sxl:px-40  ">
      <div className="w-full text-dark dark:text-light mb-5 text-center">
        <h3 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-5">Trung tâm hỗ trợ và dịch vụ máy tính Devful</h3>
        <p className="text-lg mb-4 font-semibold">Cung cấp các dịch vụ chất lượng cao, từ sửa chữa đến hỗ trợ tư vấn về máy tính và công nghệ lập trình</p>
        <p className="text-lg mx-24 font-semibold">Với phương châm "Uy tín, chất lượng, hiệu quả",<br/> Devful cam kết mang lại những trải nghiệm tuyệt vời trong
          quá trình hỗ trợ tư vấn cho khách hàng</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => {
            const {icon, heading, text} = item
            return (
                <div className="border border-gray-300 p-4 flex" key={index}>
                    <div className="icon">{icon}</div>
                    <div className="font-light ml-3">                     
                        <p>{text}</p>
                    </div>
                </div>
            )
        })}
    </div>

    </section>

  );
};

export default Introduction;
