import { useEffect, useRef } from "react";
import { init } from "ityped";
import { Container } from "react-bootstrap";

import logo from "./tom&jerry.jpg";

import "./Header.css";

export function Header() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 2000,
            backSpeed: 70,
            strings: ["There's no place like", "Home means"],
        });
    }, []);

    return (
        <Container fluid>
            <div className="header">
                <div className="logo-place-holder">
                    <img src={logo} alt="logo" id="logo" />
                </div>
                <div className="text-place-holder">
                    <span ref={textRef}></span>
                    <h1>TOM</h1>
                </div>
            </div>
        </Container>
    );
}