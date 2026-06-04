import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



function ServiceProvider() {
const [formData, setFormData] = useState({
  ServiceProviderName: "",
  ServiceProviderType: "",
  referenceby1: "",
  referenceby2: "",
  photo: "",
  photo1: "",
  photo2: "",
  photo3: "",
  ownership: "",
  companyName: "",
  logo: "",
  idProofDoc: "",
  idProof: "",
  qualification: "",
  gstNo: "",
  Address: "",
  state: "",
  stateName: "",
  city: "",
  pincode: "",
  bloodGroup: "",
  dob: "",
  contactNumber: "",
  alternateContactNumber: "",
  mailId: "",
});

const navigate = useNavigate();

const [validationErrors, setValidationErrors] = useState({})
const [successMessage, setSuccessMessage] = useState("");
const [showPopup, setShowPopup] = useState(false);
const [popupMessage, setPopupMessage] = useState("");
const [popupType, setPopupType] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState({
  ServiceProviderType: false,
  ownership: false,
  state: false,
  city: false,
  bloodGroup: false,
});


const [extraPhotos, setExtraPhotos] = useState({
  photo1: null,
  photo2: null,
});

const ServiceProvidertype = [
  { id: 1, name: "EHV (Extra High Voltage)"},
   { id: 2, name:"HV (High Voltage)"},       
    {id: 3, name:"MV (Medium Voltage)"},
    {id: 4, name: "Fabricators"},
    {id: 5, name:"Transform Oil Filtration"},
    {id: 6,name:"Cable Fault Locator"},
    {id: 7,name:"Draughtsman"},
    {id: 8, name:"Energy Auditors"},
    {id: 9, name:"HT/LT Switch Gear Services"}
];

  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

const [members, setMembers] = useState([]);
const [filteredMembers1, setFilteredMembers1] = useState([]);
const [filteredMembers2, setFilteredMembers2] = useState([]);

const [showReference1, setShowReference1] = useState(false);
const [showReference2, setShowReference2] = useState(false);


    useEffect(() => {
  getStates();
  getMembers();
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

 const getMembers = async () => {

  try {

    const response = await axios.get(
      "https://portal.tneiea.in/api/v2/members"
    );

    console.log("MEMBERS :", response.data);

    if (response.data.result === true) {

      setMembers(response.data.data || []);
    }

  } catch (error) {

    console.log(
      "MEMBERS API ERROR :",
      error.response?.data || error
    );
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

 

const handleFileChange = (e) => {
  const { name, files } = e.target;

  setFormData({
    ...formData,
    [name]: files[0],
  });
};



  
const handleSubmit = async (e) => {
  e.preventDefault();

  const errors = {};

if (!formData.ServiceProviderName.trim()) {
  errors.ServiceProviderName =
    "Please enter service provider name";
}

if (selectedServiceTypes.length === 0) {
  errors.ServiceProviderType =
    "Please select service provider type";
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
  errors.idProofDoc =
    "Please upload ID proof document";
}

if (!formData.qualification.trim()) {
  errors.qualification =
    "Please enter qualification";
}

if (!formData.gstNo.trim()) {
  errors.gstNo = "Please enter GST number";
}

if (!formData.Address.trim()) {
  errors.Address = "Please enter address";
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
  errors.bloodGroup =
    "Please select blood group";
}

if (!formData.dob) {
  errors.dob = "Please select DOB";
}

if (!formData.contactNumber.trim()) {
  errors.contactNumber =
    "Please enter contact number";
}

if (!formData.mailId.trim()) {
  errors.mailId = "Please enter email";
}

setValidationErrors(errors);

if (Object.keys(errors).length > 0) {
  return;
}  


  const data = new FormData();

  data.append("type", "serviceprovider");
  selectedServiceTypes.forEach((id) => {
  data.append("serviceprovidertype[]", id);
});
  data.append("referenceby1", formData.referenceby1);
  data.append("referenceby2", formData.referenceby2);

  data.append("name", formData.ServiceProviderName);
  data.append("ownership", formData.ownership);
  data.append("photo", formData.photo);
 if (extraPhotos.photo1) {
  data.append("photo1", extraPhotos.photo1);
}

if (extraPhotos.photo2) {
  data.append("photo2", extraPhotos.photo2);
}

if (extraPhotos.photo3) {
  data.append("photo3", extraPhotos.photo3);
}
 

  data.append("logo", formData.logo);
  data.append("idproofdoc", formData.idProofDoc);
 data.append("idproof", formData.idProof);
  data.append("companyname", formData.companyName);
  data.append("qualification", formData.qualification);
  data.append("gstno", formData.gstNo);
  data.append("address", formData.Address);

  data.append("state", formData.stateName);
  data.append("city", formData.city);
  data.append("pincode", formData.pincode);

  data.append("bloodgroup", formData.bloodGroup);


  data.append("contactno", formData.contactNumber);
  data.append("contactno2", formData.alternateContactNumber);
  data.append("email", formData.mailId);

  const date = new Date(formData.dob);

const formattedDate =
  String(date.getDate()).padStart(2, "0") +
  "-" +
  String(date.getMonth() + 1).padStart(2, "0") +
  "-" +
  date.getFullYear();

data.append("dob", formattedDate); 

  try {
    const res = await fetch(
      "https://portal.tneiea.in/api/auth/register2",
      {
        method: "POST",
        body: data,
      }
    );


   
     

    const result = await res.json();

    console.log(result);

    if (result.result) {
      setPopupType("success");
setShowPopup(true);
      

      // reset form
      setFormData({
        ServiceProviderName: "",
        ServiceProviderType: "",
        referenceby1: "",
        referenceby2: "",
        photo: "",
        photo1: "",
        photo2: "",
        photo3: "",
        ownership: "",
        companyName: "",
        logo: "",
        idProofDoc: "",
        qualification: "",
        gstNo: "",
        Address: "",
        state: "",
        city: "",
        pincode: "",
        bloodGroup: "",
        dob: "",
        contactNumber: "",
        alternateContactNumber: "",
        mailId: "",
      });
    }

    if (result.result === false) {

  if (result.message?.contactno) {
    setPopupMessage("Contact Number Already Taken");
    setPopupType("error");
    setShowPopup(true);
    return;
  }

  if (result.message?.email) {
    setPopupMessage("Email ID Already Taken");
    setPopupType("error");
    setShowPopup(true);
    return;
  }
}
  } catch (err) {
    console.error(err);
    setPopupType("error");
setShowPopup(true);
  }
};


  return (

     <>
    {/* POPUP */}
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
    : popupMessage}
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
    )}
   <section className="w-full min-h-screen bg-[#f5f7fb] py-10 px-2 sm:px-4 md:px-6 lg:px-8 overflow-visible">

      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-10 overflow-visible">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#111827] mb-10">
          Service Provider Registration
        </h1>

  

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

  {/* Row 1 */}
  <div>
    <label className="text-sm font-semibold text-black">
                Service provider Name <span className="text-red-600">*</span>
              </label>

              <input
  type="text"
  name="ServiceProviderName"
  placeholder="Enter the Name"
  value={formData.ServiceProviderName}
  onChange={handleChange}
 className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.ServiceProviderName
    ? "border-red-500"
    : "border-gray-300"
}`}
/>
{validationErrors.ServiceProviderName && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.ServiceProviderName}
  </p>
)}
  </div>

  <div className="relative">
    <label className="text-sm font-semibold text-black">
                Referance By 1 
              </label>
  <input
  type="text"
  placeholder="Search Member"
  value={formData.referenceby1}
  onFocus={() => setShowReference1(true)}
  onChange={(e) => {

    const value = e.target.value;

    setFormData({
      ...formData,
      referenceby1: value,
    });

    const filtered = members.filter((item) =>
      item.memberName
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilteredMembers1(filtered);
  }}
  className="w-full mt-2 border border-gray-300 rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
  />

{showReference1 &&
  filteredMembers1.length > 0 && (

<div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 max-h-[300px] overflow-y-auto">

  {filteredMembers1.map((item, index) => (

    <div
      key={index}
      onClick={() => {

        setFormData({
          ...formData,
          referenceby1:
            `${item.memberName} (${item.memberNo})`,
        });

        setShowReference1(false);
      }}
      className="flex items-center gap-4 px-2 py-3 cursor-pointer hover:bg-gray-100 border-b border-gray-100"
    >

      {/* PHOTO */}
      <img
        src={
          item.photo && item.photo !== ""
            ? item.photo
            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt={item.memberName}
        className="w-14 h-14 rounded-full object-cover border"
      />

      {/* DETAILS */}
      <div className="flex-1">

        <h3 className="text-[16px] font-semibold text-gray-800">
          {item.memberName}
        </h3>

        <p className="text-sm text-red-500 font-medium">
          {item.memberNo}
        </p>

        <p className="text-sm text-gray-500">
          {item.email}
        </p>

        <p className="text-sm text-gray-500">
          {item.contactNo}
        </p>

      </div>
    </div>
  ))}
</div>
)}
</div>

  <div className="relative">
  <label className="text-sm font-semibold text-black">
    Referance By 2
  </label>

  <input
    type="text"
    placeholder="Search Member"
    value={formData.referenceby2}
    onFocus={() => setShowReference2(true)}
    onChange={(e) => {

      const value = e.target.value;

      setFormData({
        ...formData,
        referenceby2: value,
      });

      const filtered = members.filter((item) =>
        item.memberName
          .toLowerCase()
          .includes(value.toLowerCase())
      );

      setFilteredMembers2(filtered);
    }}
    className="w-full mt-2 border border-gray-300 rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
  />

  {showReference2 &&
    filteredMembers2.length > 0 && (

    <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 max-h-[300px] overflow-y-auto">

      {filteredMembers2.map((item, index) => (

        <div
          key={index}
          onClick={() => {

            setFormData({
              ...formData,
              referenceby2:
                `${item.memberName} (${item.memberNo})`,
            });

            setShowReference2(false);
          }}
          className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-100 border-b border-gray-100"
        >

          {/* PHOTO */}
          <img
            src={
              item.photo && item.photo !== ""
                ? item.photo
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt={item.memberName}
            className="w-14 h-14 rounded-full object-cover border"
          />

          {/* DETAILS */}
          <div className="flex-1">

            <h3 className="text-[16px] font-semibold text-gray-800">
              {item.memberName}
            </h3>

            <p className="text-sm text-red-500 font-medium">
              {item.memberNo}
            </p>

            <p className="text-sm text-gray-500">
              {item.email}
            </p>

            <p className="text-sm text-gray-500">
              {item.contactNo}
            </p>

          </div>
        </div>
      ))}
    </div>
  )}
</div>
  {/* Row 2 */}
  <div className="relative">
  <label className="block mb-2 font-medium">
    Service Provider Type
  </label>

  {/* Dropdown Button */}
  <div
    onClick={() => setShowDropdown(!showDropdown)}
   className={`w-full border rounded-sm px-4 py-3 bg-white cursor-pointer flex justify-between items-center
${
  validationErrors.ServiceProviderType
    ? "border-red-500"
    : "border-gray-300"
}`}
  >
    <span className="text-gray-700">
      {selectedServiceTypes.length > 0
        ? ServiceProvidertype
  .filter((item) =>
    selectedServiceTypes.includes(String(item.id))
  )
  .map((item) => item.name)
  .join(", ")
        : "Select Service Provider Type"}
    </span>

    <ChevronDown size={20} className="text-gray-500" />
  </div>

  {/* Dropdown List */}
  {showDropdown && (
    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-64 overflow-y-auto p-2">
      {ServiceProvidertype.map((item) => (
        <label
          key={item.id}
          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
        <input
  type="checkbox"
  checked={selectedServiceTypes.includes(String(item.id))}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedServiceTypes([
        ...selectedServiceTypes,
        String(item.id),
      ]);
    } else {
      setSelectedServiceTypes(
        selectedServiceTypes.filter(
          (type) => type !== String(item.id)
        )
      );
    }
  }}
  className="w-4 h-4"
/>
          <span>{item.name}</span>
        </label>
      ))}
    </div>
  )}

  {validationErrors.ServiceProviderType && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.ServiceProviderType}
  </p>
)}
</div>

  <div>
    <label className="block text-sm font-medium mb-1">
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

  <div>
   <div className="relative min-w-0">
       <label className="text-sm font-semibold text-black">
         Ownership <span className="text-red-600">*</span>
       </label>
   
       <button
         type="button"
         onClick={() =>
           setDropdownOpen({
             ...dropdownOpen,
             ownership: !dropdownOpen.ownership,
           })
         }
       className={`w-full mt-2 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500
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
         <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
   
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
   
         <label className="mt-2 flex items-center border border-gray-300 rounded-sm overflow-hidden cursor-pointer">
           <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
             Choose File
           </span>
   
           <span className="px-4 text-sm text-gray-600 truncate flex-1">
             {extraPhotos.photo1
               ? extraPhotos.photo1.name
               : "No file chosen"}
           </span>
   
           <input
             type="file"
             accept=".jpg,.jpeg,.png"
             onChange={(e) =>
               setExtraPhotos({
                 ...extraPhotos,
                 photo1: e.target.files[0],
               })
             }
             className="hidden"
           />
         </label>
   
         <p className="text-xs text-gray-500 mt-1">
           Allowed: JPG, JPEG, PNG | Max size: 2 MB
         </p>
       </div>
   
       <div>
         <label className="text-sm font-semibold text-black">
           Authorised Person 3
         </label>
   
         <label className="mt-2 flex items-center border border-gray-300 rounded-sm overflow-hidden cursor-pointer">
           <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
             Choose File
           </span>
   
           <span className="px-4 text-sm text-gray-600 truncate flex-1">
             {extraPhotos.photo2
               ? extraPhotos.photo2.name
               : "No file chosen"}
           </span>
   
           <input
             type="file"
             accept=".jpg,.jpeg,.png"
             onChange={(e) =>
               setExtraPhotos({
                 ...extraPhotos,
                 photo2: e.target.files[0],
               })
             }
             className="hidden"
           />
         </label>
   
         <p className="text-xs text-gray-500 mt-1">
           Allowed: JPG, JPEG, PNG | Max size: 2 MB
         </p>
       </div>
   
       <div>
         <label className="text-sm font-semibold text-black">
           Authorised Person 4
         </label>
   
         <label className="mt-2 flex items-center border border-gray-300 rounded-sm overflow-hidden cursor-pointer">
           <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
             Choose File
           </span>
   
           <span className="px-4 text-sm text-gray-600 truncate flex-1">
             {extraPhotos.photo3
               ? extraPhotos.photo3.name
               : "No file chosen"}
           </span>
   
           <input
             type="file"
             accept=".jpg,.jpeg,.png"
             onChange={(e) =>
               setExtraPhotos({
                 ...extraPhotos,
                 photo3: e.target.files[0],
               })
             }
             className="hidden"
           />
         </label>
   
         <p className="text-xs text-gray-500 mt-1">
           Allowed: JPG, JPEG, PNG | Max size: 2 MB
         </p>
       </div>
     </>
   )}


  {/* Row 3 */}
  <div>
 <label className="text-sm font-semibold text-black">
  Authorised Person 1 <span className="text-red-600">*</span>
