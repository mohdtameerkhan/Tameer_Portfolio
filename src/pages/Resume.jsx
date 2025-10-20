import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Resume() {
  const resumedata = [
    {
      type: "experience",
      Year: "2023-Present",
      Role: "Customer Relation Representative",
      Company: "Al Salam Al Assima Hospital, Kuwait",
      Description:
        "I updated and verified patient information at each visit, assisted patients in completing history, consent, and payment forms, managed all types of insurance processes including obtaining approvals from respective companies, and reviewed patient accounts to identify and collect overdue payments.",
    },
    {
      type: "experience",
      Year: "2022-2023",
      Role: "Business Development Executive",
      Company: "Byju, Kuwait",
      Description:
        "I worked on prospect leads by identifying qualified ones through various communication channels and converting them into potential customers via calls, emails, and video meetings. I created sales for Byju’s educational application by building strong rapport with parents and students. Additionally, I collaborated with the marketing team to assess lead quality, discussed strategies with higher management to boost sales, participated in monthly review meetings to plan new approaches, and handled the complete sales process including payments, order punching, confirmations, follow-ups, and escalations.",
    },
    {
      type: "experience",
      Year: "2020-2022",
      Role: "Operation Executive",
      Company: "Zomato",
      Description:
        "Zomato is an Indian multinational restaurant aggregator and food delivery company, where I was responsible for resolving customer complaints and escalations received through various channels. I provided support with proper documentation and reports, handled telephone inquiries efficiently and courteously, and gathered and recorded customer information, payment details, purchase history, and feedback on products and services.",
    },
    {
      type: "qualification",
      Year: "2023",
      Title: "MCA",
      Place: "Integral University, India",
      Description:
        "Master of Computer Applications with specialization in Web Development.",
    },
    {
      type: "qualification",
      Year: "2019",
      Title: "BCA",
      Place: "Babu Banarsi Das University, India",
      Description:
        "Bachelor of Computer Applications focusing on programming and software fundamentals.",
    },
  ];

  const [activeTab, setActiveTab] = useState("experience");
  const resumefilterdata = resumedata.filter((data) => data.type === activeTab);

  return (
    <motion.div
      className="w-[90%] sm:w-[70%] lg:w-[50%] rounded-lg h-full p-6 shadow-purple-950 shadow-lg mx-auto bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Buttons */}
      <div className="grid grid-cols-2 text-center mb-6">
        <input
          type="button"
          value="EXPERIENCE"
          onClick={() => setActiveTab("experience")}
          className={`${
            activeTab === "experience"
              ? "bg-[var(--txt-color)] text-white"
              : "bg-transparent"
          } text-xl p-3 rounded-b-xl cursor-pointer transition-all duration-300`}
        />
        <input
          type="button"
          value="QUALIFICATION"
          onClick={() => setActiveTab("qualification")}
          className={`${
            activeTab === "qualification"
              ? "bg-[var(--txt-color)] text-white"
              : "bg-transparent"
          } text-xl p-3 rounded-b-xl cursor-pointer transition-all duration-300`}
        />
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          {resumefilterdata.map((d, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-4 p-4 rounded-lg hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-semibold text-[var(--txt-color)]">{d.Year}</h2>
              <div>
                {d.Title && <h2 className="font-semibold">{d.Title}</h2>}
                {d.Role && <h3 className="font-bold">{d.Role}</h3>}
                {d.Company && <h3>{d.Company}</h3>}
                {d.Place && <h3>{d.Place}</h3>}
                <p className="text-justify text-gray-700 mt-2">{d.Description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
