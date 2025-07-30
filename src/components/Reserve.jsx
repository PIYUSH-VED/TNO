import React, { useState } from "react";

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:", formData);
    alert("Reservation submitted!");
    // You can send the data to a server here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-orange-700">
          Make a Reservation
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded"
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded"
          />
        </div>

        <input
          type="number"
          name="guests"
          min="1"
          max="20"
          required
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Number of Guests"
        />

        <textarea
          name="requests"
          placeholder="Special Requests (Optional)"
          value={formData.requests}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-700 text-white py-3 rounded hover:bg-orange-800 transition"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Reserve;
