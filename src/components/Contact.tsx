import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    response: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmittedText, setShowSubmittedText] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.response) {
      alert("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to the backend
      await axios.post(
        "https://kieron-rodriguez-backend.vercel.app/api/send-email",
        formData
      );

      // Show submitted text for 2 seconds
      setShowSubmittedText(true);
      setTimeout(() => setShowSubmittedText(false), 2000);

      // Reset form
      setFormData({
        name: "",
        members: "",
        response: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full bg-orange-50 lg:pt-0 flex justify-center items-start overflow-hidden pt-10 md:pt-20 pb-10 transition-all duration-500 ease-in-out"
    >
      <div className="lg:relative mx-auto w-[320px] lg:w-[1300px] lg:mt-10 z-50 flex flex-col justify-center gap-y-32 lg:gap-12 items-center">
        <div className="text-center text-red-900 lg:text-start">
          <h1 className="text-[36px] lg:text-[80px] -rotate-1.5 whisper-medium z-10 text-start">
            Kindly RSVP by Dec 6th
          </h1>
        </div>

        <div className="p-6 bg-orange-50 -mt-24 lg:-mt-8 lg:mr-10 w-[90vw] lg:w-full max-w-md z-[9999] transition-all duration-500 ease-in-out">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="response"
                  value="Accept_With_Joy"
                  onChange={handleChange}
                  checked={formData.response === "Accept_With_Joy"}
                  className="mr-2"
                  required
                />
                Accept with Joy
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="response"
                  value="Celebrate_From_AFAR"
                  onChange={handleChange}
                  checked={formData.response === "Celebrate_From_AFAR"}
                  className="mr-2"
                  required
                />
                Celebrate from Afar
              </label>
            </div>

            {/* Input fields for Accept_With_Joy response */}
            {formData.response === "Accept_With_Joy" && (
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
                    required
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
                    required
                  />
                </div>
              </div>
            )}

            {/* Input field for Celebrate_From_AFAR response */}
            {formData.response === "Celebrate_From_AFAR" && (
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
                    onChange={(e) => {
                      const input = e.target.value;
                      // Allow only alphabetic characters
                      if (/^[a-zA-Z\s]*$/.test(input)) {
                        handleChange(e); // Update state only if the input is valid
                      }
                    }}
                    className="w-full px-4 py-2 border rounded-lg text-red-700 bg-orange-50 focus:ring-2 focus:ring-red-800 ring-red-800 focus:outline-none"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-800 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 ring-red-800 flex justify-center items-center"
            >
              {isSubmitting ? (
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : showSubmittedText ? (
                "Submitted!"
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <h1 className="flex cinzel-medium justify-center text-center items-start text-[12px] lg:text-[15px] w-[305px] lg:w-[600px] lg:mt-0 -mt-20 text-red-950">
          ✈️ While your presence is the real treasure, to make our travels
          smoother, we'd appreciate it if your blessings were non-physical
          gifts.
        </h1>
      </div>
    </div>
  );
};

export default Contact;
