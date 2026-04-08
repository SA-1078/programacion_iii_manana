import React from "react";
import RBHero from "../components/rb/RBHero";
import RBCarousel from "../components/rb/RBCarousel";
import RBCardGrid from "../components/rb/RBCardGrid";
import RBNewsletter from "../components/rb/RBNewsletter";

export default function HomeRB() {
    return (
        <>
            <RBHero />
            <RBCarousel />
            <RBCardGrid />
            <RBNewsletter />
        </>
    );
}