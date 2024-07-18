import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success text-white bg-success" type="submit" style={{width:"200px !important"}}>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/fresh-gourmet-dessert-splashing-sweet-chocolate-liquid-generative-ai_188544-12404.jpg?t=st=1717857822~exp=1717861422~hmac=dc805b35087b77a1e837a9fb2a483cb00280db44c310625472efc29212abeb6f&w=996" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?t=st=1717857682~exp=1717861282~hmac=7bdb1e474cc76187da839c91c10c114fd023d2fa60aac8025f26c4c3c43bdde6&w=1060" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?t=st=1717857790~exp=1717861390~hmac=3f9ca269707d757ba409403b316906e3bbee1616d811017f68fa7c65f1fe1929&w=1060" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}



















<div>
                <div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                        <div className="carousel-inner" id="carousel">
                            <div className="carousel-caption" style={{ zIndex: "10" }}>
                                <div className="d-flex justify-content-center">

                                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit" style={{ width: "200px !important" }}>Search</button> */}
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" style={{ filter: "brightness(70%)", objectFit: "cover" }} alt="..." />
                                {/* <img src="https://img.freepik.com/free-photo/fresh-gourmet-dessert-splashing-sweet-chocolate-liquid-generative-ai_188544-12404.jpg?t=st=1717857822~exp=1717861422~hmac=dc805b35087b77a1e837a9fb2a483cb00280db44c310625472efc29212abeb6f&w=996" className="d-block w-100" style={{ filter: "brightness(60%)" }} alt="..." /> */}
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?t=st=1717857682~exp=1717861282~hmac=7bdb1e474cc76187da839c91c10c114fd023d2fa60aac8025f26c4c3c43bdde6&w=1060" className="d-block w-100" style={{ filter: "brightness(70%)", objectFit: "cover" }} alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?t=st=1717857790~exp=1717861390~hmac=3f9ca269707d757ba409403b316906e3bbee1616d811017f68fa7c65f1fe1929&w=1060" className="d-block w-100" style={{ filter: "brightness(70%)", objectFit: "cover" }} alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>