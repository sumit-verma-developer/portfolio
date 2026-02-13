import React from "react";
import { workExperience } from "../../data";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <p className="text-center text-white-100 mt-4 mb-12 text-sm md:text-base max-w-3xl mx-auto">
        Professional journey building high-performance mobile applications
      </p>

      <div className="w-full max-w-5xl mx-auto px-4 space-y-8">
        {workExperience.map((card, index) => (
          <div
            key={card.id}
            className="relative group"
          >
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple/50 to-blue-500/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            {/* Card content */}
            <div className="relative bg-black-100 rounded-2xl p-6 md:p-8 border border-white/[0.1] hover:border-purple/[0.3] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Icon */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black-200 rounded-xl p-3 flex items-center justify-center border border-white/[0.1]">
                    <img
                      src={card.thumbnail}
                      alt={card.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
                      {card.company}
                    </h2>
                    <h3 className="text-lg md:text-xl font-semibold text-purple mb-3">
                      {card.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white-100">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {card.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {card.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white-100 leading-relaxed text-sm md:text-base">
                    {card.desc}
                  </p>

                  {/* Achievements */}
                  {card.achievements && card.achievements.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-purple rounded"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {card.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-white-100 text-sm md:text-base"
                          >
                            <span className="text-purple mt-0.5 flex-shrink-0 font-bold">
                              •
                            </span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
