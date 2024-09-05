import { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
};

const MenuItemCard = ({ menuItem }: Props) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">₹{menuItem.price}</CardContent>
    </Card>
  );
};

export default MenuItemCard;
