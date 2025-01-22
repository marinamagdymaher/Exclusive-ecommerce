export default function LinkProfile() {
  return (//rounded-lg shadow-md
    <div className="p-6 space-y-6 ">
      {/* Manage My Account Section */}
      <div>
        <h2 className="text-lg font-semibold text-grey-800 mb-3">
          Manage My Account
        </h2>
        <ul className="space-y-2 px-5">
          <li className="text-grey-700  cursor-pointer">
            My Profile
          </li>
          <li className="text-grey-700 cursor-pointer">
            Address Book
          </li>
          <li className="text-grey-700 cursor-pointer">
            My Payment Options
          </li>
        </ul>
      </div>

      {/* My Orders Section */}
      <div>
        <h2 className="text-lg font-semibold text-grey-800 mb-3">My Orders</h2>
        <ul className="space-y-2 px-5">
          <li className="text-grey-700  cursor-pointer">
            My Returns
          </li>
          <li className="text-grey-700  cursor-pointer">
            My Cancellations
          </li>
        </ul>
      </div>

      {/* Wishlist Section */}
      <div>
        <h2 className="text-lg font-semibold text-grey-800 mb-3">
          My Wishlist
        </h2>
      </div>
    </div>
  );
}
