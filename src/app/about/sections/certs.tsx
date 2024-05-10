import { Skill } from "@/app/components/ui/Skill";

export default function Certs() {
  return (
    <>
      <p className="text-lg text-slate-100 mb-4">
        Here&apos;s a list of the{" "}
        <span className="border-b border-b-orange-400 hover:border-b-2 cursor-pointer select-none">
          Professional Certificates
        </span>{" "}
        I&apos;ve earned so far:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <Skill
          name="Google IT Support"
          file="gitsupport.png"
          href="https://www.credly.com/badges/36b52ef9-b4fe-475a-aae1-400452724d07/public_url"
          type="Professional Certificate"
          hover={false}
        />
        <Skill
          name="Google Data Analytics"
          href="#"
          file="gdataanalytics.png"
          type="Professional Certificate"
          hover={false}
        />
      </ul>
    </>
  );
}