import React, { useState } from "react";
import { CollectionPreviewWrapper, Title, Preview } from "./styles";
import CollectionItem from "../../../components/CollectionItem/index";
import SHOP_DATA from "../shopdata";
import CollectionPreview from "../../../components/CollectionPreview/index";

const Men = () => {
  console.log(SHOP_DATA[0], "IN SHOP")
  const [collection] = useState(SHOP_DATA[4]);
  console.log(collection)
  return (

    <>
      <CollectionPreviewWrapper>
        <Title>{collection.title}</Title>
        <Preview>
          {collection.items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item.id} {...item} />
            ))}
        </Preview>
      </CollectionPreviewWrapper>
      <CollectionPreviewWrapper>
        <Preview>
          {collection.items
            .filter((item, index) => index >= 4 && index < 8)
            .map((item) => (
              <CollectionItem key={item.id} {...item} />
            ))}
        </Preview>
      </CollectionPreviewWrapper>
    </>

  );
};

export default Men;
