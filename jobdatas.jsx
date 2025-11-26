import Wipro from '../assets/WIT.png'
import CTS from '../assets/CTSH_BIG.png'
import Infy from '../assets/INFY_BIG.png'

const jobs = [
//5. SOFTWARE TESTER JOB DETAILS DATA
{
  id: "5",
  title: "Software Tester",
  company: "Infosys",
  ratings: 4.5,
  reviewNo: 954,
  duration: "Full-Time",
  salary: "3.5",
  experience: "1",
  location: "Bangalore",
  tags: ["Full-time"],
  posted: "2025-11-19",
  openings: 3,
  applicants: 195,
  workType: "On-site",
  logo: Infy,
  JobHighlights: [
    "Minimum 1 year of experience in Software Testing",
    "Experience with manual and automated testing tools",
    "Knowledge of SDLC and STLC processes",
    "Familiarity with defect tracking tools like JIRA",
    "Opportunity to work on diverse projects across various domains"
  ],
  companyOverview: "Infosys is a global leader in consulting, technology, and outsourcing solutions. With a strong focus on innovation and quality, Infosys helps clients navigate their digital transformation journeys and achieve sustainable growth.",
  jobDescription: "We are looking for a detail-oriented Software Tester to join our quality assurance team. The ideal candidate will have experience in both manual and automated testing, along with a strong understanding of software development life cycles. You will be responsible for ensuring the quality and reliability of our software products through rigorous testing and validation processes.",
  Responsibilities: [
    "Develop and execute test plans, test cases, and test scripts",
    "Identify, document, and track defects using defect tracking tools",
    "Collaborate with developers and business analysts to understand requirements and ensure test coverage",
    "Perform regression testing and validate bug fixes",
    "Participate in review meetings and provide feedback on requirements and design",
    "Stay updated with the latest testing tools and methodologies"
  ],
  IndustryType: "Information Technology",
  Department: "Quality Assurance",
  KeySkills: ["Manual Testing", "Automated Testing", "JIRA", "Selenium", "SDLC", "STLC"]
},

//6. HR INTERN JOB DETAILS DATA
{
  id: "6",
  title: "HR Intern",
  company: "Wipro",
  ratings: 4.2,
  reviewNo: 876,
  duration: "3 months duration",
  salary: "3",
  experience: "0",
  location: "Hyderabad",
  tags: ["Internship"],
  posted: "2025-11-22",
  openings: 6,
  applicants: 420,
  workType: "Remote",
  logo: Wipro,
  JobHighlights: [
    "Exposure to various HR functions including recruitment, onboarding, and employee engagement",
    "Opportunity to work with a dynamic HR team in a leading IT company",
    "Hands-on experience with HR software and tools",
    "Stipend of ₹15,000 per month",
    "Potential for full-time employment based on performance"
  ],
  companyOverview: "Wipro is a global leader in information technology, consulting, and business process services. With a strong commitment to innovation and excellence, Wipro helps clients navigate their digital transformation journeys and achieve sustainable growth.",
  jobDescription: "We are looking for a motivated HR Intern to join our Human Resources team. The intern will assist with various HR functions including recruitment, onboarding, and employee engagement activities. This is a great opportunity for individuals looking to gain practical experience in HR within a leading IT company.",
  Responsibilities: [
    "Assist in the recruitment process including job postings, resume screening, and scheduling interviews",
    "Support onboarding activities for new hires",
    "Help organize employee engagement events and initiatives",
    "Maintain and update HR records and databases",
    "Assist with HR reporting and analytics",
    "Support the HR team with various administrative tasks"
  ],
  IndustryType: "Information Technology",
  Department: "Human Resources",
  KeySkills: ["Recruitment", "Onboarding", "Employee Engagement", "HR Software", "Communication", "Organizational Skills"]
},

// 7. BUSINESS ANALYST JOB DETAILS DATA
{
  id: "7",
  title: "Business Analyst",
  company: "Cognizant",
  ratings: 5.1,
  reviewNo: 1127,
  duration: "Permanent",
  salary: "5",
  experience: "5",
  location: "Chennai",
  tags: ["Full-time"],
  posted: "2025-11-20",
  openings: 4,
  applicants: 350,
  workType: "Hybrid",
  logo: CTS,
  JobHighlights: [
    "Minimum 5 years of experience in Business Analysis",
    "Strong analytical and problem-solving skills",
    "Experience with requirement gathering and documentation",
    "Knowledge of SQL, Excel, and BI tools",
    "Opportunity to work on high-impact business workflows"
  ],
  companyOverview: "Cognizant is a leading global consulting and IT services company that delivers next-generation digital solutions. With deep industry expertise and a strong focus on innovation, CTS helps organizations transform their business operations and drive measurable value.",
  jobDescription: "We are seeking a passionate Web Developer Intern who is eager to learn and grow in a fast-paced environment. You will work with our development team to build and improve web applications. If you have a good grasp of frontend technologies and are willing to explore backend development, we would like to hear from you.",
  Responsibilities: [
    "Elicit and document business requirements through meetings and client interactions",
    "Analyze business processes and recommend improvements",
    "Build dashboards and reports using Excel, SQL, and BI tools",
    "Collaborate with stakeholders to translate needs into functional solutions",
    "Perform data validation and identify inconsistencies",
    "Assist project teams in planning, tracking, and execution of deliverables",
    "Prepare business requirement documents (BRD) and functional specification documents (FSD)",
    "Monitor KPIs and prepare insights for leadership"
  ],
  IndustryType: "Information Technology",
  Department: "Business Analysis",
  KeySkills: ["Business Analysis", "SQL", "Excel", "Power BI", "Agile", "Documentation"]
},

// 8. WEB DEVELOPER INTERN JOB DETAILS DATA
{
  id: "8",
  title: "Web Developer Intern",
  company: "Infosys",
  ratings: 5.8,
  reviewNo: 988,
  duration: "6 months duration",
  salary: "4.5",
  experience: "3",
  location: "Bangalore",
  tags: ["Internship"],
  posted: "2025-11-18",
  openings: 11,
  applicants: 350,
  workType: "Remote",
  logo: Infy,
  JobHighlights: [
    "Freshers with basic coding knowledge can apply",
    "Certification in Web Development upon completion",
    "Strong understanding of HTML, CSS, JavaScript",
    "Opportunity to work on live projects"
  ],
  companyOverview:
    "Infosys is a fast-growing IT service provider specializing in web and mobile app development. With a strong portfolio of global clients, we focus on building scalable, user-friendly digital products. We aim to help businesses grow through innovative technology solutions.",
  jobDescription:
    "We are seeking a passionate Web Developer Intern who is eager to learn and grow in a fast-paced environment. You will work with our development team to build and improve web applications. If you have a good grasp of frontend technologies and are willing to explore backend development, we would love to hear from you.",
  Responsibilities: [
    "Assist in developing responsive web pages using HTML, CSS, and JavaScript",
    "Collaborate with the team to implement new features",
    "Debug and fix issues in existing projects",
    "Work with REST APIs and integrate backend services",
    "Participate in code reviews and follow best coding practices",
    "Test web applications and ensure cross-browser compatibility",
    "Document code changes and maintain project structure"
  ],
  IndustryType: "Information Technology",
  Department: "Frontend Development",
  KeySkills: ["HTML", "CSS", "JavaScript", "React", "Git", "API Integration"]
}
];

