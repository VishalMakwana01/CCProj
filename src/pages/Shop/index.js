import React, { useState } from "react";

import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/CollectionPreview/index";

const Shop = () => {
  const [collection] = useState(SHOP_DATA);
  return (
    <div>
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
