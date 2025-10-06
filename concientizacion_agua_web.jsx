import { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Users, BookOpen, Lightbulb, CheckCircle, GraduationCap } from "lucide-react";

export default function ProyectoAgua() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Conciencia del Agua</h1>
          <div className="space-x-6 hidden md:block">
            {[
              ["Inicio", "inicio"],
              ["Problema", "problema"],
              ["Estrategias", "estrategias"],
              ["Propuesta", "propuesta"],
              ["Conclusión", "conclusion"],
              ["Créditos", "creditos"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`hover:text-blue-200 transition ${activeSection === id ? "underline" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Secciones */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-blue-100 pt-24 text-center p-6">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-blue-700 max-w-4xl">
          ¿De qué manera podemos concientizar a nuestra comunidad para generar un cambio significativo en el cuidado del agua?
        </motion.h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-700">
          El agua es fuente de vida, pero su disponibilidad se ve amenazada por el mal uso y la falta de conciencia. Este proyecto busca inspirar a la comunidad a cuidar el agua, desde la educación hasta la acción colectiva.
        </p>
      </section>

      <section id="problema" className="min-h-screen bg-white py-20 px-8 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3"><Droplets /> Problema</h2>
          <p className="text-lg leading-relaxed">
            La crisis hídrica es una realidad que afecta a millones de personas en el mundo. En muchas comunidades, el acceso al agua potable se ha vuelto limitado y desigual. Esta problemática no solo es ambiental, sino también social y ética: cuidar el agua significa cuidar la vida y la dignidad humana.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            La indiferencia hacia el consumo responsable y la falta de políticas efectivas agravan el problema. Es urgente que la educación, la acción comunitaria y la gestión sostenible se unan para generar un cambio real.
          </p>
        </div>
      </section>

      <section id="estrategias" className="min-h-screen bg-blue-50 py-20 px-8 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3"><BookOpen /> Estrategias</h2>
          <p className="text-lg leading-relaxed">
            Las estrategias para fomentar una cultura del agua deben ser integrales. En primer lugar, la educación ambiental en las escuelas ayuda a formar conciencia desde edades tempranas. Proyectos escolares, campañas y actividades ecológicas fortalecen el compromiso con el recurso hídrico.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Además, la participación comunitaria es esencial. Las acciones de prevención, las campañas de limpieza y la formación de promotores del agua permiten que el mensaje llegue a más personas. Finalmente, la vigilancia y regulación garantizan que el agua se mantenga limpia y accesible para todos.
          </p>
        </div>
      </section>

      <section id="propuesta" className="min-h-screen bg-white py-20 px-8 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3"><Lightbulb /> Propuesta</h2>
          <p className="text-lg leading-relaxed">
            Se propone la creación de <strong>Brigadas Comunitarias del Agua</strong>, grupos conformados por miembros de la comunidad que promuevan el uso responsable del agua y la adopción de prácticas sostenibles.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
            <li><strong>Monitorear</strong> el uso del agua, reportando fugas y casos de desperdicio.</li>
            <li><strong>Educar</strong> a los vecinos mediante charlas, ferias y talleres sobre sostenibilidad.</li>
            <li><strong>Actuar</strong> con campañas de limpieza, reforestación y reciclaje de agua.</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            Estas brigadas fortalecerán el sentido de pertenencia y responsabilidad, uniendo a las personas en torno a un propósito común: proteger el agua, proteger la vida.
          </p>
        </div>
      </section>

      <section id="conclusion" className="min-h-screen bg-blue-50 py-20 px-8 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3"><CheckCircle /> Conclusión</h2>
          <p className="text-lg leading-relaxed">
            La concientización sobre el cuidado del agua no se trata solo de enseñar a ahorrar, sino de reconstruir nuestro vínculo con la naturaleza. Cada gota cuenta, y cada acción puede marcar la diferencia. Las brigadas del agua simbolizan ese cambio posible desde la comunidad hacia el mundo.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Recordemos que el cambio real comienza cuando los afectados se vuelven agentes del cambio. Cuidar el agua es cuidar el futuro.
          </p>
        </div>
      </section>

      <section id="creditos" className="min-h-screen bg-white py-20 px-8 md:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center justify-center gap-3"><GraduationCap /> Créditos</h2>
          <p className="text-lg mb-4">I.E. San Miguel – Ciencia y Tecnología</p>
          <p className="text-lg">Alumnos: Culquicondor Purizaca Jesús Mateo, Gil Sánchez Kiara Ximena, Chinguel Chanta María de Jesús, Chunga Timana Abraham Manuel, Guerrero Molina Antonella, Gallo Chapillique Richard Mattius, Morales Cueva Daniel Junior, Arcela Ancajima José Daniel.</p>
          <p className="mt-4 text-lg">Docente: Canales Montenegro Luz María</p>
          <p className="mt-6 text-gray-600">Piura – Perú</p>
        </div>
      </section>
    </div>
  );
}
