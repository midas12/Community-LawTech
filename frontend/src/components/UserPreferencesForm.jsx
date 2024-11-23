import React, { useState } from 'react';

const UserPreferencesForm = () => {
  const [formValues, setFormValues] = useState({
    field: '',
    qualification: '',
    language: '',
    gender: '',
    religion: '',
    nationality: ''
  });

  const [showForm, setShowForm] = useState(true);

  const languages = [
    'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani', 
    'Bengali', 'Bosnian', 'Bulgarian', 'Catalan', 'Cebuano', 'Chinese', 
    'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 
    'Finnish', 'French', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 
    'Haitian Creole', 'Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 
    'Igbo', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Kannada', 
    'Kazakh', 'Khmer', 'Korean', 'Kurdish', 'Kyrgyz', 'Lao', 'Latin', 'Latvian', 
    'Lithuanian', 'Luxembourgish', 'Macedonian', 'Malagasy', 'Malay', 
    'Malayalam', 'Maltese', 'Maori', 'Marathi', 'Mongolian', 'Nepali', 
    'Norwegian', 'Odia', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 
    'Romanian', 'Russian', 'Samoan', 'Scots Gaelic', 'Serbian', 'Sesotho', 
    'Shona', 'Sindhi', 'Sinhala', 'Slovak', 'Slovenian', 'Somali', 'Spanish', 
    'Sundanese', 'Swahili', 'Swedish', 'Tajik', 'Tamil', 'Tatar', 'Telugu', 
    'Thai', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uyghur', 'Uzbek', 
    'Vietnamese', 'Welsh', 'Xhosa', 'Yoruba'
  ];
  
  languages.sort();  

  const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 
    'Antiguan', 'Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 
    'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Belarusian', 'Belgian', 
    'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Botswanan', 
    'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 
    'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 
    'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 
    'Congolese (Congo-Brazzaville)', 'Congolese (Congo-Kinshasa)', 'Costa Rican', 
    'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djiboutian', 'Dominican', 
    'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirati', 'Equatorial Guinean', 
    'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 
    'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 
    'Guatemalan', 'Guinean', 'Guinea-Bissauan', 'Guyanese', 'Haitian', 'Herzegovinian', 
    'Honduran', 'Hungarian', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 
    'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 
    'Jordanian', 'Kazakh', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 
    'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 
    'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 
    'Maldivian', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 
    'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 
    'Mosotho', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 
    'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 
    'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Palestinian', 'Panamanian', 
    'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 
    'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 
    'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 
    'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovak', 
    'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 
    'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 
    'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 
    'Tongan', 'Trinidadian or Tobagonian', 'Tunisian', 'Turkish', 'Turkmen', 
    'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbek', 'Vanuatuan', 
    'Vatican', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemeni', 'Zambian', 'Zimbabwean'
  ];
  
  nationalities.sort();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Preferences submitted:', formValues);
    alert('Preferences submitted! Check the console for details.');
  };

  if (!showForm) {
    return null; // Hide the form if `showForm` is false
  }

  return (
    <div className="form-container" style={styles.container}>
      {/* Close Button */}
      <button 
        onClick={() => setShowForm(false)} 
        style={styles.closeButton}
        aria-label="Close"
      >
        ✖
      </button>

      <h2 style={styles.header}>Preferences</h2>
      <form onSubmit={handleSubmit}>
        {/* Field */}
        <label htmlFor="field">Field</label>
        <select
          id="field"
          name="field"
          value={formValues.field}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Field--</option>
          <option value="corporate">Corporate Law</option>
          <option value="criminal">Criminal Law</option>
          <option value="family">Family Law</option>
          <option value="property">Property Law</option>
        </select>

        {/* Qualification */}
        <label htmlFor="qualification">Qualification</label>
        <select
          id="qualification"
          name="qualification"
          value={formValues.qualification}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Qualification--</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>

        {/* Language */}
<label htmlFor="language">Preferred Language</label>
<select
  id="language"
  name="language"
  value={formValues.language}
  onChange={handleChange}
  style={styles.select}
>
  <option value="">--Select Language--</option>
  {languages.map((language) => (
    <option key={language} value={language.toLowerCase()}>
      {language}
    </option>
  ))}
</select>


        {/* Gender */}
        <label htmlFor="gender">Preferred Gender</label>
        <select
          id="gender"
          name="gender"
          value={formValues.gender}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="any">No Preference</option>
        </select>

        {/* Religion */}
        <label htmlFor="religion">Preferred Religion</label>
        <select
          id="religion"
          name="religion"
          value={formValues.religion}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Religion--</option>
          <option value="christianity">Christianity</option>
          <option value="islam">Islam</option>
          <option value="hinduism">Hinduism</option>
          <option value="judaism">Judaism</option>
          <option value="buddhism">Buddhism</option>
        </select>

        {/* Nationality */}
<label htmlFor="nationality">Preferred Nationality</label>
<select
  id="nationality"
  name="nationality"
  value={formValues.nationality}
  onChange={handleChange}
  style={styles.select}
>
  <option value="">--Select Nationality--</option>
  {nationalities.map((nationality) => (
    <option key={nationality} value={nationality.toLowerCase()}>
      {nationality}
    </option>
  ))}
</select>


        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit Preferences
        </button>
      </form>
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    position: 'relative'
  },
  header: {
    color: 'black',
    textAlign: 'center',
    textDecoration: 'underline',
  },
    select: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'rgb(117, 5, 5)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: 'black',
    fontSize: '17px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0', 
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
  }
};
export default UserPreferencesForm;

