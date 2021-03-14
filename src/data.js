import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

import React from "react";

const menu = [
  {
    page: "Breakfast",
    links: [
      { label: "Egg & Cheese", icon: <FaCreditCard />, url: "/egg&Cheese" },
      { label: "chicken slice", icon: <FaCreditCard />, url: "/chickenSlice" },
      { label: "Western Egg", icon: <FaCreditCard />, url: "/westernEgg" },
    ],
  },

  {
    page: "Protein Bowls",
    links: [
      { label: "Black Forest Ham", icon: <FaBook />, url: "/bfham" },
      { label: "Oven Roasted Chicken", icon: <FaBook />, url: "/lrChicken" },
      { label: "Steak & Cheese", icon: <FaBook />, url: "/st&cheese" },
      { label: "Tuna", icon: <FaBook />, url: "/tuna" },
    ],
  },

  {
    page: "Salads",
    links: [
      { label: "Black Forest Ham", icon: <FaBriefcase />, url: "/products" },

      {
        label: "Sweet Onion Chicken Teriyaki",
        icon: <FaBriefcase />,
        url: "/socTeriyaki",
      },
      {
        label: "Meatball Marinara",
        icon: <FaBriefcase />,
        url: "/products",
      },
      {
        label: "Turkey Breast",
        icon: <FaBriefcase />,
        url: "/turkeyBreast",
      },
      {
        label: "Veggie Delite®",
        icon: <FaBriefcase />,
        url: "/veggie",
      },
    ],
  },
];

export default menu;
