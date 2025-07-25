import { motion } from 'framer-motion';
import React from "react";
import TiltedCard from './TiltedCard';

const books = [
  {
    title: 'DO EPIC SHIT',
    desc: 'A book to be read, and re-read, a book whose lines you will underline and think about again and again.',
    img: 'https://m.media-amazon.com/images/I/71g2ednj0JL.jpg',
    link: '#',
  },
  {
    title: 'GET EPIC SHIT DONE',
    desc: '36 life questions you need answers to! DO EPIC SHIT made you think, GET EPIC SHIT DONE will make you act!',
    img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg',
    link: '#',
  },
  {
    title: 'MAKE EPIC MONEY',
    desc: 'The book I wish I was given when I was young. Filling in what school, college, and family never taught.',
    img: 'https://m.media-amazon.com/images/I/81p+xe8cbnL.jpg',
    link: '#',
  },
  {
    title: 'BUILD AN EPIC CAREER',
    desc: 'A practical guide to building a career you actually want.',
    img: 'https://m.media-amazon.com/images/I/81vpsIs58WL.jpg',
    link: '#',
  },
];

const Books = () => (
  <section id="books" className=" pb-4 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book, idx) => (
          <motion.a
            href={book.link}
            key={book.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
            className="block"
          >
            <TiltedCard
              imageSrc={book.img}
              altText={book.title}
              captionText={book.title}
              containerHeight="340px"
              containerWidth="100%"
              imageHeight="220px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-white text-center px-4">
                  <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                  <p className="text-sm">{book.desc}</p>
                </div>
              }
            />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Books; 