import { useEffect, useRef } from "react";
import { init } from "ityped";
import { Container } from "react-bootstrap";

import "./Header.css";

export function Header() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["There's no place like", "Home means"],
        });
    }, []);

    return (
        <Container fluid>
            <div className="header">
                <span ref={textRef}></span>
                <h1>TOM</h1>
            </div>
        </Container>
    );
}