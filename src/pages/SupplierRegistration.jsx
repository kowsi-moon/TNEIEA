 import React, { useState, useEffect } from "react";
  import { ChevronDown } from "lucide-react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  function SupplierRegistration() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [formData, setFormData] = useState({
    
      supplierName: "",
      supplierType:[],
      ownership: "",
      category: [],
      licenseNumber: "",
      companyName: "",
      idProof: "",
      qualification: "",
      gstNo: "",
      registeredAddress: "",
      state: "",
      city: "",
      pincode: "",
      bloodGroup: "",
      dob: "",
      contactNumber: "",
      alternateContactNumber: "",
      mailId: "",
      photo: null,
      logo: null,
      idProofDoc: null,
    });

    const [dropdownOpen, setDropdownOpen] = useState({
    supplierType: false,
    ownership: false,
    state: false,
    city: false,
    category: false,
    bloodGroup: false,
  });


const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [errorMessages, setErrorMessages] = useState({});
const [validationErrors, setValidationErrors] = useState({})
const [successMessage, setSuccessMessage] = useState("");

const [registrationSuccess, setRegistrationSuccess] = useState(false);

const [registeredSupplier, setRegisteredSupplier] = useState({
  supplierName: "",
});

    useEffect(() => {
  getStates();
}, []);


