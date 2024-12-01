import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axiosInstance from "../Api/axiosInstance"
import "../App.css"; // Centralized CSS

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  middleName: yup.string(),
  dateOfBirth: yup.date().required("Date of Birth is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  emergencyContact: yup.string().required("Emergency contact is required"),
  barMembershipNumber: yup.string().required("Bar Membership Number is required"),
  jurisdictions: yup.string().required("Jurisdictions are required"),
  lawSchool: yup.string().required("Law School is required"),
  graduationYear: yup.number().required("Graduation Year is required").typeError("Graduation Year must be a number"),
  position: yup.string().required("Position is required"),
  department: yup.string().required("Department is required"),
  startDate: yup.date().required("Start Date is required"),
  employmentType: yup.string().required("Employment Type is required"),
  officeLocation: yup.string().required("Office Location is required"),
  officePostcode: yup.string().required("Office Postcode is required"),
  preferredCommunication: yup.string().required("Preferred Communication Method is required"),
  references: yup.array().of(yup.string().required("Reference is required")).min(3, "Three references are required"),
  barMembershipProof: yup.mixed().nullable().required("Bar Membership Proof is required"),
  profilePicture: yup.mixed().nullable().required("Profile Picture is required"),
  educationCertifications: yup.mixed().nullable().required("Education Certifications are required"),
  otherDocuments: yup.mixed().nullable().required("Other Documents are required"),
});

const LawyerOnboardingForm = () => {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
      phone: "",
      email: "",
      address: "",
      emergencyContact: "",
      barMembershipNumber: "",
      jurisdictions: "",
      lawSchool: "",
      graduationYear: "",
      position: "",
      department: "",
      startDate: "",
      employmentType: "",
      officeLocation: "",
      officePostcode: "",
      preferredCommunication: "",
      references: ["", "", ""],
      barMembershipProof: null,
      profilePicture: null,
      educationCertifications: null,
      otherDocuments: null,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] instanceof File || Array.isArray(data[key])) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await axiosInstance.post("/lawyer-onboarding", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      <h2>Lawyer Onboarding</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <h3>Personal Information</h3>
        {/* Other input fields */}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" {...register("firstName")} className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        
        {/* File Uploads */}
        <h3>Uploads</h3>
        <div className="form-group">
          <label>Bar Membership Proof</label>
          <input type="file" {...register("barMembershipProof")} className={`form-control ${errors.barMembershipProof ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.barMembershipProof?.message}</div>
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" {...register("profilePicture")} className={`form-control ${errors.profilePicture ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.profilePicture?.message}</div>
        </div>

        <div className="form-group">
          <label>Education Certifications</label>
          <input type="file" {...register("educationCertifications")} className={`form-control ${errors.educationCertifications ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.educationCertifications?.message}</div>
        </div>

        <div className="form-group">
          <label>Other Documents</label>
          <input type="file" {...register("otherDocuments")} className={`form-control ${errors.otherDocuments ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.otherDocuments?.message}</div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LawyerOnboardingForm;
