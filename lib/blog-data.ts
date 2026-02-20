export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryKey: "seo" | "ai" | "auto" | "leads" | "marketing";
  readingTime: number;
  publishedAt: string;
  author: string;
  authorRole: string;
  coverGradient: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  faq?: Array<{ question: string; answer: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-vs-geo-costa-rica",
    title: "Por qué el SEO ya no es suficiente: Cómo el GEO está Cambiando el juego en Costa Rica",
    excerpt:
      "Si tu negocio solo optimiza para Google, podés estar perdiendo las búsquedas que hoy pasan en ChatGPT y Gemini. Esta guía te muestra cómo adaptarte antes que tu competencia.",
    content: `
      <p>Imaginá este escenario real: una empresa de servicios en Heredia invirtió meses en SEO. Arregló títulos, metió palabras clave, escribió blogs, consiguió enlaces y por fin empezó a aparecer en Google cuando alguien buscaba "agencia de marketing en Costa Rica". Todo bien, ¿verdad? No tanto. Un día un potencial cliente abrió ChatGPT, escribió: "¿Cuál agencia de marketing recomendás en Costa Rica para conseguir más leads?" y la empresa simplemente no apareció.</p>
      <p>Eso no fue casualidad. Fue una señal de cambio. Hoy mucha gente ya no hace solo búsquedas clásicas. Pregunta directo en motores generativos como ChatGPT, Gemini o experiencias con IA dentro de Google. Si tu marca no está preparada para ese formato, podés tener buen SEO y aun así quedar invisible en el momento exacto en que un cliente está listo para decidir.</p>
      <p>En AdDing lo estamos viendo cada vez más con PYMES ticas: negocios que tienen tráfico, pero no están presentes en respuestas generadas por IA. Y si no salís ahí, otro ocupa tu lugar. Por eso hoy no alcanza con "hacer SEO". Necesitás sumar GEO.</p>

      <h2>¿Qué es el GEO (Generative Engine Optimization)?</h2>
      <p>GEO significa <strong>Generative Engine Optimization</strong>. Es la práctica de optimizar tu presencia digital para que los motores generativos te entiendan, te citen y te recomienden cuando una persona hace una consulta conversacional.</p>
      <p>El SEO tradicional te ayuda a posicionarte en una lista de resultados. El GEO te ayuda a entrar en una <strong>respuesta sintetizada</strong>. Esa diferencia es enorme: en una página de resultados podés competir por clics; en una respuesta de IA competís por aparecer en el resumen final que el usuario toma como referencia.</p>
      <h3>SEO vs GEO en simple</h3>
      <ul>
        <li><strong>SEO:</strong> optimizás para ranking, clic y tráfico orgánico.</li>
        <li><strong>GEO:</strong> optimizás para interpretación semántica, citación y recomendación dentro de respuestas generadas.</li>
        <li><strong>SEO:</strong> prioridad en keywords exactas y arquitectura de sitio.</li>
        <li><strong>GEO:</strong> prioridad en contexto, entidades, autoridad temática y respuestas claras.</li>
      </ul>
      <p>No es reemplazar SEO. Es evolucionarlo. Si tu estrategia digital en 2026 no incluye GEO, estás jugando con reglas viejas en un mercado nuevo.</p>

      <h2>Los 3 cambios más importantes que están redefiniendo cómo la gente busca</h2>
      <h3>1) De buscar "palabras" a conversar "problemas"</h3>
      <p>Antes una persona escribía "agencia SEO Heredia". Ahora pregunta: "Tengo una pyme de servicios en Heredia y necesito más prospectos calificados con presupuesto limitado, ¿qué agencia me conviene?"</p>
      <p>Esa consulta trae intención, contexto, urgencia y restricciones. Si tu contenido solo está optimizado para keywords cortas, la IA puede considerar que no responde suficientemente bien. En cambio, cuando publicás piezas que abordan preguntas completas, objeciones reales y escenarios concretos, aumentás la probabilidad de ser citado.</p>

      <h3>2) De diez enlaces azules a una respuesta compuesta</h3>
      <p>En los resultados tradicionales, el usuario evaluaba varias páginas. En experiencias generativas, muchas veces ve primero una única respuesta que resume fuentes. Eso cambia la economía de atención: estar en posición 4 u 8 puede importar menos que estar dentro del bloque generado.</p>
      <p>Además, el usuario puede no hacer clic de inmediato. Toma una decisión preliminar dentro de la misma interfaz. Si tu marca no aparece en esa capa, perdés autoridad antes de que exista la visita.</p>

      <h3>3) De autoridad técnica aislada a autoridad temática integral</h3>
      <p>Antes podías posicionar una página buena y listo. Ahora los motores generativos valoran señales más amplias: consistencia de mensajes, cobertura profunda de un tema, claridad de propuesta, reputación y evidencia. No gana quien repite más keywords; gana quien demuestra que realmente domina un tema de punta a punta.</p>
      <blockquote>
        "En la era generativa, la pregunta no es si Google te indexa. La pregunta es si la IA te entiende y confía en vos."
      </blockquote>

      <h2>Cómo optimizar para IA sin perder foco de negocio</h2>
      <p>La buena noticia es que no necesitás tirar todo lo que ya hiciste en SEO. Necesitás reorganizarlo con criterios de comprensión semántica y utilidad real. Estos son los pilares que más impacto tienen en nuestra experiencia con negocios en Costa Rica:</p>

      <h3>Contenido estructurado para preguntas reales</h3>
      <p>Creá contenido que responda preguntas concretas de clientes, no solo temas amplios. Formatos que funcionan:</p>
      <ul>
        <li>Guías comparativas (ejemplo: SEO vs GEO para PYMES ticas).</li>
        <li>Páginas tipo "cómo elegir" con criterios claros.</li>
        <li>FAQs con respuestas cortas y directas.</li>
        <li>Casos reales con contexto, proceso y resultado.</li>
      </ul>
      <p>Cuando la respuesta está bien organizada, la IA la puede extraer y citar mejor.</p>

      <h3>Entidades claras y consistentes</h3>
      <p>Tu marca debe estar definida como entidad: quién sos, qué hacés, en qué país operás, para qué tipo de clientes y con qué servicios. Si en cada página te describís diferente, el modelo se confunde. Mantené consistencia en naming, propuesta de valor y categorías de servicio.</p>

      <h3>Schema markup útil, no decorativo</h3>
      <p>El schema sigue siendo clave, pero no por moda. Es una forma de darle estructura legible a máquinas. Prioridades prácticas:</p>
      <ul>
        <li><strong>Organization/LocalBusiness:</strong> identidad y ubicación.</li>
        <li><strong>Service:</strong> qué ofrecés exactamente.</li>
        <li><strong>Article/FAQ:</strong> contenido informativo con intención clara.</li>
      </ul>
      <p>Si el schema está bien implementado, reducís ambigüedad y ayudás a la IA a tomar mejores señales.</p>

      <h3>Respuestas directas antes que texto inflado</h3>
      <p>Muchos sitios escriben párrafos eternos sin llegar al punto. En contexto generativo eso juega en contra. Abrí secciones con una respuesta directa y luego desarrollá. Por ejemplo: "¿Qué agencia conviene para una pyme en Costa Rica?" seguido por criterios medibles, no promesas vagas.</p>

      <h3>Autoridad temática y profundidad</h3>
      <p>No alcanza con un artículo aislado. Necesitás clústeres de contenido que cubran un tema completo: estrategia, implementación, errores, casos, métricas y herramientas. Esa densidad temática es una señal fuerte de autoridad.</p>

      <h2>Caso Costa Rica: por qué las PYMES que adopten GEO primero van a ganar</h2>
      <p>El mercado tico tiene una ventaja estratégica: todavía está en etapa temprana de adopción generativa. Eso significa que hay espacio para posicionarse rápido si actuás ahora. En sectores como salud estética, servicios profesionales, educación privada, inmobiliarias y gastronomía, ya se nota una tendencia: el cliente consulta primero en IA y después valida en web o redes.</p>
      <p>¿Qué pasa si dos negocios ofrecen algo similar? El que tenga presencia más clara para motores generativos entra como referencia. El otro queda como opción secundaria, aunque técnicamente sea bueno.</p>
      <p>Además, en Costa Rica muchas decisiones se toman por confianza. Si una herramienta como Gemini o ChatGPT menciona tu negocio con argumentos consistentes, arrancás la conversación con ventaja. Es parecido a un "boca a boca" digital a escala, pero solo funciona si la base de contenido y autoridad está bien armada.</p>
      <h3>Ventajas concretas de moverte temprano</h3>
      <ul>
        <li>Menos saturación competitiva en consultas generativas locales.</li>
        <li>Mayor probabilidad de convertirte en fuente recurrente.</li>
        <li>Costo de adquisición más eficiente frente a canales pagados.</li>
        <li>Posicionamiento de marca como referente, no como commodity.</li>
      </ul>
      <p>Esperar a que "todo se estabilice" suena prudente, pero en práctica suele salir caro. Cuando todos reaccionan, el costo de destacar sube.</p>

      <h2>Qué deberías hacer esta semana para no quedarte atrás</h2>
      <p>Si querés arrancar sin complicarte, aplicá este mini plan:</p>
      <ul>
        <li>Auditá tus páginas clave y detectá dónde no respondés preguntas reales de compra.</li>
        <li>Convertí tus 10 dudas más frecuentes de clientes en contenido claro y estructurado.</li>
        <li>Revisá schema, consistencia de entidad y señales de autoridad.</li>
        <li>Medí presencia en respuestas generativas con prompts reales de tus clientes.</li>
      </ul>
      <p>Con eso ya podés pasar de una estrategia pasiva a una estrategia preparada para la nueva forma de buscar.</p>

      <h2>Conclusión</h2>
      <p>El SEO sigue vivo, pero ya no alcanza solo. En 2026 competir por clics sin competir por recomendaciones de IA es dejar ventas sobre la mesa. GEO no es una moda: es el siguiente estándar de visibilidad digital.</p>
      <p>Si tu negocio en Costa Rica quiere crecer con consistencia, el momento de actuar no es "cuando haya tiempo". Es ahora, mientras todavía podés tomar ventaja.</p>
      <p><strong>¿Querés que tu negocio aparezca en las respuestas de la IA? Hablemos.</strong></p>
    `,
    category: "SEO",
    categoryKey: "seo",
    readingTime: 7,
    publishedAt: "2026-02-20",
    author: "José Molina",
    authorRole: "Director de Estrategia Digital, AdDing Agency",
    coverGradient: "linear-gradient(135deg, rgba(37,99,235,0.24) 0%, rgba(34,211,238,0.08) 100%)",
    tags: ["seo", "geo", "chatgpt", "gemini", "marketing digital", "costa rica"],
    metaTitle: "SEO vs GEO en Costa Rica: lo que tenés que cambiar hoy",
    metaDescription:
      "Descubrí por qué el SEO ya no alcanza solo y cómo aplicar GEO para que tu negocio aparezca en respuestas de ChatGPT y Gemini en Costa Rica.",
    faq: [
      {
        question: "¿Qué es GEO y cómo se diferencia del SEO?",
        answer:
          "GEO (Generative Engine Optimization) es la práctica de optimizar tu contenido para que motores de IA como ChatGPT y Gemini te entiendan, te citen y te recomienden. A diferencia del SEO tradicional que apunta a rankings de Google, el GEO busca que tu negocio aparezca dentro de respuestas generadas por inteligencia artificial.",
      },
      {
        question: "¿Mi negocio en Costa Rica necesita GEO?",
        answer:
          "Si tus clientes potenciales usan ChatGPT, Gemini o el modo IA de Google para buscar soluciones, sí. En Costa Rica el mercado generativo todavía está en etapa temprana, lo que significa que las PYMES que actúen ahora tienen ventaja competitiva antes de que sature.",
      },
      {
        question: "¿Tengo que abandonar el SEO para hacer GEO?",
        answer:
          "No. GEO complementa al SEO, no lo reemplaza. Las bases de buen SEO (contenido de calidad, velocidad, mobile) siguen siendo relevantes. Lo que cambia es agregar optimización semántica, estructura de contenido orientada a preguntas y señales de autoridad temática.",
      },
      {
        question: "¿Cuánto tiempo tarda en verse resultados de GEO?",
        answer:
          "Depende de la autoridad existente del sitio y del nivel de competencia en el sector. En términos generales, con una estrategia consistente durante 2 a 4 meses se pueden observar mejoras en presencia dentro de respuestas generativas.",
      },
    ],
  },
  {
    slug: "ia-para-pymes-costa-rica-2026",
    title: "IA para tu negocio en Costa Rica: qué Funciona, qué no, y por dónde empezar",
    excerpt:
      "La inteligencia artificial no es solo para corporaciones. Mirá qué herramientas sí generan ventas y eficiencia en PYMES ticas, y cuáles solo te hacen perder tiempo.",
    content: `
      <p>Durante años, la conversación sobre inteligencia artificial parecía reservada para empresas gigantes con presupuestos enormes. Mientras tanto, la mayoría de PYMES en Costa Rica seguía pensando: "Eso suena bien, pero no es para mí". Hoy esa idea ya no aplica.</p>
      <p>Imaginá un restaurante en Escazú con buen producto, buena ubicación y buen servicio, pero con un proceso de reservas lento: responden mensajes manualmente, se les quedan chats sin atender y pierden clientes fuera de horario. Con automatización en WhatsApp y respuestas asistidas por IA, un negocio así puede aumentar en un mes sus reservas confirmadas en un 40% comparado con el mes anterior.</p>
      <p>Sin contratar un equipo de ingenieros. Sin infraestructura compleja. Sin gastar millones. Simplemente aplicando IA de forma práctica y enfocada en una métrica de negocio concreta.</p>
      <p>Si tenés una pyme, este artículo es para vos: qué sí funciona, qué no, cómo medir retorno y cómo empezar sin quemar presupuesto.</p>

      <h2>Desmitificando la IA para PYMES</h2>
      <p>Primero lo más importante: <strong>no necesitás ser una empresa grande para aprovechar IA</strong>. En la mayoría de negocios pequeños y medianos, la oportunidad más grande no está en modelos complejos, sino en automatizar tareas repetitivas que hoy te consumen tiempo y plata.</p>
      <h3>Mitos que te están frenando</h3>
      <ul>
        <li><strong>"Ocupo un equipo técnico interno":</strong> falso. Hoy hay herramientas no-code y setups guiados.</li>
        <li><strong>"Es carísimo":</strong> depende del caso. Muchos usos arrancan con costos menores que una pauta mal optimizada.</li>
        <li><strong>"La IA reemplaza todo":</strong> no. La IA potencia equipos; no sustituye estrategia ni criterio comercial.</li>
        <li><strong>"Primero tengo que digitalizar todo perfecto":</strong> no del todo. Podés arrancar por un proceso puntual y escalar.</li>
      </ul>
      <p>La mentalidad correcta es simple: elegí un cuello de botella, automatizalo con IA y medí impacto. Repetí.</p>

      <h2>5 usos prácticos de IA que podés implementar este mes</h2>
      <h3>1) Respuesta automática de WhatsApp con IA (atención 24/7)</h3>
      <p>En Costa Rica, WhatsApp sigue siendo el canal principal para cerrar conversaciones comerciales. Si tardás en responder, perdés oportunidad. Un flujo bien diseñado puede:</p>
      <ul>
        <li>Responder dudas frecuentes al instante.</li>
        <li>Calificar al prospecto con 2 o 3 preguntas clave.</li>
        <li>Derivar a humano cuando la conversación lo requiere.</li>
        <li>Tomar datos útiles para seguimiento automático.</li>
      </ul>
      <p>Lo clave no es "poner un bot". Es diseñar una conversación que avance hacia reserva, cotización o reunión. Un bot que solo saluda no convierte.</p>

      <h3>2) Generación de contenido para redes sociales</h3>
      <p>La IA puede acelerar la producción de piezas, ideas y variaciones, pero no debería publicar sola sin criterio. Lo que sí funciona:</p>
      <ul>
        <li>Usar IA para brainstorming de ángulos y hooks.</li>
        <li>Transformar un artículo largo en múltiples microcontenidos.</li>
        <li>Adaptar mensajes por canal (Instagram, LinkedIn, TikTok).</li>
        <li>Crear calendarios editoriales con foco comercial.</li>
      </ul>
      <p>Lo que no funciona: contenido genérico que suena igual al de todo el mundo. Tu diferenciación viene de tu experiencia local, tus casos y tu voz de marca.</p>

      <h3>3) Análisis de reviews y feedback de clientes</h3>
      <p>Muchas PYMES reciben comentarios en Google, Instagram, WhatsApp, formularios o correo, pero no los analizan de forma estructurada. Con IA podés clasificar feedback por tema, sentimiento y urgencia.</p>
      <p>Eso te permite detectar patrones como:</p>
      <ul>
        <li>Quejas repetidas en tiempos de respuesta.</li>
        <li>Dudas frecuentes antes de comprar.</li>
        <li>Razones reales por las que te eligen.</li>
      </ul>
      <p>Con esa información, mejorás oferta, mensajes y procesos internos sin adivinar.</p>

      <h3>4) Chatbot en tu sitio para capturar leads</h3>
      <p>Si tu sitio recibe visitas pero no convierte, un asistente conversacional bien implementado puede subir la captura de oportunidades. Debe hacer tres cosas bien:</p>
      <ul>
        <li>Entender intención (información, precio, soporte, compra).</li>
        <li>Guiar a una acción clara (agendar, cotizar, pedir demo, reservar).</li>
        <li>Enviar el lead al CRM con contexto, no solo con nombre y correo.</li>
      </ul>
      <p>Cuando ese flujo se integra al proceso comercial, los leads llegan mejor calificados y con mayor probabilidad de cierre.</p>

      <h3>5) Automatización de seguimiento por email</h3>
      <p>La mayoría de negocios pierde ventas por falta de seguimiento, no por falta de interés inicial. Con IA + automatización podés crear secuencias que:</p>
      <ul>
        <li>Responden según comportamiento (abrió, hizo clic, no respondió).</li>
        <li>Personalizan mensajes por tipo de cliente.</li>
        <li>Mantienen conversación activa sin perseguir manualmente a cada contacto.</li>
      </ul>
      <p>Resultado: más continuidad comercial y menos oportunidades que se enfrían por olvido.</p>

      <h2>Lo que NO funciona cuando implementás IA sin orientación</h2>
      <p>Acá es donde muchas pymes se pegan contra la pared. La tecnología por sí sola no salva un proceso malo.</p>
      <h3>Error 1: Implementar IA sin objetivo de negocio</h3>
      <p>Si no definís qué querés mover (más reservas, menor tiempo de respuesta, más leads calificados), terminás con dashboards bonitos y cero impacto real.</p>

      <h3>Error 2: Usar chatbots genéricos que frustran</h3>
      <p>Un bot que no entiende contexto, repite respuestas y no deriva a humano rápido genera rechazo. En vez de ahorrar tiempo, daña la experiencia y la percepción de marca.</p>

      <h3>Error 3: No entrenar ni iterar</h3>
      <p>La primera versión rara vez es la mejor. Los flujos requieren ajustes: lenguaje, objeciones, FAQs, rutas de escalamiento. Sin mejora continua, el rendimiento se estanca.</p>

      <h3>Error 4: Separar marketing y ventas</h3>
      <p>Si la IA captura leads, pero ventas no recibe contexto ni prioridad, perdés velocidad y calidad de cierre. La automatización debe conectar todo el embudo.</p>
      <blockquote>
        "Implementar IA sin estrategia es como comprar maquinaria industrial sin tener línea de producción."
      </blockquote>

      <h2>El ROI real: qué podés esperar</h2>
      <p>Hablemos de resultados concretos. Estos son rangos típicos de mejora en PYMES que implementan IA con foco en conversión:</p>
      <ul>
        <li><strong>Negocios con reservas o citas (restaurantes, clínicas, centros de servicio):</strong> entre un 30% y 50% de aumento en reservas confirmadas al automatizar la respuesta inicial y los recordatorios por WhatsApp.</li>
        <li><strong>Empresas de servicios con atención por mensajería:</strong> reducción de 40-60% en tiempo de respuesta promedio, con impacto directo en satisfacción y conversión inicial.</li>
        <li><strong>Empresas B2B con ciclos de venta largos:</strong> secuencias de seguimiento automatizado pueden subir entre un 15% y 25% la tasa de reunión sobre leads que de otro modo se enfriarían.</li>
      </ul>
      <p>¿Por qué funciona? Porque la IA mejora tres variables críticas al mismo tiempo:</p>
      <ul>
        <li>Velocidad de atención.</li>
        <li>Consistencia del mensaje.</li>
        <li>Capacidad de seguimiento.</li>
      </ul>
      <p>Y esas tres variables están directamente conectadas con conversión e ingresos.</p>

      <h2>Por dónde empezar: framework simple de 3 pasos</h2>
      <h3>Paso 1: Elegí un proceso con fricción alta y valor claro</h3>
      <p>No intentés automatizar todo de una vez. Elegí una sola área donde hoy estés perdiendo plata o tiempo: respuesta de WhatsApp, seguimiento de leads, reservas o atención inicial.</p>

      <h3>Paso 2: Definí una métrica de éxito y línea base</h3>
      <p>Antes de implementar, medí tu estado actual. Ejemplos:</p>
      <ul>
        <li>Tiempo promedio de respuesta.</li>
        <li>Porcentaje de chats que terminan en acción.</li>
        <li>Tasa de conversión de lead a cita o venta.</li>
      </ul>
      <p>Si no medís antes y después, no sabés si realmente mejoraste.</p>

      <h3>Paso 3: Implementá, monitoreá y optimizá semanalmente</h3>
      <p>La clave es iterar rápido. Revisá conversaciones reales, detectá bloqueos y ajustá prompts, rutas y mensajes. En pocas semanas podés pasar de un flujo básico a un sistema que realmente apoya ventas.</p>

      <h2>Checklist rápido para arrancar esta semana</h2>
      <ul>
        <li>Definí un objetivo de negocio puntual.</li>
        <li>Seleccioná una herramienta alineada con ese objetivo.</li>
        <li>Diseñá conversación y reglas de derivación a humano.</li>
        <li>Conectá la data a tu CRM o planilla central.</li>
        <li>Revisá resultados cada 7 días.</li>
      </ul>
      <p>Con esta disciplina, la IA deja de ser "tema de moda" y se convierte en un motor real de crecimiento para tu pyme.</p>

      <h2>Conclusión</h2>
      <p>La IA ya no es un lujo para corporaciones. Para muchas PYMES en Costa Rica, es una ventaja competitiva accesible si se implementa con foco comercial. No gana quien usa más herramientas, sino quien resuelve mejor los procesos que impactan ingresos.</p>
      <p>Si te movés con estrategia, en semanas podés ver mejoras reales en atención, conversión y productividad. Si te quedás en teoría, la competencia te va a pasar por encima.</p>
      <p><strong>¿Querés saber qué herramientas de IA tienen sentido para tu negocio específico? Agendá una consulta gratis.</strong></p>
    `,
    category: "IA",
    categoryKey: "ai",
    readingTime: 8,
    publishedAt: "2026-02-20",
    author: "José Molina",
    authorRole: "Director de Estrategia Digital, AdDing Agency",
    coverGradient: "linear-gradient(135deg, rgba(124,58,237,0.24) 0%, rgba(168,85,247,0.08) 100%)",
    tags: ["inteligencia artificial", "automatización", "pymes", "costa rica", "chatbots"],
    metaTitle: "IA para PYMES en Costa Rica: guía práctica 2026",
    metaDescription:
      "Conocé 5 usos de IA que sí funcionan para PYMES en Costa Rica, errores comunes y un framework de 3 pasos para implementar con ROI real.",
    faq: [
      {
        question: "¿Cuánto cuesta implementar IA en una PYME en Costa Rica?",
        answer:
          "Depende de la solución. Automatizaciones básicas de WhatsApp pueden arrancar desde menos de $100 al mes. Implementaciones más complejas con CRM y flujos avanzados van entre $300 y $800 mensuales, incluyendo configuración y mantenimiento. El criterio clave es comparar ese costo contra el valor del tiempo y las ventas que se recuperan.",
      },
      {
        question: "¿Necesito personal técnico para usar herramientas de IA?",
        answer:
          "No necesariamente. La mayoría de herramientas de IA para PYMES hoy son no-code o low-code: se configuran visualmente, sin programación. Lo que sí se necesita es orientación estratégica para que la herramienta resuelva un problema real de negocio y no solo sea tecnología sin foco.",
      },
      {
        question: "¿Cuál es el primer paso para implementar IA en mi negocio?",
        answer:
          "Identificar un proceso con fricción alta y valor claro. Ejemplo: atención de WhatsApp fuera de horario, seguimiento de leads, o generación de contenido repetitivo. Empezar ahí, medir el antes y después, y escalar lo que funcione.",
      },
      {
        question: "¿La IA puede reemplazar a mis empleados?",
        answer:
          "No es el objetivo correcto ni el resultado típico. La IA potencia a los equipos al automatizar tareas repetitivas, lo que libera tiempo para trabajo de mayor valor. Un flujo de WhatsApp automatizado no reemplaza a un vendedor; le permite enfocarse en cerrar en lugar de responder preguntas básicas.",
      },
    ],
  },
  {
    slug: "por-que-tu-sitio-web-no-genera-leads",
    title: "Tu sitio web tiene visitas pero no clientes: Las 7 razones más comunes (y cómo arreglarlas)",
    excerpt:
      "Tener tráfico no alcanza si tu sitio no convierte. Revisá las 7 fallas más comunes que frenan tus leads y cómo corregirlas en pocos días.",
    content: `
      <p>Muchos negocios invierten en diseño web, pauta y contenido para atraer visitas, pero cuando revisan resultados aparece el problema incómodo: tráfico sí, oportunidades reales no. Y eso frustra porque sentís que "todo está funcionando", menos lo que realmente importa.</p>
      <p>Es común encontrar sitios que reciben cerca de 800 visitas mensuales y generan cero leads calificados. En una auditoría de conversión, se detectan bloqueos graves en mensaje, experiencia y flujo en menos de 20 minutos. El sitio no está "mal hecho"; está mal orientado para convertir.</p>
      <p>Si te pasa algo parecido, esta guía te va a ahorrar meses de prueba y error. Vamos directo a las 7 razones más comunes y cómo arreglar cada una con acciones concretas.</p>

      <h2>Las 7 razones más comunes por las que tu sitio no convierte</h2>

      <h3>1) El CTA es invisible o demasiado genérico</h3>
      <p>"Contáctenos" suena formal, pero no comunica valor. Un visitante decide en segundos si da el siguiente paso. Si tu botón no promete un resultado claro, no hace clic.</p>
      <p><strong>Cómo arreglarlo:</strong> usá CTAs específicos y orientados a beneficio, por ejemplo: "Recibí un diagnóstico gratis", "Agendá una llamada de 20 minutos" o "Cotizá tu proyecto hoy".</p>

      <h3>2) Tu página carga en más de 3 segundos</h3>
      <p>Cuando el sitio tarda, la gente abandona. Especialmente en móvil y con conexión variable. Cada segundo extra reduce conversiones.</p>
      <p><strong>Cómo arreglarlo:</strong> comprimí recursos, optimizá imágenes, eliminá scripts innecesarios y revisá rendimiento técnico con foco en Core Web Vitals.</p>

      <h3>3) No hay prueba social visible</h3>
      <p>Si alguien no te conoce, necesita señales de confianza antes de dejar datos. Sin testimonios, casos o logos, tu propuesta se percibe riesgosa.</p>
      <p><strong>Cómo arreglarlo:</strong> mostrales evidencia real arriba del fold y cerca del formulario: testimonios concretos, resultados numéricos y marcas con las que trabajaste.</p>

      <h3>4) Demasiado texto y poco valor claro</h3>
      <p>Un bloque largo que explica todo termina sin explicar nada. El visitante no quiere leer una tesis para entender qué hacés.</p>
      <p><strong>Cómo arreglarlo:</strong> abrí con una promesa simple: qué resolvés, para quién y en cuánto tiempo puede ver resultados. Después sí desarrollás detalles.</p>

      <h3>5) El formulario pide más de lo necesario</h3>
      <p>Cuando pedís nombre, teléfono, correo, empresa, presupuesto, rubro, tamaño de equipo y más desde el primer contacto, bajás la tasa de envío.</p>
      <p><strong>Cómo arreglarlo:</strong> en primera conversión pedí lo mínimo viable (nombre + correo/WhatsApp + objetivo). El resto se puede calificar después.</p>

      <h3>6) No está optimizado para móvil</h3>
      <p>En Costa Rica, gran parte del tráfico es móvil. Si el sitio en celular se siente incómodo, lento o confuso, el usuario se va sin pensarlo.</p>
      <p><strong>Cómo arreglarlo:</strong> priorizá diseño mobile-first, botones grandes, jerarquía visual clara, textos legibles y formularios cortos.</p>

      <h3>7) No hay oferta de valor clara en el primer scroll</h3>
      <p>Si en la primera pantalla no queda claro por qué elegirte, perdiste la oportunidad. El visitante no debería adivinar.</p>
      <p><strong>Cómo arreglarlo:</strong> combiná titular específico + subtítulo orientado a resultado + CTA visible + señal de confianza (testimonio o logo).</p>

      <h2>La "Prueba de 5 segundos" que todo sitio debería pasar</h2>
      <p>Este test es simple y brutalmente efectivo. Mostrale tu home a alguien que no conozca tu negocio durante 5 segundos, cerrala y preguntale:</p>
      <ul>
        <li>¿Qué hace esta empresa?</li>
        <li>¿Para quién es?</li>
        <li>¿Qué acción esperan que hagás?</li>
      </ul>
      <p>Si no te puede responder esas tres cosas con claridad, tu página principal está perdiendo leads aunque tenga buen diseño.</p>
      <blockquote>
        "Si en 5 segundos no está claro qué hacés y para quién, ya perdiste al visitante."
      </blockquote>
      <p>La mayoría de sitios falla acá porque prioriza estética antes que mensaje. Lo ideal es lograr ambas: una experiencia visual premium con claridad comercial total.</p>

      <h2>Cómo auditar tu propio sitio en menos de una hora</h2>
      <p>Te dejo una lista práctica para revisar hoy mismo:</p>
      <ul>
        <li><strong>Mensaje principal:</strong> ¿se entiende la propuesta de valor en el primer pantallazo?</li>
        <li><strong>CTA:</strong> ¿está visible y explica beneficio concreto?</li>
        <li><strong>Velocidad:</strong> ¿carga rápido en móvil real, no solo en tu Wi-Fi?</li>
        <li><strong>Confianza:</strong> ¿hay testimonios, casos, cifras o logos?</li>
        <li><strong>Estructura:</strong> ¿los bloques guían la decisión o distraen?</li>
        <li><strong>Formulario:</strong> ¿pedís solo información esencial?</li>
        <li><strong>Seguimiento:</strong> ¿tenés automatización para responder leads en minutos?</li>
      </ul>
      <p>Si marcaste varias respuestas negativas, no te preocupés: casi siempre se corrige más rápido de lo que parece cuando hay foco estratégico.</p>

      <h2>Qué resultados podés esperar al corregir estas fallas</h2>
      <p>No existe una fórmula mágica única, pero sí hay mejoras típicas cuando optimizás conversión de forma ordenada:</p>
      <ul>
        <li>Más formularios enviados con el mismo tráfico.</li>
        <li>Mayor calidad de lead por mejor mensaje y calificación.</li>
        <li>Menor costo por adquisición porque aprovechás mejor cada visita.</li>
        <li>Más ventas sin depender solo de subir presupuesto en anuncios.</li>
      </ul>
      <p>La clave es entender que el sitio no es un folleto digital. Es una herramienta comercial. Si no está diseñada para guiar decisiones, no va a convertir aunque reciba visitas.</p>

      <h2>Plan de acción rápido para los próximos 7 días</h2>
      <ul>
        <li>Día 1: redefiní titular principal y CTA de mayor intención.</li>
        <li>Día 2: simplificá formulario y revisá flujo móvil.</li>
        <li>Día 3: agregá prueba social visible en zonas clave.</li>
        <li>Día 4: mejorá velocidad técnica y eliminá bloqueadores.</li>
        <li>Día 5: implementá seguimiento automático inicial.</li>
        <li>Día 6: ejecutá prueba de 5 segundos con 3 personas nuevas.</li>
        <li>Día 7: medí conversiones y ajustá según datos.</li>
      </ul>
      <p>Con una semana de trabajo enfocado podés transformar un sitio "bonito" en uno que realmente genere oportunidades.</p>

      <h2>Conclusión</h2>
      <p>Si tu web tiene visitas pero no clientes, el problema no suele ser la falta de tráfico: suele ser una mezcla de mensaje débil, fricción en experiencia y ausencia de estrategia de conversión. La buena noticia es que eso sí se puede arreglar.</p>
      <p>No necesitás rehacer todo desde cero. Necesitás corregir lo que bloquea decisiones en momentos críticos.</p>
      <p><strong>¿Querés que revisemos tu sitio gratis? Te mandamos un informe de conversión en 24 horas.</strong></p>
    `,
    category: "Leads",
    categoryKey: "leads",
    readingTime: 6,
    publishedAt: "2026-02-20",
    author: "José Molina",
    authorRole: "Director de Estrategia Digital, AdDing Agency",
    coverGradient: "linear-gradient(135deg, rgba(5,150,105,0.24) 0%, rgba(20,184,166,0.08) 100%)",
    tags: ["conversión", "leads", "landing page", "ux", "sitio web", "costa rica"],
    metaTitle: "Por qué tu web no genera leads: las 7 razones y cómo arreglarlas",
    metaDescription:
      "Descubrí por qué tu sitio tiene visitas pero no clientes, aplicá la prueba de 5 segundos y corregí los 7 errores que más frenan conversiones.",
    faq: [
      {
        question: "¿Por qué mi sitio web tiene visitas pero no genera clientes?",
        answer:
          "Las causas más frecuentes son: CTA genérico o invisible, velocidad lenta, falta de prueba social, formulario con demasiados campos, experiencia móvil deficiente y propuesta de valor poco clara. Un sitio puede tener buen diseño y aun así fallar en conversión si alguno de estos elementos no está bien resuelto.",
      },
      {
        question: "¿Cuánto tiempo toma mejorar la conversión de un sitio web?",
        answer:
          "Con un plan enfocado, los cambios principales se pueden implementar en 5 a 7 días. Los resultados medibles (más formularios enviados, más chats iniciados) se empiezan a ver en las primeras 2 a 4 semanas siguientes, siempre que el tráfico existente sea suficiente para extraer conclusiones estadísticas.",
      },
      {
        question: "¿Qué es la prueba de 5 segundos para un sitio web?",
        answer:
          "Es mostrarle tu página principal a alguien que no conoce tu negocio durante 5 segundos y luego preguntarle: ¿qué hace esta empresa?, ¿para quién es? y ¿qué acción esperan que hagás? Si no puede responder esas tres preguntas con claridad, tu home está perdiendo leads aunque tenga buen diseño.",
      },
      {
        question: "¿Tengo que rehacer mi sitio web para mejorar las conversiones?",
        answer:
          "Rara vez. En la mayoría de los casos, se corrigen elementos puntuales: el titular principal, el CTA, la velocidad, la prueba social y el formulario. Rehacer desde cero es la opción más costosa y no siempre la más efectiva. Un diagnóstico previo ayuda a priorizar sin desperdiciar presupuesto.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.categoryKey === category);
}
