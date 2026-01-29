// import { gridItems } from "@/data";

import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
// import { MacbookScroll } from "./ui/MacbookScroll";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20  ">
        {/* <MacbookScroll /> */}

        {gridItems?.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imageClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;