"use client";

import React, { useState, useRef } from "react";
import { BookTag } from "./BookTag";
import { motion, useInView } from "framer-motion";
import { BooksCard } from "./BooksCard";

const bookTags = [
  "All",
  "Web Dev",
  "Python",
  "Graphics",
  "Data",
  "Other"
]

const booksData = [
  {
    id: 7,
    name: "Microsoft Word A Junior&apos;s Guide",
    description:
      "This book is easily explained to teach someone microsoft word from scratch without going too deep hard topics, which will be ideal for first-time newcomers.",
    cover: "/images/books/7.png",
    tag: ["All", "Other"],
    preview:
      "https://www.google.co.in/books/edition/Microsoft_Word_A_Junior_s_guide/jFfPEAAAQBAJ?hl=en&gbpv=1&dq=microsoft+word+a+junior%27s+guide&printsec=frontcover",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_Microsoft_Word_A_Junior_s_guide?id=jFfPEAAAQBAJ",
  },
  {
    id: 6,
    name: "HTML Express Beyond the Basics",
    description:
      "A book about HTML5 for those who never had experience in programming. Start your adventure here!",
    cover: "/images/books/6.png",
    tag: ["All", "Web Dev"],
    preview:
      "https://www.google.co.in/books/edition/HTML_Express_Beyond_The_Basics/TtLQEAAAQBAJ?hl=en&gbpv=1&dq=HTml+express+beyond+the+basic&printsec=frontcover",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_HTML_Express_Beyond_The_Basics?id=TtLQEAAAQBAJ",
  },
  {
    id: 5,
    name: "How to make a email",
    description:
      "For those who never experienced with gmail, this is just a short hand-book.",
    cover: "/images/books/5.png",
    tag: ["All", "Other"],
    preview:
      "https://www.google.co.in/books/edition/How_to_make_an_Email_How_to_use_Gmail/AuuuEAAAQBAJ?hl=en&gbpv=1&dq=how+to+make+a+gmail+ashish+agarwal&pg=PP1&printsec=frontcover",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_How_to_make_an_Email_How_to_use_Gma?id=AuuuEAAAQBAJ",
  },
  {
    id: 4,
    name: "SQL - A Beginner&apos;s Guide",
    description:
      "In this book, you will learn SQL in depth from scratch for such a cheap amount.",
    cover: "/images/books/4.png",
    tag: ["All", "Data"],
    preview:
      "https://www.google.co.in/books/edition/SQL_A_Beginner_s_Guide_by_Ashish_Agarwal/aX3lEAAAQBAJ?hl=en&gbpv=1&dq=learn+sql+from+scratch+ashish+agarwal&printsec=frontcover",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_SQL_A_Beginner_s_Guide_by_Ashish_Ag?id=aX3lEAAAQBAJ",
  },
  {
    id: 3,
    name: "Microsoft Word - A Professional Guide",
    description:
      "In this book, you would learn detailed every feature of Microsoft Word (every tool too). It&apos;s for beginners, for those who do not ever experienced with Microsoft Word before. You would also learn the shortcut keys for tools that may have a key.",
    cover: "/images/books/3.png",
    tag: ["All", "Other"],
    preview:
      "https://www.google.co.in/books/edition/Microsoft_Word_A_Professional_Guide/qgF6EAAAQBAJ?&gbpv=1",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_Microsoft_Word_A_Professional_Guide?id=qgF6EAAAQBAJ",
  },
  {
    id: 2,
    name: "Great Turtle Guide",
    description:
      "This book is for those who would like to draw graphics with Python. You would use the &apos;turtle&apos; library of Python to draw graphics, also load images and a simple Indian flag. You would learn how to draw with multiple cursors and how to control the speed as well.",
    cover: "/images/books/2.png",
    tag: ["All", "Python", "Graphics"],
    preview:
      "https://www.google.co.in/books/edition/Great_Turtle_Guide/ddlqEAAAQBAJ?gbpv=1",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_Great_Turtle_Guide?id=ddlqEAAAQBAJ",
  },
  {
    id: 1,
    name: "A Ashish&apos;s Guide to GREAT PYTHON DEVELOPMENT",
    description:
      "My first book, but this book is a newbee&apos;s guide to Python. You will learn several topics in this book, many concepts that you might need: calculating length of array, working with packages. You will finally build a simple youtube downloader!",
    cover: "/images/books/1.png",
    tag: ["All", "Python"],
    preview:
      "https://www.google.co.in/books/edition/A_Ashish_s_Guide_to_GREAT_PYTHON_DEVELOP/kJJWEAAAQBAJ?gbpv=1",
    buy: "https://play.google.com/store/books/details/Ashish_Agarwal_A_Ashish_s_Guide_to_GREAT_PYTHON_DE?id=kJJWEAAAQBAJ",
  },
];

export const BooksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredBooks = booksData.filter((book) =>
    book.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0, transform: "rotate(10deg)" },
    animate: { y: 0, opacity: 1, transform: "rotate(0deg)" },
  };

  return (
    <section id="books">
      <h2 className="text-center text-4xl text-white mt-4 mb-2 md:mb-4 font-semibold">
        Books I&apos;ve{" "}
        <span className="bg-gradient-to-r from-primary-300 via-primary-450 bg-clip-text to-primary-500 radial text-transparent">
          authored
        </span>
      </h2>
      <p className="text-center text-xl text-white mt-4 mb-8 md:mb-4 font-italic">
        These books were completely wrote by me :)
      </p>
      <div className="text-white md:flex flex-rows justify-center items-center md:gap-2 py-6">
        {bookTags.map((tagName, index) => (
          <BookTag
            key={index}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredBooks.map((book, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <BooksCard
              key={book.id}
              name={book.name.replace(/&apos;/g, "'")}
              desc={book.description.replace(/&apos;/g, "'")}
              cover={book.cover}
              tags={book.tag}
              preview={book.preview}
              buy={book.buy}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
