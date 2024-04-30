const resumeData = {
    personal_details: {
      name: "praveen.k",
      email: "kpraveenhosur@gmail.com",
      phone: "6369040766",
      address: "123 Main Street, City, Country",
      
    },
    technical_skills: [
      "JavaScript",
      "Python",
      "HTML/CSS",
      "React",
      "Node.js",
      "SQL",
      "Git"
    ],
    areas_of_interest: [
      "Web Development",
      "Machine Learning",
      "Data Visualization",
      "Cloud Computing",
      "Artificial Intelligence"
    ]
  };
  
  // Accessing and printing the resume data
  console.log("Name: " + resumeData.personal_details.name);
  console.log("Email: " + resumeData.personal_details.email);
  console.log("Technical Skills: " + resumeData.technical_skills.join(", "));
  console.log("Areas of Interest: " + resumeData.areas_of_interest.join(", "));
  