</label>

<label className={`mt-2 flex items-center border rounded-lg overflow-hidden cursor-pointer
${
  validationErrors.photo
    ? "border-red-500"
    : "border-gray-300"
}`}>
  <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
    Choose File
  </span>

  <span className="px-4 text-sm text-gray-600 truncate flex-1">
    {formData.photo ? formData.photo.name : "No file chosen"}
  </span>

  <input
    type="file"
    name="photo"
    accept=".jpg,.jpeg,.png"
    onChange={handleFileChange}
    className="hidden"
  />
</label>
{validationErrors.photo && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.photo}
  </p>
)}

<p className="text-xs text-gray-500 mt-1">
  Allowed: JPG, JPEG, PNG | Max size: 2 MB
</p>
</div>

  <div>
    <div>
  <label className="block text-[15px] font-medium text-black">
    Logo
  </label>

  <label className="mt-2 flex items-center border border-gray-300 rounded-sm overflow-hidden cursor-pointer w-full">
    <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
      Choose File
    </span>

    <span className="px-4 text-sm text-gray-600 truncate flex-1">
      {formData.logo ? formData.logo.name : "No file chosen"}
    </span>

    <input
      type="file"
      name="logo"
      accept=".jpg,.jpeg,.png"
      onChange={handleFileChange}
      className="hidden"
    />
  </label>

  <p className="text-[12px] text-gray-600 mt-1">
    Allowed: JPG, JPEG, PNG | Max size: 2 MB
  </p>