//5. Similar Jobs Data for Software Tester
return(
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Software Tester </h2>
                  <p className="similar-job-company">TechWings Solutions <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.0 <span className="Opportunities-divider">|</span><span> 112 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">T</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . On-Site, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 month ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">QA Tester Intern</h2>
                  <p className="similar-job-company">InfotechBase <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.8 <span className="Opportunities-divider">|</span><span> 549 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">I</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 4 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Banglore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 3 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Manual testing Intern</h2>
                  <p className="similar-job-company">CodeSphere India  <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.7 <span className="Opportunities-divider">|</span><span> 143 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Remote, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Coimbatore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 7 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Junior Software tester</h2>
                  <p className="similar-job-company">SoftTech Labs <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.7 <span className="Opportunities-divider">|</span><span> 99 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">S</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . On-site, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Hyderabad</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Software QA Analyst Intern</h2>
                  <p className="similar-job-company">BrightApps Solutions <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.0 <span className="Opportunities-divider">|</span><span> 124 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">B</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Pune</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 4 days ago
                </p>
              </div>
            </div>
          </div>
);

//6. Similar Jobs Data for HR Intern
return
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">HR Intern</h2>
                  <p className="similar-job-company">PeopleFirst Solutions <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.9 <span className="Opportunities-divider">|</span><span> 150 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">P</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . On-Site, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">HR & Admin Intern</h2>
                  <p className="similar-job-company">TalentBridge India <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.1 <span className="Opportunities-divider">|</span><span> 84 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">T</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 6 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Banglore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 5 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Talent Acquisition Intern</h2>
                  <p className="similar-job-company">HRWave Technologies <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.7 <span className="Opportunities-divider">|</span><span> 210 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">H</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Remote, 4 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Coimbatore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 3 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Recruitment Intern</h2>
                  <p className="similar-job-company">HireNest Pvt Ltd <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.3 <span className="Opportunities-divider">|</span><span> 549 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">H</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . On-site, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Pune</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 month ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">HR Operations Intern</h2>
                  <p className="similar-job-company">WorkForce India <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.8 <span className="Opportunities-divider">|</span><span> 97 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">W</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 12 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Kochin</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 4 days ago
                </p>
              </div>
            </div>
          </div>

