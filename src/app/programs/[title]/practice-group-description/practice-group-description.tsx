import { QuestionIcon } from "@/components/icons/question";
import { XIcon } from "@/components/icons/x";
import { Popover } from "@ark-ui/react/popover";
import styles from "./practice-group-description.module.css";

export function PracticeGroupDescription() {
	return (
		<Popover.Root
			positioning={{
				placement: "bottom-end",
			}}
		>
			<Popover.Trigger className={styles.trigger}>
				<div className={styles.icon}>
					<QuestionIcon />
				</div>
				実習団体とは
			</Popover.Trigger>
			<Popover.Positioner className={styles.positioner}>
				<Popover.Content className={styles.content}>
					<Popover.Title className={styles.title}>実習団体とは</Popover.Title>
					<Popover.Description className={styles.description}>
						<p>
							情報連携学部の3年生がチームを組み、与えられたテーマである「生成AI」を用いて現代社会の問題を改善する提案を1年かけて制作する授業です。
						</p>
					</Popover.Description>
					<Popover.CloseTrigger className={styles.close}>
						<XIcon />
					</Popover.CloseTrigger>
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	);
}