</div>
  </div>

  <div>
     <label className="text-smfont-semibold text-black">
                ID Proof <span className="text-red-600">*</span>
              </label>

            
             <input
  type="text"
  name="idProof"
  placeholder="Enter ID Proof"
  value={formData.idProof}
  onChange={handleChange}
  required
 className={`w-full mt-1 border rounded-md px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.idProof
    ? "border-red-500"
    : "border-gray-300"
}`}/>

  {validationErrors.idProof && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.idProof}
  </p>
)}


  </div>

  {/* Row 4 */}
  <div>
  <div>
  <label className="text-sm font-semibold text-black">
    ID Proof Document <span className="text-red-600">*</span>
  </label>

  <label className={`mt-2 flex items-center border rounded-sm overflow-hidden cursor-pointer
${
  validationErrors.idProofDoc
    ? "border-red-500"
    : "border-gray-300"
}`}>

    <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
      Choose File
    </span>

    <span className="px-4 text-sm text-gray-600 truncate flex-1">
      {formData.idProofDoc
        ? formData.idProofDoc.name
        : "No file chosen"}
    </span>

    <input
      type="file"
      name="idProofDoc"
      accept=".pdf"
      required
      className="hidden"
      onChange={handleFileChange}
    />
  </label>

  {validationErrors.idProofDoc && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.idProofDoc}
  </p>
)}

  <p className="text-xs text-gray-500 mt-1">
    Allowed: PDF | Max size: 2 MB
  </p>
