export const setLocalStorage = (formData) => {
  localStorage.setItem("userData", JSON.stringify(formData)) || [];
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : [];
};
