const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width="180px"
      height="180px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(50 50)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;45"
            keyTimes="0;1"
            dur="0.2s"
            repeatCount="indefinite"
          ></animateTransform>
          <path
            d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
            fill="#94a9ce"
          ></path>
        </g>
      </g>
    </svg>

    // <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    //     <g transform="translate(80,50)">
    //     <g transform="rotate(0)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="1">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(71.21320343559643,71.21320343559643)">
    //     <g transform="rotate(45)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.875">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(50,80)">
    //     <g transform="rotate(90)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.75">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(28.786796564403577,71.21320343559643)">
    //     <g transform="rotate(135)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.625">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(20,50.00000000000001)">
    //     <g transform="rotate(180)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.5">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(28.78679656440357,28.786796564403577)">
    //     <g transform="rotate(225)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.375">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(49.99999999999999,20)">
    //     <g transform="rotate(270)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.25">
    //     <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
    //     </circle>
    //     </g>
    //     </g><g transform="translate(71.21320343559643,28.78679656440357)">
    //     <g transform="rotate(315)">
    //     <circle cx="0" cy="0" r="7" fill="#1c4595" fillOpacity="0.125">
    //     <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
    //     <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
    //     </circle>
    //     </g>
    //     </g>
    // </svg>
  );
};

export default Spinner;
