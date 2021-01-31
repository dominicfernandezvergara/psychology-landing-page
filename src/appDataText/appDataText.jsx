import React from "react";

export const appDataText = {
  espanol: {
    // phrases español

    // Header español
    header: {
      home: {
        name: "Inicio",
        path: "/inicio",
      },
      aboutUs: {
        name: "Nosotros",
        path: "/nosotros",
        subcategories: {
          name: "Equipo",
          path: "/equipo",
          name2: "Empresa",
          path2: "/empresa",
        },
      },
      services: {
        name: "Servicios",
        path: "/servicios",
      },
      contactUs: {
        name: "Contacto",
        path: "/contacto",
      },
      takeFree: {
        name: "Para ti",
        path: "/para-ti",
      },
    },

    // home español
    home: {
      fistSectionHome: {
        slider1: {
          title: "Asesoramiento psicológico y red profesional",
          subtitle: "Piensa - Actúa - Trasciende",
        },
        slider2: {
          title: "Servicios Online",
          text: "Asesorías psicológicas de calidad desde tu domicilio.",
        },
        slider3: {
          title: "Prevención de agresiones sexuales",
          text:
            "Charlas preventivas y detección temprana de sintomatología en ASÍ",
          text2:
            "*No disponible terapia y evaluación para niños, niñas y adolescentes",
        },
      },
      secondSectionHome: {
        title: (
          <div>
            <strong>Asesorías psicológicas y red profesional</strong>{" "}
            <span>en línea</span>
          </div>
        ),
        text:
          "Queremos poner a tu alcance diversas formas de tratamiento. Te hablaremos de ansiedad, de estrés, de depresión, de autoestima, entre otros. Te enseñaremos técnicas de relajación y técnicas de la psicología positiva utilizando tus recursos y fortalezas personales.",
        buttonText: "Contactános",
      },
      thirdSectionHome: {
        title: "¿Por qué elegirnos?",
        text: "",
        buttonText: "Comienza hoy",
        subtitleIcon1: "Accesible",
        subtitleIcon2: "Cuidadosa",
        subtitleIcon3: "Segura",
        subtitleIcon4: "Eficaz",
        text1:
          "Desde el lugar que tú prefieras y en un horario conveniente para ti.",
        text2: "100% confidencial y libre de críticas. ¡Estás en buenas manos!",
        text3: "Mantenemos los más altos estándares de integridad y ética.",
        text4: "El enfoque es la búsqueda de soluciones a tu necesidad.",
      },
      fourthSectionHome: {
        title: "Nuestros Servicios",
        services: {
          buttonText: "Leer más",
          people: {
            title: "Personas Naturales",
            description: (
              <div>
                Podrás disminuir sentimientos de angustia, confusión,
                inestabilidad emocional, rabia, malestar psíquico en general, a
                través de{" "}
                <strong>
                  psicoterapia individual o grupal exclusivo adultos
                </strong>{" "}
                y diversas terapias complementarias.
              </div>
            ),
            description2: (
              <div>
                Además de participar en{" "}
                <strong>
                  charlas preventivas de abuso sexual infantil (ASI),para
                  adultos
                </strong>
                , podrás identificar posibles señales en niños, niñas y
                adolescentes y saber qué debes hacer frente a este tipo de
                fenómenos.
              </div>
            ),
            description3:
              "Desarrollar asesorías jurídicas cercanas a las personas, que permita la solución efectiva de sus conflictos, mejorando sustancialmente la calidad y eficiencia en los recursos disponibles.",
          },
          profesional: {
            title: "Psicólogos y terapeutas profesionales",
            description:
              "Orientado a la supervisión profesional, podrás resolver nudos críticos en la intervención y ejercicio profesional diario, y amortiguar sentimientos de malestar y/o agotamiento en terapeutas",
          },
          companies: {
            title: "Servicios para empresas",
            description:
              "Elaboración de planes semestrales o anuales de autocuidado de equipos profesionales a medida, basado en enfoque de buenos tratos.",
            description2:
              "También puedes recibir psicoeducación para profesionales co-garantes de derecho (profesores/as, educadores/as, enfermeros/as, doctores/as y administrativos. A fin de desarrollar una primera respuesta apropiada y detectar de forma temprana señales de agresiones sexuales o delitos violentos en NNA.",
          },
        },
      },
      fifthSectionHome: {
        title: "¿Cómo funciona?",
        subtitle: "3 sencillos pasos para empezar a mejorar tu vida.",
        firstStep: {
          title: "Paso Uno",
          description:
            "Dinos qué servicio necesita a través de nuestra página de contacto.",
        },
        secondStep: {
          title: "Paso Dos",
          description:
            "Nos pondremos en contacto contigo para programar una cita y darte todos los detalles que necesitas saber.",
        },
        buttonText: "Comienza Hoy",
        thirdStep: {
          title: "Paso Tres",
          description: "Comienza con tus sesiones y mejora tu vida.",
        },
      },
      giftSectionHome: {
        text: "Descarga nuestro pdf",
        text2: "Gratuito",
        text3:
          "Un cuento para niños y adultos sobre emociones básicas y necesarias.",
        buttonText: "Descargar PDF",
      },
      offer: {
        title:
          "Por si aún no estás convencido de iniciar tu proceso de transformación",
        subtitle: "Te ofrecemos :",
        text: "Aplicación test gratuito",
        text1: "Sesión psicológica diagnóstica",
        text2: "Sesión de retroalimentación y apreciación clínica",

        text3: "Ahorrarás hasta un 50%",
        buttonText: "Comienza aquí",
      },
    },

    // About Us español
    aboutUs: {
      title: "Sobre “Be Healthy & Holistic”",
      text: "Conoce a nuestro equipo de colaboradores haciendo click aquí",
      buttonText: "Colaboradores",
      mission: {
        title: "Misión",
        text:
          "Be Healthy Holistic, es una asociación privada de profesionales éticos y comprometidos con el bienestar físico, psíquico y emocional de las personas y el propio autocuidado.",
        text2:
          "Con especial vocación en orientar y psicoeducar a grupos vulnerables: Niñez, Adolescencia, Mujeres, Minorías Sexuales, Migrantes, personas víctimas de violencias en general.",
        text3:
          "Brinda asesorías profesionales respetuosas, de acuerdo a la necesidad de cada ser humano y basada en los recursos.",
      },
      vision: {
        title: "Visión",
        text: (
          <div>
            Be Healthy & Holistic trabaja para contribuir a{" "}
            <strong>los buenos tratos</strong> y, al pleno ejercicio de los
            derechos humanos, considerando La Declaración Universal de los
            Derechos Humanos , la cual fue proclamada por la Asamblea General de
            las Naciones Unidas en París, el 10 de diciembre de 1948, como un
            ideal común para todos los pueblos y naciones. Y en especial
            contribuir significativamente a la protección y prevención de los
            derechos de niños, as y adolescentes. Bajo el marco, de la
            Convención Internacional del Niño; tratado internacional de las
            Naciones Unidas, firmado en 1989 y entró en vigor desde el 2 de
            septiembre de 1990.
          </div>
        ),
        text2:
          "Buscamos contribuir al mejoramiento de la calidad de vida de todas las personas que lo deseen y se movilicen por ello.",
      },
      founder: {
        title: "Nuestra Creadora & Product Manager",
        name: "Carolina Urbina Cepeda",
        occupation: "Creadora & Product Manager de 'Be Healthy & Holistic' ",
        experience: {
          title: "Experiencia Profesional",
          text1:
            "La experiencia profesional en Chile se concentró en el área psicosociojurídica los últimos 6 años. En específico se desarrolló como terapeuta individual- familiar, y en cargos de gestión y coordinación, en diversos proyectos de políticas públicas de Infancias financiadas por SENAME (Servicio Nacional de Menores).",
          text2:
            "Trabajó en diversas ONG,s (OPCION, CIUDAD DEL NIÑO Y ADRA) en proyectos PRM (Programa de reparación de maltrato y abuso sexual) y FAE (Programas familias de acogidas) de distintas comunas de Santiago de Chile, y en contacto directo con TRIBUNALES DE FAMILIA Y FISCALÍAS DE CHILE.",
          text3:
            "Fue voluntaria durante un año de CORFAPES “Centro de rehabilitación psicosocial para personas con trastornos psicóticos”. Trabajó como terapeuta familiar, con padres o adultos responsables y usuarios.",
          text4:
            "También trabajando de forma independiente en consulta particular y en un estudio jurídico. Adquiere conocimiento que hay dolencias psíquicas y patrones mentales que se repiten en las personas a pesar de no haber sido víctimas de experiencias traumáticas o delitos violentos.",
        },
        training: {
          title: "Formación Profesional",
          text1:
            "Profesional psicóloga y licenciada en psicología en la Universidad Autónoma de Chile. Diplomada en diagnóstico e intervención en maltrato y agresiones sexuales, con formación en temáticas de derechos humanos, infancia, género, multiculturalidad, buenos tratos, autocuidado y ergonomía en el trabajo.",
          text2:
            "La psicología es una ciencia que estudia el comportamiento humano, durante su viaje profesional, comenzó a sentir que la psicología por sí sola no le permitía en algunos casos avanzar en la intervención, se ve forzada a incorporar distintos enfoques y técnicas desde el psicoanálisis hasta biomagnetismo, (también ciencias.) Por ende, hoy se define como una psicóloga de tipo holística, es decir, toma e incluye otros enfoques según necesite cada uno de sus pacientes e integra los aspectos físico, psíquico, emocional.",
        },
        valueFormation: {
          title: "Formación valórica",
          text:
            "Respecto de la formación no académica, la profesional señala “me la entregó mi madre y mis hermanos mayores, quienes me enseñaron la importancia de ayudar a las personas, ser noble, valiente, práctica, y por sobre todo a no olvidar mi origen; soy de una familia chilena obrera y esforzada. Proviene de una familia de padres separados, con un padre violento y que renunció a su paternidad.",
        },
      },
      team: {
        title: "Nuestro equipo",
        subtitle: "Nuestros colaboradores",
        team: {
          p1: {
            id: 1,
            name: "Carolina Urbina Cepeda",
            occupation: "Fundadora de “Be Healthy & Holistic” y Psicóloga",
            body:
              "Respecto de la formación no académica, la profesional señala “me la entregó mi madre y mis hermanos mayores, quienes me enseñaron la importancia de ayudar a las personas, ser noble, valiente, práctica, y por sobre todo a no olvidar mi origen; soy de una familia chilena obrera y esforzada. Proviene de una familia de padres separados, con un padre violento y que renunció a su paternidad.",
          },

          p2: {
            id: 2,
            name: "Dominic Fernandez Vergara",
            occupation: "psicóloga ",
            body:
              "Respecto de la formación no académica, la profesional señala “me la entregó mi madre y mis hermanos mayores, quienes me enseñaron la importancia de ayudar a las personas, ser noble, valiente, práctica, y por sobre todo a no olvidar mi origen; soy de una familia chilena obrera y esforzada. Proviene de una familia de padres separados, con un padre violento y que renunció a su paternidad.",
          },
          p3: {
            id: 3,
            name: "Dominic Fernandez Vergara",
            occupation: "psicóloga ",
            body:
              "Respecto de la formación no académica, la profesional señala “me la entregó mi madre y mis hermanos mayores, quienes me enseñaron la importancia de ayudar a las personas, ser noble, valiente, práctica, y por sobre todo a no olvidar mi origen; soy de una familia chilena obrera y esforzada. Proviene de una familia de padres separados, con un padre violento y que renunció a su paternidad.",
          },
        },
      },
    },

    // Services español

    services: {
      title: "Nuestros servicios",

      naturalPeopleService: {
        title: "Servicios Personas Naturales",
        serviceNaturalPeople1: {
          title: "Psicoterapia individual y grupal adultos",
          phrase: "“Tú eres aquello que haces, no aquello que dices que harás”",
          description:
            "Cada vez hay más estrategias y herramientas para conseguir resultados terapéuticos más eficaces, gracias a la continua investigación en el área de la psicología clínica y sanitaria. Hemos de tener en cuenta la problemática o trastorno a tratar por un lado, y el perfil y características del paciente, por otro, para recomendarle el tipo de servicio que necesita.",
          benefits: {
            title: "Beneficios",
            description:
              "Con sólo 8 sesiones, utilizaremos el clásico método de Terapia breve, con esto podrás tener un mapa acerca de ti, tu situación presente, tus heridas, recursos y un plan de acción personalizado!",
          },
          note: {
            title: "Nota",
            note:
              "Nuestra mente tiene el potencial para ser feliz y saludable! Quizás manejes este dato, pero nuestro cerebro es como un portátil… ¿Cómo? Sí, es plástico por la neuroplasticidad cerebral, por ende, se puede amoldar, entrenar, programar, revisar, reiniciar, hibernar y claro dañar.",
          },

          subtitlelanguage: "Idioma : ",
          language: "Español",
        },
        serviceNaturalPeople2: {
          title: "Terapias complementarias",
          phrase:
            "“Las emociones inexpresadas nunca mueren. Son enterradas vivas y salen más tarde de peores formas (Sigmund Freud)”",
          description:
            "Terapias complementarias son aquellas que se utilizan conjuntamente con la medicina convencional indicadas por profesionales con la finalidad de complementar a un tratamiento convencional. Hay diversas terapias complementarias que pueden ser de ayuda para aliviar el dolor físico y emocional.",
          terapiasComplementarias: {
            terapia1: {
              title: "Respiración consciente",
              phrase: "“ Inhalo Vida y Salud, Exhalo Tensiones y gratitud”",
              description:
                "Parece mentira que el recurso más maravilloso y accesible con que contamos los seres humanos para el restablecimiento de la salud y el equilibrio de nuestro sistema psico-físico-emocional sea tan poco utilizado.",
              note: {
                title: "Nota",
                description:
                  "Nuestro cuerpo sabe cómo respirar sólo necesitamos poner el foco en este recurso. Cuando esta función está bloqueada, limitada o inhibida por alguna situación de estrés o por un hábito de respiración inadecuado resulta afectada, alterándose entre otras cosas los ciclos del sueño, el nivel de energía, la memoria, la concentración o la templanza emocional.",
              },
              subtitlelanguage: "Idioma :",
              language: "Español e Ingles",
              benefits: {
                title: "Beneficios",
                Benefits: [
                  "Recuperación del equilibrio psico- físico- emocional",
                  "Mejor manejo y gestión de las emociones",
                  "Disminuyen miedos y temores",
                  "Mejora las funciones esenciales del organismo",
                  "Incrementa la creatividad",
                  "Aumenta la capacidad de concentración",
                  "Fortalece el sistema inmunitario",
                  "Mejora la salud en general",
                ],
              },
              tips: {
                title: "Consejos para empezar a respirar adecuadamente",
                tip: [
                  "No respires de manera determinada.",
                  "No busques controlar la respiración.",
                  "No hagas respiraciones “importantes o perfectas”.",
                  "Deja de lado la idea de cómo pensás que deberías respirar.",
                  "Observa la mente crítica que desecha importantes pensamientos.",
                ],
              },
            },

            terapia2: {
              title: "Alimentación consciente",
              phrase: "“ Como atento/a, me nutro, me doy lo que necesito”",
              description:
                "¿Te ha pasado alguna vez que después de comer te has sentido pesada, incluso te ha dolido el estómago por haber comido demasiado?",
              description2:
                "La alimentación consciente se basa en darle la importancia que se merece al momento de comer. En otras palabras, estar presente mientras comemos, evitando distracciones, saboreando la comida, elegir lo que comes.",
              description3:
                "Esto de forma calmada, aceptando nuestras sensaciones y sentimientos mientras comemos.",
              description4:
                "De hecho, muchos programas para reducir peso utilizan la técnica de “atención plena”",
              subtitlelanguage: "Idioma :",
              language: "Español e Ingles",
              benefits: {
                title: "Beneficios",
                benefits: [
                  "Promueve la concentración. Mientras comes de forma consciente y diriges toda tu atención a la tarea que realizas, también estás practicando la concentración.",
                  "Ayuda a diferenciar hambre psicológica y hambre fisiológica. A veces usamos la comida para hacernos sentir mejor, es decir, satisfacer nuestras necesidades emocionales. Por ejemplo, comer por aburrimiento, por tristeza o por estrés. Cuando estamos presentes, podemos diferenciar estas.",
                  "Mejora en controlar tu peso. Cuando estás atento a la comida, como la textura, el sabor, también estás practicando el auto-control. Este autocontrol ayuda a controlar lo que comemos, y necesitamos comer.",
                  "Reduce el estrés y ansiedad. Evitar comer de forma compulsiva nos permite estar más consciente de nuestras emociones. De esta forma, estar presente y consciente nos permite reducir los sentimientos de estrés y ansiedad.",
                  "Pérdida de peso. Pararse a disfrutar de la comida nos permite detectar cuando estamos saciados, lo que lleva a una reducción de peso.",
                ],
              },
              tips: {
                title: "Consejos",
                tip: [
                  <p>
                    Antes de empezar a comer; <strong>observa</strong> la
                    comida, los colores, las texturas, y agradécete que estás
                    haciendo esto para cuidarte.
                  </p>,
                  <p>
                    Si tienes tiempo limitado, ponte una <strong>alarma</strong>{" "}
                    y no vuelvas a mirar el reloj.
                  </p>,
                  <p>
                    Come <strong>sentado/a</strong>.
                  </p>,
                  <p>
                    Reduce las <strong>distracciones</strong> (apagar el móvil,
                    el televisor)
                  </p>,
                  <p>
                    Corta las piezas de comida en{" "}
                    <strong>trozos más pequeños</strong>, puedes incluso usar
                    una cucharilla en lugar de una cuchara, o un plato más
                    pequeño para reducir la ración.
                  </p>,
                  <p>
                    <strong>Explora</strong>, come con la mano contraria a la
                    que sueles comer.
                  </p>,
                  <p>
                    Después de cada bocado, <strong>deja los cubiertos</strong>{" "}
                    en la mesa
                  </p>,
                  "¿Cómo te sientes? ¿Tienes prisa? Permítete sentir y así, conocerte.",
                  "No te obligues a comer todo",
                ],
              },
            },
            terapia3: {
              title: "Asesorías en sexualidad",
              phrase:
                "“ Dar produce más felicidad que recibir, no porque sea una privación, sino porque en el acto de dar está la expresión de mi vitalidad (Erich Fromm).",
              description:
                "La consejería en salud sexual, es un servicio de prestación de información y acompañamiento a quien percibe que ciertos factores, eventos o conductas influyen determinantemente sus experiencias respecto a su sexualidad.",
              description2:
                "Este espacio, no solo contempla ayudar a las personas que presentan un problema, si no también para aquellas que tienen un conjunto considerable de dudas que motivan consultar,  para aquellos que tienen dificultades para enfrentar la educación sexual de sus hijos(as/es), y cualquier persona que tenga otras razones acorde a esta temática.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              subServices: {
                subtitle: "Vamos a mencionar algunos :",
                service: [
                  {
                    title:
                      "Complicaciones en la lubricación, eyaculación, deseo sexual y orgasmo : ",
                    description:
                      "La labor que se realiza es especificar qué elementos puntualmente provocan una mala experiencia en la persona, educar respecto a prácticas de autocuidado indispensables, re significar las creencias, y proporcionar un mejor manejo de sus vivencias íntimas consigo mismas y con la pareja o las parejas.",
                  },
                  {
                    title: "Prácticas Complementarias en la Sexualidad : ",
                    description:
                      "Ante estas eventualidades este espacio presta un servicio de información respecto a las necesidades de la persona consigo mismo, y con la(s) pareja(s) para el disfrute de actividades complementarias y exploratorias que puedan enriquecer la vivencia de la práctica sexual, ya sea uso de juguetes, uso de lubricantes, adoptar juegos de rol, y otras pautas lúdicas que favorezcan el aprendizaje y una intimidad sana.",
                  },
                  {
                    title:
                      "Acompañamiento a personas con VIH (Virus de Inmunodeficiencia Humana) y otras infecciones de transmisión sexual : ",
                    description:
                      "El trabajo que se realiza es otorgar un acceso a la información sobre la enfermedad, acompañar terapéuticamente a la persona respecto a su proceso de recuperación y/o enfermedad, corregir mitos o información mal administrada, con objetivo de que la persona tenga una conducta adherente al tratamiento, aprenda prácticas de autocuidado libre de riesgos, y favorecer su proceso personal.",
                  },
                  {
                    title:
                      "Gestión de prácticas sexuales sanas, protegidas, consensuadas e informadas y promoción de autocuidado : ",
                    description:
                      "Este espacio presta un apoyo educativo y formativo, acorde a la etapa de la persona consultante, analiza la información adquirida personalmente respecto a su motivo de consulta, proporcionar recursos de apoyo que motiven una mayor autonomía, con objetivo de generar una base sólida sobre educación sexual que le permitirá una mejor toma de decisiones a futuro.",
                  },
                  {
                    title: "Disfunciones sexuales : ",
                    description:
                      "El aporte de este espacio es la administración de elementos educativos y terapéuticos, ya que se presta información sobre las características de la disfunción que adolece, se analizan los factores que influyen en la mantención de esta complicación, para posteriormente proporcionar herramientas técnicas con el fin de establecer un mejor manejo en la persona, re significando su experiencia y favoreciendo la reactivación de la vida sexual.",
                  },
                ],
              },
            },
            terapia4: {
              title: "Acompañamiento medicina huevo Yoni",
              phrase:
                "“Reencuéntrate con el centro energético, tu útero, tu matriz, el amor y fuerza propia”",
              description:
                "¿Has escuchado hablar de los huevos yoni? Es muy probable que sí, pues en los últimos años se han convertido en una tendencia en el mundo holístico y enfoque vibracional en los temas relacionados con la sanación de la energía sexual, el empoderamiento sexual femenino y la salud sexual de la mujer.",
              description2:
                "El nombre de estos huevos proviene de la palabra sánscrita yoni, que significa “espacio sagrado” y se suele usar para referirse indistinta o conjuntamente al útero, vulva, vagina o vientre, en el sentido de “fuente de vida”.",
              description3:
                "Los huevos yoni son piedras preciosas y semipreciosas (cuarzo cristal, cuarzo rosa, jade, obsidiana, amatista, ópalo y aventurina, principalmente) talladas en forma de huevo, con el fin de insertarlas en la vagina durante periodos variables, para obtener sus beneficios físicos y energéticos.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              use: {
                title: "¿Cómo se usan los huevos yoni?",
                description:
                  "Como ya se mencionó, para usar los huevos yoni es necesario introducirlos en la vagina, ya sea durante algunas horas, a lo largo del día o toda la noche. Para empezar, se recomienda dejarlos adentro durante 2 horas, tres veces a la semana, y aumentar tanto el tiempo como la frecuencia poco a poco, hasta lograr usarlos diariamente. Es generalmente aconsejable llevarlos un máximo de 12 horas consecutivas.",
              },
              benefits: {
                title: "Beneficios",
                benefits: [
                  "Ayudan a regular el ciclo menstrual y al equilibrio hormonal.",
                  "Ayudan a mejorar la lubricación, por lo que son útiles en casos de sequedad vaginal.",
                  "Aumentan el flujo vaginal y con ello las defensas de la vagina.",
                  "Mejoran la circulación sanguínea e incrementan la oxigenación de los tejidos.",
                  "Fortalecen los músculos del suelo pélvico, lo que contribuye a prevenir y combatir la incontinencia urinaria.",
                  "Ayudan a la mujer a ser consciente de sí misma y de su musculatura vaginal, lo cual es útil durante la recuperación posparto, así como para tener más orgasmos y más intensos.",
                  "Producen un aumento de la sensualidad y sensibilidad durante la penetración.",
                  "Mejoran el estado emocional de la mujer, pues ésta desarrolla una mayor comprensión de su cuerpo.",
                  "La libido, la confianza y la autoestima se incrementan considerablemente.",
                  "Al presionar puntos de reflexología dentro de la vagina, aumentan la vitalidad, el empoderamiento y la energía vital femenina.",
                  "Conectan a la mujer con su energía sexual como fuente de sanación, transformación, desbloqueo y liberación.",
                  "Funcionan como sanadores de energía para ayudar a las mujeres a transformar el trauma almacenado, renovar espiritualmente el espacio y el corazón de su útero, aumentar su energía sexual y conectar con su energía femenina.",
                ],
              },
            },
            terapia5: {
              title: "Carta Astral",
              phrase:
                "“Fortalezas y debilidades de mi personalidad según tu signo del Zodiaco, que debes conocer para ser un triunfador”",
              description:
                "Es una radiografía del alma del individuo”; te da información de las posiciones de los planetas en el momento de tu nacimiento, y cómo esas posiciones influyen en tu personalidad y determinan tu carácter. Desde la psicología, la conformación de nuestra personalidad es principalmente o 70% por nuestro entorno, lo genético influye pero no más que el ambiente.",
              description2:
                "Una Carta Natal es un informe personalizado e individual que se elabora en base a tu fecha, hora y lugar de nacimiento. Se requieren esos datos porque con ellos se calcula la posición de los planetas en el cielo en ese mismo momento en que llegaste a esta Tierra y a esta Vida.",
              description3:
                "Este informe conlleva datos acerca de tu configuración tanto a nivel físico, como emocional y mental y, hasta es posible, determinar cierta línea de aprendizaje que has de transitar de una u otra manera a lo largo de tu vida.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              benefits: {
                title: "Beneficios",
                description: (
                  <p>
                    Por ejemplo,{" "}
                    <strong>conocer la posición de nuestra Luna natal</strong>{" "}
                    nos permite acceder a cómo es nuestro mundo interno, nuestro
                    ámbito emocional, el inconsciente, y todo lo referido a
                    nuestros primeros años de vida. La relación con nuestra{" "}
                    <strong>figura materna</strong> y la disposición para las
                    <strong>relaciones afectivas</strong>. Si, generalmente,
                    experimentamos angustias o muchas dificultades en tu manera
                    de expresar las emociones, puedes pedirle a tu profesional
                    de confianza que, al elaborar tu Carta Natal, haga foco y
                    profundice en tu Luna Natal.
                  </p>
                ),
              },
            },
            terapia6: {
              title: "Constelaciones familiares",
              phrase:
                "“Quien sana su lealtad familiar, puede alcanzar todo su potencial”.",
              description:
                "Una Constelación Familiar es un proceso terapéutico que trabaja sobre la parte más profunda de nuestra conciencia. La teoría sobre la que se basa esta técnica es que las personas poseemos ciertos anclajes negativos inconscientes, que nos transmiten sentimientos dolorosos y de los cuales a veces no sabemos desprendernos. Estos anclajes nos conducen a menudo a reproducir determinados comportamientos o vivir ciertas situaciones negativas de forma repetida, sin que sepamos muy bien cómo solucionarlo.",
              description2:
                "Bert Hellinger, psicoterapeuta alemán y ex sacerdote desarrolló este método a mediados de la década de 1990 y es el fundador de esta técnica. A lo largo de su trayectoria ha tratado y estudiado a familias durante más de 50 años, y observó que muchos de nosotros utilizamos inconscientemente patrones familiares destructivos que nos conducen hacia la ansiedad, la depresión, la ira, la culpa, la soledad, el alcoholismo e incluso la enfermedad como una forma de «pertenencia» a nuestras familias.",
              subtitlelanguage: "Idioma :",
              language: "Español",
              benefits: {
                title: "Beneficios",
                description:
                  "Es una manera de explorar y mejorar la dinámica familiar.",
                description2:
                  "Constelar nos sirve para comprender y sanar problemas.",
                description3:
                  "Constelar es una acción muy corta, muy puntual y muy fuerte. Esto hace que rápidamente obtengamos información y comprensión sobre un problema que nos preocupa.",
              },
              uso: {
                title: "Temas que se pueden constelar :",
                uso: [
                  "Dificultades en las relaciones familiares.",
                  "Desarrollo personal.",
                  "Traumas de la infancia.",
                  "Conflictos de pareja, actual o relaciones del pasado",
                  "Problemas con los hijos.",
                  "Orientación en momentos vitales de cambio.",
                  "Depresión, tristeza y melancolía, con o sin causa aparente.",
                  "Pérdidas y duelos – Superar sucesos trágicos.",
                  "Recursos para afrontar enfermedades.",
                  "Exclusión y problemas de relaciones sociales.",
                  "Destinos difíciles (muertes prematuras, abortos).",
                  "Sentimiento de Auto-sabotaje para no conseguir éxito económico, profesional, o personal.",
                  "Orientación a nivel profesional y proyectos.",
                ],
              },
            },
            terapia7: {
              title: "Tarot Terapéutico",
              phrase:
                "“Reflexiona a través de preguntas casuales, pero conectadas”",
              description:
                "El Tarot Terapéutico es una orientación y una guía que ayuda a quien lo consulte para descubrir dónde nacen las raíces de sus problemas y para que el mismo consultante pueda fluir liberando  sus bloqueos. La persona que acuda a su consejo le hará frente a las verdades que el Tarot le muestra y lo impulsará a tener otra visión más abierta, resolutiva y positiva.",
              description2:
                "Tarot es una herramienta maravillosa que no se centra en la predicción del futuro sino que observa el presente y nos sitúa en él. A través de la energía de las cartas y su significado, nos despierta al autoconocimiento para que podamos tomar decisiones desde otra perspectiva y, así, sanar y liberar los procesos de crecimiento.",
              description3: (
                <p>
                  <strong>
                    Somos quienes somos por las decisiones que tomamos y somos
                    responsables de lo que suceda en nuestra vida
                  </strong>
                  , es uno de sus principios.
                </p>
              ),
              description4:
                "Todo lo que atraemos es porque está en sintonía con lo que sentimos. Las cartas de Tarot nos mostrarán estados de conciencia y cómo se manifiestan para bien o para mal.",
              subtitlelanguage: "Idioma :",
              language: "Español e Ingles",
              benefits: {
                title: "Beneficios",
                description:
                  "Método que permite descubrir nuestro verdadero potencial y ayuda a disolver bloqueos y resolver problemas.",
                description2:
                  "Lo que permite esta herramienta es conocer hechos, comprenderlos y resolverlos: según cómo utilicemos nuestras capacidades será el resultado en nuestro destino.",
              },
            },
          },
        },
        serviceNaturalPeople3: {
          title: "Charlas preventivas abuso sexual infantil (ASI) ",
          // phrase: "“Tú eres aquello que haces, no aquello que dices que harás”",
          description:
            "“El abuso sexual infantil (ASI) es la utilización de un niño/a u adolescente, por un adulto para la satisfacción sexual de sí mismo o de otros”",
          description2:
            "Servicio de orientación destinado para padres, cuidadores, adultos en general, para identificar señales de este complejo fenómeno, desde un enfoque preventivo",
          benefits: {
            title: "Beneficios de la charla",
            description:
              "Podrás detectar posibles señales de abuso sexual infantil en un infante.",
            description2:
              "Recibirás orientación en cuanto a; cómo proceder de acuerdo con el marco ético, legal y emocional.",
          },
          note: {
            title: "Nota",
            note:
              "Es relevante saber que la mayoría de las veces el agresor/a está en casa, es decir, el agresor/a es parte del grupo familiar. El ASI tiene un 75% de prevalencia intrafamiliar. Por eso, orientar a las familias para que desarrollen habilidades protectoras es vital, para la prevención del fenómeno.",
          },

          subtitlelanguage: "Idioma : ",
          language: "Español",
          tips: {
            subtitle: "¿Cómo prevenir el Abuso Sexual Infantil?",
            tip: [
              "Habla con claridad a los niños acerca de los riesgos que los rodean en casa, escuela, barrio.",
              "Conversa con ellos niños respecto del daño y brindarles confianza",
              "Enséñale a tu hijo/a que existen partes del cuerpo íntimas y fortalece su autoestima.",
              "Debes monitorear las actividades diarias.",
              "Los niños deben conocer los teléfonos de las personas de confianza.",
              "No envíes a tus hijos a lugares sin supervisión de un adulto de confianza.",
              "Enséñale a tu hijo la diferencia entre secretos malos y buenos.",
              "Supervisa los sitios web que visitan tus hijos.",
              "Enséñale a tus hijos a no aceptar ‘regalos’ a cambio de favores",
            ],
          },
          alerts: {
            subtitle: "¿Cómo saber cuándo un niño es víctima de Abuso Sexual?",
            tip: [
              "Pesadillas y problemas de sueño.",
              "Desórdenes alimentarios.",
              "Ideas e intentos suicidas.",
              "Cambios en el rendimiento escolar.",
              "Alteraciones del lenguaje y la motricidad.",
              "Aislamiento.",
              "Agresividad.",
              "Miedo generalizado ante la presencia de determinadas personas.",
              "Dificultad para expresar sentimientos",
              "Conocimiento y términos sexuales inapropiados para la edad.",
              "*La presencia de alguno de estos comportamientos no siempre implica que un niño o niña ha sido víctima de abuso sexual.",
            ],
          },
        },
        serviceNaturalPeople4: {
          title: "Prestaciones Jurídicas",
          phrase: "“El poder del abogado, está en la incertidumbre de la ley”",
          description:
            "Tiene como objetivo desarrollar asesorías jurídicas cercanas a las personas, que permita la solución efectiva de sus conflictos, mejorando sustancialmente la calidad y eficiencia en los recursos disponibles.",
          subtitlelanguage: "Idioma :",
          language: "Español",
          subservices: {
            title: "¿En qué materias?",
            subservice1: {
              title: "En materia de Familia :",
              description:
                "Juicios de divorcio, pensiones de alimentos, cuidado personal, régimen comunicacional, medidas de protección por vulneración de Derechos a NNA, entre otros.",
            },
            subservice2: {
              title: "En materia Laboral :",
              description:
                "Procedimientos administrativos ante Inspección del Trabajo, despidos injustificados, cobro de prestaciones, nulidad del despido entre otros.",
            },
            subservice3: {
              title: "En materia Civil :",
              description:
                "Contratos, cobranza de instrumentos mercantiles como letras de cambio,cheques, etc; legalizaciones de documentos, tercerías y entre otros.",
            },
          },
        },
      },
      profesionalServices: {
        // serviceProfesionalServices1: {
        //   title: "Entrenamiento profesional",
        //   phrase:
        //     "“ La línea entre el bien y el mal es permeable y casi cualquiera puede ser inducido a cruzarla cuando se ve presionado por fuerzas situacionales (Philip Zimbardo).”",
        //   descriptionParagraph1:
        //     "El entrenamiento es la educación profesional que busca adaptar al psicólogo a determinado cargo que incluya diagnóstico psicosocial para categorizar nivel de daño asociado a experiencias traumáticas y violentas como maltrato y agresiones sexuales. Sus objetivos se sitúan a corto plazo, son limitados e inmediatos, buscando dar al individuo los elementos esenciales para el ejercicio profesional en un cargo u organización, e implica la transmisión de conocimientos, ya sea información de la empresa, de sus productos, servicios, su organización, su política, etc. En segunda medida, implica un desarrollo de habilidades, entendido como un entrenamiento orientado a las tareas y operaciones que van a ejecutarse.",
        //   descriptionParagraph2:
        //     "Hablar de agresiones sexuales o experiencias violentas, es abordar un fenómeno complejo por la urgencia de “rescatar”, así como de evaluar el riesgo o el daño e intervenir para ayudar a la presunta víctima. Implica también correr velos en los que la culpa, el secreto y la vergüenza hacen estragos y contribuyen, de manera encubierta, a que el abuso infantil continúe.",
        //   descriptionParagraph3:
        //     "En los países iberoamericanos existe elevada incidencia del fenómeno, sin embargo, se estima altas cifras no develadas de casos que no fueron detectados ni denunciados en el momento oportuno. Por ello la importancia de conocer los fundamentos conceptuales, teóricos, los factores de riesgo, tipologías, perfiles psicológicos de los ofensores sexuales y el estado de vulnerabilidad de las víctimas de abuso sexual para poder prevenir.",
        //   descriptionParagraph4:
        //     "La Intervención Pericial en Abuso Sexual se está convirtiendo en el principal requerimiento de asesoría profesional tanto en ámbitos jurídico públicos como privados. La evaluación psicológica forense, la psicología del testimonio, la valoración de daño psicológico y el abordaje criminalístico del abuso infantil, es una de las principales obligaciones de capacitación o especialización para todos los profesionales que abordan el Abuso Sexual Infantil.",
        //   descriptionParagraph5:
        //     "Esta formación práctica y fuera del espacio universitario surge como respuesta a la necesidad de brindar formación integral para contribuir a la prevención, detección y atención de agresiones sexuales mediante el reconocimiento de los principales aspectos que lo constituyen.",
        //   descriptionParagraph6:
        //     "Tiene como finalidad proporcionar herramientas prácticas para la prevención, la detección y la intervención psicológica en niños y adolescentes víctimas de abuso sexual, haciendo énfasis en el Peritaje Forense.",
        // },
        // serviceProfesionalServices2: {
        //   title: "Psicoterapia para terapeutas",
        //   phrase:
        //     "“ Nos encontramos constantemente con grandes oportunidades que están brillantemente enmascaradas con problemas irresolubles”.",
        //   descriptionParagraph1:
        //     "En la sociedad actual aún permanecen y se mantienen una gran cantidad de falsas creencias y mitos acerca del trabajo que realizan los psicólogos o cómo estos deberían ser como personas y profesionales.",
        //   descriptionParagraph2:
        //     "Un psicólogo tiene la capacidad de ayudar a la persona a enfrentarse a situaciones que, en ocasiones, pueden llegar a superarla y causarle un gran malestar emocional. Sin embargo, esto no implica que los profesionales en psicología no sufran o se sientan angustiados por circunstancias de la vida cotidiana y, por lo tanto, también necesiten la asistencia de otro profesional.",
        //   subtitle: "Los psicólogos conocen la importancia de la salud mental",
        //   descriptionParagraph3:
        //     "No es necesario sufrir un trastorno ni una enfermedad mental para decidir acudir a un terapéuta, igual que tampoco es necesario esperar a que una leve aflicción se convierta en algo más grave, y eso los psicólogos lo comprenden mejor que nadie.",
        //   descriptionParagraph4:
        //     "Por lo tanto, un psicólogo, al igual que cualquier otra persona, es consciente de que sin salud mental no existe salud de ninguna clase y puede desear acudir a otro profesional para aumentar o mantener su estado de bienestar emocional y así poder disfrutar de una vida plena y satisfactoria.",
        //   subtitle2:
        //     "Finalmente, los psicólogos saben que disfrutar de una salud mental positiva es esencial por tres razones de base:",
        //   descriptionParagraph5: [
        //     "Para poder enfrentarse a las dificultades normales que surgen en el día a día.",
        //     "Para conservar y mantener la motivación necesaria para conseguir las aspiraciones y objetivos personales.",
        //     "Para favorecer y contribuir de forma positiva en el ambiente que le rodea.",
        //   ],
        // },
        serviceProfesionalServices3: {
          title: "Supervisión de casos",
          phrase: "“Sigue a tu corazón pero lleva contigo a tu cerebro”",
          descriptionParagraph1: (
            <div>
              El <stron>estudio de casos</stron> consiste en un método o técnica
              de investigación cualitativa, habitualmente utilizado en las
              ciencias de la salud y sociales, el cual se caracteriza por
              precisar de un proceso de búsqueda e indagación, así como el{" "}
              <stron>análisis</stron> sistemático de uno o varios{" "}
              <stron>casos</stron> a fin de resolver nudos críticos en la
              intervención y elaborar planes de acción personalizados y reales.
            </div>
          ),
          note: [
            <strong>
              Los psicólogos conocen la importancia de la salud mental
            </strong>,
            <div>
              Analizar conjuntamente nuestro quehacer profesional y la{" "}
              <strong>contratransferencia</strong>. Esto ocurre cuando el
              analista transfiere elementos de sus problemas pasados o presentes
              al paciente que está siendo objeto de análisis.
            </div>,
            "Un psicólogo tiene la capacidad de ayudar, puede enfrentarse a situaciones que, en ocasiones, pueden llegar a superarlo y causarle un gran malestar emocional.",
            "Nos rige un código de ética que nos invita a revisar qué nos ocurre personalmente con algunos casos.",
          ],
          subtitle: "¿Cómo se realiza?",
          step: [
            "Se selecciona un caso",
            "Se elaboran preguntas",
            "Se elaboran hipótesis",
            "Se recopilan datos",
            "Se analiza el tipo de intervención utilizada.",
            "Análisis e interpretación de los resultados",
            "Elaboración de nuevas estrategias de intervención.",
          ],
        },
      },
      companiesServices: {
        title: "Elaboración de programas semestral o anual de Autocuidado",
        phrase:
          "“Cuando miro el mundo soy pesimista, pero cuando miro a la gente soy optimista”",
        descriptionParagraph1: (
          <div>
            Trabajar profesionalmente en áreas de políticas públicas, implica
            asumir múltiples desafíos y consecuencias, asociados a la temática y
            a la organización de la tarea y en ocasiones lleva a los
            profesionales a padecer <strong>burnout</strong>
          </div>
        ),
        descriptionParagraph2:
          "Esto ha llevado a que Plan de autocuidado sea una tarea que cumplir en las organizaciones. El objeto del estudio es identificar las estrategias de los profesionales, a nivel individual y de equipo, y conocer la percepción de efectividad de éstas.",
        descriptionParagraph3:
          "Se elabora plan de autocuidado a distancia, personalizado desde enfoque psicología positiva, logrando visualizar y conectar con los recursos disponibles, toda vez que se maneja información  el presupuesto para este ítem es bajo",
        descriptionParagraph4:
          "Se ofrece un plan de acuerdo “al bolsillo” de cada proyecto u organización y se habilita a las jefaturas para poder implementarlos como parte de sus espacios de descompresión.",
        note:
          "La Organización Mundial de la Salud (OMS) ha procedido al reconocimiento oficial del burnout o “síndrome de estar quemado” o de desgaste profesional como enfermedad tras la ratificación de la revisión número 11 de la Clasificación Estadística Internacional de Enfermedades y Problemas de Salud Conexos (CIE-11)",
        note2:
          "El término 'burnout' fue acuñado por primera vez en 1974 por Herbert Freudenberger, en su libro “Burnout: The High Cost of High Achievement” Por lo general, el trastorno es consecuencia de un estrés laboral crónico, y se caracteriza por un estado de agotamiento emocional, una actitud cínica o distante frente al trabajo (despersonalización), y una sensación de ineficacia y de no hacer adecuadamente las tareas. A ello se suma la pérdida de habilidades para la comunicación.",
        note3:
          "El Síndrome de Burnout se incluye así entre los principales problemas de salud mental y en la antesala de muchas de las patologías psíquicas derivadas de un escaso control y de la carencia de una prevención primaria de este síndrome.",
        sintomas: {
          subtitle:
            "Entre los signos y síntomas más comunes de agotamiento se destacan :",
          sintomas: {
            sintomas1: (
              <div>
                <strong>
                  La alienación de las actividades relacionadas con el trabajo :
                </strong>{" "}
                las personas que experimentan agotamiento ven sus trabajos como
                cada vez más estresantes y frustrantes. Pueden volverse cínicos
                sobre sus condiciones de trabajo y las personas con las que
                trabajan
              </div>
            ),
            sintomas2: (
              <div>
                <strong>Síntomas físicos :</strong> el estrés crónico puede
                provocar síntomas físicos, como dolores de cabeza y de estómago
                o problemas intestinales.
              </div>
            ),
            sintomas3: (
              <div>
                <strong>Agotamiento emocional :</strong> el agotamiento causa
                que las personas se sientan agotadas, incapaces de hacer frente
                y cansadas. A menudo les falta energía para hacer su trabajo.
              </div>
            ),
            sintomas4: (
              <div>
                <strong>Rendimiento reducido :</strong> el agotamiento afecta
                principalmente las tareas cotidianas en el trabajo, o en el
                hogar, cuando el trabajo principal de alguien consiste en cuidar
                a los miembros de la familia. Los individuos con agotamiento se
                sienten negativos sobre las tareas. Tienen dificultad para
                concentrarse y, a menudo, carecen de creatividad.
              </div>
            ),
          },
        },
      },
    },

    // contact Us español
    contact: {
      title: "Contacta con nosotros",
      subtitle2: "Escríbenos",
      subtitle: "Información",
      text:
        "Te ha ocurrido que has probado terapia en el pasado y no seguistes, abandonaste o no te gusto el psicólogo/a?",
      text2: (
        <div>
          Si tu respuesta es SÍ, estás en el lugar correcto, eso ocurre porque
          cuando vamos al psicólogo no sabemos qué tipo de enfoque él/ella
          emplea; ya que existen 7 enfoque tradicionales en el ejercicio
          profesional y normalmente NO sabemos cuál de esos nosotros
          necesitamos, aplicamos principio básico de psicología{" "}
          <i>Cada ser humano es único e irrepetible</i>.
        </div>
      ),
      text3: <strong>Aquí vamos a usar el que tú necesites!</strong>,
      addresse: {
        title: "Dirección",
        addresse:
          "Sede Praha, Chequia. Servicios y Asesorias Online resto del mundo.",
      },
      email: {
        title: "correo",
        correo: "asesorias.profesionales.holistic@gmail.com",
      },
      fono: {
        title: "Celular",
        fono: 420776212480,
      },
      giro: {
        title: "Giro",
        giro:
          "SERVICIOS PRESTADOS DE FORMA INDEPENDIENTE POR OTROS PROFESIONALES DE PSICOLOGÍA",
      },
      buttonText: "Submit",
      input: {
        name: "Nombre",
        email: "Correo electrónico",
        comment: "Comentario",
        errorRequiredInformation: "Informacion requerida para continuar",
      },
      transferData: {
        title: "Datos para transferencias",
        text:
          "Pagos se realizan 15 minutos antes de la sesión individual, para otros servicios se reserva cupo con 50% del valor.",
        europe: {
          title: "Datos bancarios",
          typeCurrency: (
            <div>
              <strong>Tipo de moneda :</strong> Euros y coronas checas
            </div>
          ),
          bank: (
            <div>
              <strong>Banco :</strong> Equa bank
            </div>
          ),
          accountNumber: (
            <div>
              <strong>Numero de cuenta :</strong> 1033413121 /6100
            </div>
          ),
          IBAN: (
            <div>
              <strong>IBAN :</strong> CZ7161000000001033413121
            </div>
          ),
        },
        chile: {
          title: "Datos bancarios",
          typeCurrency: (
            <div>
              <strong>Tipo de moneda :</strong> Pesos chilenos
            </div>
          ),
          bank: (
            <div>
              <strong>Banco :</strong> Banco Santander
            </div>
          ),
          accountNumber: (
            <div>
              <strong>Cuenta corriente :</strong> 67779860
            </div>
          ),
          run: (
            <div>
              <strong>Rut :</strong> 17.986.034-1
            </div>
          ),
        },
      },
      servicesListForm: {
        title: "Selecciona un servicios",
        services: {
          naturalPeople: {
            service1: "Psicoterapia breve Adultos",
            service2: "Terapias complementarias",
            service3: "Charlas Preventivas Abuso Sexual Infantil",
            service4: "Prestaciones Jurídicas",
            subservice: {
              title: "Terapias complementarias",
              subservice1: "Respiración consciente",
              subservice2: "Alimentación consciente",
              subservice3: "Asesorías en sexualidad",
              subservice4: "Acompañamiento medicina huevo Yoni",
              subservice5: "Carta Astral",
              subservice6: "Constelaciones familiares",
              subservice7: "Tarot Terapéutico",
            },
          },
          profesionalServices: {
            service1: "Entrenamiento profesional",
            service2: "Psicoterapia para terapeutas",
            service3: "Supervisión de casos",
          },
          companiesServices: {
            service1:
              "Elaboración de programas semestral o anual de auto cuidado",
          },
        },
      },
    },
    // Testimony español
    testimony: {
      title: "Testimonios",
      testimony1: {
        title: "Mujer, 29 años",
        subtitle: "Trastorno de ansiedad",
        text:
          "Desde hace un tiempo estoy asistiendo a sesiones con Carolina, nunca antes había recibido terapia psicológica, lo veía lejano e innecesario, pero no imaginaba lo sanador e importante que sería para mí. Cuando comencé estaba en un momento muy gris de vida, en donde estaba muy confundida y perdida acerca de mis decisiones y sobre lo que yo quería. Actualmente puedo decir que he adquirido las herramientas necesarias para enfrentarme a la vida, eso incluye saber distinguir desde qué vereda decido resolver y tomar decisiones, teniendo en cuenta lo que siento, lo que quiero y pienso. Hoy en día miro hacia atrás, visualizo todo mi avance y me sorprendo, siento que Carolina ha sido un apoyo fundamental, y es por esto que le estoy tremendamente agradecida.",
      },
      testimony2: {
        title: "Hombre, 28 años",
        subtitle: "Profesional psicólogo y educador sexual",
        text:
          "Entrar al área de salud , no fue una experiencia fácil para mí , sentí que salí con pocas herramientas en la universidad y a la vez sentía la obligación de rendir como un buen profesional, por lo que siempre estaba ansioso cada vez que iba a trabajar y salía más ansioso cada vez que me supervisan...Más que un acompañamiento sentía solo un discurso de ego y de poca comprensión por parte de mis compañeros de trabajo y jefaturas.",
        text2:
          "Sin embargo; cuando me puse a trabajar con Carolina, me sentí apoyado en todo, me enseñó herramientas útiles y prestaba atención a mi persona, como un ser humano , y no como una marioneta de salud mental.",
        text3:
          "En el transcurso del tiempo empecé a trabajar con una metodología más sólida, me sentí más seguro y empecé a tener mejores alcances con mis pacientes por lo que sin duda alguna contribuyó a un cambio de mi experiencia, ahora si voy con ganas al trabajo.",
      },
      testimony3: {
        title: "Mujer 46 años",
        subtitle: "Problemas de adicción y ansiedad",
        text:
          "Comencé mis terapias hace 5 meses con Carolina, vivo hace 13 años en República Checa, con un millón de cambios, carencias, luchando por una adaptación a una cultura fuerte y muy diferente a la mía...No es mala, pero no ha sido fácil, intenté muchas otras terapias, siempre quedé con la sensación de que algo faltaba. Cuando vi el contacto de esta profesional en Facebook, la contacté y desde la primera sesión me sentí muy contenida, fue fuerte, porque en 60 minutos yo quería expresar mi vida completa, incluyendo la pasada. Ella fue muy receptiva con mi emoción, ella para mí ha sido un pilar fundamental para mirarme, ir hacia dentro, ver nuevamente mi esencia y creo que seguiré en terapia de por vida, porque cada vez me siento mejor. Junto con ella, el trabajo deja de ser duro y tortuoso, sino un camino hermoso, lleno de luz y sueños.",
      },
      testimony4: {
        title: "Hombre, 36 años",
        subtitle: "Viejo y buen amigo",

        text:
          "Ha tenido un impacto conocerla, en mi vida motivacional y emocional. Siempre ha sido una amistad sin discriminación, me ha acompañado en diferentes etapas de la vida, he obtenido un apoyo moral, siempre a estado ahí para seguir generando impactos en mi vida.",
      },
    },
  },

  //--------------English------------------
  English: {
    header: {
      home: {
        name: "Home",
        path: "/home",
      },
      aboutUs: {
        name: "About Us",
        path: "/about-Us",
      },
      services: {
        name: "Services",
        path: "/services",
      },
      contactUs: {
        name: "Contact Us",
        path: "/contact-us",
      },
    },
  },
};

