import { Badge } from "@/shared/components/Badge";
import logoBargetir from "@/shared/images/logos/bargetir.jpeg";
import logoBook from "@/shared/images/logos/book.svg";
import logoCv from "@/shared/images/logos/cv.svg";
import logoFsd from "@/shared/images/logos/fsd.png";
import logoPizza from "@/shared/images/logos/pizza.svg";
import logoPokeball from "@/shared/images/logos/pokeball.png";

export const PROJECTS = [
  {
    title: "FS-RN-Todo-app",
    desc: "To-dos? Done, with FSD",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoFsd,
    start: "2011",
    end: "2014",
    status: <Badge title="Live" variant="success" />,
    logo: logoFsd,
    link: {
      href: "https://github.com/berdimyradov/fs-rn-todo-app",
      label: "github.com",
    },
  },
  {
    title: "CVMS",
    desc: "Dynamic CVs, Dynamic Careers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoCv,
    start: "2008",
    end: "2011",
    status: <Badge title="Live" variant="success" />,
    logo: logoCv,
    link: { href: "https://cvms.vercel.app", label: "cvms.vercel.app" },
  },
  {
    title: "Book",
    desc: "Pages from My Life's Book",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoBook,
    start: "2011",
    end: "2014",
    status: <Badge title="Live" variant="success" />,
    logo: logoBook,
    link: { href: "https://www.berdimyradov.com", label: "berdimyradov.com" },
  },
  {
    title: "Harpoon",
    desc: "Catch Pokemon, Like a Pro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoPokeball,
    start: "2008",
    end: "2011",
    status: <Badge title="Live" variant="success" />,
    logo: logoPokeball,
    link: {
      href: "https://github.com/berdimyradov/harpoon",
      label: "github.com",
    },
  },
  {
    title: "BarGetir",
    desc: "Hungry? We've Got You Covered",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoBargetir,
    start: "2019",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
    status: <Badge title="Down" />,
    logo: logoBargetir,
    link: {
      href: "https://play.google.com/store/apps/details?id=com.bargetir",
      label: "play.google.com",
    },
  },
  {
    title: "BarGetir Cheff",
    desc: "Boost Biz with Speedy Delivery",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quam dolor deleniti. Animi quia veritatis nobis incidunt ex quasi labore, distinctio magni.",
    logo: logoPizza,
    start: "2014",
    end: "2019",
    status: <Badge title="Down" />,
    logo: logoPizza,
    link: {
      href: "https://play.google.com/store/apps/details?id=com.bargetir.chef",
      label: "play.google.com",
    },
  },
];
