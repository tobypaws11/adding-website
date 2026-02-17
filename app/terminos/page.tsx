import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de AdDing Agency."
};

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-40">
      <Link href="/" className="text-sm text-primary hover:underline">← Volver al inicio</Link>
      <h1 className="mt-6 font-title text-4xl font-bold text-white">Términos y Condiciones</h1>
      <p className="mt-2 text-sm text-white/40">Última actualización: febrero 2026</p>

      <div className="prose mt-8 max-w-none text-black/75">
        <h2>1. Identificación</h2>
        <p>
          Este sitio web es propiedad y operado por <strong>CINTA MK FUTURISTA LIMITADA</strong>, cédula jurídica
          <strong> 3-102-862791</strong>, con domicilio en Alajuela, Costa Rica (Centro Comercial City Mall, Oficinas de Venture X),
          bajo la marca comercial <strong>AdDing Agency</strong>.
        </p>
        <p>Correo de contacto: <a href="mailto:hola@addingagency.com">hola@addingagency.com</a></p>

        <h2>2. Aceptación de los Términos</h2>
        <p>
          Al acceder y utilizar el sitio web <strong>www.addingagency.com</strong> (en adelante, &quot;el Sitio&quot;),
          aceptás estos Términos y Condiciones en su totalidad. Si no estás de acuerdo con alguna parte, te pedimos
          que no uses el Sitio.
        </p>

        <h2>3. Servicios</h2>
        <p>
          AdDing Agency ofrece servicios de marketing digital, diseño y desarrollo web, optimización SEO,
          automatización, agentes de inteligencia artificial, email marketing, generación de leads y consultoría
          estratégica para PYMES. Los alcances específicos de cada servicio se definen en los acuerdos individuales
          con cada cliente.
        </p>

        <h2>4. Propiedad Intelectual</h2>
        <p>
          Todo el contenido del Sitio — incluyendo textos, gráficos, logotipos, íconos, imágenes, código fuente,
          diseño y estructura — es propiedad de CINTA MK FUTURISTA LIMITADA o de sus licenciantes y está protegido
          por las leyes de propiedad intelectual de Costa Rica y tratados internacionales.
        </p>
        <p>
          Queda prohibida la reproducción, distribución, modificación o uso comercial del contenido sin autorización
          previa por escrito.
        </p>

        <h2>5. Uso Aceptable</h2>
        <p>Te comprometés a utilizar el Sitio únicamente para fines legales y de acuerdo con estos Términos. Queda prohibido:</p>
        <ul>
          <li>Intentar acceder sin autorización a sistemas o datos del Sitio.</li>
          <li>Usar el Sitio para transmitir material ilegal, ofensivo o que infrinja derechos de terceros.</li>
          <li>Interferir con el funcionamiento normal del Sitio.</li>
        </ul>

        <h2>6. Limitación de Responsabilidad</h2>
        <p>
          El contenido del Sitio se proporciona con fines informativos y comerciales. AdDing Agency no garantiza
          que el Sitio esté libre de errores o interrupciones. En la medida permitida por la ley, CINTA MK
          FUTURISTA LIMITADA no será responsable por daños directos o indirectos derivados del uso del Sitio.
        </p>

        <h2>7. Enlaces a Terceros</h2>
        <p>
          El Sitio puede contener enlaces a sitios web de terceros. AdDing Agency no tiene control sobre dichos
          sitios y no asume responsabilidad por su contenido o políticas de privacidad.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos
          desde su publicación en el Sitio. El uso continuado del Sitio constituye aceptación de los Términos
          actualizados.
        </p>

        <h2>9. Legislación Aplicable</h2>
        <p>
          Estos Términos se rigen por las leyes de la República de Costa Rica. Cualquier controversia será sometida
          a los tribunales competentes de San José, Costa Rica.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para consultas sobre estos Términos, escribinos a{" "}
          <a href="mailto:hola@addingagency.com">hola@addingagency.com</a>.
        </p>
      </div>
    </main>
  );
}
