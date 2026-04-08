import React from "react";
import BsHero from "../components/bs/BsHero";
import BsFeatures from "../components/bs/BsFeatures";
import BsNewsletter from "../components/bs/BsNewsletter";

export default function HomeBootstrap() {
    return (
        <>
            <BsHero />
            <BsFeatures />
            <BsNewsletter />
        </>
    );
}