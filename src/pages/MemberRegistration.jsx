import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
function MemberRegistration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [extraPhotos, setExtraPhotos] = useState({
    photo1: null,
    photo2: null,
    photo3: null,
  });
  const [licenseDoc, setLicenseDoc] = useState(null);

  const [formKey, setFormKey] = useState(0);
  const [idProofDoc, setIdProofDoc] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [formData, setFormData] = useState({
    memberNo: "",
    memberName: "",
    memberType: "",
    ownership: "",
    licenseNumber: "",
   licenseExpiryDate: null,
    companyName: "",
    idProof: "",
    qualification: "",
    gstNo: "",
    permanentAddress: "",
    communicationAddress: "",

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

  const [dropdownOpen, setDropdownOpen] = useState({
    memberType: false,
    ownership: false,
    state: false,
    city: false,
    bloodGroup: false,
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registeredMember, setRegisteredMember] = useState({
    memberId: "",
    memberName: "",
    email:"",
  });
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
  useEffect(() => {
    getStates();
  }, []);

  const getStates = async () => {
    try {
      const response = await axios.get(
        "https://portal.tneiea.in/api/auth/states",
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
        formData,
      );

      if (response.data.result) {
        setCities(response.data.data);
      }
    } catch (error) {
      console.log("CITY API ERROR", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    try {
      setLoading(true);
      setErrorMessages({});
      setSuccessMessage("");

      const errors = {};

      if (!formData.memberNo.trim()) {
        errors.memberNo = "This field is required.";
      }

      if (!formData.memberType) {
        errors.memberType = "Please select member type";
      }

      if (!formData.memberName.trim()) {
        errors.memberName = "Please enter member name";
      }

      if (!photo) {
        errors.photo = "Please upload photo";
      }

      if (!formData.ownership) {
        errors.ownership = "Please select ownership";
      }

      if (!formData.licenseNumber.trim()) {
        errors.licenseNumber = "Please enter license number";
      }

      if (!licenseDoc) {
        errors.licenseDoc = "Please upload license document";
      }

      if (!formData.licenseExpiryDate) {
  errors.licenseExpiryDate = "Please select license expiry date";
}

      if (!formData.companyName.trim()) {
        errors.companyName = "Please enter company name";
      }

      if (!formData.idProof.trim()) {
        errors.idProof = "Please enter ID proof";
      }

      if (!idProofDoc) {
        errors.idProofDoc = "Please upload ID proof document";
      }

      if (!formData.qualification.trim()) {
        errors.qualification = "Please enter qualification";
      }

      const gstRegex =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}Z[A-Z0-9]{1}$/;

      if (formData.gstNo.trim() && !gstRegex.test(formData.gstNo.trim())) {
        errors.gstNo = "Enter valid GST format (Eg: 33WXYZT9876M1Z9)";
      }

      if (!formData.permanentAddress.trim()) {
        errors.permanentAddress = "Please enter permanent address";
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
        errors.contactNumber = "Please enter contact number";
      }

      if (
        formData.contactNumber.trim() &&
        formData.contactNumber.length !== 10
      ) {
        errors.contactNumber = "Contact number must be 10 digits";
      }
      if (
        validationErrors.contactNumber &&
        validationErrors.contactNumber.includes("already exists")
      ) {
        setLoading(false);
        return;
      }
      if (
  formData.alternateContactNumber &&
  formData.alternateContactNumber === formData.contactNumber
) {
  errors.alternateContactNumber =
    "Alternate contact number should not be same as contact number";
}
      if (!formData.mailId.trim()) {
        errors.mailId = "Please enter email";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (formData.mailId.trim() && !emailRegex.test(formData.mailId)) {
        errors.mailId = "Enter valid Email ID";
      }

      if (photo && photo.size > 3 * 1024 * 1024) {
        errors.photo = "File size should not exceed 3 MB";
      }

      if (licenseDoc && licenseDoc.size > 3 * 1024 * 1024) {
        errors.licenseDoc = "File size should not exceed 3 MB";
      }

      if (idProofDoc && idProofDoc.size > 3 * 1024 * 1024) {
        errors.idProofDoc = "File size should not exceed 3 MB";
      }
      // setValidationErrors(errors);

      // if (Object.keys(errors).length > 0) {
      //   return;
      // }

      if (!formData.mailId.trim()) {
        errors.mailId = "Please enter email";
      }

      setValidationErrors(errors);

      if (Object.keys(errors).length > 0) {
        const firstErrorField = Object.keys(errors)[0];

        let element =
          document.querySelector(`[name="${firstErrorField}"]`) ||
          document.getElementById(firstErrorField);

        if (firstErrorField === "idProofDoc") {
          element = document.getElementById("idProofDocContainer");
        }

        if (firstErrorField === "licenseDoc") {
          element = document.getElementById("licenseDocContainer");
        }

        if (firstErrorField === "photo") {
          element = document.getElementById("photoContainer");
        }

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 120,
            behavior: "smooth",
          });

          if (typeof element.focus === "function") {
            element.focus();
          }
        }

        return;
      }

      const data = new FormData();

      data.append("memberid", formData.memberNo);
      data.append("membername", formData.memberName);
      data.append("membertype", formData.memberType);
      data.append("ownership", formData.ownership);
      data.append("licensenumber", formData.licenseNumber);
      const formatDateTime = (date) => {
  if (!date) return "";

  const pad = (n) => String(n).padStart(2, "0");

  return `${date.getFullYear()}-${pad(
    date.getMonth() + 1
  )}-${pad(date.getDate())} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
};

data.append(
  "licenseexpirydate",
  formatDateTime(formData.licenseExpiryDate)
);
      data.append("companyname", formData.companyName);
      data.append("idproof", formData.idProof);
      data.append("qualification", formData.qualification);
      data.append("gstno", formData.gstNo);
      data.append("paddress", formData.permanentAddress);
      data.append("caddress", formData.communicationAddress);
      data.append("state", formData.stateName);
      data.append("city", formData.city);
      data.append("pincode", formData.pincode);
      data.append("bloodgroup", formData.bloodGroup);

      const date = new Date(formData.dob);
      const formattedDate =
        String(date.getDate()).padStart(2, "0") +
        "-" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "-" +
        date.getFullYear();

      data.append("dob", formattedDate);

      data.append("contactno", formData.contactNumber);
      data.append("alternatecontactno", formData.alternateContactNumber);
      data.append("email", formData.mailId);

      data.append("photo", photo);
      data.append("licensedoc", licenseDoc);
      data.append("idproofdoc", idProofDoc);

      if (formData.ownership === "PARTNERSHIP") {
        if (extraPhotos.photo1) {
          data.append("photo1", extraPhotos.photo1);
        }

        if (extraPhotos.photo2) {
          data.append("photo2", extraPhotos.photo2);
        }

        if (extraPhotos.photo3) {
          data.append("photo3", extraPhotos.photo3);
        }
      }
      const response = await axios.post(
        "https://portal.tneiea.in/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("SUCCESS RESPONSE:", response.data);
      // alert(JSON.stringify(response.data));

      // if (response.data.result === true) {
      //   setPopupType("success");
      //   setShowPopup(true);

      if (response.data.result === true) {
        // await new Promise((resolve) => setTimeout(resolve, 10000));

        const memberRes = await axios.get(
          "https://portal.tneiea.in/api/v2/members",
        );

        console.log("MEMBER LIST", memberRes.data.data);

        // const matchedMember = memberRes.data.data.find(
        //   item =>
        //     item.memberName?.trim().toLowerCase() ===
        //     formData.memberName?.trim().toLowerCase()
        // );

        // console.log("MATCHED MEMBER", matchedMember);

        // setRegisteredMember({
        //   memberId: matchedMember?.memberNo || "",
        //   memberName: matchedMember?.memberName || formData.memberName,
        // });

        console.log("FORM NAME", formData.memberName);
        console.log("MEMBER LIST", memberRes.data.data);

        const matchedMember = memberRes.data.data.find(
          (item) =>
            item.memberName?.trim().toLowerCase() ===
            formData.memberName?.trim().toLowerCase(),
        );

        console.log("MATCHED MEMBER", matchedMember);

      setRegisteredMember({
  memberId: matchedMember?.memberNo || "NOT FOUND",
  memberName: matchedMember?.memberName || formData.memberName,
  email: formData.mailId,
});
        setRegistrationSuccess(true);

        return;

        return;
        // reset
        setFormData({
          memberNo: "",
          memberName: "",
          memberType: "",
          ownership: "",
          licenseNumber: "",
          companyName: "",
          idProof: "",
          qualification: "",
          gstNo: "",
          permanentAddress: "",
          communicationAddress: "",

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
        setPhoto(null);
        setExtraPhotos({ photo1: null, photo2: null, photo3: null });
        setLicenseDoc(null);
        setIdProofDoc(null);
        setFormKey((prev) => prev + 1);
      }

      if (response.data.result === false) {
        if (response.data.message?.contactno) {
          setPopupMessage("Contact Number Already Taken");
          setPopupType("error");
          setShowPopup(true);
          return;
        }

        if (response.data.message?.email) {
          setPopupMessage("Email ID Already Taken");
          setPopupType("error");
          setShowPopup(true);
          return;
        }
      }
    } catch (error) {
      console.log("ERROR RESPONSE:", error?.response?.data);

      const message = error?.response?.data?.message;

      if (message?.contactno) {
        setValidationErrors((prev) => ({
          ...prev,
          contactNumber: message.contactno[0],
        }));

        const element = document.querySelector('[name="contactNumber"]');

        if (element) {
          element.focus();
        }

        return;
      }

      if (message?.email) {
        setPopupType("error");
        setPopupMessage(message.email[0]);
        setShowPopup(true);
        return;
      }

      setPopupType("error");
      setPopupMessage("Something went wrong");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  if (registrationSuccess) {
    return (
<section className="fixed inset-0 flex flex-col items-center justify-center bg-[#f5f7fb] px-4 z-50">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl w-full text-center border border-gray-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="success"
           className="w-20 h-20 mx-auto mb-4"
          />

         <h2 className="text-3xl font-bold text-green-600 mb-2">
            Member Registered Successfully 
          </h2>

        <p className="text-gray-600 text-lg leading-8 mb-4 max-w-md mx-auto">
  Your login credentials will be sent to your email
  <span className="font-bold text-black">
    {" "}
    ({registeredMember.email})
  </span>.
  Please check your inbox or spam. Alternatively,
  contact the administrator for assistance.
</p>


        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-lg">
              <div>
                <strong>Member ID :</strong> {registeredMember.memberId}
              </div>

              <div>
                <strong>Member Name :</strong> {registeredMember.memberName}
              </div>
            </div>
          </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-300 rounded-2xl p-4 shadow-sm">
            <p className="text-blue-800 font-semibold text-base leading-7">
              Our Admin Team will review your application and contact you
              shortly regarding the next steps of your membership process.
            </p>
          </div>
        </div>

       <button
  onClick={() => navigate("/")}
 className="mt-4 bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-xl font-semibold shadow-lg transition">
  Back To Home
</button>
      </section>
    );
  }

  return (
    <>
      {/* POPUP */}
      {showPopup && popupType === "error" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-[90%] max-w-[320px] rounded-xl p-6 text-center">
            <h3 className="text-red-600 text-xl font-bold mb-3">Error</h3>

            <p className="text-gray-600">{popupMessage}</p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <section className="w-full min-h-screen bg-[#f5f7fb] py-10 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-10 overflow-hidden">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#111827] mb-10">
            Member Registration
          </h1>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {successMessage}
            </div>
          )}
          {/* Validation Errors */}
          {Object.keys(errorMessages).length > 0 && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {Object.entries(errorMessages).map(([field, messages]) => (
                <div key={field} className="mb-2">
                  <strong className="capitalize">{field} :</strong>

                  {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {/* FORM */}
          <form key={formKey} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div>
                <label className="text-sm font-semibold text-black">
                  Manual Member Id <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  name="memberNo"
                  placeholder="Manual Member Id"
                  value={formData.memberNo}
                  onChange={handleChange}
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none
    ${validationErrors.memberNo ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.memberNo && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.memberNo}
                  </p>
                )}
              </div>

              <div>
                <div className="relative min-w-0">
                  <label className="text-sm font-semibold text-black">
                    Member Type <span className="text-red-600">*</span>
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setDropdownOpen({
                        ...dropdownOpen,
                        memberType: !dropdownOpen.memberType,
                      })
                    }
                    className={`w-full mt-2 border rounded-sm px-4 py-3 bg-white flex items-center justify-between text-[16px] text-gray-500 outline-none focus:ring-2 focus:ring-red-500 overflow-hidden
${validationErrors.memberType ? "border-red-500" : "border-gray-300"}`}
                  >
                    <span className="truncate">
                      {formData.memberType === "ESA"
                        ? "ESA"
                        : formData.memberType === "EA"
                          ? "EA"
                          : "Select Member Type"}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`transition duration-300 flex-shrink-0 ${
                        dropdownOpen.memberType ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen.memberType && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden max-h-60 overflow-y-auto">
                      {[
                        { value: "ESA", label: "ESA" },
                        { value: "EA", label: "EA" },
                      ].map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              memberType: item.value,
                            });

                            setDropdownOpen({
                              ...dropdownOpen,
                              memberType: false,
                            });
                          }}
                          className="w-full text-left px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {validationErrors.memberType && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.memberType}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-black">
                  Member Name <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  name="memberName"
                  placeholder="Enter Member Name"
                  value={formData.memberName}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.memberName ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.memberName && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.memberName}
                  </p>
                )}
              </div>

              {/* Row 2 */}
              <div id="photoContainer">
                <label className="text-sm font-semibold text-black">
                  Authorised Person 1 <span className="text-red-600">*</span>
                </label>

                <label className="mt-2 flex items-center border rounded-lg overflow-hidden cursor-pointer">
                  <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
                    Choose File
                  </span>

                  <span className="px-4 text-sm text-gray-600 truncate flex-1">
                    {photo ? photo.name : "Upload Photo"}
                  </span>

                  <input
                    id="photo"
                    type="file"
                    placeholder="Upload Photo"
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

                      setPhoto(file);
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
${validationErrors.ownership ? "border-red-500" : "border-gray-300"}`}
                  >
                    <span className="truncate">
                      {formData.ownership === "PROPRIETOR"
                        ? "PROPRIETOR"
                        : formData.ownership === "PARTNERSHIP"
                          ? "PARTNERSHIP"
                          : formData.ownership === "LIMITED CONCERN"
                            ? "LIMITED CONCERN"
                            : "Select Ownership"}
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
                        id="photo1"
                        type="file"
                        placeholder="Upload Photo"
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
                            photo1: "",
                          }));

                          setExtraPhotos({
                            ...extraPhotos,
                            photo1: file,
                          });
                        }}
                        className="hidden"
                      />
                    </label>

                    <p className="text-xs text-gray-500 mt-1">
                      Allowed: JPG, JPEG, PNG | Max size: 3 MB
                    </p>
                    {validationErrors.photo1 && (
                      <p className="text-red-500 text-sm mt-1">
                        {validationErrors.photo1}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-black">
                      Authorised Person 3
                    </label>

                    <label className="mt-2 flex items-center border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
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
                        placeholder="Upload Photo"
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
                            photo2: "",
                          }));

                          setExtraPhotos({
                            ...extraPhotos,
                            photo2: file,
                          });
                        }}
                        className="hidden"
                      />
                    </label>

                    <p className="text-xs text-gray-500 mt-1">
                      Allowed: JPG, JPEG, PNG | Max size: 3 MB
                    </p>
                    {validationErrors.photo2 && (
                      <p className="text-red-500 text-sm mt-1">
                        {validationErrors.photo2}
                      </p>
                    )}
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
                        type="file"
                        placeholder="Upload Photo"
                        accept=".jpg,.jpeg,.png"
                        placeholder="Upload Photo"
                        onChange={(e) => {
                          const file = e.target.files[0];

                          if (file && file.size > 3 * 1024 * 1024) {
                            setValidationErrors((prev) => ({
                              ...prev,
                              photo3: "File size should not exceed 3 MB",
                            }));

                            e.target.value = "";
                            return;
                          }

                          setValidationErrors((prev) => ({
                            ...prev,
                            photo3: "",
                          }));

                          setExtraPhotos({
                            ...extraPhotos,
                            photo3: file,
                          });
                        }}
                        className="hidden"
                      />
                    </label>

                    <p className="text-xs text-gray-500 mt-1">
                      Allowed: JPG, JPEG, PNG | Max size: 3 MB
                    </p>
                    {validationErrors.photo3 && (
                      <p className="text-red-500 text-sm mt-1">
                        {validationErrors.photo3}
                      </p>
                    )}
                  </div>
                </>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">
                  License Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="Eg: 1234567890"
                  value={formData.licenseNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    setFormData({
                      ...formData,
                      licenseNumber: value,
                    });
                  }}
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.licenseNumber ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.licenseNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.licenseNumber}
                  </p>
                )}
              </div>

              {/* Row 4 */}
              <div>
                <label
                  id="licenseDocContainer"
                  className={`className="text-sm font-semibold text-black"`}
                >
                  License Document <span className="text-red-600">*</span>
                </label>

                <div className="mt-2 border border-gray-300 rounded-sm overflow-hidden">
                  <input
                    id="licenseDoc"
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => {
                      const file = e.target.files[0];

                      if (file && file.size > 3 * 1024 * 1024) {
                        setValidationErrors((prev) => ({
                          ...prev,
                          licenseDoc: "File size should not exceed 3 MB",
                        }));

                        e.target.value = "";
                        return;
                      }

                      setValidationErrors((prev) => ({
                        ...prev,
                        licenseDoc: "",
                      }));

                      setLicenseDoc(file);
                    }}
                    className={`w-full text-sm file:bg-gray-100 file:border-0 file:px-4 file:py-3 file:mr-4
