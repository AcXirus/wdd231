const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');  
});

//----- last midificated and copyrigth ------------//

const currentYear = new Date().getFullYear();
const footerParagraph = document.getElementById('copyright-year');
if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador`;
}


const nLastModif = Date.parse(document.lastModified);
const readableDate = new Date(nLastModif);

document.getElementById("lastModified").textContent = "Last Modification: " + readableDate.toLocaleString();

//------------------ courses and buttons ------------------------------.//

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseList = document.getElementById('course-list');
const courseCount = document.getElementById('course-count');
const totalCredits = document.getElementById('total-credits');

function displayCourses(courseArray) {
  courseList.innerHTML = '';
  courseCount.textContent = courseArray.length;

  // Función para calcular créditos totales de cursos completados
  function calculateTotalCredits() {
    return courseArray
      .filter(course => course.completed)
      .reduce((sum, course) => sum + course.credits, 0);
  }

  // Actualizamos el texto de créditos totales (por defecto 0)
  const total = calculateTotalCredits();
  totalCredits.innerHTML = `Total credits of selected courses: <span id="total-credits-count">${total}</span>`;

  courseArray.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    if (course.completed) card.classList.add('completed');

    const title = document.createElement('div');
    title.textContent = course.title;

    const details = document.createElement('div');
    details.className = 'course-details';
    details.innerHTML = `
      <p><strong>Course:</strong> ${course.subject} ${course.number}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;

    card.appendChild(title);
    card.appendChild(details);

    card.addEventListener('click', () => {
      course.completed = !course.completed;
      displayCourses(courseArray);  // Actualizamos la lista y créditos al hacer clic
    });

    courseList.appendChild(card);
  });
}

document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('cse').addEventListener('click', () =>
  displayCourses(courses.filter(course => course.subject === 'CSE'))
);
document.getElementById('wdd').addEventListener('click', () =>
  displayCourses(courses.filter(course => course.subject === 'WDD'))
);

displayCourses(courses);