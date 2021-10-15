import React, {useRef} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import {
	HiMoon,
	HiSun,
} from "react-icons/hi";

function FocusWriter() {
	const [subject, setSubject] = useLocalStorage("subject", "");
	const [content, setContent] = useLocalStorage("content", "");
	const [isDark, setIsDark] = useLocalStorage("isDark", false);
	
	const subjectRef = useRef(null)
	
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
							placeholder="Subject"
							ref={subjectRef}
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							className={`${
								isDark
									? "bg-min-800 text-gray-200"
									: "bg-gray-50"
							} lg:col-start-2 p-4 w-full outline-none focus:outline-none font-bold text-2xl rounded-t-2xl border-b-4 transition-all`}
						/>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							rows={16}
							placeholder="Content"
							className={`${
								isDark
									? "bg-min-800 text-gray-200"
									: "bg-gray-50"
							} lg:col-start-2 p-4 w-full outline-none focus:outline-none text-xl rounded-b-2xl transition-all`}
						/>
					</div>
				</div>
				{/* Options */}
				<div className="flex justify-center items-center p-4">
					<button
						onClick={() => {
							setIsDark(!isDark)
							subjectRef.current.focus()
						}}
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