useEffect(() => {
  const handleClickOutside = () => {
    setDropdownOpen({
      supplierType: false,
      ownership: false,
      state: false,
      city: false,
      category: false,
      bloodGroup: false,
    });
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

const getStates = async () => {
  try {
    const response = await axios.get(
      "https://portal.tneiea.in/api/auth/states"
    );

    if (response.data.result) {
      setStates(response.data.data);
    }
  } catch (error) {
    console.log("STATE API ERROR", error);
  }
};

const getCities = async (stateId) => {
  try {
    const formData = new FormData();

    formData.append("state_id", stateId);

    const response = await axios.post(
      "https://portal.tneiea.in/api/auth/city",
      formData
    );

    if (response.data.result) {
      setCities(response.data.data);
    }
  } catch (error) {
    console.log("CITY API ERROR", error);
  }
};
    const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });

  setValidationErrors({
    ...validationErrors,
    [name]: "",
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
const errors = {};

if (formData.supplierType.length === 0) {
  errors.supplierType = "Please select supplier type";
}

if (formData.category.length === 0) {
  errors.category = "Please select category";
}

if (!formData.supplierName.trim()) {
  errors.supplierName = "Please enter supplier name";
}

if (!formData.photo) {
  errors.photo = "Please upload authorised person photo";
}

if (!formData.ownership) {
  errors.ownership = "Please select ownership";
}

if (!formData.companyName.trim()) {
  errors.companyName = "Please enter company name";
}

if (!formData.idProof.trim()) {
  errors.idProof = "Please enter ID proof";
}

if (!formData.idProofDoc) {
  errors.idProofDoc = "Please upload ID proof document";
}

if (!formData.qualification.trim()) {
  errors.qualification = "Please enter qualification";
}

const gstRegex =
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$/;

if (
  formData.gstNo.trim() &&
  !gstRegex.test(formData.gstNo.trim())
) {
  errors.gstNo =
    "Enter valid GST format (Eg: 33WXYZT9876M1Z9)";
}
if (!formData.registeredAddress.trim()) {
  errors.registeredAddress =
    "Please enter registered address";
}

if (!formData.state) {
  errors.state = "Please select state";
}

if (!formData.city) {
  errors.city = "Please select city";
}

if (!formData.pincode.trim()) {
  errors.pincode = "Please enter pincode";
}

if (!formData.bloodGroup) {
  errors.bloodGroup = "Please select blood group";
}

if (!formData.dob) {
  errors.dob = "Please select DOB";
}

if (!formData.contactNumber.trim()) {
  errors.contactNumber =
    "Please enter contact number";
}

if (
  formData.contactNumber.trim() &&
  formData.contactNumber.length !== 10
) {
  errors.contactNumber =
    "Contact number must be 10 digits";
}

if (!formData.mailId.trim()) {
  errors.mailId = "Please enter email";
}

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (
  formData.mailId.trim() &&
  !emailRegex.test(formData.mailId)
) {
  errors.mailId = "Enter valid Email ID";
}


setValidationErrors(errors);

if (Object.keys(errors).length > 0) {

  const firstErrorField = Object.keys(errors)[0];

  let element =
    document.querySelector(`[name="${firstErrorField}"]`) ||
    document.getElementById(firstErrorField);

  if (firstErrorField === "photo") {
    element = document.getElementById("photoContainer");
  }

  if (firstErrorField === "idProofDoc") {
    element = document.getElementById("idProofDocContainer");
  }

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return;
}
    const today = new Date().toISOString().split("T")[0];

  if (formData.dob > today) {
    alert("Future date is not allowed");
    return;
  }

  
    try {
      const form = new FormData();
    
if (formData.ownership === "PARTNERSHIP") {
  if (extraPhotos.photo1) {
    form.append("photo1", extraPhotos.photo1);
  }

  if (extraPhotos.photo2) {
    form.append("photo2", extraPhotos.photo2);
  }

  if (extraPhotos.photo3) {
    form.append("photo3", extraPhotos.photo3);
  }
}


      //  COMMON
      form.append("type", "supplier"); 
      form.append("name", formData.supplierName);
      form.append("ownership", formData.ownership.toUpperCase());
      form.append("companyname", formData.companyName);
      form.append("qualification", formData.qualification);
      form.append("gstno", formData.gstNo);
      form.append("address", formData.registeredAddress);
      form.append("state", formData.stateName);
      form.append("city", formData.city);
      form.append("pincode", formData.pincode);
      form.append("bloodgroup", formData.bloodGroup);
      form.append("dob", formatDate(formData.dob));
      form.append("contactno", formData.contactNumber);
      form.append("contactno2", formData.alternateContactNumber);
      form.append("email", formData.mailId);

      //  SUPPLIER ONLY
form.append(
  "suppliertype",
  formData.supplierType.join(",")
);

form.append(
  "categoryid",
  formData.category.join(",")
);

     
      // FILES
form.append("photo", formData.photo);
form.append("logo", formData.logo);
form.append("idproof", formData.idProof);
form.append("idproofdoc", formData.idProofDoc);

      //  API CALL
      const res = await fetch(
        "https://portal.tneiea.in/api/auth/register2",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

console.log(data);

if (data.result) {

  setRegisteredSupplier({
    supplierName: formData.supplierName,
  });

  setRegistrationSuccess(true);

  setFormData({
  supplierName: "",
  supplierType: [],
  ownership: "",
  category: [],
  licenseNumber: "",
  companyName: "",
  idProof: "",
  qualification: "",
  gstNo: "",
  registeredAddress: "",

  state: "",
  stateName: "",

  city: "",
  pincode: "",
  bloodGroup: "",
  dob: "",
  contactNumber: "",
  alternateContactNumber: "",
  mailId: "",
  photo: null,
  logo: null,
  idProofDoc: null,
});

} else {

  const msg = (data.message || "").toLowerCase();

  if (msg.includes("contact")) {
    alert("Contact Number already exists");
  } 
  else if (msg.includes("email")) {
    alert("Email already exists");
  } 
  else {
    alert(data.message || "Registration failed");
  }


}
    } catch (err) {
  console.error(err);

  if (
    err?.response?.data?.message?.toLowerCase().includes("contact")
  ) {
    alert("Contact Number already exists");
  } 
  else if (
    err?.response?.data?.message?.toLowerCase().includes("email")
  ) {
    alert("Email already exists");
  } 
  else {
    alert("Error submitting form");
  }
}
  };

  const supplierTypes = [
    { id: 1, name: "Transformers" },
    { id: 2, name: "Cables & Wires" },
    { id: 3, name: "Cable Trays" },
    { id: 4, name: "Earthings"},
    { id: 5, name: "HL/LT Switch Gears"},
    {id: 6, name:"Lightings"},
    {id: 7, name: "Panel Builders"},
    {id: 8, name: "Stablizers/ UPS"},
    {id: 9, name: "Accessories"},
    {id: 10, name: "Others"},
    {id: 11, name: "Generators"},
    {id: 12, name:"Meter & Relay Testing"}
  ];


  const categories = [
    { id: 1, name: "Transformers" },
    { id: 2, name: "Cables & Wires" },
    { id: 3, name: "Cable Trays" },
    { id: 4, name: "Earthings" },
    { id: 5, name: "Lightings" },
    { id: 6, name: "Panel Builders" },
    { id: 7, name: "Stabilizers/UPS" },
    { id: 8, name: "Accessories" },
    { id: 9, name: "Others" },
    { id: 10, name: "Generators" },
    { id: 11, name: "Meter & Relay Testing" }
  ];





  const [extraPhotos, setExtraPhotos] = useState({
    photo1: null,
    photo2: null,
    photo3: null,
  });

  const formatDate = (date) => {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return `${d}-${m}-${y}`;
  };

  if (registrationSuccess) {
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-[#f5f7fb] px-4 z-50 overflow-hidden">

      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-xl w-full text-center border border-gray-100">

        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="success"
          className="w-24 h-24 mx-auto mb-5"
        />

        <h2 className="text-4xl font-bold text-green-600 mb-3">
          Successfully Registered
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Your supplier registration has been submitted successfully.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-6">
          <strong>Supplier Name :</strong>{" "}
          {registeredSupplier.supplierName}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-300 rounded-2xl p-5 shadow-sm">
          <p className="text-blue-800 font-semibold text-base leading-7">
            Registration completed successfully.
            <br />
            Our Admin Team will review your application and contact you shortly.
          </p>
        </div>

      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-xl font-semibold shadow-lg transition"
      >
        Back To Home
      </button>

    </section>
  );
}

    return (
       <>
    {/* POPUP
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">
        <div className="bg-white w-[90%] max-w-[320px] rounded-xl p-5 sm:p-6 text-center shadow-lg relative">

          <button
onClick={() => {
  setShowPopup(false);

  if (popupType === "success") {
    navigate("/");
  }
}}
            className="absolute top-2 right-3 text-gray-400 text-xl"
          >
            ✕
          </button>

          <div className="w-16 h-16 mx-auto flex items-center justify-center">
  {popupType === "success" ? (
    <img
      src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
      alt="success"
      className="w-16 h-16"
    />
  ) : (
    <img
      src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
      alt="error"
      className="w-16 h-16"
    />
  )}
</div>

          <h2 className="mt-4 text-xl font-semibold">
            {popupType === "success" ? "Success!" : "Error!"}
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            {popupType === "success"
              ? "Registration completed successfully."
              : "contact number alredy exists"}
          </p>

          <button
  onClick={() => {
    setShowPopup(false);

    if (popupType === "success") {
      navigate("/");
    }
  }}
            className={`mt-5 px-6 py-2 rounded-full border ${
              popupType === "success"
                ? "border-green-500 text-green-600"
                : "border-red-500 text-red-600"
            }`}
          >
           {popupType === "success" ? "OK" : "TRY AGAIN"}
          </button>

        </div>
      </div>
    )} */}

      <section className="w-full min-h-screen bg-[#f5f7fb] py-10 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden">

 <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-10 overflow-visible">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#111827] mb-10">
            Supplier Registration
          </h1>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {successMessage}
            </div>
          )}

          {/* FORM */}
        <form
    onSubmit={handleSubmit}
      noValidate
    className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5"
  >

            {/* Row 1 */}

    {/* Supplier Type */}
<div className="relative">
  <label className="block text-[15px] font-medium text-black mb-2">
    Supplier Type <span className="text-red-500">*</span>
  </label>

  <button
    type="button"
   onClick={(e) => {
  e.stopPropagation();

  setDropdownOpen({
    ...dropdownOpen,
    supplierType: !dropdownOpen.supplierType,
  });
}}
   className={`w-full mt-2 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500
${
  validationErrors.supplierType
    ? "border-red-500"
    : "border-gray-300"
}`}
  >
    <span className="truncate">
      {formData.supplierType.length > 0
        ? supplierTypes
            .filter((item) =>
              formData.supplierType.includes(item.id)
            )
            .map((item) => item.name)
            .join(", ")
        : "Select Supplier Type"}
    </span>

    <ChevronDown
      size={18}
      className={`transition duration-300 ${
        dropdownOpen.supplierType ? "rotate-180" : ""
      }`}
    />
  </button>

  {dropdownOpen.supplierType && (
   <div
  onClick={(e) => e.stopPropagation()}
  className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto"
>

      {supplierTypes.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={formData.supplierType.includes(item.id)}
         onChange={(e) => {
  setFormData((prev) => ({
    ...prev,
    supplierType: e.target.checked
      ? [...prev.supplierType, item.id]
      : prev.supplierType.filter((id) => id !== item.id),
  }));

  // next field click pannumbodhu close aaga
  // setTimeout(() => {
  //   setDropdownOpen((prev) => ({
  //     ...prev,
  //     supplierType: false,
  //   }));
  // }, 200);
}}
          />

          <span>{item.name}</span>
        </label>
      ))}
    </div>
  )}
  {validationErrors.supplierType && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.supplierType}
  </p>
)}
</div>

