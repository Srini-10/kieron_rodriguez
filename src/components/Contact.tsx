import { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    response: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [warning, setWarning] = useState("");

  // Check if form has been submitted on initial load
  useEffect(() => {
    const submissionStatus = localStorage.getItem("isSubmitted");
    if (submissionStatus === "true") {
      setIsSubmitted(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // If the form is already submitted, prevent re-submission
    if (isSubmitted) {
      alert("You have already submitted your response.");
      return;
    }

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

      // Store submission status in localStorage
      localStorage.setItem("isSubmitted", "true");
      setIsSubmitted(true); // Update the isSubmitted state

      // Show notification for 5 seconds
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);

      // Reset form data after submission
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

  // Handle input field changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Validate alphabetic input for name field
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
        setWarning(""); // Clear the warning if input is valid
      } else {
        setWarning("Only alphabetic characters are allowed.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full bg-orange-50 lg:pt-0 flex justify-center items-start overflow-hidden pt-10 md:pt-20 pb-10 transition-all duration-500 ease-in-out"
    >
      {/* Notification when form is submitted */}
      <div
        className={`fixed w-[86vw] md:w-[400px] ${
          showNotification ? "top-8 md:top-5" : "-top-16"
        } bg-red-800 backdrop-blur-[2px] bg-opacity-90 text-white text-[14px] md:text-[15px] px-2 md:px-4 py-3 text-center rounded-lg shadow-lg transition-all duration-700`}
      >
        <p>Your response has been submitted successfully!</p>
      </div>

      {/* Contact form */}
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
                    required
                  />
                  {/* Warning message */}
                  {warning && (
                    <p className="mt-2 text-sm text-red-600">{warning}</p>
                  )}
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
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg text-red-700 bg-orange-50 focus:ring-2 focus:ring-red-800 ring-red-800 focus:outline-none"
                    required
                  />
                  {/* Warning message */}
                  {warning && (
                    <p className="mt-2 text-sm text-red-600">{warning}</p>
                  )}
                </div>
              </div>
            )}

            <button
              disabled={isSubmitted}
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-800 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 ring-red-800 flex justify-center items-center"
            >
              {isSubmitting ? (
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : isSubmitted ? (
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
