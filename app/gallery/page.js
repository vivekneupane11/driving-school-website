import { PageHero, Gallery, Cta } from "@/components/Sections";
export const metadata = { title: "Gallery" };
export default function P() { return <><PageHero t="Gallery" s="Moments from lessons and test days." /><Gallery count={16} more={false} /><Cta /></>; }