${validationErrors.licenseDoc ? "border-red-500" : ""}`}
                  />
                </div>

                {validationErrors.licenseDoc && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.licenseDoc}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Allowed: PDF | Max size: 3 MB
                </p>
              </div>

              <div>
 <label className="block text-sm font-medium mb-1">
  License Expiry Date <span className="text-red-500">*</span>
</label>

<DatePicker
  selected={
    formData.licenseExpiryDate
      ? new Date(formData.licenseExpiryDate)
      : null
  }
  onChange={(date) =>
    setFormData((prev) => ({
      ...prev,
      licenseExpiryDate: date,
    }))
  }
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={1}

  dateFormat="yyyy-MM-dd HH:mm:ss"
  minDate={new Date()}
  placeholderText="Select License Expiry Date"
  className="w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
/>

  {validationErrors.licenseExpiryDate && (
    <p className="text-red-500 text-sm mt-1">
      {validationErrors.licenseExpiryDate}
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
${validationErrors.companyName ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.companyName && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label className="text-smfont-semibold text-black">
                  ID Proof <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  name="idProof"
                  placeholder="Aadhaar Card / PAN Card "
                  value={formData.idProof}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.idProof ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.idProof && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.idProof}
                  </p>
                )}
              </div>

              {/* Row 5 */}
              <div>
                <label className="text-sm font-semibold text-black">
                  ID Proof Document <span className="text-red-600">*</span>
                </label>

                {/* File box */}
                <label
                  id="idProofDocContainer"
                  className={`mt-2 flex items-center border rounded-lg overflow-hidden cursor-pointer
  ${validationErrors.idProofDoc ? "border-red-500" : "border-gray-300"}`}
                >
                  {/* Button */}
                  <span className="bg-gray-100 px-4 py-3 text-sm border-r border-gray-300">
                    Choose File
                  </span>

                  {/* File name */}
                  <span className="px-4 text-sm text-gray-600 truncate flex-1">
                    {idProofDoc ? idProofDoc.name : "No file chosen"}
                  </span>

                  {/* Hidden input */}
                  <input
                    id="idProofDoc"
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

                      // setValidationErrors((prev) => ({
                      //   ...prev,
                      //   idProofDoc: "",
                      // }));

                      setValidationErrors((prev) => ({
                        ...prev,
                        idProofDoc: "",
                      }));

                      setIdProofDoc(file);
                    }}
                  />
                </label>

                <p className="text-xs text-gray-500 mt-1">
                  Allowed: PDF | Max size: 3 MB
                </p>

                {validationErrors.idProofDoc && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.idProofDoc}
                  </p>
                )}
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
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.qualification ? "border-red-500" : "border-gray-300"}`}
                />
                {validationErrors.qualification && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.qualification}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">GST No</label>
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
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.gstNo ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.gstNo && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.gstNo}
                  </p>
                )}
              </div>

              {/* Row 6 */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Permanent Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="2"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  required
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] resize-none outline-none focus:ring-2 focus:ring-red-500
${validationErrors.permanentAddress ? "border-red-500" : "border-gray-300"}`}
                ></textarea>

                {validationErrors.permanentAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.permanentAddress}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Communication Address
                </label>
                <textarea
                  rows="2"
                  name="communicationAddress"
                  value={formData.communicationAddress}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <div>
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
                        (state) => String(state.id) === selectedStateId,
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
${validationErrors.state ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select State</option>

                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                {validationErrors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.state}
                  </p>
                )}
              </div>

              {/* Row 7 */}
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
${validationErrors.city ? "border-red-500" : "border-gray-300"}`}
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

    setValidationErrors((prev) => ({
      ...prev,
      pincode:
        value.length > 0 && value.length < 6
          ? "Pincode must be 6 digits"
          : "",
    }));
  }
}}
                  required
                  maxLength={6}
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
${validationErrors.pincode ? "border-red-500" : "border-gray-300"}`}
                />
                {validationErrors.pincode && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.pincode}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Blood Group <span className="text-red-500">*</span>
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
${validationErrors.bloodGroup ? "border-red-500" : "border-gray-300"}`}
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
                  <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden max-h-60 overflow-y-auto">
                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
                      (item, index) => (
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
                      ),
                    )}
                  </div>
                )}
                {validationErrors.bloodGroup && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.bloodGroup}
                  </p>
                )}
              </div>

              {/* Row 8 */}
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
                        "Future date of birth is not allowed.",
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
${validationErrors.dob ? "border-red-500" : "border-gray-300"}`}
                />

                {validationErrors.dob && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.dob}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
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

                      if (value.length > 0 && value.length < 10) {
                        setValidationErrors((prev) => ({
                          ...prev,
                          contactNumber: "Contact number must be 10 digits",
                        }));
                      } else {
                        setValidationErrors((prev) => ({
                          ...prev,
                          contactNumber: "",
                        }));
                      }
                    }
                  }}
                  onBlur={async () => {
                    if (!formData.contactNumber) return;

                    if (formData.contactNumber.length !== 10) {
                      setValidationErrors((prev) => ({
                        ...prev,
                        contactNumber: "Contact number must be 10 digits",
                      }));
                      return;
                    }

                    try {
                      const data = new FormData();
                      data.append("contactno", formData.contactNumber);

                      const response = await axios.post(
                        "https://portal.tneiea.in/api/auth/check_member_contact",
                        data,
                      );

                      console.log("CONTACT CHECK RESPONSE", response.data);

                      if (response.data.status === false) {
                        setValidationErrors((prev) => ({
                          ...prev,
                          contactNumber:
                            response.data.message ||
                            "Contact Number Already Taken",
                        }));
                      } else {
                        setValidationErrors((prev) => ({
                          ...prev,
                          contactNumber: "",
                        }));
                      }
                    } catch (error) {
                      console.log("CONTACT CHECK ERROR", error);
                    }
                  }}
                  required
                  maxLength={10}
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500 ${
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

        if (
          value.length === 10 &&
          value === formData.contactNumber
        ) {
          setValidationErrors((prev) => ({
            ...prev,
            alternateContactNumber:
              "Alternate contact number should not be same as contact number",
          }));
        } else {
          setValidationErrors((prev) => ({
            ...prev,
            alternateContactNumber: "",
          }));
        }
      }
    }}
    onBlur={() => {
      if (
        formData.alternateContactNumber &&
        formData.alternateContactNumber === formData.contactNumber
      ) {
        setValidationErrors((prev) => ({
          ...prev,
          alternateContactNumber:
            "Alternate contact number should not be same as contact number",
        }));
      }
    }}
    maxLength={10}
    className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500 ${
      validationErrors.alternateContactNumber
        ? "border-red-500"
        : "border-gray-300"
    }`}
  />

  {validationErrors.alternateContactNumber && (
    <p className="text-red-500 text-sm mt-1">
      {validationErrors.alternateContactNumber}
    </p>
  )}
</div>

              {/* Row 9 */}
              <div>
                <label className="block text-sm font-medium mb-1">
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

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    setValidationErrors((prev) => ({
                      ...prev,
                      mailId:
                        value.length > 0 && !emailRegex.test(value)
                          ? "Enter valid Email ID"
                          : "",
                    }));
                  }}
                  onBlur={() => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (formData.mailId && !emailRegex.test(formData.mailId)) {
                      setValidationErrors((prev) => ({
                        ...prev,
                        mailId: "Enter valid Email ID",
                      }));
                    }
                  }}
                  className={`w-full mt-2 border rounded-sm px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-red-500
  ${validationErrors.mailId ? "border-red-500" : "border-gray-300"}`}
                />
                 {validationErrors.mailId && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.mailId}
              </p>
            )}
              </div>
            </div>
           

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-10 py-3 rounded-sm font-medium shadow-sm disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default MemberRegistration;
