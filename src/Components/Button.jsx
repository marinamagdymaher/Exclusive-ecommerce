export default function Button({
  buttonTitle,
  colorBgButton = "bg-red-200",
  colorText = "text-white",
  handleButton,
}) {
  return (
    // bg-red-200
    <button
      onClick={() => handleButton()}
      className={`${colorBgButton} ${colorText} sm:truncate  border border-grey-300 font-semibold py-3 px-8 my-8 rounded`}
    >
      {/* View All Products */}
      {buttonTitle}
    </button>
  );
}