{/* Category */}
<div className="relative">
  <label className="block text-[15px] font-medium text-black mb-2">
    Category <span className="text-red-500">*</span>
  </label>

  <button
    type="button"
    onClick={(e) => {
  e.stopPropagation();

  setDropdownOpen({
    ...dropdownOpen,
    category: !dropdownOpen.category,
  });
}}
    className={`w-full mt-2 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500
${
  validationErrors.category
    ? "border-red-500"
    : "border-gray-300"
}`}
  >
    <span className="truncate">
      {formData.category.length > 0
        ? categories
            .filter((item) =>
              formData.category.includes(item.id)
            )
            .map((item) => item.name)
            .join(", ")
        : "Select Category"}
    </span>

    <ChevronDown
      size={18}
      className={`transition duration-300 ${
        dropdownOpen.category ? "rotate-180" : ""
      }`}
    />
  </button>

  {dropdownOpen.category && (
    <div
  onClick={(e) => e.stopPropagation()}
  className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto"
>

      {categories.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={formData.category.includes(item.id)}
          onChange={(e) => {
  setFormData((prev) => ({
    ...prev,
    category: e.target.checked
      ? [...prev.category, item.id]
      : prev.category.filter((id) => id !== item.id),
  }));
}}

  // setDropdownOpen((prev) => ({
  //   ...prev,
  //   category: false,
  // }));
          />

          <span>{item.name}</span>
        </label>
      ))}
    </div>
  )}

  {validationErrors.category && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.category}
  </p>
)}
</div>

    {/* Supplier Name */}
    <div>
      <label className="block text-[15px] font-medium text-black mb-">
        Supplier Name <span className="text-red-500">*</span>
      </label>
    <input
                type="text"
                name="supplierName"
                placeholder="Enter Name"
                value={formData.supplierName}
                onChange={handleChange}
                required
              className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.supplierName
    ? "border-red-500"
    : "border-gray-300"
}`}
              />

              {validationErrors.supplierName && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.supplierName}
  </p>
)}

    </div>

    {/* Authorised Person */}
   <div
  id="photoContainer"
  className={validationErrors.photo ? "scroll-mt-32" : ""}
>
  <label className="text-sm font-semibold text-black">
    Authorised Person 1 <span className="text-red-600">*</span>
  </label>

  <label className={`mt-1 flex items-center border rounded-lg overflow-hidden cursor-pointer
