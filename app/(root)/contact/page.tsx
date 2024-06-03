"use client";
import { CustomeButton } from "@/components";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formEndpoint = "YOUR_FORMSPREE_ENDPOINT"; // Replace with your Formspree endpoint

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    const response = await fetch(formEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      // Handle error
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-40 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4 text-accent">Contact Us</h1>
      {submitted ? (
        <div className="text-green-500">
          Thank you for your message. We will get back to you shortly.
        </div>
      ) : (
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              value={subject}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              value={message}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <CustomeButton text="submit" containerStyles="w-[150px] h-[50px]" />
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
