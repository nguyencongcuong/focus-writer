import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import Feature from "./Feature"
import {
	HiMoon,
	HiSun,
} from "react-icons/hi";

function FocusWriter() {
	const [subject, setSubject] = useLocalStorage("subject", "");
	const [content, setContent] = useLocalStorage("content", "");
	const [isDark, setIsDark] = useLocalStorage("isDark", false);
	
	return (
		<>
			{/* Writer */}
			<div
				className={`${
					isDark ? "bg-min-900" : "bg-gray-200"
				}  p-4 transition-all min-h-screen flex flex-col justify-evenly`}>
				<div className="flex flex-col justify-center items-center">
					<div className="grid grid-cols-1 lg:grid-cols-3 w-full">
						<input
							type="text"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							placeholder="Subject"
							className={`${
								isDark
									? "bg-min-700 text-gray-50 border-4 border-gray-400"
									: "bg-gray-50"
							} lg:col-start-2 p-4 w-full outline-none focus:outline-none font-bold rounded-t-2xl border-b-4 transition-all duration-500`}
						/>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							rows={18}
							placeholder="Content"
							className={`${
								isDark
									? "bg-min-700 text-gray-50 border-4 border-gray-400"
									: "bg-gray-50"
							} lg:col-start-2 p-4 w-full outline-none focus:outline-none rounded-b-2xl transition-all duration-500`}
						/>
					</div>
				</div>
				{/* Options */}
				<div className="flex justify-center items-center p-4">
					<button
						onClick={() => setIsDark(!isDark)}
						className="text-4xl">
						{isDark ? (
							<HiMoon className="text-gray-100"/>
						) : (
							<HiSun className="text-yellow-500"/>
						)}
					</button>
				</div>
			</div>
		</>
	);
}

export default FocusWriter;
