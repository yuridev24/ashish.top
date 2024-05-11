"use client";

import { useState, useRef } from "react";
import { BookTag } from "@/app/components/ui/BookTag";
import { motion, useInView } from "framer-motion";
import { BooksCard } from "@/app/components/ui/BooksCard";

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
    id: 8,
    name: "Building Web Apps with Python",
    description:
      "Build web apps with Python using the flask framework. Flask provides a robust of control to build your web application very easily. You will learn how to render HTML, use Jinja, re-use templates and protection from XHR",
    tag: ["All", "Python", "Web Dev"],
    preview:
      "https://www.google.co.in/books/edition/Building_Web_Apps_with_Python/Ttj_EAAAQBAJ?hl=enhttps://books.google.co.in/books?id=Ttj_EAAAQBAJ&newbks=0&printsec=frontcover&pg=PA88&dq=Ashish+Agarwal+building+web+apps+with+python&hl=en&source=newbks_fb&redir_esc=y",
    buy: "https://play.google.com/store/books/details?id=Ttj_EAAAQBAJ",
    cover: "/images/books/8.png"
  },
  {
    id: 7,
    name: "Microsoft Word A Junior&apos;s Guide",
    description:
      "Microsoft Word is a word processing software, also known as MS-WORD. This book guides you from nothing to more than a intermediate!",
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
      "Learn HTML beyond the basics. A guide for beginners!",
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
      "A short book explaining how to make a Gmail account and use it to send or recieve emails.",
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
      "Learn how to easily store your data in SQL, then access it. A guide to those who never already knew, what&apos;s SQL?",
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
      "A master guide for Professionals. Learn every single feature and tool of Microsoft Word to get even more productive!",
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
      "Guides almost every method of Python&apos;s Turtle Package. Learn just not the methods, but also make some graphics!",
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
  const isInView = useInView(ref, { once: false });
  const [tag, setTag] = useState<string>("All");

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredBooks = booksData.filter((book) =>
    book.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="books">
      <h2 className="text-center text-4xl text-white mt-4 mb-2 md:mb-4 font-semibold">
        Books I&apos;ve{" "}
        <span className="bg-gradient-to-r from-primary-300 via-primary-450 bg-clip-text to-primary-500 radial text-transparent">
          authored
        </span>
      </h2>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-6">
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
              preview={book.preview}
              buy={book.buy}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
