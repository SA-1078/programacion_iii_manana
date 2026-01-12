import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

export default function RBCarousel() {
    return (
        <section className="py-4 border-bottom">
            <Container>
                <h2 className="h4 fw-bold mb-3">Carrusel</h2>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src="https://picsum.photos/seed/rb1/1200/420"
                            alt="Slide 1"
                        />
                        <Carousel.Caption>
                            <h5 className="fw-bold">Slide 1</h5>
                            <p>Ejemplo de Carousel con React-Bootstrap.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src="https://picsum.photos/seed/rb2/1200/420"
                            alt="Slide 2"
                        />
                        <Carousel.Caption>
                            <h5 className="fw-bold">Slide 2</h5>
                            <p>Transiciones, captions y responsive incluido.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src="https://picsum.photos/seed/rb3/1200/420"
                            alt="Slide 3"
                        />
                        <Carousel.Caption>
                            <h5 className="fw-bold">Slide 3</h5>
                            <p>Ideal para banners o promociones.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}