${
  validationErrors.photo
    ? "border-red-500"
    : "border-gray-300"
}`}>
    <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
      Choose File
    </span>

    <span className="px-4 text-sm text-gray-600 truncate flex-1">
      {formData.photo ? formData.photo.name : "Upload Photo"}
    </span>

    <input
      id="photo"
  name="photo"
  type="file"
  accept=".jpg,.jpeg,.png"
   onChange={(e) => {
  const file = e.target.files[0];

  if (file && file.size > 3 * 1024 * 1024) {
    setValidationErrors((prev) => ({
      ...prev,
      photo: "File size should not exceed 3 MB",
    }));
    e.target.value = "";
    return;
  }

  setValidationErrors((prev) => ({
    ...prev,
    photo: "",
  }));

  setFormData({
    ...formData,
    photo: file,
  });
}}
      className="hidden"
    />
  
  </label>
    {validationErrors.photo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.photo}
  </p>
)}

  <p className="text-xs text-gray-500 mt-2">
    Allowed: JPG, JPEG, PNG | Max size: 3 MB
  </p>
    </div>

   {/* Ownership */}
<div>
  <div className="relative min-w-0">
    <label className="text-sm font-semibold text-black">
      Ownership <span className="text-red-600">*</span>
    </label>

    <button
      type="button"
     onClick={(e) => {
  e.stopPropagation();

  setDropdownOpen({
    ...dropdownOpen,
    ownership: !dropdownOpen.ownership,
  });
}}
   className={`w-full mt-1 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500
