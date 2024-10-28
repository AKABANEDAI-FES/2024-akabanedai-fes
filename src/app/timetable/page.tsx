import timetable1 from "@/assets/timetable1.png";
import timetable2 from "@/assets/timetable2.png";
import Image from "next/image";
import styles from "./timetable.module.css";

export default function Page() {
	return (
		<>
			<h1 className={styles.title}>タイムテーブル</h1>
			<div className={styles.content}>
				<Image
					src={timetable1.src}
					width={timetable1.width}
					height={timetable1.height}
					alt="timetable"
					className={styles.image}
				/>
				<Image
					src={timetable2.src}
					width={timetable2.width}
					height={timetable2.height}
					alt="timetable"
					className={styles.image}
				/>
			</div>
			<div className={styles.attention}>
				<p className={styles.item}>
					※タイムテーブルは変更になる場合がございます。ご了承ください。
				</p>
				<p className={styles.item}>
					※INIAD卒業生対象イベントはINIAD HUB-1の2階学生食堂で開催しています。
				</p>
			</div>
		</>
	);
}
