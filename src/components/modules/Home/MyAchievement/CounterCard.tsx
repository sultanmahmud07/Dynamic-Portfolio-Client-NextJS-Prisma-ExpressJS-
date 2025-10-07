"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import CountUp from "react-countup";

interface CounterData {
  logo: StaticImageData;
  countNumber: number | string;
  name: string;
}

interface CounterCardProps {
  data: CounterData;
}

const CounterCard: React.FC<CounterCardProps> = ({ data }) => {
  const { logo, countNumber, name } = data;

  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div
      className="single_count flex flex-col justify-center items-center text-white"
      ref={countRef}
    >
      <Image
        src={logo}
        alt="logo"
        width={600}
        height={600}
        className="w-16 mb-4"
      />
      <h4 className="text-3xl md:text-4xl font-bold">
        <CountUp
          duration={2.75}
          start={0}
          end={isVisible ? Number(countNumber) : 0}
        />
        +
      </h4>
      <p>{name}</p>
    </div>
  );
};

export default CounterCard;
