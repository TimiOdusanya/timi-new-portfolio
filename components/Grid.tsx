import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Button } from "./ui/MovingBorders";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="mb-20">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>

      <div className="flex flex-col items-center max-lg:mt-20">
        {/* <h1 className="heading mb-20">
          My
          <span className="text-purple"> Skillset</span>
        </h1> */}

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <Button
              key={company.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="group relative flex flex-col items-center justify-center py-3 px-6 text-black dark:text-white border-neutral-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={company.img}
                alt={company.name}
                className="md:w-24 w-20 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="mt-2 text-sm font-medium">
                {company.nameImg}
              </span>
              <div className="absolute inset-0 border-2 border-transparent rounded transition-colors duration-300"></div>
            </Button>
          ))}
        </div>

        {/* <h1 className="heading">
          Kind words from
          <span className="text-purple"> satisfied clients</span>
        </h1>

        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Grid;
