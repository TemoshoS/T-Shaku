document.getElementById("name").innerHTML = "Temosho shaku";

document.getElementById("bio").innerHTML = "A highly motivated software developer seeking to get a position in a reputed company, where I can use my skills and knowledge to learn new things and grow as a software developer.";

document.getElementById("education").innerHTML = "Education";

document.getElementById("school").innerHTML = "Tshwane University of Technology";
document.getElementById("major").innerHTML = "Major Subjects";
document.getElementById("modules").innerHTML = "<li>Development Software </li><li> Information System </li><li> Technical Programming </li><li> System Software";

document.getElementById("secondary").innerHTML = "Mokhulwane Seconday School";
document.getElementById("subjects").innerHTML = "<li>Mathematics</li><li>Life Science </li><li> Physical Science </li><li> Agricultural Science";

document.getElementById("experience").innerHTML = "Experience";
document.getElementById("experiences").innerHTML = "<h2>MLAB(CodeTribe Academy)  - Web and Mobile react developer trainee</h2><p><b>June 2023-Present</b></p><li>Developed responsive and user-friendly web applications using React.js.</li><li>Created mobile applications using React Native, delivering cross-platform solutions.</li><li>Integrated third-party APIs and libraries for enhanced app functionality.</li><li>Diagnosed and resolved technical issues and bugs in a timely manner.</li><li>Integrated third-party APIs and libraries for enhanced app functionality.</li><li>Integrated third-party APIs and libraries for enhanced app functionality.</li><h2>Moepi Publishing - Software Development Internship</h2><p><b>July 2022-June 2023</b></p><li>Working closely with other developers, UX designers, business and systems analysts</li><li>Designing, implementing and maintaining Java-based applications Writing optimized SQL queries for integration with other applications</li><li>Ensuring performance, security, and availability of databases</li><li>Designs features and makes improvements based on user experience data</li><h2>TSA Foundation - System Development level 5 learnership</h2><p><b>November 2021-November 2022</b></p><li>Personal Development.</li><li>Gathering techniques for computer system development.</li><li>Database design, implementation and development.</li><h2>Dynamic dna - Microsoft Azure learnership</h2><p><b>March 2021-June 2022</b></p><li>Quickly learned new skills and applied them to daily tasks</li><li>Used planning skills to achieve results according to schedule</li><li>Used critical thinking to down problems, evaluate solutions and make decisions</li><li>Learned azure concepts</li><li>Learned to design and develop web applications using c# and ASP.NET</li><h2>Deviare - Angular 8 learnership</h2><p><b>August 2020-Septermber 2020</b></p><li>Designed and developed a web application using angular and JSON server.</li><li>Designing and developing user interfaces using angular 8 best practices</li><li>Writing JavaScript, CSS, and HTML</li><li>Writing clean code</li><li>Ensuring high performance.</li>";


document.getElementById("skill").innerHTML = "Skills";
document.getElementById("skills").innerHTML = "<li>Angular</li> <li>Agile</li><li>Scrum</li><li>Azure</li> <li>HTML, CSS and JavaScript</li> <li>Java and c#</li> <li>SQL</li> <li>Git</li><li>Web design and development</li> <li>Problem solving and logical thinking</li> <li>Teamworker</li> <li>Excellent interpersonal skills</li>";


document.getElementById("project").innerHTML = "Projects";



document.getElementById("unfinishedprojects").innerHTML = "<li> File Management System</li><li> Que Management System </><li> Ecommerce website</li><li> Food Blog</li><li> </li>";


document.getElementById("reference").innerHTML = "References";
document.getElementById("reference1").innerHTML = "<li>Available on request</li>";

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}