${
  validationErrors.ownership
    ? "border-red-500"
    : "border-gray-300"
}`}
    >
      <span className="truncate">
        {
          formData.ownership === "PROPRIETOR"
            ? "PROPRIETOR"
            : formData.ownership === "PARTNERSHIP"
            ? "PARTNERSHIP"
            : formData.ownership === "LIMITED CONCERN"
            ? "LIMITED CONCERN"
            : "Select Ownership"
        }
      </span>

      <ChevronDown
        size={18}
        className={`transition duration-300 ${
          dropdownOpen.ownership ? "rotate-180" : ""
        }`}
      />
    </button>

    {dropdownOpen.ownership && (
    <div
  onClick={(e) => e.stopPropagation()}
  className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden"
>

        {[
          { value: "PROPRIETOR", label: "PROPRIETOR" },
          { value: "PARTNERSHIP", label: "PARTNERSHIP" },
          { value: "LIMITED CONCERN", label: "LIMITED CONCERN" },
        ].map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                ownership: item.value,
              });

              setExtraPhotos({
                photo1: null,
                photo2: null,
                photo3: null,
              });

              setDropdownOpen({
                ...dropdownOpen,
                ownership: false,
              });
            }}
            className="w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600"
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </div>
  {validationErrors.ownership && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.ownership}
  </p>
)}
</div>

{/* ONLY FOR PARTNERSHIP */}
{formData.ownership === "PARTNERSHIP" && (
  <>
    <div>
      <label className="text-sm font-semibold text-black">
        Authorised Person 2
      </label>

      <label className="mt-2 flex items-center border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
        <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
          Choose File
        </span>

        <span className="px-4 text-sm text-gray-600 truncate flex-1">
          {extraPhotos.photo1
            ? extraPhotos.photo1.name
            : "Upload Photo"}
        </span>

        <input
          id="photo"
  name="photo"
  type="file"
  accept=".jpg,.jpeg,.png"
        onChange={(e) => {
  const file = e.target.files[0];

  if (file && file.size > 3 * 1024 * 1024) {
    setValidationErrors((prev) => ({
      ...prev,
     photo1: "File size should not exceed 3 MB",
    }));
    e.target.value = "";
    return;
  }

  setValidationErrors((prev) => ({
    ...prev,
    photo: "",
  }));

setExtraPhotos({
  ...extraPhotos,
  photo1: file,
});
}}
          className="hidden"
        />
      </label>
      {validationErrors.photo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.photo}
  </p>
)}

      <p className="text-xs text-gray-500 mt-1">
        Allowed: JPG, JPEG, PNG | Max size: 3 MB
      </p>
    </div>

    <div>
      <label className="text-sm font-semibold text-black">
        Authorised Person 3
      </label>

      <label className=" flex mt-2 items-center border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
        <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
          Choose File
        </span>

        <span className="px-4 text-sm text-gray-600 truncate flex-1">
          {extraPhotos.photo2
            ? extraPhotos.photo2.name
            : "Upload Photo"}
        </span>

        <input
          id="photo2"
          name="photo2"
          type="file"
          accept=".jpg,.jpeg,.png"
        onChange={(e) => {
  const file = e.target.files[0];

  if (file && file.size > 3 * 1024 * 1024) {
    setValidationErrors((prev) => ({
      ...prev,
     photo2: "File size should not exceed 3 MB",
    }));
    e.target.value = "";
    return;
  }

  setValidationErrors((prev) => ({
    ...prev,
    photo: "",
  }));

 setExtraPhotos({
  ...extraPhotos,
  photo2: file,
});
}}
          className="hidden"
        />
      </label>
      {validationErrors.photo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.photo}
  </p>
)}

      <p className="text-xs text-gray-500 mt-1">
        Allowed: JPG, JPEG, PNG | Max size: 3 MB
      </p>
    </div>

    <div>
      <label className="text-sm font-semibold text-black">
        Authorised Person 4
      </label>

      <label className="mt-2 flex items-center border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
        <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
          Choose File
        </span>

        <span className="px-4 text-sm text-gray-600 truncate flex-1">
          {extraPhotos.photo3
            ? extraPhotos.photo3.name
            : "Upload Photo"}
        </span>

        <input
          id="photo3"
          name="photo3"
          type="file"
          accept=".jpg,.jpeg,.png"
         onChange={(e) => {
  const file = e.target.files[0];

  if (file && file.size > 3 * 1024 * 1024) {
    setValidationErrors((prev) => ({
      ...prev,
     photo3: "File size should not exceed 3 MB"
    }));
    e.target.value = "";
    return;
  }

  setValidationErrors((prev) => ({
    ...prev,
    photo: "",
  }));

  setExtraPhotos({
  ...extraPhotos,
  photo3: file,
});
}}
          className="hidden"
        />
      </label>
      {validationErrors.photo3 && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.photo3}
  </p>
)}

      <p className="text-xs text-gray-500 mt-1">
        Allowed: JPG, JPEG, PNG | Max size: 3 MB
      </p>
    </div>
  </>
)}

    {/* Company Name */}
    <div>
      <label className="block text-[14px] font-medium text-black ">
        Company Name <span className="text-red-500">*</span>
      </label>

     <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
               className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.companyName
    ? "border-red-500"
    : "border-gray-300"
}`}
              />
{validationErrors.companyName && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.companyName}
  </p>
)}
    </div>

    {/* Logo */}
    <div>
     <label className="block text-[15px] font-medium text-black">
  Logo
