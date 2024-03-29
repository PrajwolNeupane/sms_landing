import ContactFormSection from "@/components/Contact Components/ContactFormSection";
import { Metadata } from "next";
import Image from "next/image";
import InstagramIcon from "../../../public/icons/InstagramIcon.svg";
import FacebookIcon from "../../../public/icons/FacebookIcon.svg";
import LinkedInIcon from "../../../public/icons/LinkedInIcon.svg";

export const metadata: Metadata = {
  title: "Shikshya | Contact",
};

// export default function Page() {
//   return (
//     <NonErrorLayout>
//       <ContactHeader />
//       <ContactFormSection />
//       <ContactFeature />
//     </NonErrorLayout>
//   );
// }

export default function Page() {
  return (
    <div className="flex flex-col bg-header-gradient  min-h-[100vh] gap-[25px] xl:px-[12%] lg:px-[7%] px-[5%] pt-28 justify-between">
      <div className="flex flex-col items-center w-full gap-[5%]">
        <h2 className="xl:text-xl lg:text-lg rg:text-rg text-md  font-semibold">
          Have Questions? <span className="text-brand-color">Contact Us</span>
        </h2>
        <p className="text-text-light md:text-xs text-xxs text-center">
          We are thrilled to introduce Shikshya, a comprehensive school{" "}
        </p>
      </div>
      <ContactFormSection />
      <div className="flex flex-row w-full py-8 justify-between items-center">
        <p className="text-text-medium text-xxs">© 2023 Shikshya. </p>
        <div className="flex flex-row gap-4">
          <Image src={FacebookIcon} alt="Facebook Icon" />
          <Image src={LinkedInIcon} alt="Instagram Icon" />
          <Image src={InstagramIcon} alt="Instagram Icon" />
        </div>
      </div>
    </div>
  );
}
