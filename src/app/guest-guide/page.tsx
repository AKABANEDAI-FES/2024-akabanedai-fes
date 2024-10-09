import { AdmissionInfo } from "@/components/site/admissionInfo";
import { Guidelines } from "@/components/site/guidelines";
import { HelpAndSupport } from "@/components/site/help-and-support";
import { Heading } from "@/components/site/heading";

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
