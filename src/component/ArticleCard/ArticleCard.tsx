import React from "react";
import { Link } from "react-router-dom";
import { Url } from "url";
import { Article } from "../../types";

export default function ArticleCard(article: Article) {
  return (
    <article className="">
      <Link to="{link}">
        <img src="{image}" alt="" />
      </Link>
      <h2>{article.title}</h2>
    </article>
  );
}
