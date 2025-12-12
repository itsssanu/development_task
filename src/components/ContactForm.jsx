import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // validation functions
  const validate = (values) => {
    const e = { name: "", email: "", message: "" };

    if (!values.name.trim() || values.name.trim().length < 2) {
      e.name = "Name must be at least 2 characters";
    }

    // email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(values.email.trim())) {
      e.email = "Please enter a valid email address";
    }

    if (!values.message.trim() || values.message.trim().length < 20) {
      e.message = "Message must be at least 20 characters";
    }

    return e;
  };

  // update errors whenever form changes
  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isFormValid = () => {
    const e = validate(form);
    return !e.name && !e.email && !e.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const eobj = validate(form);
    if (eobj.name || eobj.email || eobj.message) {
      setErrors(eobj);
      return;
    }

    // Submit
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const payload = {
      id: Date.now(),
      ...form,
      timestamp: new Date().toISOString()
    };
    submissions.push(payload);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });

    setSuccessMsg("Thank you! Your message has been received. We'll get back to you soon.");

    setTimeout(() => setSuccessMsg(""), 4000);
  };


  return (
    <section className="w-full py-16 px-4" id="contact-form">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-12 md:p-16 shadow-xl bg-gradient-to-r from-[#003b73] to-[#0067a5]">
          <h2 className="text-xl md:text-xl lg:text-4xl text-center text-white font-light mb-8">
            Let's Work Together To Shape A Brighter Future!
          </h2>

          {successMsg && (
            <div className="max-w-3xl mx-auto mb-6 px-6 py-3 rounded-full bg-white bg-opacity-90 text-center text-[#0A387A] font-medium shadow">
              {successMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            {/* Two-column grid for inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">

              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                  className={`w-full bg-white rounded-full px-6 py-4 text-gray-700 outline-none shadow-md transition-all ${touched.name && errors.name ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-[#bde9ff]"
                    }`}
                />
                {touched.name && errors.name && (
                  <p className="text-red-200 text-sm mt-2"> {errors.name} </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mail"
                  className={`w-full bg-white rounded-full px-6 py-4 text-gray-700 outline-none shadow-md transition-all ${touched.email && errors.email ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-[#bde9ff]"
                    }`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-200 text-sm mt-2"> {errors.email} </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your message..."
                rows={6}
                className={`w-full bg-white rounded-xl px-6 py-4 text-gray-700 outline-none shadow-md transition-all resize-none ${touched.message && errors.message ? "ring-2 ring-red-300" : "focus:ring-2 focus:ring-[#bde9ff]"
                  }`}
              />
              {touched.message && errors.message && (
                <p className="text-red-200 text-sm mt-2"> {errors.message} </p>
              )}
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`inline-block ${isFormValid() && !isSubmitting ? "bg-[#FFD812] hover:translate-y-[-2px]" : "bg-[#FFD600] opacity-60 cursor-not-allowed"
                  } text-gray-900 font-medium px-10 py-3 rounded-full shadow-md transition-all duration-200`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