</div>
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
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

  <div>
  <label className="block text-sm font-medium mb-1">
      GST No <span className="text-red-600">*</span>
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
      }}
      required
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

  {/* Row 5 */}
  <div>
     <label className="block text-[15px] font-medium text-black  mt-2 ">
         Address <span className="text-red-500">*</span>
      </label>

      <textarea
      rows="2"
      name="Address"
      value={formData.Address}
      onChange={handleChange}
      required
      className={`w-full mt-1 border rounded-sm px-4 py-3 text-[16px] resize-none outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.Address
    ? "border-red-500"
    : "border-gray-300"
}`}
    ></textarea>
     {validationErrors.Address && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.Address}
  </p>
)}
  </div>

<div>
  <label className="block text-sm font-medium mb-1">
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

  <div>
   <div>
  <label className="block text-sm font-medium mb-1">
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
    }}
    
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
</div>
{validationErrors.city && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.city}
  </p>
)}
  </div>

  {/* Row 6 */}
  <div>
     <label className="block text-sm font-medium mb-1">
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

   <div className="relative z-10">
        <label className="block text-[15px] font-medium text-black mb-2">
          Blood Group
        </label>
      <button
        type="button"
        onClick={() =>
          setDropdownOpen({
            ...dropdownOpen,
            bloodGroup: !dropdownOpen.bloodGroup,
          })
        }
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
      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] max-h-60 overflow-y-auto">
  
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

  <div>
    <label className="block text-sm font-medium mb-1">
      Date of Birth <span className="text-red-500">*</span>
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

  {/* Row 7 */}
  <div>
   <label className="block text-sm font-medium mb-1">
      Contact Number <span className="text-red-500">*</span>
    </label>
   <input
  type="text"
  name="contactNumber"
  value={formData.contactNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // numbers only

    if (value.length <= 10) {
      setFormData({
        ...formData,
        contactNumber: value,
      });
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

  <div>
    <label className="block text-sm font-medium mb-1">
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
  className="w-full mt-2 border border-gray-300 rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
/>

  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      Email <span className="text-red-500">*</span>
    </label>
     <input
                type="email"
                name="mailId"
                value={formData.mailId}
                onChange={handleChange}
                required
                className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${
  validationErrors.mailId
    ? "border-red-500"
    : "border-gray-300"
}`}/>

  </div>

  {validationErrors.contactNumber && (
  <p className="text-red-500 text-sm mt-1">
    {validationErrors.contactNumber}
  </p>
)}


</div>
          
          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-10 py-3 rounded-md font-medium shadow-sm"
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

export default ServiceProvider;