//   header: {
//     home: {
//       name: "Home",
//       path: "/home",
//     },
//     aboutUs: {
//       name: "About Us",
//       path: "/about-Us",
//     },
//     services: {
//       name: "Services",
//       path: "/services",
//     },
//     contactUs: {
//       name: "Contact Us",
//       path: "/contact-us",
//     },
//   },

//   home: {
//     fistSectionHome: {
//       slider1: {
//         title: "Psychological counseling and professional network",
//         subtitle: "Think, act, transcend",
//         buttonText: "Contact us",
//       },
//       slider2: {
//         title:
//           "La palabra “felicidad” perdería su sentido si no se equilibra con tristeza",
//         autor: "(C. G. Jung)",
//         buttonText: "Contact us",
//       },
//     },
//     SecondSectionHome: {
//       title:
//         "Anguish, confusion, emotional instability, anger, general mental distress",
//       subtitle: "We can help you!",
//       buttonText: "Contact us",
//     },
//     thirdSectionHome: {
//       title: "We are ready when you are!",
//       subtitle:
//         "We care about you, your family, and your story. You can trust that we will treat you with respect, dignity and compassion in every interaction, while maintaining the highest standards for integrity and ethics.",
//       buttonText: "Get Started Today",
//       text1: "More than 150 happy customers",
//       text2: "Loyal customers",
//       text3: "Our clients recommend us",
//     },
//     fourthSectionHome: {
//       title: "Our services",
//       services: {
//         buttonText: "Our services here",
//         people: {
//           title: "Services for natural persons",
//           service1: "Individual and group psychotherapy",
//           service2: "Complementary therapies",
//           service3: "Legal services",
//         },
//         profesional: {
//           title: "Services for professional psychologists and therapists",
//           service1:
//             "Professional training in diagnosis and intervention strategies in traumatic experiences",
//           service2:
//             "Individual therapy to professional psychologists or complementary therapists",
//           service3: "Case monitoring",
//         },
//         companies: {
//           title: "Services for companies",
//           description: "Semester or annual self-care programs",
//         },
//       },
//     },
//     fifthSectionHome: {
//       title: "How it work?",
//       subtitle: "3 Simple steps to start improving your life.",
//       firstStep: "Tell us what service you need through our contact page.",
//       secondStep:
//         "We will contact you to schedule an appointment and give you all the details you need to know.",
//       thirdStep: "Start your sessions and improve your life.",
//       buttonText: "Start today",
//     },
//   },

//   Sevices: {
//     title: "Services",
//     services: [
//       {
//         title: "self-care therapy",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//       {
//         title: "group therapy",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//       {
//         title: "Training for professional psychologists",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//       {
//         title: "Therapy for professional psychologists",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//       {
//         title: "Therapy for professionals in the health area",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//       {
//         title: "Complementary therapies",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         buttonText: "more",
//       },
//     ],
//   },

//   contact: {
//     title: "Contact Us",
//     text:
//       "I know this is hard. You've likely been debating seeking help for months, if not years. But I'm so glad you found me and have taken the courageous step of being here.",
//     addresse: "Czech Republic and Chile",
//     email: "asesorias.profesionales.holistic@gmail.com",
//     fono: "Fono :420776212480",
//     buttonText: "Submit",
//     input: {
//       name: "Name",
//       email: "Email",
//       comment: "Comment",
//       errorRequiredInformation: "Required information",
//     },
//   },
// },
