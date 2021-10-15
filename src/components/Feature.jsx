import React from "react"
import {
	HiOutlineClipboard,
	HiOutlineCursorClick,
	HiOutlineLightningBolt,
	HiOutlineMoon,
} from "react-icons/hi";

export default function Feature() {
	
	const database = [
		{
			name: "No signup required",
			desc: "You don't need one more password to remember. Everything is ready for you to start writing.",
			icon: <HiOutlineCursorClick/>,
		},
		{
			name: "AutoSave",
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
			className="flex-grow flex flex-col justify-center items-center text-center bg-gray-100 hover:bg-gray-800 hover:text-gray-50 transition-all rounded-xl p-4">
			<span className="text-4xl">{props.icon}</span>
			<h2 className="font-bold text-xl uppercase my-8">
				{props.name}
			</h2>
			<p>{props.desc}</p>
		</div>
	);
	
	return (
		<div className="flex flex-wrap p-8 min-h-screen gap-4">
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
