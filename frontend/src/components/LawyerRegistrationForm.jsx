import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axiosInstance from '../Api/axiosInstance';
import LawyerOnboardingForm from './LawyerOnboardingForm';

// Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phone: yup
    .string()
    .matches(
      /^\d{10,15}$/,
      "Phone number must be between 10 and 15 digits without spaces"
    )
    .required("Phone number is required"),
  barMembershipNumber: yup
    .string()
    .required("Bar Membership Number is required"),
  jurisdictions: yup.string().required("Jurisdictions are required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

const LawyerRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      barMembershipNumber: "",
      jurisdictions: "",
      terms: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOnboardingForm, setShowOnboardingForm] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/lawyer-registration", data);
      toast.success(response.data.message || "Registration successful!");
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setIsSubmitting(false);
      setShowOnboardingForm(true);
    }
  };

  return (
    <div className="lawyer-registration-form">
      <h2>Lawyer Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName")}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName")}
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.lastName?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </div>

        <div className="form-group">
          <label>Bar Membership Number</label>
          <input
            type="text"
            {...register("barMembershipNumber")}
            className={`form-control ${
              errors.barMembershipNumber ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.barMembershipNumber?.message}
          </div>
        </div>

        <div className="form-group">
          <label>Jurisdictions</label>
          <input
            type="text"
            {...register("jurisdictions")}
            className={`form-control ${
              errors.jurisdictions ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors.jurisdictions?.message}</div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register("terms")}
            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
          />
          <label className="form-check-label">
            I accept the terms and conditions
          </label>
          <div className="invalid-feedback">{errors.terms?.message}</div>
        </div>

        <button type="submit" className=" btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>

      {showOnboardingForm && (
        <div className="form-container">
          <LawyerOnboardingForm /> 
        </div>
      )}
    </div>
  );
};

export default LawyerRegistrationForm;
