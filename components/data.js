import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/japanese-land.jpg";
import benefitTwoImg from "../public/img/wc-japan.jpeg";

const benefitOne = {
  title: "Un super inodoro",
  desc: "En esta sección destacamos los principales beneficios y características de nuestros inodoros japoneses. Estos puntos están diseñados para ayudarte a entender mejor por qué nuestros productos son superiores.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Confort y Tecnología Avanzada:",
      desc: "Nuestros inodoros están equipados con las últimas tecnologías, como asientos calefactados, bidé integrado y secado automático.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Ahorro de Agua y Energía",
      desc: "Diseñados para ser ecológicos, nuestros inodoros japoneses consumen menos agua y energía, ayudando a reducir tu factura de servicios públicos.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Fácil Mantenimiento",
      desc: "Con superficies antibacterianas y sistemas de autolimpieza, nuestros retretes japoneses son fáciles de mantener y siempre están higiénicos.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "La SUPER comodidad",
  desc: "El baño japones o retrete japones ademas de ser comodo, es el mas avanzado del mercado, pudiendo personalizar las diferentes tecnologias que puedes usar.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Conexión móvil",
      desc: "Tienes retretes con tecnología de control por móvil",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Diferentes personalizaciones",
      desc: "Desde secador hasta musica ambiente, puedes personalizarlos como quieras.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Asiento adaptable con temperatura",
      desc: "Tienes diferentes temperaturas de uso dependiendo de la épica del año o la región en la que estés.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