//7.Similar Jobs Data for Business Analyst
return
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Business Analyst</h2>
                  <p className="similar-job-company">Tata Consultancy Services <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.2 <span className="Opportunities-divider">|</span><span> 3k Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">Tcs</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 6 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Banglore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 2 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Business Analyst</h2>
                  <p className="similar-job-company">Wipro Technologies <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.9 <span className="Opportunities-divider">|</span><span> 310 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">Wipro</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Remote, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Hyderabad</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 month ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Business Analyst</h2>
                  <p className="similar-job-company">Accenture <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.6 <span className="Opportunities-divider">|</span><span> 987 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">A</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . On-Site, 12 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 5 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Business Analyst</h2>
                  <p className="similar-job-company">Deloitte <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.3 <span className="Opportunities-divider">|</span><span> 760 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">D</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . Hybrid, 10 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 week ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Business Analyst</h2>
                  <p className="similar-job-company">Cognizant <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.1 <span className="Opportunities-divider">|</span><span> 2k Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">CTS</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Full-time . On-site, Permanent</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Hyderabad</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 12 days ago
                </p>
              </div>
            </div>
          </div>


//8. Similar Jobs Data for Web developer Intern
return
          <div className="opp-job-sidebar">
            <h3>Similar Jobs</h3>
            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Web Developer Intern</h2>
                  <p className="similar-job-company">CodeCrafters Technologies <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 2.9 <span className="Opportunities-divider">|</span><span> 271 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . On-Site, 6 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 day ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Web Developer Intern</h2>
                  <p className="similar-job-company">CodeWave Labs <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.8 <span className="Opportunities-divider">|</span><span> 198 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">C</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Remote, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Banglore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 1 month ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Web Developer Intern</h2>
                  <p className="similar-job-company">PixelRoot Technologies <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 4.0 <span className="Opportunities-divider">|</span><span> 765 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">P</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . On-Site, 6 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Coimbatore</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 3 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Web Developer Intern</h2>
                  <p className="similar-job-company">ByteFusion Pvt Ltd <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.9 <span className="Opportunities-divider">|</span><span> 289 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">B</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Chennai</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 10 days ago
                </p>
              </div>
            </div>

            <div className="opp-similar-job">
              <div className="Opportunities-job-header">
                <div>
                  <h2 className="similar-job-title">Web Developer Intern</h2>
                  <p className="similar-job-company">SoftLogic Innovations <span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3.5 <span className="Opportunities-divider">|</span><span> 150 Reviews</span></p>
                </div>
                <div className="similar-job-logo-placeholder">S</div>
              </div>
              <div className="Opportunities-job-details">
                <p className='Opportunities-detail-line'>Internship . Hybrid, 3 months</p>
                <p className='Opportunities-detail-line'><img src={place} className='card-icons' />Hyderabad</p>
              </div>
              <div className="similar-job-footer">
                <a href="#" className="Opportunities-job-type">
                  View details
                </a>
                <p className='similar-job-footer-posted'>
                  Posted 7 days ago
                </p>
              </div>
            </div>
          </div>
