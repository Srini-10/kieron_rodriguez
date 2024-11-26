import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    response: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const googleScriptUrl =
        "https://script.google.com/macros/s/AKfycbyo6rwUBvJ0U_U-vdnL7qZcnYbAb6mHhKNvO8_uKHWHNfa55WANYhzK6-DxfypuYu2V/exec";

      if (!formData.response) {
        alert("Please fill all required fields.");
        return;
      }

      console.log("Form data:", formData);

      const response = await axios.post(googleScriptUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 && response.data === "success") {
        alert("Data submitted successfully!");
      } else {
        console.error("Unexpected response:", response.data);
        alert("Unexpected response from the server.");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.code === "ERR_NETWORK") {
        alert(
          "Network error. Please check your internet connection or CORS policy."
        );
      } else {
        alert("Failed to submit data. Please try again.");
      }
    }

    setFormData({
      name: "",
      members: "",
      response: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      id="contact"
      className="relative w-full h-[550px] bg-orange-50 lg:h-[900px] pt-20 lg:pt-0 flex justify-center items-start overflow-hidden"
    >
      <div className="lg:relative mx-auto w-[94vw] lg:w-[1300px] h-auto lg:h-[800px] lg:mt-10 z-50 flex flex-col justify-center gap-32 items-center">
        <div className="text-center text-red-900 lg:text-start">
          <h1 className="text-[36px] lg:text-[80px] -rotate-1.5 whisper-medium z-10 text-start">
            Kindly RSVP by Dec 6th.
          </h1>
        </div>

        <div className="p-6 bg-orange-50 border-[1px] border-red-800 border-opacity-25 -mt-24 lg:mr-10 rounded-lg shadow-lg w-[94vw] lg:w-full max-w-md z-[9999]">
          <h2 className="text-3xl font-semibold mb-4 text-red-800">
            RSVP Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h3 className="text-red-900 font-medium mb-2">Response</h3>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="response"
                  value="accept_with_joy"
                  onChange={handleChange}
                  checked={formData.response === "accept_with_joy"}
                  className="mr-2"
                />
                Accept with Joy
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="response"
                  value="celebrate_from_afar"
                  onChange={handleChange}
                  checked={formData.response === "celebrate_from_afar"}
                  className="mr-2"
                />
                Celebrate from Afar
              </label>
            </div>

            {formData.response === "accept_with_joy" && (
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-red-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg text-red-700 bg-orange-50 focus:ring-2 focus:ring-red-800 ring-red-800 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="members"
                    className="block text-sm font-medium text-red-900"
                  >
                    Number of Guests Attending
                  </label>
                  <input
                    type="number"
                    id="members"
                    name="members"
                    value={formData.members}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg text-red-700 bg-orange-50 focus:ring-2 focus:ring-red-800 ring-red-800 focus:outline-none"
                    placeholder="Enter number of guests"
                    min="1"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-800 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 ring-red-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
