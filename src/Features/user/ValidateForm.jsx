const ValidateForm = ( formData, setErrors ) => {
  const newErrors = {};
  if (!formData.name.trim()) newErrors.name = "Name is required.";
  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } 
  
  if (!newErrors.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email.";
  }

  if (!formData.password) {
    newErrors.password = "Password is required.";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
  }
  console.log(newErrors)
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

export default ValidateForm;


