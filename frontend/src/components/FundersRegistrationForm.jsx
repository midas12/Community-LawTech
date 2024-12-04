import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../Api/axiosInstance";
import "../App.css"; // Centralized styling

// Validation Schema
const schema = yup.object().shape({
  organizationName: yup.string().required("Organization Name is required"),
  contactPerson: yup.string().required("Contact Person is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^\d{10,15}$/,
      "Phone number must be between 10 and 15 digits without spaces"
    )
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  subscriptionType: yup
    .string()
    .oneOf(["standard", "premium"], "Subscription type is required")
    .required("Subscription type is required"),
  benefitAreas: yup
    .array()
    .of(yup.string())
    .min(1, "At least one benefit area must be selected")
    .required("Benefit area is required"),
  borough: yup.string().required("Borough to benefit is required"),
});

const FundersRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      subscriptionType: "",
      benefitAreas: [],
      borough: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/api/funders", data);
      alert(response.data.message || "Registration successful!");
      reset();
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="funders-registration-form">
      <h2>Funders Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Organization Name</label>
          <input
            type="text"
            {...register("organizationName")}
            className={`form-control ${
              errors.organizationName ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">{errors.organizationName?.message}</div>
        </div>

        <div className="form-group">
          <label>Contact Person</label>
          <input
            type="text"
            {...register("contactPerson")}
            className={`form-control ${errors.contactPerson ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.contactPerson?.message}</div>
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
          <label>Phone</label>
          <input
            type="tel"
            {...register("phone")}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            {...register("address")}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.address?.message}</div>
        </div>

        <div className="form-group">
          <label>Subscription Type</label>
          <select
            {...register("subscriptionType")}
            className={`form-control ${
              errors.subscriptionType ? "is-invalid" : ""
            }`}
          >
            <option value="">Select a subscription</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
          <div className="invalid-feedback">{errors.subscriptionType?.message}</div>
        </div>

        <div className="form-group">
          <label>Benefit Areas</label>
          <select
            multiple
            {...register("benefitAreas")}
            className={`form-control ${
              errors.benefitAreas ? "is-invalid" : ""
            }`}
          >
            <option value="Housing">Housing</option>
            <option value="Employment">Employment</option>
            <option value="Immigration">Immigration</option>
          </select>
          <div className="invalid-feedback">{errors.benefitAreas?.message}</div>
        </div>

        <div className="form-group">
          <label>Borough to Benefit</label>
          <input
            type="text"
            {...register("borough")}
            className={`form-control ${errors.borough ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.borough?.message}</div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default FundersRegistrationForm;
