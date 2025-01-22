export default function FormBilling() {
  const form = [
    {
      title: "First Name",
      type: "text",
      id: "fname",
    },
    {
      title: "Company Name",
      type: "text",
      id: "cname",
    },
    {
      title: "Street Address*",
      type: "text",
      id: "street",
    },
    {
      title: "Apartment, floor, etc. (optional)",
      type: "text",
      id: "floor",
    },
    {
      title: "Town/City*",
      type: "text",
      id: "town",
    },
    {
      title: "Phone Number*",
      type: "text",
      id: "phone",
    },
    {
      title: "Email Address*",
      type: "email",
      id: "email",
    },
  ];


  return (
    <div>
      <h4 className="text-3xl font-bold">Billing Details</h4>
      <form className="w-full max-w-sm space-y-4 py-5">
        {form.map((item, i) => (
          <div key={i}>
            <label htmlFor={item.id} className="block mb-2 font-medium">
              {item.title}
            </label>
            <input
              id={item.id}
              type={item.type}
              className="w-full p-3 bg-secondary rounded-md focus:ring-2 focus:ring-red-400"
            />
          </div>
        ))}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="save-info"
            className="w-4 h-4 accent-red-200"
          />
          <label htmlFor="save-info" className="text-sm font-medium">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}