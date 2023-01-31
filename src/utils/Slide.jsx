//used as a reference for contact jsx, portfolio.jsx box slide in no code is exported or used from here.

//first copy line 9-10 in respective section and import their files above like use ref and usein view 
// then to outermost section add red={ref} and just inside element add the styles folder
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./styles.css";

function Section({ children }) {
    
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Section>Animate</Section>
      <Section>when</Section>
      <Section>in</Section>
      <Section>view!</Section>
    </>
  );
}


