import { IType } from "../../interface";
import Images from "../../utils/images";
import { TypeWrapper } from "./styles";

 const Type = ({ type,details }: IType) => {
    const img =
      type === "TRANSFER"
        ? Images.transferIcon
        : type === "NFT_MINT"
        ? Images.mintIcon
        : type === "NFT_SALE"
        ? Images.saleIcon
        : type === "BURN" ? Images.burnIcon : " ";
    return (
      <TypeWrapper>
        <div>
          <img src={img} alt="payment-type" />
        </div>
        <p className="type">{details}</p>
      </TypeWrapper>
    );
  };

  export default Type