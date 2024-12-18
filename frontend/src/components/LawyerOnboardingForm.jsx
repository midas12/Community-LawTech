import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axiosInstance from "../Api/axiosInstance";
import "../App.css";
const nationalityList = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Argentine",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bangladeshi",
  "Barbadian",
  "Belgian",
  "Brazilian",
  "British",
  "Bulgarian",
  "Canadian",
  "Chinese",
  "Colombian",
  "Croatian",
  "Cuban",
  "Danish",
  "Dutch",
  "Egyptian",
  "Filipino",
  "Finnish",
  "French",
  "German",
  "Ghanaian",
  "Greek",
  "Indian",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Korean",
  "Mexican",
  "Nepalese",
  "Nigerian",
  "Norwegian",
  "Pakistani",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Saudi",
  "South African",
  "Spanish",
  "Sri Lankan",
  "Swedish",
  "Swiss",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Vietnamese",
  "Zambian",
  "Zimbabwean",
].sort();
const religionList = [
  "Christianity",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Judaism",
  "Sikhism",
  "Bahá'í Faith",
  "Jainism",
  "Shinto",
  "Zoroastrianism",
  "Taoism",
  "Confucianism",
  "Paganism",
  "Wicca",
  "Rastafarianism",
];
const languageList = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Italian",
  "Portuguese",
  "Russian",
  "Arabic",
  "Hindi",
  "Bengali",
  "Punjabi",
  "Javanese",
  "Vietnamese",
  "Tamil",
  "Turkish",
  "Persian",
  "Swahili",
  "Dutch",
  "Greek",
  "Czech",
  "Hungarian",
  "Polish",
  "Romanian",
  "Thai",
];
const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
    phone: yup.string().required("Phone number is required"),
    address: yup.string().required("Address is required"),
    barMembershipNumber: yup
      .string()
      .required("Bar Membership Number is required"),
    jurisdictions: yup.string().required("Jurisdictions are required"),
    lawSchool: yup.string().required("Law School is required"),
    graduationYear: yup
      .number()
      .required("Graduation Year is required")
      .typeError("Graduation Year must be a number"),
    position: yup.string().required("Position is required"),
    department: yup.string().required("Department is required"),
    religion: yup.string().required("Religion is required"),
    nationality: yup.string().required("Nationality is required"),
    officeLocation: yup.string().required("Office Location is required"),
    language: yup.string().required("Language is required"),
  });
const LawyerOnboardingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/lawyer-onboarding", data);
      toast.success(response.data.message || "Onboarding Successful!");
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="lawyer-onboarding-form">
      {" "}
      <h1>Lawyer Onboarding</h1>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <h3>Personal Information</h3>{" "}
        <div className="form-group">
          {" "}
          <label>First Name</label>{" "}
          <input
            type="text"
            {...register("firstName")}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.firstName?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Last Name</label>{" "}
          <input
            type="text"
            {...register("lastName")}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.lastName?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Email</label>{" "}
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.email?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Date of Birth</label>{" "}
          <input
            type="date"
            {...register("dateOfBirth")}
            className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.dateOfBirth?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Phone</label>{" "}
          <input
            type="tel"
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.phone?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Address</label>{" "}
          <input
            type="text"
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />{" "}
          <div className="invalid-feedback">{errors.address?.message}</div>{" "}
        </div>{" "}
        <h3>Professional Information</h3>{" "}
        <div className="form-group">
          {" "}
          <label>Bar Membership Number</label>{" "}
          <input
            type="text"
            {...register("barMembershipNumber")}
            className={`form-control ${
              errors.barMembershipNumber ? "is-invalid" : ""
            }`}
          />{" "}
          <div className="invalid-feedback">
            {errors.barMembershipNumber?.message}
          </div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Jurisdictions</label>{" "}
          <input
            type="text"
            {...register("jurisdictions")}
            className={`form-control ${
              errors.jurisdictions ? "is-invalid" : ""
            }`}
          />{" "}
          <div className="invalid-feedback">
            {errors.jurisdictions?.message}
          </div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Religion</label>{" "}
          <select
            {...register("religion")}
            className={`form-control ${errors.religion ? "is-invalid" : ""}`}
          >
            {" "}
            <option value="">Select Religion</option>{" "}
            {religionList.map((religion) => (
              <option key={religion} value={religion}>
                {" "}
                {religion}{" "}
              </option>
            ))}{" "}
          </select>{" "}
          <div className="invalid-feedback">{errors.religion?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Nationality</label>{" "}
          <select
            {...register("nationality")}
            className={`form-control ${errors.nationality ? "is-invalid" : ""}`}
          >
            {" "}
            <option value="">Select Nationality</option>{" "}
            {nationalityList.map((nationality) => (
              <option key={nationality} value={nationality}>
                {" "}
                {nationality}{" "}
              </option>
            ))}{" "}
          </select>{" "}
          <div className="invalid-feedback">{errors.nationality?.message}</div>{" "}
        </div>{" "}
        <div className="form-group">
          {" "}
          <label>Language</label>{" "}
          <select
            {...register("language")}
            className={`form-control ${errors.language ? "is-invalid" : ""}`}
          >
            {" "}
            <option value="">Select Language</option>{" "}
            {languageList.map((language) => (
              <option key={language} value={language}>
                {" "}
                {language}{" "}
              </option>
            ))}{" "}
          </select>{" "}
          <div className="invalid-feedback">{errors.language?.message}</div>{" "}
        </div>{" "}
        <h3>Office Details</h3>{" "}
        <div className="form-group">
          {" "}
          <label>Office Location</label>{" "}
          <input
            type="text"
            {...register("officeLocation")}
            className={`form-control ${
              errors.officeLocation ? "is-invalid" : ""
            }`}
          />{" "}
          <div className="invalid-feedback">
            {errors.officeLocation?.message}
          </div>{" "}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LawyerOnboardingForm;
