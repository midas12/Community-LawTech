import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axiosInstance from '../Api/axiosInstance';

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
      specialisation: [],
      specialisationDates: {},
      specialisationExperience: {},
      lawFirms: "",
      lawSchool: "",
      graduationYear: "",
      additionalDegrees: "",
      position: "",
      department: "",
      startDate: "",
      employmentType: "",
      barMembershipProof: null,
      backgroundCheck: false,
      insuranceDetails: "",
      officeLocation: "",
      officePostcode: "",
      preferredCommunication: "",
      references: ["", "", ""],
      affiliations: "",
      nationalities: "",
      languages: [],
      religion: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "barMembershipProof" && data[key][0]) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await axiosInstance.post("/lawyer-onboarding", formData);
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
        <div className="form-group">
          <label>First Name</label>
          <input type="text" {...register("firstName")} className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        
        {/* Add similar fields for all remaining fields following the same structure */}
        <div className="form-group">
          <label>References</label>
          <Controller
            name="references"
            control={control}
            render={({ field }) => (
              field.value.map((ref, index) => (
                <input
                  key={index}
                  type="text"
                  {...register(`references[${index}]`)}
                  className={`form-control ${errors.references?.[index] ? "is-invalid" : ""}`}
                />
              ))
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LawyerOnboardingForm;
