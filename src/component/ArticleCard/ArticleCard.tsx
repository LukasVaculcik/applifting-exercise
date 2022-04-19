import React from "react";
import { Link } from "react-router-dom";
import { Url } from "url";

export default function ArticleCard(
  image: string,
  title: string,
  author: string,
  date: Date,
  perex: string,
  link: Url
) {
  return (
    <article className="">
      <Link to="{link}">
        <img src="{image}" alt="" />
      </Link>
      <h2>{title}</h2>
    </article>
  );
}
