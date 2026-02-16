import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales de AdDing Agency."
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-40">
      <Link href="/" className="text-sm text-brand-blue hover:underline">← Volver al inicio</Link>
      <h1 className="mt-6 font-title text-4xl font-bold text-brand-black">Política de Privacidad</h1>
      <p className="mt-2 text-sm text-black/50">Última actualización: febrero 2026</p>

      <div className="prose mt-8 max-w-none text-black/75">
        <h2>1. Responsable del Tratamiento</h2>
        <p>
          <strong>CINTA MK FUTURISTA LIMITADA</strong>, cédula jurídica <strong>3-102-862791</strong>, con domicilio
          en Alajuela, Costa Rica (Centro Comercial City Mall, Oficinas de Venture X), operando bajo la marca
          <strong> AdDing Agency</strong>, es responsable del tratamiento de tus datos personales.
        </p>
        <p>Correo de contacto: <a href="mailto:hola@addingagency.com">hola@addingagency.com</a></p>

        <h2>2. Datos que Recopilamos</h2>
        <p>Podemos recopilar los siguientes datos personales:</p>
        <ul>
          <li><strong>Datos de contacto:</strong> nombre, correo electrónico, número de teléfono, empresa.</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia, cookies.</li>
          <li><strong>Datos proporcionados voluntariamente:</strong> información enviada a través de formularios de contacto, WhatsApp o correo electrónico.</li>
        </ul>

        <h2>3. Finalidad del Tratamiento</h2>
        <p>Utilizamos tus datos para:</p>
        <ul>
          <li>Responder a consultas y solicitudes de servicio.</li>
          <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios (con tu consentimiento).</li>
          <li>Mejorar la experiencia de navegación y optimizar el Sitio.</li>
          <li>Cumplir con obligaciones legales y contractuales.</li>
          <li>Elaborar estadísticas anónimas de uso del Sitio.</li>
        </ul>

        <h2>4. Base Legal</h2>
        <p>
          El tratamiento de datos se realiza con base en: (a) tu consentimiento, (b) la ejecución de un contrato o
          solicitud de servicios, y (c) el interés legítimo de AdDing Agency en mejorar sus servicios, conforme a la
          Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N° 8968) de Costa Rica.
        </p>

        <h2>5. Cookies</h2>
        <p>
          El Sitio utiliza cookies propias y de terceros (como Google Analytics) para analizar el tráfico y mejorar
          la experiencia de usuario. Podés configurar tu navegador para rechazar cookies, aunque esto podría afectar
          la funcionalidad del Sitio.
        </p>

        <h2>6. Compartir Datos con Terceros</h2>
        <p>
          No vendemos ni alquilamos tus datos personales. Podemos compartir datos con proveedores de servicios que
          nos asisten en la operación del Sitio (hosting, analítica, email marketing), siempre bajo acuerdos de
          confidencialidad y protección de datos.
        </p>

        <h2>7. Conservación de Datos</h2>
        <p>
          Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades
          descritas o según lo requiera la legislación aplicable.
        </p>

        <h2>8. Tus Derechos</h2>
        <p>Tenés derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre vos.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para fines comerciales.</li>
        </ul>
        <p>
          Para ejercer tus derechos, escribinos a{" "}
          <a href="mailto:hola@addingagency.com">hola@addingagency.com</a> indicando tu solicitud.
        </p>

        <h2>9. Seguridad</h2>
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales contra
          acceso no autorizado, pérdida o alteración.
        </p>

        <h2>10. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de actualizar esta Política de Privacidad. Los cambios serán publicados en
          esta página con la fecha de última actualización.
        </p>

        <h2>11. Contacto</h2>
        <p>
          Para consultas sobre privacidad y protección de datos:{" "}
          <a href="mailto:hola@addingagency.com">hola@addingagency.com</a>
        </p>
      </div>
    </main>
  );
}
