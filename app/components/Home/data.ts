export interface Property {
  id: number;
  image: string;
  name: string;
  location: string;
  logo: string;
  features: { icon: string; label: string }[];
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    image: "/images/home/feat-property/item1.jpg",
    name: "BEACH WALK III",
    location: "Dubai Islands",
    logo: "/images/home/feat-property/logo1.svg",
    features: [
      {
        icon: "/images/home/feat-property/icons/sofa.svg",
        label: "Fully Furnished",
      },
      {
        icon: "/images/home/feat-property/icons/2.svg",
        label: "20 Min from Sheikh Zyd Rd",
      },
      {
        icon: "/images/home/feat-property/icons/3.svg",
        label: "Direct Access to Park",
      },
    ],
  },
  {
    id: 2,
    image: "/images/home/feat-property/item1.jpg",
    name: "BEACH WALK III",
    location: "Dubai Islands",
    logo: "/images/home/feat-property/logo1.svg",
    features: [
      {
        icon: "/images/home/feat-property/icons/sofa.svg",
        label: "Fully Furnished",
      },
      {
        icon: "/images/home/feat-property/icons/2.svg",
        label: "20 Min from Sheikh Zyd Rd",
      },
      {
        icon: "/images/home/feat-property/icons/3.svg",
        label: "Direct Access to Park",
      },
    ],
  },
  {
    id: 3,
    image: "/images/home/feat-property/item1.jpg",
    name: "BEACH WALK III",
    location: "Dubai Islands",
    logo: "/images/home/feat-property/logo1.svg",
    features: [
      {
        icon: "/images/home/feat-property/icons/sofa.svg",
        label: "Fully Furnished",
      },
      {
        icon: "/images/home/feat-property/icons/2.svg",
        label: "20 Min from Sheikh Zyd Rd",
      },
      {
        icon: "/images/home/feat-property/icons/3.svg",
        label: "Direct Access to Park",
      },
    ],
  },
];
