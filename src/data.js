import {
  FaBriefcase,
  FaEgg,
  FaBreadSlice,
  FaHamburger,
  FaCheese,
  FaGolfBall,
  FaFootballBall,
} from "react-icons/fa";

import React from "react";

const menu = [
  {
    page: "Breakfast",
    links: [
      { label: "Egg & Cheese", icon: <FaEgg />, url: "/egg&Cheese" },
      { label: "chicken slice", icon: <FaBreadSlice />, url: "/chickenSlice" },
      { label: "Western Egg", icon: <FaEgg />, url: "/westernEgg" },
    ],
  },

  {
    page: "Protein Bowls",
    links: [
      { label: "Black Forest Ham", icon: <FaHamburger />, url: "/bfham" },
      { label: "Oven Roasted Chicken", icon: <FaEgg />, url: "/lrChicken" },
      { label: "Steak & Cheese", icon: <FaCheese />, url: "/st&cheese" },
      { label: "Tuna", icon: <FaEgg />, url: "/tuna" },
    ],
  },

  {
    page: "Salads",
    links: [
      { label: "Black Forest Ham", icon: <FaFootballBall />, url: "/products" },

      {
        label: "Sweet Onion Chicken ",
        icon: <FaGolfBall />,
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
