// src/data/navigation.js

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Our Company", path: "/our-company" },

  {
    label: "Our Offering",
    path: "/our-offering",
    children: [
      {
        label: "Tea",
        path: "/our-offering/tea",
        items: [
          { label: "Our Tea Collection", path: "/our-offering/tea" },
          { label: "Tea Machinery & Accessories", path: "/our-offering/tea-machinery" },
        ],
      },
      {
        label: "Foods",
        path: "/our-offering/kitchen-products",
        items: [
          { label: "Soya", path: "/our-offering/kitchen-products/soya" },
          { label: "Ghee", path: "/our-offering/kitchen-products/ghee" },
          { label: "Staples", path: "/our-offering/kitchen-products/staples" },
          { label: "Rice, Pulses and Spices", path: "/our-offering/kitchen-products/rice-pulses-spices" },
        ],
      },
      {
        label: "Baby Care",
        path: "/our-offering/baby-care/product",
        items: [
          { label: "Baby Care Product", path: "/our-offering/baby-care/product" },
          { label: "Baby Care Accessories", path: "/our-offering/baby-care/accessories" },
        ],
      },
      {
        label: "Beauty Products",
        path: "/our-offering/beauty-products",
        items: [
          { label: "Female", path: "/our-offering/beauty-products/female" },
          { label: "Male", path: "/our-offering/beauty-products/male" },
        ],
      },
    ],
  },
  { label: "Wholesale", path: "/wholesale" },
  { label: "Sustainability", path: "/sustainability" },

];

export const MEGA_MENU_CATEGORIES = [
  {
    id: "tea",
    label: "Tea",
    path: "/our-offering/tea",
    subItems: [
      { label: "Our Tea Collection", path: "/our-offering/tea" },
      { label: "Tea Machinery & Accessories", path: "/our-offering/tea-machinery" },
    ],
  },
  {
    id: "kitchen-products",
    label: "Foods",
    path: "/our-offering/kitchen-products",
    subItems: [
      { label: "Soya", path: "/our-offering/kitchen-products/soya" },
      { label: "Ghee", path: "/our-offering/kitchen-products/ghee" },
      { label: "Staples", path: "/our-offering/kitchen-products/staples" },
      { label: "Rice, Pulses and Spices", path: "/our-offering/kitchen-products/rice-pulses-spices" },
    ],
  },
  {
    id: "baby-care",
    label: "Baby Care",
    path: "/our-offering/baby-care/product",
    subItems: [
      { label: "Baby Care Product", path: "/our-offering/baby-care/product" },
      { label: "Baby Care Accessories", path: "/our-offering/baby-care/accessories" },
    ],
  },
  {
    id: "beauty-products",
    label: "Beauty Products",
    path: "/our-offering/beauty-products",
    subItems: [
      { label: "Female", path: "/our-offering/beauty-products/female" },
      { label: "Male", path: "/our-offering/beauty-products/male" },
    ],
  },
];

export const NAV_LINKS_RIGHT = [
  {
    label: "Media Center",
    path: "/blog",
    children: [
      { label: "News Room", path: "/media-center/news-center" },
      { label: "ISSI News", path: "/media-center/issi-news" },
      { label: "Everyday Updates", path: "/media-center/everyday-updates" },
    ],
  },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
  { label: "Policies", path: "/policies" },
];

export const BUSINESS_LINKS = [
  { label: "FMCG", path: "/businesses/fmcg" },
  { label: "Equipment", path: "/businesses/equipments" },
  { label: "Services", path: "/businesses/services" },
  { label: "Wholesale", path: "/wholesale" },
];

export const SITE_CONFIG = {
  name: "Golden Leaf Tea Co.",
  tagline: "Prefer It Perfect",
  email: "contactus@issiportal.in",
  phone: "+91 9958666303",
  address: "Village - Bhatara Ghat, Tehasil - Bisfi, District - Madhubani, Bihar, Pin - 847122",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};