</label>

<label className="mt-1 flex items-center border border-gray-300 rounded-lg overflow-hidden cursor-pointer w-full">
  <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
    Choose File
  </span>

  <span className="px-4 text-sm text-gray-600 truncate flex-1">
   {formData.logo ? formData.logo.name : "No file chosen"}
  </span>

  <input
    type="file"
    accept=".jpg,.jpeg,.png"
 onChange={(e) => {
  const file = e.target.files[0];

 if (file && file.size > 3 * 1024 * 1024) {
  setValidationErrors((prev) => ({
    ...prev,
    logo: "File size should not exceed 3 MB",
  }));

  e.target.value = "";
  return;
}

setValidationErrors((prev) => ({
  ...prev,
  logo: "",
}));

  setFormData({
    ...formData,
    logo: file,
  });
}}
    className="hidden"
  />
</label>
{validationErrors.logo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.logo}
  </p>
)}

<p className="text-[12px] text-gray-600 mt-1">
  Allowed: JPG, JPEG, PNG | Max size: 3 MB
</p>
    </div>

    {/* ID Proof */}
    <div>
      <label className="block text-[15px] font-medium text-black mt-2">
        ID Proof <span className="text-red-500">*</span>
      </label>

     
             <input
  type="text"
  name="idProof"
  placeholder="Aadhaar Card / PAN Card "
  value={formData.idProof}
  onChange={handleChange}
  required
 className={`w-full mt-1 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.idProof
    ? "border-red-500"
    : "border-gray-300"
}`}
/>

{validationErrors.idProof && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.idProof}
  </p>
)}

    </div>

    {/* ID Proof Document */}
   <div>
   <label className="text-sm font-semibold text-black">
    ID Proof Document <span className="text-red-600">*</span>
  </label>

  {/* File box */}
  <label
  id="idProofDocContainer"
  className={`mt-2 flex items-center border rounded-lgoverflow-hidden cursor-pointer
${
  validationErrors.idProofDoc
    ? "border-red-500"
    : "border-gray-300"
}`}>

    {/* Button */}
    <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
      Choose File
    </span>

    {/* File name */}
    <span className="px-4 text-sm text-gray-600 truncate flex-1">
     {formData.idProofDoc
  ? formData.idProofDoc.name
  : "No file chosen"}
    </span>

    {/* Hidden input */}
   <input
  type="file"
  accept=".pdf"
  required
  className="hidden"
 
 onChange={(e) => {
  const file = e.target.files[0];

  if (file && file.size > 3 * 1024 * 1024) {
    setValidationErrors((prev) => ({
      ...prev,
      idProofDoc: "File size should not exceed 3 MB",
    }));
    e.target.value = "";
    return;
  }

  setValidationErrors((prev) => ({
    ...prev,
    idProofDoc: "",
  }));

  setFormData({
    ...formData,
    idProofDoc: file,
  });
}}
/>


  </label>
  {validationErrors.idProofDoc && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.idProofDoc}
  </p>
)}
<p className="text-[12px] text-gray-600 mt-1">
  Allowed: PDF | Max size: 3 MB
