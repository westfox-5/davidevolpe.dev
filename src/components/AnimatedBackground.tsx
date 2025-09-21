"use client"

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [myWindow, setMyWindow] = useState({ innerWidth: 0, innerHeight: 0 });

		const getParallaxStyle = (factorX: number, factorY: number) => {
			const { innerWidth, innerHeight } = myWindow;
			const normX = (mouse.x / innerWidth) * 2 - 1;
			const normY = (mouse.y / innerHeight) * 2 - 1;
			// Aumenta i fattori per un effetto più marcato
			const translateX = normX * factorX;
			const translateY = normY * factorY;
			return { transform: `translate3d(${translateX}px, ${translateY}px, 0)` } as React.CSSProperties;
		};

	useEffect(() => {
		setMyWindow(window);
		const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="pointer-events-none fixed left-0 top-0 w-screen min-h-screen h-full z-0">
					<div style={getParallaxStyle(24, 20)}>
						<div className="bubble-base bubble-xl float-med" style={{ top: "-20%", left: "-4%" }} />
					</div>
					<div style={getParallaxStyle(-20, 24)}>
						<div className="bubble-base bubble-lg float-med" style={{ top: "30%", right: "8%" }} />
					</div>
		</div>
	);
};

export default AnimatedBackground;


