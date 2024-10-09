import { Guide } from "../guide";
import styles from "./helpAndSupport.module.css";

export function HelpAndSupport() {
  {
    const headingText: React.ReactNode = <>困ったことがあったら</>;
  
    return (
      <Guide headingText={headingText}>
        <p className={styles.info}>困ったときはインフォメーションセンターへ</p>
        <p className={styles.info}>インフォメーションセンターは迷子や落とし物、その他分からないことがあった時などのためにある相談所です。</p>
        <p className={styles.infoTroubles}>イベントの開催場所がわからない<br />一緒に来た人とはぐれてしまった<br />持ち物を無くしてしまった・・・</p>
        <p className={styles.info}>など様々なトラブルに対応します。<br />お困りの際は、インフォメーションセンターにお気軽においでください。<br/>また、会場内をスタッフが巡回しています。ジャンパーを着用した学生にお気軽にお声がけください。</p>
      </Guide>
    );
  }
}