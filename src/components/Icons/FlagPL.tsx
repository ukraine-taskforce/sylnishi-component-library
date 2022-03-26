import React from "react";

export interface IconFlagPLProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
}

const IconFlagPL: React.FunctionComponent<IconFlagPLProps> = ({ alt, ...props }) => {
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

      <rect x="0.5" y="0.5" width="19" height="15" rx="1.5" fill="white" stroke="#F1F1F1" />
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z"
        fill="#FF5247"
      />
    </svg>
  );
};

export default IconFlagPL;
