import React, {useEffect, useState} from "react";
import {
	HiMoon,
	HiOutlineClipboard,
	HiOutlineCursorClick,
	HiOutlineLightningBolt,
	HiOutlineMoon,
	HiSun,
} from "react-icons/hi";

function Features() {
	
	const database = [
		{
			name: "No signup required",
			desc: "You don't need one more password to remember. Everything is ready for you to start writing.",
			icon: <HiOutlineCursorClick/>,
		},
		{
			name: "Autosave",
			desc: "Every single word you type is locally saved. Just close the browser and come back later if you want.",
			icon: <HiOutlineClipboard/>,
		},
		{
			name: "Night Mode",
			desc: "Switch between light and dark mode, keeping your eyes more comfortable at night.",
			icon: <HiOutlineMoon/>,
		},
		{
			name: "Distraction-Free",
			desc: "Keep you focused on writing and boost your productivity",
			icon: <HiOutlineLightningBolt/>,
		},
	];
	
	const Feature = (props) => (
		<div
			className="flex flex-col justify-center items-center text-center bg-gray-100 hover:bg-gray-800 hover:text-gray-50 transition-all rounded-xl p-4">
			<span className="text-4xl">{props.icon}</span>
			<h2 className="font-bold text-xl uppercase my-8">
				{props.name}
			</h2>
			<p>{props.desc}</p>
		</div>
	);
	
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
			{database.map((a, b) => (
				<Feature
					key={b}
					icon={a.icon}
					name={a.name}
					desc={a.desc}
				/>
			))}
		</div>
	);
}

function FocusWriter() {
	const [subject, setSubject] = useState("");
	const [content, setContent] = useState("");
	const [isDark, setIsDark] = useState(false);
	
	const handleSubject = (e) => {
		const {value} = e.target;
		setSubject(value);
		localStorage.setItem("subject", value);
	};
	
	const handleContent = (e) => {
		const {value} = e.target;
		setContent(value);
		localStorage.setItem("content", value);
	};
	
	const toggleTheme = () => {
		setIsDark(!isDark);
	};
	
	useEffect(() => {
		localStorage.getItem("subject") &&
		setSubject(localStorage.getItem("subject"));
		localStorage.getItem("content") &&
		setContent(localStorage.getItem("content"));
	}, []);
	
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
							onChange={handleSubject}
							placeholder="Subject"
							className={`${
								isDark
									? "bg-min-700 text-gray-50 border-4 border-gray-400"
									: "bg-gray-50"
							} lg:col-start-2 p-4 w-full outline-none focus:outline-none font-bold rounded-t-2xl border-b-4 transition-all duration-500`}
						/>
						<textarea
							value={content}
							onChange={handleContent}
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
						onClick={toggleTheme}
						className="text-4xl">
						{isDark ? (
							<HiMoon className="text-gray-100"/>
						) : (
							<HiSun className="text-yellow-500"/>
						)}
					</button>
				</div>
			</div>
			<div className="min-h-screen flex flex-col justify-center items-center p-8">
				{/* Footer */}
				<div className="flex flex-col justify-center items-center text-center p-8">
					<h1 className="font-bold text-2xl uppercase mb-4">
						Focus Writer
					</h1>
					<p className="text-xl italic">
						simple, distraction-free writing environment
					</p>
				</div>
				{/* Features */}
				<Features/>
			</div>
		</>
	);
}

export default FocusWriter;
