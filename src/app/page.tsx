
export default function Home() {
  return (
    <div className="Accueil">
      <main className="container mx-auto p-4">
        <h2>Bienvenue sur mon Portfolio</h2>
        import Image from "next/image";

        <img
          src="/photos/Photo_Ducrocq_Eloane.jpg"
          alt="photo profil"
          width={300}
          height={300}
        />
        <p>
          Je suis un développeur passionné par la création d'applications web
          modernes et réactives. Découvrez mes projets et compétences.
        </p>
        <section>
          <h3>Mes Projets</h3>
          <ul>
            <li>
              <a href="/projet1">Projet 1</a> - Description du projet 1.
            </li>
            <li>
              <a href="/projet2">Projet 2</a> - Description du projet 2.
            </li>
            <li>
              <a href="/projet3">Projet 3</a> - Description du projet 3.
            </li>
          </ul>
        </section>
        <section>
          <h3>Mes Compétences</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>C</li>
            <li>Css</li>
            <li>PHP</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
