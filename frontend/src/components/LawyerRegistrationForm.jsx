import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axiosInstance from "../Api/axiosInstance";

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  barMembershipNumber: yup
    .string()
    .required("Bar Membership Number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(/\d/, "Password must include at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must include at least one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions")
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
      email: "",
      barMembershipNumber: "",
      password: "",
      confirmPassword: "",
      terms: false
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }
  };

  return (
    <div className="lawyer-registration-form">
      <h2>Lawyer Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label>
            Password{" "}
            <span
              title="Password must include: at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character."
              style={{ cursor: "help", color: "#007bff" }}
            >
              ?
            </span>
          </label>
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
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register("terms")}
            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
          />
          <label className="form-check-label">
            I accept the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">terms and conditions</a>
          </label>
          <div className="invalid-feedback">{errors.terms?.message}</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default LawyerRegistrationForm;
