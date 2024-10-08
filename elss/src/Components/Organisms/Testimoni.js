import React from "react";
import TestimoniFooter from "../Molecules/Testimoni/TestimoniFooter";
import "../../styles/Testimonial.css";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

const TestimoniOrganism = () => {
    return (
      <section id="Testimoni">
        <div className="testimoni">
          {/* Tambahkan className untuk styling judul */}
          <Title className="testimoni-title" title="Testimonial" />
          <div className="testimoni-content">
            <div className="testimoni-item">
              <Subtitle className="testimoni-Subtitle">
                This is a template Figma file, turned into code using Anima. Learn
                more at AnimaApp.com
              </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>

          <div className="testimoni-item">
            <Subtitle className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>
          <div className="testimoni-item">
            <Subtitle className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>
          <div className="testimoni-item">
            <Subtitle className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>
          <div className="testimoni-item">
            <Subtitle className="testimoni-">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>
          <div className="testimoni-item">
            <Subtitle className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Subtitle>
            <TestimoniFooter
             avatarSrc="/img/testimoni.png" // Path gambar yang benar
             avatarAlt="Avatar 1"
             nama="Gemma Nolen"
             company="Google"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniOrganism;