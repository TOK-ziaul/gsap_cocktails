import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <nav>
      <div className="flex items-center justify-between ">
        <a href="#home" className="flex items-center gap-2 w-fit">
          <img src="/images/logo.png" alt="" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((item, index) => (
            <li key={index} className="text-sm font-medium">
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
