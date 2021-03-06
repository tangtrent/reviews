import React from 'react';

const StarInstance = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 25 25" className="star_instance" style={{paddingRight: "2px"}}>
      <defs>
        <linearGradient id="color1">
          <stop offset="100%" style={{stopColor: "rgb(212, 53, 63)"}}></stop>
          <stop style={{stopColor: "rgb(153, 153, 153)", stopOpacity: '1' }}></stop>
        </linearGradient>
      </defs>
      <path d="M 24.8676 9.0009 C 24.7082 8.54566 24.2825 8.2319 23.7932 8.20897 L 16.1009 8.20897 L 13.659 0.793674 C 13.4851 0.29653 12.9965 -0.0267985 12.4624 0.00174912 L 12.4624 0.00174912 C 11.9395 -0.00194214 11.4747 0.328465 11.3147 0.817672 L 8.87268 8.23297 L 1.20487 8.23297 C 0.68981 8.22949 0.23028 8.55031 0.0640801 9.0294 C -0.10212 9.5085 0.0623083 10.0383 0.472275 10.3448 L 6.69932 14.9763 L 4.25734 22.4396 C 4.08484 22.9296 4.25923 23.4728 4.68663 23.7767 C 5.11403 24.0807 5.69357 24.0737 6.11325 23.7595 L 12.6333 18.96 L 19.1778 23.7595 C 19.3817 23.9119 19.6299 23.996 19.886 23.9995 C 20.2759 24.0049 20.644 23.8232 20.8724 23.5127 C 21.1009 23.2022 21.1611 22.8018 21.0337 22.4396 L 18.5918 14.9763 L 24.6967 10.3208 C 25.0258 9.95784 25.0938 9.43328 24.8676 9.0009 Z" fill="url(#color1)" />
    </svg>
  );
}

export default StarInstance;