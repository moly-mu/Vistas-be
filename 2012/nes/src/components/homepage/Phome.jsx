import Footer from "../layout/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

// seccion de Ofertas de Empleo
const JobSection = () => {
  const jobOffers = [
    { title: "Repartidor fines de semana", description: "Entrega de productos en la zona norte.", location: "Madrid" },
    { title: "Médico a domicilio", description: "Atención médica a pacientes en sus hogares.", location: "Barcelona" },
    { title: "Docente particular", description: "Clases particulares de matemáticas y ciencias.", location: "Valencia" },
    { title: "Programador Full-stack", description: "Desarrollo de aplicaciones web y móviles.", location: "Sevilla" },
    { title: "Asesor de ventas", description: "Ventas de productos tecnológicos en tienda.", location: "Madrid" },
    { title: "Community Manager", description: "Gestión de redes sociales para pequeñas empresas.", location: "Barcelona" },
    { title: "Chef de cocina", description: "Preparación de menús en restaurante gourmet.", location: "Madrid" },
    { title: "Diseñador gráfico", description: "Diseño de materiales publicitarios y branding.", location: "Valencia" },
    { title: "Desarrollador de software", description: "Creación y mantenimiento de software empresarial.", location: "Alicante" },
    { title: "Ejecutivo de ventas", description: "Gestión de cuentas y ventas corporativas.", location: "Sevilla" },
  ];

  return (
    <section className="py-16 bg-white mb-32">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#00102D] mb-8">Ofertas de Empleo</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onMouseEnter={(swiper) => swiper.autoplay.stop()}
          onMouseLeave={(swiper) => swiper.autoplay.start()}
          speed={1000}
          className="mb-8"
        >
          {jobOffers.map((offer, index) => (
            <SwiperSlide key={index} className="bg-[#F3F4F6] shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-bold text-[#00102D] mb-4">{offer.title}</h4>
              <p className="text-lg text-[#555555] mb-4">{offer.description}</p>
              <p className="text-md text-[#777777] mb-4">Ubicación: {offer.location}</p>
              <button className="bg-[#D3D87E7] text-[#00102D] px-6 py-2 rounded-lg hover:bg-[#99B3C6] transition duration-300">
                Ver oferta
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// sección de planes 
const PricingSection = () => { 
  return (
    <section className="py-16 bg-[#F9FAFB] mb-32">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#00102D] mb-8">Elige tu Plan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">

          {/* plan  ($0) */}
          <div className="w-full max-w-sm p-6 bg-white border border-[#00102D] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-[#00102D]">Plan Estándar</h5>
            <div className="flex items-baseline text-[#00102D]">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">0</span>
            </div>
            <ul role="list" className="space-y-5 my-7 text-[#00102D]">
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Contenido de la página</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Soporte básico</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Uso de inteligencia artificial (una vez)</span>
              </li>
            </ul>
            <button 
              type="button" 
              className="w-full text-white bg-[#00102D] hover:bg-[#003366] font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 transform hover:scale-105">
              Elegir Plan
            </button>
          </div>

          {/* plan pro ($15,000) */}
          <div className="w-full max-w-sm p-6 bg-white border border-[#00102D] rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-[#00102D]">Plan Pro</h5>
            <div className="flex items-baseline text-[#00102D]">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">15,000</span>
            </div>
            <ul role="list" className="space-y-5 my-7 text-[#00102D]">
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Asistencia personalizada</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Sugerencias personalizadas de empleo</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-[#00102D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight ms-3">Creación de hoja de vida asistida</span>
              </li>
            </ul>

            <button 
              type="button" 
              className="w-full text-white bg-[#00102D] hover:bg-[#003366] font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 transform hover:scale-105">
              Elegir Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};




// seccion de preguntas frecuentes
const FaqSection = () => {
  const faq = [
    { question: "¿Cómo puedo crear una cuenta?", answer: "Solo necesitas registrarte con tu correo electrónico y completar tu perfil, también puedes pedirle ayuda a nuestra inteligencia artificial." },
    { question: "¿Cuáles son los requisitos para postularme?", answer: "Puedes postularte a cualquier oferta si tienes el perfil adecuado según la oferta." },
    { question: "¿Cómo me preparo para una entrevista?", answer: "Te recomendamos prepararte investigando sobre la empresa y practicando preguntas comunes de entrevista." },
    { question: "¿Puedo postularme a múltiples ofertas?", answer: "Sí, puedes postularte a tantas ofertas como desees." },
    { question: "¿Cuánto tiempo tarda en procesarse mi solicitud?", answer: "El proceso de revisión depende de la empresa, pero puede tomar entre 2 y 4 semanas." },
    { question: "¿Puedo modificar mi perfil después de registrarme?", answer: "Sí, puedes actualizar tu perfil en cualquier momento desde la plataforma." },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB] mb-32">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-[#00102D] mb-8">Preguntas Frecuentes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gridAutoRows: 'minmax(150px, auto)' }}>
          {faq.map((item, index) => (
            <div 
              key={index} 
              className={`shadow-lg rounded-lg p-6 transition-all duration-300 
                ${index === 0 ? 'bg-[#99B3C6] text-white lg:col-span-2 ' : ''} 
                ${index === 1 ? 'bg-white lg:col-span-1 ' : ''} 
                ${index === 2 ? 'bg-white lg:col-span-1 ' : ''} 
                ${index === 3 ? 'bg-[#00102D] text-white lg:col-span-2' : ''} 
                ${index === 4 ? 'bg-white lg:col-span-1 ' : ''} 
                ${index === 5 ? 'bg-white lg:col-span-1 ' : ''}
              `}
            >
              <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
              <p className="text-md">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] w-full py-32 text-center px-4 mb-24 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D3D87E7] leading-tight tracking-tight relative top-[-8px]">
          ¿Buscas <span className="text-[#003366]">empleo</span>? Conéctate con cientos de oportunidades laborales
          que se ajustan a tus habilidades y aspiraciones.
        </h1>
        <p className="mt-4 text-[#627b8d] text-lg">
          Explora una amplia variedad de vacantes que se alinean con tus capacidades y metas laborales.
        </p>
        <div className="mt-8 flex justify-center gap-8">

          <Link to="/Sins">
          <button className="bg-[#003366] text-white px-8 py-3 rounded-lg hover:bg-[#D3D87E7] transition duration-300 transform hover:scale-105">
            Ver más
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
<div className="navbar bg-white shadow-md p-6 flex items-center justify-center sticky top-0 z-50">
  <div className="flex items-center justify-between w-full max-w-screen-xl">
    {/* Logo */}
    <h1 className="text-2xl md:text-3xl font-bold text-center">
      <span className="text-[#FFCB00]">U</span>
      <span className="text-[#00102D]">D</span>
      <span className="text-[#FF0000]">C</span>
      <span className="text-[#00102D]">TALENTO</span>
    </h1>


    <div className="flex items-center gap-4 ml-auto">

          <Link to="/Tins" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
            Soy Administrador
          </Link>

          <Link to="/Pins" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
            Soy Empresa
          </Link>

          <Link to="/Sreg" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition">
            Registrarme
          </Link>

          <Link to="/Sins" className="px-4 py-2 bg-[#00102D] text-white rounded-lg hover:bg-[#003366]">
            Iniciar sesión
          </Link>
      </div>
    </div>
  </div>
    );
  };

const Phome = () => {
  return (
    <div className="font-sans bg-white text-[#00102D]">
      <Navbar />
      <Hero />
      <JobSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Phome;
