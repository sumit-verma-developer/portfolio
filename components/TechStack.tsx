import React from "react";
import { techStack } from "../data";

const TechStack = () => {
    return (
        <div className="py-20" id="tech-stack">
            <h1 className="heading">
                My <span className="text-purple">Tech Stack</span>
            </h1>
            <p className="text-center text-white-100 mt-4 mb-10 text-sm md:text-base max-w-3xl mx-auto">
                Technologies and tools I use to build high-performance mobile applications
            </p>

            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* Core Technologies */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.core.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Native Development */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Native Development</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.native.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* State Management */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">State Management</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.stateManagement.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend Technologies */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Backend & APIs</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.apis.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                        {techStack.backend.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Performance Optimization */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.performance.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* UI & Styling */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">UI & Styling</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.ui.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Integrations */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.notifications.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                        {techStack.payments.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testing */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Testing</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.testing.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Deployment & CI/CD */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Deployment & CI/CD</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.deployment.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="bg-black-200 rounded-lg p-6 border border-white/[0.1] hover:border-purple/[0.5] transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">Development Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.tools.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-black-100 rounded-full text-sm text-white-100 border border-white/[0.1]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TechStack;
