export default function LinkProfile() {
  const leftLinks = [
    {
      header: "Manage My Account",
      link1: "My Profile",
      link2: "Address Book",
      link3: "My Payment Options",
    },
    {
      header: "My Orders",
      link1: "My Returns",
      link2: "My Cancellations",
    },
    {
      header: "My Wishlist",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {leftLinks.map((item, i) => (
        <div key={i}>
          <h2 className="text-lg font-semibold text-grey-800 mb-3">
            {item.header}
          </h2>
          <ul className="space-y-2 px-5">
            {item.link1 && (
              <li className="text-red-200 cursor-pointer hover:underline">
                {item.link1}
              </li>
            )}
            {item.link2 && (
              <li className="text-grey-500 cursor-pointer hover:underline">
                {item.link2}
              </li>
            )}
            {item.link3 && (
              <li className="text-grey-500 cursor-pointer hover:underline">
                {item.link3}
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
