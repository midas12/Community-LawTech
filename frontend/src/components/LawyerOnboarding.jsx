import { useState } from 'react';
import axios from 'axios';
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
        languages: [], // Changed to array
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

    const handleLanguageChange = (e, index) => {
        const options = e.target.options;
        const selectedLanguages = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedLanguages.push(options[i].value);
            }
        }
        setFormData((prev) => {
            const newLanguages = [...prev.languages];
            newLanguages[index] = selectedLanguages;
            return {
                ...prev,
                languages: newLanguages,
            };
        });
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
    axios.post('http://localhost:5000/api/lawyers/onboarding', formData)
        .then((response) => {
        console.log(response.data);
        alert('Form submitted successfully!');
        })
        .catch((error) => {
        console.error('There was an error submitting the form!', error);
        alert('There was an error submitting the form. Please try again.');
        });

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


                {/* Language Spoken 1 */}
                <div className="form-group">
                    <label>Langauge Spoken 1</label>
                    <select
                        name="Language Spoken 1"
                        value={formData.languages}
                        onChange={handleInputChange}
                    >
    <option value="Hebrew">Hebrew</option>
    <option value="Hindi">Hindi</option>
    <option value="Hungarian">Hungarian</option>
    <option value="Icelandic">Icelandic</option>
    <option value="Ido">Ido</option>
    <option value="Igbo">Igbo</option>
    <option value="Indonesian">Indonesian</option>
    <option value="Irish">Irish</option>
    <option value="Italian">Italian</option>
    <option value="Japanese">Japanese</option>
    <option value="Kashmiri">Kashmiri</option>
    <option value="Korean">Korean</option>
    <option value="Lao">Lao</option>
    <option value="Latin">Latin</option>
    <option value="Latvian">Latvian</option>
    <option value="Lingala">Lingala</option>
    <option value="Lithuanian">Lithuanian</option>
    <option value="Luxembourgish">Luxembourgish</option>
    <option value="Macedonian">Macedonian</option>
    <option value="Malayalam">Malayalam</option>
    <option value="Maori">Maori</option>
    <option value="Mongolian">Mongolian</option>
    <option value="Nepali">Nepali</option>
    <option value="Norwegian">Norwegian</option>
    <option value="Persian">Persian</option>
    <option value="Polish">Polish</option>
    <option value="Portuguese">Portuguese</option>
    <option value="Punjabi">Punjabi</option>
    <option value="Romanian">Romanian</option>
    <option value="Russian">Russian</option>
    <option value="Samoan">Samoan</option>
    <option value="Sardinian">Sardinian</option>
    <option value="Serbian">Serbian</option>
    <option value="Slovak">Slovak</option>
    <option value="Slovenian">Slovenian</option>
    <option value="Somali">Somali</option>
    <option value="Spanish">Spanish</option>
    <option value="Sundanese">Sundanese</option>
    <option value="Swahili">Swahili</option>
    <option value="Swedish">Swedish</option>
    <option value="Thai">Thai</option>
    <option value="Tsonga">Tsonga</option>
    <option value="Tswana">Tswana</option>
    <option value="Turkish">Turkish</option>
    <option value="Turkmen">Turkmen</option>
    <option value="Twi">Twi</option>
    <option value="Ukrainian">Ukrainian</option>
    <option value="Urdu">Urdu</option>
    <option value="Uzbek">Uzbek</option>
    <option value="Vietnamese">Vietnamese</option>
    <option value="Welsh">Welsh</option>
    <option value="Xhosa">Xhosa</option>
    <option value="Yoruba">Yoruba</option>
    <option value="Zulu">Zulu</option>
  </select>
</div>


                {/* Language Spoken 2 */}
                <div className="form-group">
                    <label>Language Spoken 2</label>
                    <select
                        name="religion"
                        value={formData.languages}
                        onChange={handleInputChange}
                    >
    <option value="Hebrew">Hebrew</option>
    <option value="Hindi">Hindi</option>
    <option value="Hungarian">Hungarian</option>
    <option value="Icelandic">Icelandic</option>
    <option value="Ido">Ido</option>
    <option value="Igbo">Igbo</option>
    <option value="Indonesian">Indonesian</option>
    <option value="Irish">Irish</option>
    <option value="Italian">Italian</option>
    <option value="Japanese">Japanese</option>
    <option value="Kashmiri">Kashmiri</option>
    <option value="Korean">Korean</option>
    <option value="Lao">Lao</option>
    <option value="Latin">Latin</option>
    <option value="Latvian">Latvian</option>
    <option value="Lingala">Lingala</option>
    <option value="Lithuanian">Lithuanian</option>
    <option value="Luxembourgish">Luxembourgish</option>
    <option value="Macedonian">Macedonian</option>
    <option value="Malayalam">Malayalam</option>
    <option value="Maori">Maori</option>
    <option value="Mongolian">Mongolian</option>
    <option value="Nepali">Nepali</option>
    <option value="Norwegian">Norwegian</option>
    <option value="Persian">Persian</option>
    <option value="Polish">Polish</option>
    <option value="Portuguese">Portuguese</option>
    <option value="Punjabi">Punjabi</option>
    <option value="Romanian">Romanian</option>
    <option value="Russian">Russian</option>
    <option value="Samoan">Samoan</option>
    <option value="Sardinian">Sardinian</option>
    <option value="Serbian">Serbian</option>
    <option value="Slovak">Slovak</option>
    <option value="Slovenian">Slovenian</option>
    <option value="Somali">Somali</option>
    <option value="Spanish">Spanish</option>
    <option value="Sundanese">Sundanese</option>
    <option value="Swahili">Swahili</option>
    <option value="Swedish">Swedish</option>
    <option value="Thai">Thai</option>
    <option value="Tsonga">Tsonga</option>
    <option value="Tswana">Tswana</option>
    <option value="Turkish">Turkish</option>
    <option value="Turkmen">Turkmen</option>
    <option value="Twi">Twi</option>
    <option value="Ukrainian">Ukrainian</option>
    <option value="Urdu">Urdu</option>
    <option value="Uzbek">Uzbek</option>
    <option value="Vietnamese">Vietnamese</option>
    <option value="Welsh">Welsh</option>
    <option value="Xhosa">Xhosa</option>
    <option value="Yoruba">Yoruba</option>
    <option value="Zulu">Zulu</option>
  </select>
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
                        <option value="Bahá&apos;í Faith">Bahá'í Faith</option>
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
