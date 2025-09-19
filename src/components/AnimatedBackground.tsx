"use client"

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	const getParallaxStyle = (factorX: number, factorY: number) => {
		const { innerWidth, innerHeight } = window;
		const normX = (mouse.x / innerWidth) * 2 - 1;
		const normY = (mouse.y / innerHeight) * 2 - 1;
		const translateX = normX * factorX;
		const translateY = normY * factorY;
		return { transform: `translate3d(${translateX}px, ${translateY}px, 0)` } as React.CSSProperties;
	};

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div style={getParallaxStyle(24, 20)}>
				<div className="bubble-base bubble-xl float-med" style={{ top: "10%", left: "5%" }} />
			</div>
			<div style={getParallaxStyle(-20, 24)}>
				<div className="bubble-base bubble-lg float-med" style={{ top: "35%", right: "10%" }} />
			</div>
			<div style={getParallaxStyle(16, -20)}>
				<div className="bubble-base bubble-md float-med" style={{ bottom: "15%", left: "20%" }} />
			</div>
			<div style={getParallaxStyle(-12, 16)}>
				<div className="bubble-base bubble-sm float-med" style={{ bottom: "5%", right: "20%" }} />
			</div>
			<div style={getParallaxStyle(28, -12)}>
				<div className="bubble-base bubble-lg float-med" style={{ top: "70%", left: "55%" }} />
			</div>
		</div>
	);
};

export default AnimatedBackground;


