import { useState } from "react";
import ArticleCard from "../component/ArticleCard/ArticleCard";

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <section>
      <div className="container grid grid-cols-1 gap-8">
        <ArticleCard title="" author="" date="" perex="" link="" />
      </div>
    </section>
  );
}
