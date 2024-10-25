"use client";
import { useState } from "react";
import styles from "./popover.module.css";

export const Popover = () => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopover = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.popoverContainer}>
			<button
				type="button"
				className={styles.popoverTrigger}
				onClick={togglePopover}
			>
				<p>
					<span className={styles.button}>?</span>実習団体とは
				</p>
			</button>
			{isOpen && (
				<div className={styles.popoverContent}>
					<p>
						実習団体とは:
						<br />
						情報連携学部の3年生がチームを組み、与えられたテーマである「生成AI」を用いて現代社会の問題を改善する提案を1年かけて制作する授業です。
					</p>
				</div>
			)}
		</div>
	);
};
