import React from "react";

export interface IconFlagUAProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
}

const IconFlagUA: React.FunctionComponent<IconFlagUAProps> = ({ alt, ...props }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {Boolean(alt) && <title>{alt}</title>}
      <rect width="20" height="16" rx="2" fill="#1337B8" />
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z"
        fill="#FFD400"
      />
    </svg>
  );
};

export default IconFlagUA;
