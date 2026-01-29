export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-6 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-8xl font-bold tracking-tighter mb-8">CAFETRIKE.ID</h2>
                    <p className="max-w-md text-neutral-400">
                        Redefining the art of coffee through precision, passion, and purity. Crafted for those who seek the extraordinary in the everyday.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-neutral-500">Explore</h3>
                    <ul className="space-y-4">
                        <li><a href="#about" className="hover:text-yellow-500 transition-colors">Our Story</a></li>
                        <li><a href="#products" className="hover:text-yellow-500 transition-colors">Shop Coffee</a></li>
                        <li><a href="https://maps.app.goo.gl/raayitafXm8d2rs86" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Locations</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Merch</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-neutral-500">Connect</h3>
                    <ul className="space-y-4">
                        <li><a href="https://www.instagram.com/cafetrike.id?igsh=eXpmMHBkN3B3em95" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Instagram</a></li>
                        <li><a href="https://wa.me/6285339333387" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">WhatsApp</a></li>
                        <li><a href="mailto:hello@cafetrike.id" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex justify-between text-sm text-neutral-600">
                <p>© 2026 Cafetrike.id All rights reserved.</p>
                <p>Designed by GenZdev</p>
            </div>
        </footer>
    );
}
