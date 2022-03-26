import React from "react";

export interface IconFlagGBProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
}

const IconFlagGB: React.FunctionComponent<IconFlagGBProps> = ({ alt, ...props }) => {
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
      <path d="M20 0H0V16H20V0Z" fill="#084CA1" />
      <path
        d="M20 0H17.4979L12.2874 4.16254V0H7.69856V4.33333L2.19095 0H0V2.16381L3.94986 5.28698H0V10.8298H3.91807L0 13.9752V16H2.59225L7.69856 11.9054V16H12.2874V11.8337L17.5631 16H20V13.9975L15.986 10.8292H20V5.28635H16.0058L20 2.08635V0Z"
        fill="white"
      />
      <path d="M6.4384 5.28635L0 0V1.39556L4.8103 5.28698H6.4384V5.28635Z" fill="#ED1C24" />
      <path d="M13.5709 10.8301L19.9999 16.0002V14.7025L15.199 10.8301H13.5709Z" fill="#ED1C24" />
      <path
        d="M7.69856 10.8297H6.3743L0 15.9999H1.52647L7.69856 11.0831V10.8291V10.8297Z"
        fill="#ED1C24"
      />
      <path
        d="M12.2874 5.28635H13.5204L20 0.129524V0H18.5418L12.2874 4.96V5.28635V5.28635Z"
        fill="#ED1C24"
      />
      <path
        d="M20 6.46286H11.3039V0H8.68199V6.46286H0V9.65333H8.68199V16H11.3039V9.65333H20V6.46286Z"
        fill="#ED1C24"
      />
    </svg>
  );
};

export default IconFlagGB;
