import React from "react";
import '../Assets/Aboutus.css';

const Aboutus = () => {
    return (
        <div className="bod">
            <div id="heade">
                <h1 className="logo">NEXT-GEN-ACADEMY<span className="logo_text">Learn, Grow, Succeed</span></h1>
                <ul id="navigation">
                    <li><a id="link-home" href="#home" className="button-1">About</a></li>
                    <li><a id="link-samples" href="#samples" className="button-1">My works</a></li>
                    <li><a id="link-offers" href="#offers" className="button-1">Skills</a></li>
                    <li><a id="link-products" href="#products" className="button-1">Links</a></li>
                    <li><a id="link-contact" href="#contact" className="button-1">Contacts</a></li>
                </ul>
            </div>
            <div id="home" className="content panel">
                <h2>About</h2>
                <p>X - company is committed to delivering innovative products to the marketplace. It is the number one priority of every GENECRAFT associate to ensure that our breakthroughs in technology, quality, and value will result in complete customer satisfaction.</p>
                <h3>Our profile</h3>
                <ul style={{ color: 'white' }}>
                    <li>PCR and PCR-based technologies;</li>
                    <li>cDNA technologies;</li>
                    <li>gene analysis;</li>
                    <li>and nucleic acid chemistry.</li>
                </ul>
                <p>Recently, the company has released a number of innovative products. The list of restriction enzymes offered by GeneCraft® includes some unique isoschizomeres, not provided by other suppliers. Several tools and kits for molecular biology are also offered.</p>
            </div>
            <div id="samples" className="content panel">
                <h2>Free Samples</h2>
                <p>Some really nice portfolio shots:</p>
            </div>
            <div id="offers" className="content panel">
                <h2>Special Offers</h2>
                <p>Some really nice portfolio shots:</p>
            </div>
            <div id="contact" className="content panel">
                <h2>Contacts</h2>
                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
                <p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
            </div>
            <div id="products" className="content panel">
                <h2>Products</h2>
            </div>
        </div>
    );
}

export default Aboutus;
