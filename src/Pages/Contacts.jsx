import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="py-9 px-3">
      <LinkContact />
      <div className="flex flex-col md:flex-row justify-between gap-8 p-9">
          <LeftContact />
          <FormContacts />
      </div>
    </div>
  );
}

function LinkContact() {
  return (
    <ul className="flex p-5 mt-8">
      <li>
        {" "}
        <NavLink to="/" className="font-bold text-grey-500 ">
          Home
        </NavLink>
      </li>{" "}
      <li>
        <pre> / </pre>
      </li>
      <li>
        {" "}
        <NavLink to="/contacts" className="font-bold ">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

function LeftContact() {
  return (
    <div className="flex flex-col md:w-1/3 space-y-6 bg-white p-6 rounded-lg shadow-lg">
      {/* Phone Section */}
      <div className="border-b border-grey-300 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-white bg-red-200 p-4 rounded-full"
          />
          <h4 className="text-lg font-bold">Call To Us</h4>
        </div>
        <p className="text-grey-800 pb-4">
          We are available 24/7, 7 days a week.
        </p>
        <p className="text-grey-800 pb-4">Phone: +8801611112222</p>
      </div>

      {/* Email Section */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white bg-red-200 p-4 rounded-full"
          />
          <h4 className="text-lg font-bold">Write To Us</h4>
        </div>
        <p className="text-grey-800 pb-4">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-grey-800 pb-4">Emails: customer@exclusive.com</p>
        <p className="text-grey-800 pb-4">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
}

function FormContacts() {
  return (
    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
      {/* Contact Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
        <input
          type="text"
          placeholder="Your Name *"
          required
          className="p-3 bg-secondary rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Your Email *"
          required
          className="p-3 bg-secondary rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="tel"
          placeholder="Your Phone *"
          required
          className="p-3 bg-secondary rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <textarea
          placeholder="Your Message"
          className="p-3 bg-secondary rounded-md w-full h-60 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="bg-red-200 text-white py-2 px-6 rounded shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
