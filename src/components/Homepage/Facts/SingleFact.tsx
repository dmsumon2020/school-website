"use client"; // This directive marks the component as a Client Component

import React, { useState, useEffect } from "react"; // Import useState and useEffect

/**
 * SingleFact Component
 * This component displays a heading (fact) and a paragraph (text).
 * It can optionally hide its right border and features a counter-up animation for the fact number.
 *
 * @param {object} props - The component props.
 * @param {string} props.facts - The heading text for the component (e.g., a number).
 * @param {string} props.text - The paragraph text content (e.g., a label).
 * @param {boolean} [props.noBorderRight] - If true, the right border will not be applied.
 */
export default function SingleFact({
  facts,
  text,
  noBorderRight, // New prop to control the right border
}: {
  facts: string;
  text: string;
  noBorderRight?: boolean; // Optional prop type
}) {
  // Ensure 'facts' can be parsed as a number for animation
  const targetNumber = parseFloat(facts);
  // State to hold the current number during animation
  const [currentNumber, setCurrentNumber] = useState(0);
  const duration = 2500; // Animation duration in milliseconds (2.5 seconds)

  useEffect(() => {
    // If facts is not a valid number, set currentNumber to 0 and exit
    if (isNaN(targetNumber)) {
      setCurrentNumber(0);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    // Function to animate the counting
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        // Calculate the current number based on progress
        setCurrentNumber(Math.round(targetNumber * progress));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Ensure the final number is exactly the target number
        setCurrentNumber(targetNumber);
      }
    };

    // Create an Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation when the component enters the viewport
            setCurrentNumber(0); // Reset to 0 before starting animation
            animationFrameId = requestAnimationFrame(animate);
            observer.unobserve(entry.target); // Stop observing after animation starts once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Get the element by its ID to observe
    // Using a more robust ID generation to avoid conflicts
    // Ensure 'text' is a string before calling replace()
    const factElement = document.getElementById(
      `fact-${facts}-${(text || "").replace(/\s/g, "-")}`
    );
    if (factElement) {
      observer.observe(factElement);
    }

    // Cleanup function: cancel animation frame and disconnect observer when component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (factElement) {
        observer.unobserve(factElement);
      }
    };
  }, [targetNumber, duration, facts, text]); // Dependencies for useEffect

  return (
    <div
      // Unique ID for Intersection Observer to target this specific element
      // Ensure 'text' is a string before calling replace()
      id={`fact-${facts}-${(text || "").replace(/\s/g, "-")}`}
      className={`flex flex-col justify-center items-center py-10 ${
        !noBorderRight ? "border-r border-solid border-gray-400" : ""
      }`}
    >
      <h2 className="text-8xl text-theme-ascent font-bold tracking-tighter text-clip">
        {currentNumber} {/* Display the animated number */}
      </h2>
      <p className="mt-5 text-2xl">{text}</p>
    </div>
  );
}
