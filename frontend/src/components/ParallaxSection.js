import { useState, useEffect } from "react";

export default function ParallaxSection({
  imageSrc,
  heading,
  subheading,
  children,
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "contain", // Image covers the entire background area
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const contentStyle = {
    color: "rgba(255, 255, 255, 0.8)", // Almost transparent text
    fontSize: "4rem", // Adjust as needed
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Subtle text shadow
    zIndex: 1, // Ensure content stays above background image
    transform: `translateY(${scrollY * 0.2}px)`, // Parallax effect (adjust multiplier)
  };

  return (
    <section style={parallaxStyle}>
      <div
        style={{
          height: "25vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        {" "}
        {/* Container for image */}
        {/* No need for a separate image element here */}
      </div>
      <div style={contentStyle}>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
      {children}
    </section>
  );
}
