"use client";

import { motion } from "framer-motion";

interface LoadingProps {
  variant?: "spinner" | "dots" | "pulse";
  size?: "sm" | "md" | "lg";
  color?: "purple" | "white";
}

export default function Loading({
  variant = "spinner",
  size = "md",
  color = "purple",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    purple: "border-purple-600",
    white: "border-white",
  };

  if (variant === "spinner") {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full`}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full bg-current`}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className="flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full bg-current`}
        />
      </div>
    );
  }

  return null;
}
