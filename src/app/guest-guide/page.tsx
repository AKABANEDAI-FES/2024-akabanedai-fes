import { AdmissionInfo } from "@/components/site/admissionInfo";
import { Guidelines } from "@/components/site/guidelines";
import { Heading } from "@/components/site/heading";
import { HelpAndSupport } from "@/components/site/help-and-support";

export default function Page() {
	return (
		<>
			<Heading>ご来場の皆様へ</Heading>
			<AdmissionInfo />
			<Guidelines />
			<HelpAndSupport />
		</>
	);
}
