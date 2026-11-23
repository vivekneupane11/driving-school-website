import { PageHero, Faq, Cta } from "@/components/Sections";
export const metadata = { title: "FAQ" };
export default function P() { return <><PageHero t="Frequently asked questions" s="Everything you need to know before your first lesson." crumb="FAQ" /><Faq /><Cta /></>; }
