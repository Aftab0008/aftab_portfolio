import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const cardData = [
  { id: 1, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop" },
  { id: 2, url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop" },
  { id: 3, url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop" },
  { id: 4, url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop" },
  { id: 5, url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop" },
  { id: 6, url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop" },
  { id: 7, url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop" },
  { id: 8, url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop" },
];

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);
  const [lastAction, setLastAction] = useState("");

  const resetCards = () => {
    setCards(cardData);
    setLastAction("");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-neutral-100 min-h-screen">
      <div className="relative grid h-[500px] w-full max-w-sm sm:max-w-md md:max-w-lg place-items-center mb-6">
        {cards.map((card) => (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} setLastAction={setLastAction} />
        ))}
        {lastAction && (
          <div className="absolute top-2 text-xl font-semibold text-gray-700 bg-white/70 backdrop-blur-md px-4 py-1 rounded-md shadow">
            {lastAction}
          </div>
        )}
      </div>
      <button
        onClick={resetCards}
        className="px-4 py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
      >
        Reset Cards
      </button>
    </div>
  );
};

const Card = ({ id, url, setCards, cards, setLastAction }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const offset = isFront ? 0 : id % 2 === 0 ? -6 : 6;
  const rotate = useTransform(rotateRaw, (v) => `${v + offset}deg`);

  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const rejectOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = () => {
    const val = x.get();
    if (Math.abs(val) > 100) {
      setCards((prev) => prev.filter((card) => card.id !== id));
      setLastAction(val > 0 ? "👍 Liked" : "❌ Rejected");
    }
  };

  return (
    <motion.div
      className="absolute h-96 w-72 origin-bottom rounded-xl bg-white overflow-hidden shadow-xl hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        zIndex: isFront ? 10 : id,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <img src={url} alt="Card" className="h-full w-full object-cover" />

      {/* Like / Reject Overlays */}
      <motion.div
        className="absolute top-4 left-4 text-white text-2xl font-bold bg-green-500 px-3 py-1 rounded shadow"
        style={{ opacity: likeOpacity }}
      >
        LIKE
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 text-white text-2xl font-bold bg-red-500 px-3 py-1 rounded shadow"
        style={{ opacity: rejectOpacity }}
      >
        NOPE
      </motion.div>
    </motion.div>
  );
};

export default SwipeCards;
