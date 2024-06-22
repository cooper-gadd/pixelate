export const App = () => {
  return (
    <article className="prose">
      <header>
        <h1>Cooper Gadd</h1>
        <p>
          Cowlesville, New York | 585-813-2699 |{" "}
          <a href="mailto:coopergadd@yahoo.com">coopergadd@yahoo.com</a>
        </p>
        <p>
          <a href="http://www.ctgadd.com">www.ctgadd.com</a> |
          <a href="http://www.linkedin.com/in/coopergadd">
            www.linkedin.com/in/coopergadd
          </a>{" "}
          |<a href="http://www.github.com/cgadd21">www.github.com/cgadd21</a>
        </p>
      </header>
      <section>
        <h2>OBJECTIVE</h2>
        <p>Seeking a career as a Software Engineer.</p>
      </section>
      <section>
        <h2>EDUCATION</h2>
        <p>
          <strong>Rochester Institute of Technology</strong> Spring 2022 - Fall
          2024 Bachelor of Science, Computing and Information Technologies GPA
          3.9
        </p>
        <p>
          <strong>Monroe Community College</strong> Fall 2020 - Fall 2022
          Associate of Science, Information Technology GPA 3.4
        </p>
      </section>
      <section>
        <h2>SKILLS</h2>
        <p>
          <strong>Programming Languages:</strong> C#, Go, Java, Python, Swift
        </p>
        <p>
          <strong>Web Development:</strong> PHP, TypeScript, JavaScript, CSS,
          HTML
        </p>
        <p>
          <strong>Database Technologies:</strong> SQL, MySQL, PostgreSQL, Oracle
        </p>
        <p>
          <strong>Version Control:</strong> GitHub, GitLab, SourceTree
        </p>
        <p>
          <strong>Frameworks:</strong> Angular, Blazor, Express, Flask, Lumen,
          React, Spring Boot
        </p>
      </section>
      <section>
        <h2>RELEVANT EXPERIENCE</h2>
        <h3>Attica Package Company Inc.</h3>
        <p>
          Attica, NY December 2022 – Present
          <em>Software Engineer Freelance</em>
        </p>
        <ul>
          <li>Created and hosted a company website.</li>
          <li>
            Developed a SQL database application using Microsoft Access to
            streamline material tracking, replacing Excel sheets.
          </li>
          <li>
            Automated report calculations and enabled data querying based on
            parameters.
          </li>
        </ul>
        <h3>Touchstone Technology, Inc.</h3>
        <p>
          Rochester, NY March 2023 – Present
          <em>Software Engineer Internship</em>
        </p>
        <ul>
          <li>
            Created a Blazor WebAssembly web app for logging employee
            assignments, generating reports, tracking inventory and yield,
            printing labels, displaying schedules, and searching part details.
          </li>
          <li>
            Implemented APIs for HTTPS requests to SQL database using Dapper.
          </li>
          <li>Integrated GitLab for version control.</li>
          <li>
            Enhanced sister company's WinForms app by fixing device activation
            and upgrading to label printing from laser engraving.
          </li>
        </ul>
      </section>
    </article>
  );
};
