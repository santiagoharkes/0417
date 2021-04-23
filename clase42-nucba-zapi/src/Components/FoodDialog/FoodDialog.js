import { formatPrice } from "../../utils/formatPrice";
import {
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  DialogFooter,
  ConfirmButton,
  DialogShow,
} from "./FoodDialogStyles";

function FoodDialogPepito({ openFood, setOpenFood }) {
  const handleClose = (e) => {
    if (e.target.id === "food__dialog") {
      setOpenFood();
    }
  };

  const addToOrder = () => {
    setOpenFood();
  };

  return (
    <DialogShow id="food__dialog" onClick={(e) => handleClose(e)}>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <p>{openFood.description}</p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Agregar: {formatPrice(openFood.price)}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </DialogShow>
  );
}

export const FoodDialog = (props) => {
  if (!props.openFood) return null;

  return <FoodDialogPepito {...props} />;
};
