// @ts-nocheck
import { ItemImageStyle } from "./ItemImageStyles";

export const ItemImage = ({ src, alt, className }) => {
  return (
    <ItemImageStyle>
      <img src={src} alt={alt} className={className} />
    </ItemImageStyle>
  );
};
