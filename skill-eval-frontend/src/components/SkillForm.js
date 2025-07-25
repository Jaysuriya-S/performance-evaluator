import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
import './SkillForm.css';
import { FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const skills = [
  "Python", "Java", "C", "C++", "JavaScript", "React", "Node.js", "Django", "HTML", "CSS",
  "SQL", "MongoDB", "Express.js", "TypeScript", "Angular", "Vue.js", "Flask", "Kotlin",
  "Swift", "C#", "PHP", "Laravel", "Ruby", "Rails", "Git", "GitHub", "Linux", "AWS",
  "Azure", "GCP", "Docker", "Kubernetes", "Machine Learning", "Deep Learning", "Data Science",
  "AI", "Cybersecurity", "Networking", "Cloud Computing", "TensorFlow", "Pandas", "NumPy",
  "Power BI", "Tableau", "PostgreSQL", "Firebase", "Next.js", "Redux", "Jenkins", "Bootstrap",
  "SASS", "REST API", "GraphQL", "OpenCV", "NLP", "Agile", "Scrum", "Jira", "Spring Boot",
  "Hibernate", "MySQL", "Oracle", "Shell Scripting", "Matplotlib", "Seaborn", "Excel",
  "Statistics", "Unix", "Big Data", "Hadoop", "Spark", "Kafka", "ETL", "NoSQL", "R", "Go",
  "Perl", "Bash", "Visual Basic", "VBA", "Zookeeper", "Ansible", "Terraform", "ELK Stack",
  "Prometheus", "Grafana", "Selenium", "JMeter", "JUnit", "Mockito", "QTP", "LoadRunner",
  "Penetration Testing", "Ethical Hacking", "Computer Vision", "Blockchain", "IoT", "Robotics"
];

const skillOptions = skills.map(skill => ({ label: skill, value: skill }));

const SkillForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    skills: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (selected) => {
    if (selected.length <= 25) {
      setFormData({ ...formData, skills: selected.map(s => s.value) });
    } else {
      toast.warning("⚠️ You can select a maximum of 25 skills.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/submit-skill/', formData);
      toast.success("✅ Skills submitted successfully!");
      console.log(response.data);

      setFormData({ email: '', password: '', skills: [] });
    } catch (error) {
      console.error('Error:', error);
      if (error.response?.data?.error) {
        toast.error(`❌ ${error.response.data.error}`);
      } else {
        toast.error('❌ Submission failed. Please try again.');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <div className="logo">⚙️ SkillEval</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="skill-form-container">
        <h2>🚀 Evaluate Your Technical Skills</h2>

        <form onSubmit={handleSubmit} className="skill-form">
          <label><FaEnvelope /> Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label><FaLock /> Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>💡 Select or Add up to 25 Skills:</label>
          <CreatableSelect
            isMulti
            name="skills"
            options={skillOptions}
            value={skillOptions.filter(option => formData.skills.includes(option.value))}
            onChange={handleSkillChange}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Choose or type your skills..."
            isSearchable
            closeMenuOnSelect={false}
          />

          <button type="submit" className="submit-btn">
            <FaCheckCircle /> Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SkillForm;
