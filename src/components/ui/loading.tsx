"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export function Loading({
  className,
  size = "md",
  fullScreen = false,
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const containerClasses = cn(
    "flex flex-col items-center justify-center",
    fullScreen ? "min-h-screen" : "",
    className,
  );

  return (
    <div className={containerClasses}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Main Spinner */}
        <div className={cn("relative", sizeClasses[size])}>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-purple-200"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-purple-600"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-purple-600 font-medium"
        >
          Loading
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.span>
        </motion.div>

        {/* Decorative Elements */}
        {fullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-gray-500 text-sm"
          >
            Please wait while we prepare your content
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
