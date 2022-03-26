import React, { FC } from "react";
import IconFlagCZ from "./FlagCZ";
import IconFlagDE from "./FlagDE";
import IconFlagGB from "./FlagGB";
import IconFlagHU from "./FlagHU";
import IconFlagIT from "./FlagIT";
import IconFlagPL from "./FlagPL";
import IconFlagUA from "./FlagUA";

export type AvailableISO = "cz" | "de" | "gb" | "hu" | "it" | "pl" | "ua";
export type AvailableRFC = "cs" | "de" | "en" | "hu" | "it" | "pl" | "uk";

export const ISOToRFC = {
  cz: "cs",
  de: "de",
  gb: "en",
  hu: "hu",
  it: "it",
  pl: "pl",
  ua: "uk",
};

export const RFCToISO = {
  cs: "cz",
  de: "de",
  en: "gb",
  hu: "hu",
  it: "it",
  pl: "pl",
  uk: "ua",
};

export interface IconFlagProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  iso?: string;
  rfc?: string;
}

const IconFlag: FC<IconFlagProps> = ({ alt, iso, rfc, ...props }) => {
  const isoLang = (
    rfc ? RFCToISO[rfc.toLowerCase() as AvailableRFC] : iso?.toLowerCase()
  ) as AvailableISO;

  switch (isoLang) {
    case "cz":
      return <IconFlagCZ alt={alt} {...props} />;
    case "de":
      return <IconFlagDE alt={alt} {...props} />;
    case "de":
      return <IconFlagDE alt={alt} {...props} />;
    case "gb":
      return <IconFlagGB alt={alt} {...props} />;
    case "hu":
      return <IconFlagHU alt={alt} {...props} />;
    case "it":
      return <IconFlagIT alt={alt} {...props} />;
    case "pl":
      return <IconFlagPL alt={alt} {...props} />;
    case "pl":
      return <IconFlagPL alt={alt} {...props} />;
    case "ua":
      return <IconFlagUA alt={alt} {...props} />;
    default:
      return <>Flag not found</>;
  }
};

export default IconFlag;
