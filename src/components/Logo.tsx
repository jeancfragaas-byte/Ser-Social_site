import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({ className = "", size = 48, showText = false, textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Custom High-Fidelity SVG of the scales of justice with a flame */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        {/* Soft background Circle for emblem feel if necessary */}
        {/* Scales Base Pillar */}
        <path
          d="M236 400C236 388.954 244.954 380 256 380C267.046 380 276 388.954 276 400H236ZM276 400C276 411.046 267.046 420 256 420C244.954 420 236 411.046 236 400H276ZM200 440C200 428.954 208.954 420 220 420H292C303.046 420 312 428.954 312 440H200ZM180 460H332V440H180V460Z"
          fill="currentColor"
          className="text-brand-teal"
        />
        
        {/* Scales Stem */}
        <rect
          x="248"
          y="230"
          width="16"
          height="160"
          rx="8"
          fill="currentColor"
          className="text-brand-teal"
        />
        
        {/* Stem Rings */}
        <circle
          cx="256"
          cy="310"
          r="16"
          fill="currentColor"
          className="text-brand-teal"
        />
        <circle
          cx="256"
          cy="236"
          r="10"
          fill="currentColor"
          className="text-brand-teal"
        />
        
        {/* Horizontal Balance Arm */}
        <path
          d="M160 210C160 210 210 190 256 190C302 190 352 210 352 210"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          className="text-brand-teal"
        />

        {/* Hanging Strings Left */}
        <path
          d="M160 210L120 270M160 210L200 270"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-brand-teal opacity-90"
        />
        {/* Scale Dish Left */}
        <path
          d="M110 270H210C210 270 210 310 160 310C110 310 110 270 110 270Z"
          fill="currentColor"
          className="text-brand-teal"
        />

        {/* Hanging Strings Right */}
        <path
          d="M352 210L312 270M352 210L392 270"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="text-brand-teal opacity-90"
        />
        {/* Scale Dish Right */}
        <path
          d="M302 270H402C402 270 402 310 352 310C302 310 302 270 302 270Z"
          fill="currentColor"
          className="text-brand-teal"
        />

        {/* Central Flame above the scale pillar */}
        <path
          d="M256 60C256 60 210 110 210 150C210 185 230 210 256 210C282 210 302 185 302 150C302 110 256 60 256 60Z"
          fill="currentColor"
          className="text-brand-orange"
        />
        <path
          d="M256 95C256 95 226 130 226 155C226 175 238 190 256 190C274 190 286 175 286 155C286 130 256 95 256 95Z"
          fill="currentColor"
          className="text-brand-gold"
        />

        {/* Little sparks */}
        <circle cx="195" cy="115" r="7" fill="currentColor" className="text-brand-gold" />
        <circle cx="317" cy="115" r="7" fill="currentColor" className="text-brand-gold" />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display text-2xl font-extrabold tracking-tight text-brand-teal ${textClassName}`}>
            Ser <span className="text-brand-orange">Social</span>
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-teal-light -mt-1">
            Concursos
          </span>
        </div>
      )}
    </div>
  );
}
