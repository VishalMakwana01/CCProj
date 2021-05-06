import React from "react";
import { Link } from "react-router-dom"
import { CollectionPreviewWrapper, Title, Preview } from "./styles";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewWrapper>
      <Title><Link to={"/shop/" + title}>{title}</Link></Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...collectionItemProps }) => (
            <CollectionItem key={id} {...collectionItemProps} />
          ))}
      </Preview>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