</p>


  </div>

    {/* Qualification */}
    <div>
      <label className="block text-[15px] font-medium text-black mt-2 ">
        Qualification <span className="text-red-500">*</span>
      </label>

      <input
      type="text"
      name="qualification"
      placeholder="Enter Qualification"
      value={formData.qualification}
      onChange={handleChange}
      required
     className={`w-full mt-1 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.qualification
    ? "border-red-500"
    : "border-gray-300"
}`}
    />

    {validationErrors.qualification && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.qualification}
  </p>
)}

    </div>

    {/* GST No */}
    <div>
      <label className="block text-[15px] font-medium text-black mt-2">
        GST No
      </label>

      <input
      type="text"
      name="gstNo"
      placeholder="Enter GST Number"
      value={formData.gstNo}
     onChange={(e) => {
  const value = e.target.value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  setFormData({
    ...formData,
    gstNo: value,
  });

  const gstRegex =
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][A-Z0-9]Z[A-Z0-9]$/;

  let error = "";

if (value.length > 0) {
  if (value.length < 15) {
    error =
      "GST number must be 15 characters (Eg: 33WXYZT9876M1Z9)";
  } else if (!gstRegex.test(value)) {
    error = "Enter valid GST format";
  }
}

  setValidationErrors((prev) => ({
    ...prev,
    gstNo: error,
  }));
}}
     
      maxLength={15}
    className={`w-full mt-1 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.gstNo
    ? "border-red-500"
    : "border-gray-300"
}`}
    />
    
    {validationErrors.gstNo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.gstNo}
  </p>
)}

    </div>

    {/* Registered Address */}
    <div>
      <label className="block text-[15px] font-medium text-black  mt-2 ">
        Registered Address <span className="text-red-500">*</span>
      </label>

      <textarea
      rows="2"
      name="registeredAddress"
      value={formData.registeredAddress}
      onChange={handleChange}
      required
     className={`w-full mt-1 border rounded-sm px-4 py-3 text-[16px] resize-none outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.registeredAddress
    ? "border-red-500"
    : "border-gray-300"
}`}
    ></textarea>
    {validationErrors.registeredAddress && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.registeredAddress}
  </p>
)}

    </div>

    {/* State */}
   <div>
  <label className="block text-sm font-medium">
    State <span className="text-red-500">*</span>
  </label>

 <select
    name="state"
    value={formData.state}
   onChange={(e) => {
  const selectedStateId = e.target.value;

  const selectedState = states.find(
    (state) => String(state.id) === selectedStateId
  );

  setFormData({
    ...formData,
    state: selectedStateId,
    stateName: selectedState?.name || "",
    city: "",
  });

  setValidationErrors({
    ...validationErrors,
    state: "",
  });

  getCities(selectedStateId);
}}
    className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500 accent-red-500
${
  validationErrors.state
    ? "border-red-500"
    : "border-gray-300"
}`}
>
    <option value="">Select State</option>

    {states.map((state) => (
      <option key={state.id} value={state.id}>
        {state.name}
      </option>
    ))}
  </select>
{validationErrors.state && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.state}
  </p>
)}
</div>

    {/* City */}
<div>
  <label className="block text-sm font-medium">
    City <span className="text-red-500">*</span>
  </label>

  <select
  name="city"
  value={formData.city}
  onChange={(e) => {
    setFormData({
      ...formData,
      city: e.target.value,
    });
    setValidationErrors({
  ...validationErrors,
  city: "",
});
  }}
  size={1}
 className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500 accent-red-500
${
  validationErrors.city
    ? "border-red-500"
    : "border-gray-300"
}`}
>
  <option value="">Select City</option>

  {cities.map((city) => (
    <option key={city.id} value={city.city}>
      {city.city}
    </option>
  ))}
</select>
{validationErrors.city && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.city}
  </p>
)}
</div>

    {/* Pincode */}
    <div>
      <label className="block text-[15px] font-medium text-black mt-2 ">
        Pincode <span className="text-red-500">*</span>
      </label>

       <input
  type="text"
  name="pincode"
  placeholder="Enter Pincode"
  value={formData.pincode}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 6) {
      setFormData({
        ...formData,
        pincode: value,
      });
    }
  }}
  required
  maxLength={6}
 className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.pincode
    ? "border-red-500"
    : "border-gray-300"
}`}
/>
{validationErrors.pincode && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.pincode}
  </p>
)}

    </div>

    {/* Blood Group */}
  <div className="relative">
      <label className="block text-[15px] font-medium text-black mb-2">
        Blood Group
      </label>
    <button
      type="button"
   onClick={(e) => {
  e.stopPropagation();

  setDropdownOpen({
    ...dropdownOpen,
    bloodGroup: !dropdownOpen.bloodGroup,
  });
}}
    className={`w-full mt-2 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500 outline-none focus:ring-2 focus:ring-red-500 overflow-hidden
