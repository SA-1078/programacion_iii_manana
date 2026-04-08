import React from "react";
import styles from "./styles/button.module.css";

export default function CssModuleDemo() {
    return (
        <div className={styles.wrap}>
            <h3 style={{ margin: "0 0 8px 0", color: "#58a6ff" }}>CSS Modules</h3>
            <button className={styles.btn}>Click CSS Module</button>
        </div>
    );
}