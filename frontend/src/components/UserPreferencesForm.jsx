import { useState } from 'react';
import axiosInstance from '../Api/axiosInstance';

const UserPreferencesForm = () => {
  const [formValues, setFormValues] = useState({
    field: '',
    qualification: '',
    language: '',
    gender: '',
    religion: '',
    nationality: '',
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
    'Vietnamese', 'Welsh', 'Xhosa', 'Yoruba',
  ].sort();

  const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 
    'Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bangladeshi', 
    'Barbadian', 'Belgian', 'Brazilian', 'British', 'Bulgarian', 'Canadian', 
    'Chinese', 'Colombian', 'Croatian', 'Cuban', 'Danish', 'Dutch', 'Egyptian', 
    'Filipino', 'Finnish', 'French', 'German', 'Ghanaian', 'Greek', 'Indian', 
    'Indonesian', 'Irish', 'Italian', 'Japanese', 'Korean', 'Mexican', 'Nepalese', 
    'Nigerian', 'Norwegian', 'Pakistani', 'Polish', 'Portuguese', 'Romanian', 
    'Russian', 'Saudi', 'South African', 'Spanish', 'Sri Lankan', 'Swedish', 
    'Swiss', 'Thai', 'Turkish', 'Ukrainian', 'Vietnamese', 'Zambian', 'Zimbabwean',
  ].sort();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(formValues).every((value) => value !== '');
    if (!allFieldsFilled) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    console.log('Preferences submitted:', formValues);
    alert('Preferences submitted! Check the console for details.');
    setFormValues({
      field: '',
      qualification: '',
      language: '',
      gender: '',
      religion: '',
      nationality: '',
    });
  };

  if (!showForm) return null;

  const styles = {
    container: { padding: '20px', maxWidth: '500px', margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: '20px' },
    select: { display: 'block', width: '100%', marginBottom: '15px', padding: '8px' },
    closeButton: { background: 'red', color: 'white', border: 'none', cursor: 'pointer' },
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setShowForm(false)} style={styles.closeButton}>
        ✖
      </button>
      <h2 style={styles.header}>Preferences</h2>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor="qualification">Qualification</label>
        <select
          id="qualification"
          name="qualification"
          value={formValues.qualification}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Qualification--</option>
          <option value="bachelor">Bachelors Degree</option>
          <option value="master">Masters Degree</option>
          <option value="phd">PhD</option>
        </select>

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
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <label htmlFor="gender">Gender</label>
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
          <option value="nonbinary">Non-binary</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="religion">Religion</label>
        <input
          type="text"
          id="religion"
          name="religion"
          value={formValues.religion}
          onChange={handleChange}
          style={styles.select}
          placeholder="Enter Religion"
        />

        <label htmlFor="nationality">Nationality</label>
        <select
          id="nationality"
          name="nationality"
          value={formValues.nationality}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">--Select Nationality--</option>
          {nationalities.map((nationality) => (
            <option key={nationality} value={nationality}>
              {nationality}
            </option>
          ))}
        </select>

        <button type="submit" style={{ ...styles.select, cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserPreferencesForm;