${
  validationErrors.bloodGroup
    ? "border-red-500"
    : "border-gray-300"
}`}
    >
      <span className="truncate">
        {formData.bloodGroup || "Select Blood Group"}
      </span>

      <ChevronDown
        size={18}
        className={`transition duration-300 flex-shrink-0 ${
          dropdownOpen.bloodGroup ? "rotate-180" : ""
        }`}
      />
    </button>

    {dropdownOpen.bloodGroup && (
  <div
  onClick={(e) => e.stopPropagation()}
  className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] max-h-60 overflow-y-auto"
>

        {[
          "A+",
          "A-",
          "B+",
          "B-",
          "O+",
          "O-",
          "AB+",
          "AB-",
        ].map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                bloodGroup: item,
              });

              setValidationErrors({
  ...validationErrors,
  bloodGroup: "",
});

              setDropdownOpen({
                ...dropdownOpen,
                bloodGroup: false,
              });
            }}
            className="w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
          >
            {item}
          </button>
        ))}
        </div>
    )}
    {validationErrors.bloodGroup && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.bloodGroup}
  </p>
)}
  </div>


    {/* Date of Birth */}
    <div>
      <label className="block text-[15px] font-medium text-black mb-2">
        Date of Birth
      </label>

      <input
  type="date"
  name="dob"
  value={formData.dob}
  onChange={(e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();

    if (selectedDate > today) {
      e.target.setCustomValidity(
        "Future date of birth is not allowed."
      );
      e.target.reportValidity();
    } else {
      e.target.setCustomValidity("");

      setFormData({
        ...formData,
        dob: e.target.value,
      });
    }
  }}
  required
 className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.dob
    ? "border-red-500"
    : "border-gray-300"
}`}
/>

{validationErrors.dob && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.dob}
  </p>
)}

    </div>

    {/* Contact Number */}
    <div>
      <label className="block text-[15px] font-medium text-black mb-2">
        Contact Number <span className="text-red-500">*</span>
      </label>

      <input
  type="text"
  name="contactNumber"
  value={formData.contactNumber}
 onChange={(e) => {
  const value = e.target.value.replace(/\D/g, "");

  if (value.length <= 10) {
    setFormData({
      ...formData,
      contactNumber: value,
    });

    setValidationErrors((prev) => ({
      ...prev,
      contactNumber:
        value.length > 0 && value.length < 10
          ? "Contact number must be 10 digits"
          : "",
    }));
  }
}}
onBlur={() => {
  if (
    formData.contactNumber &&
    formData.contactNumber.length < 10
  ) {
    setValidationErrors((prev) => ({
      ...prev,
      contactNumber: "Contact number must be 10 digits",
    }));
  }
}}
  required
  maxLength={10}
   className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.contactNumber
    ? "border-red-500"
    : "border-gray-300"
}`}
/>
{validationErrors.contactNumber && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.contactNumber}
  </p>
)}

    </div>

    {/* Alternate Contact Number */}
    <div>
      <label className="block text-[15px] font-medium text-black mb-2">
        Alternate Contact Number
      </label>
 <input
  type="text"
  name="alternateContactNumber"
  value={formData.alternateContactNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData({
        ...formData,
        alternateContactNumber: value,
      });
    }
  }}
  maxLength={10}
  className="w-full  border border-gray-300 rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
/>

    </div>

    {/* Email */}
    <div>
      <label className="block text-[15px] font-medium text-black mb-2">
        Email <span className="text-red-500">*</span>
      </label>

     <input
  type="email"
  name="mailId"
  value={formData.mailId}
  onChange={(e) => {
    const value = e.target.value;

    setFormData({
      ...formData,
      mailId: value,
    });

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setValidationErrors((prev) => ({
      ...prev,
      mailId:
        value.length > 0 &&
        !emailRegex.test(value)
          ? "Enter valid Email ID"
          : "",
    }));
  }}
  onBlur={() => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.mailId &&
      !emailRegex.test(formData.mailId)
    ) {
      setValidationErrors((prev) => ({
        ...prev,
        mailId: "Enter valid Email ID",
      }));
    }
  }}
  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
  ${
    validationErrors.mailId
      ? "border-red-500"
      : "border-gray-300"
  }`}
/>
  {validationErrors.mailId && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.mailId}
  </p>
)}

    </div>

        
            {/* Submit */}
            <div className="md:col-span-3 flex justify-center pt-6">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-10 py-3 rounded-sm font-medium shadow-sm"
              >
                Submit
              </button>
            </div>

            
          </form>
          </div>
      </section>
      </>
        );
  }

  export default SupplierRegistration;