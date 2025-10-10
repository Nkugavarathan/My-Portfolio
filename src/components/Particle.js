// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{
//         particles: {
//           number: {
//             value: 160,
//             density: {
//               enable: true,
//               value_area: 1500,
//             },
//           },
//           line_linked: {
//             enable: false,
//             opacity: 0.03,
//           },
//           move: {
//             direction: "right",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;

import React from "react"
import Particles from "react-tsparticles"

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent", // keep your gradient background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: ["#ff6b6b", "#f8e9a1", "#6bffb0"], // soft pink, yellow, mint
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none", // slow drifting
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#d1c4e9", // soft glowing links
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble", // hover makes particles grow and glow
            },
            onClick: {
              enable: true,
              mode: "repulse", // click pushes them away
            },
          },
          modes: {
            bubble: {
              distance: 100,
              size: 8,
              duration: 2,
              opacity: 1,
            },
            repulse: {
              distance: 150,
              duration: 0.6,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particle
