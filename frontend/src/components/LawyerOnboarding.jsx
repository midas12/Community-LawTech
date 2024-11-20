import { useState } from 'react';

const LawyerOnboardingForm = () => {
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: '',
        lastName: '',
        middleName: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        emergencyContact: '',

        // Professional Information
        barMembershipNumber: '',
        jurisdictions: '',
        specialisation: [], // Areas of specialization
        specialisationDates: {}, // Start dates for each specialization
        specialisationExperience: {}, // Years of experience for each specialization
        lawFirms: '',

        // Educational Background
        lawSchool: '',
        graduationYear: '',
        additionalDegrees: '',

        // Employment Details
        position: '',
        department: '',
        startDate: '',
        employmentType: '',

        // Compliance and Legal Requirements
        barMembershipProof: null,
        backgroundCheck: false,
        insuranceDetails: '',

        // Administrative Information
        officeLocation: '',
        officePostcode: '',
        preferredCommunication: '',

        // Additional Information
        references: ['', '', ''],
        affiliations: '',

        // New Fields
        nationalities: '',
        languages: '',
        religion: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
            }));
        } else if (type === 'file') {
            setFormData((prev) => ({
                ...prev,
                [name]: e.target.files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSpecialisationDateChange = (specialisation, date) => {
        setFormData((prev) => ({
            ...prev,
            specialisationDates: {
                ...prev.specialisationDates,
                [specialisation]: date,
            },
        }));
    };

    const handleSpecialisationExperienceChange = (specialisation, experience) => {
        setFormData((prev) => ({
            ...prev,
            specialisationExperience: {
                ...prev.specialisationExperience,
                [specialisation]: experience,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted successfully!');
        // Add API call or logic to handle form submission
    };

    return (
        <div className="onboarding-form">
            <h2>Lawyer Onboarding</h2>
            <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <h3>Personal Information</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Middle Name (Optional)</label>
                    <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Emergency Contact</label>
                    <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Nationalities */}
                <div className="form-group">
                    <label>Nationality</label>
                    <input
                        type="text"
                        name="nationalities"
                        value={formData.nationalities}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Languages */}
                <div className="form-group">
                    <label>Languages Spoken</label>
                    <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Religion */}
                <div className="form-group">
                    <label>Religion</label>
                    <select
                        name="religion"
                        value={formData.religion}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Religion</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Islam">Islam</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Buddhism">Buddhism</option>
                        <option value="Judaism">Judaism</option>
                        <option value="Sikhism">Sikhism</option>
                        <option value="Taoism">Taoism</option>
                        <option value="Shinto">Shinto</option>
                        <option value="Jainism">Jainism</option>
                        <option value="Bahá'í Faith">Bahá'í Faith</option>
                        <option value="Confucianism">Confucianism</option>
                        <option value="Zoroastrianism">Zoroastrianism</option>
                    </select>
                </div>

                {/* Professional Information */}
                <h3>Professional Information</h3>
                <div className="form-group">
                    <label>Bar Association Membership Number</label>
                    <input
                        type="text"
                        name="barMembershipNumber"
                        value={formData.barMembershipNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Jurisdictions Licensed to Practice</label>
                    <input
                        type="text"
                        name="jurisdictions"
                        value={formData.jurisdictions}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="checkbox-group">
                    <label>Areas of Specialisation</label>
                    {['Housing', 'Employment', 'Immigration'].map((specialisation) => (
                        <div key={specialisation}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="specialisation"
                                    value={specialisation}
                                    onChange={handleInputChange}
                                />
                                {specialisation}
                            </label>
                            {formData.specialisation.includes(specialisation) && (
                                <>
                                    <input
                                        type="date"
                                        name={`${specialisation}StartDate`}
                                        value={formData.specialisationDates[specialisation] || ''}
                                        onChange={(e) =>
                                            handleSpecialisationDateChange(specialisation, e.target.value)
                                        }
                                        required
                                    />
                                    <input
                                        type="number"
                                        name={`${specialisation}Experience`}
                                        value={formData.specialisationExperience[specialisation] || ''}
                                        onChange={(e) =>
                                            handleSpecialisationExperienceChange(specialisation, e.target.value)
                                        }
                                        placeholder="Years of Experience"
                                        required
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="form-group">
                    <label>Previous Law Firms or Employers</label>
                    <input
                        type="text"
                        name="lawFirms"
                        value={formData.lawFirms}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Educational Background */}
                <h3>Educational Background</h3>
                <div className="form-group">
                    <label>Law School Attended</label>
                    <input
                        type="text"
                        name="lawSchool"
                        value={formData.lawSchool}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Graduation Year</label>
                    <input
                        type="number"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Additional Degrees or Certifications</label>
                    <input
                        type="text"
                        name="additionalDegrees"
                        value={formData.additionalDegrees}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Employment Details */}
                <h3>Employment Details</h3>
                <div className="form-group">
                    <label>Position/Title</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Department/Practice Area</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Employment Type</label>
                    <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Employment Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                {/* Compliance and Legal Requirements */}
                <h3>Compliance and Legal Requirements</h3>
                <div className="form-group">
                    <label>Proof of Bar Membership</label>
                    <input
                        type="file"
                        name="barMembershipProof"
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="backgroundCheck"
                            checked={formData.backgroundCheck}
                            onChange={handleInputChange}
                        />
                        Background Check Authorisation
                    </label>
                </div>

                <div className="form-group">
                    <label>Professional Liability Insurance Details</label>
                    <input
                        type="text"
                        name="insuranceDetails"
                        value={formData.insuranceDetails}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Administrative Information */}
                <h3>Administrative Information</h3>
                <div className="form-group">
                    <label>Office Location</label>
                    <input
                        type="text"
                        name="officeLocation"
                        value={formData.officeLocation}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Office Postcode</label>
                    <input
                        type="text"
                        name="officePostcode"
                        value={formData.officePostcode}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Preferred Communication Methods</label>
                    <select
                        name="preferredCommunication"
                        value={formData.preferredCommunication}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Communication Method</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="In-person">In-person</option>
                    </select>
                </div>

                {/* Additional Information */}
                <h3>Additional Information</h3>
                <div className="form-group">
                    <label>Reference 1</label>
                    <input
                        type="text"
                        name="references[0]"
                        value={formData.references[0]}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Reference 2</label>
                    <input
                        type="text"
                        name="references[1]"
                        value={formData.references[1]}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Reference 3</label>
                    <input
                        type="text"
                        name="references[2]"
                        value={formData.references[2]}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Professional Affiliations</label>
                    <input
                        type="text"
                        name="affiliations"
                        value={formData.affiliations}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="pink-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LawyerOnboardingForm;
